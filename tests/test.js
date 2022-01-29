import configItems from './assets/configitems.json';
import getApiKey from '../src/connective/getApiKey';
// require('jest-fetch-mock').enableMocks();

describe('connective data extraction', () => {
  it('get api key from config items', () => {
    expect.hasAssertions();
    expect(getApiKey(configItems)).toBe(process.env.API_KEY);
    expect(getApiKey({ success: true, configItems: [] })).toBe('');
  });
});
