function Speak(){
	let text=document.getElementById("input").value;
	let speak=new SpeechSynthesisUtterance(text)
	speechSynthesis.speak(speak);
} 
function pause(){
	speechSynthesis.pause();
}