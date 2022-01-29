import Opportunity from '../types/connective/Opportunity';
import OppRes from '../types/connective/OppRes';
import OppSearchParams from '../types/connective/OppSearchParams';
import OppUrlParams from '../types/connective/OppUrlParams';

const oppReq = (url : string, apiKey: string) => (
  fetch(url, { headers: { 'x-api-key': apiKey } })
    .then((r) => r.json()) as Promise<OppRes>
);

const getUrl = (count : number, offset: number, partnerId: string, token: string) => {
  const searchParams: OppSearchParams = {
    transactionType: 'Loan',
    statuses: [],
    user: [],
  };

  const urlParams: OppUrlParams = {
    search: 'true',
    count: count.toString(),
    offset: offset.toString(),
    searchParams: JSON.stringify(searchParams),
    currentGroupId: '',
    currentPartnerId: partnerId,
  };
  const urlParamsString = new URLSearchParams(urlParams).toString();
  return `https://apis.connective.com.au/maf/v1/${token}/opportunities?${urlParamsString}`;
};

const getOpportunities = async (
  token: string,
  partnerId: string,
  apiKey: string,
) : Promise<Opportunity[]> => {
  const initialRequest = await oppReq(getUrl(100, 0, partnerId, token), apiKey);
  const { totalCount } = initialRequest;
  const urls = Array.from(Array(Math.floor(totalCount / 100)).keys()).map((i) => (
    getUrl(100, (i + 1) * 100, partnerId, token)));
  const response = await Promise.all(urls.map((url) => oppReq(url, apiKey)));
  return [
    ...initialRequest.results,
    ...response.reduce((final : Opportunity[], r: OppRes) => [...final, ...r.results], []),
  ] as Opportunity[];
};

export default getOpportunities;
