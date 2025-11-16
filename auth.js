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
