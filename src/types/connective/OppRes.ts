import Opportunity from './Opportunity';

type OppRes = {
  totalCount: number
  count: number
  offset: number
  volume: number
  results: Opportunity[]
};

export default OppRes;
