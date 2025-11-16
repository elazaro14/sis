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
