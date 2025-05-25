function btn() {
  var x = password;
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
var currentadmin = localStorage.getItem("currentLoggedinAdmin");
var currentcustomer = localStorage.getItem("currentLoggedinCustomer");

if (currentadmin || currentcustomer) {
  window.location.href = "../index.html";
}

function customerlog() {
  window.location = "./customersignup.html";
}
function adminlog() {
  window.location = "./adminsignup.html";
}

function adminsignup() {
  var adminName = document.getElementById("AdminName");
  var adminEmail = document.getElementById("AdminEmail");
  var adminpassword = document.getElementById("password");

  if (
    adminEmail.value == "" ||
    adminpassword.value == "" ||
    adminName.value == ""
  ) {
    alert("please fill all the fields");
  } else {
    var admindata = {
      adminName: adminName.value,
      adminEmail: adminEmail.value,
      adminpassword: adminpassword.value,
    };
    Swal.fire({
        title: "SignUp successful",
        icon: "success",
      }).then(() => {
        window.location.href = "../login/login.html";
      });
    

    var store = localStorage.getItem("adminData");
    if (store == null) {
      store = [admindata];
    } else {
      store = JSON.parse(store);
      store.push(admindata);
    }
    console.log("adminData", admindata);
    localStorage.setItem("adminData", JSON.stringify(store));
  }

  adminEmail.value = "";
  adminpassword.value = "";
  adminName.value = "";

  console.log(store.userid);
}
// breeak

function customersignup() {
  var customerName = document.getElementById("customerName");
  var customerEmail = document.getElementById("customerEmail");
  var customerpassword = document.getElementById("password");

  if (
    customerEmail.value == "" ||
    customerpassword.value == "" ||
    customerName.value == ""
  ) {
    alert("please fill all the fields");
  } else {
    var admindata = {
      customerName: customerName.value,
      customerEmail: customerEmail.value,
      customerpassword: customerpassword.value,
    };
    Swal.fire({
        title: "SignUp successful",
        icon: "success",
      }).then(() => {
        window.location.href = "../login/login.html";
      });

    var store = localStorage.getItem("customerData");
    if (store == null) {
      store = [admindata];
    } else {
      store = JSON.parse(store);
      store.push(admindata);
    }
    console.log("customerData", admindata);
    localStorage.setItem("customerData", JSON.stringify(store));
  }

  customerEmail.value = "";
  customerpassword.value = "";
  customerName.value = "";

  console.log(store.userid);
}
