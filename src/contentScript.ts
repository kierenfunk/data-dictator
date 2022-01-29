import TokenPayload from './types/TokenPayload';

const script = document.createElement('script');
script.src = chrome.runtime.getURL('js/inject.js');
(document.head || document.documentElement).appendChild(script);

window.addEventListener('setToken', (data: CustomEvent) => {
  chrome.runtime.sendMessage({
    cmd: 'setToken',
    data: <TokenPayload>data.detail,
  });
});
