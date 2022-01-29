import ConfigItems from '../types/connective/ConfigItems';

const getApiKey = (configItems: ConfigItems) : string => {
  const result = configItems.configItems.filter((item) => item.key === 'apiKey');
  if (result.length < 1) return '';
  return result[0].value;
};

export default getApiKey;
