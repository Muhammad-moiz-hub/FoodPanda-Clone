var checkbox = document.getElementById("checkbox");

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

var loginEmail = document.getElementById("loginEmail");
var loginpassword = document.getElementById("password");

function login() {
  var storedata = JSON.parse(localStorage.getItem("adminData"));
  var customerData = JSON.parse(localStorage.getItem("customerData"));
  if (storedata == null && customerData == null) {
    alert("account Not found");
  }
  var userfound = storedata.find(function (user) {
    return (
      user.adminEmail == loginEmail.value &&
      user.adminpassword == loginpassword.value
    );
  });
  console.log(storedata);
  if (loginEmail.value == "" && loginpassword.value == "") {
    alert("plz enter all fields");
  } else {
    if (userfound) {
      Swal.fire({
        title: "login successful",
        icon: "success",
      }).then(() => {
        window.location = "../index.html";
      });
      localStorage.setItem("currentLoggedinAdmin", JSON.stringify(userfound));
    } else {
      var customerfound = customerData.find(function (user) {
        return (
          user.customerEmail == loginEmail.value &&
          user.customerpassword == loginpassword.value
        );
      });
      if (customerfound) {
        localStorage.setItem(
          "currentLoggedinCustomer",
          JSON.stringify(customerfound)
        );
        Swal.fire({
          title: "login successful",
          icon: "success",
        }).then(() => {
          window.location = "../index.html";
        });
      } else {
        alert("email or password incorrect ");
      }
    }
  }
  loginEmail.value = "";
  loginpassword.value = "";
}
