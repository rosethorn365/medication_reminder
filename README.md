

---

## 🧠 App Name: **Medication Reminder**

---

### 🖼️ Layout Overview

- **Top Area**: Accessibility settings for better reading
- **Middle Area**: Two boxes side by side (stacked vertically on mobile)
  - **Left Box**: Fill in your medicine reminder
  - **Right Box**: See your saved reminders
- **Bottom of Right Box**: Button to print your reminders

---

### 🎨 Easy Design

- **Font**: Arial, size 20px (large and readable)
- **Colors**:
  - Text: Black
  - Form Background: White
  - Saved Reminders Background: Light yellow
  - Page Background: Light purple (accessible and pleasant)
- **Accessibility Settings**:
  - Increase/decrease font size
  - High contrast toggle
  - Dyslexia-friendly font toggle

---

### 🧩 Page Components

#### 🔧 Accessibility Panel (Top)

- Buttons:
  - A+ / A- (font size)
  - High Contrast
  - Dyslexia Font

---

#### 📋 Fill in a Medicine Reminder (Left Box)

- **Title**: “Add a Medicine Reminder”
- **Fields**:
  1. **Medicine Name** (text input)
  2. **Amount**:
     - Number input (e.g. 1, 2, 5)
     - Dropdown for units:
       - mg, g, mcg, mL, L, IU, tablets, capsules, drops, puffs, patches, suppositories, injections, sprays, teaspoons, tablespoons
  3. **How to take the medicine** (dropdown menu):
     - By mouth, Injection, On the skin, Breathing in, Under the tongue, In the bottom, In the vagina, On the skin patch, Into the vein, Into the muscle, Under the skin, Inside the cheek, In the nose, In the eye, In the ear
  4. **Special Instructions** (textarea)
  5. **Time to take medicine** (time input)
- **Buttons**:
  - **Save Reminder** – left side, styled in green or blue
  - **Clear Form** – right side, styled in orange or red to avoid confusion

---

#### 🗒️ Saved Reminders (Right Box)

- **Title**: “Saved Reminders”
- **List**:
  - Each reminder shows:
    - Medicine name
    - Amount and unit
    - How to take it
    - Special instructions
    - Time
    - Button to delete the reminder
- **Bottom**:
  - Button: **“Print My Reminders”**
    - Opens a printer-friendly page

---

### 🖨️ Print Functionality

- When clicked, opens a new page with:
  - Title: **“My Medication Reminders”**
  - Current date
  - Table with columns:
    - **Medicine Name**
    - **Amount**
    - **Time to Take**
    - **How to Take**
    - **Notes**

---

### 🔔 Alarm Reminder (Mobile-Friendly)

- When a reminder is saved:
  - App sets a timer using JavaScript
  - At the scheduled time:
    - **alarm.mp3 ringtone plays automatically**
    - **Alarm loops until dismissed**
    - A popup message appears: “Time to take your medicine: [Medicine Name]”
- Works on mobile browsers
- Requires user interaction (e.g. tapping Save) to enable sound playback

---

### 🧪 How It Works (Behind the Scenes)

- Uses `localStorage` to save reminders:
  - Works offline
  - No login required
  - Data stays on the device
- Reminders are displayed clearly
- Can be deleted individually
- Print view is clean and readable
- Alarm is scheduled and triggered precisely
- Accessibility settings are stored locally

---
