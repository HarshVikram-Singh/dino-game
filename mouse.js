
 var character=document.getElementById("character");
var block=document.getElementById("block");
var c=0;
var highest={};
document.cookie="hyy=" + 123;

arr=document.cookie.split("; ");
console.log(arr);
for( var i = 0; i<arr.length;i++){
	 w = arr[i].split("=")[0];
	 v = arr[i].split("=")[1];
	highest[w] = v;
}

if(highest.topscore==undefined){
	highest.topscore=0;
}
 highscore=highest.topscore;
document.getElementById("s2").innerHTML=highscore;

function jump(){
	if(character.classList!="animate"){
		character.classList.add("animate");
          }
          	c++;
		
		document.getElementById("s1").innerHTML=c;
		if(c>highscore){
			highscore=c;
          document.getElementById("s2").innerHTML=highscore; }

	     setTimeout(function(){
		character.classList.remove("animate");
	},300);
}
document.addEventListener("keydown",function(event){
	jump();
})

var checkDead =setInterval(function(){
var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));

if(blockLeft<20 && blockLeft>0 && characterTop>=130){
	block.style.animation="none";
	block.style.display="none";
	alert("Game Over, Score: "+c);
	document.cookie="topscore=" +highscore;
	c = 0;
//indow.location.reload();
}
},10);
