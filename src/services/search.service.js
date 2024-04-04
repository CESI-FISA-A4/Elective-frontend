export default async function getRestaurantList (name){
    const img = '../../assets/product.svg';
    const title = 'menu TEST';
    const description = 'test test test plop plop';
    const price = '13,49';
    const rate = '4';
    const page = '1';
    const value = [img, title, description, price, rate, page];
    const response = [value, value, value, value, value, value, value]
    return response;
}
