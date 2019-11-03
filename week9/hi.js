//key press event
document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 68) {
    alert("YOU PRESSED D!");
  }
})

//onMouse event
function mOn(obj){
	obj.innerHTML="HELLOOO"
}
function mOut(obj){
	obj.innerHTML="try hovering!"
}
