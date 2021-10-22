// JavaScript Document

var leftPhone = document.document.querySelector("#left-phone");
var centerPhone = document.document.querySelector("#center-phone");
var rightPhone = document.document.querySelector("#right-phone");

//var leadcaption = document.getElementById("lead-caption");

function switchPhoneLeft(){
	
	leftPhone.classList.remove("animate-left-toRight")
	centerPhone.classList.remove("animate-center-toLeft")
	rightPhone.classList.remove("animate-right-toCenter")
	
	var tmp = centerPhone.src;
	leftPhone.classList.add("animate-left-toCenter")
	centerPhone.classList.add("animate-center-toRight")
	rightPhone.classList.add("animate-right-toLeft")
	centerPhone.src=leftPhone.src;
	leftPhone.src=rightPhone.src;
	rightPhone.src=tmp;
	
}

function switchPhoneRight(){
	
	leftPhone.classList.remove("animate-left-toCenter")
	centerPhone.classList.remove("animate-center-toRight")
	rightPhone.classList.remove("animate-right-toLeft")
	
	var tmp = centerPhone.src;
	leftPhone.classList.add("animate-left-toRight")
	centerPhone.classList.add("animate-center-toLeft")
	rightPhone.classList.add("animate-right-toCenter")
	centerPhone.src=leftPhone.src;
	rightPhone.src=leftPhone.src;
	leftPhone.src=tmp;
	
}
/*
leftPhone.addEventListener("click", switchPhoneLeft);
rightPhone.addEventListener("click", switchPhoneRight);
*/