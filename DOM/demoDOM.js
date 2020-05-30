// Bài 1 function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor(){
	 document.getElementById("P1").style.color = "green";

  document.getElementById("P2").style.color = "yellow";

  document.getElementById("P3").style.color = "red";

// Bài 2 function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
function changeBgColor(een){
	document.getElementByIgrd("body").style.backgroundColor = "#CCFFFF";
}

// Bài 3 function copyContent(paragraph1, paragraph2): 
//Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 
//(tham số truyền vào có thể là id của 2 đoạn văn).
function coppyContent(paragrap1, paragrap2) {
  var P1 = document.getElementById(paragrap1);
  var P2 = document.getElementById(paragrap2);
  var getText = P2.innerHTML;
  P1.innerHTML = getText;
}

// Bài 4 function changeFontSize(x): 
//Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize(x) {
  if (parseInt(x) === x) {
    document.getElementById("box").style.fontSize = x + "px";
  } else {
    document.write("Nhap lai");
  }
}

// Bài 5 function increaseFontSize(paragraph): 
//Tăng kích thước font chữ của đoạn văn mong muốn (paragraph, tham số truyền vào có thể là id đoạn văn) lên 1 pixel so với kích thước hiện tại,
// kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm)
function increaseFontSize(paragrap) {
  var Select = document.getElementById(paragrap);
  var fontSize = window
    .getComputedStyle(Select, null)
    .getPropertyValue("font-size");
  var afterChange = parseFloat(fontSize) + 1;
  if (afterChange > 30) {
    document.write(" Giảm size ");
  } else {
    Select.style.fontSize = afterChange + "px";
  }
}

// Bài 6 function decreaseFontSize(paragraph): Giảm kích thước font chữ của đoạn văn mong muốn 
//(paragraph, tham số truyền vào có thể là id đoạn văn) xuống 1 pixels so với kích thước hiện tại, 
//kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(paragrap) {
  var Select = document.getElementById(para);
  var fontSize = window
    .getComputedStyle(Select, null)
    .getPropertyValue("font-size");
  var afterChange = parseFloat(fontSize) - 1;
  if (afterChange < 10) {
    document.write(" Đã quá mức quy định ");
  } else {
    Select.style.fontSize = afterChange + "px";
  }
}