// 今日の日付を表すDateオブジェクトを作成
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は 0 から始まるので +1
const day = today.getDate();

// コンソールに出力
console.log(year + '年' + month + '月' + day + '日');