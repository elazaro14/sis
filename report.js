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
function generateReport(studentId) {
  db.collection("grades").doc(studentId).collection("subjects").get()
    .then(snapshot => {
      let total = 0, count = 0;
      const rows = snapshot.docs.map(doc => {
        const data = doc.data();
        total += data.score;
        count++;
        return `<tr><td>${doc.id}</td><td>${data.score}</td><td>${getGrade(data.score)}</td></tr>`;
      }).join("");
      const avg = (total / count).toFixed(2);
      document.getElementById("report").innerHTML = `
        <table><tr><th>Subject</th><th>Score</th><th>Grade</th></tr>${rows}</table>
        <p>Total: ${total}, Average: ${avg}</p>
      `;
    });
}
