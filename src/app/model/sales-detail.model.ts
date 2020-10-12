export class SalesDetail {
    TRN_NO: number
    COMMISSION: number
    CUSTOMER_NAME: String
    DATE: Date
    NET_TOTAL: number
    TOTAL: number
  


    constructor(option: any = {}) {
        this.TRN_NO = option.TRN_NO || 0;
        this.COMMISSION = option.COMMISSION || null;
        this.CUSTOMER_NAME = option.CUSTOMER_NAME || '';
        this.DATE = option.DATE ? new Date(option.DATE) : null;
        this.NET_TOTAL = option.NET_TOTAL || 0;
        this.TOTAL = option.TOTAL ||0;
    }
}