const users = JSON.parse(localStorage.getItem("users")) || [];

function login() {
  const uname = document.getElementById("username").value;
  const pwd = document.getElementById("password").value;
  const user = users.find(u => u.username === uname && u.password === pwd);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = user.role === "admin" ? "admin.html" : "teacher.html";
  } else {
    alert("Invalid credentials");
  }
}
function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // Redirect to dashboard (you can fetch role from Firestore later)
      window.location.href = "teacher.html"; // or "admin.html"
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"></script>
const db = firebase.firestore();

function register() {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;
      return db.collection("users").doc(uid).set({
        email,
        role,
        subjects: [],
        classes: []
      });
    })
    .then(() => {
      alert("User registered successfully!");
    })
    .catch(error => {
      alert("Registration failed: " + error.message);
    });
}
function resetPassword() {
  const email = document.getElementById("resetEmail").value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => alert("Password reset email sent!"))
    .catch(error => alert("Error: " + error.message));
}
