// report.js
function generateReport() {
  const id = document.getElementById("studentId").value;
  const student = students.find(s => s.id == id);
  // Calculate total, average, grades
}
function getGrade(score) {
  if (score >= 75 && score <= 100) return "A";
  else if (score >= 65 && score <= 74) return "B";
  else if (score >= 45 && score <= 64) return "C";
  else if (score >= 30 && score <= 44) return "D";
  else if (score >= 0 && score <= 29) return "F";
  else return "Invalid";
}
