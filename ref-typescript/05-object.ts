interface IProduct {
    name: string, 
    price?: number,  //optional
    onSale: boolean, 
}


const Product : IProduct = {
    name: '',
    // price: undefined,
    onSale: true
}

console.log(Product)