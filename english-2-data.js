/**
 * english-2-data.js - Interactive English Learning Data for Grade 2
 * Aligned with Primary English 2 (Global Success & Family and Friends)
 * Features Text-to-Speech (TTS) Native Audio & Phonics
 */

window.ENGLISH2_DATA = {
  topics: [
    {
      id: "numbers_school_things",
      name: "Unit 1: Numbers & School Things",
      icon: "🎒",
      desc: "Numbers from 1 to 20, school supplies (pen, pencil, ruler, book, bag) and classroom commands.",
      theory: {
        highlights: [
          {
            icon: "🔢",
            title: "Numbers 1 - 20 (Số đếm 1 đến 20)",
            english: "one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty",
            content: "• <strong>1 - 10:</strong> one (1), two (2), three (3), four (4), five (5), six (6), seven (7), eight (8), nine (9), ten (10).<br/>• <strong>11 - 20:</strong> eleven (11), twelve (12), thirteen (13), fourteen (14), fifteen (15), sixteen (16), seventeen (17), eighteen (18), nineteen (19), twenty (20)."
          },
          {
            icon: "✏️",
            title: "School Things (Đồ dùng học tập)",
            english: "pen, pencil, ruler, eraser, book, school bag, pencil case, notebook",
            content: "• <strong>pen:</strong> bút mực • <strong>pencil:</strong> bút chì • <strong>ruler:</strong> thước kẻ.<br/>• <strong>eraser / rubber:</strong> cục tẩy • <strong>book:</strong> quyển sách • <strong>school bag:</strong> cặp sách.<br/>• <strong>pencil case:</strong> hộp bút • <strong>notebook:</strong> quyển vở."
          },
          {
            icon: "💬",
            title: "Mẫu câu hỏi đồ vật & số lượng",
            english: "What is this? It is a pencil. How many books? There are three books.",
            content: "• <strong>Hỏi đồ vật:</strong> <em>What is this?</em> (Đây là cái gì?) ➔ <em>It is a / an...</em> (Nó là một...)<br/>• <strong>Hỏi số lượng:</strong> <em>How many + đồ vật số nhiều?</em> ➔ <em>There is one... / There are two, three...</em>"
          },
          {
            icon: "📢",
            title: "Classroom Commands (Khẩu lệnh lớp học)",
            english: "Stand up! Sit down! Open your book! Close your book! Listen carefully!",
            content: "• <strong>Stand up!</strong>: Đứng lên! • <strong>Sit down!</strong>: Ngồi xuống!<br/>• <strong>Open your book!</strong>: Mở sách ra! • <strong>Close your book!</strong>: Gấp sách lại!"
          }
        ]
      },
      questions: [
        {
          id: "eng2_1_1",
          level: 1,
          question: "What is this? <em>(Đây là cái gì?)</em><br/>👉 ✏️",
          options: ["It is a ruler.", "It is a pencil.", "It is a book.", "It is a bag."],
          correct: 1,
          explanation: "Chiếc bút chì trong tiếng Anh là 'pencil'. Cả câu: 'It is a pencil.'"
        },
        {
          id: "eng2_1_2",
          level: 1,
          question: "Số <strong>15</strong> trong tiếng Anh được viết là:",
          options: ["Fifty", "Fifteen", "Five", "Fourteen"],
          correct: 1,
          explanation: "Số 15 là 'fifteen'. Chú ý: 50 là fifty, 5 là five."
        },
        {
          id: "eng2_1_3",
          level: 2,
          question: "Khi thầy giáo bước vào lớp và nói: <strong>\"Stand up, please!\"</strong>, học sinh cần làm gì?",
          options: ["Ngồi xuống ghế", "Đứng dậy chào thầy", "Mở cặp sách", "Đi ra ngoài lớp"],
          correct: 1,
          explanation: "'Stand up' có nghĩa là đứng lên / đứng dậy."
        },
        {
          id: "eng2_1_4",
          level: 2,
          question: "Điền từ còn thiếu vào chỗ trống:<br/><strong>\"How many pens? - There ... five pens.\"</strong>",
          options: ["is", "are", "am", "be"],
          correct: 1,
          explanation: "Với số lượng từ 2 trở lên (số nhiều - five pens), ta dùng cấu trúc 'There are...'."
        },
        {
          id: "eng2_1_5",
          level: 3,
          question: "Sắp xếp các từ sau thành câu đúng:<br/><strong>pencil / is / This / my / .</strong>",
          options: [
            "This is pencil my.",
            "This is my pencil.",
            "My pencil this is.",
            "Is this pencil my."
          ],
          correct: 1,
          explanation: "Cấu trúc giới thiệu đồ vật: 'This is my pencil.' (Đây là chiếc bút chì của tớ)."
        },
        {
          id: "eng2_1_6",
          level: 3,
          question: "Đọc đoạn hội thoại:<br/><em>Tom: \"What do you have in your bag?\"<br/>Mai: \"I have two books, three pencils and one ruler.\"</em><br/>Hỏi bạn Mai có tất cả bao nhiêu đồ dùng học tập trong cặp?",
          options: ["5 đồ dùng", "6 đồ dùng", "7 đồ dùng", "8 đồ dùng"],
          correct: 1,
          explanation: "Tổng số đồ dùng: 2 (books) + 3 (pencils) + 1 (ruler) = 6 đồ dùng (six things)."
        },
        {
          id: "eng2_1_7",
          level: 4,
          question: "Chọn câu trả lời chính xác nhất:<br/><strong>\"Is this an eraser?\" - \"...\"</strong> (nếu đúng)",
          options: [
            "Yes, it is.",
            "Yes, it does.",
            "No, it isn't.",
            "Yes, I do."
          ],
          correct: 0,
          explanation: "Câu hỏi bắt đầu bằng 'Is this...?' trả lời đồng ý là 'Yes, it is.'"
        },
        {
          id: "eng2_1_8",
          level: 4,
          question: "Tìm từ có phần gạch chân phát âm khác với các từ còn lại:<br/><strong>b<u>e</u>d, p<u>e</u>n, r<u>e</u>d, h<u>e</u></strong>",
          options: ["bed", "pen", "red", "he"],
          correct: 3,
          explanation: "'he' có âm /iː/, trong khi 'bed', 'pen', 'red' đều phát âm là âm /e/."
        }
      ]
    },
    {
      id: "colors_and_shapes",
      name: "Unit 2: Colors & Shapes",
      icon: "🎨",
      desc: "Colors (red, blue, green, yellow, pink...) and shapes (circle, square, triangle, star) with descriptive sentences.",
      theory: {
        highlights: [
          {
            icon: "🌈",
            title: "Colors (Màu sắc)",
            english: "red, blue, yellow, green, orange, pink, purple, brown, black, white",
            content: "• <strong>red:</strong> màu đỏ • <strong>blue:</strong> màu xanh lam • <strong>yellow:</strong> màu vàng.<br/>• <strong>green:</strong> màu xanh lá • <strong>orange:</strong> màu cam • <strong>pink:</strong> màu hồng.<br/>• <strong>purple:</strong> màu tím • <strong>black:</strong> màu đen • <strong>white:</strong> màu trắng."
          },
          {
            icon: "🔺",
            title: "Shapes (Hình khối)",
            english: "circle, square, triangle, rectangle, star, heart",
            content: "• <strong>circle:</strong> hình tròn • <strong>square:</strong> hình vuông.<br/>• <strong>triangle:</strong> hình tam giác • <strong>rectangle:</strong> hình chữ nhật.<br/>• <strong>star:</strong> hình ngôi sao • <strong>heart:</strong> hình trái tim."
          },
          {
            icon: "💬",
            title: "Mẫu câu hỏi màu sắc & miêu tả hình khối",
            english: "What color is it? It's blue. It is a green circle. I see a yellow star.",
            content: "• <strong>Hỏi màu:</strong> <em>What color is it?</em> ➔ <em>It is + màu sắc</em> (It's yellow).<br/>• <strong>Miêu tả đồ vật có màu và hình:</strong> <em>Tính từ màu sắc đứng TRƯỚC danh từ hình khối</em>.<br/>  <em>Ví dụ:</em> a red square (một hình vuông màu đỏ), a blue circle (một hình tròn màu xanh)."
          },
          {
            icon: "✨",
            title: "Phonics & Rhyme (Ngữ âm vui nhộn)",
            english: "c is for cat, c is for cup. b is for blue, b is for ball.",
            content: "• Luyện phát âm chuẩn các âm đầu: /b/, /k/, /d/, /r/, /s/ qua từ vựng quen thuộc."
          }
        ]
      },
      questions: [
        {
          id: "eng2_2_1",
          level: 1,
          question: "Hình nào dưới đây có tên tiếng Anh là <strong>\"triangle\"</strong>?",
          options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình ngôi sao"],
          correct: 2,
          explanation: "'Triangle' nghĩa là hình tam giác."
        },
        {
          id: "eng2_2_2",
          level: 1,
          question: "Màu <strong>xanh lá cây</strong> trong tiếng Anh là:",
          options: ["Blue", "Green", "Yellow", "Red"],
          correct: 1,
          explanation: "Màu xanh lá cây là 'Green'. 'Blue' là xanh lam, 'Yellow' là màu vàng."
        },
        {
          id: "eng2_2_3",
          level: 2,
          question: "Hoàn thành câu hỏi màu sắc: <strong>\"... color is your bag? - It's pink.\"</strong>",
          options: ["How", "Who", "What", "Where"],
          correct: 2,
          explanation: "Cấu trúc hỏi màu sắc là: 'What color...?'"
        },
        {
          id: "eng2_2_4",
          level: 2,
          question: "Dịch cụm từ sau sang tiếng Anh: <strong>\"Một hình tròn màu đỏ\"</strong>",
          options: [
            "A circle red",
            "A red circle",
            "Red a circle",
            "A circle is red"
          ],
          correct: 1,
          explanation: "Trong tiếng Anh, tính từ chỉ màu sắc luôn đứng trước danh từ: 'a red circle'."
        },
        {
          id: "eng2_2_5",
          level: 3,
          question: "Đọc câu: <em>\"The sun is yellow and the sky is blue.\"</em>. Câu này có nghĩa là gì?",
          options: [
            "Mặt trời màu đỏ và bầu trời màu đen.",
            "Mặt trời màu vàng và bầu trời màu xanh da trời.",
            "Mặt trăng màu vàng và biển màu xanh.",
            "Ngôi sao màu vàng và mây màu trắng."
          ],
          correct: 1,
          explanation: "'The sun is yellow' = Mặt trời màu vàng; 'the sky is blue' = bầu trời màu xanh da trời."
        },
        {
          id: "eng2_2_6",
          level: 3,
          question: "Quả táo màu đỏ pha trộn màu vàng với màu xanh lam sẽ tạo thành màu gì trong tiếng Anh?",
          options: ["Yellow + Blue = Green", "Red + Blue = Yellow", "Black + White = Pink", "Green + Red = White"],
          correct: 0,
          explanation: "Màu vàng (yellow) trộn với màu xanh lam (blue) tạo thành màu xanh lá cây (green)."
        },
        {
          id: "eng2_2_7",
          level: 4,
          question: "Chọn câu viết đúng ngữ pháp:",
          options: [
            "I have two blue squares.",
            "I have two square blue.",
            "I have two blues square.",
            "I have two blues squares."
          ],
          correct: 0,
          explanation: "Số lượng (two) + tính từ màu sắc (blue - không thêm s) + danh từ số nhiều (squares). Cả câu: 'I have two blue squares.'"
        },
        {
          id: "eng2_2_8",
          level: 4,
          question: "Câu đố: <em>\"I have 4 equal sides and 4 corners. What shape am I?\"</em>",
          options: ["A circle", "A triangle", "A square", "A star"],
          correct: 2,
          explanation: "Hình có 4 cạnh bằng nhau (4 equal sides) và 4 góc (4 corners) là hình vuông ('a square')."
        }
      ]
    },
    {
      id: "family_and_body",
      name: "Unit 3: My Family & My Body",
      icon: "👨‍👩‍👧",
      desc: "Family members (dad, mom, brother, sister, baby) and body parts (eyes, ears, nose, hands, legs).",
      theory: {
        highlights: [
          {
            icon: "👨‍👩‍👧‍👦",
            title: "Family Members (Thành viên gia đình)",
            english: "father, mother, brother, sister, baby, grandfather, grandmother",
            content: "• <strong>father / dad:</strong> bố, cha • <strong>mother / mom:</strong> mẹ.<br/>• <strong>brother:</strong> anh trai, em trai • <strong>sister:</strong> chị gái, em gái.<br/>• <strong>baby:</strong> em bé sơ sinh • <strong>grandfather / grandpa:</strong> ông • <strong>grandmother / grandma:</strong> bà."
          },
          {
            icon: "👀",
            title: "Parts of the Body (Bộ phận cơ thể)",
            english: "eyes, ears, nose, mouth, face, head, hair, hands, arms, legs, feet",
            content: "• <strong>eye(s):</strong> mắt • <strong>ear(s):</strong> tai • <strong>nose:</strong> mũi • <strong>mouth:</strong> miệng.<br/>• <strong>hand(s):</strong> bàn tay • <strong>arm(s):</strong> cánh tay • <strong>leg(s):</strong> chân • <strong>foot / feet:</strong> bàn chân."
          },
          {
            icon: "💬",
            title: "Mẫu câu chỉ người & hành động cơ thể",
            english: "Who is this? This is my mother. Touch your eyes! I have two hands.",
            content: "• <strong>Hỏi ai đây:</strong> <em>Who is this?</em> ➔ <em>This is my father / mother...</em><br/>• <strong>Ra lệnh cử động:</strong> <em>Touch your nose!</em> (Chạm vào mũi của bạn!)<br/>• <strong>Nói về cơ thể:</strong> <em>I have two ears.</em> (Tớ có 2 cái tai)."
          },
          {
            icon: "🩺",
            title: "Healthy Habits (Thói quen vệ sinh)",
            english: "Wash your hands before eating. Brush your teeth every day.",
            content: "• Rửa tay trước khi ăn: <em>Wash your hands!</em><br/>• Đánh răng mỗi ngày: <em>Brush your teeth!</em>"
          }
        ]
      },
      questions: [
        {
          id: "eng2_3_1",
          level: 1,
          question: "Từ nào dưới đây có nghĩa là <strong>\"mẹ\"</strong> trong tiếng Anh?",
          options: ["Father", "Mother", "Brother", "Grandfather"],
          correct: 1,
          explanation: "'Mother' (hoặc 'Mom') có nghĩa là mẹ."
        },
        {
          id: "eng2_3_2",
          level: 1,
          question: "Bộ phận cơ thể nào dùng để <strong>nghe âm thanh</strong>?",
          options: ["Nose", "Eyes", "Ears", "Mouth"],
          correct: 2,
          explanation: "Đôi tai ('ears') dùng để nghe (listen)."
        },
        {
          id: "eng2_3_3",
          level: 2,
          question: "Điền từ thích hợp vào câu: <strong>\"I have two ... and one nose.\"</strong>",
          options: ["mouth", "eyes", "nose", "head"],
          correct: 1,
          explanation: "Con người có hai mắt (two eyes) và một chiếc mũi (one nose)."
        },
        {
          id: "eng2_3_4",
          level: 2,
          question: "Khi bạn nói: <strong>\"Touch your head!\"</strong>, em sẽ làm hành động gì?",
          options: [
            "Chạm tay vào mũi",
            "Chạm tay lên đầu",
            "Nhấc chân lên",
            "Nhắm mắt lại"
          ],
          correct: 1,
          explanation: "'Head' nghĩa là cái đầu, 'touch your head' = chạm vào đầu bạn."
        },
        {
          id: "eng2_3_5",
          level: 3,
          question: "Hoàn thành đoạn hội thoại:<br/><strong>A: \"... is this?\" - B: \"This is my brother.\"</strong>",
          options: ["What", "Where", "Who", "How"],
          correct: 2,
          explanation: "Hỏi về người ('my brother' - anh/em trai), ta dùng từ để hỏi là 'Who' (Who is this?)."
        },
        {
          id: "eng2_3_6",
          level: 3,
          question: "Chọn từ số nhiều bất quy tắc đúng của từ <strong>\"foot\"</strong> (bàn chân):",
          options: ["foots", "feets", "feet", "footies"],
          correct: 2,
          explanation: "Danh từ số nhiều của 'foot' là 'feet' (hai bàn chân = two feet)."
        },
        {
          id: "eng2_3_7",
          level: 4,
          question: "Đọc câu: <em>\"My sister has big black eyes and long brown hair.\"</em>. Chị của bạn có đặc điểm gì?",
          options: [
            "Đôi mắt to màu nâu và mái tóc đen ngắn",
            "Đôi mắt to màu đen và mái tóc dài màu nâu",
            "Đôi mắt nhỏ màu xanh và tóc xoăn",
            "Mũi cao và miệng nhỏ"
          ],
          correct: 1,
          explanation: "'Big black eyes' = đôi mắt to màu đen; 'long brown hair' = mái tóc dài màu nâu."
        },
        {
          id: "eng2_3_8",
          level: 4,
          question: "Điền từ thích hợp: <strong>\"We use our ... to run and jump.\"</strong>",
          options: ["ears", "eyes", "legs", "mouth"],
          correct: 2,
          explanation: "Chúng ta dùng đôi chân ('legs') để chạy và nhảy (to run and jump)."
        }
      ]
    },
    {
      id: "animals_and_pets",
      name: "Unit 4: Animals & Pets",
      icon: "🐶",
      desc: "Pets (dog, cat, bird, rabbit, fish) and zoo animals (monkey, elephant, tiger, lion, bear) with action verbs.",
      theory: {
        highlights: [
          {
            icon: "🐱",
            title: "Pets (Thú cưng)",
            english: "dog, cat, bird, fish, rabbit, duck, puppy, kitten",
            content: "• <strong>dog:</strong> con chó • <strong>cat:</strong> con mèo • <strong>bird:</strong> con chim.<br/>• <strong>fish:</strong> con cá • <strong>rabbit:</strong> con thỏ • <strong>duck:</strong> con vịt.<br/>• <strong>puppy:</strong> chó con • <strong>kitten:</strong> mèo con."
          },
          {
            icon: "🦁",
            title: "Zoo Animals (Động vật sở thú)",
            english: "monkey, elephant, tiger, lion, bear, zebra, giraffe",
            content: "• <strong>monkey:</strong> con khỉ • <strong>elephant:</strong> con voi • <strong>tiger:</strong> con hổ.<br/>• <strong>lion:</strong> sư tử • <strong>bear:</strong> con gấu • <strong>zebra:</strong> ngựa vằn."
          },
          {
            icon: "🏃",
            title: "Actions (Hành động của động vật)",
            english: "run, jump, fly, swim, climb",
            content: "• <strong>fly:</strong> bay (birds can fly) • <strong>swim:</strong> bơi (fish can swim).<br/>• <strong>climb:</strong> leo trèo (monkeys can climb) • <strong>jump:</strong> nhảy (rabbits can jump)."
          },
          {
            icon: "💬",
            title: "Mẫu câu hỏi khả năng & sở thích",
            english: "Can a bird fly? Yes, it can. Can a dog fly? No, it cannot. I like cats.",
            content: "• <strong>Hỏi khả năng:</strong> <em>Can + con vật + hành động?</em> ➔ <em>Yes, it can / No, it can't.</em><br/>• <strong>Nói sở thích:</strong> <em>I like dogs / cats...</em>"
          }
        ]
      },
      questions: [
        {
          id: "eng2_4_1",
          level: 1,
          question: "Con vật nào có tên tiếng Anh là <strong>\"elephant\"</strong>?",
          options: ["Con khỉ", "Con voi", "Con hổ", "Con gấu"],
          correct: 1,
          explanation: "'Elephant' có nghĩa là con voi."
        },
        {
          id: "eng2_4_2",
          level: 1,
          question: "Hành động nào con cá (a fish) có thể làm được?",
          options: ["Fly (bay)", "Swim (bơi)", "Climb (leo cây)", "Sing (hát)"],
          correct: 1,
          explanation: "Cá sống dưới nước và biết bơi ('swim')."
        },
        {
          id: "eng2_4_3",
          level: 2,
          question: "Trả lời câu hỏi: <strong>\"Can a bird fly?\"</strong>",
          options: [
            "Yes, it can.",
            "No, it can't.",
            "Yes, I do.",
            "No, I cannot."
          ],
          correct: 0,
          explanation: "Loài chim có cánh và biết bay, nên câu trả lời là: 'Yes, it can.'"
        },
        {
          id: "eng2_4_4",
          level: 2,
          question: "Dịch câu sau sang tiếng Việt: <strong>\"I like little rabbits.\"</strong>",
          options: [
            "Tớ có một chú mèo nhỏ.",
            "Tớ thích những chú thỏ nhỏ.",
            "Tớ ghét con thỏ.",
            "Con thỏ đang ăn cà rốt."
          ],
          correct: 1,
          explanation: "'I like' = Tớ thích; 'little rabbits' = những chú thỏ nhỏ."
        },
        {
          id: "eng2_4_5",
          level: 3,
          question: "Chọn câu trả lời đúng cho câu hỏi: <strong>\"What animal is that?\"</strong><br/>👉 🐒",
          options: [
            "It's a tiger.",
            "It's a monkey.",
            "It's a bear.",
            "It's an elephant."
          ],
          correct: 1,
          explanation: "Hình chú khỉ trong tiếng Anh là 'a monkey'."
        },
        {
          id: "eng2_4_6",
          level: 3,
          question: "Tìm từ không cùng nhóm: <strong>dog, cat, book, rabbit</strong>",
          options: ["dog", "cat", "book", "rabbit"],
          correct: 2,
          explanation: "'dog, cat, rabbit' là các con vật (animals/pets). Riêng 'book' là quyển sách (school item)."
        },
        {
          id: "eng2_4_7",
          level: 4,
          question: "Câu đố: <em>\"I am big and grey. I have a long nose called a trunk and two big ears. What am I?\"</em>",
          options: ["A mouse", "A lion", "An elephant", "A monkey"],
          correct: 2,
          explanation: "Con vật to lớn màu xám có vòi dài ('trunk') và hai tai to là con voi ('an elephant')."
        },
        {
          id: "eng2_4_8",
          level: 4,
          question: "Chọn phương án đúng để hoàn thành câu: <strong>\"Look at the birds! They are ... in the sky.\"</strong>",
          options: ["swimming", "flying", "climbing", "running"],
          correct: 1,
          explanation: "Đàn chim đang bay trên bầu trời: 'They are flying in the sky.'"
        }
      ]
    },
    {
      id: "food_drinks_toys",
      name: "Unit 5: Food, Drinks & Toys",
      icon: "🍕",
      desc: "Delicious food & drinks (apple, banana, milk, water, pizza) and favorite toys (ball, robot, doll, car, kite).",
      theory: {
        highlights: [
          {
            icon: "🍎",
            title: "Food & Fruits (Thức ăn & Trái cây)",
            english: "apple, banana, orange, pizza, chicken, bread, rice, cake",
            content: "• <strong>apple:</strong> quả táo • <strong>banana:</strong> quả chuối • <strong>orange:</strong> quả cam.<br/>• <strong>pizza:</strong> bánh pizza • <strong>chicken:</strong> thịt gà • <strong>bread:</strong> bánh mì.<br/>• <strong>rice:</strong> cơm • <strong>cake:</strong> bánh ngọt."
          },
          {
            icon: "🥛",
            title: "Drinks (Đồ uống)",
            english: "milk, water, juice, orange juice, tea",
            content: "• <strong>milk:</strong> sữa tươi • <strong>water:</strong> nước lọc.<br/>• <strong>juice:</strong> nước ép trái cây • <strong>orange juice:</strong> nước cam vắt."
          },
          {
            icon: "🧸",
            title: "Toys (Đồ chơi)",
            english: "ball, doll, robot, toy car, kite, teddy bear, puzzle, yo-yo",
            content: "• <strong>ball:</strong> quả bóng • <strong>doll:</strong> búp bê • <strong>robot:</strong> người máy.<br/>• <strong>toy car:</strong> ô tô đồ chơi • <strong>kite:</strong> con diều • <strong>teddy bear:</strong> gấu bông."
          },
          {
            icon: "💬",
            title: "Mẫu câu hỏi món ăn & đồ chơi",
            english: "Do you like apples? Yes, I do. What do you have? I have a blue robot.",
            content: "• <strong>Hỏi sở thích ăn uống:</strong> <em>Do you like + món ăn?</em> ➔ <em>Yes, I do / No, I don't.</em><br/>• <strong>Hỏi bạn có đồ chơi gì:</strong> <em>What do you have?</em> ➔ <em>I have a / an + đồ chơi.</em>"
          }
        ]
      },
      questions: [
        {
          id: "eng2_5_1",
          level: 1,
          question: "Từ nào có nghĩa là <strong>\"quả chuối\"</strong>?",
          options: ["Apple", "Orange", "Banana", "Pizza"],
          correct: 2,
          explanation: "'Banana' có nghĩa là quả chuối."
        },
        {
          id: "eng2_5_2",
          level: 1,
          question: "Đồ chơi nào có tên tiếng Anh là <strong>\"teddy bear\"</strong>?",
          options: ["Con diều", "Gấu bông", "Người máy", "Búp bê"],
          correct: 1,
          explanation: "'Teddy bear' là chú gấu bông đồ chơi."
        },
        {
          id: "eng2_5_3",
          level: 2,
          question: "Chọn câu trả lời đúng cho câu hỏi: <strong>\"Do you like milk?\"</strong> (nếu thích uống sữa)",
          options: [
            "Yes, I do.",
            "No, I don't.",
            "Yes, it is.",
            "I have milk."
          ],
          correct: 0,
          explanation: "Câu hỏi bắt đầu bằng 'Do you...?' trả lời đồng ý là 'Yes, I do.'"
        },
        {
          id: "eng2_5_4",
          level: 2,
          question: "Đồ uống nào tốt nhất cho sức khỏe giúp cơ thể không bị thiếu nước?",
          options: ["Water (Nước lọc)", "Cola (Nước ngọt có ga)", "Coffee (Cà phê)", "Tea (Trà đặc)"],
          correct: 0,
          explanation: "'Water' (nước lọc sạch) là thức uống quan trọng và lành mạnh nhất cho cơ thể mỗi ngày."
        },
        {
          id: "eng2_5_5",
          level: 3,
          question: "Sắp xếp lại các từ thành câu đúng:<br/><strong>have / I / new / a / robot / .</strong>",
          options: [
            "I have a new robot.",
            "I a have new robot.",
            "A new robot have I.",
            "I have robot a new."
          ],
          correct: 0,
          explanation: "Cấu trúc câu khẳng định: S + have + a/an + tính từ + danh từ ➔ 'I have a new robot.' (Tớ có một chú người máy mới)."
        },
        {
          id: "eng2_5_6",
          level: 3,
          question: "Đọc câu: <em>\"Let's fly a kite in the park!\"</em>. Câu này rủ bạn làm gì?",
          options: [
            "Cùng đá bóng trong sân",
            "Cùng đi thả diều ở công viên",
            "Cùng đi bơi ở hồ nước",
            "Cùng vẽ tranh con diều"
          ],
          correct: 1,
          explanation: "'Fly a kite' = thả diều, 'in the park' = ở trong công viên."
        },
        {
          id: "eng2_5_7",
          level: 4,
          question: "Đọc đoạn hội thoại:<br/><em>Lucy: \"I'm hungry. Let's eat some pizza!\"<br/>Ben: \"Good idea! And I'm thirsty, I want some orange juice.\"</em><br/>Bạn Ben đang cảm thấy thế nào và muốn uống gì?",
          options: [
            "Ben đang đói bụng và muốn ăn pizza",
            "Ben đang khát nước và muốn uống nước cam vắt",
            "Ben đang no và muốn đi ngủ",
            "Ben đang lạnh và muốn uống sữa nóng"
          ],
          correct: 1,
          explanation: "'Thirsty' = khát nước; 'orange juice' = nước ép cam."
        },
        {
          id: "eng2_5_8",
          level: 4,
          question: "Chọn từ điền vào chỗ trống: <strong>\"Every morning, I drink a glass of warm ... to stay healthy.\"</strong>",
          options: ["pizza", "milk", "cake", "kite"],
          correct: 1,
          explanation: "'A glass of warm milk' = một ly sữa ấm. Sữa là đồ uống duy nhất trong các lựa chọn."
        }
      ]
    }
  ]
};
