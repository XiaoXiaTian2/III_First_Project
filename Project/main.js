// 搜索綁定Enter (未確定實用性)
// var searchFunction = document.getElementById("searchBtn");
// searchFunction.addEventListener("keydown", (event) => {
//   if (event.keyCode === 13 || event.key === "Enter") {
//     event.preventDefault();
//     console.log(1);
//     searchFunction.click();
//   }
// });

// 判斷登入
if (localStorage.getItem('userID') == 'abc@gmail.com' && localStorage.getItem('userPWD') == 'a11111') {
  document.getElementsByClassName('userNav')[0].innerHTML = `<div style="padding-top: 35px;"><a href="">${localStorage.getItem('userName')}, </a>歡迎您</div><a href="" onclick="localStorage.clear();" class="text-decoration-underline">登出</a>
  `;
  document.getElementsByClassName('userNav2')[0].innerHTML = `<div style="padding-top: 35px;"><a style="font-size:20px;background-color:transparent;color:black;box-shadow:none;" href="">${localStorage.getItem('userName')}, </a>歡迎您<a href="" onclick="localStorage.clear();" class="text-end text-decoration-underline d-block" style="font-size:20px;background-color:transparent;color:black;box-shadow:none;">登出</a></div>
  `;
}

// localStorage.clear();

// 搜索導轉
function searchTo() {
  var searchBarinput = document.getElementById("searchBar").value;
  if (searchBarinput === "靈境行者") {
    location.href = "./introduction.html";
  } else {
    alert("尚未收錄，請至回信系統反映!");
    location.href = '#mailIcon2';
  }
}

// 淺橘，淺綠，灰色，淺藍，淺黃，腮紅
var colorPlate = [
  "rgb(255, 248, 220)",
  "rgb(240, 255, 255)",
  "rgb(245, 245, 245)",
  "rgb(255, 245, 238)",
  "rgb(199, 237, 204)",
  "rgb(250, 240, 230)",
];
function changeBgColor(para) {
  if (ContentTable.style.backgroundColor == `${colorPlate[para]}`) {
    ContentTable.style.backgroundColor = "#fff";
  } else {
    ContentTable.style.backgroundColor = `${colorPlate[para]}`;
  }
}

// 字體大小變化
function changeFontSize(para) {
  document.getElementById("reading").style.fontSize = `${para}px`;
}

// 信箱圖示變化
document.getElementById("mailIcon").addEventListener("click", () => {
  document.getElementById("mailIcon").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">' +
    '<path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2"/>' +
    "</svg>";
});
document.getElementById("mailIcon2").addEventListener("click", () => {
  document.getElementById("mailIcon2").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">' +
    '<path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2"/>' +
    "</svg>";
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("mailIcon").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">' +
    '<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>' +
    "</svg>";
  document.getElementById("mailIcon2").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">' +
    '<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>' +
    "</svg>";
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  document.getElementById("mailIcon").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">' +
    '<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>' +
    "</svg>";
  document.getElementById("mailIcon2").innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">' +
    '<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>' +
    "</svg>";
});

// 複製信箱功能
function copy() {
  const copy = document.getElementById('copyemail');
  navigator.clipboard.writeText(copy.innerText);
  alert('已複製到剪貼簿');
}

// 回到頂部按鈕(jQuery)
$(function () {
  var $win = $(window);
  var $backToTop = $(".js-back-to-top");
  $backToTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
});
