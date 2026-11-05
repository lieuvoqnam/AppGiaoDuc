/**
 * english-3-data.js - Dữ liệu Ôn tập & Ngân hàng câu hỏi Môn Tiếng Anh Lớp 3
 * Chuẩn Chương trình Giáo dục phổ thông (GDPT) 2018
 * (Bộ sách Tiếng Anh 3 Global Success - Nhà xuất bản Giáo dục Việt Nam)
 */

window.ENGLISH3_DATA = {
  topics: [
    {
      id: "unit_1_hello_friends",
      name: "Unit 1: Hello, Names & Greetings",
      icon: "👋",
      desc: "Greetings, introductions, asking names, spellings and polite expressions: 'Hello', 'What's your name?', 'How are you?'.",
      theory: {
        highlights: [
          {
            icon: "🗣️",
            title: "Greetings & Asking Names",
            content: "• <strong>Greetings:</strong> <em>Hello / Hi</em> (thân mật); <em>Good morning</em> (chào buổi sáng), <em>Good afternoon</em> (chào buổi chiều), <em>Goodbye / Bye</em> (tạm biệt).<br/>• <strong>Asking name:</strong> <code>What's your name?</code> -> <code>My name's + [Tên]</code> (hoặc <code>I'm + [Tên]</code>).<br/>• <strong>Spelling:</strong> <code>How do you spell your name?</code> -> <code>B-O-M, Bom</code>.<br/>• <strong>Polite greeting:</strong> <code>Nice to meet you!</code> (Rất vui được gặp bạn!)."
          },
          {
            icon: "😊",
            title: "How are you? (Hỏi thăm sức khỏe)",
            content: "• <strong>Question:</strong> <code>How are you?</code> (Bạn có khỏe không?)<br/>• <strong>Answers:</strong><br/>- <code>I'm fine, thank you. / Fine, thanks.</code> (Tôi khỏe, cảm ơn bạn.)<br/>- <code>I'm very well, thank you. And you?</code> (Tôi rất khỏe, còn bạn thì sao?)"
          },
          {
            icon: "🔤",
            title: "Key Vocabulary & Phonics",
            content: "• <strong>Words:</strong> Hello, Hi, Name, Friend, Meet, Fine, Thank, Bye, Good, Morning, Afternoon.<br/>• <strong>Phonics /b/ & /m/:</strong> <em>b</em>oy, <em>b</em>ook, <em>b</em>ye; <em>m</em>eet, <em>m</em>y, <em>m</em>orning."
          }
        ]
      },
      questions: [
        {
          id: "en3_1_1",
          level: 1,
          question: "When you meet your friend in the morning, what do you say?",
          options: ["Good morning", "Good night", "Goodbye", "Thank you"],
          correct: 0,
          explanation: "Chào buổi sáng khi gặp bạn bè hoặc thầy cô: 'Good morning'."
        },
        {
          id: "en3_1_2",
          level: 1,
          question: "Choose the correct question for the answer: <em>'My name is Nam.'</em>",
          options: [
            "How are you?",
            "What's your name?",
            "How old are you?",
            "Where are you from?"
          ],
          correct: 1,
          explanation: "'What's your name?' dùng để hỏi tên người đối diện."
        },
        {
          id: "en3_1_3",
          level: 2,
          question: "Complete the dialogue:<br/>- Lucy: <em>'How are you, Mai?'</em><br/>- Mai: <em>'I'm ..., thank you.'</em>",
          options: ["fine", "eight", "name", "bye"],
          correct: 0,
          explanation: "Mẫu câu trả lời sức khỏe chuẩn: 'I'm fine, thank you.' (Tôi khỏe, cảm ơn bạn)."
        },
        {
          id: "en3_1_4",
          level: 2,
          question: "What is the polite response to: <em>'Nice to meet you!'</em>?",
          options: [
            "Nice to meet you, too!",
            "I'm eight years old.",
            "Yes, I do.",
            "No, it isn't."
          ],
          correct: 0,
          explanation: "Đáp lại lời chào lịch thiệp: 'Nice to meet you, too!' (Tôi cũng rất vui được gặp bạn!)."
        },
        {
          id: "en3_1_5",
          level: 3,
          question: "Reorder the words to make a correct sentence: <strong>spell / do / How / name / your / you / ?</strong>",
          options: [
            "How do you spell your name?",
            "How you do spell your name?",
            "How your name do you spell?",
            "Do you how spell your name?"
          ],
          correct: 0,
          explanation: "Cấu trúc hỏi cách đánh vần tên: 'How do you spell your name?'."
        },
        {
          id: "en3_1_6",
          level: 3,
          question: "Find the odd one out (Chọn từ khác loại):",
          options: ["Hello", "Hi", "Good morning", "Pencil"],
          correct: 3,
          explanation: "'Pencil' là đồ dùng học tập (bút chì), còn lại đều là các từ chào hỏi."
        },
        {
          id: "en3_1_7",
          level: 4,
          question: "Choose the correct sentence with proper capitalization and punctuation:",
          options: [
            "hello, my name is Linda. what is your name?",
            "Hello, my name is Linda. What's your name?",
            "Hello my name is linda, whats your name",
            "hello my Name is Linda. What is your name."
          ],
          correct: 1,
          explanation: "Câu viết chuẩn: Viết hoa đầu câu và tên riêng 'Linda', dùng dấu chấm và dấu hỏi chấm chính xác."
        },
        {
          id: "en3_1_8",
          level: 4,
          question: "Complete the conversation:<br/>- Ben: <em>'Goodbye, Miss Hien.'</em><br/>- Miss Hien: <em>'..., Ben. See you tomorrow!'</em>",
          options: ["Bye", "Hello", "I'm fine", "Thank you"],
          correct: 0,
          explanation: "Đáp lại lời tạm biệt 'Goodbye' bằng 'Bye. See you tomorrow!' (Tạm biệt, hẹn gặp lại ngày mai)."
        }
      ]
    },
    {
      id: "unit_2_our_school_classroom",
      name: "Unit 2: School Things & Classroom Rules",
      icon: "🎒",
      desc: "School stationery (pen, pencil, ruler, book, bag), classroom commands ('Open your book') and asking permission ('May I come in?').",
      theory: {
        highlights: [
          {
            icon: "✏️",
            title: "School Things (Đồ dùng học tập)",
            content: "• <strong>Vocabulary:</strong> pen (bút mực), pencil (bút chì), ruler (thước kẻ), rubber / eraser (cục tẩy), school bag (cặp sách), notebook (quyển vở), book (quyển sách), pencil case (hộp bút).<br/>• <strong>Asking:</strong> <code>Is this your pen?</code> -> <code>Yes, it is. / No, it isn't.</code><br/>• <strong>Plural:</strong> <code>Are these your pencils?</code> -> <code>Yes, they are. / No, they aren't.</code>"
          },
          {
            icon: "🏫",
            title: "Classroom Commands (Mệnh lệnh trong lớp)",
            content: "• <code>Open your book, please.</code> (Hãy mở sách ra).<br/>• <code>Close your book, please.</code> (Hãy gấp sách lại).<br/>• <code>Stand up, please!</code> (Xin mời đứng lên!).<br/>• <code>Sit down, please!</code> (Xin mời ngồi xuống!).<br/>• <code>Be quiet, please!</code> (Hãy giữ trật tự!)."
          },
          {
            icon: "🙋",
            title: "Asking Permission (Xin phép lịch sự)",
            content: "• <code>May I come in, Miss?</code> (Thưa cô, em xin phép vào lớp ạ?) -> <code>Yes, you can. / No, you can't.</code><br/>• <code>May I go out?</code> (Em xin phép ra ngoài ạ?)<br/>• <code>May I speak Vietnamese?</code> (Em xin phép nói tiếng Việt ạ?)"
          }
        ]
      },
      questions: [
        {
          id: "en3_2_1",
          level: 1,
          question: "What is this? -> <strong>It's a long wooden tool used for drawing straight lines.</strong>",
          options: ["Ruler", "Rubber", "Pen", "Notebook"],
          correct: 0,
          explanation: "'Ruler' nghĩa là chiếc thước kẻ dùng để kẻ các đường thẳng."
        },
        {
          id: "en3_2_2",
          level: 1,
          question: "When the teacher enters the classroom, she says: <em>'... your book and turn to page 10.'</em>",
          options: ["Close", "Open", "Sit", "Stand"],
          correct: 1,
          explanation: "'Open your book' có nghĩa là 'Mở sách của bạn ra'."
        },
        {
          id: "en3_2_3",
          level: 2,
          question: "Complete the question asking permission:<br/>- Pupil: <em>'May I ... in, Mr. Loc?'</em><br/>- Teacher: <em>'Yes, you can.'</em>",
          options: ["come", "go", "sit", "stand"],
          correct: 0,
          explanation: "'May I come in?' là câu xin phép vào lớp quen thuộc."
        },
        {
          id: "en3_2_4",
          level: 2,
          question: "Is this your pencil case?<br/>- <em>'No, ...'</em>",
          options: ["it is", "it isn't", "they are", "they aren't"],
          correct: 1,
          explanation: "Trả lời phủ định số ít với 'Is this...?': 'No, it isn't.'."
        },
        {
          id: "en3_2_5",
          level: 3,
          question: "Look at the picture description: <em>'It is on the desk. You use it to remove pencil marks.'</em> What is it?",
          options: ["An eraser (rubber)", "A school bag", "A sharpener", "A pen"],
          correct: 0,
          explanation: "'An eraser' (hoặc rubber) là cục tẩy dùng để xóa vết bút chì."
        },
        {
          id: "en3_2_6",
          level: 3,
          question: "Choose the correct command to tell someone not to talk loudly:",
          options: [
            "Open your book, please!",
            "Be quiet, please!",
            "Stand up, please!",
            "Come in, please!"
          ],
          correct: 1,
          explanation: "'Be quiet, please!' có nghĩa là 'Xin hãy giữ trật tự/yên lặng!'."
        },
        {
          id: "en3_2_7",
          level: 4,
          question: "Choose the grammatically correct question and answer pair:",
          options: [
            "Are these your pens? - Yes, they are.",
            "Are these your pen? - Yes, it is.",
            "Is this your pens? - No, they aren't.",
            "Are this your pencil? - Yes, it isn't."
          ],
          correct: 0,
          explanation: "'pens' là danh từ số nhiều, đi kèm với 'Are these' và câu trả lời 'Yes, they are.'."
        },
        {
          id: "en3_2_8",
          level: 4,
          question: "Nam wants to go to the restroom during class. What should he politely say to his teacher?",
          options: [
            "I want to go out now!",
            "May I go out, teacher?",
            "Can I come in, please?",
            "Close your bag, teacher!"
          ],
          correct: 1,
          explanation: "Cách xin phép lịch sự chuẩn mực nhất trong lớp học: 'May I go out, teacher?'."
        }
      ]
    },
    {
      id: "unit_3_family_and_ages",
      name: "Unit 3: My Family & How Old Are You?",
      icon: "👨‍👩‍👧‍👦",
      desc: "Family members (father, mother, brother, sister, grandfather), asking 'Who's that?' and numbers 1-20 for asking ages.",
      theory: {
        highlights: [
          {
            icon: "🏡",
            title: "Family Members (Thành viên gia đình)",
            content: "• <strong>Grandfather / Grandpa:</strong> Ông.<br/>• <strong>Grandmother / Grandma:</strong> Bà.<br/>• <strong>Father / Dad:</strong> Bố / Ba.<br/>• <strong>Mother / Mum:</strong> Mẹ / Má.<br/>• <strong>Brother:</strong> Anh trai / Em trai.<br/>• <strong>Sister:</strong> Chị gái / Em gái.<br/>• <strong>Baby:</strong> Em bé."
          },
          {
            icon: "❓",
            title: "Asking 'Who's that?' (Kia là ai?)",
            content: "• <strong>Question:</strong> <code>Who's that?</code> (hoặc <code>Who is this?</code>)<br/>• <strong>Answer:</strong> <code>It's my + [thành viên]</code>.<br/>• <em>Ví dụ:</em> <code>Who's that? - It's my mother. She's nice.</code>"
          },
          {
            icon: "🎂",
            title: "Numbers 1-20 & Asking Ages (Hỏi tuổi)",
            content: "• <strong>Numbers:</strong> one (1), two (2), three (3), four (4), five (5), six (6), seven (7), eight (8), nine (9), ten (10), eleven (11), twelve (12), thirteen (13), fourteen (14), fifteen (15), sixteen (16), seventeen (17), eighteen (18), nineteen (19), twenty (20).<br/>• <strong>Question:</strong> <code>How old are you?</code><br/>• <strong>Answer:</strong> <code>I'm eight years old.</code> (Em 8 tuổi) hoặc <code>I'm nine.</code>"
          }
        ]
      },
      questions: [
        {
          id: "en3_3_1",
          level: 1,
          question: "How do you say <strong>'Số 15'</strong> in English?",
          options: ["Fifty", "Fifteen", "Five", "Fourteen"],
          correct: 1,
          explanation: "15 trong tiếng Anh đọc và viết là 'Fifteen'."
        },
        {
          id: "en3_3_2",
          level: 1,
          question: "Who is your mother's mother?",
          options: ["Grandmother", "Grandfather", "Sister", "Aunt"],
          correct: 0,
          explanation: "Mẹ của mẹ em chính là bà ngoại: 'Grandmother' (Grandma)."
        },
        {
          id: "en3_3_3",
          level: 2,
          question: "Complete the sentence:<br/>- Peter: <em>'Who's that?'</em><br/>- Mai: <em>'It's my ... . He is forty years old.'</em>",
          options: ["mother", "sister", "father", "grandmother"],
          correct: 2,
          explanation: "Đại từ nhân xưng là 'He' (nam giới) nên đáp án phù hợp là 'father' (bố)."
        },
        {
          id: "en3_3_4",
          level: 2,
          question: "Complete the age question: <em>'... old are you, Tony?' - 'I'm nine years old.'</em>",
          options: ["What", "How", "Who", "Where"],
          correct: 1,
          explanation: "'How old are you?' là cấu trúc hỏi tuổi chuẩn mực."
        },
        {
          id: "en3_3_5",
          level: 3,
          question: "Calculate and choose the right word: <strong>six + seven = ... ?</strong>",
          options: ["twelve", "thirteen", "fourteen", "eleven"],
          correct: 1,
          explanation: "6 + 7 = 13 ('thirteen')."
        },
        {
          id: "en3_3_6",
          level: 3,
          question: "Choose the correct sentence to describe your 8-year-old sister:",
          options: [
            "My sister is eight years old.",
            "My sister have eight years old.",
            "My sister is eight year old.",
            "My sister are eight years old."
          ],
          correct: 0,
          explanation: "Chủ ngữ ngôi thứ 3 số ít dùng 'is' và danh từ 'years old' có 's'."
        },
        {
          id: "en3_3_7",
          level: 4,
          question: "Read the text and answer the question:<br/><em>'Hello, I am Hoa. There are four people in my family: my father, my mother, my baby brother and me. My father is thirty-eight. My mother is thirty-five.'</em><br/>How many people are there in Hoa's family?",
          options: ["Three", "Four", "Five", "Six"],
          correct: 1,
          explanation: "Gia đình Hoa gồm bố, mẹ, em trai và Hoa -> có 4 người ('Four')."
        },
        {
          id: "en3_3_8",
          level: 4,
          question: "Which of the following numbers is written correctly in words for <strong>18</strong>?",
          options: ["Eightteen", "Eighteen", "Eigthteen", "Aighteen"],
          correct: 1,
          explanation: "Chính tả đúng cho số 18 là 'Eighteen' (chỉ có 1 chữ t)."
        }
      ]
    },
    {
      id: "unit_4_colors_toys",
      name: "Unit 4: Colors, Shapes & My Toys",
      icon: "🎨",
      desc: "Colors (red, blue, yellow, green), toys (doll, robot, kite, car, ball), asking 'Do you have a...?' and 'What color is it?'.",
      theory: {
        highlights: [
          {
            icon: "🌈",
            title: "Colors (Màu sắc)",
            content: "• <strong>Colors:</strong> red (đỏ), blue (xanh dương), yellow (vàng), green (xanh lá), orange (cam), purple (tím), pink (hồng), brown (nâu), black (đen), white (trắng).<br/>• <strong>Asking color:</strong> <code>What color is it?</code> -> <code>It's + [màu]</code>.<br/>• <strong>Plural:</strong> <code>What color are they?</code> -> <code>They're + [màu]</code>."
          },
          {
            icon: "🧸",
            title: "Toys (Đồ chơi yêu thích)",
            content: "• <strong>Vocabulary:</strong> toy (đồ chơi), doll (búp bê), robot (người máy), teddy bear (gấu bông), kite (con diều), plane (máy bay), ship (tàu thủy), car (ô tô con), yo-yo, puzzle (tranh ghép), ball (quả bóng).<br/>• <strong>Asking ownership:</strong> <code>Do you have a robot?</code><br/>- <code>Yes, I do.</code> (Có, mình có.)<br/>- <code>No, I don't.</code> (Không, mình không có.)"
          },
          {
            icon: "💡",
            title: "Sentence Patterns",
            content: "• <code>I have a red car and two kites.</code><br/>• <code>He has a blue robot.</code><br/>• <code>She has a pink doll.</code>"
          }
        ]
      },
      questions: [
        {
          id: "en3_4_1",
          level: 1,
          question: "What color is the sky on a sunny day?",
          options: ["Blue", "Red", "Black", "Pink"],
          correct: 0,
          explanation: "Bầu trời ngày nắng trong xanh có màu xanh da trời: 'Blue'."
        },
        {
          id: "en3_4_2",
          level: 1,
          question: "Which of these is a toy that flies high in the sky with the wind?",
          options: ["A kite", "A doll", "A yo-yo", "A teddy bear"],
          correct: 0,
          explanation: "'A kite' (con diều) bay lượn trên trời nhờ sức gió."
        },
        {
          id: "en3_4_3",
          level: 2,
          question: "Complete the question: <em>'Do you ... a teddy bear?' - 'Yes, I do.'</em>",
          options: ["have", "has", "do", "like"],
          correct: 0,
          explanation: "Với chủ ngữ 'you' trong câu hỏi Hiện tại đơn dùng động từ nguyên mẫu: 'Do you have...?'."
        },
        {
          id: "en3_4_4",
          level: 2,
          question: "What color are your new shoes?<br/>- <em>'... are brown.'</em>",
          options: ["It", "They", "There", "She"],
          correct: 1,
          explanation: "'shoes' là danh từ số nhiều (đôi giày) nên đại từ thay thế là 'They are brown.'."
        },
        {
          id: "en3_4_5",
          level: 3,
          question: "Mixing <strong>red</strong> and <strong>yellow</strong> together gives what color?",
          options: ["Orange", "Green", "Purple", "Blue"],
          correct: 0,
          explanation: "Màu đỏ pha với màu vàng tạo thành màu da cam: 'Orange'."
        },
        {
          id: "en3_4_6",
          level: 3,
          question: "Choose the correct negative response to: <em>'Do you have a toy plane?'</em>",
          options: [
            "No, I don't.",
            "No, I am not.",
            "No, it isn't.",
            "Yes, I don't."
          ],
          correct: 0,
          explanation: "Hỏi 'Do you have...?' thì câu trả lời phủ định là 'No, I don't.'."
        },
        {
          id: "en3_4_7",
          level: 4,
          question: "Reorder to make a meaningful sentence: <strong>has / a / robot / and / Tom / red / two / cars / .</strong>",
          options: [
            "Tom has a red robot and two cars.",
            "Tom has red a robot and two cars.",
            "A red robot Tom has and two cars.",
            "Tom two cars has and a red robot."
          ],
          correct: 0,
          explanation: "Cấu trúc đúng: Chủ ngữ (Tom) + động từ (has) + tân ngữ (a red robot and two cars)."
        },
        {
          id: "en3_4_8",
          level: 4,
          question: "Linda has <strong>3 dolls</strong>. Mai gives Linda <strong>2 more dolls</strong>. How many dolls does Linda have now?",
          options: ["Four dolls", "Five dolls", "Six dolls", "Three dolls"],
          correct: 1,
          explanation: "3 + 2 = 5 dolls ('Five dolls')."
        }
      ]
    },
    {
      id: "unit_5_pets_and_places",
      name: "Unit 5: Pets & Prepositions of Place",
      icon: "🐾",
      desc: "Pets (dog, cat, bird, rabbit, goldfish) and prepositions of place (in, on, under) to ask 'Where is the pet?'.",
      theory: {
        highlights: [
          {
            icon: "🐶",
            title: "Pets (Thú cưng trong nhà)",
            content: "• <strong>Vocabulary:</strong> pet (thú cưng), dog (chó), cat (mèo), bird (chim), parrot (vẹt), rabbit (thỏ), goldfish (cá vàng), hamster (chuột hamster).<br/>• <strong>Asking about pets:</strong> <code>Do you have any pets?</code> -> <code>Yes, I have a dog and a cat.</code>"
          },
          {
            icon: "📦",
            title: "Prepositions of Place (Giới từ chỉ vị trí)",
            content: "• <strong>In:</strong> Ở trong (ví dụ: in the box, in the cage).<br/>• <strong>On:</strong> Ở trên bề mặt (ví dụ: on the table, on the chair).<br/>• <strong>Under:</strong> Ở dưới (ví dụ: under the bed, under the desk)."
          },
          {
            icon: "📍",
            title: "Where is...? / Where are...?",
            content: "• <code>Where is the cat?</code> (Con mèo ở đâu?) -> <code>It's under the table.</code> (Nó ở dưới gầm bàn).<br/>• <code>Where are the birds?</code> (Những chú chim ở đâu?) -> <code>They're in the tree / in the cage.</code>"
          }
        ]
      },
      questions: [
        {
          id: "en3_5_1",
          level: 1,
          question: "Which of these animals can swim in an aquarium (bể cá)?",
          options: ["A goldfish", "A rabbit", "A parrot", "A cat"],
          correct: 0,
          explanation: "'Goldfish' (cá vàng) là loài thú cưng bơi lội dưới nước trong bể kính."
        },
        {
          id: "en3_5_2",
          level: 1,
          question: "The book is <strong>... the table</strong> (ở trên bàn). Which preposition is correct?",
          options: ["on", "under", "in", "at"],
          correct: 0,
          explanation: "'on the table' nghĩa là ở trên mặt bàn."
        },
        {
          id: "en3_5_3",
          level: 2,
          question: "Where is the puppy?<br/>- <em>'... is under the chair.'</em>",
          options: ["He", "It", "They", "We"],
          correct: 1,
          explanation: "Một con thú nuôi (số ít) được thay thế bằng đại từ 'It'."
        },
        {
          id: "en3_5_4",
          level: 2,
          question: "Complete the sentence: <em>'The green parrot is singing ... the cage.'</em> (trong lồng)",
          options: ["in", "on", "under", "above"],
          correct: 0,
          explanation: "Ở bên trong lồng chim dùng giới từ 'in' (in the cage)."
        },
        {
          id: "en3_5_5",
          level: 3,
          question: "Where are the two rabbits?<br/>- <em>'... are in the garden.'</em>",
          options: ["It", "They", "There", "She"],
          correct: 1,
          explanation: "Hai con thỏ là danh từ số nhiều, đại từ tương ứng là 'They are in the garden.'."
        },
        {
          id: "en3_5_6",
          level: 3,
          question: "Choose the correct question for the answer: <em>'The cat is sleeping under the bed.'</em>",
          options: [
            "What is the cat doing?",
            "Where is the cat?",
            "Who has a cat?",
            "How many cats are there?"
          ],
          correct: 1,
          explanation: "'Where is the cat?' hỏi về vị trí của chú mèo."
        },
        {
          id: "en3_5_7",
          level: 4,
          question: "Read and answer:<br/><em>'Tony has a white rabbit. It has long ears and red eyes. It likes eating carrots. Right now, it is hopping on the grass.'</em><br/>Where is Tony's rabbit right now?",
          options: [
            "Under the bed",
            "In the cage",
            "On the grass",
            "On the table"
          ],
          correct: 2,
          explanation: "Bài đọc nêu rõ: 'Right now, it is hopping on the grass' (ở trên thảm cỏ)."
        },
        {
          id: "en3_5_8",
          level: 4,
          question: "Find the sentence with an error:",
          options: [
            "I have two goldfishes in my tank.",
            "I have two goldfish in my tank.",
            "The dog is under the desk.",
            "She has a cute white cat."
          ],
          correct: 0,
          explanation: "Từ 'fish' và 'goldfish' có hình thức số nhiều giữ nguyên là 'goldfish', không thêm '-es' trong ngữ cảnh thông thường."
        }
      ]
    },
    {
      id: "unit_6_break_time_activities",
      name: "Unit 6: Break Time Activities & Hobbies",
      icon: "⚽",
      desc: "Schoolyard activities (football, badminton, basketball, chess, skipping), asking 'What do you do at break time?' and expressing hobbies.",
      theory: {
        highlights: [
          {
            icon: "🏃",
            title: "Break Time Activities (Hoạt động giờ ra chơi)",
            content: "• <strong>Sports & Games:</strong> play football (đá bóng), play basketball (bóng rổ), play badminton (cầu lông), play chess (chơi cờ vua), play table tennis (bóng bàn), skip rope (nhảy dây), play hide-and-seek (trốn tìm), blind man's bluff (bịt mắt bắt dê).<br/>• <strong>Other activities:</strong> read books (đọc sách), chat with friends (trò chuyện cùng bạn), sing songs (hát)."
          },
          {
            icon: "❓",
            title: "Asking 'What do you do at break time?'",
            content: "• <strong>Question:</strong> <code>What do you do at break time?</code> (Bạn làm gì vào giờ ra chơi?)<br/>• <strong>Answer:</strong> <code>I + [hoạt động]</code>.<br/>• <em>Ví dụ:</em> <code>I play football with my classmates.</code><br/>• <code>I chat with my friends in the classroom.</code>"
          },
          {
            icon: "🌟",
            title: "Do you like...?",
            content: "• <code>Do you like sports?</code> -> <code>Yes, I do. / No, I don't.</code><br/>• <code>I like chess, but my friend likes badminton.</code>"
          }
        ]
      },
      questions: [
        {
          id: "en3_6_1",
          level: 1,
          question: "Which sport is played with a black-and-white round ball by kicking it into a net?",
          options: ["Football", "Badminton", "Chess", "Basketball"],
          correct: 0,
          explanation: "'Football' (bóng đá) là môn thể thao dùng chân đá bóng vào lưới."
        },
        {
          id: "en3_6_2",
          level: 1,
          question: "Complete the sentence: <em>'At break time, the girls like to ... rope in the schoolyard.'</em>",
          options: ["skip", "play", "read", "swim"],
          correct: 0,
          explanation: "Cụm từ cố định: 'skip rope' có nghĩa là 'nhảy dây'."
        },
        {
          id: "en3_6_3",
          level: 2,
          question: "What do you do at break time?<br/>- <em>'I ... chess with Nam.'</em>",
          options: ["play", "do", "make", "listen"],
          correct: 0,
          explanation: "Chơi các môn thể thao trí tuệ hoặc đối kháng dùng động từ 'play' (play chess)."
        },
        {
          id: "en3_6_4",
          level: 2,
          question: "Complete the question: <em>'... do you do at break time?' - 'I read books in the library.'</em>",
          options: ["What", "Where", "Who", "How"],
          correct: 0,
          explanation: "'What do you do...?' hỏi về bạn làm gì vào giờ giải lao."
        },
        {
          id: "en3_6_5",
          level: 3,
          question: "Find the odd one out:",
          options: ["Football", "Basketball", "Badminton", "Classroom"],
          correct: 3,
          explanation: "'Classroom' (phòng học) là phòng học/địa điểm, ba từ còn lại là tên các môn thể thao."
        },
        {
          id: "en3_6_6",
          level: 3,
          question: "Choose the correct sentence to express playing a quiet board game with a partner:",
          options: [
            "We play chess in the quiet room.",
            "We skip football in the room.",
            "We read basketball.",
            "We chat chess."
          ],
          correct: 0,
          explanation: "'We play chess in the quiet room' là câu diễn đạt chuẩn ngữ pháp và ngữ nghĩa."
        },
        {
          id: "en3_6_7",
          level: 4,
          question: "Rearrange the sentence: <strong>do / you / What / sports / play / break / time / at / ?</strong>",
          options: [
            "What sports do you play at break time?",
            "What do you play sports at break time?",
            "At break time what sports you do play?",
            "Do you play what sports at break time?"
          ],
          correct: 0,
          explanation: "Trật tự câu hỏi: Từ để hỏi (What sports) + trợ động từ (do) + chủ ngữ (you) + động từ (play) + trạng ngữ (at break time)?"
        },
        {
          id: "en3_6_8",
          level: 4,
          question: "Read the conversation and choose the correct answer:<br/>- Phong: <em>'Do you want to play badminton with me, Quan?'</em><br/>- Quan: <em>'I'm sorry, I don't have a racket. Let's play table tennis instead!'</em><br/>Why can't Quan play badminton?",
          options: [
            "He is tired.",
            "He doesn't have a racket (vợt cầu lông).",
            "He doesn't like Phong.",
            "It is raining outside."
          ],
          correct: 1,
          explanation: "Quan giải thích: 'I don't have a racket' (Mình không có vợt cầu lông)."
        }
      ]
    }
  ]
};
