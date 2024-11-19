function clickConnectButtons() {
  const connectButtons = document.querySelectorAll('button');
  
  let connectButton = null;
  for (let i = 0; i < connectButtons.length; i++) {
      if (connectButtons[i].textContent.trim() === 'Connect' && !connectButtons[i].hasAttribute('disabled')) {
          connectButton = connectButtons[i];
          break;
      }
  }

  if (connectButton) {
      connectButton.click();
      console.log('Clicked Connect Button!');
      
      handlePopup(() => {
          setTimeout(clickConnectButtons, 2000);
      });
  } else {
      console.log('No Connect buttons found');
  }
}

function handlePopup(callback) {
  const sendWithoutNoteButton = document.querySelector('button[aria-label="Send without a note"]');
  
  if (sendWithoutNoteButton) {
      sendWithoutNoteButton.click();
      console.log('Clicked "Send without a note" button!');
      setTimeout(callback, 2000);
  } else {
      setTimeout(callback, 2000);
  }
}

function startAutomation() {
  clickConnectButtons();
}

startAutomation();
