const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "teacher1", password: "teach123", role: "teacher" }
];

function login() {
  const uname = document.getElementById("username").value;
  const pwd = document.getElementById("password").value;
  const user = users.find(u => u.username === uname && u.password === pwd);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    if (user.role === "admin") window.location.href = "admin.html";
    else if (user.role === "teacher") window.location.href = "teacher.html";
  } else {
    alert("Invalid credentials");
  }
}
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "teacher1", password: "teach123", role: "teacher" }
];
