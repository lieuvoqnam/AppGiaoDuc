/**
 * math-4-generator.js - BỘ SINH BÀI TOÁN NGẪU NHIÊN LỚP 4
 * Tự động tạo bài tập với số liệu ngẫu nhiên không trùng lặp sau mỗi lần tải trang
 * Chuẩn Chương trình GDPT 2018 (Kết nối tri thức, Cánh diều, Chân trời sáng tạo)
 */

window.Math4Generator = (function () {
  'use strict';

  // --- TIỆN ÍCH TOÁN HỌC NGẪU NHIÊN ---
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Tạo 4 phương án trắc nghiệm với 1 đáp án đúng và 3 đáp án nhiễu logic
  function makeChoices(correctVal, distractorFunc, formatter = (v) => v.toString()) {
    const correctStr = formatter(correctVal);
    const optionsSet = new Set([correctStr]);
    let tries = 0;

    while (optionsSet.size < 4 && tries < 30) {
      tries++;
      const distVal = distractorFunc(correctVal, tries);
      if (distVal !== null && distVal !== undefined) {
        optionsSet.add(formatter(distVal));
      }
    }

    // Nếu vẫn thiếu phương án thì bù các giá trị lân cận
    let delta = 1;
    while (optionsSet.size < 4) {
      if (typeof correctVal === 'number') {
        optionsSet.add(formatter(correctVal + delta));
        optionsSet.add(formatter(Math.max(1, correctVal - delta)));
      } else {
        optionsSet.add(`Phương án ${optionsSet.size + 1}`);
      }
      delta++;
    }

    const options = shuffle(Array.from(optionsSet));
    const correctIdx = options.indexOf(correctStr);
    return { options, correct: correctIdx };
  }

  // ========================================================
  // 1. CÁC HÀM SINH BÀI TOÁN THEO CHỦ ĐỀ
  // ========================================================

  const generators = {
    // --- CHỦ ĐỀ 1: SỐ TỰ NHIÊN & PHÉP TÍNH ---
    natural_numbers: [
      // Level 1: Hàng và Lớp
      function gen_nn_hang_lop() {
        const d_trieu = randInt(1, 99);
        const d_nghin = randInt(100, 999);
        const d_donvi = randInt(100, 999);
        const numStr = `${d_trieu}${d_nghin}${d_donvi}`;
        const numFormatted = formatNumber(parseInt(numStr));

        const positions = [
          { name: "hàng trăm nghìn, lớp nghìn", val: numStr[numStr.length - 6] },
          { name: "hàng chục nghìn, lớp nghìn", val: numStr[numStr.length - 5] },
          { name: "hàng nghìn, lớp nghìn", val: numStr[numStr.length - 4] },
          { name: "hàng triệu, lớp triệu", val: numStr[numStr.length - 7] }
        ].filter(p => p.val !== undefined);

        const target = randChoice(positions);
        const digit = target.val;

        const allPos = [
          "hàng trăm nghìn, lớp nghìn",
          "hàng chục nghìn, lớp nghìn",
          "hàng nghìn, lớp nghìn",
          "hàng triệu, lớp triệu",
          "hàng trăm, lớp đơn vị",
          "hàng chục triệu, lớp triệu"
        ];

        const otherPos = shuffle(allPos.filter(p => p !== target.name)).slice(0, 3);
        const opts = shuffle([target.name, ...otherPos]);

        return {
          id: `gen_nn_hl_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Chữ số <strong>${digit}</strong> trong số <strong>${numFormatted}</strong> thuộc hàng nào, lớp nào?`,
          options: opts,
          correct: opts.indexOf(target.name),
          explanation: `Trong số ${numFormatted}, từ phải sang trái lần lượt là lớp đơn vị, lớp nghìn và lớp triệu. Chữ số ${digit} thuộc <strong>${target.name}</strong>.`
        };
      },

      // Level 1: Dấu hiệu chia hết
      function gen_nn_chia_het() {
        const type = randChoice(['2 và 5', '9', '3']);
        if (type === '2 và 5') {
          const correctNum = randInt(10, 99) * 10;
          const distractors = [
            randInt(10, 99) * 10 + 5,
            randInt(10, 99) * 10 + randChoice([1, 3, 7]),
            randInt(10, 99) * 10 + randChoice([2, 4, 6])
          ];
          const opts = shuffle([correctNum.toString(), ...distractors.map(d => d.toString())]);
          return {
            id: `gen_nn_ch_${Date.now()}_${Math.random()}`,
            level: 1,
            type: "choice",
            question: "Trong các số sau, số nào vừa chia hết cho 2 vừa chia hết cho 5?",
            options: opts,
            correct: opts.indexOf(correctNum.toString()),
            explanation: `Số vừa chia hết cho 2 vừa chia hết cho 5 phải có chữ số tận cùng là 0. Số <strong>${correctNum}</strong> có tận cùng là 0.`
          };
        } else {
          const base = randInt(11, 89);
          const correctNum = base * 9;
          const distractors = [correctNum + 1, correctNum + 2, correctNum - 1];
          const opts = shuffle([correctNum.toString(), ...distractors.map(d => d.toString())]);
          return {
            id: `gen_nn_ch_${Date.now()}_${Math.random()}`,
            level: 1,
            type: "choice",
            question: "Trong các số sau, số nào chia hết cho 9?",
            options: opts,
            correct: opts.indexOf(correctNum.toString()),
            explanation: `Một số chia hết cho 9 khi tổng các chữ số của nó chia hết cho 9. Số <strong>${correctNum}</strong> có tổng các chữ số chia hết cho 9.`
          };
        }
      },

      // Level 2: Làm tròn số
      function gen_nn_lam_tron() {
        const thousands = randInt(100, 890);
        const hundreds = randInt(0, 9);
        const rest = randInt(10, 99);
        const original = thousands * 1000 + hundreds * 100 + rest;

        const isUp = hundreds >= 5;
        const rounded = (isUp ? thousands + 1 : thousands) * 1000;

        const choices = makeChoices(rounded, (val, tryIdx) => {
          if (tryIdx === 1) return (thousands) * 1000;
          if (tryIdx === 2) return (thousands + 1) * 1000;
          if (tryIdx === 3) return original - rest;
          return val + (tryIdx - 2) * 1000;
        }, (v) => formatNumber(v));

        return {
          id: `gen_nn_lt_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Làm tròn số <strong>${formatNumber(original)}</strong> đến hàng nghìn ta được số nào?`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Chữ số hàng nghìn là ${(thousands % 10)}. Chữ số ngay sau nó (hàng trăm) là ${hundreds} ${isUp ? '≥ 5 nên ta cộng thêm 1 vào hàng nghìn' : '< 5 nên ta giữ nguyên hàng nghìn'}, các chữ số phía sau chuyển thành 0 → <strong>${formatNumber(rounded)}</strong>.`
        };
      },

      // Level 2: Phép nhân với số có 2 chữ số
      function gen_nn_nhan() {
        const a = randInt(120, 450);
        const b = randChoice([24, 25, 32, 35, 45, 18]);
        const product = a * b;

        const choices = makeChoices(product, (val, tryIdx) => {
          if (tryIdx === 1) return val + 100;
          if (tryIdx === 2) return val - 100;
          if (tryIdx === 3) return val + a;
          return val + tryIdx * 200;
        }, (v) => formatNumber(v));

        return {
          id: `gen_nn_mul_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Kết quả của phép tính: <strong>${a} × ${b}</strong> là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Đặt tính rồi tính: ${a} × ${b} = <strong>${formatNumber(product)}</strong>.`
        };
      },

      // Level 3: Tính thuận tiện nhân với tổng/hiệu
      function gen_nn_thuan_tien() {
        const k = randInt(25, 75);
        const a = randInt(110, 190);
        const b = a - 100;
        const res = k * 100;

        const choices = makeChoices(res, (val, tryIdx) => {
          if (tryIdx === 1) return val * 10;
          if (tryIdx === 2) return val + 1000;
          return val - 500;
        }, (v) => formatNumber(v));

        return {
          id: `gen_nn_tt_${Date.now()}_${Math.random()}`,
          level: 3,
          type: "choice",
          question: `Tính bằng cách thuận tiện nhất: <strong>${k} × ${a} - ${k} × ${b}</strong>`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Áp dụng tính chất nhân một số với một hiệu: ${k} × (${a} - ${b}) = ${k} × 100 = <strong>${formatNumber(res)}</strong>.`
        };
      },

      // Level 4: Bài toán chữ số trang sách
      function gen_nn_trang_sach() {
        const pages3d = randInt(15, 60);
        const totalPages = 99 + pages3d;
        // Trang 1-9: 9 chữ số; Trang 10-99: 180 chữ số; Trang 100+: pages3d * 3 chữ số
        const totalDigits = 9 + 180 + pages3d * 3;

        const choices = makeChoices(totalDigits, (val, tryIdx) => {
          if (tryIdx === 1) return val - 12;
          if (tryIdx === 2) return val + 15;
          return val + tryIdx * 9;
        });

        return {
          id: `gen_nn_ts_${Date.now()}_${Math.random()}`,
          level: 4,
          type: "choice",
          question: `Để đánh số trang của một quyển sách từ trang 1 đến trang <strong>${totalPages}</strong>, người ta phải dùng tất cả bao nhiêu chữ số?`,
          options: choices.options,
          correct: choices.correct,
          explanation: `• Từ trang 1 đến 9 có: (9 - 1 + 1) = 9 trang × 1 = 9 chữ số.<br/>• Từ trang 10 đến 99 có: (99 - 10 + 1) = 90 trang × 2 = 180 chữ số.<br/>• Từ trang 100 đến ${totalPages} có: (${totalPages} - 100 + 1) = ${pages3d} trang × 3 = ${pages3d * 3} chữ số.<br/>Tổng cộng: 9 + 180 + ${pages3d * 3} = <strong>${totalDigits} chữ số</strong>.`
        };
      }
    ],

    // --- CHỦ ĐỀ 2: PHÂN SỐ VÀ CÁC PHÉP TÍNH ---
    fractions: [
      // Level 1: Rút gọn phân số
      function gen_fr_rut_gon() {
        const simplePairs = [
          [2, 3], [3, 4], [3, 5], [4, 5], [5, 6], [2, 7], [3, 8], [5, 7]
        ];
        const [a, b] = randChoice(simplePairs);
        const k = randChoice([4, 6, 8, 9, 12]);
        const num = a * k;
        const den = b * k;

        const correctStr = `${a}/${b}`;
        const distractors = [
          `${a * 2}/${b * 2}`,
          `${b}/${a}`,
          `${a + 1}/${b + 1}`
        ];
        const opts = shuffle([correctStr, ...distractors]);

        return {
          id: `gen_fr_rg_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Rút gọn phân số <strong>${num}/${den}</strong> thành phân số tối giản ta được:`,
          options: opts,
          correct: opts.indexOf(correctStr),
          explanation: `Chia cả tử số và mẫu số cho ước chung lớn nhất là ${k}: ${num} : ${k} = ${a}; ${den} : ${k} = ${b}. Phân số tối giản là <strong>${a}/${b}</strong>.`
        };
      },

      // Level 2: Cộng trừ khác mẫu số
      function gen_fr_cong_tru() {
        const isAdd = Math.random() > 0.5;
        const m1 = randChoice([2, 3, 5]);
        const m2 = randChoice([3, 7, 4]);
        if (m1 === m2) return gen_fr_rut_gon(); // fallback

        const t1 = randInt(1, m1 - 1);
        const t2 = randInt(1, m2 - 1);

        const commonDen = m1 * m2;
        const resNum = isAdd ? (t1 * m2 + t2 * m1) : (t1 * m2 - t2 * m1);
        if (resNum <= 0) return gen_fr_rut_gon(); // ensure positive

        const d = gcd(resNum, commonDen);
        const simNum = resNum / d;
        const simDen = commonDen / d;
        const correctStr = `${simNum}/${simDen}`;

        const distractors = [
          `${isAdd ? t1 + t2 : Math.abs(t1 - t2)}/${m1 + m2}`,
          `${resNum + 2}/${commonDen}`,
          `${simDen}/${simNum}`
        ];
        const opts = shuffle([correctStr, ...distractors]);

        return {
          id: `gen_fr_calc_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Kết quả của phép tính: <strong>${t1}/${m1} ${isAdd ? '+' : '-'} ${t2}/${m2}</strong> là:`,
          options: opts,
          correct: opts.indexOf(correctStr),
          explanation: `Quy đồng mẫu số chung là ${commonDen}: ${t1}/${m1} = ${t1 * m2}/${commonDen}; ${t2}/${m2} = ${t2 * m1}/${commonDen}.<br/>Tính: (${t1 * m2} ${isAdd ? '+' : '-'} ${t2 * m1})/${commonDen} = ${resNum}/${commonDen} = <strong>${simNum}/${simDen}</strong>.`
        };
      },

      // Level 2: Tìm x với phân số
      function gen_fr_tim_x() {
        const a = randChoice([2, 3, 4]);
        const b = randChoice([5, 7, 9]);
        const c = randChoice([1, 2]);
        const d = randChoice([2, 3]);

        // x * a/b = c/d -> x = (c/d) : (a/b) = (c*b)/(d*a)
        const num = c * b;
        const den = d * a;
        const g = gcd(num, den);
        const sNum = num / g;
        const sDen = den / g;
        const correctStr = `x = ${sNum}/${sDen}`;

        const distractors = [
          `x = ${sDen}/${sNum}`,
          `x = ${sNum + 1}/${sDen}`,
          `x = ${(c * a)}/${(d * b)}`
        ];
        const opts = shuffle([correctStr, ...distractors]);

        return {
          id: `gen_fr_x_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Tìm x, biết: <strong>x × ${a}/${b} = ${c}/${d}</strong>`,
          options: opts,
          correct: opts.indexOf(correctStr),
          explanation: `x = ${c}/${d} : ${a}/${b} = ${c}/${d} × ${b}/${a} = ${num}/${den} = <strong>${sNum}/${sDen}</strong>.`
        };
      },

      // Level 3: Tìm phân số của một số
      function gen_fr_phan_so_cua_so() {
        const den = randChoice([4, 5, 6, 7]);
        const num = randInt(2, den - 1);
        const k = randChoice([6, 8, 9, 12, 15]);
        const total = den * k;
        const cut = num * k;
        const remain = total - cut;

        const choices = makeChoices(remain, (val, tryIdx) => {
          if (tryIdx === 1) return cut;
          if (tryIdx === 2) return val + k;
          return val - k;
        }, (v) => `${v}m`);

        return {
          id: `gen_fr_word_${Date.now()}_${Math.random()}`,
          level: 3,
          type: "choice",
          question: `Một tấm vải dài <strong>${total}m</strong>. Người thợ may cắt <strong>${num}/${den}</strong> chiều dài tấm vải để may áo. Hỏi tấm vải còn lại bao nhiêu mét?`,
          options: choices.options,
          correct: choices.correct,
          explanation: `• Chiều dài tấm vải may áo là: ${total} × ${num}/${den} = ${cut}m.<br/>• Chiều dài tấm vải còn lại là: ${total} - ${cut} = <strong>${remain}m</strong>.`
        };
      },

      // Level 4: Dãy phân số quy luật đặc biệt
      function gen_fr_nang_cao() {
        const n = randChoice([16, 32, 64, 128]);
        const correctStr = `${n - 1}/${n}`;
        const distractors = [`1`, `${n + 1}/${n}`, `${(n/2) - 1}/${n/2}`];
        const opts = shuffle([correctStr, ...distractors]);

        let seq = "1/2 + 1/4 + 1/8";
        if (n >= 16) seq += " + 1/16";
        if (n >= 32) seq += " + 1/32";
        if (n >= 64) seq += " + 1/64";
        if (n >= 128) seq += " + 1/128";

        return {
          id: `gen_fr_adv_${Date.now()}_${Math.random()}`,
          level: 4,
          type: "choice",
          question: `Tính nhanh tổng của dãy số: <strong>S = ${seq}</strong>`,
          options: opts,
          correct: opts.indexOf(correctStr),
          explanation: `Nhân cả 2 vế với 2: 2 × S = 1 + ${seq.slice(0, seq.lastIndexOf('+'))}.<br/>Lấy (2 × S) - S = 1 - 1/${n} = <strong>${n - 1}/${n}</strong>.`
        };
      }
    ],

    // --- CHỦ ĐỀ 3: ĐẠI LƯỢNG VÀ ĐO LƯỜNG ---
    measurements: [
      // Level 1: Đổi tấn tạ kg
      function gen_ms_khoi_luong() {
        const tan = randInt(2, 8);
        const kg = randChoice([35, 45, 50, 75, 80]);
        const totalKg = tan * 1000 + kg;

        const choices = makeChoices(totalKg, (val, tryIdx) => {
          if (tryIdx === 1) return tan * 100 + kg;
          if (tryIdx === 2) return tan * 10000 + kg;
          return val + 100;
        }, (v) => `${formatNumber(v)} kg`);

        return {
          id: `gen_ms_kl_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Điền số thích hợp: <strong>${tan} tấn ${kg} kg = ...... kg</strong>`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Vì 1 tấn = 1 000 kg nên ${tan} tấn = ${tan * 1000} kg. Cộng thêm ${kg} kg = <strong>${formatNumber(totalKg)} kg</strong>.`
        };
      },

      // Level 1: Thế kỉ lịch sử
      function gen_ms_the_ki() {
        const events = [
          { year: 938, event: "Ngô Quyền đại thắng quân Nam Hán trên sông Bạch Đằng" },
          { year: 1010, event: "Vua Lý Thái Tổ dời đô về Thăng Long" },
          { year: 1288, event: "Chiến thắng Bạch Đằng đại thắng quân Nguyên Mông" },
          { year: 1428, event: "Lê Lợi đại thắng quân Minh, lên ngôi vua" },
          { year: 1789, event: "Quang Trung đại phá quân Thanh" },
          { year: 1945, event: "Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH" },
          { year: 1975, event: "Giải phóng hoàn toàn miền Nam, thống nhất đất nước" }
        ];
        const ev = randChoice(events);
        const y = ev.year;
        const century = Math.floor((y - 1) / 100) + 1;
        const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];
        const correctStr = `Thế kỉ ${roman[century - 1]}`;

        const distractors = [
          `Thế kỉ ${roman[century - 2] || 'I'}`,
          `Thế kỉ ${roman[century] || 'XXI'}`,
          `Thế kỉ ${roman[century + 1] || 'XXII'}`
        ];
        const opts = shuffle([correctStr, ...distractors]);

        return {
          id: `gen_ms_tk_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Năm <strong>${y}</strong>, ${ev.event}. Năm đó thuộc thế kỉ nào?`,
          options: opts,
          correct: opts.indexOf(correctStr),
          explanation: `Năm ${y}: Lấy phần nghìn và trăm cộng thêm 1: ${Math.floor(y / 100)} + 1 = ${century} → <strong>${correctStr}</strong>.`
        };
      },

      // Level 2: Đổi diện tích m² sang dm²
      function gen_ms_dien_tich() {
        const m2 = randInt(3, 9);
        const dm2 = randChoice([8, 15, 24, 45, 60]);
        const totalDm2 = m2 * 100 + dm2;

        const choices = makeChoices(totalDm2, (val, tryIdx) => {
          if (tryIdx === 1) return m2 * 10 + dm2;
          if (tryIdx === 2) return m2 * 1000 + dm2;
          return val + 50;
        }, (v) => `${v} dm²`);

        return {
          id: `gen_ms_dt_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Điền số thích hợp: <strong>${m2} m² ${dm2} dm² = ...... dm²</strong>`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Vì 1 m² = 100 dm² nên ${m2} m² = ${m2 * 100} dm². Cộng thêm ${dm2} dm² = <strong>${totalDm2} dm²</strong>.`
        };
      },

      // Level 3: Lát gạch căn phòng
      function gen_ms_lat_gach() {
        const length = randChoice([6, 8, 10, 12]);
        const width = randChoice([4, 5, 6]);
        const roomAreaM2 = length * width;
        const roomAreaDm2 = roomAreaM2 * 100;
        const brickSide = randChoice([4, 5]); // 4dm or 5dm
        const brickAreaDm2 = brickSide * brickSide;

        if (roomAreaDm2 % brickAreaDm2 !== 0) return gen_ms_khoi_luong();
        const totalBricks = roomAreaDm2 / brickAreaDm2;

        const choices = makeChoices(totalBricks, (val, tryIdx) => {
          if (tryIdx === 1) return val / 2;
          if (tryIdx === 2) return val + 50;
          return val + tryIdx * 25;
        }, (v) => `${v} viên`);

        return {
          id: `gen_ms_tile_${Date.now()}_${Math.random()}`,
          level: 3,
          type: "choice",
          question: `Một căn phòng hình chữ nhật có chiều dài <strong>${length}m</strong>, chiều rộng <strong>${width}m</strong>. Người ta dùng các viên gạch vuông cạnh <strong>${brickSide}dm</strong> để lát kín nền. Cần bao nhiêu viên gạch?`,
          options: choices.options,
          correct: choices.correct,
          explanation: `• Diện tích căn phòng: ${length} × ${width} = ${roomAreaM2} m² = ${formatNumber(roomAreaDm2)} dm².<br/>• Diện tích 1 viên gạch: ${brickSide} × ${brickSide} = ${brickAreaDm2} dm².<br/>• Số viên gạch cần dùng: ${formatNumber(roomAreaDm2)} : ${brickAreaDm2} = <strong>${totalBricks} viên</strong>.`
        };
      }
    ],

    // --- CHỦ ĐỀ 4: HÌNH HỌC ---
    geometry: [
      // Level 1: Nhận biết góc
      function gen_geo_goc() {
        const types = [
          { desc: "lớn hơn góc vuông và bé hơn góc bẹt", ans: "Góc tù" },
          { desc: "bé hơn góc vuông", ans: "Góc nhọn" },
          { desc: "bằng hai góc vuông", ans: "Góc bẹt" }
        ];
        const item = randChoice(types);
        const opts = shuffle(["Góc nhọn", "Góc vuông", "Góc tù", "Góc bẹt"]);

        return {
          id: `gen_geo_angle_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Góc có số đo <strong>${item.desc}</strong> được gọi là:`,
          options: opts,
          correct: opts.indexOf(item.ans),
          explanation: `Theo định nghĩa hình học lớp 4: Góc ${item.desc} chính là <strong>${item.ans}</strong>.`
        };
      },

      // Level 2: Diện tích hình bình hành
      function gen_geo_hbh() {
        const base = randChoice([12, 14, 15, 16, 18, 20]);
        const h = randChoice([6, 8, 9, 10, 12]);
        const area = base * h;

        const choices = makeChoices(area, (val, tryIdx) => {
          if (tryIdx === 1) return val / 2;
          if (tryIdx === 2) return (base + h) * 2;
          return val + base;
        }, (v) => `${v} cm²`);

        return {
          id: `gen_geo_hbh_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Một hình bình hành có độ dài đáy là <strong>${base}cm</strong>, chiều cao tương ứng <strong>${h}cm</strong>. Diện tích hình bình hành là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Diện tích hình bình hành = Đáy × Chiều cao = ${base} × ${h} = <strong>${area} cm²</strong>.`
        };
      },

      // Level 2: Diện tích hình thoi
      function gen_geo_hthoi() {
        const m = randChoice([12, 14, 16, 18, 20]);
        const n = randChoice([8, 10, 12, 15]);
        const area = (m * n) / 2;

        const choices = makeChoices(area, (val, tryIdx) => {
          if (tryIdx === 1) return val * 2; // bẫy quên chia 2!
          if (tryIdx === 2) return (m + n) * 2;
          return val + m;
        }, (v) => `${v} cm²`);

        return {
          id: `gen_geo_ht_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Một hình thoi có độ dài hai đường chéo lần lượt là <strong>${m}cm</strong> và <strong>${n}cm</strong>. Diện tích hình thoi là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Diện tích hình thoi S = (m × n) : 2 = (${m} × ${n}) : 2 = <strong>${area} cm²</strong>.`
        };
      },

      // Level 3: Tìm đường chéo hình thoi khi biết diện tích
      function gen_geo_hthoi_nguoc() {
        const m = randChoice([8, 10, 12, 16]);
        const n = randChoice([12, 14, 15, 18]);
        const area = (m * n) / 2;

        const choices = makeChoices(n, (val, tryIdx) => {
          if (tryIdx === 1) return area / m; // bẫy quên nhân 2!
          if (tryIdx === 2) return val + 4;
          return val - 2;
        }, (v) => `${v}cm`);

        return {
          id: `gen_geo_ht_rev_${Date.now()}_${Math.random()}`,
          level: 3,
          type: "choice",
          question: `Một hình thoi có diện tích <strong>${area} cm²</strong>, độ dài một đường chéo là <strong>${m}cm</strong>. Độ dài đường chéo còn lại là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Ta có: (m × n) : 2 = S → m × n = 2 × S = 2 × ${area} = ${area * 2}.<br/>Đường chéo còn lại là: ${area * 2} : ${m} = <strong>${n}cm</strong>.`
        };
      }
    ],

    // --- CHỦ ĐỀ 5: 5 DẠNG TOÁN CÓ LỜI VĂN ---
    word_problems: [
      // Level 1: Trung bình cộng 3 số
      function gen_wp_tbc() {
        const tbc = randInt(25, 45);
        const delta1 = randInt(2, 6);
        const delta2 = randInt(2, 6);
        const a = tbc - delta1;
        const b = tbc + delta2;
        const c = tbc * 3 - (a + b);

        const choices = makeChoices(tbc, (val, tryIdx) => {
          if (tryIdx === 1) return val + 2;
          if (tryIdx === 2) return val - 2;
          return val + tryIdx;
        }, (v) => `${v}kg`);

        return {
          id: `gen_wp_tbc_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Ba bạn An, Bình, Chi có cân nặng lần lượt là <strong>${a}kg, ${b}kg, ${c}kg</strong>. Trung bình mỗi bạn nặng bao nhiêu ki-lô-gam?`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Tổng cân nặng 3 bạn là: ${a} + ${b} + ${c} = ${tbc * 3}kg.<br/>Trung bình mỗi bạn nặng: ${tbc * 3} : 3 = <strong>${tbc}kg</strong>.`
        };
      },

      // Level 2: Tổng - Hiệu
      function gen_wp_tong_hieu() {
        const small = randInt(20, 60);
        const diff = randInt(12, 36);
        const big = small + diff;
        const sum = big + small;

        const choices = makeChoices(big, (val, tryIdx) => {
          if (tryIdx === 1) return small;
          if (tryIdx === 2) return (sum + diff);
          return val + 5;
        });

        return {
          id: `gen_wp_th_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Hai số có tổng là <strong>${sum}</strong> và hiệu là <strong>${diff}</strong>. Số lớn là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Số lớn = (Tổng + Hiệu) : 2 = (${sum} + ${diff}) : 2 = ${sum + diff} : 2 = <strong>${big}</strong> (Số bé là ${small}).`
        };
      },

      // Level 2: Tổng - Tỉ
      function gen_wp_tong_ti() {
        const parts1 = randChoice([2, 3]);
        const parts2 = randChoice([3, 4, 5]);
        if (parts1 === parts2) return gen_wp_tong_hieu();

        const totalParts = parts1 + parts2;
        const onePart = randChoice([12, 15, 20, 25]);
        const total = totalParts * onePart;
        const girls = parts1 * onePart;
        const boys = parts2 * onePart;

        const choices = makeChoices(girls, (val, tryIdx) => {
          if (tryIdx === 1) return boys;
          if (tryIdx === 2) return val + onePart;
          return val - onePart;
        }, (v) => `${v} em`);

        return {
          id: `gen_wp_tt_${Date.now()}_${Math.random()}`,
          level: 2,
          type: "choice",
          question: `Khối lớp 4 có tất cả <strong>${total} học sinh</strong>. Số học sinh nữ bằng <strong>${parts1}/${parts2}</strong> số học sinh nam. Số học sinh nữ là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `• Tổng số phần bằng nhau: ${parts1} + ${parts2} = ${totalParts} phần.<br/>• Giá trị 1 phần: ${total} : ${totalParts} = ${onePart} em.<br/>• Số học sinh nữ: ${onePart} × ${parts1} = <strong>${girls} em</strong> (Nam là ${boys} em).`
        };
      },

      // Level 3: Hiệu - Tỉ (Tuổi bố và con)
      function gen_wp_hieu_ti() {
        const partsSon = randChoice([1, 2]);
        const partsFather = randChoice([5, 7, 9]);
        const diffParts = partsFather - partsSon;
        const onePart = randChoice([4, 5, 6]);
        const diff = diffParts * onePart;
        const fatherAge = partsFather * onePart;
        const sonAge = partsSon * onePart;

        const choices = makeChoices(fatherAge, (val, tryIdx) => {
          if (tryIdx === 1) return sonAge;
          if (tryIdx === 2) return val + diff;
          return val - 4;
        }, (v) => `${v} tuổi`);

        return {
          id: `gen_wp_ht_${Date.now()}_${Math.random()}`,
          level: 3,
          type: "choice",
          question: `Bố hơn con <strong>${diff} tuổi</strong>. Tuổi con bằng <strong>${partsSon}/${partsFather}</strong> tuổi bố. Tuổi của bố hiện nay là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `• Hiệu số phần bằng nhau: ${partsFather} - ${partsSon} = ${diffParts} phần.<br/>• Tuổi con là: ${diff} : ${diffParts} × ${partsSon} = ${sonAge} tuổi.<br/>• Tuổi bố là: ${sonAge} + ${diff} = <strong>${fatherAge} tuổi</strong>.`
        };
      },

      // Level 4: Trung bình cộng nâng cao
      function gen_wp_tbc_nang_cao() {
        const an = randInt(16, 22);
        const binh = randInt(18, 24);
        const extra = randChoice([3, 4, 5]);
        // TBC = (an + binh + extra) / 2
        const sum2 = an + binh + extra;
        if (sum2 % 2 !== 0) return gen_wp_hieu_ti();
        const tbc = sum2 / 2;
        const cuong = tbc + extra;

        const choices = makeChoices(cuong, (val, tryIdx) => {
          if (tryIdx === 1) return tbc;
          if (tryIdx === 2) return val - 2;
          return val + 4;
        }, (v) => `${v} viên`);

        return {
          id: `gen_wp_tbc_adv_${Date.now()}_${Math.random()}`,
          level: 4,
          type: "choice",
          question: `An có <strong>${an} viên bi</strong>, Bình có <strong>${binh} viên bi</strong>. Cường có số bi nhiều hơn mức trung bình cộng của cả ba bạn là <strong>${extra} viên bi</strong>. Cường có số viên bi là:`,
          options: choices.options,
          correct: choices.correct,
          explanation: `Gọi TBC là trung bình cộng số bi 3 bạn. Cường có: TBC + ${extra}.<br/>Tổng số bi 3 bạn: 3 × TBC = ${an} + ${binh} + TBC + ${extra} = ${an + binh + extra} + TBC.<br/>→ 2 × TBC = ${an + binh + extra} → TBC = ${tbc} viên.<br/>Số bi của Cường: ${tbc} + ${extra} = <strong>${cuong} viên</strong>.`
        };
      }
    ],

    // --- CHỦ ĐỀ 6: THỐNG KÊ VÀ XÁC SUẤT ---
    statistics_probability: [
      function gen_stat_prob() {
        const green = randInt(4, 8);
        const red = randInt(1, 3);
        const colors = ["xanh", "đỏ"];
        const absentColor = randChoice(["vàng", "tím", "đen", "trắng"]);

        const opts = [
          `Lấy được viên bi màu ${absentColor}`,
          `Lấy được viên bi màu xanh`,
          `Lấy được viên bi màu đỏ`,
          `Lấy được viên bi màu xanh hoặc đỏ`
        ];

        return {
          id: `gen_st_1_${Date.now()}_${Math.random()}`,
          level: 1,
          type: "choice",
          question: `Trong hộp có ${green} viên bi màu xanh và ${red} viên bi màu đỏ. Lấy ngẫu nhiên 1 viên bi. Sự kiện nào sau đây là <strong>KHÔNG THỂ</strong> xảy ra?`,
          options: shuffle(opts),
          correct: -1, // will set below
          explanation: `Trong hộp chỉ có bi màu xanh và bi màu đỏ, hoàn toàn không có bi màu ${absentColor}. Do đó sự kiện "Lấy được viên bi màu ${absentColor}" là không thể xảy ra.`
        };
      }
    ]
  };

  // Sửa lại index cho câu hỏi xác suất
  function fixProbGen(q) {
    const targetText = "không thể";
    const foundIdx = q.options.findIndex(opt => opt.includes("vàng") || opt.includes("tím") || opt.includes("đen") || opt.includes("trắng"));
    q.correct = foundIdx;
    return q;
  }

  // ========================================================
  // 2. PUBLIC API: SINH BÀI TẬP & ĐỀ THI
  // ========================================================

  /**
   * Sinh danh sách bài tập ngẫu nhiên theo chủ đề và mức độ
   */
  function generatePractice(topicId, level = 'all', count = 10) {
    const topicGens = generators[topicId] || generators.natural_numbers;
    let questions = [];

    // Tạo các câu hỏi ngẫu nhiên từ generators
    for (let i = 0; i < count * 4; i++) {
      const genFunc = randChoice(topicGens);
      let q = genFunc();
      if (q.id.includes('gen_st_1')) q = fixProbGen(q);

      if (level === 'all' || q.level === parseInt(level)) {
        // Tránh trùng lặp nội dung tương tự
        if (!questions.some(existing => existing.question === q.question)) {
          questions.push(q);
        }
      }
      if (questions.length >= count) break;
    }

    // Nếu bộ sinh chưa đủ theo level yêu cầu, lấy từ ngân hàng mẫu tĩnh và đổi số
    if (questions.length < 3 && window.MATH4_DATA) {
      const topic = window.MATH4_DATA.topics.find(t => t.id === topicId);
      if (topic) {
        let staticQ = topic.questions;
        if (level !== 'all') staticQ = staticQ.filter(q => q.level === parseInt(level));
        questions.push(...shuffle(staticQ).slice(0, count - questions.length));
      }
    }

    return shuffle(questions).slice(0, count);
  }

  /**
   * Sinh một Đề thi thử Học Kỳ ngẫu nhiên hoàn toàn mới (10 câu)
   */
  function generateMockExam() {
    const examQuestions = [];

    // Chọn từ mỗi chủ đề 1-2 câu hỏi ngẫu nhiên được sinh mới
    const topicKeys = ['natural_numbers', 'fractions', 'measurements', 'geometry', 'word_problems'];
    
    // 2 câu Số tự nhiên
    examQuestions.push(generators.natural_numbers[0]());
    examQuestions.push(generators.natural_numbers[3]());

    // 2 câu Phân số
    examQuestions.push(generators.fractions[1]());
    examQuestions.push(generators.fractions[3]());

    // 2 câu Đo lường
    examQuestions.push(generators.measurements[0]());
    examQuestions.push(generators.measurements[1]());

    // 2 câu Hình học
    examQuestions.push(generators.geometry[1]());
    examQuestions.push(generators.geometry[2]());

    // 2 câu Toán lời văn (Tổng - Tỉ hoặc Hiệu - Tỉ hoặc TBC nâng cao)
    examQuestions.push(generators.word_problems[2]());
    examQuestions.push(generators.word_problems[4]());

    // Gán topic label và xáo trộn vị trí
    const labeled = examQuestions.map((q, idx) => {
      q.id = `mock_exam_${Date.now()}_${idx}`;
      return q;
    });

    return shuffle(labeled);
  }

  return {
    generatePractice,
    generateMockExam
  };
})();
