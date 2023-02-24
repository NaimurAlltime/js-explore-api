// JavaScript Object Notation (JSON) 
const shop = {
    owner: 'Kamal Hossen',
    location: {
        street: 'House Building, Sector-6',
        city: 'Uttara',
        country: 'Bangladesh'
    },
    product: ['labtop', 'monitor', 'keyboard', 'mouse'],
    isOpen: true,
    isNew: false
}

// console.log(shop);
// convert to string 
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// convert to string to JSON 
const string = JSON.parse(shopJSON);
console.log(string);