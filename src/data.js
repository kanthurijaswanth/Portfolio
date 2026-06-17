// ============================================================================
//  ALL OF YOUR PORTFOLIO CONTENT LIVES HERE.
//  Edit any text below and the whole site updates. Nothing else to change.
// ============================================================================

export const profile = {
  name: "Kanthuri Jaswanth Royal",
  firstName: "Jaswanth",
  // Words that get cycled in the animated hero subtitle:
  roles: [
    "Software Developer",
    "Mobile App Developer",
    "Diagnostic Tools Engineer",
    "Software-meets-Hardware",
  ],
  headline: "Software Developer @ MakeMyTechnology",
  location: "Bengaluru, Karnataka, India",
  email: "kanthurijaswanth1234@gmail.com",
  linkedin: "https://www.linkedin.com/in/kanthuri-jaswanth-royal-444861225",
  // Optional — fill these in if you have them, otherwise leave as "" to hide:
  github: "https://github.com/kanthurijaswanth",
  phone: "+91 6304206064",
  resumeUrl: "./resume.pdf",

  summary:
    "I'm a Software Developer focused on mobile application development and specialized diagnostic tools. My expertise lies in building high-performance software that talks directly to hardware to solve complex technical challenges. I take projects from the first line of code all the way to deployment — shipping both mobile APKs and desktop installers that power real-time data analysis and system monitoring. I thrive where software meets hardware, especially in the telecommunications and diagnostics space.",

  // Small stats shown under the hero — tweak freely:
  stats: [
    { value: "1+", label: "Years Experience" },
    { value: "5", label: "Projects Built" },
    { value: "2", label: "Certifications" },
  ],
};

export const experience = [
  {
    company: "MakeMyTechnology",
    role: "Software Developer",
    period: "July 2025 — Present",
    location: "Bengaluru, India",
    project: "COTS — Network Diagnostic Tool",
    summary:
      "Built a specialized network monitoring and diagnostic tool (similar in functionality to QXDM), with a focus on making it accessible across platforms so field engineers could use it effectively in the real world.",
    points: [
      "Mobile & Desktop Development — built the mobile APK from scratch for on-the-go monitoring and developed the Windows installer for laptop use.",
      "Feature Integration — implemented core features to track real-time network health: signal strength (RF parameters), data speeds via iPerf, and connectivity stability through ping tests.",
      "End-to-End Setup — integrated the software with hardware like Raspberry Pi and SIM modules so the tool could accurately capture and log drive-test data.",
    ],
    tags: ["Mobile (APK)", "Windows Installer", "RF / Signal", "iPerf", "Raspberry Pi", "SIM Modules"],
    link: "",
  },
  {
    company: "Brain O Vision",
    role: "Cloud Computing Intern",
    period: "Internship",
    location: "Remote",
    project: "AWS Cloud-Native Application",
    summary:
      "Built and deployed a cloud-native application on Amazon Web Services, getting hands-on with core AWS infrastructure and serverless API design.",
    points: [
      "Deployed compute workloads on Amazon EC2 and stored assets in Amazon S3.",
      "Exposed and managed application APIs through Amazon API Gateway.",
      "Learned to architect and ship an application the cloud-native way, end to end.",
    ],
    tags: ["AWS", "EC2", "S3", "API Gateway", "Cloud-Native"],
    link: "https://drive.google.com/file/d/1rBQ0UrM4tXzY8rz4I_u2IblpXvXmMYGT/view?usp=sharing",
    linkLabel: "View certificate",
  },
];

// These are my own personal projects (the COTS tool is professional work for
// MakeMyTechnology — see the Experience section).
export const projects = [
  {
    title: "TicketResell",
    tagline: "Open Source · Android",
    blurb:
      "A two-sided marketplace for last-minute, non-cancellable bus & train tickets. Sellers upload a ticket they can't use; the app auto-extracts details with on-device OCR, runs a duplicate-image check across all listings, and puts it live. Buyers browse verified tickets nearby and chat in-app.",
    highlights: [
      "On-device OCR (ML Kit) extracts PNR, route & date — free and offline",
      "Custom 16×16 perceptual-hash detects duplicate ticket uploads",
      "Consent-based contact reveal — numbers shared only after both agree",
      "Realtime listings & chat backed by Supabase (Postgres + Realtime)",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Hilt / MVVM", "Supabase", "ML Kit OCR"],
    github: "https://github.com/kanthurijaswanth/Ticket_Seller",
    demo: "",
    // visual.type → "phone" | "browser" | "emotion". Set shot to a PNG path in
    // public/shots/ to replace the animated mockup with a real screenshot.
    visual: { type: "phone", shot: "" },
    snippet: {
      lang: "Kotlin",
      file: "ImageHasher.kt",
      code: `// 16×16 perceptual hash — catches duplicate ticket uploads
fun pHash(bitmap: Bitmap, size: Int = 16): String {
    val gray = Bitmap.createScaledBitmap(bitmap, size, size, true)
    val pixels = IntArray(size * size)
    gray.getPixels(pixels, 0, size, 0, 0, size, size)
    val lums = IntArray(pixels.size) { i ->
        val p = pixels[i]
        (Color.red(p) + Color.green(p) + Color.blue(p)) / 3
    }
    val avg = lums.average()
    return buildString {
        for (l in lums) append(if (l > avg) '1' else '0')
    }
}`,
    },
  },
  {
    title: "Student LMS",
    tagline: "Live · Deployed on Render",
    blurb:
      "A free, full-featured Learning Management System with a built-in multi-language coding judge, MCQ practice banks, a full course player, auto-graded quizzes with anti-cheat proctoring, PDF certificates with verification codes, and gamification (XP, badges, streaks, leaderboard).",
    highlights: [
      "One coding judge, 6 languages — Python runs in-browser via Pyodide (WASM)",
      "Java / C++ / C / Go execute via Judge0 → Piston → local subprocess fallback",
      "Anti-cheat quizzes: fullscreen lock, tab-switch detection, webcam proctoring",
      "Auto-issued PDF certificates with unique verification codes",
    ],
    tech: ["Next.js 14", "React", "Prisma", "PostgreSQL", "NextAuth", "Pyodide"],
    github: "",
    demo: "https://lms-m3bk.onrender.com/dashboard",
    demoLabel: "View LMS",
    visual: { type: "browser", shot: "./shots/lms.png" },
    snippet: {
      lang: "TypeScript",
      file: "code-runner.ts",
      code: `// One coding judge, six languages — resolved per-language at runtime
const JUDGE0_LANG: Record<string, number> = {
  python: 71, javascript: 63, java: 62,
  cpp: 54,   c: 50,          go: 60,
};

// Python runs fully client-side via Pyodide (CPython → WebAssembly);
// Java / C++ / C / Go fall back: Judge0 → self-hosted Piston → subprocess.
export function isSupported(lang: string): boolean {
  return lang in PISTON_LANG;
}`,
    },
  },
  {
    title: "Emotion-Music Recommendation",
    tagline: "Open Source · MIT · Python",
    blurb:
      "A system that recommends music from your real-time facial expression. A webcam feed is read frame-by-frame, a CNN classifies the emotion, and a matching Spotify playlist is fetched live via the Spotipy API — wrapped in a clean neumorphic UI.",
    highlights: [
      "CNN trained on the FER2013 dataset to classify 7 emotions (~66% acc.)",
      "Real-time face detection with OpenCV Haar Cascades",
      "Live, multithreaded video stream for smooth frame rates",
      "Detected mood → mapped Spotify playlist via the Spotipy API",
    ],
    tech: ["Python", "TensorFlow / Keras", "OpenCV", "Flask", "Spotipy"],
    github: "https://github.com/kanthurijaswanth/music-recommendation-system",
    demo: "",
    files: "https://drive.google.com/drive/folders/1vzA7nqZzu2uPCyyGcxfXwWgZLEGLz8oT?usp=sharing",
    visual: { type: "emotion", shot: "" },
    snippet: {
      lang: "Python",
      file: "model.py",
      code: `# FER2013 emotion CNN → maps the detected mood to a Spotify playlist
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(48, 48, 1)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(2, 2), Dropout(0.25),
    Conv2D(128, (3, 3), activation='relu'),
    MaxPooling2D(2, 2), Dropout(0.25),
    Flatten(),
    Dense(1024, activation='relu'), Dropout(0.5),
    Dense(7, activation='softmax'),   # 7 emotions
])`,
    },
  },
];

// Earlier / academic projects — shown as compact cards (no code snippet).
export const moreProjects = [
  {
    title: "Food Ordering Chatbot",
    blurb:
      "A conversational bot for ordering food online. It presents the menu in the message box, captures the user's selections into an order list, and forwards the compiled list to the restaurant.",
    tech: ["Python", "Chatbot / NLP"],
    link: "https://drive.google.com/drive/folders/1hP4JdSCw77wCgnRsmB3yNXIkXunKP65M?usp=sharing",
  },
  {
    title: "Plant Identification (API)",
    blurb:
      "Identifies plant species from a photo using the Plant.id API. The app matches the image against the database, ranks results by confidence percentage, picks the highest match, and parses the JSON response into clean, readable text for the user.",
    tech: ["Python", "Plant.id API", "REST / JSON"],
    link: "https://drive.google.com/drive/folders/1o_0_ZA4bDEFp6BAnkP2fGkbVGljFMuTM?usp=sharing",
  },
];

export const certifications = [
  {
    title: "Certified System Administrator",
    issuer: "ServiceNow",
    link: "https://drive.google.com/drive/folders/1h1az9cnQTAUmaEPklzwHOJGy0iIGYqBX?usp=sharing",
  },
  {
    title: "Certified Application Developer",
    issuer: "ServiceNow",
    link: "https://drive.google.com/drive/folders/1h1az9cnQTAUmaEPklzwHOJGy0iIGYqBX?usp=sharing",
  },
];

export const skills = [
  {
    group: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 78 },
      { name: "Kotlin", level: 78 },
      { name: "JavaScript / TypeScript", level: 78 },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Django", level: 82 },
      { name: "Next.js / React", level: 80 },
      { name: "HTML & CSS", level: 80 },
      { name: "Jetpack Compose", level: 76 },
      { name: "TensorFlow / Keras", level: 70 },
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      { name: "SQL / PostgreSQL", level: 82 },
      { name: "Supabase", level: 78 },
      { name: "AWS (EC2 / S3)", level: 72 },
      { name: "ServiceNow", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    group: "Systems & Hardware",
    items: [
      { name: "Networking / iPerf", level: 78 },
      { name: "Raspberry Pi", level: 75 },
      { name: "SIM Modules / RF", level: 70 },
      { name: "OpenCV / OCR", level: 72 },
    ],
  },
];

export const education = [
  {
    school: "K.S.R.M. College of Engineering",
    degree: "B.Tech — Computer Science Engineering",
    period: "2021 — 2025",
    detail:
      "Graduated with a strong foundation in software engineering, programming, and computer science fundamentals.",
    score: "85%",
  },
  {
    school: "Pushpagiri Residential Public School (CBSE)",
    degree: "Intermediate — MPC (Maths, Physics, Chemistry)",
    period: "2021",
    detail: "Higher secondary education with a focus on mathematics and sciences.",
    score: "72%",
  },
  {
    school: "Pushpagiri Residential Public School (CBSE)",
    degree: "Class X (Secondary School)",
    period: "2019",
    detail: "Completed secondary schooling under the CBSE curriculum.",
    score: "71%",
  },
];

// ── Featured posts / writing. ──
// Paste your LinkedIn post text here and they'll appear automatically.
// Set this to [] (empty) to hide the whole section.
export const posts = [
  // {
  //   title: "Short title or first line of your post",
  //   excerpt: "A sentence or two from the post...",
  //   date: "Jun 2026",
  //   link: "https://www.linkedin.com/posts/...",
  // },
];
