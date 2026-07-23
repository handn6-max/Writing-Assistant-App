import express from 'express';
import path from 'path';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini AI Client safely
  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  };

  // API Endpoint: Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // API Endpoint: Essay Evaluation against Level A1-A2 Criteria
  app.post('/api/gemini/evaluate', async (req, res) => {
    try {
      const { topicTitle, topicMinWords, essayText, grammarRules, teacherNotes } = req.body;

      if (!essayText || typeof essayText !== 'string') {
        return res.status(400).json({ error: 'Nội dung bài viết không được để trống.' });
      }

      const ai = getAiClient();

      const prompt = `Bạn là một giáo viên tiếng Anh chuyên chấm bài luận Level 2.1 (A1-A2) cho sinh viên cao đẳng tại Việt Nam.

HÃY ĐÁNH GIÁ BÀI VIẾT NÀY THEO CÁC TIÊU CHÍ CỤ THỂ BÊN DƯỚI:
- Tên chủ đề: "${topicTitle}"
- Số từ tối thiểu yêu cầu: ${topicMinWords || 150} từ
- Các điểm ngữ pháp trọng tâm chủ đề: ${JSON.stringify(grammarRules || [])}
${teacherNotes ? `- Ghi chú hướng dẫn/gợi ý của giảng viên: ${JSON.stringify(teacherNotes)}` : ''}

Đoạn văn của sinh viên:
"""
${essayText}
"""

Hãy chấm điểm và nhận xét chi tiết bằng TIẾNG VIỆT dễ hiểu, thân thiện, mang tính động viên cho sinh viên trình độ A1-A2.

Yêu cầu trả về JSON chuẩn theo đúng Schema:
1. score: Điểm tổng quát (thang điểm 10). Nếu bài viết < ${topicMinWords || 150} từ, hãy giảm bớt điểm số từ/độ dài.
2. wordCount: Tổng số từ thực tế của đoạn văn.
3. isWordCountPass: true nếu >= ${topicMinWords || 150} từ, false nếu < ${topicMinWords || 150} từ.
4. grammarScore: Điểm ngữ pháp (thang điểm 10).
5. vocabularyScore: Điểm từ vựng (thang điểm 10).
6. coherenceScore: Điểm mạch lạc & trả lời đủ câu hỏi (thang điểm 10).
7. overallFeedbackVi: Nhận xét tổng quan thân thiện bằng tiếng Việt (khoảng 3-4 câu).
8. strengthsVi: Danh sách 2-3 điểm tốt của bài viết bằng tiếng Việt.
9. grammarErrors: Mảng các lỗi ngữ pháp phát hiện được trong bài. Mỗi lỗi có:
   - original: Cụm từ/câu lỗi trong bài
   - correction: Cụm từ/câu đúng
   - explanationVi: Giải thích chi tiết bằng tiếng Việt lý do sai & quy tắc (Present Simple, Adverbs of frequency, there is/are, have to, past simple...)
10. vocabularySuggestions: 2-4 từ vựng/collocation A1-A2 nâng cao nên dùng thêm.
11. improvedEssay: Bài viết đã được sửa hoàn chỉnh, nâng cấp nhẹ giữ đúng ý sinh viên nhưng đạt điểm cao Level A1-A2 (đảm bảo >= ${topicMinWords || 150} từ).`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER, description: 'Điểm tổng quát 0-10' },
              wordCount: { type: Type.INTEGER, description: 'Số từ thực tế' },
              isWordCountPass: { type: Type.BOOLEAN, description: 'Đạt >=150 từ hay chưa' },
              grammarScore: { type: Type.NUMBER, description: 'Điểm ngữ pháp 0-10' },
              vocabularyScore: { type: Type.NUMBER, description: 'Điểm từ vựng 0-10' },
              coherenceScore: { type: Type.NUMBER, description: 'Điểm mạch lạc 0-10' },
              overallFeedbackVi: { type: Type.STRING, description: 'Nhận xét tổng quan tiếng Việt' },
              strengthsVi: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Danh sách các điểm mạnh',
              },
              grammarErrors: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    original: { type: Type.STRING },
                    correction: { type: Type.STRING },
                    explanationVi: { type: Type.STRING },
                  },
                  required: ['original', 'correction', 'explanationVi'],
                },
                description: 'Danh sách lỗi ngữ pháp',
              },
              vocabularySuggestions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'Gợi ý từ vựng hay',
              },
              improvedEssay: { type: Type.STRING, description: 'Bài văn mẫu hoàn chỉnh chuẩn A1-A2' },
            },
            required: [
              'score',
              'wordCount',
              'isWordCountPass',
              'grammarScore',
              'vocabularyScore',
              'coherenceScore',
              'overallFeedbackVi',
              'strengthsVi',
              'grammarErrors',
              'vocabularySuggestions',
              'improvedEssay',
            ],
          },
        },
      });

      const resultText = response.text || '{}';
      const resultData = JSON.parse(resultText);
      return res.json(resultData);
    } catch (error: any) {
      console.error('Error in /api/gemini/evaluate:', error);
      return res.status(500).json({
        error: 'Có lỗi xảy ra khi chấm bài viết bằng AI.',
        message: error?.message || String(error),
      });
    }
  });

  // API Endpoint: Suggest sentence completion / sentence boost
  app.post('/api/gemini/suggest-sentence', async (req, res) => {
    try {
      const { questionEn, questionVi, sentenceStarter, userDraft, topicTitle } = req.body;

      const ai = getAiClient();

      const prompt = `Bạn là trợ lý giảng dạy tiếng Anh cho sinh viên cao đẳng (Level A1-A2).
Chủ đề bài viết: "${topicTitle}"
Câu hỏi gợi ý: "${questionEn}" (${questionVi})
Mẫu mở đầu câu: "${sentenceStarter}"
Sinh viên đang viết dở: "${userDraft || ''}"

Hãy gợi ý 3 phương án hoàn thành câu trả lời này bằng tiếng Anh trình độ A1-A2 (đơn giản, chuẩn ngữ pháp, tự nhiên) kèm bản dịch tiếng Việt tương ứng.

Trả về JSON mảng 3 đối tượng:
[
  { "optionEn": "...", "optionVi": "..." },
  { "optionEn": "...", "optionVi": "..." },
  { "optionEn": "...", "optionVi": "..." }
]`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                optionEn: { type: Type.STRING },
                optionVi: { type: Type.STRING },
              },
              required: ['optionEn', 'optionVi'],
            },
          },
        },
      });

      const options = JSON.parse(response.text || '[]');
      return res.json({ suggestions: options });
    } catch (error: any) {
      console.error('Error in /api/gemini/suggest-sentence:', error);
      return res.status(500).json({
        error: 'Không thể tạo gợi ý câu.',
        message: error?.message || String(error),
      });
    }
  });

  // API Endpoint: AI Writing Mentor Q&A Chat
  app.post('/api/gemini/chat-assistant', async (req, res) => {
    try {
      const { message, topicTitle, currentEssay } = req.body;

      const ai = getAiClient();

      const prompt = `Bạn là Cô Giáo Trợ Lý Tiếng Anh AI thân thiện dành cho sinh viên cao đẳng Việt Nam đang học phần Writing Level 2.1 (Level A1-A2).
Chủ đề sinh viên đang học: "${topicTitle}"
Đoạn văn sinh viên đang viết hiện tại:
"""
${currentEssay || '(Chưa viết gì)'}
"""

Câu hỏi/Yêu cầu của sinh viên: "${message}"

Hãy giải đáp ngắn gọn, dễ hiểu, khích lệ sinh viên (1-3 câu ngắn hoặc gạch đầu dòng rõ ràng). Nếu sinh viên hỏi từ vựng hay ngữ pháp, hãy cho ví dụ minh họa bằng tiếng Anh A1-A2 đơn giản kèm dịch nghĩa tiếng Việt.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
      });

      return res.json({ reply: response.text });
    } catch (error: any) {
      console.error('Error in /api/gemini/chat-assistant:', error);
      return res.status(500).json({
        error: 'Không thể phản hồi thắc mắc.',
        message: error?.message || String(error),
      });
    }
  });

  // Vite development middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
