
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCK3MwqVJsrXelDXdSDyECkHSBniBeuJeY",
  authDomain: "ffibd-fbeda.firebaseapp.com",
  databaseURL: "https://ffibd-fbeda-default-rtdb.firebaseio.com",
  projectId: "ffibd-fbeda",
  storageBucket: "ffibd-fbeda.appspot.com",
  messagingSenderId: "206188233955",
  appId: "1:206188233955:web:76c1c7ccdb164e1e1e31d6",
  measurementId: "G-MD2R9FYJKF"
};
firebase.initializeApp(firebaseConfig);

function showAdminLogin() {
  document.getElementById("adminLoginForm").style.display = "block";
  document.getElementById("memberLoginForm").style.display = "none";
}

function showMemberLogin() {
  document.getElementById("adminLoginForm").style.display = "none";
  document.getElementById("memberLoginForm").style.display = "block";
}

function adminLogin() {
  const adminPass = document.getElementById("adminPassword").value;
  if (adminPass === "admin123SKM100") {
    firebase.auth().signInWithEmailAndPassword("skm@infoffsms.com", "admin1232")
      .then(() => {
        window.location.href = "admin_dashboard.html";
      })
      .catch(err => {
        document.getElementById("errorMsg").innerText = err.message;
      });
  } else {
    document.getElementById("errorMsg").innerText = "Wrong Admin Password!";
  }
}

function memberLogin() {
  const email = document.getElementById("memberEmail").value;
  const password = document.getElementById("memberPassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "member_dashboard.html";
    })
    .catch(err => {
      document.getElementById("errorMsg").innerText = err.message;
    });
}
