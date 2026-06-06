const iconPaths = {
  search: '<circle cx="11" cy="11" r="7"></circle><path d="m16 16 5 5"></path>',
  user: '<circle cx="12" cy="8" r="4"></circle><path d="M4 21c1.7-4 5-6 8-6s6.3 2 8 6"></path>',
  cart: '<path d="M6 6h15l-2 8H8L6 3H3"></path><circle cx="9" cy="20" r="1.6"></circle><circle cx="18" cy="20" r="1.6"></circle>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"></path>',
  "home-cart": '<path d="M3 12 12 4l9 8"></path><path d="M5.5 10.5V20h13V10.5"></path><path d="M8 20h10"></path><path d="M19 15h3l-1 4h-2"></path><circle cx="8" cy="22" r="1"></circle><circle cx="19" cy="22" r="1"></circle>',
  sofa: '<path d="M6 11V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3"></path><path d="M5 12a3 3 0 0 0-3 3v4h20v-4a3 3 0 0 0-3-3"></path><path d="M4 19v3M20 19v3"></path>',
  pot: '<path d="M7 8h10l-1 12H8L7 8Z"></path><path d="M5 8h14"></path><path d="M9 5h6"></path><path d="M15 5a3 3 0 0 0-6 0"></path>',
  plant: '<path d="M12 21v-8"></path><path d="M9 13c-4-1-5-4-5-7 4 0 7 2 8 6"></path><path d="M13 11c1-4 4-6 8-6 0 4-2 7-7 8"></path><path d="M7 21h10l1-6H6l1 6Z"></path>',
  box: '<path d="m3 7 9-4 9 4-9 4-9-4Z"></path><path d="M3 7v10l9 4 9-4V7"></path><path d="M12 11v10"></path>',
  "chevron-right": '<path d="m9 18 6-6-6-6"></path>',
  "chevron-left": '<path d="m15 18-6-6 6-6"></path>',
  "chevron-up": '<path d="m18 15-6-6-6 6"></path>',
  truck: '<path d="M3 6h11v11H3z"></path><path d="M14 10h4l3 3v4h-7"></path><circle cx="7" cy="19" r="2"></circle><circle cx="18" cy="19" r="2"></circle>',
  shield: '<path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Z"></path><path d="m9 12 2 2 4-4"></path>',
  award: '<circle cx="12" cy="8" r="5"></circle><path d="m8.5 12.5-2 8 5-3 5 3-2-8"></path>',
  headphones: '<path d="M4 14a8 8 0 0 1 16 0"></path><path d="M4 14v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Z"></path><path d="M20 14v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z"></path>',
  "credit-card": '<rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18M7 15h4"></path>',
  heart: '<path d="M20.8 8.6a5.1 5.1 0 0 0-8.4-3.9L12 5l-.4-.3A5.1 5.1 0 0 0 3.2 8.6c0 5 8.8 10 8.8 10s8.8-5 8.8-10Z"></path>',
  expand: '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"></path>',
  return: '<path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 1 1 0 12h-2"></path>',
  tag: '<path d="M20 12 12 20 4 12V4h8l8 8Z"></path><circle cx="8" cy="8" r="1.5"></circle>',
  message: '<path d="M21 12a8 8 0 0 1-12.5 6.6L3 20l1.6-5A8 8 0 1 1 21 12Z"></path>',
  store: '<path d="M4 10h16l-1-6H5L4 10Z"></path><path d="M5 10v10h14V10M9 20v-6h6v6"></path>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path>',
  trash: '<path d="M4 7h16"></path><path d="M9 7V4h6v3"></path><path d="M7 7l1 14h8l1-14"></path>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4"></rect><circle cx="12" cy="12" r="3.5"></circle><circle cx="17" cy="7" r="1"></circle>',
  facebook: '<path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z"></path>',
  music: '<path d="M9 18V5l11-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="17" cy="16" r="3"></circle>',
  youtube: '<path d="M3 8.5A3.5 3.5 0 0 1 6.5 5h11A3.5 3.5 0 0 1 21 8.5v7a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15.5Z"></path><path d="m10 9 5 3-5 3V9Z"></path>',
  "arrow-right": '<path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path>'
};

const money = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0
});

const betaProducts = [
  { id: "plant-pot", name: "Maceta palma", detail: "ceramica texturizada", price: 84900, rating: 128, image: "assets/beta-plant-pot.png", material: "ceramica", color: "stone", shipping: ["fast", "free"], badge: "Nuevo" },
  { id: "storage-box", name: "Caja organizadora", detail: "tela beige con tapa", price: 59900, rating: 96, image: "assets/beta-storage-box.png", material: "textil", color: "stone", shipping: ["fast"] },
  { id: "cutting-boards", name: "Set tablas redondas", detail: "bambu natural", price: 69900, rating: 84, image: "assets/beta-cutting-boards.png", material: "madera", color: "olive", shipping: ["free"] },
  { id: "blender", name: "Licuadora acero", detail: "jarra de vidrio 1.5 L", price: 189900, rating: 210, image: "assets/beta-blender.png", material: "vidrio", color: "white", shipping: ["fast", "free"], badge: "Top" },
  { id: "towels", name: "Set x 3 toallas", detail: "algodon tonos neutros", price: 79900, oldPrice: 89900, rating: 157, image: "assets/beta-towels.png", material: "textil", color: "olive", shipping: ["fast"], badge: "-10%", sale: true },
  { id: "shelf", name: "Estante organizador", detail: "3 niveles madera y metal", price: 159900, rating: 73, image: "assets/beta-shelf.png", material: "metal", color: "stone", shipping: ["free"] },
  { id: "round-mirror", name: "Espejo redondo", detail: "marco madera natural", price: 139900, rating: 64, image: "assets/beta-round-mirror.png", material: "madera", color: "olive", shipping: ["fast", "free"] },
  { id: "ceramic-sculpture", name: "Figura abstracta", detail: "ceramica arena", price: 54900, rating: 71, image: "assets/beta-ceramic-sculpture.png", material: "ceramica", color: "white", shipping: ["fast"], badge: "Nuevo" },
  { id: "woven-basket", name: "Canasta tejida", detail: "fibra natural con asas", price: 69900, rating: 45, image: "assets/beta-woven-basket.png", material: "textil", color: "coral", shipping: ["free"] },
  { id: "table-lamp", name: "Lampara de mesa", detail: "ceramica y lino beige", price: 129900, oldPrice: 149900, rating: 56, image: "assets/beta-table-lamp.png", material: "ceramica", color: "stone", shipping: ["fast", "free"], badge: "-13%", sale: true }
].map((product, index) => ({ ...product, index }));

const homeProducts = betaProducts.slice(0, 6);
const catalogProducts = betaProducts;
const relatedProducts = betaProducts.slice(6);

let cartItems = betaProducts.slice(0, 3).map((product, index) => ({
  id: product.id,
  name: `${product.name} ${product.detail}`,
  price: product.price,
  qty: index === 1 ? 2 : 1,
  image: product.image
}));

let currentShipping = 9900;
let productQty = 1;

function setupIcons() {
  document.querySelectorAll(".icon[data-icon]").forEach((node) => {
    const name = node.dataset.icon;
    const path = iconPaths[name];
    if (!path) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  });
}

function renderProductCard(product, mode = "home") {
  const hasBadge = product.badge ? `<span class="badge ${product.sale ? "sale" : ""}">${product.badge}</span>` : "";
  const price = `<div class="price"><strong>${money.format(product.price)}</strong>${product.oldPrice ? `<del>${money.format(product.oldPrice)}</del>` : ""}</div>`;
  return `
    <article class="product-card" data-index="${product.index ?? 0}" data-material="${product.material || ""}" data-color="${product.color || ""}" data-shipping="${(product.shipping || []).join(" ")}" data-price="${product.price}" data-rating="${product.rating || 0}">
      ${hasBadge}
      ${mode === "catalog" ? `<button class="heart-button" type="button" aria-label="Guardar ${product.name}"><span class="icon" data-icon="heart"></span></button>` : ""}
      <button class="card-click" type="button" ${mode === "catalog" ? 'data-nav="product"' : ""}>
        <img src="${product.image}" alt="${product.name} ${product.detail}" />
        <div class="product-body">
          <h3>${product.name}<br />${product.detail}</h3>
          ${mode === "home" ? "" : ""}
          ${price}
          <div class="rating"><span>★★★★★</span><small>(${product.rating})</small></div>
        </div>
      </button>
      <button class="card-cart" type="button" data-add="${product.id}" aria-label="Agregar ${product.name} al carrito"><span class="icon" data-icon="cart"></span></button>
    </article>
  `;
}

function renderRelatedCard(product) {
  return `
    <article class="related-card">
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <h3>${product.name}<br />${product.detail}</h3>
        <strong>${money.format(product.price)}</strong>
        <div class="rating"><span>★★★★★</span><small>(${product.rating})</small></div>
      </div>
      <button type="button" data-add="${product.id}" aria-label="Agregar ${product.name}"><span class="icon" data-icon="cart"></span></button>
    </article>
  `;
}

function renderProducts() {
  document.getElementById("home-products").innerHTML = homeProducts.map((product) => renderProductCard(product)).join("");
  document.getElementById("catalog-products").innerHTML = catalogProducts.map((product) => renderProductCard(product, "catalog")).join("");
  document.getElementById("related-products").innerHTML = relatedProducts.map(renderRelatedCard).join("");
  setupIcons();
}

function renderCart() {
  const table = document.getElementById("cart-table");
  const rows = cartItems.map((item) => `
    <div class="cart-item" data-cart-id="${item.id}">
      <div class="cart-product">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h3>${item.name}</h3>
          <p>Entrega estimada: 3 a 5 días hábiles</p>
        </div>
      </div>
      <div class="cart-meta"><span>Precio</span><strong>${money.format(item.price)}</strong></div>
      <div class="qty-control">
        <button type="button" data-cart-minus="${item.id}">−</button>
        <span>${item.qty}</span>
        <button type="button" data-cart-plus="${item.id}">+</button>
      </div>
      <div class="cart-meta cart-line-total"><span>Total</span><strong>${money.format(item.price * item.qty)}</strong></div>
      <button class="remove-item" type="button" data-remove="${item.id}" aria-label="Eliminar ${item.name}"><span class="icon" data-icon="trash"></span></button>
    </div>
  `).join("");

  table.innerHTML = `
    <div class="cart-list-head">
      <strong>Productos seleccionados</strong>
      <small>${cartItems.length} ${cartItems.length === 1 ? "producto" : "productos"}</small>
    </div>
    ${rows || '<div class="cart-item"><strong>Tu carrito está vacío.</strong></div>'}
  `;
  setupIcons();
  updateTotals();
}

function updateTotals() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + currentShipping;
  const lineCount = cartItems.length;
  document.getElementById("cart-badge").textContent = String(lineCount);
  document.getElementById("subtotal-label").textContent = `Subtotal (${lineCount} ${lineCount === 1 ? "producto" : "productos"})`;
  document.getElementById("subtotal-value").textContent = money.format(subtotal);
  document.getElementById("shipping-value").textContent = currentShipping ? money.format(currentShipping) : "Gratis";
  document.getElementById("total-value").textContent = money.format(total);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function showPage(page) {
  const id = `page-${page}`;
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.toggle("is-active", section.id === id);
  });
  const newHash = page === "home" ? "" : `#${page}`;
  if (window.location.hash !== newHash) {
    history.pushState(null, "", newHash || window.location.pathname);
  }
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function productFromId(id) {
  return [...homeProducts, ...catalogProducts, ...relatedProducts].find((product) => product.id === id);
}

function addProduct(id, qty = 1) {
  const source = productFromId(id) || betaProducts[0];
  const existing = cartItems.find((item) => item.id === source.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({ id: source.id, name: `${source.name} ${source.detail || ""}`.trim(), price: source.price, qty, image: source.image });
  }
  renderCart();
  showToast("Producto agregado al carrito");
}

function setupNavigation() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-nav]");
    if (!nav) return;
    event.preventDefault();
    showPage(nav.dataset.nav);
  });

  window.addEventListener("popstate", () => {
    showPage(location.hash.replace("#", "") || "home");
  });

  showPage(location.hash.replace("#", "") || "home");
}

function setupCartInteractions() {
  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (add) {
      addProduct(add.dataset.add);
      return;
    }

    if (event.target.closest(".add-chair")) {
      addProduct("plant-pot", productQty);
      return;
    }

    const plus = event.target.closest("[data-cart-plus]");
    if (plus) {
      const item = cartItems.find((entry) => entry.id === plus.dataset.cartPlus);
      if (item) item.qty += 1;
      renderCart();
      return;
    }

    const minus = event.target.closest("[data-cart-minus]");
    if (minus) {
      const item = cartItems.find((entry) => entry.id === minus.dataset.cartMinus);
      if (item) item.qty = Math.max(1, item.qty - 1);
      renderCart();
      return;
    }

    const remove = event.target.closest("[data-remove]");
    if (remove) {
      cartItems = cartItems.filter((entry) => entry.id !== remove.dataset.remove);
      renderCart();
      showToast("Producto eliminado");
      return;
    }

    const productQtyButton = event.target.closest("[data-product-qty] [data-qty]");
    if (productQtyButton) {
      productQty = productQtyButton.dataset.qty === "plus" ? productQty + 1 : Math.max(1, productQty - 1);
      productQtyButton.closest("[data-product-qty]").querySelector("span").textContent = String(productQty);
    }
  });

  document.querySelectorAll('input[name="shipping"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      currentShipping = Number(radio.value);
      document.querySelectorAll(".shipping-option").forEach((option) => option.classList.remove("is-selected"));
      radio.closest(".shipping-option").classList.add("is-selected");
      updateTotals();
    });
  });

  document.querySelector(".checkout-button").addEventListener("click", () => {
    document.querySelectorAll(".checkout-steps span").forEach((step, index) => {
      step.classList.toggle("is-active", index === 3);
    });
    showToast("Beta lista: el pago real aún no está conectado");
  });
}

function setupFilters() {
  const checks = [...document.querySelectorAll(".filters input[data-filter]")];
  const shippingChecks = [...document.querySelectorAll(".filters input[data-shipping]")];
  const looseShippingChecks = [...document.querySelectorAll(".filters .filter-group:last-child input[type='checkbox']:not([data-shipping])")];
  const colorButtons = [...document.querySelectorAll(".swatch")];
  const priceRange = document.getElementById("price-filter");
  const priceCurrent = document.getElementById("price-current");
  const clear = document.getElementById("clear-filters");
  const sort = document.getElementById("sort-products");
  const maxPrice = priceRange ? Number(priceRange.max) : Infinity;

  looseShippingChecks.forEach((check, index) => {
    check.dataset.shipping = index === 0 ? "fast" : "free";
    shippingChecks.push(check);
  });

  colorButtons.forEach((button) => {
    if (!button.dataset.color) {
      button.dataset.color = [...button.classList].find((className) => className !== "swatch" && className !== "is-selected") || "";
    }
  });

  function updatePriceLabel() {
    if (!priceRange || !priceCurrent) return;
    const value = Number(priceRange.value);
    priceCurrent.textContent = value >= maxPrice ? `${money.format(value)}+` : money.format(value);
  }

  function applyFilters() {
    const activeMaterials = checks.filter((check) => check.checked).map((check) => check.dataset.filter);
    const activeShipping = shippingChecks.filter((check) => check.checked).map((check) => check.dataset.shipping);
    const activeColors = colorButtons.filter((button) => button.classList.contains("is-selected")).map((button) => button.dataset.color);
    const selectedMaxPrice = priceRange ? Number(priceRange.value) : Infinity;

    document.querySelectorAll("#catalog-products .product-card").forEach((card) => {
      const shippingTags = (card.dataset.shipping || "").split(" ").filter(Boolean);
      const materialOk = activeMaterials.length === 0 || activeMaterials.includes(card.dataset.material);
      const shippingOk = activeShipping.length === 0 || activeShipping.some((shipping) => shippingTags.includes(shipping));
      const colorOk = activeColors.length === 0 || activeColors.includes(card.dataset.color);
      const priceOk = Number(card.dataset.price) <= selectedMaxPrice;
      const visible = materialOk && shippingOk && colorOk && priceOk;
      card.style.display = visible ? "" : "none";
    });
  }

  checks.forEach((check) => check.addEventListener("change", applyFilters));
  shippingChecks.forEach((check) => check.addEventListener("change", applyFilters));
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-selected");
      applyFilters();
    });
  });
  if (priceRange) {
    priceRange.addEventListener("input", () => {
      updatePriceLabel();
      applyFilters();
    });
  }

  clear.addEventListener("click", () => {
    checks.forEach((check) => { check.checked = false; });
    shippingChecks.forEach((check) => { check.checked = false; });
    colorButtons.forEach((button) => button.classList.remove("is-selected"));
    if (priceRange) priceRange.value = priceRange.max;
    updatePriceLabel();
    applyFilters();
  });

  sort.addEventListener("change", () => {
    const grid = document.getElementById("catalog-products");
    const cards = [...grid.children];
    if (sort.selectedIndex === 0) cards.sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index));
    if (sort.value === "Menor precio") cards.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
    if (sort.value === "Mayor precio") cards.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
    if (sort.value === "Mejor valorados") cards.sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating));
    cards.forEach((card) => grid.appendChild(card));
  });

  updatePriceLabel();
}

function setupSearch() {
  document.getElementById("site-search").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = event.currentTarget.querySelector("input").value.trim().toLowerCase();
    showPage("category");
    if (!query) return;
    document.querySelectorAll("#catalog-products .product-card").forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
    showToast(query ? `Resultados para "${query}"` : "Explora nuestros productos");
  });
}

function setupThumbs() {
  document.getElementById("product-thumbs").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll("#product-thumbs button").forEach((thumb) => thumb.classList.remove("is-active"));
    button.classList.add("is-active");
    const img = button.querySelector("img");
    document.getElementById("main-product-image").src = img.src;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupIcons();
  renderProducts();
  renderCart();
  setupNavigation();
  setupCartInteractions();
  setupFilters();
  setupSearch();
  setupThumbs();
});
