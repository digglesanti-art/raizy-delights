const LOGO = "logo-mark.png";
/* soft studio backdrop tone per cake (the cake cut-out itself is the original photo's own pixels) */
const TONE = {"parve-p1-0": "caramel","parve-p1-1": "apricot","parve-p1-2": "rose","parve-p1-3": "caramel","parve-p1-4": "butter","parve-p1-5": "sage","parve-p2-0": "latte","parve-p2-1": "caramel","parve-p2-2": "blush","parve-p2-3": "rose","parve-p2-4": "apricot","parve-p2-5": "apricot","parve-p2-6": "butter","parve-p3-0": "latte","parve-p3-1": "latte","parve-p3-2": "caramel","parve-p3-3": "caramel","parve-p3-4": "apricot","parve-p3-5": "blush","parve-p3-6": "butter","parve-p4-0": "latte","parve-p4-1": "blush","parve-p4-2": "sage","parve-p4-3": "rose","parve-p4-4": "butter","parve-p4-5": "blush","parve-p4-6": "apricot","parve-p5-0": "latte","parve-p5-1": "caramel","parve-p5-2": "butter","parve-p5-3": "blush","dairy-p1-0": "lavender","dairy-p1-1": "apricot","dairy-p1-2": "latte","dairy-p1-3": "butter","dairy-p1-4": "sage","dairy-p1-5": "caramel","dairy-p2-0": "apricot","dairy-p2-4": "latte","dairy-p2-1": "butter","dairy-p2-2": "caramel","dairy-p2-3": "blush","dairy-p3-0": "sage","dairy-p3-1": "apricot","dairy-p3-2": "butter","dairy-p3-3": "latte","dairy-p3-4": "blush","dairy-p3-5": "caramel"};
const cutout = (img) => "images/cutout/" + img.replace(/\.jpg$/, ".webp");
const PHOTO = {"parve-p3-6.jpg": "images/photo/parve-p3-6.jpg", "parve-p2-1.jpg": "images/photo/parve-p2-1.jpg", "parve-p4-1.jpg": "images/photo/parve-p4-1.jpg", "parve-p1-1.jpg": "images/photo/parve-p1-1.jpg", "parve-p1-2.jpg": "images/photo/parve-p1-2.jpg", "parve-p1-0.jpg": "images/photo/parve-p1-0.jpg", "parve-p1-3.jpg": "images/photo/parve-p1-3.jpg", "parve-p2-4.jpg": "images/photo/parve-p2-4.jpg", "parve-p2-2.jpg": "images/photo/parve-p2-2.jpg", "parve-p4-3.jpg": "images/photo/parve-p4-3.jpg", "dairy-p2-3.jpg": "images/photo/dairy-p2-3.jpg", "parve-p4-4.jpg": "images/photo/parve-p4-4.jpg", "parve-p4-0.jpg": "images/photo/parve-p4-0.jpg", "parve-p5-3.jpg": "images/photo/parve-p5-3.jpg", "dairy-p3-2.jpg": "images/photo/dairy-p3-2.jpg", "dairy-p1-3.jpg": "images/photo/dairy-p1-3.jpg", "parve-p3-0.jpg": "images/photo/parve-p3-0.jpg", "dairy-p2-0.jpg": "images/photo/dairy-p2-0.jpg", "dairy-p3-0.jpg": "images/photo/dairy-p3-0.jpg", "parve-p2-3.jpg": "images/photo/parve-p2-3.jpg", "parve-p2-5.jpg": "images/photo/parve-p2-5.jpg", "dairy-p3-5.jpg": "images/photo/dairy-p3-5.jpg", "parve-p1-5.jpg": "images/photo/parve-p1-5.jpg", "parve-p4-5.jpg": "images/photo/parve-p4-5.jpg", "parve-p3-2.jpg": "images/photo/parve-p3-2.jpg", "dairy-p1-1.jpg": "images/photo/dairy-p1-1.jpg", "dairy-p2-4.jpg": "images/photo/dairy-p2-4.jpg", "parve-p3-5.jpg": "images/photo/parve-p3-5.jpg", "dairy-p2-1.jpg": "images/photo/dairy-p2-1.jpg", "parve-p3-3.jpg": "images/photo/parve-p3-3.jpg", "parve-p3-4.jpg": "images/photo/parve-p3-4.jpg", "parve-p1-4.jpg": "images/photo/parve-p1-4.jpg", "parve-p2-6.jpg": "images/photo/parve-p2-6.jpg", "dairy-p1-2.jpg": "images/photo/dairy-p1-2.jpg", "parve-p3-1.jpg": "images/photo/parve-p3-1.jpg", "dairy-p1-4.jpg": "images/photo/dairy-p1-4.jpg", "parve-p4-6.jpg": "images/photo/parve-p4-6.jpg", "parve-p5-1.jpg": "images/photo/parve-p5-1.jpg", "parve-p4-2.jpg": "images/photo/parve-p4-2.jpg", "parve-p5-2.jpg": "images/photo/parve-p5-2.jpg", "dairy-p3-1.jpg": "images/photo/dairy-p3-1.jpg", "dairy-p1-0.jpg": "images/photo/dairy-p1-0.jpg", "dairy-p2-2.jpg": "images/photo/dairy-p2-2.jpg", "parve-p2-0.jpg": "images/photo/parve-p2-0.jpg", "dairy-p1-5.jpg": "images/photo/dairy-p1-5.jpg", "parve-p5-0.jpg": "images/photo/parve-p5-0.jpg", "dairy-p3-4.jpg": "images/photo/dairy-p3-4.jpg", "dairy-p3-3.jpg": "images/photo/dairy-p3-3.jpg"};
/* his own new studio photos, shown as-is (no cut-out) */
const toneOf = (item) => (item.img && TONE[item.img.replace(/\.jpg$/, "")]) || "butter";
// display only: a bare amount like "90,00" is shown as "€ 90,00"; the stored price strings are unchanged
const showPrice = (p) => (/^\d+(,\d+)?$/.test(p.trim()) ? "€ " + p.trim() : p);

const PARVE = [
  { name: "Chocolate Log", price: "€ 60,00", note: "praline, halva, lotus, peanut", img: "parve-p1-0.jpg" },
  { name: "Chestnut Log", price: "€ 50,00", logo: true },
  { name: "Lotus Tart", price: "€ 45,00", img: "parve-p1-1.jpg" },
  { name: "Pomegranate Tart", price: "€ 45,00", img: "parve-p1-2.jpg" },
  { name: "Chocolate Tart", price: "€ 45,00", img: "parve-p1-3.jpg" },
  { name: "Cookie Tart", price: "€ 45,00", img: "parve-p1-4.jpg" },
  { name: "Fruit Tart", price: "€ 45,00", img: "parve-p1-5.jpg" },

  { name: "S'mores Tart", price: "€ 45,00", img: "parve-p2-0.jpg" },
  { name: "Chocolate Tart", price: "1,70", note: "individual", img: "parve-p2-1.jpg" },
  { name: "Fruit Tart", price: "1,70", note: "individual", img: "parve-p2-2.jpg" },
  { name: "Raspberry Tart", price: "2,00", img: "parve-p2-3.jpg" },
  { name: "Praline Tart", price: "2,00", img: "parve-p2-4.jpg" },
  { name: "Peanut Chews", price: "1,70", img: "parve-p2-5.jpg" },
  { name: "Canoli", price: "1,35", img: "parve-p2-6.jpg" },

  { name: "Chocolate Ball", price: "10 for € 20,00", note: "praline, halva, lotus, peanut", img: "parve-p3-0.jpg" },
  { name: "Brownie Cups with Coffee Cream", price: "1,70", img: "parve-p3-1.jpg" },
  { name: "Chocolate Hazelnut", price: "1,80", img: "parve-p3-2.jpg" },
  { name: "Krispie Filled Chocolate", price: "1,80", img: "parve-p3-3.jpg" },
  { name: "Nut Balls", price: "1,70", img: "parve-p3-4.jpg" },
  { name: "Chocolate Pops", price: "10 for € 18,00", img: "parve-p3-5.jpg" },
  { name: "Chocolate Buns", price: "1,40", img: "parve-p3-6.jpg" },

  { name: "Matzah Cake", price: "1,70", img: "parve-p4-0.jpg" },
  { name: "Cookie with Mousse Cream", price: "10 for € 15,00", img: "parve-p4-1.jpg" },
  { name: "Nutty Cookie", price: "1,70", img: "parve-p4-2.jpg" },
  { name: "Strawberry Cookie", price: "12 for € 15,00", img: "parve-p4-3.jpg" },
  { name: "Vienniese Cookies", price: "1,70", img: "parve-p4-4.jpg" },
  { name: "Cookie Cake", price: "1,70", img: "parve-p4-5.jpg" },
  { name: "Babka on Stick", price: "10 for € 18,00", img: "parve-p4-6.jpg" },

  { name: "Meringue", price: "1,50", note: "can also be flower shape", img: "parve-p5-0.jpg" },
  { name: "Chestnut Mousse", price: "2,00", img: "parve-p5-1.jpg" },
  { name: "Chocolate/Lemon/Strawberry Layered Mousse", price: "1,80", img: "parve-p5-2.jpg" },
  { name: "Strawberry/Chocolate Mousse", price: "1,50", img: "parve-p5-3.jpg" },
  { name: "Tray Cut Up Cream Cake", price: "€ 20,00", logo: true },
  { name: "Tray Cut Up Cake", price: "€ 17,00", logo: true },
];

const DAIRY = [
  { name: "Blueberry Muffin", price: "2,00", img: "dairy-p1-0.jpg" },
  { name: "Chocolate Cheese Muffin", price: "2,00", logo: true },
  { name: "Mini Babke", price: "2,00", img: "dairy-p1-1.jpg" },
  { name: "Tiramisu Muffin", price: "2,50", img: "dairy-p1-2.jpg" },
  { name: "Cheese log", price: "3,00", img: "dairy-p1-3.jpg" },
  { name: "Cheese Flowers", price: "2,50", img: "dairy-p1-4.jpg" },
  { name: "Brownie/Nougat Bars", price: "0,80", img: "dairy-p1-5.jpg" },

  { name: "Pinwheels", price: "25 pcs 20,00", img: "dairy-p2-0.jpg" },
  { name: "Danishes", price: "25 pcs 20,00", logo: true },
  { name: "Sour Cream Twist", price: "25 pcs 20,00", logo: true },
  { name: "Wafer Cake", price: "2,00", img: "dairy-p2-4.jpg" },
  { name: "Oval Cheese", price: "2,50", img: "dairy-p2-1.jpg" },
  { name: "Mousse", price: "2,00", img: "dairy-p2-2.jpg" },
  { name: "Mini Cheesecake", price: "2,80", img: "dairy-p2-3.jpg" },

  { name: "Three Layer Mini Cheesecake", price: "2,50", img: "dairy-p3-0.jpg" },
  { name: "Cheese filled Rosette", price: "2,50", img: "dairy-p3-1.jpg" },
  { name: "Cookies", price: "2,50", img: "dairy-p3-2.jpg" },
  { name: "Cheesecake Brownie Bars", price: "1,80", img: "dairy-p3-3.jpg" },
  { name: "Tart", price: "60,00", img: "dairy-p3-4.jpg" },
  { name: "Cheesecake", price: "90,00", img: "dairy-p3-5.jpg" },
  { name: "Big Babka", price: "45,00", logo: true },
];

/* ---------- catalog rendering ---------- */
const LIST_OF = { parve: PARVE, dairy: DAIRY };

function cakeStage(item, cls) {
  // backdrop, floor and contact shadow are separate layers; the cake on top is the untouched cut-out
  const cake = item.logo
    ? `<img class="stage-logo" src="${LOGO}" alt="Raizy Delight's logo" loading="lazy">`
    : PHOTO[item.img] ? `<img class="stage-photo-bg" src="${PHOTO[item.img]}" alt="" aria-hidden="true" loading="lazy"><img class="stage-photo" src="${PHOTO[item.img]}" alt="${item.name}" loading="lazy">`
    : `<img class="stage-cake" src="${cutout(item.img)}" alt="${item.name}" loading="lazy">`;
  return `<div class="stage ${cls || ""}${item.img && PHOTO[item.img] ? " has-photo" : ""}" data-tone="${toneOf(item)}"><span class="stage-floor"></span><span class="stage-shadow"></span>${cake}</div>`;
}

function cardHTML(item, list, idx) {
  const u = unitInfo(item);
  const desc = item.note ? item.note[0].toUpperCase() + item.note.slice(1) : (list === "parve" ? "Parve" : "Dairy") + (u.pack ? " · " + u.pack : "");
  const name = item.name.replace(/\//g, "/<wbr>");
  return `<article class="card" data-key="${list}-${idx}" role="button" tabindex="0" aria-label="Order ${item.name}">
    <div class="card-photo">${cakeStage(item)}<span class="view-chip">Choose quantity</span></div>
    <div class="card-body">
      <div class="card-top">
        <h3 class="card-name">${name}</h3>
        <div class="card-price">${showPrice(item.price)}</div>
      </div>
      <p class="card-note">${desc}</p>
      <div class="card-actions"><span class="add-btn">Add to order <span aria-hidden="true">+</span></span></div>
    </div>
  </article>`;
}

function render(list, items) {
  document.getElementById("grid-" + list).innerHTML =
    items.map((i, idx) => cardHTML(i, list, idx)).join("") +
    `<div class="custom-wrap"><div class="custom">
      <h3>Something of your own?</h3>
      <p>Add your own request in the basket before you send the order, and it goes along with it.</p>
      <button class="btn btn-light btn-sm" type="button" data-open-basket>Open your order</button>
    </div></div>`;
}

render("parve", PARVE);
render("dairy", DAIRY);

function activate(listName) {
  document.querySelectorAll(".tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.list === listName)
  );
  document.querySelectorAll(".list").forEach((l) =>
    l.classList.toggle("active", l.id === listName)
  );
}

function showList(listName, scroll) {
  activate(listName);
  history.replaceState(null, "", "#" + listName);
  if (scroll) document.getElementById("lists").scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => showList(tab.dataset.list, true));
});

// header / footer links that jump to a list
document.querySelectorAll("[data-go]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
    showList(a.dataset.go, true);
  });
});

// mobile menu
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
function closeMenu() {
  mobileNav.hidden = true;
  menuBtn.setAttribute("aria-expanded", "false");
}
menuBtn.addEventListener("click", () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuBtn.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

if (location.hash === "#dairy") activate("dairy");

// splash: skip on repeat views this session
if (sessionStorage.getItem("splash-seen")) {
  document.getElementById("splash").remove();
} else {
  sessionStorage.setItem("splash-seen", "1");
  setTimeout(() => {
    const s = document.getElementById("splash");
    if (s) s.remove();
  }, 2200);
}

/* ---------- ordering ---------- */
// Order destination email. Orders are sent as a prefilled email from the
// customer's own mail app to this address.
const ORDER_EMAIL = "raizy.freund97@gmail.com";
const ORDER_NOTICE = "Please note: your order is not confirmed yet. We will first check if we can take it and then reply to you.";

const cart = new Map(); // key -> { item, list, qty }
let current = null;     // item being edited in the sheet

function findItem(key) {
  const [list, idx] = [key.startsWith("parve") ? "parve" : "dairy", +key.split("-").pop()];
  return { item: LIST_OF[list][idx], list };
}

function unitInfo(item) {
  const p = item.price.trim();
  let m = p.match(/^€\s*([\d,]+)$/);
  if (m) return { amt: parseFloat(m[1].replace(",", ".")), pack: null };
  m = p.match(/^(\d+)\s*for\s*€\s*([\d,]+)$/);
  if (m) return { amt: parseFloat(m[2].replace(",", ".")), pack: "pack of " + m[1] };
  m = p.match(/^(\d+)\s*pcs\s*([\d,]+)$/);
  if (m) return { amt: parseFloat(m[2].replace(",", ".")), pack: "pack of " + m[1] };
  m = p.match(/^([\d,]+)$/);
  if (m) return { amt: parseFloat(m[1].replace(",", ".")), pack: null };
  return { amt: 0, pack: null };
}

function fmt(n) { return "€ " + n.toFixed(2).replace(".", ","); }

function cartTotal() {
  let t = 0;
  cart.forEach(({ item, qty }) => { t += unitInfo(item).amt * qty; });
  return t;
}
function cartCount() {
  let c = 0;
  cart.forEach(({ qty }) => { c += qty; });
  return c;
}

function saveCart() {
  const o = {};
  cart.forEach((v, k) => { o[k] = v.qty; });
  localStorage.setItem("rd-cart", JSON.stringify(o));
}
function loadCart() {
  try {
    const o = JSON.parse(localStorage.getItem("rd-cart") || "{}");
    Object.entries(o).forEach(([k, qty]) => {
      const { item, list } = findItem(k);
      if (item && qty > 0) cart.set(k, { item, list, qty });
    });
  } catch (e) { /* ignore */ }
}

document.body.insertAdjacentHTML("beforeend", `
<div class="backdrop" id="backdrop" hidden></div>
<div class="sheet" id="item-sheet" role="dialog" aria-modal="true" hidden></div>
<div class="sheet" id="basket-sheet" role="dialog" aria-modal="true" hidden></div>
<button id="basket-bar" hidden></button>
`);

const backdrop = document.getElementById("backdrop");
const itemSheet = document.getElementById("item-sheet");
const basketSheet = document.getElementById("basket-sheet");
const basketBar = document.getElementById("basket-bar");

function closeSheets() {
  backdrop.hidden = true;
  itemSheet.hidden = true;
  basketSheet.hidden = true;
  current = null;
}
backdrop.addEventListener("click", closeSheets);

function updateBar() {
  const n = cartCount();
  basketBar.hidden = n === 0;
  document.body.classList.toggle("has-cart", n > 0);
  if (n > 0) basketBar.textContent = `Your order (${n}) · ${fmt(cartTotal())}`;
  document.getElementById("order-count").textContent = n;
  saveCart();
}

document.getElementById("order-btn").addEventListener("click", () => {
  if (cart.size === 0) {
    toast("Your basket is empty - tap a cake to add it.");
    document.getElementById("lists").scrollIntoView({ behavior: "smooth" });
  } else {
    openBasket();
  }
});

function openItem(key) {
  const { item, list } = findItem(key);
  const u = unitInfo(item);
  const inCart = cart.get(key);
  current = { key, item, list, qty: inCart ? inCart.qty : 1 };
  const media = `<div class="sheet-photo">${cakeStage(item, "stage-sheet")}</div>`;
  itemSheet.innerHTML = `
    <button class="sheet-close" aria-label="Close">&times;</button>
    ${media}
    <div class="sheet-name">${item.name}</div>
    ${item.note ? `<div class="sheet-note">(${item.note})</div>` : ""}
    <div class="sheet-price">${showPrice(item.price)}</div>
    ${u.pack ? `<div class="sheet-pack">quantity = ${u.pack}</div>` : ""}
    <div class="stepper">
      <button class="step" data-d="-1" aria-label="Less">&minus;</button>
      <span class="qty" id="item-qty">${current.qty}</span>
      <button class="step" data-d="1" aria-label="More">+</button>
    </div>
    <button class="primary" id="add-btn"></button>`;
  const updBtn = () => {
    document.getElementById("item-qty").textContent = current.qty;
    document.getElementById("add-btn").textContent =
      (inCart ? "Update basket" : "Add to basket") + " - " + fmt(u.amt * current.qty);
  };
  itemSheet.querySelectorAll(".step").forEach((b) =>
    b.addEventListener("click", () => {
      current.qty = Math.min(99, Math.max(1, current.qty + +b.dataset.d));
      updBtn();
    })
  );
  itemSheet.querySelector(".sheet-close").addEventListener("click", closeSheets);
  document.getElementById("add-btn").addEventListener("click", () => {
    cart.set(current.key, { item: current.item, list: current.list, qty: current.qty });
    updateBar();
    closeSheets();
  });
  updBtn();
  backdrop.hidden = false;
  itemSheet.hidden = false;
}

function basketLineHTML(key, { item, qty }) {
  const u = unitInfo(item);
  return `<div class="b-line" data-key="${key}">
    <div class="b-info">
      <div class="b-name">${item.name}</div>
      <div class="b-price">${showPrice(item.price)}${item.note ? ` · ${item.note}` : ""}</div>
    </div>
    <div class="b-stepper">
      <button class="step small" data-d="-1" aria-label="Less">&minus;</button>
      <span class="qty">${qty}</span>
      <button class="step small" data-d="1" aria-label="More">+</button>
    </div>
    <div class="b-total-line">${fmt(u.amt * qty)}</div>
  </div>`;
}

function openBasket() {
  if (cart.size === 0) return;
  const renderBasket = () => {
    const lines = [...cart.entries()].map(([k, v]) => basketLineHTML(k, v)).join("");
    basketSheet.innerHTML = `
      <button class="sheet-close" aria-label="Close">&times;</button>
      <div class="sheet-title">Your order</div>
      ${lines}
      <div class="b-total"><span>Total</span><span>${fmt(cartTotal())}</span></div>
      <input id="b-name" class="b-name-input" type="text" placeholder="Your name (optional)"
             value="${(localStorage.getItem("rd-name") || "").replace(/"/g, "&quot;")}">
      <textarea id="b-request" class="b-request" rows="2"
        placeholder="Own request (optional)"></textarea>
      <p class="b-notice">${ORDER_NOTICE}</p>
      <button class="primary" id="send-btn">Send order by email</button>`;
    basketSheet.querySelector(".sheet-close").addEventListener("click", closeSheets);
    basketSheet.querySelectorAll(".b-line").forEach((line) => {
      const key = line.dataset.key;
      line.querySelectorAll(".step").forEach((b) =>
        b.addEventListener("click", () => {
          const entry = cart.get(key);
          entry.qty += +b.dataset.d;
          if (entry.qty <= 0) cart.delete(key);
          updateBar();
          if (cart.size === 0) closeSheets(); else renderBasket();
        })
      );
    });
    document.getElementById("b-name").addEventListener("input", (e) =>
      localStorage.setItem("rd-name", e.target.value)
    );
    document.getElementById("b-request").value = sessionStorage.getItem("rd-request") || "";
    document.getElementById("b-request").addEventListener("input", (e) =>
      sessionStorage.setItem("rd-request", e.target.value)
    );
    document.getElementById("send-btn").addEventListener("click", sendOrder);
  };
  renderBasket();
  backdrop.hidden = false;
  basketSheet.hidden = false;
}

function sendOrder() {
  const name = (document.getElementById("b-name").value || "").trim();
  const request = (document.getElementById("b-request").value || "").trim();
  const lines = [...cart.values()].map(({ item, qty }) => {
    const u = unitInfo(item);
    return `${qty} x ${item.name} (${showPrice(item.price)}) - ${fmt(u.amt * qty)}`;
  });
  const body =
    "New order - Raizy Delight's\n\n" +
    lines.join("\n") +
    "\n\nTotal: " + fmt(cartTotal()) +
    (name ? "\n\nName: " + name : "") +
    (request ? "\n\nOwn request: " + request : "") +
    "\n\n(" + ORDER_NOTICE + ")";
  toast("Your email app will open with the order ready - tap Send. The order is only confirmed once we reply.");
  location.href =
    "mailto:" + ORDER_EMAIL +
    "?subject=" + encodeURIComponent("Cake order - Raizy Delight's") +
    "&body=" + encodeURIComponent(body);
}

let toastTimer = null;
function toast(msg) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 6000);
}


/* ---------- hero: three cut-out cakes over soft moving colour, generated from the data ---------- */
const HERO = [["parve-10", "rose", ["#F08CA0", "#F7C1B5", "#FFD9C7"]], ["parve-2", "caramel", ["#E9A964", "#F6D2A2", "#D98E5B"]], ["dairy-19", "butter", ["#F5C46E", "#FBE3A8", "#EBA77A"]]];
const heroStage = document.getElementById("hero-stage");
if (heroStage) {
  heroStage.innerHTML = HERO.map(([key, tone, blobs], i) => {
    const { item } = findItem(key);
    const isPhoto = !!PHOTO[item.img];
    const src = isPhoto ? PHOTO[item.img] : cutout(item.img);
    return `<div class="hs-slide hs-${i + 1}${isPhoto ? " is-photo" : ""}" data-tone="${tone}" data-key="${key}" style="--b1:${blobs[0]};--b2:${blobs[1]};--b3:${blobs[2]}">
      <span class="hs-blob hs-blob1"></span><span class="hs-blob hs-blob2"></span><span class="hs-blob hs-blob3"></span>
      <img class="hs-glow" src="${src}" alt="" aria-hidden="true">
      <span class="hs-shadow"></span>
      <img class="hs-cake" src="${src}" alt="${item.name}"${i ? ' loading="lazy"' : ' fetchpriority="high"'}>
      <span class="hs-chip"><span class="hs-name">${item.name}</span><span class="hs-price">${showPrice(item.price)}</span></span>
    </div>`;
  }).join("") + `<div class="hs-dots" aria-hidden="true"><i></i><i></i><i></i></div>`;
  const t0 = performance.now();
  heroStage.addEventListener("click", () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const i = reduce ? 0 : Math.floor(((performance.now() - t0) / 5000) % 3);
    openItem(HERO[i][0]);
  });
}
const favs = document.getElementById("favs");
if (favs) {
  favs.innerHTML = favs.dataset.keys.split(",").map((key) => {
    const { item } = findItem(key);
    return `<li><button type="button" class="fav" data-open="${key}"><span class="fav-img">${cakeStage(item, "stage-mini")}</span><span><span class="fav-name">${item.name}</span><span class="fav-price">${showPrice(item.price)}</span></span></button></li>`;
  }).join("");
}

// hero favourites open the cake directly
document.querySelectorAll("[data-open]").forEach((b) =>
  b.addEventListener("click", () => openItem(b.dataset.open))
);

document.querySelectorAll("[data-open-basket]").forEach((b) =>
  b.addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("order-btn").click();
  })
);

// card taps
document.querySelectorAll(".grid").forEach((g) => {
  g.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openItem(card.dataset.key);
  });
  g.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (card) { e.preventDefault(); openItem(card.dataset.key); }
  });
});
basketBar.addEventListener("click", openBasket);

loadCart();
updateBar();
