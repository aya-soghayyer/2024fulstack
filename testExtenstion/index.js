async function fetchData() {
    const res = await fetch ('https://dummyjson.com/recipes');
    const record = await res.json();
    document.getElementById("id").innerHTML=record.recipes[0].id;
    document.getElementById("name").innerHTML=record.recipes[0].name;
    document.getElementById("caloriesPerServing").innerHTML=record.recipes[0].caloriesPerServing;
    document.getElementById("prepTimeMinutes").innerHTML=record.recipes[0].prepTimeMinutes;
}
fetchData();

console.log("hi")