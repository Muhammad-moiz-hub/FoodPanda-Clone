var product_array = [
  {
    p_name: "biryani",
    p_price: "600",
    p_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
    p_details: "Fragrant rice with chicken Biryani.",
  },
  {
    p_name: "Karahi",
    p_price: "1100",
    p_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKKdJ2GCIAwSgaJSQ2Th_o2ZC-jwtOffc4g&s",
    p_details: "Spicy wok-cooked chicken Karahi.",
  },
  {
    p_name: "biryani",
    p_price: "600",
    p_img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
    p_details: "Fragrant rice with chicken Biryani.",
  },
];
var trenditems = document.getElementById("trenditem");
for (var i = 0; i < product_array.length; i++) {
  trenditems.innerHTML += `

            <div id='card'
                class=" md:w-full max-w-sm bg-white border border-pink-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex justify-center items-center">
                    <img class="p-3 md:p-8 rounded-t-lg" src=${product_array[i].p_img} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product_array[i].p_name}</h5>
                    </a>
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product_array[i].p_details}</h5>
                    </a>
                      
                    </div>
                    <div class="flex items-center justify-around">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS: ${product_array[i].p_price}</span>
                        <a href="#"
                            class="text-white bg-[#db3274] mb-2 hover:bg-[#901c48] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                            to cart</a>
                    </div>
                </div>
            </div>

        </div>
    </div>`;
}

var getbtn = document.getElementById("btn");
var probtn = document.getElementById("probtn");
var currentadmin = localStorage.getItem("currentLoggedinAdmin");
var currentcustomer = localStorage.getItem("currentLoggedinCustomer");

if (currentadmin) {
  probtn.style.display = "flex";
  getbtn.innerHTML = "logout";
  getbtn.onclick = logout;
} else if (currentcustomer) {
  getbtn.innerHTML = "logout";
  getbtn.onclick = logout;
} else {
  getbtn.innerHTML = "Login/Signup";
  getbtn.onclick = signuppage;
  probtn.style.display = "none";
}

function signuppage() {
  window.location = "../signup/customersignup.html";
}

function logout() {
  if (currentadmin) {
    localStorage.removeItem("currentLoggedinAdmin");
    getbtn.innerHTML = "Login/Signup";
    getbtn.onclick = signuppage;
    probtn.style.display = "none";
  } else {
    localStorage.removeItem("currentLoggedinCustomer");
    getbtn.innerHTML = "Login/Signup";
    getbtn.onclick = signuppage;
    probtn.style.display = "none";
  }
}

function dashboard() {
  window.location = "../admindashboard/dashboard.html";
}

var itemstore = localStorage.getItem("productlist");
var card = JSON.parse(itemstore);

if (card != null && card.length != 0) {
  var Adminitems = document.getElementById("Adminitems");
  var Admindiv = (document.getElementById("Admindiv").style.display = "block");
  for (var i = 0; i < card.length; i++) {
    Adminitems.innerHTML += `<div id='card'
                class=" md:w-full max-w-sm bg-white border border-pink-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex justify-center items-center">
                    <img class="p-3 md:p-8 rounded-t-lg" src=${card[i].itemUrl} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${card[i].itemName}</h5>
                    </a>
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${card[i].itemDis}</h5>
                    </a>
                      
                    </div>
                    <div class="flex items-center justify-around">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS: ${card[i].itemPrice}</span>
                        <a href="#"
                            class="text-white bg-[#db3274] mb-2 hover:bg-[#901c48] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                            to cart</a>
                    </div>
                </div>
            </div>

        </div>
    </div>`;
  }
}
function search() {
  trenditems.innerHTML = "";
  var getsearch = document.getElementById("search");
  var searchitem = product_array.filter((data) => {
    return data.p_name == getsearch.value;
  });

  for (var k = 0; k < searchitem.length; k++) {
    trenditems.innerHTML += `

            <div id='card'
                class=" md:w-full max-w-sm bg-white border border-pink-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#" class="flex justify-center items-center">
                    <img class="p-3 md:p-8 rounded-t-lg" src=${searchitem[k].p_img} alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${searchitem[k].p_name}</h5>
                    </a>
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${searchitem[k].p_details}</h5>
                    </a>
                      
                    </div>
                    <div class="flex items-center justify-around">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">RS: ${searchitem[k].p_price}</span>
                        <a href="#"
                            class="text-white bg-[#db3274] mb-2 hover:bg-[#901c48] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                            to cart</a>
                    </div>
                </div>
            </div>

          </div>
      </div>`;
  }
}
