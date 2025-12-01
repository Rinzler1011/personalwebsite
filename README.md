# Personal Website

<div align="center">
    <p>Personal website for Joshua Callary for my thoughts and ideas</p>
    <p>
        <small><ins>English</ins></small>
        <small><a href="README.ru.md">Русский</a></small>
    </p>
    <p>
        <a href="https://raw.githubusercontent.com/Rinzler1011/personalwebsite/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/badge/License-GPL--3.0-blue.svg"></a>
    </p>
</div>

> [!NOTE]
> - `main` branch✅: Static build, can be deployed on any static hosting platform.
> - `cloudflare` branch: Enables built-in comment system, only deployable on Cloudflare.


## ✨ Features

- [x] **Responsive Design** - Adaptive for mobile, tablet, and desktop.
- [x] **Light / Dark Mode** - Auto-follows system preference with manual toggle support.
- [x] **CSR Dynamic Content Filtering** - List filtering and pagination via History API.
- [x] **i18n Support** - Extensible multilingual support, also works perfectly in monolingual mode.
- [x] **Sitemap & Feed Subscription** - Automated generation of Sitemap and Atom Feed.
- [x] **OpenGraph Support** - Built-in Open Graph meta tags for optimized social media sharing.


## ✍️ Content Creation

Content creation is centralized in the `src/content` directory, mainly including:

- `note` - Focused on carefully crafted and detailed long-form works
- `jotting` - Lightweight and immediate content recording
- `preface` - Displayed on the homepage as the first impression
- `information` - Containing various descriptive content

For details, refer to the [Content Creation Guide](src/content/note/en/content.md).

## 🤝 Contributing

All kinds of contributions are welcome and appreciated!

- Help promote the project or assist other users
- Report [issues](https://github.com/tuyuritio/astro-theme-thought-lite/issues) or suggest new features
- Improve documentation or help with internationalization (i18n)
- Submit code contributions - see the [Code Contribution Guide](CONTRIBUTING.md) for more details

## 🙏 Acknowledgments

### Tech Stack

- **Core Framework** - [Astro](https://astro.build/)
- **Core Language** - [TypeScript](https://www.typescriptlang.org/)
- **UI Components** - [Svelte](https://svelte.dev/)
- **CSS Engine** - [UnoCSS](https://unocss.dev/)
- **CSS Preprocessor** - [Less](https://lesscss.org/)
- **Icons** - [Iconify](https://iconify.design/)
- **Fonts** - [Google Fonts](https://fonts.google.com/) | [ZeoSeven Fonts](https://fonts.zeoseven.com/)
- **Image Viewer** - [Medium Zoom](https://github.com/francoischalifour/medium-zoom)
- **SPA Transitions** - [Swup](https://swup.js.org/)
- **Time Handling** - [Luxon](https://moment.github.io/luxon/)
- **Code Quality** - [Biome](https://biomejs.dev/)
- **Static Deployment** - [Vercel](https://vercel.com/)

### Inspiration

- [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)
- [astro-vitesse](https://github.com/adrian-ub/astro-vitesse)
- [Miniblog](https://github.com/nicholasdly/miniblog)
- [AstroPaper with I18n](https://github.com/yousef8/astro-paper-i18n)

## 📜 License

This project is licensed under [GPLv3](LICENSE), allowing free modification and distribution, but the original copyright notice must be retained.
