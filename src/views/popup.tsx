import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../style.css';

const Popup = () => <div className="text-3xl underline">test</div>;

chrome.tabs.query({ active: true, currentWindow: true }, () => {
  ReactDOM.render(<Popup />, document.getElementById('popup'));
});
