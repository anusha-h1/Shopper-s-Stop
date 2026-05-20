# Shopper's Stop - Premium Fashion Ecommerce Site

A modern, responsive ecommerce platform for premium fashion items featuring elegant dresses, accessories, and luxury footwear.

## ✨ Features

### Core Functionality
- **User Authentication**: Login page with username and mobile number validation
- **Product Catalog**: Three main categories
  - Elegant Dresses (Lehengas, Sarees, Anarkali Suits, etc.)
  - Chic Accessories (Jewelry, Bags, Bindis, etc.)
  - Luxury Footwear (Mojaris, Heels, Sandals, etc.)
- **Shopping Cart**: Add/remove items with real-time total calculation
- **Wishlist**: Save favorite items for later
- **Search Functionality**: Find products by name
- **Dark Mode**: Theme toggle for comfortable viewing

### User Experience
- Responsive design that works on all devices
- Smooth animations and transitions
- Real-time cart and wishlist counters
- User greeting with personalized experience
- Modal overlays for cart and wishlist management
- Professional navigation bar with sticky positioning

## 📁 Project Structure

```
ecommerce-site/
├── index.html          # Main shopping page
├── login.html          # User authentication page
├── script.js           # JavaScript logic (cart, wishlist, products)
├── styles.css          # Styling and theme configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone or download the project:
```bash
git clone <repository-url>
cd ecommerce-site
```

2. Open `login.html` in your browser to start:
   - Enter a mobile number (10 digits)
   - Enter a username
   - Enter a password
   - Click "Sign In" to access the main store

3. Alternatively, open `index.html` directly if already logged in

### Local Storage
The application uses browser's local storage to:
- Store user login information
- Persist cart items
- Maintain wishlist items
- Remember theme preference

## 🎨 Styling & Theme

The site uses CSS variables for easy customization:

```css
--primary-color: #1a1a1a         /* Black */
--secondary-color: #f8f8f8       /* Light gray background */
--accent-color: #d4af37          /* Gold highlights */
--text-main: #333333             /* Main text color */
```

### Dark Mode
Toggle between light and dark themes using the moon icon in the navigation bar.

## 💡 How to Use

### Shopping
1. Browse products in each category
2. Click "Add to Bag" to add items to your cart
3. Click the heart icon to add items to your wishlist
4. Use the search bar to find specific products

### Cart Management
1. Click the bag icon to view your cart
2. Adjust quantities or remove items
3. View the total price
4. Click "Checkout" to proceed (ready for integration)

### Wishlist
1. Click the heart icon on products to save them
2. Click the heart in the navigation to view your wishlist
3. Move items to cart from wishlist view

### Account
- Your username appears in the top navigation
- Log out by clearing browser cache or using localStorage directly

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with variables and animations
- **JavaScript (Vanilla)**: No dependencies required
- **Font Libraries**:
  - Google Fonts: Playfair Display, Inter
  - Font Awesome 6.4.0: Icons
- **Storage**: Browser LocalStorage API

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Flexible grid layouts

## 🔐 Security Notes

- Currently uses localStorage for authentication (demo only)
- Not recommended for production without backend authentication
- Consider implementing:
  - Backend authentication server
  - JWT tokens
  - HTTPS encryption
  - Password hashing

## 🚧 Future Enhancements

- Backend API integration
- Payment gateway integration
- Product filtering and sorting
- User account management
- Order history
- Product reviews and ratings
- Inventory management
- Admin dashboard

## 📝 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and commercial use.

## 👥 Contributing

Feel free to fork, modify, and improve this project!

## 📧 Support

For issues or suggestions, please open an issue in the repository.

---

**Made with ❤️ for fashion enthusiasts**
