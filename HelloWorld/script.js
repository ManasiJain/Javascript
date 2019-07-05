function GetProductDetails(){
let productName = 'Manasi\'s water bottle';
let productId = "P01";
let productSize = "5m",
    productColour = "Blue",
    productPrice = 5.1,
    productPrice2 = 3.3,
    productPrice3 = 0,
    isAvailable = true,
    noValueVariable;

let multipleProductIds = [1,2,3];
let multipleProductNames = ['Purse','Bag','Shoes'];
// console.log("Product Name: " + productName);
// console.log("Product Id: " + productId);
// console.log("Product Sze: " + productSize);
// console.log("Product Colour: " + productColour);
// console.log("Product Price: " + productPrice);
// console.log("Product Total Price: " + productPrice + productPrice2);
// console.log(productPrice + productPrice2);
// console.log(typeof(productName));
// console.log(typeof(productPrice));
// console.log(productPrice / productPrice3);
// console.log(productPrice3 / productPrice3);
// console.log(isAvailable, typeof(isAvailable));
// console.log(noValueVariable, typeof(noValueVariable));
// noValueVariable = null;
// console.log(noValueVariable, typeof(noValueVariable));
// console.log(multipleProductIds[0]);
// console.log(multipleProductIds[1]);
// console.log(multipleProductIds[2]);
// console.log(multipleProductIds[3]);
// console.log(multipleProductIds, typeof(multipleProductIds));
console.log(multipleProductNames[0]);
console.log(multipleProductNames[1]);
console.log(multipleProductNames[2]);
console.log(multipleProductNames[3]);
console.log(multipleProductNames, typeof(multipleProductNames));
console.log(multipleProductNames.length);
multipleProductNames.push('Socks');
console.log(multipleProductNames, typeof(multipleProductNames));
console.log(multipleProductNames.length);
let poppedItem = multipleProductNames.pop();
console.log(poppedItem);
console.log(multipleProductNames, typeof(multipleProductNames));
console.log(multipleProductNames.length);
poppedItem = multipleProductNames.shift();
console.log(poppedItem, multipleProductNames)
multipleProductNames.push('Socks');
multipleProductNames.push('Purse');
console.log(multipleProductNames);
multipleProductNames.splice(0,1 , 'Mike');
console.log(multipleProductNames);






/* Commented code below:
console.log("Product Name: " + productName, "Product Id: " + productId, "Product Sze: " + productSize, "Product Colour: " + productColour);*/
}

function conditionTest(){
    if(5===5)
        console.log('Yes');
    if(5>5)
        console.log('No');
    if(5>=5)
        console.log('Yes');

    let state = 'NY',
        taxPercent = 0;

    if(state !== 'FL')
        taxPercent= 3;
    console.log(taxPercent);

    switch(state)
    {
        case 'FL' : console.log('Florida');
                    break;
        case 'TX' : console.log('Texas');
                    break;
        case 'CL' : console.log('California');
                    break;
        default   : console.log('Unknown');
                    break;
    }

    for (let i=0;i<5;i++)
        console.log(i);
    let p = 0;
    while(p<3)
    {
        console.log(p);
        p++;
    }
}

let person = [{
    name: 'John',
    age: 32,
    partTime: false
},
{
    name: 'Mike',
    age: 38,
    partTime: true
}
];

function changePersonAge(person){
    person.age = 42;
}
function objectTest(){
    
    console.log(person[1].name);
    console.log(person[1].partTime);
    console.log(person[1].age);
    //changePersonAge(person);
    //console.log('New Age: '+ person.age);
}

let paragraph = document.getElementById('someText');
paragraph.innerText = 'Hello Manasi Jain!'

let changeColourButton = document.getElementById('change-colour');
changeColourButton.addEventListener('click', function(){
  let pageObject =  document.getElementById('completePage');
    pageObject.style.backgroundColor = 'pink';
    paragraph.innerText = 'Button Clicked!';
    paragraph.style.display = 'none';
    //paragraph.style.display = 'block';
});