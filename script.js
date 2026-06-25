```javascript
// =========================
// INIT
// =========================

const music = document.getElementById("bgMusic");
const welcomePage = document.getElementById("welcomePage");
const mainContent = document.getElementById("mainContent");

const loveButton = document.getElementById("loveButton");
const enterButton = document.getElementById("enterButton");

const openLetterBtn = document.getElementById("openLetterBtn");
const envelope = document.getElementById("envelope");

const closeStoryBtn = document.getElementById("closeStoryBtn");

const rose3d = document.getElementById("rose3d");
const finalWords = document.getElementById("finalWords");

const roseSection = document.getElementById("roseSection");

// =========================
// START WEBSITE
// =========================

function startExperience(){

music.play();

welcomePage.classList.add("hide");

mainContent.style.display = "block";

startEffects();

}

// klik tombol love atau enter
loveButton.addEventListener("click", startExperience);
enterButton.addEventListener("click", startExperience);

// =========================
// LETTER OPEN
// =========================

openLetterBtn.addEventListener("click", ()=>{

envelope.classList.add("open");

});

// =========================
// CLOSE STORY -> ROSE BLOOM
// =========================

closeStoryBtn.addEventListener("click", ()=>{

// tampilkan section rose
roseSection.style.display = "block";

// animasi scroll ke bawah
roseSection.scrollIntoView({behavior:"smooth"});

// bloom rose
setTimeout(()=>{

rose3d.classList.add("bloom");

},800);

// tampilkan final words
setTimeout(()=>{

finalWords.classList.add("show");

},2000);

// spawn hearts & sakura lebih intens
setInterval(createHeart, 300);
setInterval(createSakura, 400);

});

// =========================
// EFFECTS START
// =========================

function startEffects(){

setInterval(createHeart, 600);
setInterval(createSakura, 800);
setInterval(createSideFlower, 1200);

}

// =========================
// HEART EFFECT
// =========================

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

// posisi random kiri kanan
heart.style.left = Math.random() * window.innerWidth + "px";

// ukuran random
heart.style.fontSize = (15 + Math.random() * 25) + "px";

// durasi animasi
heart.style.animationDuration = (4 + Math.random() * 3) + "s";

document.body.appendChild(heart);

// hapus setelah selesai
setTimeout(()=>heart.remove(), 7000);

}

// =========================
// SAKURA EFFECT
// =========================

function createSakura(){

const sakura = document.createElement("div");

sakura.classList.add("sakura");

sakura.innerHTML = "🌸";

sakura.style.left = Math.random() * window.innerWidth + "px";

sakura.style.fontSize = (12 + Math.random() * 20) + "px";

sakura.style.animationDuration = (5 + Math.random() * 3) + "s";

document.body.appendChild(sakura);

setTimeout(()=>sakura.remove(), 8000);

}

// =========================
// SIDE FLOWER (LEFT & RIGHT ONLY)
// =========================

function createSideFlower(){

const flower = document.createElement("div");

flower.classList.add("sideFlower");

// hanya kiri atau kanan
const side = Math.random() > 0.5 ? "left" : "right";

flower.classList.add(side === "left" ? "leftFlower" : "rightFlower");

flower.innerHTML = "🌺";

// posisi Y random
flower.style.top = window.innerHeight + "px";

// ukuran random
flower.style.fontSize = (18 + Math.random() * 25) + "px";

// animasi speed
flower.style.animationDuration = (6 + Math.random() * 4) + "s";

document.body.appendChild(flower);

setTimeout(()=>flower.remove(), 9000);

}

// =========================
// OPTIONAL: AUTO PLAY SAFETY
// =========================

// beberapa browser butuh user interaction
document.addEventListener("click", ()=>{

music.play().catch(()=>{});

}, {once:true});
```

