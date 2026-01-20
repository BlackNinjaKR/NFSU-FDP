# National Forensic Sciences University - Faculty Development Program

Static informational website for NFSU Faculty Development Program, showcasing program details, schedules, speakers, resources, and contact information using a clean, responsive, and accessible web design.

## Features

- Hero/intro screen with animated particle background
- Fullscreen loader and intro splash
- Responsive navigation and section anchors (Home, About NFSU, SCSDF, Speakers)
- Accordion-based schedule
- Speaker carousel (custom carousel + Swiper assets available)
- Accessibility- and mobile-minded layout (responsive CSS)
- Protected right-click disabled via script

## Tech / Libraries

- HTML5, CSS (modular files under styles/)
- Vanilla JavaScript (scripts/)
- Particles.js (particles background)
- Swiper.js (carousel styles/libs included)
- ScrollReveal (scroll animations)
- Google Fonts (Montserrat)

## Project structure

```
/
│
├── index.html              # Main entry point
│
├── styles/                 # All CSS modules
│   ├── about.css
│   ├── accordion.css
│   ├── background.css
│   ├── hero.css
│   ├── introscreen.css
│   ├── mission.css
│   ├── navbar.css
│   ├── team.css
│   └── testimonial.css     # Not used
│
├── scripts/                # All JavaScript modules
│   ├── about.js
|   ├── background.js
│   ├── hero.js
│   ├── introscreen.js
│   ├── navbar.js
│   └── team.js
│
├── assets/                 # Static assets
│   ├── cybersecurity.png
|   ├── Favicon.png
│   ├── Isea.png
|   ├── Logo.png
|   ├── Meity.png
|   ├── NFSU-Guwahati-Campus.png
|   ├── SplashText.png
│   └── Team/
│       └── ...             # Pictures of Speakers
│
├── .gitignore
├── LICENSE
└── README.md               # Project documentation

```

## Accessibility

- Semantic HTML5 structure
- High-contrast color palette
- Scalable typography
- Keyboard-friendly navigation (except right-click lock)
- ARIA-safe accordion behavior

## Customization

Common entry points for modification:

- `styles/hero.css` — landing section visuals
- `styles/accordion.css` — schedule behavior
- `scripts/background.js` — particle animation config
- `assets/Team/` — speaker images
- `index.html` — content and section structure

## Attribution

Website developed by **Anik Dasgupta**  
National Forensic Sciences University, Guwahati  

&copy; National Forensic Sciences University

## License

This project is released under the terms of the LICENSE file included in the repository.  
All institutional logos and content belong to NFSU and respective partners.

---
