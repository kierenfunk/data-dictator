import ConfigItems from '../types/connective/ConfigItems';

const getConfigItems = (token: string) => (
  fetch(`https://m5api.connective.com.au/api/mercury5/${token}/partnerconfig`)
    .then((response) => response.json()) as Promise<ConfigItems>
);

export default getConfigItems;
