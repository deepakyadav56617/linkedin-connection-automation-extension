document.getElementById('startBtn').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: startAutomation
      });
  });
});

function startAutomation() {
  chrome.runtime.sendMessage({ action: 'start' });
}
