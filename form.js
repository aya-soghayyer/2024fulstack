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
  console.log(users);
  console.log("hhhhh")
  let username= localStorage.setItem('Username', user)
  // let useremail =localStorage.setItem('Useremail', users.email)
  // let userage =localStorage.setItem('Userage', users.age)
  // let Userpass=localStorage.setItem('Userpass', users.password)
  
  printInTable();
};

const printInTable=()=>{
  let userInfo = localStorage.getItem('Users')
  userInfo = userInfo.split(',')
  const result = userInfo.map(user=>{
    `<tr>
        <td> ${user[0].name} </td>
        <td>${user[1].email}</td>
        <td>${user[2].age}</td>
        <td>${user[3].password}</td>
    </tr>
        `;
  }) 
  tbody.innerHTML= result

}





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

