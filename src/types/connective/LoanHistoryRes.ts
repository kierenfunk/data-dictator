import LoanHistory from './LoanHistory';

type LoanHistoryRes = {
  success: boolean
  total: number
  loanHistoryList: LoanHistory[]
};

export default LoanHistoryRes;
