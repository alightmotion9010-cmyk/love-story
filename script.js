/*=============================
LOADING
=============================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

},1800);

});

/*=============================
MUSIC
=============================*/

const music=document.getElementById("bgMusic");

const enterBtn=document.getElementById("enterBtn");

enterBtn.addEventListener("click",()=>{

music.play();

document.querySelector(".opening").scrollIntoView({

behavior:"smooth"

});

});

/*=============================
POPUP
=============================*/

const popup=document.getElementById("letterPopup");

const openBtn=document.getElementById("letterBtn");

const closeBtn=document.getElementById("closeLetter");

openBtn.onclick=()=>{

popup.style.display="flex";

}

closeBtn.onclick=()=>{

popup.style.display="none";

}

window.onclick=(e)=>{

if(e.target==popup){

popup.style.display="none";

}

}

/*=============================
SCROLL ANIMATION
=============================*/

const hidden=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hidden.forEach(el=>observer.observe(el));

