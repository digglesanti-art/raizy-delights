const LOGO = "logo-mark.png";

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

function cardHTML(item, list, idx) {
  const media = item.logo
    ? `<div class="card-logo ${list}"><img src="${LOGO}" alt="Raizy Delight's logo"></div>`
    : `<img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy">`;
  const note = item.note ? `<span class="card-note">(${item.note})</span>` : "";
  const name = item.name.replace(/\//g, "/<wbr>");
  return `<article class="card" data-key="${list}-${idx}" role="button" tabindex="0" aria-label="Order ${item.name}">${media}
    <div class="card-body">
      <div class="card-top">
        <div class="card-name">${name}${note}</div>
        <div class="card-price">${item.price}</div>
      </div>
      <div class="add-btn">Add</div>
    </div>
  </article>`;
}

function render(list, items) {
  document.getElementById("grid-" + list).innerHTML =
    items.map((i, idx) => cardHTML(i, list, idx)).join("");
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

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activate(tab.dataset.list);
    history.replaceState(null, "", "#" + tab.dataset.list);
    window.scrollTo({ top: 0 });
  });
});

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
  if (n > 0) basketBar.textContent = `Basket (${n}) - ${fmt(cartTotal())}`;
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
  const media = item.logo
    ? `<div class="sheet-logo ${list}"><img src="${LOGO}" alt="Raizy Delight's logo"></div>`
    : `<img class="sheet-img" src="${item.img}" alt="${item.name}">`;
  itemSheet.innerHTML = `
    <button class="sheet-close" aria-label="Close">&times;</button>
    ${media}
    <div class="sheet-name">${item.name}</div>
    ${item.note ? `<div class="sheet-note">(${item.note})</div>` : ""}
    <div class="sheet-price">${item.price}</div>
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
      <div class="b-price">${item.price}${item.note ? ` · ${item.note}` : ""}</div>
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
    return `${qty} x ${item.name} (${item.price}) - ${fmt(u.amt * qty)}`;
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
