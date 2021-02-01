// "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     "geo": {
//       "lat": "-43.9509",
//       "lng": "-34.4618"
//     }

export interface Address {
    street: string;
    city: string;
    geo: {
        lat: string,
        lng: string
    }

}