
function adminLogin() {
  const adminPass = document.getElementById('adminPass').value;
  if (adminPass === 'admin1234') {
    alert('Admin login successful');
  } else {
    document.getElementById('errorMsg').innerText = 'Incorrect admin password';
  }
}

function memberLogin() {
  const email = document.getElementById('memberEmail').value;
  const password = document.getElementById('memberPassword').value;
  if (email && password) {
    alert('Member login successful');
  } else {
    document.getElementById('errorMsg').innerText = 'Please fill in all fields';
  }
}

function contactWhatsapp() {
  window.open("https://wa.me/8801604677795", "_blank");
}

document.getElementById("adminTab").addEventListener("click", () => {
  document.getElementById("adminTab").classList.add("active");
  document.getElementById("memberTab").classList.remove("active");
  document.getElementById("adminForm").style.display = "block";
  document.getElementById("memberForm").style.display = "none";
});
document.getElementById("memberTab").addEventListener("click", () => {
  document.getElementById("memberTab").classList.add("active");
  document.getElementById("adminTab").classList.remove("active");
  document.getElementById("memberForm").style.display = "block";
  document.getElementById("adminForm").style.display = "none";
});
