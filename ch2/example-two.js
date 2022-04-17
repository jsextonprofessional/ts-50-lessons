function addVAT(price, vat) {
    if (vat === void 0) { vat = 0.2; }
    return price * (1 + vat);
}
// vatPrice is of type 'number'
var vatPrice = addVAT(30, 0.2); // ok
console.log(vatPrice);
var vatPriceWithDefault = addVAT(30); // ok
console.log(vatPriceWithDefault);
var vatPriceWrong = addVAT('this is so', 'wrong');
console.log(vatPriceWrong);
// Not ok. We expect a nubmer for vat becasue of the default value. This piece causes errors.
var vatPriceErrors = addVAT(30, 'a string!');
console.log(vatPriceErrors);
// This, however, is not quite reasonable, but ok
var vatPriceAlsoWrong = addVAT('Hi, friends!');
console.log(vatPriceAlsoWrong);
// deliveryAddress is 'any'
// let deliveryAddress
// deliveryAddress is of type string
// the moment we assign a value, the type gets more specific
// let deliveryAddress = '421 Smashing Hill, 90210'
// deliveryAddress is of type any
// let deliveryAddress: any = '421 Smashing Hill, 90210'
// deliveryAddress is of type string, // why assign a number?
// let deliveryAddress: string = 2;
// Type of deliveryAddresses is string[] (right hand)
// let deliveryAddresses = [ 
// 	'421 Smashing Hill, 90210', 
// 	'221b Paw-ker Street', 
// 	'4347 Whiskers-ia Lane',
// ]
// (left hand)
var deliveryAddresses = [
    '421 Smashing Hill, 90210',
    '221b Paw-ker Street',
    '4347 Whiskers-ia Lane',
];
function printAddress(deliveryAddress) {
    console.log(deliveryAddress);
}
printAddress('90210');
// ok
deliveryAddresses.push('830 Expo Ave, DTX');
console.log(deliveryAddresses);
// not ok
deliveryAddresses.push(2000);
console.log(deliveryAddresses);
// const myName: any = 'Fritz the Cat' 
// myName.firstLetter.makeCapitals()
// console.log(myName);
// --------- LESSON 10 ------------
console.log("--------- LESSON 10 ------------");
// function selectDeliverAddress(addressOrIndex: any) {
// if(typeof addressOrIndex === 'number') {
// 	return deliveryAddresses[addressOrIndex]
// }
// if(typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
// return deliveryAddresses[addressOrIndex]
// }
// console.log(addressOrIndex.toFixed(2));
// console.log(addressOrIndex * 2 + 3);
// return addressOrIndex
// }
// selectDeliverAddress(deliveryAddresses[1])
function selectDeliveryAddress(addressOrIndex) {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
        return deliveryAddresses[addressOrIndex];
    }
    // Totally OK with any
    return addressOrIndex;
}
// Oh no! This is totally OK in TypeScript, but
// myFavouriteAddress is now string, even though we just // return true? This is going to blow up in runtime! 
var myFavouriteAddress = selectDeliveryAddress(true);
console.log(myFavouriteAddress);
// --------- LESSON 11 ------------
console.log("--------- LESSON 11 ------------");
// const book: Article = {
// 	title: 'Form Design Patterns by Adam Silver', 
// 	price: 32.77,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: 'A practical book on accessibility and forms'
// }
// const movie: Article = { 
// 	title: 'Helvetica', 
// 	price: 6.69,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: '90 minutes of gushing about Helvetica' 
// }
// error: missing 'description' property
// const movie: Article = { 
// 	title: 'Helvetica', 
// 	price: 6.69,
// 	vat: 0.19,
// 	stock: 1000,
// }
// error: extra property 'rating' not allowed
// const movie: Article = { 
// 	title: 'Helvetica', 
// 	price: 6.69,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: '90 minutes of gushing about Helvetica', 
// 	rating: 5
// }
// error: extra property 'rating' not allowed
// const movBackup = { 
// 	title: 'Helvetica', 
// 	price: 6.69,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: '90 minutes of gushing about Helvetica', 
// 	rating: 5
// }
// error goes away if i add the following
// const movie: Article = movBackup // Totally ok now
// type ShopItem = { 
// 	title: string, 
// 	price: number,
// 	vat: number,
// 	stock: number, 
// 	description: string, 
// 	rating: number
// }
// const shopitem = { 
// 	title: 'Helvetica', 
// 	price: 7.77,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: '90 minutes of gushing about Helvetica', 
// 	rating: 5
// }
// const movie: Article = shopitem // totally ok
// const missingProperties = {
// 	title: 'Helvetica',
// 	price: 9.87
// }
// const anotherMovie: Article = missingProperties
// OBJECTS AS PARAMETERS
// function createArticleElement(article: Article): 
// string {
// 	const title = article.title
// 	const price = addVAT(article.price, article.vat) 
// 	return `<h2>Buy ${title} for ${price}</h2>`
// }
function createArticleElement(article) {
    var title = article.title;
    var price = addVAT(article.price, article.vat);
    return "<h2>Buy ".concat(title, " for ").concat(price, "</h2>");
}
// const shopitem = { 
// 	title: 'Helvetica', 
// 	price: 6.78,
// 	vat: 0.19,
// 	stock: 1000,
// 	description: '90 minutes of gushing about Helvetica',
// 	rating: 5 
// }
// createArticleElement(shopitem) // Totally ok
var movie = {
    title: 'Helvetica',
    price: 6.78,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica'
};
console.log(createArticleElement(movie));
// createArticleElement({
// 	title: 'Design Systems by Alla Kholmatova', price: 20,
// 	vat: 0.19,
// 	rating: 5
// }) // Boom! rating is one property too many
