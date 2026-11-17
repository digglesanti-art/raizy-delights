/* ============================================================
   RAIZY DELIGHT'S — COMPLETE APP.JS
   Product catalogue and prices retained from the supplied file.
   Mobile-safe visual viewport sheets; email ordering unchanged.
   ============================================================ */

const LOGO = "logo-mark.png";

const TONE = {
  "parve-p1-0":"caramel","parve-p1-1":"apricot","parve-p1-2":"rose","parve-p1-3":"caramel","parve-p1-4":"butter","parve-p1-5":"sage",
  "parve-p2-0":"latte","parve-p2-1":"caramel","parve-p2-2":"blush","parve-p2-3":"rose","parve-p2-4":"apricot","parve-p2-5":"apricot","parve-p2-6":"butter",
  "parve-p3-0":"latte","parve-p3-1":"latte","parve-p3-2":"caramel","parve-p3-3":"caramel","parve-p3-4":"apricot","parve-p3-5":"blush","parve-p3-6":"butter",
  "parve-p4-0":"latte","parve-p4-1":"blush","parve-p4-2":"sage","parve-p4-3":"rose","parve-p4-4":"butter","parve-p4-5":"blush","parve-p4-6":"apricot",
  "parve-p5-0":"latte","parve-p5-1":"caramel","parve-p5-2":"butter","parve-p5-3":"blush",
  "dairy-p1-0":"lavender","dairy-p1-1":"apricot","dairy-p1-2":"latte","dairy-p1-3":"butter","dairy-p1-4":"sage","dairy-p1-5":"caramel",
  "dairy-p2-0":"apricot","dairy-p2-4":"latte","dairy-p2-1":"butter","dairy-p2-2":"caramel","dairy-p2-3":"blush",
  "dairy-p3-0":"sage","dairy-p3-1":"apricot","dairy-p3-2":"butter","dairy-p3-3":"latte","dairy-p3-4":"blush","dairy-p3-5":"caramel"
};

const cutout = img => "images/cutout/" + img.replace(/\.jpg$/, ".webp");
const PHOTO = {
  "parve-p3-6.jpg":"images/photo/parve-p3-6.jpg","parve-p2-1.jpg":"images/photo/parve-p2-1.jpg",
  "parve-p4-1.jpg":"images/photo/parve-p4-1.jpg","parve-p1-1.jpg":"images/photo/parve-p1-1.jpg",
  "parve-p1-2.jpg":"images/photo/parve-p1-2.jpg","parve-p1-0.jpg":"images/photo/parve-p1-0.jpg",
  "parve-p1-3.jpg":"images/photo/parve-p1-3.jpg","parve-p2-4.jpg":"images/photo/parve-p2-4.jpg",
  "parve-p2-2.jpg":"images/photo/parve-p2-2.jpg","parve-p4-3.jpg":"images/photo/parve-p4-3.jpg",
  "dairy-p2-3.jpg":"images/photo/dairy-p2-3.jpg","parve-p4-4.jpg":"images/photo/parve-p4-4.jpg",
  "parve-p4-0.jpg":"images/photo/parve-p4-0.jpg","parve-p5-3.jpg":"images/photo/parve-p5-3.jpg",
  "dairy-p3-2.jpg":"images/photo/dairy-p3-2.jpg","dairy-p1-3.jpg":"images/photo/dairy-p1-3.jpg",
  "parve-p3-0.jpg":"images/photo/parve-p3-0.jpg","dairy-p2-0.jpg":"images/photo/dairy-p2-0.jpg",
  "dairy-p3-0.jpg":"images/photo/dairy-p3-0.jpg","parve-p2-3.jpg":"images/photo/parve-p2-3.jpg",
  "parve-p2-5.jpg":"images/photo/parve-p2-5.jpg","dairy-p3-5.jpg":"images/photo/dairy-p3-5.jpg",
  "parve-p1-5.jpg":"images/photo/parve-p1-5.jpg","parve-p4-5.jpg":"images/photo/parve-p4-5.jpg",
  "parve-p3-2.jpg":"images/photo/parve-p3-2.jpg","dairy-p1-1.jpg":"images/photo/dairy-p1-1.jpg",
  "dairy-p2-4.jpg":"images/photo/dairy-p2-4.jpg","parve-p3-5.jpg":"images/photo/parve-p3-5.jpg",
  "dairy-p2-1.jpg":"images/photo/dairy-p2-1.jpg","parve-p3-3.jpg":"images/photo/parve-p3-3.jpg",
  "parve-p3-4.jpg":"images/photo/parve-p3-4.jpg","parve-p1-4.jpg":"images/photo/parve-p1-4.jpg",
  "parve-p2-6.jpg":"images/photo/parve-p2-6.jpg","dairy-p1-2.jpg":"images/photo/dairy-p1-2.jpg",
  "parve-p3-1.jpg":"images/photo/parve-p3-1.jpg","dairy-p1-4.jpg":"images/photo/dairy-p1-4.jpg",
  "parve-p4-6.jpg":"images/photo/parve-p4-6.jpg","parve-p5-1.jpg":"images/photo/parve-p5-1.jpg",
  "parve-p4-2.jpg":"images/photo/parve-p4-2.jpg","parve-p5-2.jpg":"images/photo/parve-p5-2.jpg",
  "dairy-p3-1.jpg":"images/photo/dairy-p3-1.jpg","dairy-p1-0.jpg":"images/photo/dairy-p1-0.jpg",
  "dairy-p2-2.jpg":"images/photo/dairy-p2-2.jpg","parve-p2-0.jpg":"images/photo/parve-p2-0.jpg",
  "dairy-p1-5.jpg":"images/photo/dairy-p1-5.jpg","parve-p5-0.jpg":"images/photo/parve-p5-0.jpg",
  "dairy-p3-4.jpg":"images/photo/dairy-p3-4.jpg","dairy-p3-3.jpg":"images/photo/dairy-p3-3.jpg"
};

const toneOf = item => (item.img && TONE[item.img.replace(/\.jpg$/, "")]) || "butter";
const showPrice = p => (/^\d+(,\d+)?$/.test(p.trim()) ? "€ " + p.trim() : p);
const showPriceH = p => showPrice(p).replaceAll("€", '<span class="eur">€</span>');

const PARVE = [
  {name:"Chocolate Log",price:"€ 60,00",note:"praline, halva, lotus, peanut",img:"parve-p1-0.jpg"},
  {name:"Chestnut Log",price:"€ 50,00",logo:true},
  {name:"Lotus Tart",price:"€ 45,00",img:"parve-p1-1.jpg"},
  {name:"Pomegranate Tart",price:"€ 45,00",img:"parve-p1-2.jpg"},
  {name:"Chocolate Tart",price:"€ 45,00",img:"parve-p1-3.jpg"},
  {name:"Cookie Tart",price:"€ 45,00",img:"parve-p1-4.jpg"},
  {name:"Fruit Tart",price:"€ 45,00",img:"parve-p1-5.jpg"},
  {name:"S'mores Tart",price:"€ 45,00",img:"parve-p2-0.jpg"},
  {name:"Chocolate Tart",price:"1,70",note:"individual",img:"parve-p2-1.jpg"},
  {name:"Fruit Tart",price:"1,70",note:"individual",img:"parve-p2-2.jpg"},
  {name:"Raspberry Tart",price:"2,00",img:"parve-p2-3.jpg"},
  {name:"Praline Tart",price:"2,00",img:"parve-p2-4.jpg"},
  {name:"Peanut Chews",price:"1,70",img:"parve-p2-5.jpg"},
  {name:"Canoli",price:"1,35",img:"parve-p2-6.jpg"},
  {name:"Chocolate Ball",price:"10 for € 20,00",note:"praline, halva, lotus, peanut",img:"parve-p3-0.jpg"},
  {name:"Brownie Cups with Coffee Cream",price:"1,70",img:"parve-p3-1.jpg"},
  {name:"Chocolate Hazelnut",price:"1,80",img:"parve-p3-2.jpg"},
  {name:"Krispie Filled Chocolate",price:"1,80",img:"parve-p3-3.jpg"},
  {name:"Nut Balls",price:"1,70",img:"parve-p3-4.jpg"},
  {name:"Chocolate Pops",price:"10 for € 18,00",img:"parve-p3-5.jpg"},
  {name:"Chocolate Buns",price:"1,40",img:"parve-p3-6.jpg"},
  {name:"Matzah Cake",price:"1,70",img:"parve-p4-0.jpg"},
  {name:"Cookie with Mousse Cream",price:"10 for € 15,00",img:"parve-p4-1.jpg"},
  {name:"Nutty Cookie",price:"1,70",img:"parve-p4-2.jpg"},
  {name:"Strawberry Cookie",price:"12 for € 15,00",img:"parve-p4-3.jpg"},
  {name:"Vienniese Cookies",price:"1,70",img:"parve-p4-4.jpg"},
  {name:"Cookie Cake",price:"1,70",img:"parve-p4-5.jpg"},
  {name:"Babka on Stick",price:"10 for € 18,00",img:"parve-p4-6.jpg"},
  {name:"Meringue",price:"1,50",note:"can also be flower shape",img:"parve-p5-0.jpg"},
  {name:"Chestnut Mousse",price:"2,00",img:"parve-p5-1.jpg"},
  {name:"Chocolate/Lemon/Strawberry Layered Mousse",price:"1,80",img:"parve-p5-2.jpg"},
  {name:"Strawberry/Chocolate Mousse",price:"1,50",img:"parve-p5-3.jpg"},
  {name:"Tray Cut Up Cream Cake",price:"€ 20,00",logo:true},
  {name:"Tray Cut Up Cake",price:"€ 17,00",logo:true}
];

const DAIRY = [
  {name:"Blueberry Muffin",price:"2,00",img:"dairy-p1-0.jpg"},
  {name:"Chocolate Cheese Muffin",price:"2,00",logo:true},
  {name:"Mini Babke",price:"2,00",img:"dairy-p1-1.jpg"},
  {name:"Tiramisu Muffin",price:"2,50",img:"dairy-p1-2.jpg"},
  {name:"Cheese log",price:"3,00",img:"dairy-p1-3.jpg"},
  {name:"Cheese Flowers",price:"2,50",img:"dairy-p1-4.jpg"},
  {name:"Brownie/Nougat Bars",price:"0,80",img:"dairy-p1-5.jpg"},
  {name:"Pinwheels",price:"25 pcs 20,00",img:"dairy-p2-0.jpg"},
  {name:"Danishes",price:"25 pcs 20,00",logo:true},
  {name:"Sour Cream Twist",price:"25 pcs 20,00",logo:true},
  {name:"Wafer Cake",price:"2,00",img:"dairy-p2-4.jpg"},
  {name:"Oval Cheese",price:"2,50",img:"dairy-p2-1.jpg"},
  {name:"Mousse",price:"2,00",img:"dairy-p2-2.jpg"},
  {name:"Mini Cheesecake",price:"2,80",img:"dairy-p2-3.jpg"},
  {name:"Three Layer Mini Cheesecake",price:"2,50",img:"dairy-p3-0.jpg"},
  {name:"Cheese filled Rosette",price:"2,50",img:"dairy-p3-1.jpg"},
  {name:"Cookies",price:"2,50",img:"dairy-p3-2.jpg"},
  {name:"Cheesecake Brownie Bars",price:"1,80",img:"dairy-p3-3.jpg"},
  {name:"Tart",price:"60,00",img:"dairy-p3-4.jpg"},
  {name:"Cheesecake",price:"90,00",img:"dairy-p3-5.jpg"},
  {name:"Big Babka",price:"45,00",logo:true}
];

const LIST_OF = {parve:PARVE,dairy:DAIRY};

function unitInfo(item) {
  const p = item.price.trim();
  let m = p.match(/^€\s*([\d,]+)$/);
  if (m) return {amt:parseFloat(m[1].replace(",",".")),pack:null};
  m = p.match(/^(\d+)\s*for\s*€\s*([\d,]+)$/);
  if (m) return {amt:parseFloat(m[2].replace(",",".")),pack:"pack of "+m[1]};
  m = p.match(/^(\d+)\s*pcs\s*([\d,]+)$/);
  if (m) return {amt:parseFloat(m[2].replace(",",".")),pack:"pack of "+m[1]};
  m = p.match(/^([\d,]+)$/);
  if (m) return {amt:parseFloat(m[1].replace(",",".")),pack:null};
  return {amt:0,pack:null};
}
function fmt(n) { return "€ "+n.toFixed(2).replace(".",","); }

function findItem(key) {
  const match = /^(parve|dairy)-(\d+)$/.exec(key);
  if (!match) return {};
  const list = match[1], idx = Number(match[2]);
  return {item:LIST_OF[list][idx],list};
}

/* Cake presentation: original image sources are used unchanged. */
function cakeStage(item, cls="") {
  let cake;
  if (item.logo) {
    cake = `<img class="stage-logo" src="${LOGO}" alt="Raizy Delight's logo" loading="lazy">`;
  } else if (PHOTO[item.img]) {
    const src = PHOTO[item.img];
    cake = `<img class="stage-photo-bg" src="${src}" alt="" aria-hidden="true" loading="lazy"><img class="stage-photo" src="${src}" alt="${item.name}" loading="lazy">`;
  } else {
    cake = `<img class="stage-cake" src="${cutout(item.img)}" alt="${item.name}" loading="lazy">`;
  }
  return `<div class="stage ${cls}${item.img && PHOTO[item.img] ? " has-photo" : ""}" data-tone="${toneOf(item)}"><span class="stage-floor"></span><span class="stage-shadow"></span>${cake}</div>`;
}

function cardHTML(item,list,idx) {
  const u = unitInfo(item);
  const desc = item.note
    ? item.note[0].toUpperCase()+item.note.slice(1)
    : (list==="parve"?"Parve":"Dairy")+(u.pack?" · "+u.pack:"");
  const name = item.name.replace(/\//g,"/<wbr>");
  return `<article class="card" data-key="${list}-${idx}" role="button" tabindex="0" aria-label="Order ${item.name}">
    <div class="card-photo">${cakeStage(item)}<span class="view-chip">Choose quantity</span></div>
    <div class="card-body">
      <div class="card-top"><h3 class="card-name">${name}</h3><div class="card-price">${showPriceH(item.price)}</div></div>
      <p class="card-note">${desc}</p>
      <div class="card-actions"><span class="add-btn">Add to order <span aria-hidden="true">+</span></span></div>
    </div>
  </article>`;
}

function render(list,items) {
  document.getElementById("grid-"+list).innerHTML =
    items.map((item,idx)=>cardHTML(item,list,idx)).join("")+
    `<div class="custom-wrap"><div class="custom">
      <h3>Something of your own?</h3>
      <p>Add your own request in the basket before you send the order, and it goes along with it.</p>
      <button class="btn btn-light btn-sm" type="button" data-open-basket>Open your order</button>
    </div></div>`;
}
render("parve",PARVE);
render("dairy",DAIRY);

/* List tabs and navigation */
function activate(listName) {
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("active",t.dataset.list===listName));
  document.querySelectorAll(".list").forEach(l=>l.classList.toggle("active",l.id===listName));
}
function showList(listName,scroll) {
  if (!LIST_OF[listName]) return;
  activate(listName);
  history.replaceState(null,"","#"+listName);
  if (scroll) document.getElementById("lists").scrollIntoView({behavior:"smooth",block:"start"});
}
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>showList(tab.dataset.list,true)));
document.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",e=>{
  e.preventDefault();
  closeMenu();
  showList(a.dataset.go,true);
}));

/* Mobile menu */
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
function closeMenu() {
  if (!mobileNav || !menuBtn) return;
  mobileNav.hidden = true;
  menuBtn.setAttribute("aria-expanded","false");
}
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click",()=>{
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuBtn.setAttribute("aria-expanded",String(opening));
  });
  mobileNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
}
if (location.hash==="#dairy") activate("dairy");

/* Splash */
try {
  if (sessionStorage.getItem("splash-seen")) {
    document.getElementById("splash")?.remove();
  } else {
    sessionStorage.setItem("splash-seen","1");
    setTimeout(()=>document.getElementById("splash")?.remove(),2200);
  }
} catch (_) {
  document.getElementById("splash")?.remove();
}

/* Ordering */
const ORDER_EMAIL = "raizy.freund97@gmail.com";
const ORDER_NOTICE = "Please note: your order is not confirmed yet. We will first check if we can take it and then reply to you.";
const cart = new Map();
let current = null;
let toastTimer = null;
let heroIndex = 0;
let lastFocused = null;

function cartTotal() {
  let total=0;
  cart.forEach(({item,qty})=>{total+=unitInfo(item).amt*qty;});
  return total;
}
function cartCount() {
  let count=0;
  cart.forEach(({qty})=>{count+=qty;});
  return count;
}
function saveCart() {
  const saved={};
  cart.forEach((value,key)=>{saved[key]=value.qty;});
  try { localStorage.setItem("rd-cart",JSON.stringify(saved)); } catch (_) {}
}
function loadCart() {
  try {
    const saved=JSON.parse(localStorage.getItem("rd-cart")||"{}");
    Object.entries(saved).forEach(([key,qty])=>{
      const found=findItem(key);
      const safeQty=Math.max(0,Math.min(99,Number(qty)||0));
      if(found.item && safeQty>0) cart.set(key,{item:found.item,list:found.list,qty:safeQty});
    });
  } catch (_) {}
}
function updateBar() {
  const count=cartCount();
  basketBar.hidden=false; // Keep the mobile order bar available even when empty.
  basketBar.textContent=count
    ? `Your order (${count}) · ${fmt(cartTotal())}`
    : "Your order · View basket";
  document.body.classList.toggle("has-cart",count>0);
  const counter=document.getElementById("order-count");
  if(counter) counter.textContent=count;
  saveCart();
}

/* Create a single overlay root. Both sheets live inside this visible-viewport wrapper. */
document.body.insertAdjacentHTML("beforeend",`
  <div class="rd-overlay-root" id="rd-overlay-root" hidden>
    <div class="backdrop" id="backdrop"></div>
    <section class="sheet" id="item-sheet" role="dialog" aria-modal="true" aria-label="Choose cake quantity" hidden></section>
    <section class="sheet" id="basket-sheet" role="dialog" aria-modal="true" aria-label="Your order" hidden></section>
  </div>
  <button id="basket-bar" type="button" aria-label="Open your order">Your order · View basket</button>
`);
const overlayRoot=document.getElementById("rd-overlay-root");
const backdrop=document.getElementById("backdrop");
const itemSheet=document.getElementById("item-sheet");
const basketSheet=document.getElementById("basket-sheet");
const basketBar=document.getElementById("basket-bar");

function syncVisibleViewport() {
  const vv=window.visualViewport;
  /* v5.6: pinch zoom must only magnify, never rearrange. While zoomed, freeze
     sheet and basket-bar geometry on the layout viewport; visual-viewport
     tracking resumes when the zoom returns to 1. */
  const zoomed=vv ? vv.scale>1.02 : false;
  const width=vv && !zoomed ? vv.width : document.documentElement.clientWidth;
  const height=vv && !zoomed ? vv.height : window.innerHeight;
  const left=vv && !zoomed ? vv.offsetLeft : 0;
  const top=vv && !zoomed ? vv.offsetTop : 0;
  const mobile=width<=700;

  /* Position the wrapper itself, not individual sheets.
     All sheet geometry is then relative to the visible viewport. */
  if (mobile) {
    Object.assign(overlayRoot.style,{
      position:"fixed",
      left:`${left}px`,
      top:`${top}px`,
      width:`${width}px`,
      height:`${height}px`,
      right:"auto",
      bottom:"auto",
      transform:"none"
    });
    const barHeight=basketBar.offsetHeight || 56;
    Object.assign(basketBar.style,{
      position:"fixed",
      left:`${left+8}px`,
      top:`${top+height-barHeight-8}px`,
      width:`${Math.max(0,width-16)}px`,
      right:"auto",
      bottom:"auto",
      transform:"none"
    });
  } else {
    overlayRoot.removeAttribute("style");
    basketBar.removeAttribute("style");
  }
}

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize",syncVisibleViewport,{passive:true});
  window.visualViewport.addEventListener("scroll",syncVisibleViewport,{passive:true});
}
window.addEventListener("resize",syncVisibleViewport,{passive:true});
window.addEventListener("orientationchange",()=>setTimeout(syncVisibleViewport,80),{passive:true});

function lockPage() {
  document.body.dataset.previousOverflow=document.body.style.overflow||"";
  document.body.style.overflow="hidden";
}
function unlockPage() {
  document.body.style.overflow=document.body.dataset.previousOverflow||"";
  delete document.body.dataset.previousOverflow;
}
function openOverlay(sheet) {
  lastFocused=document.activeElement;
  itemSheet.hidden=sheet!==itemSheet;
  basketSheet.hidden=sheet!==basketSheet;
  overlayRoot.hidden=false;
  lockPage();
  syncVisibleViewport();
  requestAnimationFrame(()=>{
    syncVisibleViewport();
    sheet.querySelector(".sheet-close")?.focus({preventScroll:true});
  });
}
function closeSheets() {
  overlayRoot.hidden=true;
  itemSheet.hidden=true;
  basketSheet.hidden=true;
  current=null;
  unlockPage();
  syncVisibleViewport();
  if(lastFocused && typeof lastFocused.focus==="function") {
    try { lastFocused.focus({preventScroll:true}); } catch (_) {}
  }
}
backdrop.addEventListener("click",closeSheets);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && !overlayRoot.hidden) closeSheets();
});

function sheetCloseButton() {
  return `<button class="sheet-close" type="button" aria-label="Close">×</button>`;
}
function wireClose(sheet) {
  sheet.querySelector(".sheet-close")?.addEventListener("click",closeSheets);
}

function openItem(key) {
  const found=findItem(key);
  if(!found.item) return;
  const {item,list}=found;
  const unit=unitInfo(item);
  const inCart=cart.get(key);
  current={key,item,list,qty:inCart?inCart.qty:1};
  itemSheet.innerHTML=`
    <div class="sheet-head">
      <div class="sheet-title">Choose your cake</div>
      ${sheetCloseButton()}
    </div>
    <div class="sheet-scroll">
      <div class="sheet-photo">${cakeStage(item,"stage-sheet")}</div>
      <div class="sheet-name">${item.name}</div>
      ${item.note?`<div class="sheet-note">${item.note}</div>`:""}
      <div class="sheet-price">${showPriceH(item.price)}</div>
      ${unit.pack?`<div class="sheet-pack">${unit.pack}</div>`:""}
      <div class="stepper">
        <button class="step" type="button" data-d="-1" aria-label="Decrease quantity">−</button>
        <span class="qty" id="item-qty" aria-live="polite">${current.qty}</span>
        <button class="step" type="button" data-d="1" aria-label="Increase quantity">+</button>
      </div>
    </div>
    <div class="sheet-footer">
      <button class="primary" id="add-btn" type="button"></button>
    </div>`;
  const updateButton=()=>{
    const qtyNode=itemSheet.querySelector("#item-qty");
    const addNode=itemSheet.querySelector("#add-btn");
    if(qtyNode) qtyNode.textContent=current.qty;
    if(addNode) addNode.textContent=(inCart?"Update basket":"Add to basket")+" · "+fmt(unit.amt*current.qty);
  };
  itemSheet.querySelectorAll("[data-d]").forEach(button=>button.addEventListener("click",()=>{
    current.qty=Math.min(99,Math.max(1,current.qty+Number(button.dataset.d)));
    updateButton();
  }));
  itemSheet.querySelector("#add-btn").addEventListener("click",()=>{
    if(!current) return;
    cart.set(current.key,{item:current.item,list:current.list,qty:current.qty});
    updateBar();
    closeSheets();
    toast("Added to your order.");
  });
  wireClose(itemSheet);
  updateButton();
  openOverlay(itemSheet);
}

function basketLineHTML(key,entry) {
  const {item,qty}=entry;
  const unit=unitInfo(item);
  return `<div class="b-line" data-key="${key}">
    <div class="b-info">
      <div class="b-name">${item.name}</div>
      <div class="b-price">${showPriceH(item.price)}${item.note?` · ${item.note}`:""}</div>
    </div>
    <div class="b-stepper">
      <button class="step small" type="button" data-d="-1" aria-label="Decrease ${item.name}">−</button>
      <span class="qty">${qty}</span>
      <button class="step small" type="button" data-d="1" aria-label="Increase ${item.name}">+</button>
    </div>
    <div class="b-total-line">${fmt(unit.amt*qty)}</div>
  </div>`;
}

function openBasket() {
  if(cart.size===0) {
    closeSheets();
    toast("Your basket is empty — tap a cake to add it.");
    document.getElementById("lists").scrollIntoView({behavior:"smooth",block:"start"});
    return;
  }

  const renderBasket=()=>{
    const lines=[...cart.entries()].map(([key,value])=>basketLineHTML(key,value)).join("");
    const storedName=(()=>{try{return localStorage.getItem("rd-name")||"";}catch(_){return "";}})();
    basketSheet.innerHTML=`
      <div class="sheet-head">
        <div class="sheet-title">Your order</div>
        ${sheetCloseButton()}
      </div>
      <div class="sheet-scroll">
        ${lines}
        <div class="b-total"><span>Total</span><span>${fmt(cartTotal())}</span></div>
        <input id="b-name" class="b-name-input" type="text" autocomplete="name" placeholder="Your name (optional)">
        <textarea id="b-request" class="b-request" rows="3" placeholder="Own request (optional)"></textarea>
        <p class="b-notice">${ORDER_NOTICE}</p>
      </div>
      <div class="sheet-footer">
        <button class="primary" id="send-btn" type="button">Send order by email · ${fmt(cartTotal())}</button>
      </div>`;
    const nameInput=basketSheet.querySelector("#b-name");
    nameInput.value=storedName;
    nameInput.addEventListener("input",e=>{
      try{localStorage.setItem("rd-name",e.target.value);}catch(_){}
    });
    const requestInput=basketSheet.querySelector("#b-request");
    try{requestInput.value=sessionStorage.getItem("rd-request")||"";}catch(_){}
    requestInput.addEventListener("input",e=>{
      try{sessionStorage.setItem("rd-request",e.target.value);}catch(_){}
    });
    basketSheet.querySelectorAll(".b-line").forEach(line=>{
      const key=line.dataset.key;
      line.querySelectorAll("[data-d]").forEach(button=>button.addEventListener("click",()=>{
        const entry=cart.get(key);
        if(!entry) return;
        entry.qty+=Number(button.dataset.d);
        if(entry.qty<=0) cart.delete(key);
        updateBar();
        if(cart.size===0) {
          closeSheets();
          toast("Your basket is now empty.");
        } else {
          renderBasket();
          syncVisibleViewport();
        }
      }));
    });
    basketSheet.querySelector("#send-btn").addEventListener("click",sendOrder);
    wireClose(basketSheet);
  };

  renderBasket();
  openOverlay(basketSheet);
}

function sendOrder() {
  const name=(basketSheet.querySelector("#b-name")?.value||"").trim();
  const request=(basketSheet.querySelector("#b-request")?.value||"").trim();
  const lines=[...cart.values()].map(({item,qty})=>{
    const unit=unitInfo(item);
    return `${qty} x ${item.name} (${showPrice(item.price)}) - ${fmt(unit.amt*qty)}`;
  });
  const body=
    "New order - Raizy Delight's\n\n"+
    lines.join("\n")+
    "\n\nTotal: "+fmt(cartTotal())+
    (name?"\n\nName: "+name:"")+
    (request?"\n\nOwn request: "+request:"")+
    "\n\n("+ORDER_NOTICE+")";
  toast("Your email app will open with the order ready - tap Send. The order is only confirmed once we reply.");
  window.location.href="mailto:"+ORDER_EMAIL+
    "?subject="+encodeURIComponent("Cake order - Raizy Delight's")+
    "&body="+encodeURIComponent(body);
}

/* Toast message */
function toast(message) {
  let element=document.getElementById("toast");
  if(!element) {
    element=document.createElement("div");
    element.id="toast";
    element.setAttribute("role","status");
    element.setAttribute("aria-live","polite");
    document.body.appendChild(element);
  }
  element.textContent=message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>element.classList.remove("show"),5000);
}

/* Header order button and persistent mobile basket bar */
document.getElementById("order-btn").addEventListener("click",openBasket);
basketBar.addEventListener("click",openBasket);
document.querySelectorAll("[data-open-basket]").forEach(button=>button.addEventListener("click",e=>{
  e.stopPropagation();
  openBasket();
}));

/* Hero: featured cakes */
const HERO=[
  ["parve-10","rose",["#F08CA0","#F7C1B5","#FFD9C7"]],
  ["parve-2","caramel",["#E9A964","#F6D2A2","#D98E5B"]],
  ["dairy-19","butter",["#F5C46E","#FBE3A8","#EBA77A"]]
];
const heroStage=document.getElementById("hero-stage");
if(heroStage) {
  heroStage.innerHTML=HERO.map(([key,tone,blobs],index)=>{
    const {item}=findItem(key);
    const src=PHOTO[item.img]||cutout(item.img);
    return `<div class="hs-slide hs-${index+1}${index===0?" is-active":""}${PHOTO[item.img]?" is-photo":""}" data-tone="${tone}" data-key="${key}" style="--b1:${blobs[0]};--b2:${blobs[1]};--b3:${blobs[2]}">
      <span class="hs-blob hs-blob1"></span><span class="hs-blob hs-blob2"></span><span class="hs-blob hs-blob3"></span>
      <img class="hs-glow" src="${src}" alt="" aria-hidden="true">
      <span class="hs-shadow"></span>
      <img class="hs-cake" src="${src}" alt="${item.name}"${index?" loading=\"lazy\"":" fetchpriority=\"high\""}>
      <span class="hs-chip"><span class="hs-name">${item.name}</span><span class="hs-price">${showPriceH(item.price)}</span></span>
    </div>`;
  }).join("")+`<div class="hs-dots" aria-hidden="true"><i class="active"></i><i></i><i></i></div>`;

  function setHeroSlide(index) {
    heroIndex=(index+HERO.length)%HERO.length;
    heroStage.querySelectorAll(".hs-slide").forEach((slide,i)=>slide.classList.toggle("is-active",i===heroIndex));
    heroStage.querySelectorAll(".hs-dots i").forEach((dot,i)=>dot.classList.toggle("active",i===heroIndex));
  }
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!reduceMotion) window.setInterval(()=>setHeroSlide(heroIndex+1),5000);
  const openFeatured=()=>openItem(HERO[heroIndex][0]);
  heroStage.addEventListener("click",openFeatured);
  heroStage.addEventListener("keydown",e=>{
    if(e.key==="Enter"||e.key===" ") {e.preventDefault();openFeatured();}
  });
}

/* Hero favourites */
const favs=document.getElementById("favs");
if(favs && favs.dataset.keys) {
  favs.innerHTML=favs.dataset.keys.split(",").map(key=>{
    const {item}=findItem(key);
    if(!item) return "";
    return `<li><button type="button" class="fav" data-open="${key}">
      <span class="fav-img">${cakeStage(item,"stage-mini")}</span>
      <span><span class="fav-name">${item.name}</span><span class="fav-price">${showPriceH(item.price)}</span></span>
    </button></li>`;
  }).join("");
}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>openItem(button.dataset.open)));

/* Product cards: delegated events also work for dynamically rendered cards */
document.querySelectorAll(".grid").forEach(grid=>{
  grid.addEventListener("click",event=>{
    if(event.target.closest("[data-open-basket]")) return;
    const card=event.target.closest(".card");
    if(card) openItem(card.dataset.key);
  });
  grid.addEventListener("keydown",event=>{
    if(event.key!=="Enter" && event.key!==" ") return;
    const card=event.target.closest(".card");
    if(card) {event.preventDefault();openItem(card.dataset.key);}
  });
});

/* Restore saved order and initialize visible-viewport geometry */
loadCart();
updateBar();
syncVisibleViewport();
