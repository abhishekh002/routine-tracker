/* ==========================================================================
   AURA Personal Routine & Academic Tracker Logic
   ========================================================================== */

// --- Default Data & Schemas ---
const TIMETABLE_DATA = {
    MON: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "09:00", end: "10:00", name: "B-SPP-SKS", category: "Academics", type: "lecture" },
        { start: "10:00", end: "12:00", name: "AI / ML Online Course Block", category: "Online Course", type: "skill-coding" },
        { start: "12:00", end: "13:00", name: "AAE-DM", category: "Academics", type: "lecture" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "15:00", name: "Open Elective 1 (Online)", category: "Online Course", type: "skill-english" },
        { start: "15:00", end: "17:00", name: "PPD & Seminar Work", category: "Project", type: "recess" },
        { start: "17:30", end: "18:30", name: "English Speaking & Shadowing Practice", category: "Skill", type: "english" },
        { start: "19:00", end: "21:00", name: "Coding & DSA Practice Block", category: "Skill", type: "coding" },
        { start: "21:30", end: "23:30", name: "Core Revision (AAE & SPP)", category: "Academics", type: "lecture" }
    ],
    TUE: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "10:00", end: "11:00", name: "B-SPP-SKS", category: "Academics", type: "lecture" },
        { start: "11:00", end: "13:00", name: "Open Elective 2 (Online)", category: "Online Course", type: "skill-english" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "15:00", name: "AAE-DM", category: "Academics", type: "lecture" },
        { start: "15:00", end: "17:00", name: "AI / ML Hands-on Project", category: "Online Course", type: "skill-coding" },
        { start: "17:30", end: "18:30", name: "English Speaking & Speech Record", category: "Skill", type: "english" },
        { start: "19:00", end: "21:00", name: "Coding & DSA Practice Block", category: "Skill", type: "coding" },
        { start: "21:30", end: "23:30", name: "Core Revision (Open Electives)", category: "Academics", type: "lecture" }
    ],
    WED: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "09:00", end: "11:00", name: "Open Elective 1 (Online)", category: "Online Course", type: "skill-english" },
        { start: "11:00", end: "13:00", name: "AI / ML Online Course Block", category: "Online Course", type: "skill-coding" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "15:00", name: "Open Elective 2 (Online)", category: "Online Course", type: "skill-english" },
        { start: "15:00", end: "17:00", name: "Seminar & Lab Preparation", category: "Project", type: "recess" },
        { start: "17:30", end: "18:30", name: "English Speaking Practice", category: "Skill", type: "english" },
        { start: "19:00", end: "21:00", name: "Coding & DSA Practice Block", category: "Skill", type: "coding" },
        { start: "21:30", end: "23:30", name: "Core Revision (AAE & AI/ML)", category: "Academics", type: "lecture" }
    ],
    THU: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "10:00", end: "12:00", name: "Open Elective 2 (Online)", category: "Online Course", type: "skill-english" },
        { start: "12:00", end: "13:00", name: "AAE-DM", category: "Academics", type: "lecture" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "15:00", name: "B-SPP-SKS", category: "Academics", type: "lecture" },
        { 
            start: "15:00", end: "17:00", 
            batches: {
                A1: "Self Study",
                A2: "Self Study",
                B1: "Self Study",
                B2: "B2-PPD-II-ALL"
            },
            category: "Lab / Practical", type: "lecture" 
        },
        { start: "17:30", end: "18:30", name: "English Fluency & Vocabulary", category: "Skill", type: "english" },
        { start: "19:00", end: "21:00", name: "Coding & DSA Practice Block", category: "Skill", type: "coding" },
        { start: "21:30", end: "23:30", name: "Core Revision (SPP & PPD)", category: "Academics", type: "lecture" }
    ],
    FRI: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "09:00", end: "12:00", name: "AI / ML & Open Elective Review", category: "Online Course", type: "skill-coding" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "15:00", name: "Seminar Preparation", category: "Project", type: "recess" },
        { 
            start: "15:00", end: "17:00", 
            batches: {
                A1: "Self Study",
                A2: "Self Study",
                B1: "Self Study",
                B2: "B2-SIRE-II-SM, SS"
            },
            category: "Lab / Practical", type: "lecture" 
        },
        { start: "17:30", end: "18:30", name: "Weekly English Speech Review", category: "Skill", type: "english" },
        { start: "19:00", end: "21:00", name: "Coding & DSA Weekly Challenge", category: "Skill", type: "coding" },
        { start: "21:30", end: "23:30", name: "Weekly Seminar & Subject Wrap-Up", category: "Academics", type: "lecture" }
    ],
    SAT: [
        { start: "06:30", end: "07:15", name: "Morning Exercise & Stretch", category: "Fitness", type: "zen" },
        { start: "07:15", end: "07:45", name: "Mindful Meditation", category: "Wellness", type: "zen" },
        { start: "09:00", end: "11:30", name: "AI / ML Project & Electives Deep Dive", category: "Online Course", type: "skill-coding" },
        { start: "11:30", end: "13:00", name: "Weekly DSA Contest Simulation", category: "Skill", type: "coding" },
        { start: "13:00", end: "14:00", name: "RECESS & Lunch Break", category: "Rest", type: "recess" },
        { start: "14:00", end: "16:00", name: "PPD Project & Seminar Deck Prep", category: "Project", type: "recess" },
        { start: "16:30", end: "17:30", name: "English Public Speaking Challenge", category: "Skill", type: "english" },
        { start: "18:00", end: "20:00", name: "Personal Time / Leisure & Outing", category: "Rest", type: "recess" },
        { start: "20:30", end: "22:30", name: "Weekly Knowledge Review", category: "Academics", type: "lecture" }
    ],
    SUN: [
        { start: "07:00", end: "07:45", name: "Outdoor Yoga / Walk", category: "Fitness", type: "zen" },
        { start: "07:45", end: "08:15", name: "Guided Meditation", category: "Wellness", type: "zen" },
        { start: "09:30", end: "12:00", name: "Coding & DSA Weekend Marathon", category: "Skill", type: "coding" },
        { start: "12:00", end: "13:30", name: "Open Electives & AI/ML Quiz Catch-up", category: "Online Course", type: "skill-coding" },
        { start: "13:30", end: "14:30", name: "Lunch Break & Relax", category: "Rest", type: "recess" },
        { start: "14:30", end: "17:30", name: "Hobbies, Family & Recreation Time", category: "Rest", type: "recess" },
        { start: "17:30", end: "18:30", name: "English Reading / Podcasts / TED Talk", category: "Skill", type: "english" },
        { start: "19:00", end: "20:30", name: "Weekly Review & Setting Goals for Mon", category: "Planning", type: "zen" },
        { start: "21:00", end: "22:30", name: "Light Reading & Wind-down", category: "Rest", type: "recess" }
    ]
};

const DSA_TOPICS = [
    {
        id: "arrays",
        title: "Arrays & Hashing",
        problems: [
            { id: "p1", title: "Contains Duplicate", difficulty: "easy" },
            { id: "p2", title: "Valid Anagram", difficulty: "easy" },
            { id: "p3", title: "Two Sum", difficulty: "easy" },
            { id: "p4", title: "Group Anagrams", difficulty: "medium" },
            { id: "p5", title: "Top K Frequent Elements", difficulty: "medium" },
            { id: "p6", title: "Product of Array Except Self", difficulty: "medium" }
        ]
    },
    {
        id: "pointers",
        title: "Two Pointers",
        problems: [
            { id: "p7", title: "Valid Palindrome", difficulty: "easy" },
            { id: "p8", title: "Two Sum II Input Array Is Sorted", difficulty: "medium" },
            { id: "p9", title: "3Sum", difficulty: "medium" },
            { id: "p10", title: "Container With Most Water", difficulty: "medium" }
        ]
    },
    {
        id: "stack",
        title: "Stack & Queues",
        problems: [
            { id: "p11", title: "Valid Parentheses", difficulty: "easy" },
            { id: "p12", title: "Min Stack", difficulty: "medium" },
            { id: "p13", title: "Evaluate Reverse Polish Notation", difficulty: "medium" },
            { id: "p14", title: "Daily Temperatures", difficulty: "medium" }
        ]
    },
    {
        id: "trees",
        title: "Trees & Binary Search",
        problems: [
            { id: "p15", title: "Invert Binary Tree", difficulty: "easy" },
            { id: "p16", title: "Maximum Depth of Binary Tree", difficulty: "easy" },
            { id: "p17", title: "Binary Tree Level Order Traversal", difficulty: "medium" },
            { id: "p18", title: "Validate Binary Search Tree", difficulty: "medium" }
        ]
    },
    {
        id: "dp",
        title: "Dynamic Programming",
        problems: [
            { id: "p19", title: "Climbing Stairs", difficulty: "easy" },
            { id: "p20", title: "House Robber", difficulty: "medium" },
            { id: "p21", title: "Coin Change", difficulty: "medium" },
            { id: "p22", title: "Longest Increasing Subsequence", difficulty: "medium" }
        ]
    }
];

const ENGLISH_PROMPTS = [
    "Explain how a microchip or transistor works in simple terms.",
    "What is your vision for your engineering career in 5 years?",
    "Describe your daily study routine and how you maintain focus.",
    "If you could create any tech startup tomorrow, what problem would it solve?",
    "Explain the concept of Artificial Intelligence to someone non-technical.",
    "Talk about a mistake you made in a past project and what it taught you.",
    "Why is meditation and consistency important for high performance?"
];

const SHADOW_TEXTS = [
    "The pursuit of excellence is a journey, not a destination. By committing to small, incremental improvements every single day, we build a compound effect that eventually yields extraordinary breakthroughs in our skills, our intellect, and our outlook on life.",
    "Mastery in software engineering is not merely about writing code; it is about structuring your thoughts clearly, communicating complex ideas with precision, and solving meaningful real-world problems with elegance and efficiency.",
    "Quiet confidence comes from preparation. When you dedicate yourself to daily practice in coding, physical wellness, and communication, challenges transform into natural opportunities for growth."
];

const QUOTES = [
    { text: "Consistency is what transforms average into excellence.", author: "— Habit Principle" },
    { text: "Small daily improvements over time lead to stunning results.", author: "— Robin Sharma" },
    { text: "First make your habits, then your habits make you.", author: "— John Dryden" },
    { text: "The secret of your future is hidden in your daily routine.", author: "— Mike Murdock" }
];

// --- App State ---
let appState = {
    batch: "B2",
    focusSubjects: [
        "Advanced Antenna (AAE)", 
        "System Prototyping Program (SPP)", 
        "Open Electives (Online)", 
        "AI/ML & PPD/Seminar"
    ],
    checkedHabits: {}, // { '2026-07-23': ['habit-1', 'habit-2'] }
    completedDSA: {}, // { 'p1': true }
    activeDSATopic: "arrays",
    meditationTime: 600,
    meditationRemaining: 600,
    isMeditationRunning: false,
    ambientSoundActive: false
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromStorage();
    initNavigation();
    initDashboard();
    initTimetable();
    initDSAHub();
    initEnglishHub();
    initZenSpace();
    initSettings();

    // Start live clock & task updater interval
    setInterval(updateLiveClockAndTask, 1000);
    updateLiveClockAndTask();
});

// --- Local Storage Management ---
function loadStateFromStorage() {
    const saved = localStorage.getItem("aura_routine_state");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState = { ...appState, ...parsed };
        } catch (e) {
            console.error("Could not parse saved state", e);
        }
    }
}

function saveStateToStorage() {
    localStorage.setItem("aura_routine_state", JSON.stringify(appState));
}

// --- Navigation ---
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const views = document.querySelectorAll(".view");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            navButtons.forEach(b => b.classList.remove("active"));
            views.forEach(v => v.classList.remove("active"));

            btn.classList.add("active");
            const targetView = document.getElementById(`view-${targetTab}`);
            if (targetView) targetView.classList.add("active");
        });
    });
}

// --- Dashboard Component ---
function initDashboard() {
    renderHabitChecklist();
    renderGrowthStats();
    setRandomQuote();
}

function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

function renderHabitChecklist() {
    const checklistContainer = document.getElementById("daily-habit-checklist");
    if (!checklistContainer) return;

    const dayNum = new Date().getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
    let subA = appState.focusSubjects[0] || 'Advanced Antenna (AAE)';
    let subB = appState.focusSubjects[1] || 'System Prototyping Program (SPP)';

    if (dayNum === 2 || dayNum === 4) { // Tue / Thu
        subA = appState.focusSubjects[2] || 'Open Elective 1';
        subB = appState.focusSubjects[3] || 'Open Elective 2';
    } else if (dayNum === 5) { // Fri
        subA = appState.focusSubjects[0] || 'Advanced Antenna (AAE)';
        subB = appState.focusSubjects[2] || 'Open Elective 1';
    }

    const habits = [
        { id: "h_ex", name: "Morning Exercise & Stretching", time: "06:30 AM" },
        { id: "h_med", name: "15-Min Mindfulness Meditation", time: "07:15 AM" },
        { id: "h_eng", name: "English Speaking & Shadowing", time: "05:30 PM" },
        { id: "h_dsa", name: "2 Hours DSA & Problem Solving", time: "07:00 PM" },
        { id: "h_subj1", name: `Revision: ${subA}`, time: "09:30 PM" },
        { id: "h_subj2", name: `Revision: ${subB}`, time: "10:30 PM" }
    ];

    const todayKey = getTodayKey();
    const checkedToday = appState.checkedHabits[todayKey] || [];

    checklistContainer.innerHTML = habits.map(habit => {
        const isChecked = checkedToday.includes(habit.id);
        return `
            <li class="habit-item ${isChecked ? 'checked' : ''}" data-id="${habit.id}">
                <div class="habit-item-left">
                    <div class="custom-checkbox" onclick="toggleHabit('${habit.id}')">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span class="habit-name">${habit.name}</span>
                </div>
                <span class="habit-time-badge">${habit.time}</span>
            </li>
        `;
    }).join("");

    // Update Percentage
    const pct = Math.round((checkedToday.length / habits.length) * 100);
    const pctElement = document.getElementById("habit-completion-pct");
    if (pctElement) pctElement.textContent = `${pct}% Complete`;
}

window.toggleHabit = function(habitId) {
    const todayKey = getTodayKey();
    if (!appState.checkedHabits[todayKey]) {
        appState.checkedHabits[todayKey] = [];
    }

    const index = appState.checkedHabits[todayKey].indexOf(habitId);
    if (index > -1) {
        appState.checkedHabits[todayKey].splice(index, 1);
    } else {
        appState.checkedHabits[todayKey].push(habitId);
    }

    saveStateToStorage();
    renderHabitChecklist();
    renderGrowthStats();
};

function renderGrowthStats() {
    // DSA Progress
    let totalProblems = 0;
    let completedProblems = 0;
    DSA_TOPICS.forEach(topic => {
        topic.problems.forEach(p => {
            totalProblems++;
            if (appState.completedDSA[p.id]) completedProblems++;
        });
    });

    const dsaPct = totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;
    const dsaBar = document.getElementById("dsa-progress-bar");
    const dsaText = document.getElementById("dsa-progress-text");
    if (dsaBar) dsaBar.style.width = `${dsaPct}%`;
    if (dsaText) dsaText.textContent = `${completedProblems}/${totalProblems} Solved`;
}

function setRandomQuote() {
    const quoteObj = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    const qText = document.getElementById("quote-display");
    const qAuthor = document.getElementById("quote-author");
    if (qText) qText.textContent = `"${quoteObj.text}"`;
    if (qAuthor) qAuthor.textContent = quoteObj.author;
}

// --- Live Clock & Task Updater ---
function updateLiveClockAndTask() {
    const now = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const fullDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const dayCode = days[now.getDay()];
    const dayFull = fullDays[now.getDay()];

    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const dayBadge = document.getElementById("current-day-badge");
    const timeStamp = document.getElementById("current-time-stamp");

    if (dayBadge) dayBadge.textContent = dayFull;
    if (timeStamp) timeStamp.textContent = timeStr;

    // Calculate current session
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const daySchedule = TIMETABLE_DATA[dayCode] || TIMETABLE_DATA["MON"]; // Fallback to MON on weekends

    let currentTask = null;
    let nextTask = null;

    for (let i = 0; i < daySchedule.length; i++) {
        const item = daySchedule[i];
        const [sh, sm] = item.start.split(":").map(Number);
        const [eh, em] = item.end.split(":").map(Number);
        const startMins = sh * 60 + sm;
        const endMins = eh * 60 + em;

        if (currentMins >= startMins && currentMins < endMins) {
            currentTask = item;
            nextTask = daySchedule[i + 1] || { name: "Evening Relaxation / Sleep", start: "23:30", end: "06:30" };
            break;
        } else if (currentMins < startMins && !nextTask) {
            nextTask = item;
        }
    }

    const taskTitle = document.getElementById("current-task-name");
    const taskCategory = document.getElementById("current-category");
    const taskTime = document.getElementById("current-task-time");
    const countdownText = document.getElementById("countdown-text");
    const nextTitle = document.getElementById("next-task-name");
    const nextTime = document.getElementById("next-task-time");

    if (currentTask) {
        let taskName = currentTask.name;
        if (currentTask.batches) {
            taskName = currentTask.batches[appState.batch] || currentTask.batches["B2"];
        }

        if (taskTitle) taskTitle.textContent = taskName;
        if (taskCategory) taskCategory.textContent = currentTask.category || "Scheduled";
        if (taskTime) taskTime.textContent = `Time: ${formatTime12(currentTask.start)} - ${formatTime12(currentTask.end)}`;

        // Calculate time remaining
        const [eh, em] = currentTask.end.split(":").map(Number);
        const endMins = eh * 60 + em;
        const remaining = endMins - currentMins;
        if (countdownText) countdownText.textContent = `${remaining}m left`;

        // Update progress ring
        const [sh, sm] = currentTask.start.split(":").map(Number);
        const totalDuration = endMins - (sh * 60 + sm);
        const elapsed = currentMins - (sh * 60 + sm);
        const fraction = Math.min(1, Math.max(0, elapsed / totalDuration));
        
        const circle = document.getElementById("routine-progress-ring");
        if (circle) {
            const circumference = 2 * Math.PI * 60; // r=60
            const offset = circumference - (fraction * circumference);
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = offset;
        }

    } else {
        if (taskTitle) taskTitle.textContent = "Personal Free Time / Rest";
        if (taskCategory) taskCategory.textContent = "Unscheduled";
        if (taskTime) taskTime.textContent = "No strict lecture active";
        if (countdownText) countdownText.textContent = "--";
    }

    if (nextTask) {
        let nextName = nextTask.name;
        if (nextTask.batches) {
            nextName = nextTask.batches[appState.batch] || nextTask.batches["B2"];
        }
        if (nextTitle) nextTitle.textContent = nextName;
        if (nextTime) nextTime.textContent = `${formatTime12(nextTask.start)} - ${formatTime12(nextTask.end)}`;
    }
}

function formatTime12(time24) {
    const [h, m] = time24.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    return `${h12}:${m < 10 ? '0' + m : m} ${period}`;
}

// --- Timetable Component ---
function initTimetable() {
    const gridContainer = document.getElementById("timetable-grid-element");
    const btnCollege = document.getElementById("btn-show-college");
    const btnFull = document.getElementById("btn-show-full");

    let mode = "college"; // 'college' or 'full'

    function renderGrid() {
        if (!gridContainer) return;

        const timeSlots = mode === "college" ? [
            { label: "1ST (09:00)", start: "09:00", end: "10:00" },
            { label: "2ND (10:00)", start: "10:00", end: "11:00" },
            { label: "3RD (11:00)", start: "11:00", end: "12:00" },
            { label: "4TH (12:00)", start: "12:00", end: "13:00" },
            { label: "RECESS", start: "13:00", end: "14:00" },
            { label: "5TH (14:00)", start: "14:00", end: "15:00" },
            { label: "6-7TH (15:00)", start: "15:00", end: "17:00" }
        ] : [
            { label: "FITNESS (06:30)", start: "06:30", end: "07:15" },
            { label: "ZEN (07:15)", start: "07:15", end: "07:45" },
            { label: "1ST (09:00)", start: "09:00", end: "10:00" },
            { label: "2ND (10:00)", start: "10:00", end: "11:00" },
            { label: "3RD (11:00)", start: "11:00", end: "12:00" },
            { label: "4TH (12:00)", start: "12:00", end: "13:00" },
            { label: "RECESS", start: "13:00", end: "14:00" },
            { label: "5TH (14:00)", start: "14:00", end: "15:00" },
            { label: "6-7TH (15:00)", start: "15:00", end: "17:00" },
            { label: "ENGLISH (17:30)", start: "17:30", end: "18:30" },
            { label: "DSA (19:00)", start: "19:00", end: "21:00" },
            { label: "REVISION (21:30)", start: "21:30", end: "23:30" }
        ];

        const days = mode === "college" 
            ? ["MON", "TUE", "WED", "THU", "FRI"] 
            : ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

        let html = `<div class="timetable-header-cell timetable-time-header">TIME</div>`;
        days.forEach(d => {
            html += `<div class="timetable-header-cell">${d}</div>`;
        });

        timeSlots.forEach(slot => {
            html += `<div class="timetable-cell timetable-time-header" style="font-weight:600; font-size:11px;">${slot.label}</div>`;

            days.forEach(day => {
                const daySchedule = TIMETABLE_DATA[day] || [];
                const match = daySchedule.find(s => s.start === slot.start);

                if (match) {
                    let name = match.name;
                    if (match.batches) {
                        name = match.batches[appState.batch] || match.batches["B2"];
                    }
                    html += `
                        <div class="timetable-cell ${match.type || 'lecture'}">
                            <div class="slot-subject">${name}</div>
                            <div class="slot-time">${match.start} - ${match.end}</div>
                        </div>
                    `;
                } else {
                    html += `<div class="timetable-cell recess"><span class="slot-detail">Free / Self Study</span></div>`;
                }
            });
        });

        gridContainer.innerHTML = html;
        gridContainer.style.gridTemplateColumns = `100px repeat(${days.length}, 1fr)`;
    }

    btnCollege?.addEventListener("click", () => {
        mode = "college";
        btnCollege.classList.add("active");
        btnFull?.classList.remove("active");
        renderGrid();
    });

    btnFull?.addEventListener("click", () => {
        mode = "full";
        btnFull.classList.add("active");
        btnCollege?.classList.remove("active");
        renderGrid();
    });

    renderGrid();
}

// --- DSA Hub Component ---
function initDSAHub() {
    const tabsContainer = document.getElementById("dsa-topics-tabs-container");
    const problemListContainer = document.getElementById("dsa-problem-list-element");
    const topicTitleElement = document.getElementById("active-dsa-topic-title");
    const topicProgressPill = document.getElementById("dsa-topic-progress-pill");

    function renderTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = DSA_TOPICS.map(topic => {
            const completedCount = topic.problems.filter(p => appState.completedDSA[p.id]).length;
            const isActive = topic.id === appState.activeDSATopic;
            return `
                <button class="dsa-tab-btn ${isActive ? 'active' : ''}" onclick="selectDSATopic('${topic.id}')">
                    <span>${topic.title}</span>
                    <span class="tab-badge-count">${completedCount}/${topic.problems.length}</span>
                </button>
            `;
        }).join("");
    }

    function renderProblems() {
        const topicObj = DSA_TOPICS.find(t => t.id === appState.activeDSATopic) || DSA_TOPICS[0];
        if (topicTitleElement) topicTitleElement.textContent = topicObj.title;

        const completedCount = topicObj.problems.filter(p => appState.completedDSA[p.id]).length;
        const pct = Math.round((completedCount / topicObj.problems.length) * 100);
        if (topicProgressPill) topicProgressPill.textContent = `${pct}% Done`;

        if (!problemListContainer) return;
        problemListContainer.innerHTML = topicObj.problems.map(prob => {
            const isDone = appState.completedDSA[prob.id];
            return `
                <li class="dsa-problem-item ${isDone ? 'completed' : ''}">
                    <div class="problem-meta">
                        <div class="custom-checkbox" onclick="toggleDSAProblem('${prob.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <span class="problem-title">${prob.title}</span>
                        <span class="difficulty-badge ${prob.difficulty}">${prob.difficulty}</span>
                    </div>
                    <div class="problem-actions">
                        <a href="https://leetcode.com/problemset/all/?search=${encodeURIComponent(prob.title)}" target="_blank" class="btn-link">Practice ↗</a>
                    </div>
                </li>
            `;
        }).join("");
    }

    window.selectDSATopic = function(topicId) {
        appState.activeDSATopic = topicId;
        renderTabs();
        renderProblems();
    };

    window.toggleDSAProblem = function(probId) {
        if (appState.completedDSA[probId]) {
            delete appState.completedDSA[probId];
        } else {
            appState.completedDSA[probId] = true;
        }
        saveStateToStorage();
        renderTabs();
        renderProblems();
        renderGrowthStats();
    };

    renderTabs();
    renderProblems();
}

// --- English Hub Component ---
function initEnglishHub() {
    const promptDisplay = document.getElementById("speaking-prompt-display");
    const shadowDisplay = document.getElementById("shadow-text");
    const btnNewTopic = document.getElementById("btn-new-topic");
    const btnNewShadow = document.getElementById("btn-new-shadow-text");
    const btnRecord = document.getElementById("btn-record-speech");
    const recIndicator = document.getElementById("rec-indicator");
    const transcriptBox = document.getElementById("speech-transcript");

    let isRecording = false;
    let recognition = null;

    if (btnNewTopic) {
        btnNewTopic.addEventListener("click", () => {
            const randPrompt = ENGLISH_PROMPTS[Math.floor(Math.random() * ENGLISH_PROMPTS.length)];
            if (promptDisplay) promptDisplay.textContent = `"${randPrompt}"`;
        });
    }

    if (btnNewShadow) {
        btnNewShadow.addEventListener("click", () => {
            const randShadow = SHADOW_TEXTS[Math.floor(Math.random() * SHADOW_TEXTS.length)];
            if (shadowDisplay) shadowDisplay.textContent = `"${randShadow}"`;
        });
    }

    // Speech Recognition Setup
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            let currentTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                currentTranscript += event.results[i][0].transcript;
            }
            if (transcriptBox) transcriptBox.textContent = currentTranscript;
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition Error", event.error);
            stopRecording();
        };

        recognition.onend = () => {
            if (isRecording) stopRecording();
        };
    }

    function stopRecording() {
        isRecording = false;
        if (recognition) recognition.stop();
        if (recIndicator) recIndicator.style.display = "none";
        const btnText = document.getElementById("record-btn-text");
        if (btnText) btnText.textContent = "Start Speaking Practice";
    }

    if (btnRecord) {
        btnRecord.addEventListener("click", () => {
            if (!SpeechRecognition) {
                alert("Speech recognition is not supported in this browser version. Try Google Chrome or Microsoft Edge!");
                return;
            }

            if (!isRecording) {
                isRecording = true;
                if (transcriptBox) transcriptBox.textContent = "";
                recognition.start();
                if (recIndicator) recIndicator.style.display = "flex";
                const btnText = document.getElementById("record-btn-text");
                if (btnText) btnText.textContent = "Stop Practice";
            } else {
                stopRecording();
            }
        });
    }
}

// --- Zen Space (Meditation) Component ---
function initZenSpace() {
    const timerDisplay = document.getElementById("meditation-timer-display");
    const btnPlay = document.getElementById("btn-meditation-play");
    const durationBtns = document.querySelectorAll(".time-opt");
    const breathCircle = document.getElementById("breath-circle");
    const breathText = document.getElementById("breath-instructions");
    const btnAmbient = document.getElementById("btn-meditation-ambient");

    let timerInterval = null;
    let breathInterval = null;
    let audioCtx = null;
    let oscillator = null;

    durationBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            durationBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appState.meditationTime = parseInt(btn.getAttribute("data-time"));
            appState.meditationRemaining = appState.meditationTime;
            updateMeditationDisplay();
        });
    });

    function updateMeditationDisplay() {
        const mins = Math.floor(appState.meditationRemaining / 60);
        const secs = appState.meditationRemaining % 60;
        if (timerDisplay) {
            timerDisplay.textContent = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        }
    }

    function startBreathingGuide() {
        let state = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold
        function step() {
            if (state === 0) {
                breathCircle?.classList.remove("hold");
                breathCircle?.classList.add("inhale");
                if (breathText) breathText.textContent = "Inhale...";
            } else if (state === 1) {
                breathCircle?.classList.add("hold");
                if (breathText) breathText.textContent = "Hold...";
            } else if (state === 2) {
                breathCircle?.classList.remove("inhale", "hold");
                if (breathText) breathText.textContent = "Exhale...";
            } else {
                if (breathText) breathText.textContent = "Rest...";
            }
            state = (state + 1) % 4;
        }
        step();
        breathInterval = setInterval(step, 4000);
    }

    function stopBreathingGuide() {
        clearInterval(breathInterval);
        breathCircle?.classList.remove("inhale", "hold");
        if (breathText) breathText.textContent = "Relax";
    }

    // Ambient Synthesizer Tone (Web Audio API)
    function toggleAmbientSound() {
        if (!appState.ambientSoundActive) {
            try {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                oscillator = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(136.1, audioCtx.currentTime); // Om / 136.1 Hz relaxing pitch

                gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
                oscillator.connect(gain);
                gain.connect(audioCtx.destination);

                oscillator.start();
                appState.ambientSoundActive = true;
                if (btnAmbient) btnAmbient.textContent = "Sound: On 🎵";
            } catch (e) {
                console.error("Audio error", e);
            }
        } else {
            if (oscillator) oscillator.stop();
            appState.ambientSoundActive = false;
            if (btnAmbient) btnAmbient.textContent = "Sound: Off";
        }
    }

    if (btnAmbient) {
        btnAmbient.addEventListener("click", toggleAmbientSound);
    }

    if (btnPlay) {
        btnPlay.addEventListener("click", () => {
            if (!appState.isMeditationRunning) {
                appState.isMeditationRunning = true;
                btnPlay.textContent = "Pause Session";
                btnPlay.classList.replace("btn-primary", "btn-secondary");
                startBreathingGuide();

                timerInterval = setInterval(() => {
                    appState.meditationRemaining--;
                    updateMeditationDisplay();

                    if (appState.meditationRemaining <= 0) {
                        clearInterval(timerInterval);
                        stopBreathingGuide();
                        appState.isMeditationRunning = false;
                        btnPlay.textContent = "Start Session";
                        btnPlay.classList.replace("btn-secondary", "btn-primary");
                        alert("🧘 Meditation session complete. Great job grounding yourself!");
                    }
                }, 1000);
            } else {
                clearInterval(timerInterval);
                stopBreathingGuide();
                appState.isMeditationRunning = false;
                btnPlay.textContent = "Resume Session";
                btnPlay.classList.replace("btn-secondary", "btn-primary");
            }
        });
    }

    updateMeditationDisplay();
}

// --- Settings Component ---
function initSettings() {
    const batchBtns = document.querySelectorAll(".batch-btn");
    const activeBatchTexts = document.querySelectorAll(".active-batch-text");
    const userSubText = document.querySelector(".user-sub");
    const avatar = document.querySelector(".avatar");
    const subjectsContainer = document.getElementById("subjects-selector-container");
    const btnSaveSubjects = document.getElementById("btn-save-subjects");
    const btnResetData = document.getElementById("btn-reset-data");

    // Set initial batch UI
    batchBtns.forEach(btn => {
        if (btn.getAttribute("data-batch") === appState.batch) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }

        btn.addEventListener("click", () => {
            batchBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            appState.batch = btn.getAttribute("data-batch");
            
            // Update UI elements displaying batch
            activeBatchTexts.forEach(el => el.textContent = appState.batch);
            if (userSubText) userSubText.textContent = `Batch ${appState.batch}`;
            if (avatar) avatar.textContent = appState.batch;

            saveStateToStorage();
            initTimetable();
            updateLiveClockAndTask();
        });
    });

    // Subject Editors
    function renderSubjectInputs() {
        if (!subjectsContainer) return;
        subjectsContainer.innerHTML = appState.focusSubjects.map((subName, index) => `
            <div class="subject-edit-item">
                <div class="subject-header-row">
                    <label>Core Subject ${index + 1}</label>
                </div>
                <input type="text" class="subject-input" data-index="${index}" value="${subName}">
            </div>
        `).join("");
    }

    if (btnSaveSubjects) {
        btnSaveSubjects.addEventListener("click", () => {
            const inputs = document.querySelectorAll(".subject-input");
            inputs.forEach(inp => {
                const idx = parseInt(inp.getAttribute("data-index"));
                appState.focusSubjects[idx] = inp.value.trim() || `Subject ${idx + 1}`;
            });
            saveStateToStorage();
            renderHabitChecklist();
            alert("Custom subjects updated successfully!");
        });
    }

    if (btnResetData) {
        btnResetData.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all habit progress, DSA checkboxes, and app settings?")) {
                localStorage.removeItem("aura_routine_state");
                location.reload();
            }
        });
    }

    renderSubjectInputs();
}
