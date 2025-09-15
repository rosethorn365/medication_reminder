



## App Name: **Medication Reminder**



### Layout Overview

- **Top Area**: Accessibility settings for better reading
- **Middle Area**: Two boxes side by side (stacked vertically on mobile)
  - **Left Box**: Fill in your medicine reminder
  - **Right Box**: See your saved reminders
- **Bottom of Right Box**: Button to print your reminders



### Easy Design

- **Font**: Arial, size 20px (large and readable)
- **Colors**:
  - Text: Black
  - Form Background: White
  - Saved Reminders Background: Light yellow
  - Page Background: Light purple (accessible and pleasant)
- **Accessibility Settings**:
  - Increase/decrease font size
  - High contrast toggle



### Page Components

#### Accessibility Panel (Top)

- Buttons:
  - A+ / A- (font size)
  - High Contrast



#### Fill in a Medicine Reminder (Left Box)

- **Title**: “Add a Medicine Reminder”
- **Fields**:
  1. **Medicine Name** (text input)
  2. **Amount**:
     - Number input (e.g. 1, 2, 5)
     - Dropdown for units:
       - mg, g, mcg, mL, L, IU, tablets, capsules, drops, puffs, patches, suppositories, injections, sprays, teaspoons, tablespoons
  3. **How to take the medicine** (dropdown menu):
     - By mouth, Injection, On the skin, Breathing in, Under the tongue, On the skin patch, Into the vein, Into the muscle, Under the skin, Inside the cheek, In the nose, In the eye, In the ear
  4. **Special Instructions** (textarea)
  5. **Time to take medicine** (time input)
- **Buttons**:
  - **Save Reminder** – left side, styled in green or blue
  - **Clear Form** – right side, styled in orange or red to avoid confusion



#### Saved Reminders (Right Box)

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



### Print Functionality

- When clicked, opens a new page with:
  - Title: **“My Medication Reminders”**
  - Current date
  - Table with columns:
    - **Medicine Name**
    - **Amount**
    - **Time to Take**
    - **How to Take**
    - **Notes**



### Alarm Reminder (Mobile-Friendly)

- When a reminder is saved:
  - App sets a timer using JavaScript
  - At the scheduled time:
    - **alarm.mp3 ringtone plays automatically**
    - **Alarm loops until dismissed**
    - A message appears:
🔔 Alert Emoji: Signals that it's time for action.
💊 Medicine: Shows the name of the medication.
    Amount: Displays the dosage and unit (e.g., 2 tablets).
    How to take: Indicates the route (e.g., by mouth, injection).
📝 Instructions: Provides any special notes (e.g., take with food).
✅ Confirmation: Encourages the user to acknowledge the reminder.
- Works on mobile browsers
- Requires user interaction (e.g. tapping Save) to enable sound playback



### How It Works (Behind the Scenes)

- Uses `localStorage` to save reminders:
  - Works offline
  - No login required
  - Data stays on the device
- Reminders are displayed clearly
- Can be deleted individually
- Print view is clean and readable
- Alarm is scheduled and triggered precisely
- Accessibility settings are stored locally



The Medication Reminder app uses localStorage to save reminders directly in the user's browser. This means the data is stored locally on the device, allowing the app to work offline without requiring a login or internet connection. Reminders persist even after the browser is closed or the device is restarted, and users can delete them individually. While localStorage is not encrypted and should not be used for sensitive personal data, it is a suitable and secure choice for storing simple medication reminders. It keeps the app lightweight, fast, and easy to use, especially for older adults or caregivers who benefit from a straightforward, no-login experience. If the app were to handle more sensitive information or support multiple users, a more secure storage solution like server-side databases or encrypted cloud storage would be recommended.
