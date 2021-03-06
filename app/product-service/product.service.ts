import { IProduct } from './../product';

export const PRODUCTS: IProduct[] = [
    {
        nameProduct: 'potatoes',
        codeProduct: '7501011119734',
        available: new Date('12/12/2016'),
        costProduct: 23.6,
        ratingProduct: 5,
        imageProduct: 'app/assets/images/potatoes.png'
    },{
        nameProduct: 'coca cola',
        codeProduct: '7501055300075',
        available: new Date('12/12/2016'),
        costProduct: 13.6,
        ratingProduct: 1,
        imageProduct: 'app/assets/images/coca-cola.png'
    },{
        nameProduct: 'oreo',
        codeProduct: '7501044400012',
        available: new Date('12/12/2016'),
        costProduct: 13.6,
        ratingProduct: 4,
        imageProduct: 'app/assets/images/oreo.png'
    }
];