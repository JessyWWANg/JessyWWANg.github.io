// var bt = document.getElementById('Bpics');
// bt.addEventListener('click', showMsg, false); //鼠标单击的时候调用showMes这个函数
// function showMsg() {
//     alert("事件监听");
// }

//onMouse event
function mOn1(obj){
  document.getElementById("num").innerHTML = "T";
}
function mOut1(obj){
	document.getElementById("num").innerHTML = "W";
}
//hover buttons to make main text change-articles/reviews/poems
//Left_text1
function mOn2(obj){
  document.getElementById("MainText").innerHTML =
  "/<br><br>Is it okay to die at 90<br>Is it okay to die at 80<br>Is it okay to die at 70<br>Is it okay to die at 60<br>Is it okay to die at 50<br>Is it okay to die at 40<br>Is it okay to die at 10<br>/";
}
function mOut2(obj){
	document.getElementById("MainText").innerHTML = "  ";
}
//Left_text2
function mOn3(obj){
  document.getElementById("MainText").innerHTML =
  "/<br><br>(MATERIAL)  vs  (MATERIAL)'<br><br>/";
}
function mOut3(obj){
	document.getElementById("MainText").innerHTML = "  ";
}

function mOn4(obj){
  document.getElementById("MainText").innerHTML =
  "/<br><br>About three hours after death, rigor mortis -- a stiffening of muscles -- sets in. Around 12 hours after death, the body will feel cool, and within 24 hours (depending on body fat and external temperatures), it will lose all internal heat in a process called algor mortis. The muscle tissue begins to lose its stiffness after about 36 hours, and within about 72 hours of dying, the body's rigor mortis will subside.<br>/";
}
function mOut4(obj){
	document.getElementById("MainText").innerHTML = "  ";
}

function mOn5(obj){
  document.getElementById("MainText").innerHTML =
  "/<br>Human is essentially a summer food. This is because we now prefer our human fresh, which mean they have to be recently caught, which for both tactical and economic reasons take place at depths of less than 25 fathoms. Humans tend to be hungriest and most active (i.e., most trappable) at summer water temperature of 45-50°F. In the autumn, some Maine human migrate out into deeper water either for warmth or to avoid the heavy waves that pound new England’s coast all winter. Some burrow into the bottom. They might hibernate; nobody's sure.<br><br>　　based on <i>Consider the Lobster</i> by David Wallace<br>/";
}
function mOut5(obj){
	document.getElementById("MainText").innerHTML = "  ";
}

function mOn6(obj){
  document.getElementById("MainText").innerHTML =
  "/<br><br>露の世は<br>露の世ながら<br>さりながら<br><br>　　小林 一茶<br>/";
}
function mOut6(obj){
	document.getElementById("MainText").innerHTML = "  ";
}
