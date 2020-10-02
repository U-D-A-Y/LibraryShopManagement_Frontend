export class Publisher {
    ADDRESS: String
    DESCRIPTION: String
    NAME: String
    PHONE: String
    PUBLISHER_PK: Number
    constructor(options:any = {}) {
        this.ADDRESS = options.ADDRESS||null
        this.DESCRIPTION= options.DESCRIPTION||null
        this.NAME = options.NAME||null
        this.PHONE = options.PHONE||null
        this.PUBLISHER_PK = options.PUBLISHER_PK||null
    }
}