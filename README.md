# Tesla Landing Page

A responsive Tesla-inspired landing page built with HTML, CSS, and vanilla JavaScript. The project includes a video-first hero section, a Tesla lineup carousel, an energy products section, an embedded charging-station map, and a structured footer with navigation and call-to-action elements.

## Overview

This project is a front-end landing page experience designed around Tesla-themed branding and product presentation. It focuses on clean layout, strong visual hierarchy, responsive behavior, and lightweight interactivity without any framework.

## Features

- Fixed white header with internal navigation links
- Hero carousel with:
  - A first slide using a background driving video
  - Supporting image slides for Tesla models
  - Clear headline and supporting copy
  - Styled CTA buttons
  - Manual previous and next controls
  - Longer first-slide autoplay timing
- Tesla lineup carousel featuring:
  - Model S
  - Model 3
  - Model X
  - Model Y
- Consistent button system:
  - Blue primary buttons with darker hover state
  - White secondary buttons
  - White "Schedule a Drive Today" button with blue steering wheel icon
- Energy product cards for:
  - Solar Panels
  - Powerwall
  - Megapack
- Embedded Google Maps section for EV charging stations in Pretoria
- Structured footer with:
  - Brand summary
  - Multiple functional navigation links
  - Question input field
  - Schedule-drive CTA
- Responsive layout for desktop, tablet, and mobile

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Maps Embed

## Project Structure

```text
Tesla-landing-page/
|-- index.html          # Main page structure and content
|-- style.css           # Site styling, responsive layout, and visual system
|-- script.js           # Hero and models carousel behavior, input placeholder rotation
|-- img/                # Image assets for Tesla models and energy products
|-- vid/                # Video assets for the hero section
`-- README.md           # Project documentation
```

## Main Sections

### Header

The header is fixed at the top of the page and provides quick navigation to the main sections of the site.

### Hero

The hero area uses a full-screen video-led first slide, followed by image-based model slides. It includes a strong headline, supporting text, and styled primary/secondary CTA buttons.

### Models

The models section presents Tesla's four core vehicle models in a carousel with readable content, pricing, tags, and action buttons.

### Energy

The energy section highlights Tesla-related clean energy products in a card-based layout.

### Charging

The charging section embeds Google Maps to show EV charging stations in Pretoria, South Africa.

### Footer

The footer includes internal site navigation, a brand description, an input area, and a schedule-drive call to action.

## Getting Started

1. Clone or download the project.
2. Open the project folder in your editor.
3. Start a local server, for example:

```bash
python -m http.server 8000
```

4. Visit `http://localhost:8000` in your browser.

## Customization

- Update text, headings, and section content in `index.html`
- Adjust colors, spacing, button styles, and layout in `style.css`
- Modify hero and models carousel behavior in `script.js`
- Replace images in `img/`
- Replace the hero video in `vid/`
- Update the Google Maps embed URL in `index.html` if you want a different location

## Notes

- The first hero slide currently uses `vid/drive.mkv`
- Some browsers support `.mp4` more reliably than `.mkv`, so converting the hero video to `.mp4` may improve compatibility
- The footer question form currently points to ChatGPT in a new tab

## Sources

This section lists the design, content, asset, tooling, and integration references used for or connected to this project.

### Design and Brand Inspiration

- [Tesla Official Website](https://www.tesla.com/) - primary visual and product inspiration
- [Tesla Gallery](https://www.tesla.com/tesla-gallery) - imagery and presentation inspiration

### External Services Used in the Project

- [Tesla favicon asset](https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon.ico) - favicon used in `index.html`
- [Google Maps Embed](https://www.google.com/maps/) - charging station map embedded in the charging section
- [ChatGPT](https://chat.openai.com/) - external destination used by the footer question form

### Development and Research References

- [Serper.dev Playground](https://serper.dev/playground) - development research support
- [Google AI Studio](https://aistudio.google.com/) - AI-assisted development support

### Learning References

- [HTML Complete Guide - GeeksforGeeks](https://www.geeksforgeeks.org/html/html-complete-guide/) - HTML reference
- [CSS Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/css/css-tutorial/) - CSS reference
- [JavaScript Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/javascript/javascript-tutorial/) - JavaScript reference

### Local Project Assets

The following local assets are part of the project repository:

- Hero video in `vid/drive.mkv`
- Vehicle images in `img/ModelS.jpg`, `img/Model3.jpg`, `img/Model3_2.jpg`, `img/ModelX.jpg`, `img/ModelY.jpg`, and `img/ModelY_2.jpg`
- Energy images in `img/SolarPanels.jpg`, `img/Powerwall.jpg`, and `img/Megapack.jpg`
- Additional image asset in `img/Cybertruck.jpg`

## License

This project is for educational and portfolio purposes. Tesla branding, names, and related imagery remain the property of Tesla, Inc.
