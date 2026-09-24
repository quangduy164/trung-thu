
document.head.insertAdjacentHTML('beforeend',`<style>.caption{background:transparent!important;border:0!important;padding:8px 12px!important;backdrop-filter:none!important}</style>`);
/* Lớp hoàn thiện đồ họa: tạo cảm giác một khung hình phim thống nhất,
   nhưng không thay đổi logic kể chuyện hay thao tác bấm chuyển cảnh. */
document.head.insertAdjacentHTML('beforeend',`<style>
html{background:#050713}
#film:before{content:"";position:absolute;z-index:25;inset:0;pointer-events:none;background:radial-gradient(ellipse at center,transparent 48%,#02030d99 100%);mix-blend-mode:multiply}
#film:after{content:"";position:absolute;z-index:26;inset:0;pointer-events:none;opacity:.08;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");animation:filmGrain .22s steps(2) infinite}
.caption{padding:10px 22px 11px;border:1px solid #fff2;border-radius:12px;background:linear-gradient(90deg,transparent,#050713aa 15%,#050713aa 85%,transparent);text-shadow:0 2px 4px #000,0 0 14px #000;backdrop-filter:blur(2px)}
.top{ text-shadow:0 0 12px #ffd56f88}.progress{height:4px;border-radius:9px;overflow:hidden;box-shadow:0 0 12px #ffd56f33}.progress i{box-shadow:0 0 12px #ffd56f}
.moon{box-shadow:0 0 45px #fff0b0,0 0 130px #ffd57766,0 0 190px #ffe7a133}
.actors{filter:drop-shadow(0 9px 8px #000b) drop-shadow(0 0 18px #ffd56f22)}
.start-btn{box-shadow:0 8px 24px #ff9e7944,0 0 0 1px #fff4 inset;transition:transform .2s,filter .2s,box-shadow .2s}.start-btn:hover{transform:translateY(-3px) scale(1.025);filter:brightness(1.08);box-shadow:0 12px 30px #ff9e7966,0 0 0 1px #fff8 inset}.start-btn:active{transform:translateY(0) scale(.99)}
.intro .card,.end .card{animation:cardFloat 5s ease-in-out infinite}.intro:after,.end:after{content:"✦";position:absolute;top:13%;left:14%;color:#ffd56f88;font-size:1.2rem;text-shadow:0 0 15px #ffd56f;animation:driftSpark 4s ease-in-out infinite;pointer-events:none}
@keyframes filmGrain{0%{transform:translate(0,0)}25%{transform:translate(1%,-1%)}50%{transform:translate(-1%,1%)}75%{transform:translate(1%,1%)}100%{transform:translate(-1%,-1%)}}
@keyframes cardFloat{50%{transform:translateY(-5px)}}@keyframes driftSpark{50%{transform:translate(55vw,18vh) scale(1.4);opacity:.25}}
@media(max-width:680px){.caption{padding:8px 12px;font-size:.94rem}.top{left:15px;right:15px}.progress{left:15px;right:15px}}
</style>`);
// Ưu tiên đích bay sau các luật vị trí từng mảnh: mọi mảnh luôn chuyển động về cùng một tâm.
document.head.insertAdjacentHTML('beforeend',`<style>
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(1),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(2),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(3),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(4){
 left:calc(50% - 23px)!important;bottom:calc(29% - 23px)!important;opacity:1!important;
 transition:left .9s cubic-bezier(.2,.8,.2,1),bottom .9s cubic-bezier(.2,.8,.2,1),transform .9s ease!important;
}
@media(max-width:680px){
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(1),
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(2),
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(3),
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(4){left:calc(50% - 19px)!important;bottom:calc(29% - 19px)!important}
}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
.star-lamp{width:24px;height:31px;right:17px;top:-22px!important;font-size:0!important;opacity:0;filter:drop-shadow(0 0 8px #ff5e4e);z-index:8}.star-lamp:before{content:'★';position:absolute;inset:0;color:#ff574d;font-size:27px;line-height:28px;text-shadow:0 0 5px #fff0aa,0 0 14px #ff5e4e,0 0 26px #ff9b4d;animation:starPulse 1.25s ease-in-out infinite}.star-lamp:after{content:'';position:absolute;left:8px;top:-10px;width:7px;height:47px;border-left:1px solid #ffd477;opacity:.85}.frame-1 .star-lamp{opacity:1;animation:lampReveal .8s ease both}.frame-1 .kids{animation:paradeFacing 5s linear .4s infinite!important}@keyframes starPulse{50%{transform:scale(1.18) rotate(8deg);filter:brightness(1.55)}}@keyframes lampReveal{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:none}}@keyframes paradeFacing{0%{transform:translateX(0) scaleX(-1)}25%{transform:translateX(30vw) translateY(-10px) scaleX(-1)}50%{transform:translateX(60vw) scaleX(-1)}75%{transform:translateX(90vw) translateY(-8px) scaleX(-1)}100%{transform:translateX(125vw) scaleX(-1)}}
</style>`);
let story=[
{frame:0,who:'narrator',text:'Mọi năm, cứ đến đêm rằm tháng Tám, mặt trăng lại treo trên ngọn tre đầu làng.'},
{frame:1,who:'narrator',text:'Đèn ông sao sáng đỏ những con ngõ. Tiếng trống lân chạy từ đầu làng đến tận rừng tre.'},
{frame:2,who:'an',text:'Bánh này nhìn ngon quá… chắc không ai phát hiện nếu nó biến mất đâu ha?'},
{frame:3,who:'narrator',text:'Nhưng đúng lúc tiếng trống vang lên lần thứ ba… bầu trời bỗng im bặt.'},
{frame:3,who:'an',text:'Mặt trăng… biến mất rồi!'},
{frame:5,who:'narrator',text:'Những chiếc đèn lần lượt tắt. Trên mặt đất chỉ còn một đốm đom đóm dẫn về phía rừng tre.'}
];
document.querySelector('.kids')?.remove();document.querySelector('.chair')?.remove();
document.head.insertAdjacentHTML('beforeend',`<style>.star-lamp:after{display:none!important}.frame-1 .lion{animation:runToBamboo 4.8s linear infinite!important}.frame-1 .drummer{animation:runToBamboo 4.8s .2s linear infinite!important}@keyframes runToBamboo{0%{transform:translateX(0) translateY(0) rotate(-4deg)}25%{transform:translateX(23vw) translateY(-10px) rotate(4deg)}50%{transform:translateX(46vw) translateY(0) rotate(-3deg)}75%{transform:translateX(65vw) translateY(-8px) rotate(4deg)}100%{transform:translateX(73vw) translateY(0) rotate(-2deg)}}</style>`);
const forestArt=document.createElement('div');forestArt.className='forest-art';forestArt.innerHTML=Array.from({length:10},(_,i)=>`<i class="forest-stalk fs${i}"><b></b><b></b><b></b><em></em><em></em></i>`).join('');document.querySelector('#film').appendChild(forestArt);document.head.insertAdjacentHTML('beforeend',`<style>.forest{display:none!important}.forest-art{position:absolute;z-index:7;right:3%;bottom:7%;width:56%;height:58%;opacity:0;transition:opacity 1.2s;filter:drop-shadow(0 0 14px #2d7451)}.forest-stalk{position:absolute;bottom:0;width:clamp(8px,1.2vw,15px);height:var(--h,80%);border-radius:10px;background:repeating-linear-gradient(to bottom,transparent 0 42px,#0a2d22 43px 48px,transparent 49px 85px),linear-gradient(90deg,#123c2c,#6aaa6b 48%,#16452f);transform-origin:bottom;animation:stalkSway 4s ease-in-out infinite}.forest-stalk:nth-child(1){left:2%;--h:66%;opacity:.5;transform:scale(.75)}.forest-stalk:nth-child(2){left:13%;--h:92%;animation-delay:-1s}.forest-stalk:nth-child(3){left:24%;--h:74%;opacity:.7;animation-delay:-2s}.forest-stalk:nth-child(4){left:34%;--h:100%;animation-delay:-.6s}.forest-stalk:nth-child(5){left:46%;--h:79%;opacity:.8;animation-delay:-1.8s}.forest-stalk:nth-child(6){left:57%;--h:96%;animation-delay:-2.5s}.forest-stalk:nth-child(7){left:68%;--h:70%;opacity:.6;animation-delay:-.9s}.forest-stalk:nth-child(8){left:77%;--h:88%;animation-delay:-3s}.forest-stalk:nth-child(9){left:87%;--h:63%;opacity:.55;animation-delay:-1.4s}.forest-stalk:nth-child(10){left:95%;--h:82%;animation-delay:-2.2s}.forest-stalk b,.forest-stalk em{position:absolute;display:block;width:clamp(42px,5vw,72px);height:clamp(12px,1.5vw,20px);border-radius:100% 0;background:linear-gradient(135deg,#559c60,#23623f);font-style:normal}.forest-stalk b:nth-of-type(1){top:18%;left:-34px;transform:rotate(-28deg)}.forest-stalk b:nth-of-type(2){top:39%;left:5px;transform:rotate(24deg)}.forest-stalk b:nth-of-type(3){top:62%;left:-30px;transform:rotate(-18deg)}.forest-stalk em:nth-of-type(1){top:78%;left:8px;transform:rotate(25deg)}.forest-stalk em:nth-of-type(2){top:28%;left:-38px;transform:rotate(-22deg)}#film[data-frame="5"] .forest-art{opacity:1}@keyframes stalkSway{50%{transform:rotate(1.6deg) translateY(-3px)}}@media(max-width:680px){.forest-art{right:-8%;width:72%;height:54%;transform:scale(.8);transform-origin:bottom right}}</style>`);
// Tránh đặt tên biến là `film`: phần tử có id="film" có thể được trình duyệt
// expose thành thuộc tính toàn cục, gây xung đột TDZ với `const film`.
// Giữ nguyên tỉ lệ cây tre đầu tiên khi keyframe lắc cây thay đổi transform.
document.head.insertAdjacentHTML('beforeend',`<style>.forest-stalk:nth-child(1){animation-name:stalkSwaySmall!important}@keyframes stalkSwaySmall{50%{transform:scale(.75) rotate(1.6deg) translateY(-3px)}}</style>`);
// Ba nhịp riêng cho Cảnh 2: nhân vật bước vào, chiếc bánh tỏa sáng, rồi An quyết định lên đường.
document.head.insertAdjacentHTML('beforeend',`<style>
#film[data-beat="2a"] .actors{animation:anEnter .9s ease both}
#film[data-beat="2a"] .cake{animation:cakeLift 1.3s ease-in-out infinite}
#film[data-beat="2b"] .actors{animation:anWarm 2s ease-in-out infinite}
#film[data-beat="2b"] .cake{animation:cakeGlow 1.5s ease-in-out infinite}
#film[data-beat="2c"] .actors{animation:anLookUp .8s ease both}
#film[data-beat="2c"] .cake{animation:cakeSettle 1s ease both}
#film[data-beat="2c"] .scene-2:after{content:'✦';position:absolute;left:42%;top:28%;font-size:2rem;color:#ffd56f;text-shadow:0 0 18px #fff0a0;animation:clueSpark 1.4s ease-in-out infinite}
@keyframes anEnter{from{opacity:0;transform:translateX(-65px)}to{opacity:1;transform:none}}
@keyframes anWarm{50%{transform:scale(1.06) translateY(-7px)}}
@keyframes anLookUp{50%{transform:translateY(-13px) rotate(-3deg)}}
@keyframes cakeLift{50%{transform:translateY(-15px) rotate(-4deg) scale(1.08)}}
@keyframes cakeGlow{50%{transform:translateY(-8px) scale(1.14);filter:drop-shadow(0 0 28px #ffd56f)}}
@keyframes cakeSettle{to{transform:translateY(5px) scale(.92);opacity:.8}}
@keyframes clueSpark{50%{transform:scale(1.45) rotate(18deg);opacity:.45}}
</style>`);
const CHARACTER_NAME='Linh';
const WISH_MESSAGE='Chúc bé trung thu vui vẻ, cố gắng học nhaa';
const filmEl=document.querySelector('#film'),caption=document.querySelector('#caption'),captionBox=document.querySelector('#captionBox'),speech=document.querySelector('#speech'),counter=document.querySelector('#counter'),progress=document.querySelector('#progress'),intro=document.querySelector('#intro'),countdown=document.querySelector('#countdown');document.querySelector('.name').textContent=CHARACTER_NAME;let index=0,typing=false,pos=0,current='',timer=null,started=false,ready=false,chapter=1,chapter2Intro=false;
document.head.insertAdjacentHTML('beforeend',`<style>.chapter2-art{position:absolute;z-index:9;inset:0;pointer-events:none;opacity:0;transition:opacity .8s}.chapter2-art .rabbit{position:absolute;left:25%;bottom:22%;font-size:clamp(3rem,6vw,5rem);filter:drop-shadow(0 0 14px #fff2c066)}.chapter2-art .lake{position:absolute;left:12%;right:12%;bottom:7%;height:20%;border-radius:50%;background:radial-gradient(ellipse,#5d7fcf88,#18265444 55%,transparent 70%);transform:scaleY(.45);}.chapter2-art .door{position:absolute;left:50%;bottom:15%;font-size:clamp(4rem,9vw,7rem);transform:translateX(-50%);filter:drop-shadow(0 0 20px #b9d7ff)}#film[data-chapter="2"] .chapter2-art{opacity:1}#film[data-chapter="2"][data-frame="5"] .chapter2-art .rabbit{animation:rabbitHop 2s ease-in-out infinite}#film[data-chapter="2"][data-frame="4"] .chapter2-art .lake{animation:waterRipple 2.5s ease-in-out infinite}#film[data-chapter="2"][data-frame="3"] .chapter2-art .door{animation:doorGlow 1.8s ease-in-out infinite}@keyframes rabbitHop{50%{transform:translate(24px,-14px) rotate(5deg)}}@keyframes waterRipple{50%{transform:scaleY(.65);filter:brightness(1.3)}}@keyframes doorGlow{50%{transform:translateX(-50%) scale(1.08);filter:drop-shadow(0 0 38px #b9d7ff)}}
</style>`);
const chapter2Art=document.createElement('div');chapter2Art.className='chapter2-art';chapter2Art.innerHTML='<span class="rabbit" aria-hidden="true">🐇</span><span class="lake"></span><span class="door">🌙</span><div class="moon-clues"><button data-moon="1" aria-label="Mảnh trăng 1"></button><button data-moon="2" aria-label="Mảnh trăng 2"></button><button data-moon="3" aria-label="Mảnh trăng 3"></button><button data-moon="4" aria-label="Mảnh trăng 4"></button></div><span class="moon-orb"></span>';filmEl.appendChild(chapter2Art);
chapter2Art.querySelector('.door')?.remove();
let moonFound=0;
document.head.insertAdjacentHTML('beforeend',`<style>
#film[data-chapter="2"] .chapter2-art .rabbit{display:none!important}
.moon-clues{position:absolute;inset:0;opacity:0;pointer-events:none}.moon-clues button{position:absolute;width:58px;height:58px;border:2px solid #ffd56f;border-radius:50%;background:#121937dd;color:#ffe9a8;font-size:2.5rem;line-height:1;box-shadow:0 0 22px #ffd56f66;cursor:pointer;transition:transform .25s,filter .25s}.moon-clues button:hover{transform:scale(1.18);filter:brightness(1.3)}.moon-clues button:nth-child(1){left:43%;bottom:28%}.moon-clues button:nth-child(2){left:57%;bottom:37%}.moon-clues button:nth-child(3){left:50%;bottom:20%}#film[data-chapter="2"][data-beat="moon-clues"] .moon-clues{opacity:1;pointer-events:auto}.moon-orb{position:absolute;left:52%;bottom:29%;font-size:3.4rem;color:#fff4bb;text-shadow:0 0 18px #fff0a0;opacity:0;transform:scale(.4);pointer-events:none}#film.moons-merged .moon-orb{opacity:1;animation:moonFlyToForest 2.2s ease-in forwards}#film.moons-merged .forest-art{animation:forestReveal 2.2s ease forwards!important}@keyframes moonFlyToForest{0%{transform:scale(.45);opacity:0}20%{opacity:1}100%{transform:translate(34vw,-28vh) scale(.7);opacity:0}}@keyframes forestReveal{0%{filter:brightness(.7);clip-path:inset(55% 0 0)}100%{filter:brightness(1.3);clip-path:inset(0)}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>.moon-clues button{width:62px;height:62px;background:radial-gradient(circle at 34% 28%,#fffef1 0 18%,#ffe7a1 58%,#d89e51 100%);color:transparent;font-size:0;box-shadow:0 0 22px #ffd56f66,inset 0 0 10px #fff8}.moon-clues button:after{content:"";position:absolute;inset:10%;border-radius:50%;background:radial-gradient(circle at 35% 25%,#c79b5b44 0 13%,transparent 14%),radial-gradient(circle at 70% 68%,#c79b5b33 0 17%,transparent 18%)}.moon-clues button:nth-child(1){clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%)}.moon-clues button:nth-child(2){clip-path:polygon(50% 0,100% 22%,100% 78%,50% 100%,0 78%,0 22%)}.moon-clues button:nth-child(3){clip-path:polygon(0 0,50% 0,50% 100%,0 100%)}#film[data-beat="moon-clues"] .cake{display:none!important}.moon-orb{font-size:0!important;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 32% 27%,#fffef1 0 18%,#ffe7a1 62%,#d89e51 100%);box-shadow:0 0 24px #fff0a0,inset 0 0 9px #fff8}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>#film[data-chapter="2"] .cake{display:none!important}#film[data-chapter="2"] .moon-clues button{width:64px;height:64px;border-radius:50%;font-size:0;color:transparent;background:radial-gradient(circle at 34% 28%,#fffef1 0 18%,#ffe7a1 58%,#d89e51 100%);box-shadow:0 0 22px #ffd56f66,inset 0 0 10px #fff8}#film[data-chapter="2"] .moon-clues button:nth-child(1){clip-path:polygon(0 0,100% 0,50% 50%,0 50%)}#film[data-chapter="2"] .moon-clues button:nth-child(2){clip-path:polygon(100% 0,100% 100%,50% 50%)}#film[data-chapter="2"] .moon-clues button:nth-child(3){clip-path:polygon(0 100%,100% 100%,50% 50%)}#film[data-chapter="2"] .moon-clues button:nth-child(4){clip-path:polygon(0 0,50% 50%,0 100%)}#film[data-chapter="2"] .moon-clues button:nth-child(1){left:39%;bottom:34%}#film[data-chapter="2"] .moon-clues button:nth-child(2){left:50%;bottom:42%}#film[data-chapter="2"] .moon-clues button:nth-child(3){left:61%;bottom:34%}#film[data-chapter="2"] .moon-clues button:nth-child(4){left:50%;bottom:25%}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>.moon-clues button{transition:left .75s cubic-bezier(.2,.8,.2,1),bottom .75s cubic-bezier(.2,.8,.2,1),transform .75s,opacity .4s!important}.moon-clues button.moving{left:calc(50% - 32px)!important;bottom:calc(29% - 32px)!important;opacity:1!important;transform:scale(.82) rotate(0deg)!important;z-index:4}.moon-clues button.moving:nth-child(1){transform:scale(.82) rotate(0deg)!important}.moon-clues button.moving:nth-child(2){transform:scale(.82) rotate(90deg)!important}.moon-clues button.moving:nth-child(3){transform:scale(.82) rotate(180deg)!important}.moon-clues button.moving:nth-child(4){transform:scale(.82) rotate(270deg)!important}.moon-clues.merging button{opacity:0!important;transition:opacity .55s ease .65s!important}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Bốn phần tư cố định: trên-trái, trên-phải, dưới-trái, dưới-phải. */
#film[data-chapter="2"] .moon-clues button:nth-child(1){clip-path:polygon(0 0,100% 0,50% 50%,0 50%)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(2){clip-path:polygon(0 0,100% 0,100% 50%,50% 50%)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(3){clip-path:polygon(0 50%,50% 50%,100% 100%,0 100%)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(4){clip-path:polygon(50% 50%,100% 50%,100% 100%,0 100%)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(1){left:calc(50% - 64px)!important;bottom:calc(29% + 32px)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(2){left:50%!important;bottom:calc(29% + 32px)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(3){left:calc(50% - 64px)!important;bottom:29%!important}
#film[data-chapter="2"] .moon-clues button:nth-child(4){left:50%!important;bottom:29%!important}
.moon-clues button.moving:nth-child(1),.moon-clues button.moving:nth-child(2),.moon-clues button.moving:nth-child(3),.moon-clues button.moving:nth-child(4){transform:scale(.82)!important}
</style>`);
chapter2Art.querySelectorAll('[data-moon]').forEach(piece=>piece.addEventListener('click',e=>{e.stopPropagation();if(filmEl.dataset.beat!=='moon-scattered'||piece.disabled||filmEl.classList.contains('moons-merged'))return;piece.disabled=true;piece.offsetWidth;requestAnimationFrame(()=>piece.classList.add('moving'));moonFound++;if(moonFound===4){const clues=document.querySelector('.moon-clues');clues.classList.add('merging');setTimeout(()=>{filmEl.classList.add('moons-merged');clues.classList.add('pieces-hidden');clues.style.pointerEvents='none';setTimeout(()=>filmEl.classList.add('moon-hit'),1900)},900)}}));
document.head.insertAdjacentHTML('beforeend',`<style>
/* Bản cuối: mỗi nút là đúng một góc phần tư của cùng một mặt trăng. */
#film[data-chapter="2"] .cake{display:none!important}
#film[data-chapter="2"] .moon-clues button:nth-child(1){clip-path:inset(0 50% 50% 0)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(2){clip-path:inset(0 0 50% 50%)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(3){clip-path:inset(50% 50% 0 0)!important}
#film[data-chapter="2"] .moon-clues button:nth-child(4){clip-path:inset(50% 0 0 50%)!important}
#film[data-chapter="2"] .moon-clues button.moving{left:calc(50% - 32px)!important;bottom:calc(29% - 32px)!important;transform:scale(1)!important}
#film[data-chapter="2"] .moon-clues button.moving:nth-child(1),#film[data-chapter="2"] .moon-clues button.moving:nth-child(2),#film[data-chapter="2"] .moon-clues button.moving:nth-child(3),#film[data-chapter="2"] .moon-clues button.moving:nth-child(4){transform:scale(1)!important}
.moon-clues.merging button{opacity:1!important}
#film.moons-merged .moon-clues button{opacity:0!important;transition:opacity .35s ease!important}
#film.moons-merged .moon-orb{animation:moonFlyToForest 2.2s .35s ease-in both!important}
</style>`);
function finishDeathScene(){setTimeout(()=>{filmEl.classList.add('fade-black');setTimeout(()=>{filmEl.classList.remove('fade-black');document.querySelector('#end').classList.remove('show');intro.classList.remove('hide');document.querySelector('.intro .card h1').innerHTML='Sao bé lại chạy';document.querySelector('.intro .card p').innerHTML='';document.querySelector('#start').textContent='Cho bé 1 cơ hội nữa';chapter2Intro=true;started=false;ready=false},1900)},5000)}
function type(){if(pos<current.length){const target=story[index].who==='an'?speech:caption;target.textContent+=current[pos++];timer=setTimeout(type,/[,….!?]/.test(current[pos-1])?150:38)}else{typing=false;if(filmEl.dataset.beat==='death')setTimeout(finishDeathScene,700)}}
function render(){clearTimeout(timer);const item=story[index],frame=item.frame??index;filmEl.dataset.frame=frame;filmEl.dataset.beat=item.beat||'';filmEl.dataset.chapter=chapter;const forestOpening=chapter===2&&item.beat==='forest';const lake=chapter2Art.querySelector('.lake');if(lake)lake.style.display=forestOpening?'none':'';const rabbit=chapter2Art.querySelector('.rabbit');if(rabbit)rabbit.style.display='none';document.querySelectorAll('.scene').forEach((s,i)=>s.classList.toggle('active',i===frame));counter.textContent=`${index+1} / ${story.length}`;progress.style.width=`${(index+1)/story.length*100}%`;caption.textContent='';speech.textContent='';captionBox.classList.toggle('hidden',item.who==='an');speech.classList.toggle('show',item.who==='an');current=(item.text||'').replace(/\bAn\b/g,CHARACTER_NAME);pos=0;typing=true;type()}
function startChapter2(){story=[{frame:5,who:'narrator',text:'An bước sâu hơn vào rừng tre. Đom đóm bay phía trước, dẫn cô bé đến một nơi bí mật.'},{frame:5,who:'an',text:'Khoan đã… trên mặt đất có một dấu vết hình trăng khuyết.'},{frame:4,who:'narrator',text:'Rừng tre mở ra. Trước mặt An là một mặt hồ đang phát sáng.'},{frame:4,who:'an',text:'Dưới làn nước… hình như có một cánh cửa.'},{frame:3,who:'narrator',text:'Ba mảnh ánh sáng lơ lửng trên mặt hồ, chờ được ghép lại.'},{frame:3,who:'narrator',text:'Có những cánh cửa chỉ mở ra khi người ta vẫn còn tin vào ánh sáng.'}];chapter=2;index=0;ready=true;document.querySelector('#end').classList.remove('show');document.querySelector('#end h2').textContent='Chương 2 — Cánh cửa dưới mặt hồ';document.querySelector('#end p').textContent='';document.querySelector('#end button').textContent='Xem lại từ đầu';document.querySelector('.top span').textContent='✦ TRUNG THU · CHƯƠNG 2';render()}
function next(){if(!ready||filmEl.dataset.beat==='choices')return;if(filmEl.dataset.beat==='moon-scattered-intro'){clearTimeout(timer);typing=false;story[index].beat='moon-scattered-dialogue';story[index].who='an';story[index].text='Mình phải ghép thử mới được';render();return}if(typing){clearTimeout(timer);const target=story[index].who==='an'?speech:caption;target.textContent=current;pos=current.length;typing=false;return}if(filmEl.dataset.beat==='moon-scattered-dialogue'){story[index].beat='moon-scattered';story[index].who='narrator';story[index].text='';render();return}if(index<story.length-1){index++;render()}else if(chapter===1){document.querySelector('#end h2').textContent='Chương 1 kết thúc';document.querySelector('#end p').textContent=`${CHARACTER_NAME} bước theo đom đóm vào rừng tre.`;document.querySelector('#end button').textContent='Bước vào Chương 2';document.querySelector('#end button').onclick=startChapter2;document.querySelector('#end').classList.add('show')}else{document.querySelector('#end h2').textContent='To be continued...';document.querySelector('#end p').textContent='';document.querySelector('#end button').textContent='Xem lại từ đầu';document.querySelector('#end button').onclick=()=>location.reload();document.querySelector('#end').classList.add('show')}}
function begin(e){e.stopPropagation();if(chapter2Intro){chapter2Intro=false;started=true;intro.classList.add('hide');startChapter2();index=5;render();return}if(started)return;started=true;intro.classList.add('hide');countdown.classList.add('show');filmEl.classList.add('counting-down');let left=5;document.querySelector('#count').textContent=left;const tick=setInterval(()=>{left--;if(left>0)document.querySelector('#count').textContent=left;else{clearInterval(tick);countdown.classList.remove('show');filmEl.classList.remove('counting-down');ready=true;render()}},1000)}
document.querySelector('#start').addEventListener('click',begin);document.querySelector('#start').addEventListener('click',()=>filmEl.classList.add('story-started'));filmEl.addEventListener('click',e=>{if(e.target.closest('button,.intro,.end'))return;if((filmEl.dataset.beat==='moon-clues'||filmEl.dataset.beat==='moon-scattered')&&moonFound<4)return;next()});document.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();if(!started)begin(e);else if(!((filmEl.dataset.beat==='moon-clues'||filmEl.dataset.beat==='moon-scattered')&&moonFound<4))next()}});
document.head.insertAdjacentHTML('beforeend',`<style>#film[data-chapter="2"][data-beat="forest"] .actors{animation:anWalkIntoForest 5.2s cubic-bezier(.2,.7,.2,1) forwards!important}#film[data-chapter="2"][data-beat="forest"] .firefly{animation:fireflyLeadIntoForest 5.2s cubic-bezier(.2,.7,.2,1) forwards!important}@keyframes anWalkIntoForest{0%{transform:translateX(-4vw) translateY(0)}25%{transform:translateX(8vw) translateY(-5px)}55%{transform:translateX(22vw) translateY(0)}80%{transform:translateX(35vw) translateY(-4px)}100%{transform:translateX(47vw) translateY(0)}}@keyframes fireflyLeadIntoForest{0%{transform:translate(0,0) scale(.65);opacity:.2}20%{transform:translate(11vw,-5vh) scale(1);opacity:1}42%{transform:translate(25vw,1vh) scale(.8);opacity:.65}65%{transform:translate(42vw,-7vh) scale(1.05);opacity:1}82%{transform:translate(57vw,-2vh) scale(.8);opacity:.7}100%{transform:translate(70vw,-9vh) scale(1);opacity:1}}</style>`);
chapter2Art.insertAdjacentHTML('beforeend','<span class="shadow-figure" aria-hidden="true"></span>');
const choicePanel=document.createElement('div');choicePanel.className='scene-choices';choicePanel.innerHTML='<button data-choice="run">Xách cái giò bỏ chạy</button><button data-choice="brave">Chạy gì mà chạy, đi tiếp</button>';filmEl.appendChild(choicePanel);choicePanel.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',e=>{e.stopPropagation();if(filmEl.dataset.beat!=='choices')return;if(button.dataset.choice==='run'){story[index].beat='death';story[index].text='Bóng ma lao tới, nâng bổng An lên và siết chặt cổ cô bé. An lịm dần trong bóng tối.';story=story.slice(0,index+1);document.querySelector('#end h2').textContent='Bóng tối đã bắt được An';document.querySelector('#end p').textContent='Có những lựa chọn khiến câu chuyện dừng lại trong im lặng.';render()}else{story[index].beat='moon-scattered-intro';story[index].who='narrator';story[index].text='An nhìn xuống. Trên mặt đất rải rác những mảnh ánh trăng.'}render()}));
const bloodFX=document.createElement('span');bloodFX.className='blood-fx';filmEl.appendChild(bloodFX);
const wishLetter=document.createElement('section');wishLetter.className='wish-letter';wishLetter.setAttribute('aria-label','Bức thư chúc Trung Thu');wishLetter.innerHTML=`<div class="horror-flash" aria-hidden="true"></div><div class="wish-envelope" aria-hidden="true"><span>💌</span></div><article><img class="wish-gif wish-gif-left" src="kitty-roll.gif" alt="Mèo cuộn tròn"><img class="wish-gif wish-gif-right" src="sleepy-cat-cute-cat.gif" alt="Mèo buồn ngủ"><small>GỬI BẠN NHỎ</small><p class="wish-message"></p></article>`;filmEl.appendChild(wishLetter);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Nhánh “đi tiếp”: An và đom đóm nép về bên trái, bốn mảnh trăng trải ngang trên đất. */
#film[data-chapter="2"][data-beat="moon-scattered"] .bamboo,
#film[data-chapter="2"][data-beat="moon-scattered"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .actors{left:4%!important;bottom:19%!important;animation:none!important;opacity:1!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .firefly{left:21%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues{opacity:1!important;pointer-events:auto!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues,#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues{opacity:1!important;pointer-events:auto!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button,#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button{cursor:default!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:not(.moving){width:46px!important;height:46px!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving{width:46px!important;height:46px!important;left:calc(50% - 23px)!important;bottom:calc(29% - 23px)!important;z-index:8!important;transition:left .85s cubic-bezier(.2,.8,.2,1),bottom .85s cubic-bezier(.2,.8,.2,1),transform .85s ease,opacity .4s ease!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(1){left:34%!important;bottom:19%!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(2){left:46%!important;bottom:24%!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(3){left:58%!important;bottom:16%!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(4){left:70%!important;bottom:22%!important}
@media(max-width:680px){
 #film[data-chapter="2"][data-beat="moon-scattered"] .actors{left:3%!important;bottom:19%!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .firefly{left:22%!important;bottom:20%!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:not(.moving){width:38px!important;height:38px!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving{width:38px!important;height:38px!important;left:calc(50% - 19px)!important;bottom:calc(29% - 19px)!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(1){left:34%!important;bottom:18%!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(2){left:47%!important;bottom:24%!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(3){left:60%!important;bottom:16%!important}
 #film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button:nth-child(4){left:73%!important;bottom:22%!important}
}
</style>`);
document.querySelector('.an-face').insertAdjacentHTML('beforeend','<span class="dead-marks" aria-hidden="true"><i></i><i></i><i></i></span>');
document.head.insertAdjacentHTML('beforeend',`<style>.scene-choices{position:absolute;z-index:60;left:50%;bottom:5%;transform:translateX(-50%);display:none;gap:10px;flex-wrap:wrap;justify-content:center;width:min(92vw,520px)}#film[data-chapter="2"][data-beat="choices"] .scene-choices{display:flex}.scene-choices button{border:1px solid #ffd56f99;border-radius:999px;padding:11px 16px;background:#0b0e28ee;color:#fff4c7;font:600 .82rem 'Be Vietnam Pro',sans-serif;box-shadow:0 0 18px #0008;cursor:pointer;transition:.2s}.scene-choices button:hover{background:#ffd56f;color:#28182b;transform:translateY(-2px)}@media(max-width:680px){.scene-choices{bottom:8%;flex-direction:column;align-items:center}.scene-choices button{width:min(86vw,300px)}}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>#film[data-chapter="2"][data-beat="choices"] .scene-choices{display:flex!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important}.scene-choices button{position:relative;z-index:2;pointer-events:auto!important}</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Hai lựa chọn luôn nằm thành hai cột, kể cả trên màn hình nhỏ. */
.scene-choices{display:none;flex-direction:row!important;flex-wrap:nowrap!important;align-items:center;gap:clamp(8px,2vw,18px);width:min(92vw,620px)!important;bottom:6%!important}
#film[data-chapter="2"][data-beat="choices"] .scene-choices{display:flex!important}
.scene-choices button{flex:1 1 0;width:auto!important;min-width:0;padding:11px clamp(8px,1.8vw,18px)!important;font-size:clamp(.68rem,1.4vw,.86rem)!important;white-space:nowrap;animation:choiceNudge 2.2s ease-in-out infinite}
.scene-choices button:nth-child(2){animation-delay:.35s}
@keyframes choiceNudge{0%,100%{transform:translateY(0)}8%{transform:translateY(-2px)}16%{transform:translateY(2px)}24%{transform:translateY(-1px)}32%{transform:translateY(0)}}
@media(max-width:680px){.scene-choices{width:calc(100vw - 22px)!important;gap:8px!important;bottom:8%!important}.scene-choices button{padding:10px 5px!important;font-size:clamp(.58rem,2.7vw,.76rem)!important;letter-spacing:-.01em}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
#film[data-chapter="2"][data-beat="footsteps"] .actors{animation:none!important}
#film[data-chapter="2"][data-beat="shadow"] .actors{animation:none!important}
#film[data-chapter="2"][data-beat="shadow"] .an-face{display:inline-block;animation:anTurnBack 1.5s ease-in-out forwards!important;transform-origin:center bottom}
#film[data-chapter="2"][data-beat="shadow"]{animation:sceneJolt .16s linear 3}
#film[data-chapter="2"][data-beat="shadow"] .shadow-figure{animation:shadowPass 1.2s ease both}
#film[data-chapter="2"][data-beat="shadow-reveal"] .bamboo,#film[data-chapter="2"][data-beat="shadow-reveal"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="shadow-reveal"] .actors{left:34%!important;bottom:20%!important;opacity:1!important;animation:none!important}
#film[data-chapter="2"][data-beat="shadow-reveal"] .an-face{display:inline-block;transform:scaleX(-1)!important}
#film[data-chapter="2"][data-beat="shadow-reveal"] .firefly{left:56%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="shadow-reveal"] .shadow-figure{left:auto!important;right:7%!important;bottom:17%;opacity:.28;transform:scale(1.08);animation:shadowWander 2.8s ease-in-out infinite alternate!important}
#film[data-chapter="2"][data-beat="choices"] .bamboo,#film[data-chapter="2"][data-beat="choices"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="choices"] .actors{left:34%!important;bottom:20%!important;opacity:1!important;animation:none!important}
#film[data-chapter="2"][data-beat="choices"] .an-face{display:inline-block;transform:scaleX(-1)!important}
#film[data-chapter="2"][data-beat="choices"] .firefly{left:56%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="choices"] .shadow-figure{left:auto!important;right:7%!important;bottom:17%;opacity:.28;transform:scale(1.08);animation:shadowWander 2.8s ease-in-out infinite alternate!important}
#film[data-chapter="2"][data-beat="death"] .scene-choices{display:none!important}
#film[data-chapter="2"][data-beat="death"] .bamboo,#film[data-chapter="2"][data-beat="death"] .forest-art{display:none!important}
#film[data-chapter="2"][data-beat="death"] .actors{left:34%!important;bottom:20%!important;opacity:1!important;animation:ghostLift 4.6s ease-in-out forwards!important}
#film[data-chapter="2"][data-beat="death"] .an-face{display:inline-block;transform:scaleX(-1)!important}
#film[data-chapter="2"][data-beat="death"] .an-face{position:relative}
#film[data-chapter="2"][data-beat="death"] .an-face:after{content:"";position:absolute;z-index:3;left:54%;top:57%;width:11px;height:19px;border-radius:45% 45% 60% 60%;background:#e95c68;box-shadow:inset 2px 0 #ff9a9a;transform:rotate(7deg);animation:tongueOut .7s 1.25s ease-out both}
#film[data-chapter="2"][data-beat="death"] .firefly{display:none!important}
#film[data-chapter="2"][data-beat="death"] .an-face:before,#film[data-chapter="2"][data-beat="death"] .an-face:after{content:none!important}
.dead-marks{display:none!important}
#film[data-chapter="2"][data-beat="death"] .shadow-figure{left:auto!important;right:7%!important;bottom:17%;opacity:.65;animation:ghostReach 2.2s ease-in forwards!important}
#film.fade-black:after{content:"";position:absolute;z-index:100;inset:0;background:#000;opacity:0;pointer-events:none;animation:fadeBlack 1.8s ease forwards}
@keyframes fadeBlack{to{opacity:1}}
@keyframes ghostLift{0%{transform:translate(0,0) rotate(0)}35%{transform:translate(10px,-125px) rotate(0)}52%{transform:translate(10px,-125px) rotate(0)}64%{transform:translate(4px,-125px) rotate(-2deg)}70%{transform:translate(8px,-125px) rotate(2deg)}76%{transform:translate(4px,-125px) rotate(-1deg)}84%{transform:translate(-8px,-75px) rotate(-18deg)}92%{transform:translate(-16px,-28px) rotate(-55deg)}100%{transform:translate(-24px,4px) rotate(-90deg);opacity:1}}
@keyframes ghostReach{0%{transform:translateX(0) scale(1.08)}55%{transform:translateX(-80px) scale(1.2);opacity:.9}100%{transform:translateX(-120px) scale(1.3);opacity:.7}}
.blood-fx{position:absolute;z-index:70;left:calc(34% + 87px);bottom:calc(20% + 180px);width:8px;height:8px;border-radius:50%;background:#c51f32;opacity:0;pointer-events:none;box-shadow:0 0 4px #8b1021,18px -10px 0 -1px #e13a42,-18px -7px 0 -2px #b7192d,29px 8px 0 -2px #9d1524,-30px 13px 0 -2px #dc3340,8px 22px 0 -3px #a91527,-14px 25px 0 -3px #d22a39}
#film[data-chapter="2"][data-beat="death"] .blood-fx{animation:bloodBurst 1.7s 2.25s ease-out forwards}
@keyframes bloodBurst{0%{opacity:0;transform:scale(.2) translate(0,0)}18%{opacity:.95;transform:scale(1) translate(0,0)}100%{opacity:0;transform:scale(1.35) translate(-8px,12px)}}
@keyframes tongueOut{from{opacity:0}to{opacity:0}}
@keyframes deadEyes{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
@media(max-width:680px){#film[data-chapter="2"][data-beat="death"] .actors{left:20%!important}#film[data-chapter="2"][data-beat="death"] .blood-fx{left:calc(20% + 70px);bottom:calc(20% + 172px)}}
#film[data-chapter="2"][data-beat="cold-ground"] .bamboo,#film[data-chapter="2"][data-beat="cold-ground"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="cold-ground"] .actors{left:34%;bottom:20%;animation:none!important;opacity:1}
#film[data-chapter="2"][data-beat="cold-ground"] .firefly{left:56%;bottom:20%;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
@keyframes fireflyStillPulse{50%{opacity:.45;transform:scale(.8)}}
.shadow-figure{position:absolute;z-index:11;left:38%;bottom:17%;width:86px;height:145px;background:#02030cdd;opacity:0;filter:blur(2px);clip-path:polygon(46% 0,64% 0,77% 18%,70% 42%,92% 100%,8% 100%,30% 43%,22% 19%);pointer-events:none}
@keyframes anTurnBack{0%{transform:scaleX(1) translateX(0)}45%{transform:scaleX(.15) translateX(-5px)}55%{transform:scaleX(-.15) translateX(5px)}100%{transform:scaleX(-1) translateX(0)}}
@keyframes sceneJolt{25%{transform:translateX(-5px)}50%{transform:translateX(5px)}75%{transform:translateX(-3px)}}
@keyframes shadowPass{0%{opacity:0;transform:translateX(18vw) scale(.7)}35%{opacity:.8}100%{opacity:0;transform:translateX(-17vw) scale(1.15)}}
@keyframes shadowWander{0%{transform:translateX(-12px) scale(1.08)}50%{transform:translateX(10px) scale(1.08)}100%{transform:translateX(-8px) scale(1.08)}}
</style>`);
const _startChapter2=startChapter2;startChapter2=function(){_startChapter2();moonFound=0;filmEl.classList.remove('moons-merged','moon-hit');chapter2Art.querySelectorAll('[data-moon]').forEach(p=>{p.disabled=false;p.style.opacity='';p.classList.remove('moving')});story=[{frame:5,beat:'forest',who:'narrator',text:'An bước sâu vào rừng tre. Đom đóm bay phía trước, dẫn cô bé đến một nơi bí mật.'},{frame:5,beat:'cold-ground',who:'narrator',text:'Đom đóm dừng lại trước một khoảng đất lạnh ngắt. không một tiếng gió'},{frame:5,beat:'footsteps',who:'narrator',text:'Chợt An nghe thấy tiếng bước chân phía sau mình.'},{frame:5,beat:'shadow',who:'narrator',text:'An quay lại. Không có ai.'},{frame:5,beat:'shadow-reveal',who:'narrator',text:'Trên mặt đất lờ mờ có một chiếc bóng. Nó không thuộc về An.'},{frame:5,beat:'choices',who:'narrator',text:''},{frame:5,beat:'wake',who:'narrator',text:'An từ từ tỉnh dậy. Đầu cô bé đau nhói. Đột nhiên, trước mắt An hiện lên một thứ kỳ lạ.'},{frame:5,beat:'wish',who:'narrator',text:''}];render()};
document.head.insertAdjacentHTML('beforeend',`<style>
/* Màn mở đầu gọn hơn; khi câu chuyện bắt đầu ẩn thanh tiêu đề và tiến độ. */
.intro .card>small{display:none!important}
#film.story-started>.top,#film.story-started>.progress,#film:has(.intro.hide)>.top,#film:has(.intro.hide)>.progress{display:none!important}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
@media(min-width:681px){#film .intro .card h1{font-size:clamp(2.2rem,5vw,4.2rem)!important;line-height:1.02!important}}
@media(max-width:680px){#film .intro .card h1{font-size:clamp(2rem,10vw,3.1rem)!important;line-height:1.05!important;white-space:nowrap!important}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>/* Khóa thao tác trong toàn bộ thời gian cảnh bóng ma; không thể nhảy sang “Còn tiếp”. */
#film[data-chapter="2"][data-beat="death"]{pointer-events:none!important}
#film[data-chapter="2"][data-beat="death"] .intro:not(.hide){pointer-events:auto!important;z-index:120!important}
</style>`);
const _storyNext=next;next=function(){if(filmEl.dataset.beat==='death'||(filmEl.dataset.beat==='wish'&&filmEl.dataset.wishReady!=='true'))return;return _storyNext()};
let wishTypingTimer=null;const wishBeatObserver=new MutationObserver(()=>{if(filmEl.dataset.beat==='wish'){filmEl.dataset.wishReady='false';clearInterval(wishTypingTimer);const target=wishLetter.querySelector('.wish-message');target.textContent='';let n=0;setTimeout(()=>{wishTypingTimer=setInterval(()=>{if(filmEl.dataset.beat!=='wish'){clearInterval(wishTypingTimer);return}target.textContent=WISH_MESSAGE.slice(0,++n);if(n>=WISH_MESSAGE.length)clearInterval(wishTypingTimer)},48)},4050);setTimeout(()=>{if(filmEl.dataset.beat==='wish')filmEl.dataset.wishReady='true'},4500)}else{filmEl.dataset.wishReady='true';clearInterval(wishTypingTimer)}});wishBeatObserver.observe(filmEl,{attributes:true,attributeFilter:['data-beat']});
document.querySelector('#start').addEventListener('click',()=>chapter2Art.querySelector('.moon-clues').classList.remove('pieces-hidden','merging'));
document.head.insertAdjacentHTML('beforeend',`<style>
/* Uitgebreide thư: phong bì bay vào, thư mở, ánh sáng và lời chúc viết từng chữ. */
#film[data-chapter="2"][data-beat="wish"] .wish-letter:before,#film[data-chapter="2"][data-beat="wish"] .wish-letter:after{content:"✦";position:absolute;z-index:3;color:#ffe8a0;font-size:1.3rem;text-shadow:0 0 16px #ffd56f;animation:wishSpark 2.4s ease-in-out infinite}
#film[data-chapter="2"][data-beat="wish"] .wish-letter:before{left:20%;top:29%;animation-delay:.3s}#film[data-chapter="2"][data-beat="wish"] .wish-letter:after{right:19%;bottom:26%;animation-delay:1s}
#film[data-chapter="2"][data-beat="wish"] .wish-envelope{animation:envelopeReveal 1.25s ease both;filter:drop-shadow(0 0 22px #fff0a0)}
#film[data-chapter="2"][data-beat="wish"] .wish-letter article{animation:letterOpen 1.25s .2s cubic-bezier(.2,.8,.2,1) both}
#film[data-chapter="2"][data-beat="wish"] .wish-gif-left{animation:catPeekLeft 2.8s 1.1s ease-in-out infinite}
#film[data-chapter="2"][data-beat="wish"] .wish-gif-right{animation:catPeekRight 3.1s 1.25s ease-in-out infinite}
#film[data-chapter="2"][data-beat="wish"] .wish-message{min-height:3.7em}
@keyframes wishSpark{0%,100%{opacity:.25;transform:scale(.7) rotate(0)}50%{opacity:1;transform:scale(1.35) rotate(20deg)}}@keyframes catPeekLeft{50%{transform:rotate(-6deg) translateY(-5px)}}@keyframes catPeekRight{50%{transform:rotate(6deg) translateY(5px)}}
</style>`);
const endTitleObserver=new MutationObserver(()=>{const title=document.querySelector('#end h2');if(title&&title.textContent==='Còn tiếp...')title.textContent='To be continued...'});endTitleObserver.observe(document.querySelector('#end h2'),{childList:true,characterData:true,subtree:true});
document.head.insertAdjacentHTML('beforeend',`<style>
/* Vòng tròn gạch gạch tại vị trí mặt trăng vừa biến mất. */
#film[data-frame="3"] .scene-3:after{content:"";position:absolute;z-index:12;right:11%;top:11%;width:clamp(135px,19vw,230px);aspect-ratio:1;border:4px dashed #c8d2f0aa;border-radius:50%;box-shadow:0 0 18px #aabcf066;opacity:0;animation:moonMissingRing 2.4s ease-in-out forwards}
#film[data-frame="3"] .shock-ring{display:none!important}
@keyframes moonMissingRing{0%{opacity:0;transform:scale(.65) rotate(-12deg)}18%{opacity:.9;transform:scale(1.04) rotate(0)}55%{opacity:.7;transform:scale(.92) rotate(8deg)}100%{opacity:.18;transform:scale(1.12) rotate(0)}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Cảnh 7: An tỉnh dậy, hơi choáng sau khi mặt trăng chạm vào cô bé. */
#film[data-chapter="2"][data-beat="wake"] .bamboo,#film[data-chapter="2"][data-beat="wake"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="wake"] .actors{left:4%!important;bottom:19%!important;opacity:1!important;animation:anWake 2.2s ease both!important}
#film[data-chapter="2"][data-beat="wake"] .firefly{left:21%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="wake"] .chapter2-art{opacity:0!important}
#film[data-chapter="2"][data-beat="wake"] .caption{color:#fff4c7;text-shadow:0 0 14px #ffd56f66}
#film[data-chapter="2"][data-beat="wish"] .bamboo,#film[data-chapter="2"][data-beat="wish"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="wish"] .actors{left:4%!important;bottom:19%!important;opacity:1!important;animation:none!important}
#film[data-chapter="2"][data-beat="wish"] .firefly{left:21%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="wish"] .caption{font-size:clamp(1rem,2.2vw,1.35rem);color:#ffe9a8;text-shadow:0 0 18px #ffd56f99}
#film[data-chapter="2"][data-beat="wish"] #captionBox,#film[data-chapter="2"][data-beat="wish"] #speech{display:none!important}
.wish-letter{position:absolute;z-index:90;inset:0;display:none;place-items:center;padding:80px 18px 40px;background:radial-gradient(circle at 50% 45%,#6d396055 0,transparent 42%),#050817c7;backdrop-filter:blur(5px);pointer-events:none}
#film[data-chapter="2"][data-beat="wish"] .wish-letter{display:grid;animation:wishBackdrop .8s ease both}
.wish-letter article{position:relative;width:min(88vw,520px);padding:34px 38px 30px;border:1px solid #e9b95b99;border-radius:8px;background:linear-gradient(145deg,#fffaf0,#f8e8c8);color:#50322e;text-align:center;box-shadow:0 24px 70px #000b,0 0 34px #ffd56f44;transform-origin:center bottom;animation:letterOpen 1.15s .25s cubic-bezier(.2,.8,.2,1) both}
.wish-gif{position:absolute;width:72px;height:72px;object-fit:contain;border-radius:14px;filter:drop-shadow(0 5px 5px #6b3b2b44);z-index:2}.wish-gif-left{left:12px;bottom:10px;transform:rotate(-6deg)}.wish-gif-right{right:12px;top:10px;transform:rotate(6deg)}
.wish-letter article:before,.wish-letter article:after{content:"";position:absolute;width:30px;height:30px;border-color:#c88a45;opacity:.55}.wish-letter article:before{left:12px;top:12px;border-left:2px solid;border-top:2px solid}.wish-letter article:after{right:12px;bottom:12px;border-right:2px solid;border-bottom:2px solid}
.wish-letter small{display:block;color:#a66a36;font-size:.68rem;font-weight:800;letter-spacing:.28em}.wish-letter h2{margin:10px 0 15px;font:700 clamp(1.25rem,3vw,1.85rem) 'Be Vietnam Pro',sans-serif;color:#6c3544}.wish-letter p{margin:0;line-height:1.75;font-size:clamp(.9rem,2vw,1.05rem)}.wish-letter em{display:block;margin-top:20px;color:#995b55;font-family:serif;font-size:1rem}.wish-envelope{position:absolute;z-index:2;left:50%;top:50%;font-size:4.3rem;filter:drop-shadow(0 10px 12px #0008);animation:envelopeReveal 1s ease both}.wish-envelope span{display:block}
@keyframes wishBackdrop{from{opacity:0}to{opacity:1}}@keyframes envelopeReveal{0%{opacity:0;transform:translate(-50%,-50%) scale(.35) rotate(-8deg)}45%{opacity:1;transform:translate(-50%,-50%) scale(1.08) rotate(3deg)}75%{opacity:1;transform:translate(-50%,-95%) scale(.85)}100%{opacity:0;transform:translate(-50%,-155%) scale(.55)}}@keyframes letterOpen{0%{opacity:0;transform:translateY(80px) scaleY(.15) scaleX(.75)}45%{opacity:1;transform:translateY(20px) scaleY(.65) scaleX(.92)}100%{opacity:1;transform:none}}
@keyframes anWake{0%{transform:translateY(20px) rotate(-10deg);opacity:.25}35%{transform:translateY(0) rotate(4deg);opacity:.7}55%{transform:rotate(-3deg)}72%{transform:rotate(2deg)}100%{transform:rotate(0);opacity:1}}
@media(max-width:680px){#film[data-chapter="2"][data-beat="wake"] .actors,#film[data-chapter="2"][data-beat="wish"] .actors{left:3%!important}#film[data-chapter="2"][data-beat="wake"] .firefly,#film[data-chapter="2"][data-beat="wish"] .firefly{left:22%!important}.wish-letter{padding:72px 14px 28px}.wish-letter article{width:min(92vw,420px);padding:27px 22px 24px}.wish-envelope{font-size:3.5rem}.wish-gif{width:52px;height:52px}.wish-gif-left{left:8px;bottom:7px}.wish-gif-right{right:8px;top:7px}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Cú hù ngắn trước khi bức thư bất ngờ xuất hiện. */
#film[data-chapter="2"][data-beat="wish"] .horror-flash{position:absolute;z-index:20;inset:0;background:#d71935;opacity:0;pointer-events:none;animation:horrorFlash 3s linear both}
#film[data-chapter="2"][data-beat="wish"] .wish-envelope{animation:envelopeReveal 1.25s 3s ease both}
#film[data-chapter="2"][data-beat="wish"] .wish-letter article{animation:letterOpen 1.25s 3.05s cubic-bezier(.2,.8,.2,1) both}
@keyframes horrorFlash{0%{opacity:0}8%{opacity:.8}18%{opacity:.35}42%{opacity:.7}64%{opacity:.3}82%{opacity:.6}100%{opacity:0}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Khi đủ bốn mảnh, ẩn toàn bộ nút mảnh để không còn đường chia tư trên mặt trăng tròn. */
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues.merging button,
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues.merging button{opacity:0!important;pointer-events:none!important}
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues.pieces-hidden{visibility:hidden!important;opacity:0!important}
/* Sau khi ghép, trăng tròn bay thẳng về phía An và khiến cô bé ngất đi. */
#film[data-chapter="2"][data-beat="moon-scattered"].moons-merged .moon-orb{animation:moonFlyToAn 1.9s .15s cubic-bezier(.2,.8,.2,1) both!important;z-index:80!important}
#film[data-chapter="2"][data-beat="moon-scattered"].moon-hit .actors{animation:anFaintFromMoon 1.5s ease-in forwards!important;transform-origin:center bottom}
@keyframes moonFlyToAn{0%{opacity:0;transform:translate(0,0) scale(.35)}18%{opacity:1;transform:translate(-4vw,1vh) scale(.75)}78%{opacity:1;transform:translate(-40vw,3vh) scale(.55)}100%{opacity:0;transform:translate(-43vw,4vh) scale(.18)}}
@keyframes anFaintFromMoon{0%{transform:translate(0,0) rotate(0);opacity:1}20%{transform:translate(2px,-3px) rotate(-2deg);opacity:1}42%{transform:translate(-3px,2px) rotate(2deg);opacity:1}70%{transform:translate(-8px,12px) rotate(-35deg);opacity:.78}100%{transform:translate(-18px,30px) rotate(-90deg);opacity:.42}}
@media(max-width:680px){#film[data-chapter="2"][data-beat="moon-scattered"].moon-hit .actors{animation:anFaintFromMoon 1.5s ease-in forwards!important}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Override cuối cùng: sau khi click, mọi mảnh thật sự bay về tâm ghép. */
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(1),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(2),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(3),
#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(4){left:calc(50% - 23px)!important;bottom:calc(29% - 23px)!important;opacity:1!important;transition:left .9s cubic-bezier(.2,.8,.2,1),bottom .9s cubic-bezier(.2,.8,.2,1),transform .9s ease!important}
@media(max-width:680px){#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(1),#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(2),#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(3),#film[data-chapter="2"][data-beat="moon-scattered"] .moon-clues button.moving:nth-child(4){left:calc(50% - 19px)!important;bottom:calc(29% - 19px)!important}}
</style>`);
document.head.insertAdjacentHTML('beforeend',`<style>
/* Cảnh An nhìn xuống và cảnh thoại phải dùng đúng bố cục ghép mảnh: không tre. */
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .bamboo,
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .forest-art,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .bamboo,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .forest-art{display:none!important;visibility:hidden!important;opacity:0!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .actors,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .actors{left:4%!important;bottom:19%!important;animation:none!important;opacity:1!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .firefly,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .firefly{left:21%!important;bottom:20%!important;animation:fireflyStillPulse 2.4s ease-in-out infinite!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues{opacity:1!important;pointer-events:none!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button,
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button{width:46px!important;height:46px!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(1),
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(1){left:34%!important;bottom:19%!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(2),
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(2){left:46%!important;bottom:24%!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(3),
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(3){left:58%!important;bottom:16%!important}
#film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(4),
#film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(4){left:70%!important;bottom:22%!important}
@media(max-width:680px){
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .actors,
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .actors{left:3%!important;bottom:19%!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .firefly,
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .firefly{left:22%!important;bottom:20%!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button,
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button{width:38px!important;height:38px!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(1),
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(1){left:34%!important;bottom:18%!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(2),
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(2){left:47%!important;bottom:24%!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(3),
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(3){left:60%!important;bottom:16%!important}
 #film[data-chapter="2"][data-beat="moon-scattered-intro"] .moon-clues button:nth-child(4),
 #film[data-chapter="2"][data-beat="moon-scattered-dialogue"] .moon-clues button:nth-child(4){left:73%!important;bottom:22%!important}
}
</style>`);
