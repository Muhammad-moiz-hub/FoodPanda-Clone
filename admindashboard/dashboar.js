var formWrapper = document.getElementById("formWrapper");

function addItem() {
  var isHidden = formWrapper.classList.contains("hidden");

  if (isHidden) {
    formWrapper.classList.remove("hidden");
    requestAnimationFrame(() => {
      formWrapper.classList.remove("scale-0", "opacity-0");
      formWrapper.classList.add("scale-100", "opacity-100");
    });
  } else {
    formWrapper.classList.remove("scale-100", "opacity-100");
    formWrapper.classList.add("scale-0", "opacity-0");
    setTimeout(() => {
      formWrapper.classList.add("hidden");
    }, 300);
  }
}

var currentadmin = JSON.parse(localStorage.getItem("currentLoggedinAdmin"));
var currentcustomer = JSON.parse(localStorage.getItem("currentLoggedinCustomer")); // ✅ Added this line

var username = document.getElementById("username");
var getbtn = document.getElementById("btn");

if (currentadmin && username) {
  username.innerHTML = currentadmin.adminName.toUpperCase();
}

if (currentadmin) {
  getbtn.innerHTML = "logout";
  getbtn.onclick = logout;
} else if (currentcustomer) {
  getbtn.innerHTML = "logout";
  getbtn.onclick = logout;
} else {
  getbtn.innerHTML = "Login/Signup";
  getbtn.onclick = signuppage;
}

function logout() {
  if (currentadmin) {
    localStorage.removeItem("currentLoggedinAdmin");
    getbtn.innerHTML = "Login/Signup";
    getbtn.onclick = signuppage;
    window.location = "../index.html";
  } else {
    localStorage.removeItem("currentLoggedinCustomer");
    getbtn.innerHTML = "Login/Signup";
    getbtn.onclick = signuppage;
    window.location = "../index.html";
  }
}
function submit() {
  var itemName = document.getElementById("itemName");
  var itemUrl = document.getElementById("itemUrl");
  var itemDis = document.getElementById("itemDis");
  var itemPrice = document.getElementById("itemPrice");

  if (
    itemName.value.trim() === "" ||
    itemDis.value.trim() === "" ||
    itemUrl.value.trim() === "" ||
    itemPrice.value.trim() === ""
  ) {
    alert("Please enter all fields");
    return;
  }

  // Unique ID for each product
  var itemId = "item_" + new Date().getTime();

  var itemdata = {
    id: itemId,
    itemName: itemName.value,
    itemUrl: itemUrl.value,
    itemDis: itemDis.value,
    itemPrice: itemPrice.value,
  };

  var itemstore = JSON.parse(localStorage.getItem("productlist")) || [];
  itemstore.push(itemdata);
  localStorage.setItem("productlist", JSON.stringify(itemstore));

  var setitem = document.getElementById("setitem");

  setitem.innerHTML += `
    <div id="${itemdata.id}" class="md:w-full max-w-sm bg-white border border-pink-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#" class="flex justify-center items-center">
        <img class="p-3 md:p-8 rounded-t-lg" src="${itemdata.itemUrl}" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${itemdata.itemName}</h5>
        <h5 class="text-md tracking-tight text-gray-700 dark:text-gray-300">${itemdata.itemDis}</h5>
      </div>
      <div class="flex items-center justify-around">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS: ${itemdata.itemPrice}</span>
        <button onclick="deleteItem('${itemdata.id}')" class="delete-btn text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Delete
        </button>
      </div>
    </div>
  `;

  itemName.value = "";
  itemDis.value = "";
  itemUrl.value = "";
  itemPrice.value = "";
}


function signuppage() {
  window.location = "../login/login.html"; 
}
function deleteItem(id) {
  
  var card = document.getElementById(id);
  if (card) {
    card.remove();
  }

  // Remove from localStorage
  var itemstore = JSON.parse(localStorage.getItem("productlist")) || [];
  var updatedStore = itemstore.filter(item => item.id !== id);
  localStorage.setItem("productlist", JSON.stringify(updatedStore));
}
function loadItemsFromStorage() {
  var itemstore = JSON.parse(localStorage.getItem("productlist")) || [];
  var setitem = document.getElementById("setitem");
  setitem.innerHTML = ""; // Clear existing items

  itemstore.forEach(itemdata => {
    setitem.innerHTML += `
      <div id="${itemdata.id}" class="md:w-full max-w-sm bg-white border border-pink-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#" class="flex justify-center items-center">
          <img class="p-3 md:p-8 rounded-t-lg" src="${itemdata.itemUrl}" alt="product image" />
        </a>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${itemdata.itemName}</h5>
          <h5 class="text-md tracking-tight text-gray-700 dark:text-gray-300">${itemdata.itemDis}</h5>
        </div>
        <div class="flex items-center justify-around">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">RS: ${itemdata.itemPrice}</span>
          <button onclick="deleteItem('${itemdata.id}')" class="delete-btn text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Delete
          </button>
        </div>
      </div>
    `;
  });
}
window.onload = function () {
  loadItemsFromStorage();
};
var getcurrentadmin=localStorage.getItem("currentLoggedinAdmin")
if(getcurrentadmin==null){
      window.location = "../index.html";

}