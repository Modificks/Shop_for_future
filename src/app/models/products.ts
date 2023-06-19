// {
//     "id": 7,
//     "title": "Яблуко",
//     "price": 40,
//     "image": "assests/images/yabluko.jpeg",
//     "configure":{
//         "place": "Україна",
//         "date": "11.06.2023"
//     }
// }

export interface IProducts {
    id: number,
    title: string,
    price: string,
    sort: string,
    image?: string,
    configure: IProductsConfig;
}

export interface IProductsConfig {
    place: string,
    date: string,
}