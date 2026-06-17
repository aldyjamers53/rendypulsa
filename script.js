// DATA SERVICES & PRICING
const PPOB_DATA = [
// === NOMINAL KECIL / MENENGAH ===
    { id: "ml3", category: "Top Up Game", name: "Mobile Legends 3 Diamonds", price: 5000 },       // Modal Rp1.058 -> Jual Rp5.000
    { id: "ml5", category: "Top Up Game", name: "Mobile Legends 5 Diamonds", price: 6000 },       // Modal Rp1.468 -> Jual Rp6.000
    { id: "ml10", category: "Top Up Game", name: "Mobile Legends 10 Diamonds", price: 7000 },     // Modal Rp2.987 -> Jual Rp7.000
    { id: "ml12", category: "Top Up Game", name: "Mobile Legends 12 Diamonds", price: 8000 },     // Modal Rp3.438 -> Jual Rp8.000
    { id: "ml14", category: "Top Up Game", name: "Mobile Legends 14 Diamonds", price: 9000 },     // Modal Rp4.024 -> Jual Rp9.000
    { id: "ml18", category: "Top Up Game", name: "Mobile Legends 18 Diamonds", price: 9000 },     // Modal Rp5.003 -> Jual Rp9.000
    { id: "ml19", category: "Top Up Game", name: "Mobile Legends 19 Diamonds", price: 10000 },    // Modal Rp5.399 -> Jual Rp10.000
    { id: "ml28", category: "Top Up Game", name: "Mobile Legends 28 Diamonds", price: 12000 },    // Modal Rp7.680 -> Jual Rp12.000
    { id: "ml36", category: "Top Up Game", name: "Mobile Legends 36 Diamonds", price: 14000 },    // Modal Rp9.983 -> Jual Rp14.000
    { id: "ml44", category: "Top Up Game", name: "Mobile Legends 44 Diamonds", price: 15000 },    // Modal Rp10.918 -> Jual Rp15.000
    { id: "ml59", category: "Top Up Game", name: "Mobile Legends 59 Diamonds", price: 19000 },    // Modal Rp14.819 -> Jual Rp19.000
    { id: "ml74", category: "Top Up Game", name: "Mobile Legends 74 Diamonds", price: 24000 },    // Modal Rp19.284 -> Jual Rp24.000
    { id: "ml85", category: "Top Up Game", name: "Mobile Legends 85 Diamonds", price: 26500 },    // Modal Rp21.507 -> Jual Rp26.500

    // === PRODUK POPULER (WEEKLY PASS) ===
    { id: "mlwdp", category: "Top Up Game", name: "Weekly Diamond Pass (WDP)", price: 33000 },   // Modal Rp28.687 -> Jual Rp33.000

    // === NOMINAL BESAR ===
    { id: "ml170", category: "Top Up Game", name: "Mobile Legends 170 Diamonds", price: 50000 },  // Modal Rp44.831 -> Jual Rp50.000
    { id: "ml222", category: "Top Up Game", name: "Mobile Legends 222 Diamonds", price: 60000 },  // Modal Rp55.617 -> Jual Rp60.000
    { id: "ml240", category: "Top Up Game", name: "Mobile Legends 240 Diamonds", price: 67000 },  // Modal Rp61.909 -> Jual Rp67.000
    { id: "ml296", category: "Top Up Game", name: "Mobile Legends 296 Diamonds", price: 82000 },  // Modal Rp77.123 -> Jual Rp82.000
    { id: "ml370", category: "Top Up Game", name: "Mobile Legends 370 Diamonds", price: 101000 }, // Modal Rp96.317 -> Jual Rp101.000
    { id: "ml408", category: "Top Up Game", name: "Mobile Legends 408 Diamonds", price: 112000 }, // Modal Rp107.281 -> Jual Rp112000
    { id: "ml568", category: "Top Up Game", name: "Mobile Legends 568 Diamonds", price: 150000 }, // Modal Rp144.823 -> Jual Rp150.000
    { id: "ml966", category: "Top Up Game", name: "Mobile Legends 966 Diamonds", price: 250000 }, // Modal Rp244.807 -> Jual Rp250.000
    { id: "ml875", category: "Top Up Game", name: "Mobile Legends 875 Diamonds", price: 230000 }, // Modal Rp224.934 -> Jual Rp230.000
    { id: "ml2010", category: "Top Up Game", name: "Mobile Legends 2010 Diamonds", price: 494000 }, // Modal Rp488.498 -> Jual Rp494.000
    { id: "ml4830", category: "Top Up Game", name: "Mobile Legends 4830 Diamonds", price: 1185000 }, // Modal Rp1.179.309 -> Jual Rp1.185.000
    // === FREE FIRE NOMINAL KECIL / MENENGAH ===
    { id: "ff5", category: "Top Up Game", name: "Free Fire 5 Diamonds", price: 5000 },         // Modal Rp827 -> Jual Rp5.000
    { id: "ff12", category: "Top Up Game", name: "Free Fire 12 Diamonds", price: 6000 },       // Modal Rp1.779 -> Jual Rp6.000
    { id: "ff25", category: "Top Up Game", name: "Free Fire 25 Diamonds", price: 8000 },       // Modal Rp4.109 -> Jual Rp8.000
    { id: "ff50", category: "Top Up Game", name: "Free Fire 50 Diamonds", price: 10000 },      // Modal Rp6.040 -> Jual Rp10.000
    { id: "ff53", category: "Top Up Game", name: "Free Fire 53 Diamonds", price: 11000 },      // Modal Rp6.859 -> Jual Rp11.000
    { id: "ff64", category: "Top Up Game", name: "Free Fire 64 Diamonds", price: 13000 },      // Modal Rp8.888 -> Jual Rp13.000
    { id: "ff70", category: "Top Up Game", name: "Free Fire 70 Diamonds", price: 13000 },      // Modal Rp8.875 -> Jual Rp13.000
    { id: "ff100", category: "Top Up Game", name: "Free Fire 100 Diamonds", price: 16000 },    // Modal Rp12.079 -> Jual Rp16.000
    { id: "ff127", category: "Top Up Game", name: "Free Fire 127 Diamonds", price: 21000 },    // Modal Rp16.630 -> Jual Rp21.000
    { id: "ff140", category: "Top Up Game", name: "Free Fire 140 Diamonds", price: 22000 },    // Modal Rp17.285 -> Jual Rp22.000
    { id: "ff210", category: "Top Up Game", name: "Free Fire 210 Diamonds", price: 31000 },    // Modal Rp26.183 -> Jual Rp31.000

    // === FREE FIRE NOMINAL BESAR ===
    { id: "ff323", category: "Top Up Game", name: "Free Fire 323 Diamonds", price: 45000 },    // Modal Rp40.649 -> Jual Rp45.000
    { id: "ff350", category: "Top Up Game", name: "Free Fire 350 Diamonds", price: 49000 },    // Modal Rp43.988 -> Jual Rp49.000
    { id: "ff355", category: "Top Up Game", name: "Free Fire 355 Diamonds", price: 49000 },    // Modal Rp43.988 -> Jual Rp49.000
    { id: "ff510", category: "Top Up Game", name: "Free Fire 510 Diamonds", price: 68000 },    // Modal Rp63.688 -> Jual Rp68.000
    { id: "ff645", category: "Top Up Game", name: "Free Fire 645 Diamonds", price: 85000 },    // Modal Rp80.188 -> Jual Rp85.000
    { id: "ff655", category: "Top Up Game", name: "Free Fire 655 Diamonds", price: 86000 },    // Modal Rp81.788 -> Jual Rp86.000
    { id: "ff720", category: "Top Up Game", name: "Free Fire 720 Diamonds", price: 93000 },    // Modal Rp88.688 -> Jual Rp93.000
    { id: "ff925", category: "Top Up Game", name: "Free Fire 925 Diamonds", price: 119000 },   // Modal Rp114.788 -> Jual Rp119.000
    { id: "ff1075", category: "Top Up Game", name: "Free Fire 1075 Diamonds", price: 137000 }, // Modal Rp132.588 -> Jual Rp137.000
    { id: "ff1080", category: "Top Up Game", name: "Free Fire 1080 Diamonds", price: 138000 }, // Modal Rp133.388 -> Jual Rp138.000
    { id: "ff1200", category: "Top Up Game", name: "Free Fire 1200 Diamonds", price: 153000 }, // Modal Rp148.788 -> Jual Rp153.000
    { id: "ff1285", category: "Top Up Game", name: "Free Fire 1285 Diamonds", price: 163000 }, // Modal Rp158.688 -> Jual Rp163.000
    { id: "ff1450", category: "Top Up Game", name: "Free Fire 1450 Diamonds", price: 182000 }, // Modal Rp177.883 -> Jual Rp182.000
    { id: "ff1800", category: "Top Up Game", name: "Free Fire 1800 Diamonds", price: 227000 }, // Modal Rp221.999 -> Jual Rp227.000
    { id: "ff1875", category: "Top Up Game", name: "Free Fire 1875 Diamonds", price: 236000 }, // Modal Rp231.699 -> Jual Rp236.000
    { id: "ff1973", category: "Top Up Game", name: "Free Fire 1973 Diamonds", price: 249000 }, // Modal Rp244.946 -> Jual Rp249.000
    { id: "ff2000", category: "Top Up Game", name: "Free Fire 2000 Diamonds", price: 252000 }, // Modal Rp247.288 -> Jual Rp252.000
    { id: "ff2160", category: "Top Up Game", name: "Free Fire 2160 Diamonds", price: 270000 }, // Modal Rp265.899 -> Jual Rp270.000
    { id: "ff2180", category: "Top Up Game", name: "Free Fire 2180 Diamonds", price: 271000 }, // Modal Rp266.841 -> Jual Rp271.000
    { id: "ff2200", category: "Top Up Game", name: "Free Fire 2200 Diamonds", price: 277000 }, // Modal Rp272.230 -> Jual Rp277.000
    { id: "ff2400", category: "Top Up Game", name: "Free Fire 2400 Diamonds", price: 301000 }, // Modal Rp296.199 -> Jual Rp301.000
    { id: "ff3309", category: "Top Up Game", name: "Free Fire 3309 Diamonds", price: 413000 }, // Modal Rp408.099 -> Jual Rp413.000
    { id: "ff3600", category: "Top Up Game", name: "Free Fire 3600 Diamonds", price: 448000 }, // Modal Rp443.099 -> Jual Rp448.000
    { id: "ff3640", category: "Top Up Game", name: "Free Fire 3640 Diamonds", price: 449000 },  // Modal Rp444.736 -> Jual Rp449.000
    // === ROBLOX SESUDAH PAJAK (CLEAN) ===
    { id: "rb_clean_1", category: "Top Up Game", name: "1 Robux (Clean/Sesudah Pajak)", price: 5000 },      // Modal Rp140 -> Jual Rp5.000
    { id: "rb_clean_100", category: "Top Up Game", name: "100 Robux (Clean/Sesudah Pajak)", price: 18000 },  // Modal Rp14.000 -> Jual Rp18.000
    { id: "rb_clean_500", category: "Top Up Game", name: "500 Robux (Clean/Sesudah Pajak)", price: 75000 },  // Modal Rp70.000 -> Jual Rp75.000
    { id: "rb_clean_1000", category: "Top Up Game", name: "1000 Robux (Clean/Sesudah Pajak)", price: 140000 }, // Modal Rp135.000 -> Jual Rp140.000
    { id: "rb_clean_1500", category: "Top Up Game", name: "1500 Robux (Clean/Sesudah Pajak)", price: 205000 }, // Modal Rp200.000 -> Jual Rp205.000
    { id: "rb_clean_2000", category: "Top Up Game", name: "2000 Robux (Clean/Sesudah Pajak)", price: 285000 }, // Modal Rp280.000 -> Jual Rp285.000
    { id: "rb_clean_3000", category: "Top Up Game", name: "3000 Robux (Clean/Sesudah Pajak)", price: 430000 }, // Modal Rp425.000 -> Jual Rp430.000
    { id: "rb_clean_4000", category: "Top Up Game", name: "4000 Robux (Clean/Sesudah Pajak)", price: 571000 }, // Modal Rp566.000 -> Jual Rp571.000
    { id: "rb_clean_5000", category: "Top Up Game", name: "5000 Robux (Clean/Sesudah Pajak)", price: 712000 }, // Modal Rp707.000 -> Jual Rp712.000
    { id: "rb_clean_6000", category: "Top Up Game", name: "6000 Robux (Clean/Sesudah Pajak)", price: 854000 }, // Modal Rp849.000 -> Jual Rp854.000
    { id: "rb_clean_7000", category: "Top Up Game", name: "7000 Robux (Clean/Sesudah Pajak)", price: 995000 }, // Modal Rp990.000 -> Jual Rp995.000
    { id: "rb_clean_8000", category: "Top Up Game", name: "8000 Robux (Clean/Sesudah Pajak)", price: 1136000 }, // Modal Rp1.131.000 -> Jual Rp1.136.000
    { id: "rb_clean_9000", category: "Top Up Game", name: "9000 Robux (Clean/Sesudah Pajak)", price: 1237000 }, // Modal Rp1.232.100 -> Jual Rp1.237.000
    { id: "rb_clean_10000", category: "Top Up Game", name: "10000 Robux (Clean/Sesudah Pajak)", price: 1425000 }, // Modal Rp1.420.000 -> Jual Rp1.425.000

    // === ROBLOX SEBELUM PAJAK (BEFORE TAX / 70%) ===
    { id: "rb_tax_1", category: "Top Up Game", name: "1 Robux (Before Tax/Sebelum Pajak)", price: 5000 },       // Modal Rp200 -> Jual Rp5.000
    { id: "rb_tax_100", category: "Top Up Game", name: "100 Robux (Before Tax/Sebelum Pajak)", price: 14000 },   // Modal Rp10.000 -> Jual Rp14.000
    { id: "rb_tax_500", category: "Top Up Game", name: "500 Robux (Before Tax/Sebelum Pajak)", price: 55000 },   // Modal Rp50.000 -> Jual Rp55.000
    { id: "rb_tax_1000", category: "Top Up Game", name: "1000 Robux (Before Tax/Sebelum Pajak)", price: 100000 }, // Modal Rp95.000 -> Jual Rp100.000
    { id: "rb_tax_1500", category: "Top Up Game", name: "1500 Robux (Before Tax/Sebelum Pajak)", price: 155000 }, // Modal Rp150.000 -> Jual Rp155.000
    { id: "rb_tax_2000", category: "Top Up Game", name: "2000 Robux (Before Tax/Sebelum Pajak)", price: 205000 }, // Modal Rp200.000 -> Jual Rp205.000
    { id: "rb_tax_3000", category: "Top Up Game", name: "3000 Robux (Before Tax/Sebelum Pajak)", price: 305000 }, // Modal Rp300.000 -> Jual Rp305.000
    { id: "rb_tax_4000", category: "Top Up Game", name: "4000 Robux (Before Tax/Sebelum Pajak)", price: 405000 }, // Modal Rp400.000 -> Jual Rp405.000
    { id: "rb_tax_5000", category: "Top Up Game", name: "5000 Robux (Before Tax/Sebelum Pajak)", price: 455000 }, // Modal Rp450.000 -> Jual Rp455.000
    { id: "rb_tax_6000", category: "Top Up Game", name: "6000 Robux (Before Tax/Sebelum Pajak)", price: 683000 }, // Modal Rp678.000 -> Jual Rp683.000
    { id: "rb_tax_7000", category: "Top Up Game", name: "7000 Robux (Before Tax/Sebelum Pajak)", price: 796000 }, // Modal Rp791.000 -> Jual Rp796.000
    { id: "rb_tax_8000", category: "Top Up Game", name: "8000 Robux (Before Tax/Sebelum Pajak)", price: 909000 }, // Modal Rp904.000 -> Jual Rp909.000
    { id: "rb_tax_9000", category: "Top Up Game", name: "9000 Robux (Before Tax/Sebelum Pajak)", price: 1022000 }, // Modal Rp1.017.000 -> Jual Rp1.022.000
    { id: "rb_tax_10000", category: "Top Up Game", name: "10000 Robux (Before Tax/Sebelum Pajak)", price: 994400 }, // Modal Rp989.400 -> Jual Rp994.400
    { id: "pln20", category: "Token PLN", name: "Token PLN Rp20.000", price: 24000 },
    { id: "pln50", category: "Token PLN", name: "Token PLN Rp50.000", price: 55000 },
    { id: "pln100", category: "Token PLN", name: "Token PLN Rp100.000", price: 105000 },
    { id: "pln200", category: "Token PLN", name: "Token PLN Rp200.000", price: 205000 },
    { id: "pln500", category: "Token PLN", name: "Token PLN Rp500.000", price: 510000 },

    { id: "dana20", category: "DANA", name: "Isi Saldo DANA Rp20.000", price: 24000 },
    { id: "dana50", category: "DANA", name: "Isi Saldo DANA Rp50.000", price: 55000 },
    { id: "dana100", category: "DANA", name: "Isi Saldo DANA Rp100.000", price: 105000 },
    { id: "dana200", category: "DANA", name: "Isi Saldo DANA Rp200.000", price: 205000 },
    { id: "dana500", category: "DANA", name: "Isi Saldo DANA Rp500.000", price: 510000 },

    { id: "tsel5", category: "Pulsa", name: "Pulsa Telkomsel Rp5.000", price: 8000 },
    { id: "tsel10", category: "Pulsa", name: "Pulsa Telkomsel Rp10.000", price: 13000 },
    { id: "tsel20", category: "Pulsa", name: "Pulsa Telkomsel Rp20.000", price: 23000 },
    { id: "tsel50", category: "Pulsa", name: "Pulsa Telkomsel Rp50.000", price: 55000 },
    { id: "tsel100", category: "Pulsa", name: "Pulsa Telkomsel Rp10.000", price: 105000 },

    { id: "isat5", category: "Pulsa", name: "Pulsa Indosat Rp5.000", price: 8000 },
    { id: "isat10", category: "Pulsa", name: "Pulsa Indosat Rp10.000", price: 13000 },
    { id: "isat20", category: "Pulsa", name: "Pulsa Indosat Rp20.000", price: 23000 },
    { id: "isat50", category: "Pulsa", name: "Pulsa Indosat Rp50.000", price: 55000 },
    { id: "isat100", category: "Pulsa", name: "Pulsa Indosat Rp100.000", price: 105000 },

    { id: "xl5", category: "Pulsa", name: "Pulsa XL / Axis Rp5.000", price: 8000 },
    { id: "xl10", category: "Pulsa", name: "Pulsa XL / Axis Rp10.000", price: 13000 },
    { id: "xl20", category: "Pulsa", name: "Pulsa XL / Axis Rp20.000", price: 23000 },
    { id: "xl50", category: "Pulsa", name: "Pulsa XL / Axis Rp50.000", price: 55000 },
    { id: "xl100", category: "Pulsa", name: "Pulsa XL / Axis Rp100.000", price: 105000 },

    { id: "data1", category: "Paket Data", name: "Paket Data 1 GB", price: 13000 },
    { id: "data2", category: "Paket Data", name: "Paket Data 2 GB", price: 18000 },
    { id: "data3", category: "Paket Data", name: "Paket Data 3 GB", price: 23000 },
    { id: "data5", category: "Paket Data", name: "Paket Data 5 GB", price: 33000 },
    { id: "data10", category: "Paket Data", name: "Paket Data 10 GB", price: 55000 },

    { id: "tf20", category: "Transfer Bank", name: "Transfer Bank Rp20.000", price: 5000, isAdminFee: true },
    { id: "tf25", category: "Transfer Bank", name: "Transfer Bank Rp25.000", price: 5000, isAdminFee: true },
    { id: "tf30", category: "Transfer Bank", name: "Transfer Bank Rp30.000", price: 5000, isAdminFee: true },
    { id: "tf35", category: "Transfer Bank", name: "Transfer Bank Rp35.000", price: 5000, isAdminFee: true },
    { id: "tf40", category: "Transfer Bank", name: "Transfer Bank Rp40.000", price: 5000, isAdminFee: true },
    { id: "tf45", category: "Transfer Bank", name: "Transfer Bank Rp45.000", price: 5000, isAdminFee: true },
    { id: "tf50", category: "Transfer Bank", name: "Transfer Bank Rp50.000", price: 5000, isAdminFee: true },
    { id: "tf55", category: "Transfer Bank", name: "Transfer Bank Rp55.000", price: 5000, isAdminFee: true },
    { id: "tf60", category: "Transfer Bank", name: "Transfer Bank Rp60.000", price: 5000, isAdminFee: true },
    { id: "tf70", category: "Transfer Bank", name: "Transfer Bank Rp70.000", price: 5000, isAdminFee: true }, // FIXED TYPO Nominal
    { id: "tf80", category: "Transfer Bank", name: "Transfer Bank Rp80.000", price: 5000, isAdminFee: true }, // FIXED TYPO Nominal
    { id: "tf90", category: "Transfer Bank", name: "Transfer Bank Rp90.000", price: 5000, isAdminFee: true }, // FIXED TYPO Nominal
    { id: "tf100", category: "Transfer Bank", name: "Transfer Bank Rp100.000", price: 5000, isAdminFee: true },
    { id: "tf125", category: "Transfer Bank", name: "Transfer Bank Rp125.000", price: 5000, isAdminFee: true },
    { id: "tf150", category: "Transfer Bank", name: "Transfer Bank Rp150.000 ", price: 5000, isAdminFee: true },
    { id: "tf200", category: "Transfer Bank", name: "Transfer Bank Rp200.000", price: 5000, isAdminFee: true },
    { id: "tf250", category: "Transfer Bank", name: "Transfer Bank Rp250.000", price: 5000, isAdminFee: true },
    { id: "tf300", category: "Transfer Bank", name: "Transfer Bank Rp300.000", price: 5000, isAdminFee: true },
    { id: "tf350", category: "Transfer Bank", name: "Transfer Bank Rp350.000", price: 10000, isAdminFee: true },
    { id: "tf400", category: "Transfer Bank", name: "Transfer Bank Rp400.000", price: 10000, isAdminFee: true },
    { id: "tf500", category: "Transfer Bank", name: "Transfer Bank Rp500.000", price: 15000, isAdminFee: true },
    { id: "tf1000", category: "Transfer Bank", name: "Transfer Bank Rp1.000.000", price: 15000, isAdminFee: true }
];

const ADMIN_WA_NUMBER = "6281556828324";
let currentFilteredData = [...PPOB_DATA];
let selectedProductForWA = null;

// DOM ELEMENTS 
const targetInputGroup = document.getElementById("target-input-group");
const targetLabel = document.getElementById("target-label");
const targetNumberInput = document.getElementById("target-number");
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const selectService = document.getElementById("select-service");
const selectNominal = document.getElementById("select-nominal");
const bankInputGroup = document.getElementById("bank-input-group");
const bankNameInput = document.getElementById("bank-name");
const bankAccountInput = document.getElementById("bank-account");
const bankOwnerInput = document.getElementById("bank-owner");
const priceTag = document.getElementById("price-tag");
const totalTag = document.getElementById("total-tag");
const ppobForm = document.getElementById("ppob-form");
const confirmationModal = document.getElementById("confirmation-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const btnConfirmWa = document.getElementById("btn-confirm-wa");
const scrollToTopBtn = document.getElementById("scroll-to-top");

// FORMAT CURRENCY
function formatRp(number) {
    return "Rp " + number.toLocaleString("id-ID");
}

// RENDER PRICING LIST
function renderProducts(dataToRender) {
    productGrid.innerHTML = "";
    
    if (dataToRender.length === 0) {
        productGrid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; padding: 20px; color:#a0aec0;">Produk tidak ditemukan.</p>`;
        return;
    }

    const categories = [...new Set(dataToRender.map(item => item.category))];
    
    categories.forEach(cat => {
        const header = document.createElement("div");
        header.className = "category-group";
        header.innerText = cat.toUpperCase();
        productGrid.appendChild(header);

        const items = dataToRender.filter(item => item.category === cat);
        items.forEach(prod => {
            const card = document.createElement("div");
            card.className = "product-card";
            
            let priceLabel = formatRp(prod.price);
            if(prod.isAdminFee) {
                priceLabel = `+ Biaya ${formatRp(prod.price)}`;
            }

            card.innerHTML = `
                <div class="prod-details">
                    <h4>${prod.name}</h4>
                    <p>${priceLabel}</p>
                </div>
                <div class="prod-action">
                    <button onclick="directOrder('${prod.id}')">PESAN</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    });
}

// FILTER CATEGORY CLICK
function filterCategory(categoryName) {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        if(btn.innerText.toLowerCase() === categoryName.toLowerCase() || (categoryName === 'Semua' && btn.innerText === 'Semua')) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    if (categoryName === "Semua") {
        currentFilteredData = [...PPOB_DATA];
    } else {
        currentFilteredData = PPOB_DATA.filter(item => item.category === categoryName);
    }
    renderProducts(currentFilteredData);
}

// SEARCH FILTER LOGIC
searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = PPOB_DATA.filter(item => 
        item.name.toLowerCase().includes(keyword) || 
        item.category.toLowerCase().includes(keyword)
    );
    renderProducts(filtered);
});

// INITIALIZE FORM DROPDOWNS
function initFormOptions() {
    const categories = [...new Set(PPOB_DATA.map(item => item.category))];
    categories.forEach(cat => {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.innerText = cat;
        selectService.appendChild(opt);
    });
}

// HANDLING FORM CHANGE FOR SERVICE SELECT
selectService.addEventListener("change", (e) => {
    const selectedCat = e.target.value;
    selectNominal.innerHTML = `<option value="">-- Pilih Nominal --</option>`;
    
    // ATUR TAMPILAN INPUT NOMOR TUJUAN UTAMA
    if (!selectedCat) {
        targetInputGroup.style.display = "none";
        targetNumberInput.required = false;
    } else if (selectedCat === "Transfer Bank") {
        targetInputGroup.style.display = "none";
        targetNumberInput.required = false;
        targetNumberInput.value = "";
    } else if (selectedCat === "Token PLN") {
        targetInputGroup.style.display = "block";
        targetLabel.innerText = "Nomor Meter / ID Pelanggan PLN";
        targetNumberInput.placeholder = "Contoh: 51234567xxx";
        targetNumberInput.required = true;
    } else {
        targetInputGroup.style.display = "block";
        targetLabel.innerText = "Nomor HP Tujuan / ID Akun Game";
        targetNumberInput.placeholder = "Contoh: 081234567xxx";
        targetNumberInput.required = true;
    }

    // ATUR TAMPILAN KHUSUS TRANSFER BANK
    if (selectedCat === "Transfer Bank") {
        bankInputGroup.style.display = "block";
        bankNameInput.required = true;
        bankAccountInput.required = true;
        bankOwnerInput.required = true;
    } else {
        bankInputGroup.style.display = "none";
        bankNameInput.required = false;
        bankAccountInput.required = false;
        bankOwnerInput.required = false;
        bankNameInput.value = "";
        bankAccountInput.value = "";
        bankOwnerInput.value = "";
    }

    if (!selectedCat) {
        selectNominal.disabled = true;
        resetPriceDisplay();
        return;
    }

    const items = PPOB_DATA.filter(item => item.category === selectedCat);
    items.forEach(item => {
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.innerText = item.name;
        selectNominal.appendChild(opt);
    });

    selectNominal.disabled = false;
    resetPriceDisplay();
});

// HANDLING FORM CHANGE FOR NOMINAL SELECT
// Ambil elemen teks panduan ML, FF, dan input target di bagian paling atas script atau sebelum event listener
const mlGuideText = document.getElementById('ml-guide-text');
const ffGuideText = document.getElementById('ff-guide-text');
const selectNominal = document.getElementById('select-nominal');
const targetInput = document.getElementById('target-number');

// GABUNGKAN MENJADI SATU EVENT LISTENER SAJA
selectNominal.addEventListener('change', function(e) {
    const prodId = e.target.value;
    
    // 1. Logika Reset Harga Jika Tidak Ada Produk yang Dipilih
    if (!prodId) {
        if (typeof resetPriceDisplay === "function") {
            resetPriceDisplay();
        } else {
            priceTag.innerText = "Rp 0";
            totalTag.innerText = "Rp 0";
        }
        // Sembunyikan semua panduan jika kosong
        mlGuideText.style.display = "none";
        ffGuideText.style.display = "none";
        targetInput.type = "number";
        targetInput.placeholder = "Contoh: 081234567xxx";
        return;
    }

    // 2. Logika Menampilkan Harga & Biaya Admin dari PPOB_DATA
    const product = PPOB_DATA.find(item => item.id === prodId);
    if (product) {
        if (product.isAdminFee) {
            priceTag.innerText = `Biaya Admin ${formatRp(product.price)}`;
            totalTag.innerText = `Nominal Utama + ${formatRp(product.price)}`;
        } else {
            priceTag.innerText = formatRp(product.price);
            totalTag.innerText = formatRp(product.price);
        }
    }

    // 3. Logika Memunculkan Panduan ID Game Berdasarkan Teks Opsi yang Dipilih
    const selectedText = selectNominal.options[selectNominal.selectedIndex].text;

    if (selectedText.includes("Mobile Legends")) {
        // Tampilkan panduan ML, sembunyikan panduan FF
        mlGuideText.style.display = "block";
        ffGuideText.style.display = "none";
        
        // Ubah tipe ke 'text' agar bisa ketik tanda kurung () zona ML
        targetInput.type = "text"; 
        targetInput.placeholder = "Contoh: 88242375(2178)";

    } else if (selectedText.includes("Free Fire")) {
        // Tampilkan panduan FF, sembunyikan panduan ML
        ffGuideText.style.display = "block";
        mlGuideText.style.display = "none";
        
        // Kembalikan ke 'number' karena UID FF hanya berisi angka murni
        targetInput.type = "number"; 
        targetInput.placeholder = "Contoh: 123456789";

    } else {
        // Jika pilih produk lain (Pulsa, Token, DANA, dll), sembunyikan semua panduan game
        mlGuideText.style.display = "none";
        ffGuideText.style.display = "none";
        
        targetInput.type = "number";
        targetInput.placeholder = "Contoh: 081234567xxx";
    }
});

function resetPriceDisplay() {
    priceTag.innerText = "Rp 0";
    totalTag.innerText = "Rp 0";
}

// QUICK ORDER FROM LIST BUTTON
window.directOrder = function(productId) {
    const product = PPOB_DATA.find(item => item.id === productId);
    if (!product) return;

    selectService.value = product.category;
    // Trigger event change untuk service
    const serviceEvent = new Event('change');
    selectService.dispatchEvent(serviceEvent);
    
    selectNominal.value = product.id;
    // FIXED: Trigger event change khusus untuk nominal agar harga ter-update
    const nominalEvent = new Event('change');
    selectNominal.dispatchEvent(nominalEvent); 

    document.getElementById("order-section").scrollIntoView({ behavior: 'smooth' });
};

// FORM SUBMISSION PROCESS
ppobForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const prodId = selectNominal.value;
    const selectedProduct = PPOB_DATA.find(item => item.id === prodId);
    
    if (!selectedProduct) return;
    
    selectedProductForWA = {
        userName: document.getElementById("user-name").value,
        userPhone: document.getElementById("user-phone").value,
        service: selectedProduct.category,
        nominal: selectedProduct.name,
        // FIXED: Menyimpan data nomor hp / id pelanggan ke objek WA
        targetLabel: targetLabel.innerText,
        targetNumber: targetNumberInput.value,
        bankName: bankNameInput.value,
        bankAccount: bankAccountInput.value,
        bankOwner: bankOwnerInput.value,
        price: selectedProduct.isAdminFee ? `Harga Menyesuaikan + Admin ${formatRp(selectedProduct.price)}` : formatRp(selectedProduct.price)
    };

    confirmationModal.classList.add("active");
});

// MODAL CLOSING
btnCloseModal.addEventListener("click", () => {
    confirmationModal.classList.remove("active");
});

// MODAL REDIRECT WHATSAPP ACTION
btnConfirmWa.addEventListener("click", () => {
    if (!selectedProductForWA) return;

    const data = selectedProductForWA;
    
    // Format pesan dasar
    let waText = `Nama: ${data.userName}\n` +
                 `Nomor WhatsApp: ${data.userPhone}\n` +
                 `Layanan: ${data.service}\n` +
                 `Nominal: ${data.nominal}\n`;
                 
    // JIKA ADA NOMOR HP / ID TOKEN, MASUKKAN SEBANYAK TERCATAT
    if (data.targetNumber) {
        waText += `${data.targetLabel}: ${data.targetNumber}\n`;
    }
                 
    // Jika layanan transfer bank, masukkan detail bank secara rapi
    if (data.bankName) {
        waText += `\n--- REKENING TUJUAN ---\n` +
                  `Bank: ${data.bankName}\n` +
                  `No. Rekening: ${data.bankAccount}\n` +
                  `Atas Nama: ${data.bankOwner}\n` +
                  `-----------------------\n`;
    }
    
    waText += `\nHarga: ${data.price}\n\n` +
              `Saya ingin melakukan pemesanan layanan PPOB di Rendy Ashari Digital.`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodedText}`;

    confirmationModal.classList.remove("active");
    window.open(whatsappUrl, '_blank');
});

// SCROLL TO TOP SYSTEM INTERACTION
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// APP INITIALIZATION SETUP ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(PPOB_DATA);
    initFormOptions();
    document.getElementById("year").innerText = new Date().getFullYear();

    // FITUR CEK JAM OPERASIONAL OTOMATIS (06.00 - 23.45 WIB)
    const sekarang = new Date();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();
    
    const totalMenitSekarang = (jam * 60) + menit;
    const menitBuka = 6 * 60; // 06.00 WIB
    const menitTutup = (23 * 60) + 45; // 23.45 WIB

    if (totalMenitSekarang < menitBuka || totalMenitSekarang > menitTutup) {
        const submitBtn = ppobForm.querySelector("button[type='submit']");
        submitBtn.disabled = true; 
        submitBtn.style.background = "#a0aec0"; 
        submitBtn.style.cursor = "not-allowed";
        submitBtn.innerHTML = `<i class="fa-solid fa-moon"></i> MAAF, TOKO SEDANG TUTUP`;
        
        alert("Halo! Rendy Ashari Digital sudah tutup. Jam operasional kami adalah pukul 06.00 - 23.45 WIB. Anda tetap bisa melihat-lihat daftar harga produk kami.");
    }
});
