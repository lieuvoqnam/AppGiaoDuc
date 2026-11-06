/**
 * english-4-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tiếng Anh Lớp 4 (English 4)
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018 (Global Success, Family & Friends)
 * Tích hợp công nghệ Text-to-Speech phát âm chuẩn tiếng Anh bản xứ.
 */

window.ENGLISH4_DATA = {
  topics: [
    {
      id: "me_and_my_friends",
        terms: [1],
      name: "Me and My Friends",
      icon: "🌍",
      desc: "Countries & Nationalities, Daily Routines, Telling the Time, Days of the Week & Birthdays.",
      theory: {
        highlights: [
          {
            icon: "🚩",
            title: "Countries & Nationalities",
            english: "Where are you from? I'm from Vietnam. I am Vietnamese.",
            content: "• <strong>Hỏi quê hương:</strong> Where are you from? ➔ I'm from + [Tên đất nước].<br/>• <strong>Quốc tịch:</strong> I am + [Tên quốc tịch].<br/>• Vietnam ➔ Vietnamese | America ➔ American | England ➔ English | Japan ➔ Japanese | Australia ➔ Australian | Singapore ➔ Singaporean."
          },
          {
            icon: "⏰",
            title: "Telling the Time & Daily Routines",
            english: "What time is it? It's seven o'clock. I go to school at seven fifteen.",
            content: "• <strong>Hỏi giờ:</strong> What time is it? ➔ It's + [giờ] o'clock (giờ chẵn) / It's [giờ] [phút].<br/>• <strong>Hoạt động hàng ngày:</strong> get up (thức dậy), have breakfast (ăn sáng), go to school (đi học), have dinner (ăn tối), go to bed (đi ngủ).<br/>• <strong>Cấu trúc:</strong> What time do you [hoạt động]? ➔ I [hoạt động] at [giờ]."
          },
          {
            icon: "📅",
            title: "Days, Months & Birthdays",
            english: "When is your birthday? It's in October. What day is it today? It's Monday.",
            content: "• <strong>Thứ trong tuần:</strong> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.<br/>• <strong>12 Tháng:</strong> January, February, March, April, May, June, July, August, September, October, November, December.<br/>• <strong>Hỏi sinh nhật:</strong> When is your birthday? ➔ It's in + [Tháng] / It's on the + [Ngày] of [Tháng]."
          }
        ]
      },
      questions: [
        {
          id: "eng_1",
          level: 1,
          question: "Where are you from, Akiko? - I'm from ________. I am Japanese.",
          options: ["England", "Japan", "America", "Vietnam"],
          correct: 1,
          explanation: "Akiko có quốc tịch Nhật Bản (Japanese), do đó bạn ấy đến từ đất nước Nhật Bản (Japan)."
        },
        {
          id: "eng_2",
          level: 1,
          question: "What time is it? - It's ________. (7:00)",
          options: ["seven o'clock", "seven thirty", "seven fifteen", "eight o'clock"],
          correct: 0,
          explanation: "7:00 là giờ chẵn, trong tiếng Anh diễn đạt là 'seven o'clock'."
        },
        {
          id: "eng_3",
          level: 2,
          question: "Choose the correct sentence to ask about someone's birthday:",
          options: [
            "What is your birthday?",
            "When is your birthday?",
            "Where is your birthday?",
            "How time is your birthday?"
          ],
          correct: 1,
          explanation: "Để hỏi về thời gian/ngày sinh nhật của ai đó, ta dùng từ để hỏi 'When' (Khi nào): When is your birthday?"
        },
        {
          id: "eng_4",
          level: 2,
          question: "I ________ at 6:30 in the morning, wash my face and have breakfast.",
          options: ["go to bed", "get up", "have dinner", "play football"],
          correct: 1,
          explanation: "'get up' có nghĩa là thức dậy vào buổi sáng (6:30 in the morning)."
        },
        {
          id: "eng_5",
          level: 3,
          question: "Tony is from Sydney, Australia. What nationality is he?",
          options: [
            "He is Australian.",
            "He is American.",
            "He is English.",
            "He is Japanese."
          ],
          correct: 0,
          explanation: "Người đến từ nước Úc (Australia) mang quốc tịch Úc: Australian."
        },
        {
          id: "eng_6",
          level: 3,
          question: "Complete the dialogue:<br/>- <em>What day is it today, Nam?</em><br/>- <em>It's ________. We have English and Maths today.</em>",
          options: ["October", "Tuesday", "seven o'clock", "morning"],
          correct: 1,
          explanation: "Câu hỏi 'What day is it today?' hỏi về thứ trong tuần (Monday, Tuesday, Wednesday...)."
        },
        {
          id: "eng_7",
          level: 4,
          question: "Find the MISTAKE in this sentence:<br/><em>\"My sister can dances very beautifully on the stage.\"</em>",
          options: [
            "sister",
            "dances (should be 'dance')",
            "beautifully",
            "on the stage"
          ],
          correct: 1,
          explanation: "Sau động từ khuyết thiếu 'can', động từ luôn ở dạng nguyên mẫu không chia (bare infinitive): 'can dance'."
        },
        {
          id: "eng_8",
          level: 4,
          question: "Rearrange the words to make a meaningful sentence:<br/><em>\"breakfast / at / seven / I / with / have / family / my / o'clock .\"</em>",
          options: [
            "I have breakfast with my family at seven o'clock.",
            "I breakfast have at seven o'clock with family my.",
            "With my family have I breakfast at seven o'clock.",
            "At seven o'clock have I breakfast my family."
          ],
          correct: 0,
          explanation: "Trật tự câu chuẩn: Chủ ngữ (I) + Động từ (have breakfast) + Cụm từ (with my family) + Trạng từ chỉ thời gian (at seven o'clock)."
        },
        {
          id: "en4_1_9",
          level: 1,
          question: "Choose the correct sentence to ask where someone is from:",
          options: ["Where are you from?", "Where do you from?", "Where are you come?", "Where you from?"],
          correct: 0,
          explanation: "Cấu trúc hỏi xuất xứ chuẩn: 'Where are you from?' - Trả lời: 'I'm from Vietnam.'"
        },
        {
          id: "en4_1_10",
          level: 2,
          question: "Complete the sentence: 'Tom is from London, England. He is _______.'",
          options: ["English", "Vietnamese", "American", "Australian"],
          correct: 0,
          explanation: "England (nước Anh) ➔ Quốc tịch là English (người Anh)."
        },
        {
          id: "en4_1_11",
          level: 2,
          question: "What is the correct answer to: 'When is your birthday?'",
          options: ["It's on the fifth of May.", "It's on Monday morning.", "I am nine years old.", "I like my birthday party."],
          correct: 0,
          explanation: "Hỏi về ngày sinh dùng 'on + the + ngày thứ tự + of + tháng' (on the fifth of May)."
        },
        {
          id: "en4_1_12",
          level: 3,
          question: "Choose the word with the underlined part pronounced differently from the others:
(A) c<u>a</u>t  (B) m<u>a</u>p  (C) n<u>a</u>me  (D) b<u>a</u>g",
          options: ["name", "cat", "map", "bag"],
          correct: 0,
          explanation: "'name' phát âm âm /eɪ/, các từ còn lại phát âm âm /æ/."
        },
        {
          id: "en4_1_13",
          level: 3,
          question: "Complete the dialogue:
- 'What's your nationality?'
- '_______.'",
          options: ["I'm Vietnamese.", "I'm from Vietnam.", "I live in Hanoi.", "I speak English."],
          correct: 0,
          explanation: "Câu hỏi 'What's your nationality?' (Quốc tịch của bạn là gì?) ➔ Trả lời bằng quốc tịch: 'I'm Vietnamese.'"
        },
        {
          id: "en4_1_14",
          level: 4,
          question: "Reorder the words to make a meaningful sentence:
'can / She / play / piano / the / very / well.'",
          options: ["She can play the piano very well.", "She play can the piano very well.", "The piano she can play very well.", "Very well she can play the piano."],
          correct: 0,
          explanation: "Cấu trúc: S + can + V(nguyên thể) + the + nhạc cụ + adv (She can play the piano very well)."
        }
      ]
    },
    {
      id: "school_and_hobbies",
        terms: [1],
      name: "School & Hobbies",
      icon: "🎨",
      desc: "School Subjects, Days of Timetable, What can you do? Sports, Musical Instruments & Hobbies.",
      theory: {
        highlights: [
          {
            icon: "📚",
            title: "School Subjects",
            english: "What subjects do you have today? I have Maths, Vietnamese, English and Science.",
            content: "• <strong>Các môn học:</strong> Maths (Toán), Vietnamese (Tiếng Việt), English (Tiếng Anh), Science (Khoa học), IT / Information Technology (Tin học), Art (Mỹ thuật), Music (Âm nhạc), PE / Physical Education (Thể dục).<br/>• <strong>Hỏi thời khóa biểu:</strong> What subjects do you have today? ➔ I have + [tên các môn]."
          },
          {
            icon: "⚽",
            title: "Abilities: What can you do?",
            english: "Can you swim? Yes, I can. I can play football and ride a bicycle.",
            content: "• <strong>Cấu trúc:</strong> What can you do? ➔ I can + [V nguyên thể].<br/>• <strong>Hỏi có thể làm gì không:</strong> Can you play the piano? ➔ Yes, I can. / No, I can't.<br/>• <em>Lưu ý:</em> Dùng 'play the + [nhạc cụ]' (play the guitar, play the piano) nhưng 'play + [môn thể thao]' (play badminton, play football)."
          },
          {
            icon: "🧩",
            title: "Hobbies & Free Time",
            english: "What is your hobby? I like reading comic books and cooking.",
            content: "• <strong>Cấu trúc:</strong> What is your hobby? / What do you like doing in your free time?<br/>➔ I like + V-ing (reading books, swimming, drawing pictures, listening to music, collecting stamps)."
          }
        ]
      },
      questions: [
        {
          id: "sh_1",
          level: 1,
          question: "We learn about numbers, calculations and shapes in ________ class.",
          options: ["Music", "Maths", "Art", "PE"],
          correct: 1,
          explanation: "Môn Toán (Maths) là môn học về các con số (numbers), phép tính (calculations) và hình học (shapes)."
        },
        {
          id: "sh_2",
          level: 1,
          question: "What can you do, Peter? - I can ________ the guitar.",
          options: ["play", "ride", "swim", "fly"],
          correct: 0,
          explanation: "Cụm từ chơi nhạc cụ đi với động từ 'play': play the guitar."
        },
        {
          id: "sh_3",
          level: 2,
          question: "Look at the sentence: <em>\"She likes ________ pictures of animals.\"</em> Which form of verb is correct?",
          options: ["draw", "drawing", "draws", "drew"],
          correct: 1,
          explanation: "Sau động từ chỉ sở thích 'like' / 'likes', động từ theo sau thường ở dạng V-ing: 'likes drawing'."
        },
        {
          id: "sh_4",
          level: 2,
          question: "- <em>Can your brother ride a bicycle?</em><br/>- <em>No, he ________.</em>",
          options: ["can", "can't", "is", "isn't"],
          correct: 1,
          explanation: "Câu trả lời phủ định cho câu hỏi 'Can he...?' là 'No, he can't' (cannot)."
        },
        {
          id: "sh_5",
          level: 3,
          question: "In ________ class, students learn how to use a computer and type on a keyboard.",
          options: ["IT (Information Technology)", "Music", "Science", "History"],
          correct: 0,
          explanation: "IT (Tin học) là môn học sử dụng máy tính (computer) và gõ bàn phím (keyboard)."
        },
        {
          id: "sh_6",
          level: 3,
          question: "Choose the correct phrase with 'the':",
          options: [
            "play the football",
            "play the piano",
            "play the badminton",
            "play the basketball"
          ],
          correct: 1,
          explanation: "Trong tiếng Anh, nhạc cụ đi kèm mạo từ 'the' (play the piano, play the guitar), còn môn thể thao thì không có 'the'."
        },
        {
          id: "sh_7",
          level: 4,
          question: "Read the passage and answer the question:<br/><em>\"Linda is in class 4B. Her favourite subject is Art because she loves drawing colorful flowers. On weekends, she often goes to the swimming pool with her father.\"</em><br/>What is Linda's hobby?",
          options: [
            "Playing chess and computing",
            "Drawing and swimming",
            "Cooking and playing badminton",
            "Reading comics"
          ],
          correct: 1,
          explanation: "Theo đoạn văn: Linda yêu thích môn Mỹ thuật vì thích vẽ tranh (drawing) và cuối tuần đi bơi (swimming)."
        },
        {
          id: "sh_8",
          level: 4,
          question: "Which question matches this answer?<br/><em>\"I have English on Mondays and Thursdays.\"</em>",
          options: [
            "What time do you have English?",
            "When do you have English?",
            "Where do you have English?",
            "Why do you like English?"
          ],
          correct: 1,
          explanation: "Câu trả lời nêu rõ thời gian vào các ngày thứ Hai và thứ Năm ('on Mondays and Thursdays'), nên câu hỏi phù hợp nhất là 'When do you have English?'."
        },
        {
          id: "en4_2_9",
          level: 1,
          question: "Which subject teaches students about numbers, calculations and shapes?",
          options: ["Maths", "Science", "Music", "History"],
          correct: 0,
          explanation: "Maths (Toán học) dạy về các con số, phép tính và hình học."
        },
        {
          id: "en4_2_10",
          level: 2,
          question: "Choose the correct sentence to ask about someone's hobby:",
          options: ["What is your hobby?", "What hobby are you?", "What do your hobby?", "How is your hobby?"],
          correct: 0,
          explanation: "'What is your hobby?' (Sở thích của bạn là gì?) - 'I like swimming / reading books.'"
        },
        {
          id: "en4_2_11",
          level: 2,
          question: "Complete: 'We have English lessons _______ Tuesdays and Fridays.'",
          options: ["on", "in", "at", "to"],
          correct: 0,
          explanation: "Trước các ngày trong tuần (Tuesdays, Fridays) luôn sử dụng giới từ 'on'."
        },
        {
          id: "en4_2_12",
          level: 3,
          question: "Find the odd one out (chọn từ khác loại):
(A) reading  (B) swimming  (C) painting  (D) teacher",
          options: ["teacher", "reading", "swimming", "painting"],
          correct: 0,
          explanation: "'teacher' là danh từ chỉ nghề nghiệp; các từ còn lại là danh động từ chỉ sở thích (V-ing)."
        },
        {
          id: "en4_2_13",
          level: 3,
          question: "Complete: '- What do you like doing in your free time? - I like _______ photos.'",
          options: ["taking", "take", "to taking", "takes"],
          correct: 0,
          explanation: "Sau động từ 'like' thường đi với V-ing (like taking photos: thích chụp ảnh)."
        },
        {
          id: "en4_2_14",
          level: 4,
          question: "Read and answer: 'Linda loves drawing and colouring pictures. What is her favourite subject?'",
          options: ["Art", "Music", "PE (Physical Education)", "IT (Information Technology)"],
          correct: 0,
          explanation: "Vẽ (drawing) và tô màu (colouring pictures) là hoạt động của môn Mỹ thuật (Art)."
        }
      ]
    },
    {
      id: "family_food_clothes",
        terms: [2],
      name: "Family, Food & Clothes",
      icon: "🍔",
      desc: "Physical Appearance, Favourite Food & Drink, Would you like some...? Clothes & Prices.",
      theory: {
        highlights: [
          {
            icon: "👨‍👩‍👧",
            title: "Describing People",
            english: "What does he look like? He is tall and slim. She has long black hair.",
            content: "• <strong>Hỏi ngoại hình:</strong> What does he/she look like? ➔ He/She is tall (cao), short (thấp), slim (mảnh mai), big (to lớn).<br/>• <strong>Mái tóc & đôi mắt:</strong> He has short hair / She has big brown eyes."
          },
          {
            icon: "🍲",
            title: "Food and Drinks",
            english: "What would you like to eat? I'd like some rice and chicken. What is your favourite drink? Orange juice.",
            content: "• <strong>Món ăn:</strong> beef (thịt bò), chicken (thịt gà), fish (cá), bread (bánh mì), rice (cơm).<br/>• <strong>Đồ uống:</strong> water (nước lọc), milk (sữa), orange juice (nước cam), lemonade (nước chanh).<br/>• <strong>Mời ai đó:</strong> Would you like some milk? ➔ Yes, please. / No, thanks."
          },
          {
            icon: "👗",
            title: "Clothes and Prices",
            english: "How much is this T-shirt? It's eighty thousand dong. How much are these shoes?",
            content: "• <strong>Quần áo:</strong> T-shirt (áo phông), shirt (áo sơ mi), dress (váy liền), skirt (chân váy), trousers (quần dài), shoes (giày).<br/>• <strong>Hỏi giá tiền:</strong><br/>- Số ít: How much is this + [đồ vật]? ➔ It's + [số tiền].<br/>- Số nhiều: How much are these + [đồ vật số nhiều]? ➔ They're + [số tiền]."
          }
        ]
      },
      questions: [
        {
          id: "ffc_1",
          level: 1,
          question: "- <em>Would you like some orange juice?</em><br/>- <em>________, please. I'm thirsty.</em>",
          options: ["No", "Yes", "Never", "Not"],
          correct: 1,
          explanation: "Lời đồng ý lịch sự trước lời mời là: 'Yes, please' (Vâng, làm ơn cho cháu một cốc)."
        },
        {
          id: "ffc_2",
          level: 1,
          question: "My father is very ________. He is 1.8 meters in height.",
          options: ["short", "tall", "small", "young"],
          correct: 1,
          explanation: "Cao 1m80 là đặc điểm ngoại hình rất cao lớn ('tall')."
        },
        {
          id: "ffc_3",
          level: 2,
          question: "- <em>How much ________ this blue shirt?</em><br/>- <em>It is ninety thousand dong.</em>",
          options: ["are", "is", "am", "be"],
          correct: 1,
          explanation: "'this blue shirt' là danh từ số ít, do đó dùng động từ to be 'is'."
        },
        {
          id: "ffc_4",
          level: 2,
          question: "- <em>How much are these black shoes?</em><br/>- <em>________ two hundred thousand dong.</em>",
          options: ["It is", "They are", "She is", "There is"],
          correct: 1,
          explanation: "'these black shoes' là danh từ số nhiều (đôi giày gồm 2 chiếc), câu trả lời dùng 'They are' (They're)."
        },
        {
          id: "ffc_5",
          level: 3,
          question: "Which of the following is a healthy drink?",
          options: ["Coca Cola", "Pure fresh water", "Beer", "Wine"],
          correct: 1,
          explanation: "Nước lọc tinh khiết ('pure fresh water') là đồ uống lành mạnh và thiết yếu nhất cho cơ thể."
        },
        {
          id: "ffc_6",
          level: 3,
          question: "Choose the odd one out (chọn từ khác loại):",
          options: ["Beef", "Chicken", "Orange juice", "Fish"],
          correct: 2,
          explanation: "Beef, Chicken, Fish là thức ăn (Food/Meat), còn Orange juice là đồ uống (Drink)."
        },
        {
          id: "ffc_7",
          level: 4,
          question: "Complete the dialogue:<br/>Shop assistant: <em>\"Can I help you, young man?\"</em><br/>Tom: <em>\"Yes, I'd like to buy ________ of red trousers.\"</em>",
          options: ["a pair", "a glass", "a piece", "a bottle"],
          correct: 0,
          explanation: "Quần dài (trousers/pants/jeans) luôn đi với lượng từ 'a pair of' (một chiếc quần gồm hai ống)."
        },
        {
          id: "ffc_8",
          level: 4,
          question: "Mary: <em>\"What does your sister look like?\"</em><br/>Which is the correct answer?",
          options: [
            "She likes reading books and swimming.",
            "She is tall and has long blonde hair.",
            "She is ten years old.",
            "She is an elementary school student."
          ],
          correct: 1,
          explanation: "Câu hỏi 'What does she look like?' hỏi về diện mạo/ngoại hình bên ngoài ('She is tall and has long blonde hair')."
        },
        {
          id: "en4_3_9",
          level: 1,
          question: "Which of the following is a healthy drink?",
          options: ["Orange juice", "Coffee with too much sugar", "Fizzy soda", "Beer"],
          correct: 0,
          explanation: "Orange juice (nước cam ép tươi) là đồ uống hoa quả lành mạnh giàu vitamin C."
        },
        {
          id: "en4_3_10",
          level: 2,
          question: "Complete the polite invitation: '- Would you like some milk? - _______.'",
          options: ["Yes, please. / No, thanks.", "Yes, I am.", "No, I can't.", "I like milk very much."],
          correct: 0,
          explanation: "Đáp lại lời mời lịch sự 'Would you like...?' dùng: 'Yes, please' (Vâng, cho mình xin) hoặc 'No, thanks' (Không, cảm ơn bạn)."
        },
        {
          id: "en4_3_11",
          level: 2,
          question: "Complete: 'My father is a doctor. He works in a _______.'",
          options: ["hospital", "school", "farm", "factory"],
          correct: 0,
          explanation: "Bác sĩ (doctor) làm việc tại bệnh viện (hospital)."
        },
        {
          id: "en4_3_12",
          level: 3,
          question: "Choose the correct sentence to ask about the price of a pair of shoes:",
          options: ["How much are these shoes?", "How much is these shoes?", "How many is these shoes?", "How price are these shoes?"],
          correct: 0,
          explanation: "'shoes' là danh từ số nhiều nên dùng 'How much are...?'."
        },
        {
          id: "en4_3_13",
          level: 3,
          question: "Complete: 'Look at that boy. What _______ he wearing today?'",
          options: ["is", "are", "do", "does"],
          correct: 0,
          explanation: "Chủ ngữ ngôi thứ ba số ít 'that boy' / 'he' đi với to be 'is' trong thì Hiện tại tiếp diễn."
        },
        {
          id: "en4_3_14",
          level: 4,
          question: "Choose the best sentence to describe appearance:
'My sister is tall and she _______ long black hair.'",
          options: ["has", "have", "is", "having"],
          correct: 0,
          explanation: "Chủ ngữ 'she' đi với 'has' để miêu tả đặc điểm ngoại hình (has long black hair: có mái tóc đen dài)."
        }
      ]
    },
    {
      id: "animals_weather_trips",
        terms: [2],
      name: "Animals, Weather & Trips",
      icon: "🦁",
      desc: "Zoo Animals, Why do you like...? Weather & Seasons, Going on a Holiday & Summer Vacation.",
      theory: {
        highlights: [
          {
            icon: "🦒",
            title: "The Animal World",
            english: "What animal do you want to see? I want to see monkeys because they are funny.",
            content: "• <strong>Các loài động vật:</strong> elephant (voi), tiger (hổ), monkey (khỉ), zebra (ngựa vằn), giraffe (hươu cao cổ), crocodile (cá sấu), dolphin (cá heo), kangaroo (chuột túi).<br/>• <strong>Lý do yêu thích:</strong> Why do you like monkeys? ➔ Because they are funny / fast / friendly / intelligent.<br/>• <strong>Lý do không thích:</strong> Why don't you like tigers? ➔ Because they are scary / dangerous."
          },
          {
            icon: "⛅",
            title: "Weather and Seasons",
            english: "What is the weather like today? It is sunny and hot. In winter, it is cold.",
            content: "• <strong>Hỏi thời tiết:</strong> What's the weather like today? ➔ It's sunny (có nắng), rainy (có mưa), windy (có gió), cloudy (nhiều mây), stormy (bão), snowy (có tuyết).<br/>• <strong>4 Mùa:</strong> spring (mùa xuân - warm), summer (mùa hè - hot), autumn/fall (mùa thu - cool), winter (mùa đông - cold)."
          },
          {
            icon: "🏖️",
            title: "Holidays and Trips",
            english: "Where are you going this summer? I'm going to Phu Quoc Island. How will you get there? By plane.",
            content: "• <strong>Điểm du lịch:</strong> Ha Long Bay, Nha Trang, Da Nang, Hue, Phu Quoc Island, Da Lat.<br/>• <strong>Hỏi dự định:</strong> Where are you going this weekend? ➔ I am going to + [địa điểm].<br/>• <strong>Phương tiện:</strong> by train (tàu hỏa), by plane (máy bay), by coach/bus (xe khách/xe buýt), by car (ô tô)."
          }
        ]
      },
      questions: [
        {
          id: "awt_1",
          level: 1,
          question: "An ________ has a very long nose (trunk) and two big ears.",
          options: ["elephant", "monkey", "rabbit", "cat"],
          correct: 0,
          explanation: "Con voi (elephant) có chiếc vòi dài (trunk) và đôi tai to lớn."
        },
        {
          id: "awt_2",
          level: 1,
          question: "What is the weather like in Hanoi in the summer?",
          options: ["Cold and snowy", "Hot and sunny", "Freezing and windy", "Cool and icy"],
          correct: 1,
          explanation: "Mùa hè (summer) ở Hà Nội thời tiết thường rất nóng và nhiều nắng (hot and sunny)."
        },
        {
          id: "awt_3",
          level: 2,
          question: "- <em>Why do you like kangaroos?</em><br/>- <em>________ they are very cute and jump fast.</em>",
          options: ["Because", "So", "And", "Although"],
          correct: 0,
          explanation: "Để trả lời cho câu hỏi 'Why...?' (Tại sao), ta bắt đầu bằng từ 'Because' (Bởi vì)."
        },
        {
          id: "awt_4",
          level: 2,
          question: "- <em>Where are you going on holiday this summer, Mai?</em><br/>- <em>I'm going to ________.</em>",
          options: ["swim in the lake", "Da Nang city", "watch television", "by airplane"],
          correct: 1,
          explanation: "'Where' hỏi về địa điểm nơi chốn, do đó câu trả lời là một thành phố du lịch: 'Da Nang city'."
        },
        {
          id: "awt_5",
          level: 3,
          question: "How are you going to get to Phu Quoc Island from Hanoi?<br/>- <em>We are traveling ________ plane.</em>",
          options: ["on", "by", "in", "with"],
          correct: 1,
          explanation: "Đi lại bằng phương tiện giao thông ta dùng giới từ 'by': by plane, by train, by bus."
        },
        {
          id: "awt_6",
          level: 3,
          question: "I don't like crocodiles because they are very ________.",
          options: ["scary and dangerous", "cute and lovely", "friendly and gentle", "tiny and funny"],
          correct: 0,
          explanation: "Cá sấu (crocodiles) là loài bò sát ăn thịt nguy hiểm và đáng sợ: 'scary and dangerous'."
        },
        {
          id: "awt_7",
          level: 4,
          question: "Read the diary entry:<br/><em>\"Tomorrow is Sunday. If the weather is sunny, my class will go for a picnic in the botanical garden. But if it rains, we will visit the National History Museum instead.\"</em><br/>What will the students do if it is RAINY tomorrow?",
          options: [
            "Go for a picnic in the garden",
            "Stay in bed all day",
            "Visit the National History Museum",
            "Go swimming at the beach"
          ],
          correct: 2,
          explanation: "Theo kế hoạch trong nhật ký: nếu trời mưa ('if it rains'), cả lớp sẽ đi tham quan Bảo tàng Lịch sử Quốc gia."
        },
        {
          id: "awt_8",
          level: 4,
          question: "Choose the sentence that has the CORRECT word order:",
          options: [
            "We are going to visit Ha Long Bay next weekend by coach.",
            "By coach we going to are visit Ha Long Bay next weekend.",
            "Visit Ha Long Bay we are going to by coach next weekend.",
            "Next weekend by coach are we visit going to Ha Long Bay."
          ],
          correct: 0,
          explanation: "Cấu trúc tương lai gần đúng chuẩn ngữ pháp: S + be going to + V + O + Trạng ngữ (We are going to visit Ha Long Bay next weekend by coach)."
        },
        {
          id: "en4_4_9",
          level: 1,
          question: "What is the weather like when there are lots of clouds in the sky?",
          options: ["Cloudy", "Sunny", "Snowy", "Rainy"],
          correct: 0,
          explanation: "Nhiều mây trên bầu trời là thời tiết 'Cloudy' (có mây, râm mát)."
        },
        {
          id: "en4_4_10",
          level: 2,
          question: "Which animal has a very long trunk and two big ears?",
          options: ["An elephant", "A monkey", "A tiger", "A kangaroo"],
          correct: 0,
          explanation: "Con voi (elephant) có chiếc vòi dài (long trunk) và đôi tai to như cánh quạt."
        },
        {
          id: "en4_4_11",
          level: 2,
          question: "Complete: '- Where are you going this summer holiday? - I'm going to visit _______.'",
          options: ["Ha Long Bay", "playing football", "swimming pool", "my homework"],
          correct: 0,
          explanation: "Ha Long Bay (Vịnh Hạ Long) là danh lam thắng cảnh du lịch nổi tiếng."
        },
        {
          id: "en4_4_12",
          level: 3,
          question: "Complete the question: '- _______ do you want to see the monkeys? - Because they are funny and clever.'",
          options: ["Why", "What", "Where", "When"],
          correct: 0,
          explanation: "Câu trả lời bắt đầu bằng 'Because' (bởi vì) ➔ Câu hỏi nguyên nhân dùng từ hỏi 'Why' (Tại sao)."
        },
        {
          id: "en4_4_13",
          level: 3,
          question: "Choose the correct sentence about the zoo:
'I like tigers because they are _______.'",
          options: ["fast and strong", "very small and slow", "lazy and sleepy", "sweet and soft"],
          correct: 0,
          explanation: "Những chú hổ (tigers) chạy rất nhanh và dũng mãnh (fast and strong)."
        },
        {
          id: "en4_4_14",
          level: 4,
          question: "Read and choose: 'Take an umbrella with you because it is going to _______ this afternoon.'",
          options: ["rain", "sunny", "hot", "wind"],
          correct: 0,
          explanation: "Mang ô (umbrella) vì trời sắp mưa (going to rain)."
        }
      ]
    }
  ]
};
