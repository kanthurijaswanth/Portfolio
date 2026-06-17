import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiMessageCircle, FiWifi, FiPlay } from "react-icons/fi";

/* ==========================================================================
   Animated product mockups used in the Projects section.
   Each one is a faithful, lightweight recreation of the real app's UI.
   Replace any of these with a real screenshot by setting `visual.shot`
   in src/data.js (see ShotFrame below).
   ========================================================================== */

const ease = [0.22, 1, 0.36, 1];

/* ---- Real screenshot frame (used when visual.shot is provided) ---- */
export function ShotFrame({ src, alt, kind = "browser", onError }) {
  if (kind === "phone") {
    return (
      <div className="mk phone">
        <div className="phone-notch" />
        <img className="phone-shot" src={src} alt={alt} onError={onError} />
      </div>
    );
  }
  return (
    <div className="mk browser">
      <div className="bw-bar">
        <span className="bw-dots">
          <i /><i /><i />
        </span>
        <span className="bw-url">{alt}</span>
      </div>
      <img className="bw-shot" src={src} alt={alt} onError={onError} />
    </div>
  );
}

/* ---- TicketResell — phone app mockup ---- */
export function PhoneMock() {
  return (
    <motion.div
      className="mk phone"
      initial={{ opacity: 0, y: 30, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="tr-head">
          <span className="tr-logo">🎫 TicketResell</span>
          <span className="tr-loc"><FiWifi /> Nearby</span>
        </div>

        {/* Scanning ticket card */}
        <div className="tr-scan">
          <div className="tr-scanline-wrap">
            <motion.div
              className="tr-scanline"
              animate={{ y: [0, 70, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="tr-ticket-mini">
              <span>PNR 4821 · 17:40</span>
              <span className="tr-route">BLR → HYD</span>
            </div>
          </div>
          <motion.span
            className="tr-ocr"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FiCheckCircle /> OCR verified
          </motion.span>
        </div>

        {/* Listings */}
        {[
          { r: "Bangalore → Hyderabad", p: "₹680", t: "Bus · 8:10 PM" },
          { r: "Chennai → Bangalore", p: "₹540", t: "Train · 6:30 AM" },
        ].map((l, i) => (
          <motion.div
            className="tr-card"
            key={l.r}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.5, ease }}
          >
            <div>
              <div className="tr-card-route">{l.r}</div>
              <div className="tr-card-time">{l.t}</div>
            </div>
            <div className="tr-card-right">
              <span className="tr-verified"><FiCheckCircle /></span>
              <span className="tr-price">{l.p}</span>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="tr-chat"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiMessageCircle /> Chat &amp; share contact only after both agree
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---- Student LMS — browser dashboard mockup ---- */
export function BrowserMock() {
  const cells = Array.from({ length: 35 });
  return (
    <motion.div
      className="mk browser"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="bw-bar">
        <span className="bw-dots"><i /><i /><i /></span>
        <span className="bw-url">lms-m3bk.onrender.com/dashboard</span>
      </div>
      <div className="bw-body">
        <div className="lms-side">
          <span className="lms-brand">🎓 LMS</span>
          {["Dashboard", "Courses", "Coding", "MCQ", "Certs"].map((m, i) => (
            <span key={m} className={`lms-nav ${i === 0 ? "active" : ""}`}>{m}</span>
          ))}
        </div>
        <div className="lms-main">
          <div className="lms-hello">Welcome back, Jaswanth 👋</div>

          <div className="lms-stats">
            {[
              { n: "1,240", l: "XP" },
              { n: "12", l: "Day streak" },
              { n: "5", l: "Courses" },
            ].map((s, i) => (
              <motion.div
                className="lms-stat"
                key={s.l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <b>{s.n}</b>
                <span>{s.l}</span>
              </motion.div>
            ))}
          </div>

          <div className="lms-label">Submission activity</div>
          <div className="lms-heat">
            {cells.map((_, i) => (
              <motion.span
                key={i}
                className="heat-cell"
                style={{ "--lvl": (i * 7) % 4 }}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.012 }}
              />
            ))}
          </div>

          <div className="lms-course">
            <div className="lms-course-top">
              <span>Python Full Stack</span>
              <span className="lms-pct">68%</span>
            </div>
            <div className="lms-progress">
              <motion.div
                className="lms-progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- Music Recommendation — emotion → playlist mockup ---- */
const MOODS = [
  { mood: "Happy", emoji: "😄", color: "#f59e0b", songs: ["Sunroof", "Levitating", "Blinding Lights"] },
  { mood: "Calm", emoji: "😌", color: "#06b6d4", songs: ["Weightless", "Holocene", "Saturn"] },
  { mood: "Energetic", emoji: "🤩", color: "#ef4444", songs: ["Stronger", "Believer", "Titanium"] },
];

export function EmotionMock() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % MOODS.length), 2600);
    return () => clearInterval(t);
  }, []);
  const m = MOODS[i];

  return (
    <motion.div
      className="mk emotion"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease }}
    >
      <div className="em-cam">
        <div className="em-cam-top">
          <span className="em-rec"><i /> LIVE</span>
          <span className="em-cam-label">webcam</span>
        </div>
        <div className="em-face">
          <motion.div
            className="em-ring"
            style={{ borderColor: `${m.color} transparent transparent ${m.color}` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              className="em-emoji"
              key={m.mood}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {m.emoji}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="em-mood">
          <AnimatePresence mode="wait">
            <motion.span
              key={m.mood}
              className="em-mood-pill"
              style={{ background: m.color }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {m.mood}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="em-play">
        <div className="em-play-head">
          <span>Recommended for you</span>
          <span className="em-eq">
            {[0, 1, 2, 3].map((b) => (
              <motion.i
                key={b}
                animate={{ scaleY: [0.4, 1, 0.4] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.12 }}
              />
            ))}
          </span>
        </div>
        <div className="em-songs">
          <AnimatePresence mode="wait">
            <motion.div
              key={m.mood}
              className="em-song-set"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
            >
              {m.songs.map((s, si) => (
                <motion.div
                  className="em-song"
                  key={s}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: si * 0.08 }}
                >
                  <span className="em-song-ico" style={{ background: m.color }}>
                    <FiPlay />
                  </span>
                  <span className="em-song-name">{s}</span>
                  <span className="em-song-bars">
                    {[0, 1, 2].map((b) => (
                      <i key={b} />
                    ))}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ---- Dispatcher ----
   If visual.shot is set we show the real screenshot; if that image fails to
   load (e.g. the file hasn't been added yet) we gracefully fall back to the
   animated mockup so nothing ever looks broken. */
export function ProjectVisual({ visual, title, url }) {
  const [err, setErr] = useState(false);
  const mock =
    visual?.type === "phone" ? (
      <PhoneMock />
    ) : visual?.type === "emotion" ? (
      <EmotionMock />
    ) : (
      <BrowserMock />
    );

  if (visual?.shot && !err) {
    const kind = visual.type === "phone" ? "phone" : "browser";
    const label = (url || "").replace(/^https?:\/\//, "") || title;
    return (
      <ShotFrame
        src={visual.shot}
        alt={label}
        kind={kind}
        onError={() => setErr(true)}
      />
    );
  }
  return mock;
}
