# LinkedIn Connection Automation Chrome Extension

This project is a Chrome extension that automates sending connection requests on LinkedIn from a LinkedIn search results page. The extension clicks the "Connect" button for each profile, handles any "Add a note to your invitation?" popups by selecting "Send without a note," and continues to the next connection.

## Installation Instructions

1. Clone the Repository

2. Open Chrome Extension Page:
  - Open Chrome and go to chrome://extensions/.
  - Ensure "Developer mode" is enabled.
    
3. Load the Extension:
  - Click "Load unpacked" and select the folder where you cloned the repository.
    
4. Navigate to LinkedIn Search Results:
  - Open LinkedIn and perform a search (e.g., "CEOs in Bangalore").
    
5. Run the Extension:
  - Click on the extension icon in the toolbar.
  - Click the "Start Sending Requests" button to begin automation.

## Code Architecture & Approach

### Overview
The extension consists of three main components:

- **Background Script**: Handles messages between the popup and the content script.
- **Content Script**: Executes automation on the LinkedIn page, clicking "Connect" buttons one at a time and handling popups.
- **Popup UI**: Provides a simple user interface to start the automation.

### Approach
- **Sequential Automation**: The script processes one connection at a time to ensure stability and avoid LinkedIn's restrictions. After clicking "Connect," it checks for the "Add a note" popup and clicks "Send without a note" if present before proceeding to the next connection.
- **Randomized Delays**: Introduces random delays between actions (5-10 seconds) to simulate human-like behavior and reduce detection risks.
- **Error Handling**: Skips "Message" buttons and handles scenarios where buttons are disabled or no more connections are found.

### Key Files
- `manifest.json`: Defines the extension manifest.
- `background.js`: Manages messages and script injection.
- `content.js`: Handles automation logic on the LinkedIn page.
- `popup.html` and `popup.js`: Creates and manages the popup UI for user interaction.
