//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject = "",
  initBody = "";

//按下傳送按鈕後執行
function submitHandler() {
  var to = "peggy22509385@gmail.com";
  var name = nameText.value;
  var email = emailText.value;
  var subject = subText.value;
  //把user填的資料都塞到 mail body 中
  var body = "" + bodyText.value + "%0A%0A%0A"; //%0A是換行 換了三行
  body += "From：" + nameText.value + "%0A";
  body += "Email：" + emailText.value + "%0A";
  //傳送的主要程式碼
  mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
  mailTo.click();
}
//在body onload
// function init() {
//   subText.value = initSubject;
//   toText.value = initTo;
//   bodyText.value = initBody;
// }

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});
let lan = document.getElementById("lan-btns");
lan.onchange = function changeLan() {
  console.log(lan.value, lan.value === "cn");

  if (lan.value === "en") {
    // alert("en");
    document.body.className = "en-active";
  } else if (lan.value === "cn") {
    // alert("cn");

    document.body.className = "cn-active";
  }
};
// console.log(typeof lan);
// console.log(lan);

// // en-acctive
// let enBtn = document.querySelector(".en-btn");
// enBtn.onclick = function enActive() {
//   document.body.className = "en-active";
// };
// // cn-acctive
// let cnBtn = document.querySelector(".cn-btn");
// cnBtn.onclick = function cnActive() {
//   document.body.className = "cn-active";
// };
// // en-acctive
// let enBtn = document.queryCommandValue(".en-btn");
// enBtn.onclick = function enActive(){
//   document.body.className="en-active";
// }
