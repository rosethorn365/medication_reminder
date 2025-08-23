
function changeFontSize(amount) {
  document.body.style.fontSize = `${parseInt(getComputedStyle(document.body).fontSize) + amount}px`;
}
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
function toggleDyslexiaFont() {
  document.body.classList.toggle("dyslexia-font");
}
function clearForm() {
  document.getElementById("medName").value = "";
  document.getElementById("medAmount").value = "";
  document.getElementById("medUnit").selectedIndex = 0;
  document.getElementById("medRoute").selectedIndex = 0;
  document.getElementById("medInstructions").value = "";
  document.getElementById("medTime").value = "";
}
function saveReminder() {
  const name = document.getElementById("medName").value;
  const amount = document.getElementById("medAmount").value;
  const unit = document.getElementById("medUnit").value;
  const route = document.getElementById("medRoute").value;
  const instructions = document.getElementById("medInstructions").value;
  const time = document.getElementById("medTime").value;
  if (!name || !time) {
    alert("Please fill in the medicine name and time.");
    return;
  }
  const reminder = { name, amount, unit, route, instructions, time };
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  reminders.push(reminder);
  localStorage.setItem("reminders", JSON.stringify(reminders));
  showReminders();
  scheduleAlarm(reminder);
}
function showReminders() {
  const list = document.getElementById("reminderList");
  list.innerHTML = "";
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  reminders.forEach((r, index) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${r.name}</strong> - ${r.amount} ${r.unit}, ${r.route}<br>${r.instructions}<br>Time: ${r.time}<br><button onclick="deleteReminder(${index})">Delete</button>`;
    list.appendChild(item);
  });
}
function deleteReminder(index) {
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  reminders.splice(index, 1);
  localStorage.setItem("reminders", JSON.stringify(reminders));
  showReminders();
}
function printReminders() {
  const printWindow = window.open("", "_blank");
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  const date = new Date().toLocaleDateString();
  let html = `<html><head><title>My Medication Reminders</title><style>body{font-family:Arial;font-size:18px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #000;padding:8px;text-align:left;}th{background:#eee;}</style></head><body>`;
  html += `<h1>My Medication Reminders</h1><p>Date: ${date}</p>`;
  html += `<table><tr><th>Medicine Name</th><th>Amount</th><th>Time to Take</th><th>How to Take</th><th>Notes</th></tr>`;
  reminders.forEach(r => {
    html += `<tr><td>${r.name}</td><td>${r.amount} ${r.unit}</td><td>${r.time}</td><td>${r.route}</td><td>${r.instructions}</td></tr>`;
  });
  html += `</table></body></html>`;
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.print();
}
function scheduleAlarm(reminder) {
  const now = new Date();
  const [hours, minutes] = reminder.time.split(":");
  const alarmTime = new Date();
  alarmTime.setHours(hours, minutes, 0, 0);
  let delay = alarmTime - now;
  if (delay < 0) delay += 24 * 60 * 60 * 1000;
  setTimeout(() => {
    document.getElementById("alarmSound").play();
    alert(`Time to take your medicine: ${reminder.name}`);
  }, delay);
}
window.onload = showReminders;
