const LOGO = "logo.png";

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
  { name: "Wafer Cake", price: "2,00", img: "dairy-p2-1.jpg" },
  { name: "Oval Cheese", price: "2,50", img: "dairy-p2-2.jpg" },
  { name: "Mousse", price: "2,00", img: "dairy-p2-3.jpg" },
  { name: "Mini Cheesecake", price: "2,80", img: "dairy-p2-4.jpg" },

  { name: "Three Layer Mini Cheesecake", price: "2,50", img: "dairy-p3-0.jpg" },
  { name: "Cheese filled Rosette", price: "2,50", img: "dairy-p3-1.jpg" },
  { name: "Cookies", price: "2,50", img: "dairy-p3-2.jpg" },
  { name: "Cheesecake Brownie Bars", price: "1,80", img: "dairy-p3-3.jpg" },
  { name: "Tart", price: "60,00", img: "dairy-p3-4.jpg" },
  { name: "Cheesecake", price: "90,00", img: "dairy-p3-5.jpg" },
  { name: "Big Babka", price: "45,00", logo: true },
];

function cardHTML(item, list) {
  const media = item.logo
    ? `<div class="card-logo ${list}"><img src="${LOGO}" alt="Raizy Delight's logo"></div>`
    : `<img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy">`;
  const note = item.note ? `<span class="card-note">(${item.note})</span>` : "";
  const name = item.name.replace(/\//g, "/<wbr>");
  return `<article class="card">${media}
    <div class="card-body">
      <div class="card-name">${name}${note}</div>
      <div class="card-price">${item.price}</div>
    </div>
  </article>`;
}

function render(list, items) {
  document.getElementById("grid-" + list).innerHTML =
    items.map((i) => cardHTML(i, list)).join("");
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
