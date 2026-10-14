// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => {
  const addRow = document.createElement("tr");
  addRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(addRow);

  //Delete Button section

  let deleteButton = addRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    addRow.remove();
  });

  //Like Button section

  let likeButton = addRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
// let addRandomContact = document.querySelector("#btn-add-random");
// console.log(addRandomContact);

buttonAddRandom.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomNum, 1);
  console.log(randomContact);
  const addNewRow = document.createElement("tr");
  addNewRow.innerHTML = `
  <td>
    <img src="${randomContact[0].pictureUrl}" />
  </td>
  <td> ${randomContact[0].name} </td>
  <td> ${randomContact[0].popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(addNewRow);
  let deleteButton = addNewRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    addNewRow.remove();
  });

  let likeButton = addNewRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });
});
