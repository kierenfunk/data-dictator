chrome.runtime.onMessage.addListener(
  (payload, _sender, _sendResponse) => {
    switch (payload.cmd) {
      case 'setToken':
        // eslint-disable-next-line
        console.log(payload.data);
        chrome.storage.sync.set(payload.data, () => {
          _sendResponse({ message: 'OK' });
        });
        break;
      default:
        _sendResponse({ message: 'Command not found' });
        break;
    }
    return true;
  },
);
