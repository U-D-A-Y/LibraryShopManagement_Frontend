export class Customer {
    ADDRESS: string
    CUSTOMER_PK: number
    CUSTOMER_TYPE: number
    MAIL: string
    NAME: string
    PHONE: string


    constructor(option: any = {}) {
        this.CUSTOMER_PK = option.CUSTOMER_PK || null;
        this.NAME = option.NAME || null;
        this.ADDRESS = option.ADDRESS || null;
        this.CUSTOMER_TYPE = option.CUSTOMER_TYPE || null;
        this.MAIL = option.MAIL || null;
        this.PHONE = option.PHONE || null;
    }
}