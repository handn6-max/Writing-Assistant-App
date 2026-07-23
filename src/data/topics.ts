import { Topic } from '../types';

export const TOPICS: Topic[] = [
  {
    id: 'topic-1',
    number: 1,
    titleEn: 'YOUR ACTIVITIES DURING A SCREEN-FREE WEEK',
    titleVi: 'Các hoạt động của bạn trong một tuần không sử dụng thiết bị điện tử',
    minWords: 150,
    descriptionVi: 'Mô tả thói quen sử dụng thiết bị điện tử hàng ngày và các hoạt động trong nhà, ngoài trời khi bạn tham gia thử thách 1 tuần không dùng màn hình.',
    sections: [
      {
        id: 'screen-routines',
        titleEn: 'Your screen routines',
        titleVi: 'Thói quen sử dụng màn hình/thiết bị',
        questions: [
          {
            id: 't1_q1',
            number: 1,
            questionEn: 'What technological devices do you use every day?',
            questionVi: 'Bạn sử dụng những thiết bị công nghệ nào hàng ngày?',
            hintVi: 'Kể tên các thiết bị như smartphone, laptop, tablet, smart TV...',
            sentenceStarter: 'Every day, I use various devices such as ',
            exampleAnswer: 'Every day, I use various devices such as my smartphone, my laptop, and a smart TV.'
          },
          {
            id: 't1_q2',
            number: 2,
            questionEn: 'Which do you use most often: a computer, a laptop or a phone?',
            questionVi: 'Bạn sử dụng thiết bị nào thường xuyên nhất: máy tính bàn, laptop hay điện thoại?',
            hintVi: 'So sánh mức độ sử dụng và đưa ra lý do ngắn gọn.',
            sentenceStarter: 'Among these devices, I use my ',
            exampleAnswer: 'Among these devices, I use my smartphone most often because it is very convenient for studying and chatting.'
          },
          {
            id: 't1_q3',
            number: 3,
            questionEn: 'How much time do you spend using it per day?',
            questionVi: 'Bạn dành bao nhiêu thời gian sử dụng thiết bị đó mỗi ngày?',
            hintVi: 'Sử dụng cấu trúc: I spend about... hours using it per day.',
            sentenceStarter: 'I spend about ',
            exampleAnswer: 'I spend about 5 to 6 hours using my phone per day for learning, watching videos, and scrolling social media.'
          }
        ]
      },
      {
        id: 'screen-free-activities',
        titleEn: 'Your activities during a screen-free week',
        titleVi: 'Hoạt động trong tuần không màn hình',
        questions: [
          {
            id: 't1_q4',
            number: 4,
            questionEn: 'Do you think you need a screen-free week? Why (not)?',
            questionVi: 'Bạn có nghĩ mình cần một tuần không dùng màn hình không? Tại sao (không)?',
            hintVi: 'Nêu suy nghĩ cá nhân: Yes, I do / No, I don’t vì tác hại của việc dùng điện thoại quá nhiều.',
            sentenceStarter: 'Yes, I think I definitely need a screen-free week because ',
            exampleAnswer: 'Yes, I think I definitely need a screen-free week because using screens too much makes my eyes tired and reduces my sleep quality.'
          },
          {
            id: 't1_q5',
            number: 5,
            questionEn: 'What indoor activities do you do during a screen-free week?',
            questionVi: 'Bạn làm những hoạt động trong nhà nào trong tuần không dùng màn hình?',
            hintVi: 'Kể tên 2-3 hoạt động trong nhà: đọc sách, nấu ăn, dọn dẹp, chơi board game.',
            sentenceStarter: 'During a screen-free week, for indoor activities, I ',
            exampleAnswer: 'During a screen-free week, for indoor activities, I usually read comic books, clean my room, and cook delicious meals with my mom.'
          },
          {
            id: 't1_q6',
            number: 6,
            questionEn: 'What outdoor activities do you do during a screen-free week?',
            questionVi: 'Bạn làm những hoạt động ngoài trời nào trong tuần không dùng màn hình?',
            hintVi: 'Kể các hoạt động ngoài trời: đá bóng, đánh cầu lông, đi dạo, làm vườn.',
            sentenceStarter: 'For outdoor activities, I often ',
            exampleAnswer: 'For outdoor activities, I often go jogging in the park near my house and play badminton with my friends.'
          }
        ]
      },
      {
        id: 'favorite-activity',
        titleEn: 'Your favorite activity',
        titleVi: 'Hoạt động yêu thích nhất',
        questions: [
          {
            id: 't1_q7',
            number: 7,
            questionEn: 'Which activity do you like most among these activities?',
            questionVi: 'Bạn thích hoạt động nào nhất trong số các hoạt động trên?',
            hintVi: 'Chọn 1 hoạt động tiêu biểu nhất.',
            sentenceStarter: 'Among all these activities, I like ',
            exampleAnswer: 'Among all these activities, I like playing badminton the most.'
          },
          {
            id: 't1_q8',
            number: 8,
            questionEn: 'When do you do it?',
            questionVi: 'Bạn thường làm việc đó vào khi nào?',
            hintVi: 'Dùng giới từ thời gian (in the afternoon, at 5 PM, on weekends...).',
            sentenceStarter: 'I usually do it ',
            exampleAnswer: 'I usually do it in the late afternoon from 5 PM to 6:30 PM on sunny days.'
          },
          {
            id: 't1_q9',
            number: 9,
            questionEn: 'Where do you do it?',
            questionVi: 'Bạn làm việc đó ở đâu?',
            hintVi: 'Dùng giới từ chỉ nơi chốn (at the local stadium, in the yard...).',
            sentenceStarter: 'I always do this activity at ',
            exampleAnswer: 'I always do this activity at the sports field near my apartment.'
          },
          {
            id: 't1_q10',
            number: 10,
            questionEn: 'Who do you do it with?',
            questionVi: 'Bạn làm việc đó với ai?',
            hintVi: 'Nêu tên hoặc mối quan hệ (with my classmate, my brother...).',
            sentenceStarter: 'I usually do it with ',
            exampleAnswer: 'I usually do it with my classmate Nam and my cousin.'
          },
          {
            id: 't1_q11',
            number: 11,
            questionEn: 'How do you feel when doing it?',
            questionVi: 'Bạn cảm thấy thế nào khi thực hiện hoạt động đó?',
            hintVi: 'Dùng tính từ miêu tả cảm xúc: energetic, relaxed, happy, refreshed.',
            sentenceStarter: 'When doing it, I feel ',
            exampleAnswer: 'When doing it, I feel extremely happy, energetic, and completely relaxed.'
          },
          {
            id: 't1_q12',
            number: 12,
            questionEn: 'Why do you like this activity the most?',
            questionVi: 'Tại sao bạn lại thích hoạt động này nhất?',
            hintVi: 'Lý do: nâng cao sức khỏe, kết nối bạn bè, quên đi căng thẳng.',
            sentenceStarter: 'I like this activity the most because ',
            exampleAnswer: 'I like this activity the most because it keeps my body healthy and gives me a great chance to chat with my friends without checking my phone.'
          }
        ]
      }
    ],
    grammarRules: [
      {
        title: 'Present Simple (Thì hiện tại đơn)',
        formula: 'S + V(s/es) + O | S + do/does NOT + V-bare',
        explanationVi: 'Dùng để diễn tả thói quen, hành động lặp đi lặp lại hàng ngày.',
        examples: [
          'I use my smartphone every day.',
          'He plays badminton twice a week.',
          'We do not spend too much time on screens.'
        ]
      },
      {
        title: 'Adverbs of Frequency (Trạng từ chỉ tần suất)',
        formula: 'Subject + Adverb (always, usually, often, sometimes, rarely, never) + Verb',
        explanationVi: 'Đứng TRƯỚC động từ thường và ĐỨNG SAU động từ to be.',
        examples: [
          'I always read books before sleeping.',
          'She usually goes jogging in the park.',
          'They rarely watch TV on weekdays.'
        ]
      },
      {
        title: 'Prepositions of Time (Giới từ chỉ thời gian)',
        formula: 'at + thời gian cụ thể / in + buổi, tháng, năm / on + thứ, ngày',
        explanationVi: 'Chỉ mốc thời gian diễn ra hoạt động.',
        examples: [
          'at 5 PM, at night',
          'in the morning, in the afternoon',
          'on weekends, on Sunday'
        ]
      }
    ],
    vocabularyCategories: [
      {
        categoryName: 'Everyday Activities (Hoạt động hàng ngày)',
        items: [
          { word: 'go jogging', meaning: 'đi chạy bộ', example: 'I go jogging in the park every morning.' },
          { word: 'play badminton', meaning: 'chơi cầu lông', example: 'My brother and I play badminton after class.' },
          { word: 'read comic books', meaning: 'đọc truyện tranh', example: 'I love reading comic books in my free time.' },
          { word: 'cook meals', meaning: 'nấu ăn', example: 'I cook meals with my family.' },
          { word: 'clean the room', meaning: 'dọn dẹp phòng', example: 'Cleaning the room keeps my house neat.' }
        ]
      },
      {
        categoryName: 'Devices & Time Expressions',
        items: [
          { word: 'technological devices', meaning: 'thiết bị công nghệ', example: 'Smartphones are useful technological devices.' },
          { word: 'screen-free week', meaning: 'tuần không dùng màn hình', example: 'A screen-free week helps me focus on real life.' },
          { word: 'spend time V-ing', meaning: 'dành thời gian làm gì', example: 'I spend 4 hours studying English.' },
          { word: 'reduce eye strain', meaning: 'giảm mỏi mắt', example: 'Taking a break helps reduce eye strain.' }
        ]
      }
    ],
    sampleEssay: {
      title: 'Sample Essay: A Screen-Free Week Experience',
      wordCount: 168,
      content: `Every day, I use several technological devices such as my laptop, smart TV, and smartphone. Among these devices, I use my smartphone most often because it is convenient for studying and keeping in touch with friends. Normally, I spend about six hours using my phone per day.

However, I think I definitely need a screen-free week to relax my eyes and reduce stress. During a screen-free week, for indoor activities, I usually read novels, clean my room, and cook dinner with my family. For outdoor activities, I often go jogging in the nearby park and play badminton.

Among these activities, I like playing badminton the most. I usually play it in the late afternoon from 5 PM to 6:30 PM at the sports center near my house with my classmate, Nam. When playing badminton, I feel energetic and joyful. I love this activity the most because it improves my physical health and brings me closer to my friends without digital distractions.`,
      highlightedGrammar: [
        { text: 'use', rule: 'Present Simple' },
        { text: 'use my smartphone most often', rule: 'Adverb phrase' },
        { text: 'spend about six hours', rule: 'Time expression' },
        { text: 'usually read novels', rule: 'Adverb of frequency + Verb' },
        { text: 'in the late afternoon', rule: 'Preposition of time (in)' },
        { text: 'at the sports center', rule: 'Preposition of place (at)' }
      ]
    },
    quizzes: [
      {
        id: 'q1_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct adverb placement: "I _____ go jogging in the afternoon."',
        options: ['always', 'am always', 'always am', 'go always'],
        correctAnswer: 'always',
        explanationVi: 'Trạng từ chỉ tần suất (always) đứng trước động từ thường (go).'
      },
      {
        id: 'q1_2',
        type: 'multiple_choice',
        prompt: 'Which preposition fits best? "I play sports _____ weekends."',
        options: ['at / on', 'in', 'to', 'for'],
        correctAnswer: 'at / on',
        explanationVi: 'Dùng "on weekends" hoặc "at weekends" để chỉ thời gian cuối tuần.'
      },
      {
        id: 'q1_3',
        type: 'fill_blank',
        prompt: 'He (spend) _____ 3 hours playing games every night.',
        correctAnswer: 'spends',
        explanationVi: 'Chủ ngữ "He" chia động từ hiện tại đơn thêm "s": spends.'
      }
    ]
  },
  {
    id: 'topic-2',
    number: 2,
    titleEn: 'YOUR DREAM JOB',
    titleVi: 'Công việc mơ ước của bạn',
    minWords: 150,
    descriptionVi: 'Mô tả công việc mơ ước, nhiệm vụ chính, lý do yêu thích, yêu cầu kỹ năng và kế hoạch chuẩn bị trong tương lai.',
    annotatedTeacherNotes: [
      'The job is popular in Vietnam.',
      'I like the job because of the high salary / I can be well paid.',
      'GR, IT: computer skills / English skills / IT: - I learn about coding. I will take a course about computer.'
    ],
    sections: [
      {
        id: 'dream-job-details',
        titleEn: 'Dream Job Overview & Motivation',
        titleVi: 'Tổng quan công việc mơ ước & Động lực',
        questions: [
          {
            id: 't2_q1',
            number: 1,
            questionEn: 'What is your dream job?',
            questionVi: 'Công việc mơ ước của bạn là gì?',
            hintVi: 'Kể tên ngành nghề: IT developer, Graphic designer, English teacher, Accountant, Hotel manager...',
            sentenceStarter: 'My dream job is to become a successful ',
            exampleAnswer: 'My dream job is to become a professional software developer in an international IT company.'
          },
          {
            id: 't2_q2',
            number: 2,
            questionEn: 'Is that job popular in your country?',
            questionVi: 'Công việc đó có phổ biến ở nước bạn không?',
            hintVi: 'Ghi chú lớp học: "The job is popular in Vietnam."',
            sentenceStarter: 'Yes, this job is very popular in Vietnam because ',
            exampleAnswer: 'Yes, this job is very popular in Vietnam because the technology industry is growing rapidly.'
          },
          {
            id: 't2_q3',
            number: 3,
            questionEn: 'Why do you like to do that job?',
            questionVi: 'Tại sao bạn thích làm công việc đó?',
            hintVi: 'Ghi chú gợi ý: "I like the job because of the high salary / I can be well paid."',
            sentenceStarter: 'I like to do this job because ',
            exampleAnswer: 'I like to do this job because I am passionate about technology and I can get a high salary to support my family.'
          },
          {
            id: 't2_q4',
            number: 4,
            questionEn: 'Who inspires you to follow that job?',
            questionVi: 'Ai là người truyền cảm hứng cho bạn theo đuổi công việc này?',
            hintVi: 'Bố mẹ, thầy cô, thần tượng, anh chị...',
            sentenceStarter: 'My uncle, who is a senior engineer, inspires me to follow ',
            exampleAnswer: 'My uncle, who is a senior software engineer, inspires me to follow this career path.'
          }
        ]
      },
      {
        id: 'job-description',
        titleEn: 'Tasks, Pros & Cons, Desired Environment',
        titleVi: 'Nhiệm vụ, Ưu/Nhược điểm & Môi trường làm việc',
        questions: [
          {
            id: 't2_q5',
            number: 5,
            questionEn: 'What do you do in that job? (describe the main tasks of that job)',
            questionVi: 'Bạn làm gì trong công việc đó? (mô tả nhiệm vụ chính)',
            hintVi: 'Nêu các nhiệm vụ: write code, fix errors, design websites, meet clients...',
            sentenceStarter: 'In this job, my main tasks are to ',
            exampleAnswer: 'In this job, my main tasks are to write computer code, design user-friendly applications, and fix software errors.'
          },
          {
            id: 't2_q6',
            number: 6,
            questionEn: 'What are some good things about that job?',
            questionVi: 'Điểm tốt/lợi ích của công việc đó là gì?',
            hintVi: 'Lương cao, môi trường năng động, giờ làm việc linh hoạt...',
            sentenceStarter: 'There are many good things about this job, such as ',
            exampleAnswer: 'There are many good things about this job, such as high income, creative tasks, and flexible working hours.'
          },
          {
            id: 't2_q7',
            number: 7,
            questionEn: 'What are some bad things about that job?',
            questionVi: 'Điểm chưa tốt/thách thức của công việc đó là gì?',
            hintVi: 'Ngồi lâu mỏi lưng, áp lực thời gian (deadline), căng thẳng mắt...',
            sentenceStarter: 'On the other hand, some bad things are ',
            exampleAnswer: 'On the other hand, some bad things are sitting in front of a computer for long hours and facing tight project deadlines.'
          },
          {
            id: 't2_q8',
            number: 8,
            questionEn: 'What do you want to get in this dream job?',
            questionVi: 'Bạn muốn có được điều gì ở công việc mơ ước này? (Môi trường, đồng nghiệp, lương, giờ làm...)',
            hintVi: 'Mô tả văn phòng hiện đại, đồng nghiệp thân thiện, lương cao.',
            sentenceStarter: 'In this dream job, I want to work in a ',
            exampleAnswer: 'In this dream job, I want to work in a modern office with friendly colleagues, get a attractive salary, and have good promotion opportunities.'
          }
        ]
      },
      {
        id: 'skills-preparation',
        titleEn: 'Required Skills & Preparation',
        titleVi: 'Kỹ năng cần thiết & Sự chuẩn bị',
        questions: [
          {
            id: 't2_q9',
            number: 9,
            questionEn: 'What skills do you need for this job?',
            questionVi: 'Bạn cần những kỹ năng gì cho công việc này?',
            hintVi: 'Ghi chú gợi ý: "computer skills / English skills / teamwork / problem-solving."',
            sentenceStarter: 'To do this job well, I need to have ',
            exampleAnswer: 'To do this job well, I need to have strong computer skills, good English communication skills, and effective teamwork abilities.'
          },
          {
            id: 't2_q10',
            number: 10,
            questionEn: 'What will you do to prepare for your dream job in the future?',
            questionVi: 'Bạn sẽ làm gì để chuẩn bị cho công việc mơ ước trong tương lai?',
            hintVi: 'Ghi chú gợi ý: "- I learn about coding. I will take a course about computer."',
            sentenceStarter: 'To prepare for my future career, I will ',
            exampleAnswer: 'To prepare for my future career, I will learn about coding every day, take an advanced computer course, and practice English regularly.'
          }
        ]
      }
    ],
    grammarRules: [
      {
        title: 'Simple Present (Thì hiện tại đơn)',
        formula: 'S + V(s/es) | S + be (am/is/are)',
        explanationVi: 'Miêu tả sự thật về công việc, nhiệm vụ hàng ngày.',
        examples: [
          'A software developer writes code every day.',
          'The job offers a high salary.'
        ]
      },
      {
        title: 'Have to / Don’t have to (Phải / Không phải làm gì)',
        formula: 'Subject + have to / has to + V-bare | don’t have to / doesn’t have to + V-bare',
        explanationVi: 'Dùng "have to" cho nghĩa bắt buộc công việc; "don\'t have to" khi không cần thiết.',
        examples: [
          'I have to practice English skills every day.',
          'Engineers don’t have to wear uniforms at office.'
        ]
      },
      {
        title: 'Future intention with "Will"',
        formula: 'Subject + will + V-bare',
        explanationVi: 'Diễn tả kế hoạch/dự định trong tương lai để chuẩn bị cho công việc.',
        examples: [
          'I will take a course about computer programming next month.',
          'I will study hard to pass the English exam.'
        ]
      }
    ],
    vocabularyCategories: [
      {
        categoryName: 'Work & Jobs Vocabulary',
        items: [
          { word: 'software developer', meaning: 'lập trình viên phần mềm', example: 'I dream of becoming a software developer.' },
          { word: 'high salary / well paid', meaning: 'mức lương cao / được trả lương tốt', example: 'I can be well paid in the IT sector.' },
          { word: 'main tasks', meaning: 'nhiệm vụ chính', example: 'My main tasks include writing code and designing apps.' },
          { word: 'working environment', meaning: 'môi trường làm việc', example: 'A professional working environment motivates me.' },
          { word: 'tight deadlines', meaning: 'thời hạn hoàn thành gấp', example: 'Developers sometimes work under tight deadlines.' }
        ]
      },
      {
        categoryName: 'Skills & Education Collocations',
        items: [
          { word: 'take a course about...', meaning: 'tham gia một khóa học về...', example: 'I will take a course about computers.' },
          { word: 'computer skills', meaning: 'kỹ năng tin học', example: 'Good computer skills are essential for this job.' },
          { word: 'English communication skills', meaning: 'kỹ năng giao tiếp tiếng Anh', example: 'I practice English skills every evening.' },
          { word: 'learn about coding', meaning: 'học về lập trình', example: 'I spend 2 hours learning about coding.' }
        ]
      }
    ],
    sampleEssay: {
      title: 'Sample Essay: My Dream Job as an IT Engineer',
      wordCount: 172,
      content: `My dream job is to become a software developer in an international technology corporation. This job is currently very popular in Vietnam because the IT industry is booming. I like this job because I am passionate about technology and I can be well paid with a high salary. My uncle, who is a senior IT manager, inspires me to pursue this career.

In this job, I have to write computer code, build mobile applications, and fix software bugs. The good things about this job are the flexible working hours and the dynamic office setting. However, the bad things are sitting for long periods and experiencing eye strain. In this dream job, I want to get a competitive salary, supportive colleagues, and a modern workplace. 

To succeed, I need solid computer skills, English skills, and problem-solving abilities. In the future, I will take a specialized course about computers, learn about coding every day, and study hard to improve my English fluency.`,
      highlightedGrammar: [
        { text: 'is to become', rule: 'Present Simple' },
        { text: 'popular in Vietnam', rule: 'Adjective phrase' },
        { text: 'be well paid with a high salary', rule: 'Teacher Annotation Vocabulary' },
        { text: 'have to write computer code', rule: 'have to + V-bare' },
        { text: 'will take a specialized course', rule: 'Will + V-bare' },
        { text: 'learn about coding', rule: 'Teacher Annotation' }
      ]
    },
    quizzes: [
      {
        id: 'q2_1',
        type: 'multiple_choice',
        prompt: 'Fill in the blank: "An IT developer _____ wear a uniform at work."',
        options: ['doesn\'t have to', 'don\'t have to', 'has to not', 'not have to'],
        correctAnswer: 'doesn\'t have to',
        explanationVi: 'Chủ ngữ ngôi thứ 3 số ít (An IT developer) dùng "doesn\'t have to".'
      },
      {
        id: 'q2_2',
        type: 'multiple_choice',
        prompt: 'Choose the correct future form: "Next term, I _____ a computer course."',
        options: ['will take', 'take will', 'taking', 'will taking'],
        correctAnswer: 'will take',
        explanationVi: 'Cấu trúc tương lai đơn: will + động từ nguyên mẫu (will take).'
      },
      {
        id: 'q2_3',
        type: 'fill_blank',
        prompt: 'I want to do this job because I can be well _____ (pay).',
        correctAnswer: 'paid',
        explanationVi: 'Cụm từ "be well paid" nghĩa là được trả lương thỏa đáng.'
      }
    ]
  },
  {
    id: 'topic-3',
    number: 3,
    titleEn: 'YOUR FAVOURITE PLACE IN TOWN/ CITY',
    titleVi: 'Địa điểm yêu thích của bạn ở thị trấn/thành phố',
    minWords: 150,
    descriptionVi: 'Giới thiệu về địa điểm yêu thích (vị trí, không khí, cơ sở vật chất, hoạt động) và chia sẻ trải nghiệm cá nhân.',
    sections: [
      {
        id: 'overall-info',
        titleEn: 'Overall Information',
        titleVi: 'Thông tin chung',
        questions: [
          {
            id: 't3_q1',
            number: 1,
            questionEn: 'What is your favorite place in town/city?',
            questionVi: 'Địa điểm yêu thích của bạn ở thị trấn/thành phố là gì?',
            hintVi: 'Kể tên địa điểm: public library, city park, cozy coffee shop, shopping mall, local bookstore...',
            sentenceStarter: 'My favorite place in my city is ',
            exampleAnswer: 'My favorite place in my city is the Central City Library on Le Loi Street.'
          },
          {
            id: 't3_q2',
            number: 2,
            questionEn: 'Where is it located?',
            questionVi: 'Địa điểm đó nằm ở đâu?',
            hintVi: 'Nêu vị trí: in the city center, near my college, opposite the park...',
            sentenceStarter: 'It is located in ',
            exampleAnswer: 'It is located in the heart of the city center, right opposite the main park.'
          },
          {
            id: 't3_q3',
            number: 3,
            questionEn: 'How far is it from your house to that place?',
            questionVi: 'Từ nhà bạn đến địa điểm đó xa bao nhiêu?',
            hintVi: 'Khoảng cách: about 2 kilometers, 5 hundred meters...',
            sentenceStarter: 'It is about ',
            exampleAnswer: 'It is about 3 kilometers away from my house.'
          },
          {
            id: 't3_q4',
            number: 4,
            questionEn: 'How do you get there?',
            questionVi: 'Bạn đến đó bằng phương tiện gì?',
            hintVi: 'Phương tiện: by motorbike, by bus, on foot, by electric bicycle...',
            sentenceStarter: 'I usually get there by ',
            exampleAnswer: 'I usually get there by electric motorbike or by taking the line 05 bus.'
          },
          {
            id: 't3_q5',
            number: 5,
            questionEn: 'How is the atmosphere of this place? (lively, calm, or busy, etc.)',
            questionVi: 'Không khí ở địa điểm đó như thế nào? (sôi động, yên bình, nhộn nhịp...)',
            hintVi: 'Sử dụng tính từ miêu tả: peaceful, quiet, calm, lively, bustling, cozy.',
            sentenceStarter: 'The atmosphere of this place is very ',
            exampleAnswer: 'The atmosphere of this place is very calm, quiet, and peaceful, making it perfect for reading.'
          },
          {
            id: 't3_q6',
            number: 6,
            questionEn: 'What facilities are there (restrooms, seating areas, or food options)?',
            questionVi: 'Ở đó có những cơ sở vật chất nào (nhà vệ sinh, khu vực ngồi, đồ ăn...)?',
            hintVi: 'Sử dụng cấu trúc "There is / There are": clean restrooms, comfortable wooden desks, air conditioners...',
            sentenceStarter: 'There are many modern facilities such as ',
            exampleAnswer: 'There are many modern facilities such as comfortable seating areas, air conditioners, clean restrooms, and a small cafe.'
          },
          {
            id: 't3_q7',
            number: 7,
            questionEn: 'What activities or events take place there?',
            questionVi: 'Những hoạt động hay sự kiện nào diễn ra ở đó?',
            hintVi: 'Triển lãm sách, hội thảo học tập, đọc truyện cho thiếu nhi...',
            sentenceStarter: 'Various interesting events take place here, including ',
            exampleAnswer: 'Various interesting events take place here, including weekend book fairs, reading clubs, and photo exhibitions.'
          },
          {
            id: 't3_q8',
            number: 8,
            questionEn: 'What do you often do there?',
            questionVi: 'Bạn thường làm gì ở đó?',
            hintVi: 'Đọc sách, làm bài tập nhóm, thư giãn, uống cà phê...',
            sentenceStarter: 'When I visit this place, I often ',
            exampleAnswer: 'When I visit this place, I often read foreign novels, do assignment research, and review my English lessons.'
          }
        ]
      },
      {
        id: 'your-experience',
        titleEn: 'Your Experience & Recommendation',
        titleVi: 'Trải nghiệm cá nhân & Đề xuất',
        questions: [
          {
            id: 't3_q9',
            number: 9,
            questionEn: 'What do you like about that place?',
            questionVi: 'Bạn thích điều gì ở địa điểm đó?',
            hintVi: 'Thích sự yên tĩnh, nhân viên thân thiện, ánh sáng tự nhiên...',
            sentenceStarter: 'What I like most about this place is ',
            exampleAnswer: 'What I like most about this place is its wide range of books and the extremely friendly library staff.'
          },
          {
            id: 't3_q10',
            number: 10,
            questionEn: 'What do you dislike about that place?',
            questionVi: 'Bạn không thích điều gì ở địa điểm đó?',
            hintVi: 'Đôi khi đông đúc, chỗ đỗ xe nhỏ...',
            sentenceStarter: 'The only thing I dislike is that ',
            exampleAnswer: 'The only thing I dislike is that the parking lot is quite small and gets full quickly on Saturday mornings.'
          },
          {
            id: 't3_q11',
            number: 11,
            questionEn: 'Would you recommend this place to visitors? Why?',
            questionVi: 'Bạn có giới thiệu địa điểm này cho khách tham quan không? Tại sao?',
            hintVi: 'Có/Không và đưa ra lý do thuyết phục.',
            sentenceStarter: 'I would definitely recommend this place to visitors because ',
            exampleAnswer: 'I would definitely recommend this place to visitors because it is an inspiring space to relax and learn.'
          }
        ]
      }
    ],
    grammarRules: [
      {
        title: 'There is / There are (Có cái gì ở đâu)',
        formula: 'There is + singular noun / uncountable noun | There are + plural nouns',
        explanationVi: 'Dùng để miêu tả sự tồn tại của cơ sở vật chất, đồ đạc.',
        examples: [
          'There is a cozy cafe on the first floor.',
          'There are many comfortable chairs and wide tables.'
        ]
      },
      {
        title: 'Prepositions of Place (Giới từ chỉ nơi chốn)',
        formula: 'in, at, on, opposite, next to, behind, in front of, between... and...',
        explanationVi: 'Chỉ vị trí địa lý chính xác của địa điểm.',
        examples: [
          'It is located on Main Street, opposite the city park.',
          'The library is next to a quiet coffee shop.'
        ]
      },
      {
        title: 'Descriptive Adjectives',
        formula: 'Subject + be + Adjective | Adjective + Noun',
        explanationVi: 'Sử dụng các tính từ miêu tả không khí và diện mạo.',
        examples: [
          'The atmosphere is peaceful and spacious.',
          'It has modern facilities and clean restrooms.'
        ]
      }
    ],
    vocabularyCategories: [
      {
        categoryName: 'Places & Location Vocabulary',
        items: [
          { word: 'located in the center', meaning: 'nằm ở trung tâm', example: 'The park is located in the center of town.' },
          { word: 'opposite to...', meaning: 'đối diện với...', example: 'It sits opposite to the high school.' },
          { word: 'within walking distance', meaning: 'trong khoảng cách đi bộ', example: 'The bookstore is within walking distance.' },
          { word: 'peaceful atmosphere', meaning: 'không khí yên bình', example: 'I love the peaceful atmosphere here.' }
        ]
      },
      {
        categoryName: 'Facilities & Description Adjectives',
        items: [
          { word: 'seating area', meaning: 'khu vực ngồi', example: 'There is a large seating area outdoors.' },
          { word: 'clean restrooms', meaning: 'nhà vệ sinh sạch sẽ', example: 'The building provides clean restrooms.' },
          { word: 'spacious & bright', meaning: 'rộng rãi & sáng sủa', example: 'The reading room is spacious and bright.' },
          { word: 'recommend to visitors', meaning: 'giới thiệu cho du khách', example: 'I highly recommend this park to visitors.' }
        ]
      }
    ],
    sampleEssay: {
      title: 'Sample Essay: My Favorite Place in Town - City Library',
      wordCount: 165,
      content: `My favorite place in my city is the Central City Library. It is located on Tran Phu Street, right in the heart of the city center. It is about two kilometers away from my house, so I usually get there by motorbike in just five minutes.

The atmosphere of the library is wonderfully calm and quiet. Inside the building, there is a large reading hall with soft lighting. There are also clean restrooms, comfortable wooden desks, and a beverage counter with tea and coffee. Every month, interesting book exhibitions and learning workshops take place here. I often go there on weekends to read novels, study for exams, and write essay assignments.

What I like most about this place is its peaceful environment and helpful librarians. The only thing I dislike is that it closes early at 7 PM. I would strongly recommend this library to visitors because it is a fantastic spot to gain knowledge and escape from city noise.`,
      highlightedGrammar: [
        { text: 'is located on Tran Phu Street', rule: 'Preposition of place (on)' },
        { text: 'there is a large reading hall', rule: 'There is + singular noun' },
        { text: 'There are also clean restrooms', rule: 'There are + plural nouns' },
        { text: 'calm and quiet', rule: 'Descriptive adjectives' },
        { text: 'recommend this library to visitors', rule: 'Collocation' }
      ]
    },
    quizzes: [
      {
        id: 'q3_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct form: "_____ two clean restrooms on the ground floor."',
        options: ['There are', 'There is', 'It is', 'There have'],
        correctAnswer: 'There are',
        explanationVi: 'Danh từ số nhiều "two clean restrooms" dùng "There are".'
      },
      {
        id: 'q3_2',
        type: 'multiple_choice',
        prompt: 'Select the appropriate preposition: "The cafe is located _____ Nguyen Hue Street."',
        options: ['on', 'at', 'in', 'under'],
        correctAnswer: 'on',
        explanationVi: 'Tên đường dùng giới từ "on" (on Nguyen Hue Street).'
      },
      {
        id: 'q3_3',
        type: 'fill_blank',
        prompt: 'The library is right _____ (opposite) the main square.',
        correctAnswer: 'opposite',
        explanationVi: 'Giới từ "opposite" mang nghĩa đối diện.'
      }
    ]
  },
  {
    id: 'topic-4',
    number: 4,
    titleEn: 'FORMS OF ENTERTAINMENT IN THE PAST AND IN THE PRESENT',
    titleVi: 'Các hình thức giải trí trong quá khứ và hiện tại',
    minWords: 150,
    descriptionVi: 'So sánh giải trí xưa và nay (hoạt động, âm nhạc, phim ảnh), nguyên nhân thay đổi và nêu sở thích cá nhân.',
    sections: [
      {
        id: 'entertainment-past',
        titleEn: 'Forms of Entertainment in the Past',
        titleVi: 'Giải trí trong quá khứ',
        questions: [
          {
            id: 't4_q1',
            number: 1,
            questionEn: 'What did people do for fun in the past?',
            questionVi: 'Mọi người đã làm gì để giải trí trong quá khứ?',
            hintVi: 'Kể các hoạt động quá khứ: listen to radio, play folk games, gather around to talk...',
            sentenceStarter: 'In the past, people used to ',
            exampleAnswer: 'In the past, people used to play traditional folk games, listen to radio programs, and tell stories around the fire.'
          },
          {
            id: 't4_q2',
            number: 2,
            questionEn: 'What was the most popular form of entertainment when technology did not develop?',
            questionVi: 'Hình thức giải trí phổ biến nhất khi công nghệ chưa phát triển là gì?',
            hintVi: 'Trò chơi dân gian ngoài trời, nghe đài phát thanh, xem múa rối...',
            sentenceStarter: 'When technology was not developed, the most popular form of entertainment was ',
            exampleAnswer: 'When technology was not developed, the most popular form of entertainment was playing outdoor games like hide and seek.'
          },
          {
            id: 't4_q3',
            number: 3,
            questionEn: 'What kinds of music were popular in the past?',
            questionVi: 'Những thể loại âm nhạc nào phổ biến trong quá khứ?',
            hintVi: 'Nhạc dân ca (folk music), nhạc cổ điển, nhạc vàng...',
            sentenceStarter: 'In the past, popular kinds of music were ',
            exampleAnswer: 'In the past, popular kinds of music were traditional folk music, acoustic songs, and classical melodies.'
          },
          {
            id: 't4_q4',
            number: 4,
            questionEn: 'What kinds of movies were popular in the past?',
            questionVi: 'Những thể loại phim nào phổ biến trong quá khứ?',
            hintVi: 'Phim trắng đen, phim lịch sử, cải lương kịch...',
            sentenceStarter: 'People in the past mainly watched ',
            exampleAnswer: 'People in the past mainly watched black-and-white movies, historical dramas, and stage plays.'
          }
        ]
      },
      {
        id: 'entertainment-present',
        titleEn: 'Forms of Entertainment in the Present',
        titleVi: 'Giải trí ở hiện tại',
        questions: [
          {
            id: 't4_q5',
            number: 5,
            questionEn: 'What do young people do for fun nowadays?',
            questionVi: 'Giới trẻ hiện nay làm gì để giải trí?',
            hintVi: 'Lướt MXH, chơi game online, xem TikTok, đi cafe...',
            sentenceStarter: 'Nowadays, young people usually ',
            exampleAnswer: 'Nowadays, young people usually surf social media, play online video games, and stream videos on YouTube.'
          },
          {
            id: 't4_q6',
            number: 6,
            questionEn: 'What is the most popular form of entertainment?',
            questionVi: 'Hình thức giải trí phổ biến nhất hiện nay là gì?',
            hintVi: 'Sử dụng smartphone, xem Netflix, mua sắm online...',
            sentenceStarter: 'Currently, the most popular form of entertainment is ',
            exampleAnswer: 'Currently, the most popular form of entertainment is using smartphones to watch short videos and play games.'
          },
          {
            id: 't4_q7',
            number: 7,
            questionEn: 'What kinds of music are popular now?',
            questionVi: 'Những thể loại nhạc nào đang phổ biến hiện nay?',
            hintVi: 'Pop, K-pop, Hip-hop, EDM, Rap...',
            sentenceStarter: 'The music market today is dominated by ',
            exampleAnswer: 'The music market today is dominated by modern Pop, K-pop, Hip-hop, and EDM music.'
          },
          {
            id: 't4_q8',
            number: 8,
            questionEn: 'What kinds of movies are popular now?',
            questionVi: 'Những thể loại phim nào đang phổ biến hiện nay?',
            hintVi: 'Phim hành động, bom tấn siêu hót, phim viễn tưởng, phim hoạt hình 3D...',
            sentenceStarter: 'Now, audiences love watching ',
            exampleAnswer: 'Now, audiences love watching action blockbusters, superhero movies, and sci-fi films with 3D effects.'
          }
        ]
      },
      {
        id: 'entertainment-comparison',
        titleEn: 'Comparison & Personal Preference',
        titleVi: 'So sánh & Sở thích cá nhân',
        questions: [
          {
            id: 't4_q9',
            number: 9,
            questionEn: 'What are the differences between forms of entertainment in the past and those in the present? What causes those differences?',
            questionVi: 'Điểm khác biệt giữa giải trí xưa và nay là gì? Điều gì gây ra sự khác biệt đó?',
            hintVi: 'Xưa: kết nối trực tiếp, ngoài trời. Nay: số hóa, trên màn hình. Nguyên nhân: sự phát triển của công nghệ.',
            sentenceStarter: 'The key difference is that past entertainment was ',
            exampleAnswer: 'The key difference is that past entertainment was more social and active, while present entertainment is digital. Rapid technology development causes these changes.'
          },
          {
            id: 't4_q10',
            number: 10,
            questionEn: 'Which do you prefer: forms of entertainment in the past or in the present? Why?',
            questionVi: 'Bạn thích hình thức giải trí nào hơn: quá khứ hay hiện tại? Tại sao?',
            hintVi: 'Sử dụng cấu trúc "I prefer... because...": thuận tiện, phong phú, kết nối nhanh chóng.',
            sentenceStarter: 'I prefer forms of entertainment in the ',
            exampleAnswer: 'I prefer forms of entertainment in the present because they are extremely convenient and offer endless choices anytime.'
          }
        ]
      }
    ],
    grammarRules: [
      {
        title: 'Past Simple (Thì quá khứ đơn)',
        formula: 'S + V2/V-ed | S + was/were',
        explanationVi: 'Miêu tả các hoạt động giải trí trong quá khứ đã kết thúc.',
        examples: [
          'In the past, people played traditional games.',
          'Folk music was very popular 30 years ago.'
        ]
      },
      {
        title: 'Likes and Dislikes / Preference',
        formula: 'prefer A to B | like V-ing better than V-ing | enjoy + V-ing',
        explanationVi: 'Diễn tả sự yêu thích và so sánh giữa xưa và nay.',
        examples: [
          'I prefer playing online games to watching TV.',
          'Young people enjoy listening to K-pop music.'
        ]
      },
      {
        title: 'Contrast Connectors (Từ nối đối lập)',
        formula: 'while / whereas / however / on the other hand',
        explanationVi: 'Nối các ý so sánh giữa quá khứ và hiện tại.',
        examples: [
          'Past entertainment was physical, while present entertainment is digital.',
          'In the past people gathered outside; however, now they stay indoors.'
        ]
      }
    ],
    vocabularyCategories: [
      {
        categoryName: 'Past Entertainment & Time Expressions',
        items: [
          { word: 'traditional folk games', meaning: 'trò chơi dân gian truyền thống', example: 'Children played traditional folk games in the yard.' },
          { word: 'listen to radio broadcasts', meaning: 'nghe đài phát thanh', example: 'Families listened to radio broadcasts together.' },
          { word: 'black-and-white movies', meaning: 'phim trắng đen', example: 'My grandparents loved black-and-white movies.' },
          { word: 'in the past / years ago', meaning: 'trong quá khứ / nhiều năm trước', example: 'In the past, life was simpler.' }
        ]
      },
      {
        categoryName: 'Present Entertainment & Contrast',
        items: [
          { word: 'stream video content', meaning: 'phát video trực tuyến', example: 'We stream video content on laptops.' },
          { word: 'online video games', meaning: 'trò chơi điện tử trực tuyến', example: 'Playing online video games is very popular.' },
          { word: 'rapid technology growth', meaning: 'sự phát triển nhanh của công nghệ', example: 'Rapid technology growth changed our habits.' },
          { word: 'prefer present forms', meaning: 'thích các hình thức hiện tại hơn', example: 'I prefer present forms of fun.' }
        ]
      }
    ],
    sampleEssay: {
      title: 'Sample Essay: Comparing Past and Present Entertainment',
      wordCount: 178,
      content: `Entertainment has changed significantly over time. In the past, when technology was not developed, people used to play traditional folk games and gather together in the evening to tell stories. The most popular forms of music were folk songs, and people enjoyed watching black-and-white movies on old television sets.

In contrast, young people nowadays spend most of their free time surfing social media and playing online video games. Currently, streaming movies on digital platforms and listening to modern Pop or K-pop are the most popular activities. 

The primary difference is that entertainment in the past was physical, interactive, and outdoor-oriented, whereas modern entertainment is digital and screen-based. This big change is caused by the rapid development of technology and internet connection. Personally, I prefer forms of entertainment in the present because they are convenient, rich in choices, and allow me to connect with global trends quickly.`,
      highlightedGrammar: [
        { text: 'used to play traditional folk games', rule: 'Past Simple / habit in past' },
        { text: 'enjoyed watching', rule: 'enjoy + V-ing' },
        { text: 'nowadays spend', rule: 'Present Simple' },
        { text: 'whereas modern entertainment is digital', rule: 'Contrast connector (whereas)' },
        { text: 'I prefer forms of entertainment', rule: 'Expressing preference' }
      ]
    },
    quizzes: [
      {
        id: 'q4_1',
        type: 'multiple_choice',
        prompt: 'Choose the correct past form: "In 1990, people _____ (listen) to the radio every evening."',
        options: ['listened', 'listening', 'were listen', 'are listened'],
        correctAnswer: 'listened',
        explanationVi: 'Quá khứ đơn của "listen" là "listened".'
      },
      {
        id: 'q4_2',
        type: 'multiple_choice',
        prompt: 'Fill in: "I prefer playing sports _____ watching online videos."',
        options: ['to', 'than', 'over than', 'with'],
        correctAnswer: 'to',
        explanationVi: 'Cấu trúc so sánh thích cái gì hơn cái gì: prefer A to B.'
      },
      {
        id: 'q4_3',
        type: 'fill_blank',
        prompt: 'Past games were outdoor, _____ (while) present games are digital.',
        correctAnswer: 'while',
        explanationVi: 'Dùng "while" để thể hiện sự đối lập giữa hai mệnh đề.'
      }
    ]
  }
];
