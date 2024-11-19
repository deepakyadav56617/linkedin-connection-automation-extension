chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'start') {
      chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          files: ['content.js']
      });
  }
});
