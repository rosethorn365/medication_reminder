// This code helps run a medication reminder app.
// It makes the app easier to use, especially for older adults or people with reading or vision difficulties.

// -------------------- ACCESSIBILITY FEATURES --------------------

// This function makes the text on the page bigger or smaller.
// It helps people who have trouble reading small text.

function changeFontSize(amount) {
  document.body.style.fontSize = `${parseInt(getComputedStyle(document.body).fontSize) + amount}px`;
}

// This function changes the colors on the page to high contrast.
// It helps people who have trouble seeing certain colors.

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// This function changes the font to one that is easier to read for people with dyslexia.

function toggleDyslexiaFont() {
  document.body.classList.toggle("dyslexia-font");
}

// -------------------- FORM MANAGEMENT --------------------

// This function clears all the boxes in the medicine form.
// It’s useful when you want to start over or add a new reminder.

function clearForm() {
  document.getElementById("medName").value = "";
  document.getElementById("medAmount").value = "";
  document.getElementById("medUnit").selectedIndex = 0;
  document.getElementById("medRoute").selectedIndex = 0;
  document.getElementById("medInstructions").value = "";
  document.getElementById("medTime").value = "";
}

// This function saves the medicine reminder that the user fills in.
// It checks that the name and time are filled, then stores the reminder so it doesn’t get lost.
// It also sets up an alarm and shows the reminder on the screen.

function saveReminder() {
  const name = document.getElementById("medName").value;
  const amount = document.getElementById("medAmount").value;
  const unit = document.getElementById("medUnit").value;
  const route = document.getElementById("medRoute").value;
  const instructions = document.getElementById("medInstructions").value;
  const time = document.getElementById("medTime").value;

    // If name or time is missing, show a message and stop

  if (!name || !time) {
    alert("Please fill in the medicine name and time.");
    return;
  }
    // Save the reminder details

  const reminder = { name, amount, unit, route, instructions, time };
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  reminders.push(reminder);
  localStorage.setItem("reminders", JSON.stringify(reminders));

    // Show the reminder and set the alarm

  showReminders();
  scheduleAlarm(reminder);
}

// -------------------- REMINDER DISPLAY AND MANAGEMENT --------------------

// This function shows all the saved reminders on the screen.
// Each reminder also has a delete button so you can remove it.

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

// This function deletes a reminder when you click the delete button.
// It updates the list so the deleted reminder disappears.

function deleteReminder(index) {
  const reminders = JSON.parse(localStorage.getItem("reminders") || "[]");
  reminders.splice(index, 1);
  localStorage.setItem("reminders", JSON.stringify(reminders));
  showReminders();
}

// -------------------- PRINTING FUNCTIONALITY --------------------

// This function opens a new page with all reminders in a table format.
// It lets you print your reminders to paper, which is helpful for caregivers or personal use.

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

// -------------------- ALARM SCHEDULING --------------------

// This function sets an alarm for the time the medicine should be taken.
// When the time comes, it plays a sound and shows a message.

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

// -------------------- INITIALIZATION --------------------

// This makes sure that saved reminders are shown when the page is opened.
// It helps users see their reminders right away without doing anything.

window.onload = showReminders;
