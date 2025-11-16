// teacher.js
function loadGradeForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const assigned = getAssignedSubjects(user.username);
  // Render form for those subjects only
}
window.onload = loadGradeForm;
