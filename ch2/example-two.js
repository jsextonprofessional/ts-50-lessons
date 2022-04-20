"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
// --------- LESSON 12 ------------
console.log("--------- LESSON 12 ------------");
var defaultOrder = {
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
};
function checkOrders(orders) {
    var valid = true;
    for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
        var order = orders_1[_i];
        valid = valid && order.articles.length > 0;
    }
    return valid;
}
function isArticleInStock(article) {
    // this check is necessary to make sure
    // the optional property exists 
    if (article.stock) {
        return article.stock > 0;
    }
    return false;
}
// --------- LESSON 13 ------------
console.log("--------- LESSON 13 ------------");
var Discount = /** @class */ (function () {
    function Discount(isPercentage, amount) {
        this.isPercentage = isPercentage;
        this.amount = amount;
    }
    Discount.prototype.apply = function (article) {
        if (this.isPercentage) {
            article.price = article.price
                - (article.price * this.amount);
        }
        else {
            article.price = article.price - this.amount;
        }
    };
    return Discount;
}());
// A discount that shaves off 10 EUR
var discount = new Discount(true, 0.2);
discount.apply({
    price: 39,
    vat: 0.2,
    title: 'Form Design Patterns'
});
var allProductsTwentyBucks = {
    isPercentage: false,
    amount: 20,
    apply: function (article) {
        article.price = 20;
    }
};
var disco = new Discount(true, 0.2);
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
var TwentyPercentDiscount = /** @class */ (function (_super) {
    __extends(TwentyPercentDiscount, _super);
    function TwentyPercentDiscount() {
        return _super.call(this, true, 0.2) || this;
    }
    TwentyPercentDiscount.prototype.apply = function (article) {
        if (this.isValidForDiscount(article)) {
            _super.prototype.apply.call(this, article);
        }
    };
    TwentyPercentDiscount.prototype.isValidForDiscount = function (article) {
        return article.price <= 40;
    };
    return TwentyPercentDiscount;
}(Discount));
var disco1 = new TwentyPercentDiscount(); // Still OK
var disco2 = new Discount(true, 0.3); // Error - we miss the `isValidForDiscount` method
console.log(Discount);
console.log(disco1);
console.log(disco2);
// --------- LESSON 14 ------------
console.log("--------- LESSON 14 ------------");
var discount = new Discount(true, 0.2);
var shopItem = {
    title: 'Inclusive components',
    price: 30,
    vat: 0.2
};
// Discount.apply is typed to take `Article`
// but also takes a `ShopItem` 
discount.apply(shopItem);
console.log(shopItem, Discount);
// Implementing Interfaces
var DVD = /** @class */ (function () {
    function DVD(title) {
        this.title = title;
        this.price = 9.99;
        this.vat = 0.2;
    }
    return DVD;
}());
// Implementing Types
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
        this.price = 39;
        this.vat = 0.2;
    }
    return Book;
}());
// Nope, we missed the property `title`!
var Book = /** @class */ (function () {
    function Book() {
        this.price = 39;
        this.vat = 0.2;
    }
    return Book;
}());
var book = new Book('Art Direction on the Web');
discount.apply(book);
console.log(book, discount);
var dvd = new DVD('Contagion');
discount.apply(dvd);
console.log(dvd, discount);
