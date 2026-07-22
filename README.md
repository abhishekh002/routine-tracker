# ⚡ AURA — Personal Growth & 7th Semester Academic Routine Tracker

A high-performance, progressive web application (PWA) built with zero external dependencies to balance 7th Semester engineering academics (Batch B2) with personal development goals.

---

## 📌 Features & Architecture

- **Vanilla Stack**: Pure ES6+ JavaScript, HTML5, and CSS3 with HSL dark-glassmorphism.
- **7th Sem Batch B2 Schedule**:
  - `B-SPP-SKS` (System Prototyping Program)
  - `AAE-DM` (Advanced Antenna Engineering)
  - 2 Open Elective Online Course Blocks
  - AI/ML Specialization Online Course & Project Blocks
  - `B2-PPD-II-ALL` Project Lab (Thu 3:00 PM – 5:00 PM)
  - `B2-SIRE-II-SM, SS` Seminar Lab (Fri 3:00 PM – 5:00 PM)
- **Skill-Building Modules**:
  - **Coding & DSA Mastery**: Topic-based problem checklists with difficulty badges.
  - **English Communication Hub**: Topic speech prompts, Web Speech API speech-to-text recorder, and shadow reading passages.
  - **Zen Space**: Configurable meditation timer with an animated breathing circle and Web Audio API 136.1 Hz audio synth.
- **Native PWA Integration**:
  - Mobile bottom app navigation bar.
  - Custom `beforeinstallprompt` header button.
  - Service Worker (`sw.js`) with a Stale-While-Revalidate caching strategy.
  - Automatic update detection toast.
  - Native Web Share API integration (`navigator.share`).
- **Data Integrity & Offline Persistence**:
  - Schema-validated JSON backup export & import (`aura_routine_backup_YYYY-MM-DD.json`).

---

## 🛠️ Project Structure

```
routine-tracker/
├── index.html        # Bundled self-contained web app
├── style.css         # Modern glassmorphism stylesheet & mobile responsive system
├── app.js            # Timetable state management, countdown timer, & skill logic
├── manifest.json     # PWA manifest specification
├── sw.js             # Service Worker for offline asset caching & updates
└── bundle.py         # Utility script to bundle CSS & JS into index.html
```

---

## 🚀 Local Development & Running

1. **Serve locally**:
   ```bash
   python -m http.server 8080
   ```
2. **Open in Browser**:
   `http://localhost:8080` or `http://<your-local-ip>:8080`

3. **Install on Phone**:
   Connect phone to same Wi-Fi, open `http://<your-local-ip>:8080`, and tap **"Add to Home screen"**.
