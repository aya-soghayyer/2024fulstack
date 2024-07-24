// const { json } = require("express");

var tbody = document.querySelector("tbody");
var users = [];
var formm = document.querySelector("form");
formm.onsubmit = function (e) {
  e.preventDefault();

  var user = {
    name: e.target.elements[0].value,
    email: e.target.elements[1].value,
    age: e.target.elements[2].value,
    password: e.target.elements[3].value
  };
  users.push(user);
  localStorage.setItem('Username', JSON.stringify(users))
  
 printInTable();
};

const printInTable=()=>{
  let userInfo =JSON.parse( localStorage.getItem('Username'))
  console.log(userInfo)
  console.log(` this is print in table: ${users[0].age}`)
  // const result = userInfo.map(user=>{
  //   `<tr>
  //       <td> ${user[0].name} </td>
  //       <td>${user[0].email}</td>
  //       <td>${user[0].age}</td>
  //       <td>${user[0].password}</td>
  //   </tr>
  //       `;
  // }) 
  let result =``
  for(let i = 0 ; i<userInfo.length  ; i++){
    result +=  `<tr>
          <td> ${userInfo[i].name} </td>
          <td>${userInfo[i].email}</td>
          <td>${userInfo[i].age}</td>
          <td>${userInfo[i].password}</td>
       </tr>`
  }
  document.querySelector('tbody').innerHTML = result
}

printInTable()




// function printInTable() {
//   var data = "";
//   let userInfo = localStorage.getItem('Users')
//   userInfo = userInfo.split(',')
//   for (var i = 0; i < users.length; i++) {
//     data += `
//         <tr>
//         <td> ${users[i].name} </td>
//         <td>${users[i].email}</td>
//         <td>${users[i].age}</td>
//         <td>${users[i].password}</td>
//     </tr>
//         `;
//   }
//   tbody.innerHTML= data
  

// }

