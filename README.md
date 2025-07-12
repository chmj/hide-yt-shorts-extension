# Hide YouTube Shorts Chrome Extension

Tired of YouTube Shorts cluttering your feed? This simple Chrome extension automatically hides "Shorts" videos from your YouTube homepage, search results, and sidebars, providing a cleaner and more focused Browse experience.

## Features

* Hides the "Shorts" section on the YouTube homepage.
* Removes individual Shorts videos from search results and other video lists.
* Hides the "Shorts" link in the left-hand sidebar navigation.
* Lightweight and efficient.

## Installation

### From GitHub (Developer Mode)

1.  **Download the Extension:**
    * Click on the green "Code" button on the GitHub repository page.
    * Select "Download ZIP".
    * Extract the downloaded ZIP file to a convenient location on your computer (e.g., `C:\ChromeExtensions\HideYouTubeShorts`).

2.  **Open Chrome Extensions:**
    * Open your Chrome browser.
    * Type `chrome://extensions` in the address bar and press Enter.

3.  **Enable Developer Mode:**
    * In the top right corner of the Extensions page, toggle on **Developer mode**.

4.  **Load Unpacked Extension:**
    * Click the **Load unpacked** button that appears.
    * Navigate to the folder where you extracted the extension (e.g., `HideYouTubeShorts`) and select it.

5.  **Enjoy!**
    * The "Hide YouTube Shorts" extension should now appear in your list of extensions.
    * Navigate to YouTube, and the Shorts should be hidden. If you were already on YouTube, refresh the page.

### From the Chrome Web Store (Coming Soon!)

*Instructions for installing from the Chrome Web Store will be added here once the extension is published.*

## How it Works

This extension injects a small CSS stylesheet into every YouTube page. This stylesheet targets specific HTML elements that YouTube uses for Shorts content and sets their `display` property to `none`, effectively hiding them from view.

**Important Note:** YouTube's website structure can change over time. If the extension stops working as expected, it may be due to updates on YouTube's side. Please open an issue on GitHub if you encounter problems.

## Contributing

Contributions are welcome! If you find a bug, have a feature request, or want to improve the code, feel free to:

1.  **Fork** this repository.
2.  **Create a new branch** (`git checkout -b feature/your-feature-name` or `bugfix/your-bugfix-name`).
3.  **Make your changes**.
4.  **Commit your changes** (`git commit -m 'feat: Add new feature'`).
5.  **Push to your branch** (`git push origin feature/your-feature-name`).
6.  **Open a Pull Request** to the `main` branch of this repository.

Please ensure your code follows existing style and includes clear commit messages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This extension is an independent project and is not affiliated with, endorsed by, or sponsored by Google or YouTube in any way.

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.
