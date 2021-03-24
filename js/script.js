// //宣告預設表單內容為空 （你想要的話也可以加東西）
// var initSubject = "",
//   initBody = "";

// //按下傳送按鈕後執行
// function submitHandler() {
//   var to = "peggy22509385@gmail.com";
//   var name = nameText.value;
//   var email = emailText.value;
//   var subject = subText.value;
//   //把user填的資料都塞到 mail body 中
//   var body = "" + bodyText.value + "%0A%0A%0A"; //%0A是換行 換了三行
//   body += "From：" + nameText.value + "%0A";
//   body += "Email：" + emailText.value + "%0A";
//   //傳送的主要程式碼
//   mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
//   mailTo.click();
// }
// //在body onload
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
