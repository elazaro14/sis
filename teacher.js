// teacher.js
function loadGradeForm() {
  const user = JSON.parse(localStorage.getItem("user"));
  const assigned = getAssignedSubjects(user.username);
  // Render form for those subjects only
}
window.onload = loadGradeForm;
function getGrade(score) {
  if (score >= 75 && score <= 100) return "A";
  else if (score >= 65 && score <= 74) return "B";
  else if (score >= 45 && score <= 64) return "C";
  else if (score >= 30 && score <= 44) return "D";
  else if (score >= 0 && score <= 29) return "F";
  else return "Invalid";
}
students.filter(s =>
  user.classes.includes(s.class) &&
  s.subjects.some(sub => user.subjects.includes(sub))
);
