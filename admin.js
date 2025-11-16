// admin.js
function showAssignments() {
  // Display teacher-subject-class assignments
}
window.onload = showAssignments;
function registerUser() {
  const uname = document.getElementById("newUsername").value;
  const pwd = document.getElementById("newPassword").value;
  const role = document.getElementById("newRole").value;

  if (!uname || !pwd) return alert("Please fill all fields");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === uname)) {
    alert("Username already exists");
    return;
  }

  users.push({ username: uname, password: pwd, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered successfully");
  showUsers();
}

function showUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const list = users.map(u => `<li>${u.username} (${u.role})</li>`).join("");
  document.getElementById("userList").innerHTML = `<ul>${list}</ul>`;
}

window.onload = showUsers;
