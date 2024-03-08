    

let links = document.querySelectorAll("a")
links.forEach(link => {
    link.onclick = displayData;
})


// for (let i = 0 ; i<links.length ; i++)
// links[i].onclick = displayData;

async function fetchData(e){
    let recipe =(e? e.target.dataset.name : "pizza") ;
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
    const data = await response.json();
    return data.recipes
}



async function displayData(e){
    const recipes = await fetchData(e)
    let result = recipes.map(function (recipe){
            
        return `
            <br/><br/>
            <h3>${recipe.title}</h3>
            <p>${recipe.publisher}</p>
            <a href="${recipe.source_url}" style="display: block"> click for the source</a>
            <img src="${recipe.image_url}" alt=""/>
            
            
            `
    }).join("")
    // console.log(posts)
    // console.log(result)
    document.querySelector(".posts").innerHTML = result      

}

displayData()


let nav = document.querySelector("nav")

 window.onscroll= function(){
    if(window.scrollY >200)
    nav.classList.add("navv")
    else {
        nav.classList.remove("navv")
    }
}

