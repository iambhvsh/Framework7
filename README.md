# Framework7s Kitchen Sink Template

## Overview

The **Framework7s Kitchen Sink** template is a standalone web application that replicates the look and feel of native Android and iOS apps. 🚀 Built entirely with HTML, CSS, and JavaScript, this template utilizes core JS components for a seamless user experience without the need for server-side processing. 🌐 It features routing for a native-like navigation experience and supports switching between iOS and Android modes, as well as dark and light themes. 🌗

## Features

- **Standalone Application**: No server required; fully functional using only HTML, CSS, and JavaScript. 🔥
- **Mode Switching**: Effortlessly switch between iOS and Android modes. 📱
- **Theme Changing**: Toggle between dark and light themes, with dark mode set as the default. 🌙
- **Customizable Settings**: Set the default mode (auto, iOS, or Android) and theme (dark or light) in the `/js/app.js` file. ⚙️
- **Dynamic Changes**: Change themes and modes dynamically within the app interface. 🔄
- **Extensive Documentation**: Comprehensive guidance to help developers. 📚

## Files

### CSS

``` bash
https://unpkg.com/framework7@8.3.3/framework7-bundle.min.css
```

### JS

``` bash
https://unpkg.com/framework7@8.3.3/framework7-bundle.min.js
```

<a href="https://unpkg.com/browse/framework7@8.3.3">
More at UNPKG...</a>

## Getting Started

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/iambhvsh/Framework7.git
    cd Framework7
    ```

2. **Open the App**:
    - Simply open the `index.html` file in your web browser to view the app. 🌐

## Configuration

- **Default Settings**: Modify the default mode and theme in the `/js/app.js` file:
    ```javascript
    // Determine theme and mode from URL parameters
    var theme = 'ios'; // default mode
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }

    var mode = 'dark'; // default theme
    if (document.location.search.indexOf('mode=') >= 0) {
      mode = document.location.search.split('mode=')[1].split('&')[0];
    }
    ```

- **Dynamic Changes**: Utilize the app interface to switch between modes and themes dynamically. 🔧

## Issues

Some pages are currently broken or have been removed in the latest Framework7 updates. Affected pages include:

- `autocomplete.html`
- `checkbox.html`
- `data-table.html`
- `elevation.html` (Removed in Framework7 8.3)
- `icons.html`
- `infinite-scroll.html`
- `lazy-load.html` (Removed in Framework7 8.3)
- `login-screen.html`
- `messages.html`
- `picker.html`
- `progress-bar.html`
- `pull-to-refresh.html`
- `statusbar.html` (Removed in Framework7 8.3)
- `virtual-list.html`
- `color-themes.html`
- `page-transition.html`

For these pages, URLs are redirected to the official Framework7 website. 🌐 If you can provide fixes or additional information, please fork the repository, resolve the issues, and submit a pull request. Your contributions are greatly appreciated! 🙏

## Acknowledgements

This project was developed after extensive research and numerous attempts to create a standalone web app. It is dedicated to developers who have faced similar challenges in building mobile-like web applications with only HTML, CSS, and JavaScript. 🛠️ I hope this template helps you save time and effort in your projects! 😊

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements. 🤝

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details. 📜

### Additional Information

This template provides an excellent starting point for developers looking to create mobile-like web applications quickly and efficiently. Whether you prefer the sleek design of iOS or the customizable nature of Android, this template has you covered. Enjoy building your app with ease and flexibility! 🚀
