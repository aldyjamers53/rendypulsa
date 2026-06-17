// DATA SERVICES & PRICING
const PPOB_DATA = [
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
        targetLabel.innerText = "Nomor HP Tujuan / Akun";
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
selectNominal.addEventListener("change", (e) => {
    const prodId = e.target.value;
    if (!prodId) {
        resetPriceDisplay();
        return;
    }

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