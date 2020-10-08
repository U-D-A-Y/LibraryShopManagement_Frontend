export class Category {

    CATEGORY_PK: String
    NAME: String
    DESCRIPTION: String

    constructor(options:any = {}) {
        this.DESCRIPTION= options.DESCRIPTION||null
        this.NAME = options.NAME||null
        this.CATEGORY_PK = options.CATEGORY_PK||null

    }
}