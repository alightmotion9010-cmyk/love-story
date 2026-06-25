/*=========================================
LOVE LETTER WEBSITE
SCRIPT.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

const loading = document.getElementById("loading");

const enterBtn = document.getElementById("enterBtn");

const music = document.getElementById("bgMusic");

const popup = document.getElementById("letterPopup");

const openLetter = document.getElementById("openLetter");

const closeLetter = document.getElementById("closeLetter");

const finishBtn = document.getElementById("finishBtn");

const finalScreen = document.getElementById("finalScreen");

const scrollTopBtn = document.getElementById("scrollTop");

const hiddenSections = document.querySelectorAll(".hidden");

/*=========================================
LOADING
=========================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loading.style.opacity = "0";

setTimeout(() => {

loading.style.display = "none";

},800);

},1500);

});

/*=========================================
PLAY MUSIC
=========================================*/

enterBtn.addEventListener("click",()=>{

music.play();

document.getElementById("opening").scrollIntoView({

behavior:"smooth"

});

});

/*=========================================
POPUP
=========================================*/

openLetter.addEventListener("click",()=>{

popup.style.display="flex";

document.body.style.overflow="hidden";

});

closeLetter.addEventListener("click",()=>{

popup.style.display="none";

document.body.style.overflow="auto";

});

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.style.display="none";

document.body.style.overflow="auto";

}

});

/*=========================================
SCROLL ANIMATION
=========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.2

});

hiddenSections.forEach(section=>{

observer.observe(section);

});

/*=========================================
SCROLL TOP
=========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollTopBtn.style.display="block";

}else{

scrollTopBtn.style.display="none";

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
  /*=========================================
CURSOR GLOW
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


/*=========================================
LEAVES EFFECT
=========================================*/

const leftLeaves = document.getElementById("leaf-left");
const rightLeaves = document.getElementById("leaf-right");

function createLeaf(side){

    const leaf = document.createElement("div");

    leaf.classList.add("leaf");

    leaf.innerHTML = "🍁";

    if(side==="left"){

        leaf.style.left = Math.random()*120+"px";

    }else{

        leaf.style.right = Math.random()*120+"px";

    }

    leaf.style.animationDuration =
    (6+Math.random()*5)+"s";

    leaf.style.opacity =
    Math.random();

    leaf.style.fontSize =
    (18+Math.random()*18)+"px";

    if(side==="left"){

        leftLeaves.appendChild(leaf);

    }else{

        rightLeaves.appendChild(leaf);

    }

    setTimeout(()=>{

        leaf.remove();

    },11000);

}

setInterval(()=>{

    createLeaf("left");

},700);

setInterval(()=>{

    createLeaf("right");

},700);


/*=========================================
FINAL SCREEN
=========================================*/

const texts = document.querySelectorAll(".final-text");

finishBtn.addEventListener("click",()=>{

    finalScreen.style.display="flex";

    document.body.style.overflow="hidden";

    let i=0;

    function showText(){

        texts.forEach(t=>{

            t.style.display="none";

        });

        if(i<texts.length){

            texts[i].style.display="block";

            i++;

            setTimeout(showText,2500);

        }

    }

    showText();

});


/*=========================================
PARALLAX PHOTO
=========================================*/

const photos=document.querySelectorAll(".photo-card img");

photos.forEach(photo=>{

photo.addEventListener("mousemove",(e)=>{

const x=(e.offsetX/photo.offsetWidth-.5)*20;

const y=(e.offsetY/photo.offsetHeight-.5)*20;

photo.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="rotateY(0) rotateX(0) scale(1)";

});

});


/*=========================================
BUTTON RIPPLE
=========================================*/

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const circle=document.createElement("span");

circle.classList.add("ripple");

const size=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.left=
(e.offsetX-size/2)+"px";

circle.style.top=
(e.offsetY-size/2)+"px";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*=========================================
END
=========================================*/
/*=========================================
MUSIC FADE IN
=========================================*/

music.volume = 0;

function fadeMusic(){

    let volume = 0;

    const fade = setInterval(() => {

        if(volume < 1){

            volume += 0.05;

            music.volume = volume;

        }else{

            clearInterval(fade);

        }

    },200);

}

enterBtn.addEventListener("click",fadeMusic);


/*=========================================
HEART CLICK EFFECT
=========================================*/

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="click-heart";

    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1500);

});


/*=========================================
STARS
=========================================*/

for(let i=0;i<40;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
    (2+Math.random()*4)+"s";

    document.body.appendChild(star);

}


/*=========================================
FINAL MESSAGE LOOP
=========================================*/

let currentText=0;

function playFinalText(){

    texts.forEach(t=>{

        t.style.display="none";

    });

    texts[currentText].style.display="block";

    currentText++;

    if(currentText>=texts.length){

        currentText=0;

    }

}

setInterval(()=>{

    if(finalScreen.style.display==="flex"){

        playFinalText();

    }

},2500);


/*=========================================
ESC CLOSE POPUP
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.style.display="none";

        document.body.style.overflow="auto";

    }

});


/*=========================================
PREVENT IMAGE DRAG
=========================================*/

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


/*=========================================
SMOOTH SECTION HOVER
=========================================*/

document.querySelectorAll(".photo-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".5s";

    });

});


/*=========================================
END OF SCRIPT
=========================================*/

});
