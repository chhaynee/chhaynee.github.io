# MyPortfolio

This is my MyPortfolio_for myself
# Personal Portfolio Website

A clean, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## 📂 Project Structure

```
MyPortfolio/
├── README.md
├── css/
│   └── style.css
├── index.html
└── js/
    └── script.js
```

## 🚀 Features

- Responsive navigation with hamburger menu for mobile
- Animated hero section with typewriter effect
- Skills section with progress bars
- Project showcase with hover effects
- Contact form with floating labels
- Social media integration
- Smooth scrolling navigation

## 🛠️ Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/MyPortfolio.git
   ```

2. Open `index.html` in your browser to view the website

## 📝 Customization Guide

### Modifying Content

#### 1. Personal Information
In `index.html`, update:
- Your name in the navigation bar and footer
- Hero section content
- About section text
- Profile picture
- Social media links

```html
<!-- Update navbar brand -->
<div class="nav-brand">Your Name</div>

<!-- Update hero section -->
<h1>Your Name</h1>
<p class="typewriter" data-text="Your Title | Your Skills">
```

#### 2. Projects
Add your projects in the projects section:
```html
<div class="project-card">
    <img src="path/to/project-image.jpg" alt="Project Name">
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-links">
            <a href="#" class="btn">View Live</a>
            <a href="#" class="btn">Source Code</a>
        </div>
    </div>
</div>
```

#### 3. Skills
Update your skills and progress bars in the about section:
```html
<div class="skill">
    <span>Skill Name</span>
    <div class="progress-bar">
        <div class="progress" style="width: 90%"></div>
    </div>
</div>
```

### Styling Changes

#### 1. Colors
In `css/style.css`, modify the root variables:
```css
:root {
    --primary-color: #2563eb;    /* Main color */
    --secondary-color: #1e40af;  /* Darker shade */
    --text-color: #333;         /* Text color */
    --light-bg: #f3f4f6;        /* Light background */
    --white: #ffffff;           /* White */
}
```

#### 2. Fonts
To change fonts, update the body font-family:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

#### 3. Spacing
Adjust section padding:
```css
section {
    padding: 5rem 2rem;  /* Top/bottom: 5rem, Left/right: 2rem */
}
```

## 🌟 Special Features

### 1. Typewriter Effect
The typewriter effect in the hero section can be customized in `index.html`:
```html
<p class="typewriter" data-text="Your Custom Text Here"></p>
```

### 2. Smooth Scrolling
Navigation links automatically have smooth scrolling enabled through CSS:
```css
html {
    scroll-behavior: smooth;
}
```

### 3. Responsive Design
The website is fully responsive with a breakpoint at 768px. Modify media queries in `style.css` to adjust the responsive behavior.

## 📱 Mobile Optimization

The website includes:
- Responsive images
- Mobile navigation menu
- Touch-friendly buttons
- Readable font sizes on all devices

## 🔧 Common Issues

1. **Images not loading**: Make sure image paths are correct relative to your HTML file
2. **Contact form not working**: The contact form needs a backend to process submissions
3. **Social links**: Remember to update the href attributes with your social media profiles

## 📦 Dependencies

- Font Awesome (for icons)
- No other external dependencies required

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make something cool with it, let me know!

## 📞 Support

If you have any questions or need help customizing your portfolio:
1. Check existing [issues](https://github.com/yourusername/MyPortfolio/issues)
2. Open a new issue
3. Contact me at your.email@example.com
