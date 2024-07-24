let  getData= async()=> {
    let response  = await fetch('https://dummyjson.com/products')
    // console.log(response)
    let data = await response.json();
    // console.log(data.products)
    return data.products 

}
let displayData= async ()=>{
    let product = await getData()
    let htmlContent  = product.map((prod)=>{

        return `<div class="product">
    <h3>${prod.title}</h3>
    <img src="${prod.thumbnail}" alt="">
</div>

`
    }).join('')
    document.querySelector('.products').innerHTML = htmlContent
}

displayData()