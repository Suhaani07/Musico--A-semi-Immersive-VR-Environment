for(var i=0;i<(document.querySelectorAll(".drum").length);i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonpressed = this.innerHTML;
        sound(buttonpressed);
    });
}

document.addEventListener("keydown",function(k)
{
sound(k.key);
});

function sound(k)
{
switch(k)
{
 case "A":
 var sound=new Audio('./public/sounds/crash.mp3');
 sound.play();
 break;
 case "E":
 var sound=new Audio('./public/sounds/snare.mp3');
 sound.play();
 break;
 case "I":
 var sound=new Audio('./public/sounds/tom-2.mp3');
 sound.play();
 break;
 case "O":
 var sound=new Audio('./public/sounds/tom-4.mp3');
 sound.play();
 break;
 case "U":
 var sound=new Audio('./public/sounds/sounds/crash.mp3');
 sound.play();
 break;
 case "a":
 var sound=new Audio('sounds/crash.mp3');
 sound.play();
 break;
 case "e":
 var sound=new Audio('sounds/crash.mp3');
 sound.play();
 break;
 case "i":
 var sound=new Audio('sounds/crash.mp3');
 sound.play();
 break;
 case "o":
 var sound=new Audio('sounds/crash.mp3');
 sound.play();
 break;
 default :
 var sound=new Audio('sounds/crash.mp3');
 sound.play();
 break;
}
}
