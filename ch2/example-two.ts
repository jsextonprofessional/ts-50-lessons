function addVAT(price: number, vat: number = 0.2):
	number {
	return price * (1 + vat)
}

// vatPrice is of type 'number'
const vatPrice = addVAT(30, 0.2) // ok
console.log(vatPrice);

const vatPriceWithDefault = addVAT(30) // ok
console.log(vatPriceWithDefault);

const vatPriceWrong = addVAT('this is so', 'wrong')
console.log(vatPriceWrong);

// Not ok. We expect a nubmer for vat becasue of the default value. This piece causes errors.
const vatPriceErrors = addVAT(30, 'a string!')
console.log(vatPriceErrors);

// This, however, is not quite reasonable, but ok
const vatPriceAlsoWrong = addVAT('Hi, friends!')
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
let deliveryAddresses: string[] = [
	'421 Smashing Hill, 90210', 
	'221b Paw-ker Street', 
	'4347 Whiskers-ia Lane',
]
function printAddress(deliveryAddress: string) {
	console.log(deliveryAddress);
}

printAddress('90210');

// ok
deliveryAddresses.push('830 Expo Ave, DTX')
console.log(deliveryAddresses);
// not ok
deliveryAddresses.push(2000)
console.log(deliveryAddresses);


// const myName: any = 'Fritz the Cat' 
// myName.firstLetter.makeCapitals()
// console.log(myName);

// --------- LESSON 10 ------------
console.log(`--------- LESSON 10 ------------`);

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

function selectDeliveryAddress(addressOrIndex: any): 
	string {
		if(typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
		return deliveryAddresses[addressOrIndex] 
	}
	// Totally OK with any
	return addressOrIndex 
}
	// Oh no! This is totally OK in TypeScript, but
	// myFavouriteAddress is now string, even though we just // return true? This is going to blow up in runtime! 
const myFavouriteAddress = selectDeliveryAddress(true)
console.log(myFavouriteAddress);

// --------- LESSON 11 ------------
console.log(`--------- LESSON 11 ------------`);

// COMPOSITE TYPES

export type Article = { 
	title: string, 
	price: number, 
	vat: number, 
	stock?: number, 
	description?: string
}

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

function createArticleElement(
	article: { title: string, price: number, vat: number 
}): string {
	const title = article.title
	const price = addVAT(article.price, article.vat) 
	return `<h2>Buy ${title} for ${price}</h2>`
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

const movie: Article = { 
	title: 'Helvetica', 
	price: 6.78,
	vat: 0.19,
	stock: 1000,
	description: '90 minutes of gushing about Helvetica' 
}
console.log(createArticleElement(movie));


// createArticleElement({
// 	title: 'Design Systems by Alla Kholmatova', price: 20,
// 	vat: 0.19,
// 	rating: 5
// }) // Boom! rating is one property too many

// --------- LESSON 12 ------------
console.log(`--------- LESSON 12 ------------`);

// type Order = { 
// 	articles: {
// 		price: number, 
// 		vat: number, 
// 		title: number
// 	}[], 
// 	customer: {
// 		name: string, 
// 		address: { 
// 			city: string, 
// 			zip: string, 
// 			street: string, 
// 			number: string
// 		},
// 		dateOfBirth: Date 
// 	}
// }

// OR

// type ArticleStub = { 
// 	price: number, 
// 	vat: number, 
// 	title: string
// }

// type Address = { 
// 	city: string, 
// 	zip: string, 
// 	street: string, 
// 	number: string,
// }

// type Customer = { 
// 	name: string, 
// 	address: Address, 
// 	dateOfBirth: date
// }

// type Order = {
// 	articles: ArticleStub[],
// 	customer: Customer 
// }

// OR

type Order = typeof defaultOrder

const defaultOrder = { 
	articles: [
		{
			price: 1200.50,
			vat: 0.2,
			title: 'Macbook Air Refurbished - 2013'
		}, 
		{
			price: 9,
			vat: 0,
			title: 'I feel smashing subscription'
		} 
	],
	customer: {
		name: 'Fritz Furball', 
		address: {
			city: 'Smashing Hill', 
			zip: '90210',
			street: 'Whisker-ia Lane', 
			number: '1337'
		},
		dateOfBirth: new Date(2006, 9, 1) 
	}
}

function checkOrders(orders: Order[]) {
	let valid = true;
	for(let order of orders) {
		valid = valid && order.articles.length > 0
	}
	return valid
}

function isArticleInStock(article: Article) {
	// this check is necessary to make sure
	// the optional property exists 
	if(article.stock) {
		return article.stock > 0 
	}
	return false
}

// --------- LESSON 13 ------------
console.log(`--------- LESSON 13 ------------`);
class Discount { 
	isPercentage: boolean
	amount: number

	constructor(
		isPercentage: boolean, 
		amount: number) { 
		this.isPercentage = isPercentage 
		this.amount = amount
	}

	apply(article: Article) { 
		if(this.isPercentage) {
			article.price = article.price 
				- (article.price * this.amount)
		} else {
			article.price = article.price - this.amount
		} 
	}
}

// A discount that shaves off 10 EUR
let discount: Discount = new Discount(true, 0.2) 
discount.apply({
	price: 39,
	vat: 0.2,
	title: 'Form Design Patterns'
})

let allProductsTwentyBucks: Discount = {
	isPercentage: false,
	amount: 20,
	apply(article) {
		article.price = 20
	}
}

type DiscountType = {
	isPercentage: boolean,
	amount: number,
	apply(article: Article): void
}

let disco: DiscountType = new Discount(true, 0.2)

/**
* This class always gives 20 %, but only if 
* the price is not higher than 40 EUR
*/
// class TwentyPercentDiscount extends Discount { 
// 	// No special constructor
// 	constructor() {
// 		// But we call the super constructor of 
// 		// Discount
// 		super(true, 0.2)
// 	}

// 	apply(article: Article) { 
// 		if(article.price <= 40) {
// 			super.apply(article) 
// 		}
// 	} 
// }

// let disco1: Discount
// 	= new TwentyPercentDiscount() // OK
// let disco2: TwentyPercentDiscount
// 	= new Discount(true, 0.3) // OK! Semantics changed!

class TwentyPercentDiscount extends Discount { 
	constructor() {
		super(true, 0.2) 
	}
	
	apply(article: Article) { 
		if(this.isValidForDiscount(article)) {
		super.apply(article) 
		}
	}

	isValidForDiscount(article: Article) { 
		return article.price <= 40
	}
}

let disco1: Discount
	= new TwentyPercentDiscount() // Still OK
let disco2: TwentyPercentDiscount
	= new Discount(true, 0.3) // Error - we miss the `isValidForDiscount` method

console.log(Discount);
console.log(disco1);
console.log(disco2);

// --------- LESSON 14 ------------
console.log(`--------- LESSON 14 ------------`);

// Our Article type
type Article = { 
	title: string, 
	price: number,
	vat: number, 
	stock?: number, 
	description?: string
}
// Our friend’s ShopItem
interface ShopItem { 
	title: string; 
	price: number;
	vat: number;
	stock?: number; 
	description?: string;
} // And yes, the semicolons are optional

const discount = new Discount(true, 0.2)
const shopItem: ShopItem = {
	title: 'Inclusive components',
	price: 30,
	vat: 0.2
}
// Discount.apply is typed to take `Article`
// but also takes a `ShopItem` 
discount.apply(shopItem)
console.log(shopItem, Discount);


// Implementing Interfaces
class DVD implements ShopItem { 
	title: string
	price: number
	vat: number 
	constructor(title: string) {
	this.title = title
	this.price = 9.99
	this.vat = 0.2
	} 
}
// Implementing Types
class Book implements Article { 
	title: string
	price: number
	vat: number
	
	constructor(title: string) { 
		this.title = title
		this.price = 39
		this.vat = 0.2
	} 
}

// Nope, we missed the property `title`!
// class Book implements Article { 
// 	price: number
// 	vat: number

// 	constructor() { 
// 		this.price = 39 
// 		this.vat = 0.2
// 	} 
// }

let book = new Book('Art Direction on the Web')
discount.apply(book)
console.log(book, discount);


let dvd = new DVD('Contagion')
discount.apply(dvd)
console.log(dvd, discount);

interface ShopItem { 
	reviews: {
		rating: number,
		content: string 
	}[]
}

declare global { 
	interface Window {
		isDevelopment: boolean 
	}
}

class Discount { 
	...
	apply(article: Article) { 
		...
		// Here we check if we are in dev mode
		if(window.isDevelopment) { 
			console.log('Another discount applied')
		}
	}
}

// --------- POST-14 INTERLUDE ------------
console.log(`--------- POST-14 INTERLUDE ------------`);

// // PROPERTY ACCESS MODIFIERS
// class Article {
// 	public title: string // << access modifier
// 	private price: number // << access modifier
	
// 	constructor(title: string, price: number) { 
// 		this.title = title
// 		this.price = price
// 	} 
// }

// const article
// 	= new Article('Smashing Book 6', 39)

// console.log(article.price)

// class Article {
// 	#price: number

// 	constructor(price: number) {
// 		this.#price = price
// 	}
// }

// class Article {
// 	// This constructor sets properties 
// 	// automatically
	
// 	constructor(private price: number) { 
// 		// Nothing to do here, this.price is 
// 		// still available
// 	} 
// }

// // ABSTRACT CLASSES
// // something in between classes' and interfaces' implementations
// abstract class Discount {
// 	// This needs to be implemented
// 	abstract isValid(article: Article): boolean;

// 	// This is already implemented
// 	apply(article: Article) { 
// 		// Like before ...
// 	} 
// }

// // ENUMS
// // "enumerations" allow you to bundle type and use them throughout your code
// enum UserType { 
// 	Admin,
// 	PayingCustomer,
// 	Trial
// }

// function showWarning(user: UserType) { 
// 	switch(user) {
// 		case UserType.Admin:
// 			return false;
// 		case UserType.PayingCustomer:
// 			return false;
// 		case UserType.Trial:
// 			return false;
// 	}
// }