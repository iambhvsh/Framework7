# Framework7s Kitchen Sink Template

## Overview

The Framework7s Kitchen Sink template is a standalone web application designed to emulate the look and feel of native Android and iOS apps. Built entirely with HTML, CSS, and JavaScript, this template uses core JS components to offer a seamless user experience without requiring any server-side processing. The application includes routing to provide a native-like navigation experience and features the ability to switch between iOS and Android modes as well as dark and light themes.

## Features

- 🚀 **Standalone Application**: No server required; fully functional using only HTML, CSS, and JavaScript.
- 🔄 **Mode Switching**: Easily switch between iOS and Android modes.
- 🌗 **Theme Changing**: Toggle between dark and light themes, with dark mode set as the default.
- ⚙️ **Customizable Settings**: Set the default mode (auto, iOS, or Android) and theme (dark or light) in the `/js/app.js` file.
- 🎨 **Dynamic Changes**: Change themes and modes dynamically within the app interface.
- 📚 **Extensive Documentation**: This repository is a result of extensive research and development, aimed at providing a comprehensive solution for developers.

## Getting Started

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/Framework7s-Kitchen-Sink.git
    cd Framework7s-Kitchen-Sink
    ```

2. **Open the App**:
    - Simply open the `index.html` file in your web browser to view the app.

## Configuration

- **Default Settings**: Modify the default mode and theme in the `/js/app.js` file:
    ```javascript
    // Set default mode: 'auto', 'ios', or 'android'
    var defaultMode = 'ios';
    // Set default theme: 'dark' or 'light'
    var defaultTheme = 'dark';
    ```

- **Dynamic Changes**: Use the app interface to switch between modes and themes dynamically.

## Issues

Some pages are currently broken or have been removed in the latest Framework7 updates. Here is a list of affected pages:

- autocomplete.html
- checkbox.html
- data-table.html
- elevation.html (Removed in Framework7 8.3)
- icons.html
- infinite-scroll.html
- lazy-load.html (Removed in Framework7 8.3)
- login-screen.html
- messages.html
- picker.html
- progress-bar.html
- pull-to-refresh.html
- statusbar.html (Removed in Framework7 8.3)
- virtual-list.html
- color-themes.html
- page-transition.html

For the broken pages, I have redirected the URLs to the official Framework7 website. If you have information on these issues or can provide fixes, please fork the repository, resolve the issues, and submit a pull request. Your contributions will be greatly appreciated by both the community and myself! 🙏

## Acknowledgements

This project was developed after extensive research and numerous attempts to create a standalone web app. It's dedicated to all developers who have faced similar challenges in building mobile-like web applications using only HTML, CSS, and JavaScript. I spent a lot of time figuring out how to make this work without a server, so I hope this template saves you time and effort! 😁

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Additional Information

This template provides a perfect starting point for developers looking to create mobile-like web applications quickly and efficiently. Whether you prefer the sleek design of iOS or the customizable nature of Android, this template has got you covered. Enjoy building your app with ease and flexibility!
