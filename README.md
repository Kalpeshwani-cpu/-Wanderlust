# 🌍 Travelopedia - Travel Accommodation Platform

A full-stack web application for discovering and booking travel accommodations with interactive maps, user reviews, and comprehensive filtering options.

![Wanderlust](https://img.shields.io/badge/Status-Active-brightgreen)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) *(Coming Soon)*


## ✨ Features

### 🔐 User Authentication & Authorization
- **User Registration & Login** with secure password hashing
- **Session Management** with persistent login
- **Authorization Middleware** for protected routes
- **Flash Messages** with auto-dismiss functionality (4 seconds)

### 🏠 Listing Management
- **Create, Read, Update, Delete (CRUD)** operations for travel listings
- **Image Upload** with Cloudinary cloud storage
- **Geocoding Integration** with Mapbox for automatic location coordinates
- **Category-based Filtering** (8 categories: Beaches, Hill Stations, Historical Places, etc.)
- **Search Functionality** for destinations

### 🗺️ Interactive Maps
- **Mapbox Integration** for interactive location visualization
- **Custom Markers** with popup information
- **Geographic Coordinates** storage and display
- **Responsive Map Design**

### ⭐ Review & Rating System
- **5-Star Rating System** with visual star interface
- **User Reviews** with comments
- **Review Management** (create, delete)
- **Author-based Review Control**

### 🎨 User Interface
- **Responsive Design** with Bootstrap 5
- **Modern UI/UX** with custom CSS styling
- **Interactive Elements** with smooth animations
- **Mobile-First Approach**

### 🔍 Advanced Features
- **Data Validation** with Joi schema validation
- **Error Handling** with custom error pages
- **File Upload** with format restrictions
- **Session-based Flash Messages**

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **Joi** - Data validation
- **Multer** - File upload handling

### Frontend
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **JavaScript (ES6+)** - Client-side scripting
- **Mapbox GL JS** - Interactive maps
- **Font Awesome** - Icons

### Cloud Services
- **Cloudinary** - Image storage and management
- **Mapbox** - Geocoding and mapping services

### Development Tools
- **dotenv** - Environment variable management
- **connect-flash** - Flash message middleware
- **method-override** - HTTP method override
- **express-session** - Session management

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Mapbox account

## 🚀 Usage

### For Users
1. **Browse Listings** - Explore travel accommodations by category
2. **Search Destinations** - Use the search bar to find specific locations
3. **View Details** - Click on listings to see full details and maps
4. **Create Account** - Sign up to create and manage listings
5. **Leave Reviews** - Rate and review accommodations
6. **Manage Listings** - Edit or delete your own listings

## 📁 Project Structure

wanderlust/
├── controllers/          # Business logic
│   ├── listings.js      # Listing operations
│   ├── reviews.js       # Review operations
│   └── users.js         # User operations
├── middleware/          # Custom middleware
├── models/              # Database schemas
│   ├── listing.js       # Listing model
│   ├── review.js        # Review model
│   └── user.js          # User model
├── routes/              # Route definitions
│   ├── listing.js       # Listing routes
│   ├── review.js        # Review routes
│   └── user.js          # User routes
├── utils/               # Utility functions
├── views/               # EJS templates
│   ├── includes/        # Reusable components
│   ├── layouts/         # Layout templates
│   ├── listings/        # Listing views
│   └── user/            # User views
├── public/              # Static assets
│   ├── css/             # Stylesheets
│   └── js/              # Client-side JavaScript
├── init/                # Database initialization
├── app.js               # Main application file
├── cloudConfig.js       # Cloudinary configuration
└── schema.js            # Joi validation schemas
```

## 🔗 API Endpoints

### Authentication
- `GET /signup` - User registration form
- `POST /signup` - Create new user
- `GET /login` - User login form
- `POST /login` - Authenticate user
- `GET /logout` - User logout

### Listings
- `GET /listings` - View all listings
- `GET /listings/new` - Create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - View specific listing
- `GET /listings/:id/edit` - Edit listing form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Create review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

## 🔮 Future Improvements

### Phase 1 - Enhanced User Experience
- [ ] **Real-time Chat** - Direct messaging between users
- [ ] **Advanced Search Filters** - Price range, amenities, availability
- [ ] **Wishlist/Favorites** - Save preferred listings
- [ ] **User Profiles** - Detailed user information and history

### Phase 2 - Booking System
- [ ] **Reservation System** - Date-based booking functionality
- [ ] **Payment Integration** - Stripe/PayPal payment processing
- [ ] **Calendar Integration** - Availability management
- [ ] **Email Notifications** - Booking confirmations and updates

### Phase 3 - Advanced Features
- [ ] **Mobile App** - React Native or Flutter application
- [ ] **Social Features** - User following, social sharing
- [ ] **Analytics Dashboard** - Admin panel with insights
- [ ] **Multi-language Support** - Internationalization

### Phase 4 - Performance & Scalability
- [ ] **Caching Layer** - Redis for improved performance
- [ ] **CDN Integration** - Global content delivery
- [ ] **Database Optimization** - Indexing and query optimization
- [ ] **Load Balancing** - Horizontal scaling support

### Phase 5 - AI & Machine Learning
- [ ] **Recommendation Engine** - AI-powered listing suggestions
- [ ] **Price Prediction** - Dynamic pricing suggestions
- [ ] **Image Recognition** - Automatic image tagging
- [ ] **Sentiment Analysis** - Review sentiment insights

## 👨‍💻 Author

**Kalpesh Wani**
- GitHub: [@KalpeshWani-cpu](https://github.com/KalpeshWani-cpu)
- Email: kalpeshwani0883@gmail.com

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the UI framework
- [Mapbox](https://www.mapbox.com/) for mapping services
- [Cloudinary](https://cloudinary.com/) for image management
- [Font Awesome](https://fontawesome.com/) for icons

---

⭐ **Star this repository if you found it helpful!**
