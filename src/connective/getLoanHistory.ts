import LoanHistory from '../types/connective/LoanHistory';
import LoanHistoryRes from '../types/connective/LoanHistoryRes';

const getLoanHistory = async (token: string, oppId: string): Promise<LoanHistory[]> => {
  const url = `https://m5api.connective.com.au/api/mercury5/${token}/loanHistory?loanId=${oppId}`;
  const result: LoanHistoryRes = await fetch(url)
    .then((response) => response.json()) as LoanHistoryRes;
  return result.loanHistoryList;
};

export default getLoanHistory;
