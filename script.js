// Numéro WhatsApp + Mobile Money
const WHATSAPP_NUMBER = "22891070704"; // format international sans +
const TELEPHONE_DISPLAY = "+228 91070704";

const currency = (x) => `${x.toLocaleString("fr-FR")} FCFA`;

// Données : Catégories -> Sous-catégories -> Articles
// IMPORTANT: j'inclus tous les articles que tu as listés.
const catalogData = [
  {
    category: "Routeurs",
    subtitle: "Accès internet & réseau",
    subcategories: [
      {
        name: "TP-Link & Marques",
        items: [
          { name: "TPlink 940", price: 13000, img: "TP-Link 940 routeur wifi" },
          { name: "TPlink venu", price: 5000, img: "TP-Link routeur" },
          { name: "routeur phincom", price: 20000, img: "router phincom" },
          { name: "comfast routeur", price: 10000, img: "comfast router" }
        ]
      },
      {
        name: "Tenda",
        items: [
          { name: "Tenda F3", price: 10000, img: "Tenda F3 routeur" },
          { name: "Tenda F3 pro", price: 10000, img: "Tenda F3 pro router" },
          { name: "Tenda F3 venu", price: 6000, img: "Tenda F3" },
          { name: "Tenda F6 venu", price: 6000, img: "Tenda F6" },
          { name: "Tenda AC1200 venu", price: 8000, img: "Tenda AC1200" }
        ]
      },
      {
        name: "LBlink",
        items: [
          { name: "LBlink 4 antennes", price: 12000, img: "LBlink routeur 4 antennes" },
          { name: "LBlink 2 antennes", price: 8000, img: "LBlink routeur 2 antennes" }
        ]
      }
    ]
  },

  {
    category: "Antennes",
    subtitle: "Réseau longue portée",
    subcategories: [
      {
        name: "Comfast",
        items: [
          { name: "Comfast M2", price: 20000, img: "Comfast M2 antenna" },
          { name: "comfast M5", price: 250000, img: "Comfast M5 antenna" },
          { name: "comfast EW71", price: 20000, img: "Comfast EW71 antenna" },
          { name: "EW72", price: 25000, img: "EW72 antenna" },
          { name: "EW85", price: 40000, img: "EW85 antenna" },
          { name: "EW87", price: 50000, img: "EW87 antenna" }
        ]
      },
      {
        name: "Jumelles / Mercury / Tenda / TPlink",
        items: [
          { name: "M5 jumelle", price: 30000, img: "M5 jumelle antenna" },
          { name: "Tenda 03", price: 22000, img: "Tenda 03 antenna" },
          { name: "tenda M2 jumelle", price: 24000, img: "Tenda M2 jumelle antenna" },
          { name: "Tenda M5 jumelle", price: 25000, img: "Tenda M5 jumelle antenna" },
          { name: "mercury M2 jumelle", price: 20000, img: "Mercury M2 jumelle antenna" },
          { name: "mercury M5 jumelle", price: 30000, img: "Mercury M5 jumelle antenna" },
          { name: "Mercury B201", price: 25000, img: "Mercury B201 antenna" },
          { name: "TPlink M2 jumelle", price: 38000, img: "TP-Link M2 jumelle antenna" }
        ]
      }
    ]
  },

  {
    category: "Caméras",
    subtitle: "Surveillance & sécurité",
    subcategories: [
      {
        name: "V380",
        items: [
          { name: "V380 petit", price: 10000, img: "V380 mini camera" },
          { name: "v380 grand", price: 25000, img: "V380 camera" }
        ]
      },
      {
        name: "Solaire & Autres",
        items: [
          { name: "caméra solaire SIM", price: 30000, img: "solar sim security camera" },
          { name: "caméra solaire wifi", price: 30000, img: "solar wifi camera" },
          { name: "caméra double objectif cendre", price: 25000, img: "dual lens camera" }
        ]
      }
    ]
  },

  {
    category: "Lampadaires",
    subtitle: "Éclairage solaire / LED",
    subcategories: [
      {
        name: "Modèles alu (puissance)",
        items: [
          { name: "modèle alu 100 watt", price: 23000, img: "LED street light 100 watt" },
          { name: "alu 200 watt", price: 28000, img: "LED street light 200 watt" },
          { name: "alu 300 watt", price: 32000, img: "LED street light 300 watt" },
          { name: "alu 400 watt", price: 35000, img: "LED street light 400 watt" }
        ]
      },
      {
        name: "Lampadaires simples",
        items: [
          { name: "lampadaire simple 1000 watt", price: 40000, img: "street light 1000 watt" },
          { name: "lampadaire simple 800 watt", price: 35000, img: "street light 800 watt" },
          { name: "lampadaire 600 watt", price: 30000, img: "street light 600 watt" },
          { name: "lampadaire 300 watt", price: 25000, img: "street light 300 watt" },
          { name: "lampadaire 150 watt", price: 17000, img: "street light 150 watt" }
        ]
      }
    ]
  },

  {
    category: "Projecteurs",
    subtitle: "Puissance d’éclairage",
    subcategories: [
      {
        name: "Projecteurs LED",
        items: [
          { name: "600 watt", price: 30000, img: "LED projector 600 watt" },
          { name: "400 watt", price: 28000, img: "LED projector 400 watt" },
          { name: "200 watt", price: 23000, img: "LED projector 200 watt" }
        ]
      }
    ]
  },

  {
    category: "Caméra Lampadaire",
    subtitle: "4G + WiFi",
    subcategories: [
      {
        name: "Caméra intégrée",
        items: [
          { name: "caméra lampadaire 4g wifi", price: 50000, img: "4g wifi street lamp camera" }
        ]
      }
    ]
  },

  {
    category: "Divers",
    subtitle: "Accessoires & autres",
    subcategories: [
      {
        name: "Routeurs / Hubs divers",
        items: [
          { name: "RB951", price: 35000, img: "RB951 router" },
          { name: "L009", price: 75000, img: "L009 router" },
          { name: "AX2", price: 75000, img: "AX2 router" },
          { name: "AX3", price: 85000, img: "AX3 router" },
          { name: "haplite", price: 20000, img: "network device" },
          { name: "Microtic hess", price: 45000, img: "Mikrotik network device" },
          { name: "Microtic hess", price: 45000, img: "Mikrotik hess" } // (si doublon involontaire, dis-moi et je corrige)
        ]
      },
      {
        name: "Câbles",
        items: [
          { name: "cable utp 100m", price: 14000, img: "UTP cable 100m" },
          { name: "cable SFTP 100 m", price: 15000, img: "SFTP cable 100m" },
          { name: "cable UTP 305m", price: 30000, img: "UTP cable 305m" },
          { name: "cable SFTP 305m", price: 35000, img: "SFTP cable 305m" }
        ]
      },
      {
        name: "Systèmes & Kits caméras",
        items: [
          { name: "Mini DC", price: 20000, img: "mini DC power" },
          { name: "Caméra Kit de 4", price: 75000, img: "4 camera kit" },
          { name: "caméras kit de 8", price: 140000, img: "8 camera kit" }
        ]
      },
      {
        name: "Téléphonie / Jumelles / Répéteurs",
        items: [
          { name: "combiné téléphonique sans fil", price: 20000, img: "cordless telephone" },
          { name: "combiné téléphonique avec fil", price: 15000, img: "corded telephone" },
          { name: "mini caméra jumelle", price: 35000, img: "mini dual camera" },
          { name: "répéteurs", price: 10000, img: "wifi repeater" }
        ]
      }
    ]
  }
];

// NOTE: Je détecte ce doublon potentiel "Microtic hess".
// Si tu veux strictement 1 seule entrée, dis-moi et je le retire.
function buildUnsplashUrl(query){
  return `https://source.unsplash.com/200x200/?${encodeURIComponent(query)}&tech`;
}

const catalogEl = document.getElementById("catalog");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

// Modal
const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalImg = document.getElementById("modalImg");
const orderForm = document.getElementById("orderForm");

const customerName = document.getElementById("customerName");
const customerMobile = document.getElementById("customerMobile");
const customerAddress = document.getElementById("customerAddress");
const paymentMethod = document.getElementById("paymentMethod");
const needDelivery = document.getElementById("needDelivery");

const sendWhatsApp = document.getElementById("sendWhatsApp");
const copyNumber = document.getElementById("copyNumber");

let currentProduct = null;

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, (m)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function renderCatalog(filterText=""){
  const q = filterText.trim().toLowerCase();

  catalogEl.innerHTML = "";

  for(const cat of catalogData){
    const catMatches = cat.subcategories.some(sub =>
      sub.items.some(it => it.name.toLowerCase().includes(q))
    );

    // Si filtre actif: afficher seulement les sous-blocs ayant des résultats
    if(q && !catMatches) continue;

    const catCard = document.createElement("div");
    catCard.className = "catCard";

    const header = document.createElement("div");
    header.className = "catHeader";
    header.innerHTML = `
      <div>
        <h2>${escapeHtml(cat.category)}</h2>
        <p>${escapeHtml(cat.subtitle)}</p>
      </div>
      <div class="badge">Catalogue</div>
    `;

    catCard.appendChild(header);

    const subGrid = document.createElement("div");
    subGrid.className = "subGrid";

    for(const sub of cat.subcategories){
      const filteredItems = sub.items.filter(it => !q || it.name.toLowerCase().includes(q));
      if(q && filteredItems.length === 0) continue;

      const block = document.createElement("div");
      block.className = "subBlock";

      block.innerHTML = `
        <div class="subTitleBar">
          <b>${escapeHtml(sub.name)}</b>
          <span class="badge">${filteredItems.length} article(s)</span>
        </div>
        <div style="overflow:auto;">
          <table>
            <thead>
              <tr>
                <th>Article</th>
                <th>Prix</th>
                <th>Commander</th>
              </tr>
            </thead>
            <tbody>
              ${filteredItems.map(it => `
                <tr>
                  <td>
                    <div style="display:flex;gap:12px;align-items:flex-start;">
                      <div class="prodThumb">
                        <img alt="${escapeHtml(it.name)}"
                             src="${buildUnsplashUrl(it.img)}"
                             loading="lazy">
                      </div>
                      <div>
                        <div class="prodName">${escapeHtml(it.name)}</div>
                        <div class="prodSub">Paiement Mobile Money • Livraison disponible</div>
                      </div>
                    </div>
                  </td>
                  <td><div class="price">${escapeHtml(currency(it.price))}</div></td>
                  <td>
                    <div class="btnCell">
                      <button class="primaryBtn" data-action="order" data-name="${escapeHtml(it.name)}" data-price="${it.price}" data-img="${escapeHtml(buildUnsplashUrl(it.img))}">
                        Commander
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;

      subGrid.appendChild(block);
    }

    catCard.appendChild(subGrid);
    catalogEl.appendChild(catCard);
  }

  if(catalogEl.innerHTML.trim() === "" && q){
    const empty = document.createElement("div");
    empty.className = "catCard";
    empty.innerHTML = `<p class="muted">Aucun article trouvé pour : <b>${escapeHtml(filterText)}</b></p>`;
    catalogEl.appendChild(empty);
  }
}

function openModal(product){
  currentProduct = product;

  modalName.textContent = product.name;
  modalPrice.textContent = currency(product.price);
  modalImg.src = product.img;

  orderModal.classList.remove("hidden");

  // Réinitialiser champs utiles
  customerName.value = "";
  customerMobile.value = "";
  customerAddress.value = "";
  paymentMethod.value = "Mobile Money";
  needDelivery.checked = true;

  setTimeout(() => customerMobile.focus(), 50);
}

function closeModalFn(){
  orderModal.classList.add("hidden");
  currentProduct = null;
}

closeModal.addEventListener("click", closeModalFn);
orderModal.addEventListener("click", (e)=>{
  if(e.target === orderModal) closeModalFn();
});

document.addEventListener("click", (e)=>{
  const btn = e.target.closest("button[data-action='order']");
  if(!btn) return;

  const name = btn.getAttribute("data-name");
  const price = Number(btn.getAttribute("data-price"));
  const img = btn.getAttribute("data-img");

  openModal({ name, price, img });
});

clearSearch.addEventListener("click", ()=>{
  searchInput.value = "";
  renderCatalog("");
});

searchInput.addEventListener("input", ()=>{
  renderCatalog(searchInput.value);
});

function buildWhatsAppMessage(){
  const name = customerName.value.trim();
  const mobile = customerMobile.value.trim();
  const address = customerAddress.value.trim();
  const pay = paymentMethod.value;

  const deliveryText = needDelivery.checked ? "Livraison : OUI" : "Livraison : NON";

  return (
    `Bonjour MSSarl la chine au Togo 👋\n` +
    `Je souhaite commander : ${currentProduct.name}\n` +
    `Prix : ${currency(currentProduct.price)}\n` +
    `Numéro Mobile Money / Mobile : ${mobile}\n` +
    `Adresse : ${address}\n` +
    `${deliveryText}\n` +
    `Mode paiement : ${pay}\n` +
    (name ? `Nom : ${name}\n` : "") +
    `Merci.`
  );
}

sendWhatsApp.addEventListener("click", async ()=>{
  if(!currentProduct) return;

  const mobile = customerMobile.value.trim();
  const address = customerAddress.value.trim();

  if(!mobile){
    alert("Merci d’indiquer ton numéro Mobile Money / Mobile.");
    customerMobile.focus();
    return;
  }
  if(!address){
    alert("Merci d’indiquer ton adresse de livraison.");
    customerAddress.focus();
    return;
  }

  const message = encodeURIComponent(buildWhatsAppMessage());

  // WhatsApp URL
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");

  // Après ouverture, on copie aussi le numéro pour transaction rapide
  try{
    await navigator.clipboard.writeText(TELEPHONE_DISPLAY);
  }catch(err){ /* ignore */ }
});

copyNumber.addEventListener("click", async ()=>{
  try{
    await navigator.clipboard.writeText(TELEPHONE_DISPLAY);
    copyNumber.textContent = "Numéro copié ✅";
    setTimeout(()=> copyNumber.textContent = "Copier le numéro : 91070704", 1500);
  }catch{
    alert("Impossible de copier automatiquement. Numéro : " + TELEPHONE_DISPLAY);
  }
});

// Lancer
renderCatalog("");
