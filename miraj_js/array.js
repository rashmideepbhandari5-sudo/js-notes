//first array
let even_number = [2,4,6,8,10] 
console.log(even_number)

// //i want 8
console.log(even_number[3])

// // print each element of the array using for loop
// //  [2,4,6,8,10] length - 5 index suru 0 bata hunxa so total 0,1,2,3,4 garda nai sabai element access hunxa so <
for(i=0; i<even_number.length; i++)  //index starts from 0, length starts from 1
{
  console.log(even_number[i])
}

// for each to print all elements of array
even_number.forEach((x,y)=>{
  console.log(`${x} is at ${y} position`)
})


// //update sabal -> sabnam
let name_ = ["miraj", "sabal", "rashmi"]
name_[1] = "sabnam"
console.log(num)

// second array
let products = [
  {
    name: "Headphones",
    price: 2500,
    quantity: 15,
    category: "Electronics",
    features: ["Noise Cancelling", "Bluetooth 5.0", "Foldable Design"]
  },
  {
    name: "Notebook",
    price: 150,
    quantity: 100,
    category: "Stationery",
    features: ["Hardcover", "200 Pages", "A5 Size"]
  },
  {
    name: "T-shirt",
    price: 800,
    quantity: 40,
    category: "Clothing",
    features: ["100% Cotton", "Slim Fit", "Machine Washable"]
  }
];

// // to get t-shirt
let t_shirt_item = products[2]
console.log(t_shirt_item)

// to update notebook price
products[1].price="10000000"
console.log(products[1])

// to convert notebook 200 pages - 800 pages
products[1].features[1] = "800 pages"
console.log(products[1])

// delete the array item1 by destructurig
const[item1, ...restproducts] = products
console.log(restproducts)

// to delete the features from t-shirt by desctruturing
let {features, ...rest}=products[2]
products[2] = rest
console.log(products[2])


// some useful array methods
 const colour_name=["blue","green","yellow","red"];
 console.log(`the length of the array is ${colour_name.length}`);// give length of array
 console.log(`sort by alphabatical order: ${colour_name.sort()}`); // order in alphabetic or assending [blue,green,red,yellow]
 colour_name.pop() // removes last value from array 
 console.log(colour_name)
 colour_name.push("pinnk") // to add new item
 console.log(colour_name) 

 // to remove the item from aray by index
  colour_name.splice(2, 1); // remove item from 2 index 1 element
  console.log(colour_name)