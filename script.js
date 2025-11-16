function login() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;
  if (username) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("welcome").innerText = `Welcome, ${role.toUpperCase()} ${username}`;
  }
}

function logout() {
  location.reload();
}

function showClassForm() {
  document.getElementById("content").innerHTML = `
    <h3>Class & Subject Management</h3>
    <input type="text" id="className" placeholder="Class Name" />
    <input type="text" id="subjectName" placeholder="Subject Name" />
    <button onclick="saveClass()">Save</button>
    <ul id="classList"></ul>
  `;
  loadClasses();
}

function saveClass() {
  const cls = document.getElementById("className").value;
  const sub = document.getElementById("subjectName").value;
  let data = JSON.parse(localStorage.getItem("classes")) || [];
  data.push({ class: cls, subject: sub });
  localStorage.setItem("classes", JSON.stringify(data));
  loadClasses();
}

function loadClasses() {
  const list = document.getElementById("classList");
  list.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("classes")) || [];
  data.forEach((item, i) => {
    list.innerHTML += `<li>${item.class} - ${item.subject}</li>`;
  });
}

function showAttendance() {
  document.getElementById("content").innerHTML = `
    <h3>Attendance</h3>
    <input type="text" id="studentName" placeholder="Student Name" />
    <button onclick="markAttendance()">Mark Present</button>
    <ul id="attendanceList"></ul>
  `;
  loadAttendance();
}

function markAttendance() {
  const name = document.getElementById("studentName").value;
  let data = JSON.parse(localStorage.getItem("attendance")) || [];
  data.push({ name, date: new Date().toLocaleDateString() });
  localStorage.setItem("attendance", JSON.stringify(data));
  loadAttendance();
}

function loadAttendance() {
  const list = document.getElementById("attendanceList");
  list.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("attendance")) || [];
  data.forEach((item) => {
    list.innerHTML += `<li>${item.name} - ${item.date}</li>`;
  });
}

function showGrades() {
  document.getElementById("content").innerHTML = `
    <h3>Grading</h3>
    <input type="text" id="student" placeholder="Student Name" />
    <input type="number" id="score" placeholder="Score" />
    <button onclick="saveGrade()">Save Grade</button>
    <ul id="gradeList"></ul>
  `;
  loadGrades();
}

function saveGrade() {
  const student = document.getElementById("student").value;
  const score = document.getElementById("score").value;
  let data = JSON.parse(localStorage.getItem("grades")) || [];
  data.push({ student, score });
  localStorage.setItem("grades", JSON.stringify(data));
  loadGrades();
}

function loadGrades() {
  const list = document.getElementById("gradeList");
  list.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("grades")) || [];
  data.forEach((item) => {
    list.innerHTML += `<li>${item.student}: ${item.score}</li>`;
  });
}

function showTimetable() {
  document.getElementById("content").innerHTML = `
    <h3>Timetable</h3>
    <p>Monday: Math, English, Science</p>
    <p>Tuesday: Kiswahili, History, Civics</p>
    <p>Wednesday: Geography, Biology, PE</p>
  `;
}
