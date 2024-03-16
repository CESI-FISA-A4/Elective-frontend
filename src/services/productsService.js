class ProductService{
    static data = [
        {id: 1, type: "Voiture", label: "Peugeot 308", price: 12000, color: "Rouge"},
        {id: 2, type: "Montre", label: "Rolex", price: 850, color: "Verte"},
        {id: 3, type: "Veste", label: "Veste en cuir", price: 75, color: "Noire"},
        {id: 4, type: "Informatique", label: "Iphone 1 pour pigeon", price: 225, color: "Violet"},
        {id: 5, type: "Informatique", label: "Iphone 2 pour pigeon", price: 1000, color: "Violet"},
        {id: 6, type: "Informatique", label: "Iphone 3 pour pigeon", price: 1500, color: "Violet"},
        {id: 7, type: "Informatique", label: "Iphone 4 pour pigeon", price: 2000, color: "Violet"},
        {id: 8, type: "Informatique", label: "Iphone 5 pour pigeon", price: 2500, color: "Violet"},
        {id: 9, type: "Informatique", label: "Iphone 6 pour pigeon", price: 3000, color: "Violet"},
        {id: 10, type: "Informatique", label: "Iphone 7 pour pigeon", price: 3500, color: "Violet"},
        {id: 11, type: "Informatique", label: "Iphone 8 pour pigeon", price: 4000, color: "Violet"},
        {id: 12, type: "Informatique", label: "Iphone 9 pour pigeon", price: 4500, color: "Violet"},
        {id: 13, type: "Informatique", label: "Iphone 10 pour pigeon", price: 5000, color: "Violet"},
        {id: 14, type: "Informatique", label: "Iphone beaucoup pour pigeon", price: 5500, color: "Violet"}
    ]

    static types = [
        {value: "Voiture"},
        {value: "Gaming"},
        {value: "Montre"},
        {value: "Veste"},
        {value: "Informatique"}
    ]

    static colors = [
        {value: "Rouge"},
        {value: "Noire"},
        {value: "Bleu"},
        {value: "Rose"},
        {value: "Violet"},
        {value: "Verte"},
        {value: "Blanc"}
    ]

    getTypes(){
        return new Promise((res, rej) => {
            res(ProductService.types);
        })
    }

    
    getColors(){
        return new Promise((res, rej) => {
            res(ProductService.colors);
        })
    }

    getAllProducts(){
        return new Promise((res, rej) => {
            res(ProductService.data);
        })
    }

    getProductById(id){
        return new Promise(async(res, rej) => {
            let data = await this.getAllProducts();
            res(data.find((p) => p.id === id));
        })
    }

    addProduct(product){
        return new Promise(async(res, rej) => {
            let newId = ProductService.data.length ? ProductService.data[ProductService.data.length-1].id+1 : 1;
            ProductService.data.push({...product, id: newId});
            res();
        })
    }

    editProductById(id, productUpdated){
        return new Promise(async(res, rej) => {
            for (let i = 0; i < ProductService.data.length; i++) {
                const product = ProductService.data[i];
                if(product.id === id){
                    ProductService.data[i] = productUpdated;
                    res();
                }
            }
            res();
        })
    }

    removeProductById(id){
        return new Promise(async(res, rej) => {
            ProductService.data = ProductService.data.filter((p) => p.id !== id);
            res();
        })
    }
}

export default ProductService;