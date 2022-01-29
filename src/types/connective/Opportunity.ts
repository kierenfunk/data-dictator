type Opportunity = {
  uniqueId: string
  isDeleted: boolean
  createdOn: number
  amount: number
  lender: string
  lenderNameShort: string
  lenderDisplayName: string
  status: string
  transactionType: string
  personActingName: string
  personResponsibleName: string
  partnerName: string
  statusLastUpdated: number
  lastUpdated: number
  opportunityName: string
};

export default Opportunity;
