# Tesla Landing Page

A modern, responsive Tesla-inspired landing page featuring electric vehicle information, model showcase, and EV charging station locator.

## 🚗 Features

### Core Functionality
- **Responsive Navigation**: Clean header with Tesla branding and navigation menu
- **Hero Section Carousel**: Dynamic slideshow with video and model-specific slides
  - First slide: Video background with "Demo FSD (Supervised)" and "Learn More" buttons
  - Second slide: Model 3 image with "Order Now" and "View Inventory" buttons
  - Third slide: Model Y image with "Order Now" and "View Inventory" buttons
  - Auto-play functionality (10-second intervals)
  - Manual navigation controls
  - Smooth transitions
- **Model Carousel**: Interactive slideshow showcasing Tesla vehicle models (Model 3, Y, S, X, Cybertruck)
  - Auto-play functionality (8-second intervals)
  - Manual navigation controls
  - Smooth transitions
- **Features Carousel**: Showcase of Tesla's key features and technologies
- **Energy Products**: Showcase of Tesla's solar and energy solutions
- **EV Charging Map**: Embedded Google Maps showing charging stations in Pretoria, South Africa
- **Footer Carousel**: Rotating footer content with AI input functionality
- **Fixed Footer**: Always-visible footer with "Ask a question" input bar

### Technical Features
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Animations**: CSS transitions and JavaScript-powered carousels
- **Modern UI**: Clean, minimalist design inspired by Tesla's aesthetic
- **Fast Loading**: Optimized HTML, CSS, and JavaScript
- **Multiple Carousels**: Independent carousel instances for different sections

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and backdrop-filter effects
- **Vanilla JavaScript**: Interactive carousels, DOM manipulation, and event handling
- **Google Maps Embed**: Integrated map for charging station locations

## 📁 Project Structure

```
Tesla-landing-page/
├── index.html          # Main HTML file with all sections
├── style.css          # CSS styling with responsive design
├── script.js          # JavaScript functionality for carousels and interactions
├── img/               # Image assets for models and features
├── vid/               # Video assets for hero carousel
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (Python's built-in server recommended)

### Installation

1. **Clone or Download** the project files to your local machine
2. **Navigate** to the project directory
3. **Start a local server**:
   ```bash
   python -m http.server 8000
   ```
4. **Open your browser** and go to `http://localhost:8000`

## 📚 Sources & References

This project was built using the following resources and references:

### Official Tesla Resources
- [Tesla Official Website](https://www.tesla.com/) - Main inspiration and design reference
- [Tesla Gallery](https://www.tesla.com/tesla-gallery) - Visual assets and design inspiration

### Development Tools & APIs
- [Serper.dev Playground](https://serper.dev/playground) - Search API for development research
- [Google AI Studio](https://aistudio.google.com/welcome?utm_source=google&utm_medium=cpc&utm_campaign=Cloud-SS-DR-AIS-FY26-global-gsem-1713578&utm_content=text-ad&utm_term=KW_google%20ai%20studio&gad_source=1&gad_campaignid=23417416052&gbraid=0AAAAACn9t64D25w2l3gIQtbyCMoiwzmY6&gclid=CjwKCAjw14zPBhAuEiwAP3-Eb_A7by1mSTu3vwjCfRVACDZreTf02FXZUd_xJ56eMIbVxnYukr0HexoCkugQAvD_BwE) - AI-powered development assistance

### Learning Resources
- [HTML Complete Guide - GeeksforGeeks](https://www.geeksforgeeks.org/html/html-complete-guide/) - HTML5 reference and tutorials
- [CSS Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-tutorial/) - CSS3 styling and layout guides
- [JavaScript Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/javascript/javascript-tutorial/) - JavaScript fundamentals and DOM manipulation

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements or additional features.

## 📄 License

This project is for educational purposes. Tesla branding and assets are property of Tesla, Inc.

2. **Navigate to the project directory**:
   ```bash
   cd path/to/Tesla-landing-page
   ```

3. **Start a local web server**:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Or using Python 2
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

## 🗺️ EV Charging Stations Map

The landing page includes an embedded Google Maps showing EV charging stations in Pretoria, South Africa. The map features:

- **Interactive Search Results**: Displays charging stations from GridCars, Rubicon, and Chargify
- **Location Details**: Click on markers to see station information
- **Responsive Design**: Adapts to different screen sizes
- **No API Key Required**: Uses Google's embed functionality

### Map Data Sources
The embedded map shows real charging stations including:
- GridCars Charging Stations
- Rubicon Charging Stations
- Chargify Charging Stations
- EV Charging Stations

## 🎨 Customization

### Changing Locations
To display charging stations for a different area:

1. Go to [Google Maps](https://maps.google.com)
2. Search for "charging stations [your location]"
3. Click the "Share" button
4. Select "Embed a map"
5. Copy the iframe src URL
6. Replace the iframe src in `index.html`

### Modifying Content
- **Models**: Update the carousel slides in `index.html`
- **Styling**: Modify `style.css` for colors, fonts, and layout
- **Features**: Add new sections in `index.html` and corresponding styles

### Adding Google Maps API (Optional)
If you prefer custom markers instead of the embedded search:

1. Get a Google Maps JavaScript API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Uncomment the API script in `index.html`
3. Uncomment the `initMap()` function in `script.js`
4. Add your custom markers and locations

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- **Desktop**: Full-width layouts with side-by-side content
- **Tablet**: Adjusted grid layouts and navigation
- **Mobile**: Stacked layouts and touch-friendly navigation

## 🔧 Development

### Local Development
- Use any code editor (VS Code recommended)
- Make changes to HTML, CSS, or JavaScript files
- Refresh the browser to see changes
- No build process required

### Browser Compatibility
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📄 License

This project is for educational and demonstration purposes. Tesla branding and imagery are used for illustrative purposes only.

## 🤝 Contributing

Feel free to fork this project and add your own improvements!

## 📞 Support

If you encounter any issues:
1. Check that your local server is running on port 8000
2. Ensure all files are in the same directory
3. Try a different browser
4. Check the browser console for JavaScript errors

---

**Built with ❤️ for Tesla enthusiasts and EV drivers**</content>
<parameter name="filePath">c:\Users\Arwe\Documents\Tesla-landing-page\README.md