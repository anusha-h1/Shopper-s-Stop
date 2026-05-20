// Mock Data for Products
const products = {
    dresses: [
        { id: 'd1', title: 'Embroidered Silk Lehenga', price: 1499.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/lehenga_1778927687580.png' },
        { id: 'd2', title: 'Designer Net Saree', price: 1299.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/net_saree_1778927719445.png' },
        { id: 'd3', title: 'Cotton Anarkali Suit', price: 999.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/anarkali_suit_1778927746167.png' },
        { id: 'd4', title: 'Georgette Salwar Kameez', price: 1350.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/salwar_kameez_1778927769196.png' },
        { id: 'd5', title: 'Banarasi Silk Saree', price: 1450.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/banarasi_saree_1778927791065.png' },
        { id: 'd6', title: 'Festive Kurta Sharara Set', price: 1199.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/kurta_sharara_1778927821988.png' }
    ],
    accessories: [
        { id: 'a1', title: 'Kundan Bridal Set', price: 899.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/kundan_set_1778927845835.png' },
        { id: 'a2', title: 'Gold Plated Jhumkas', price: 499.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/gold_jhumkas_1778927867975.png' },
        { id: 'a3', title: 'Embroidered Potli Bag', price: 650.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/potli_bag_1778927894997.png' },
        { id: 'a4', title: 'Silver Oxidised Choker', price: 750.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/silver_choker_1778927959443.png' },
        { id: 'a5', title: 'Designer Bindi Set', price: 150.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/bindi_set_1778927975464.png' }
    ],
    footwear: [
        { id: 'f1', title: 'Embellished Mojaris', price: 999.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/mojaris_1778927992731.png' },
        { id: 'f2', title: 'Golden Kolhapuri Chappals', price: 699.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/kolhapuri_1778928009935.png' },
        { id: 'f3', title: 'Ethnic Block Heels', price: 1299.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/ethnic_heels_1778928026058.png' },
        { id: 'f4', title: 'Bridal Wedge Sandals', price: 1499.00, image: 'file:///C:/Users/Anusha/.gemini/antigravity/brain/e07c17bb-d333-4f1f-a9e3-7d6526e6b1a7/wedge_sandals_1778928044924.png' }
    ]
};

// State Management
let cart = [];
let wishlist = [];

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const wishlistBtn = document.getElementById('wishlist-btn');
const cartModal = document.getElementById('cart-modal');
const wishlistModal = document.getElementById('wishlist-modal');
const closeCart = document.getElementById('close-cart');
const closeWishlist = document.getElementById('close-wishlist');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartItemsContainer = document.getElementById('cart-items');
const wishlistItemsContainer = document.getElementById('wishlist-items');
const cartTotal = document.getElementById('cart-total');

// Render Products
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    let html = '';

    products[category].forEach(product => {
        html += `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-overlay">
                    <button class="btn-icon add-to-wishlist" onclick="toggleWishlist('${product.id}')">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price.toFixed(2)}</p>
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')">Add to Cart</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    // Auth Check
    const user = localStorage.getItem('shoppers_stop_user');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }
    
    // Set Greeting
    const greetingEl = document.getElementById('user-greeting');
    if (greetingEl) {
        greetingEl.innerHTML = `Hello ${user} Welcome <a href="#" onclick="logout()" style="color:var(--accent-color); margin-left: 10px; font-size: 0.8rem; text-transform:none;">Logout</a>`;
    }

    renderProducts('dresses', 'dresses-grid');
    renderProducts('accessories', 'accessories-grid');
    renderProducts('footwear', 'footwear-grid');
});

// Logout Function
function logout() {
    localStorage.removeItem('shoppers_stop_user');
    window.location.href = 'login.html';
}

// Find product by ID
function getProductById(id) {
    for (const category in products) {
        const found = products[category].find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

// Cart Functionality
function addToCart(id) {
    const product = getProductById(id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Visual feedback
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Update Modal
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your bag is empty.</p>';
        cartTotal.innerText = '0.00';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="item-img">
                <div class="item-details">
                    <h4 class="item-title">${item.title}</h4>
                    <p class="item-price">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    cartTotal.innerText = total.toFixed(2);
}

// Wishlist Functionality
function toggleWishlist(id) {
    const index = wishlist.findIndex(item => item.id === id);
    const product = getProductById(id);
    const btn = document.querySelector(`.product-card[data-id="${id}"] .add-to-wishlist`);

    if (index > -1) {
        wishlist.splice(index, 1);
        if(btn) btn.classList.remove('active');
    } else {
        wishlist.push(product);
        if(btn) btn.classList.add('active');
    }

    updateWishlistUI();
    
    // Visual feedback
    wishlistBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        wishlistBtn.style.transform = 'scale(1)';
    }, 200);
}

function removeFromWishlist(id) {
    toggleWishlist(id);
    // Also remove active class from product card if modal is open
    const btn = document.querySelector(`.product-card[data-id="${id}"] .add-to-wishlist`);
    if(btn) btn.classList.remove('active');
}

function updateWishlistUI() {
    wishlistCount.innerText = wishlist.length;

    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = '<p class="empty-msg">Your wishlist is empty.</p>';
        return;
    }

    let html = '';

    wishlist.forEach(item => {
        html += `
            <div class="wishlist-item">
                <img src="${item.image}" alt="${item.title}" class="item-img">
                <div class="item-details">
                    <h4 class="item-title">${item.title}</h4>
                    <p class="item-price">₹${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" onclick="removeFromWishlist('${item.id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    wishlistItemsContainer.innerHTML = html;
}

// Modal Listeners
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

wishlistBtn.addEventListener('click', () => {
    wishlistModal.classList.add('active');
});

closeWishlist.addEventListener('click', () => {
    wishlistModal.classList.remove('active');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('active');
    if (e.target === wishlistModal) wishlistModal.classList.remove('active');
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal && e.target === paymentModal) paymentModal.classList.remove('active');
});

// Search Functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.product-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.product-title').innerText.toLowerCase();
            if (title.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Checkout & Payment Functionality
const checkoutBtn = document.getElementById('checkout-btn');
const paymentModal = document.getElementById('payment-modal');
const closePaymentBtn = document.getElementById('close-payment');
const paymentTotal = document.getElementById('payment-total');
const confirmPaymentBtn = document.getElementById('confirm-payment-btn');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty! Add some items before checking out.');
            return;
        }
        
        // Calculate total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        paymentTotal.innerText = total.toFixed(2);
        
        // Hide cart, show payment modal at step 1
        cartModal.classList.remove('active');
        paymentModal.classList.add('active');
        nextCheckoutStep(1); // Reset to step 1
    });
}

// Multi-Step Checkout Navigation
function nextCheckoutStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.checkout-step').forEach(step => {
        step.classList.remove('active');
    });
    // Remove active from all dots
    document.querySelectorAll('.step-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show target step
    document.getElementById(`step-${stepNumber}`).classList.add('active');
    
    // Activate dots up to current step
    for (let i = 1; i <= stepNumber; i++) {
        document.getElementById(`dot-${i}`).classList.add('active');
    }
}

// Select Payment Method
function selectPaymentMethod(element, method) {
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
}

if (closePaymentBtn) {
    closePaymentBtn.addEventListener('click', () => {
        paymentModal.classList.remove('active');
    });
}

if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
        alert('Payment successful! Thank you for shopping with Shopper\'s Stop.');
        cart = []; // Empty cart
        updateCartUI();
        paymentModal.classList.remove('active');
    });
}

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
    // Check local storage for preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    });
}
