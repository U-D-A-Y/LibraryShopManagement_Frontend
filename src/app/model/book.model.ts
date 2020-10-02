export class Book{
    BOOK_PK:number;
    BOOK_NAME:string;
    ISBN:string;
    CATEGORY_FK:number;
    CATEGORY_NAME:string;
    AUTHOR_NAME:string;
    PUBLICATION_BY_FK:number;
    PUBLICATION_NAME:string;
    PUBLICATION_YEAR:number;
    NUMBER_OF_PAGE:number;
    PRICE:number;
    QUANTITY:number;
    DESCRIPTION:String;
    

    constructor(option:any={}){
        this.BOOK_PK = option.BOOK_PK ? option.BOOK_PK :null;
        this.BOOK_NAME = option.BOOK_NAME ? option.BOOK_NAME :null;
        this.ISBN = option.ISBN ? option.ISBN :null;
        this.CATEGORY_FK= option.CATEGORY_FK ? option.CATEGORY_FK :null;
        this.CATEGORY_NAME = option.CATEGORY_NAME ? option.CATEGORY_NAME :null;
        this.AUTHOR_NAME = option.AUTHOR_NAME ? option.AUTHOR_NAME :null;
        this.PUBLICATION_BY_FK = option.PUBLICATION_BY_FK ? option.PUBLICATION_BY_FK :null;
        this.PUBLICATION_NAME = option.PUBLICATION_NAME ? option.PUBLICATION_NAME :null;
        this.PUBLICATION_YEAR = option.PUBLICATION_YEAR ? option.PUBLICATION_YEAR :null;
        this.NUMBER_OF_PAGE = option.NUMBER_OF_PAGE ? option.NUMBER_OF_PAGE :null;
        this.PRICE = option.PRICE ? option.PRICE :null;
        this.QUANTITY = option.QUANTITY ? option.QUANTITY :null;
        this.DESCRIPTION = option.DESCRIPTION || null;
    }
}