// setTimeout(
//     ()=>{
//         console.log("hello")
//     },5000)

// setInterval( ()=>{
//     console.log("you can do it ")
// },2000)

const getProducts = async ()=>{
    const response=await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data.products;
}

const displayProduct = async ()=>{
    const products = await  getProducts();
    console.log(products)
    const result = products.map(product=>
        `<h3>${product.title}</h3>
        <img src="${product.thumbnail}" alt="">
    `).join('')
    document.querySelector(".product-container").innerHTML += result
    document.querySelector(".overlay").classList.add("d-none") 
}

displayProduct();


