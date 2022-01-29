import ChromeMessagePayload from './types/ChromeMessagePayload';
/* import getConfigItems from './connective/getConfigItems';
import getApiKey from './connective/getApiKey';
import getOpportunities from './connective/getOpportunities';
import getLoanHistory from './connective/getLoanHistory';
import LoanHistory from './types/connective/LoanHistory'; */

/*
const getData = async (token: string, partnerId: string) => {
  const apiKey = getApiKey(await getConfigItems(token));
  const opportunities = await getOpportunities(token, partnerId, apiKey);
  console.log(opportunities)
  const allLoanHistory: LoanHistory[][] = await Promise.all(opportunities.map(({uniqueId})=>{
    return getLoanHistory(token, uniqueId)
  }))
  console.log(allLoanHistory)
}; */

chrome.runtime.onMessage.addListener(
  (payload : ChromeMessagePayload, _sender, _sendResponse) => {
    switch (payload.cmd) {
      case 'setToken':
        // eslint-disable-next-line
        console.log(payload.data);
        // getData(payload.data.token, payload.data.partnerId);
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
