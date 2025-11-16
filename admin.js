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
// USER REGISTRATION
function registerUser() {
  const uname = document.getElementById("newUsername").value;
  const pwd = document.getElementById("newPassword").value;
  const role = document.getElementById("newRole").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === uname)) return alert("Username exists");

  users.push({ username: uname, password: pwd, role });
  localStorage.setItem("users", JSON.stringify(users));
  showUsers();
}

function showUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const list = users.map((u, i) => `
    <li>${u.username} (${u.role})
      <button onclick="deleteUser(${i})">Delete</button>
    </li>`).join("");
  document.getElementById("userList").innerHTML = `<ul>${list}</ul>`;
}

function deleteUser(index) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  showUsers();
}

// STUDENT REGISTRATION
function registerStudent() {
  const name = document.getElementById("studentName").value;
  const className = document.getElementById("studentClass").value;
  const subjects = document.getElementById("studentSubjects").value.split(",").map(s => s.trim());

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const id = students.length + 1;
  students.push({ id, name, class: className, subjects });
  localStorage.setItem("students", JSON.stringify(students));
  showStudents();
}

function showStudents() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const list = students.map((s, i) => `
    <li>${s.name} - ${s.class} - ${s.subjects.join(", ")}
      <button onclick="deleteStudent(${i})">Delete</button>
    </li>`).join("");
  document.getElementById("studentList").innerHTML = `<ul>${list}</ul>`;
}

function deleteStudent(index) {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  showStudents();
}

window.onload = () => {
  showUsers();
  showStudents();
};
const selectedSubjects = Array.from(document.getElementById("subjectSelect").selectedOptions)
  .map(opt => opt.value);
students.push({ id, name, class: className, subjects: selectedSubjects });
