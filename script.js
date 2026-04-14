"use strict";

const PARAGRAPHS = {
  easy: [
    "Cats sleep on warm sofas every afternoon.",
    "I write short notes before each class.",
    "The sun shines bright over calm water.",
    "My friend reads books near the window.",
    "We cook pasta and drink fresh juice.",
    "Birds sing softly above the quiet road.",
    "He keeps pencils inside a blue box.",
    "They walk slowly after a rainy morning.",
    "Our class starts early every Monday."
  ],
  medium: [
    "Regular typing practice improves control when your fingers learn predictable motion patterns.",
    "A calm pace often produces better results than rushing through every unfamiliar word.",
    "Consistent posture helps reduce wrist fatigue during longer focus sessions at home.",
    "Tracking your weak letters makes each practice round more targeted and productive.",
    "Small improvements in rhythm usually create noticeable gains in both speed and precision.",
    "When you repeat common word groups, your transitions become smoother and your typing confidence rises.",
    "Balanced breathing and relaxed shoulders can improve endurance during longer typing sessions.",
    "Focusing on clean key hits first often leads to faster speed growth over the next rounds.",
    "Reviewing your mistakes after each run helps you correct patterns before they become habits."
  ],
  hard: [
    "Meticulous repetition cultivates dexterity, allowing typists to sustain velocity while preserving consistent precision under cognitive pressure.",
    "As lexical complexity increases, maintaining rhythmic keystrokes becomes essential for minimizing interruption frequency and preserving performance stability.",
    "Deliberate correction strategies improve long-term fluency, especially when uncommon letter clusters repeatedly challenge motor coordination.",
    "Advanced typing sessions demand concentration, ergonomic discipline, and adaptive pacing to avoid accuracy collapse during dense passages.",
    "When syntactic structures become intricate, efficient finger transitions and anticipation skills determine whether momentum survives difficult segments.",
    "Sustained high-precision output requires deliberate tempo regulation, particularly when unfamiliar vocabulary fragments reduce predictive flow.",
    "Granular error analysis can reveal subtle timing faults that repeatedly disrupt acceleration in technically demanding passages.",
    "Strategic micro-pauses between dense phrases may stabilize control without materially damaging overall words-per-minute performance.",
    "Experienced typists refine recovery mechanics so that isolated errors do not trigger cascading rhythm degradation."
  ],
  extreme: [
    "Qzxw fjord glyphs collide while mnemonic shards twist through hyperdense pseudo-lexical turbulence and unstable letter cascades.",
    "Vrtnk sequences fracture coherence: blent, scrived, knurled, thrummed, then re-folded into jagged phonetic anomalies.",
    "Consonant storms overrun spacing logic, injecting abrupt pivots where fragments mutate before motor memory can stabilize.",
    "Threaded nonce-words interlock in hostile rhythm, forcing split-second remapping across volatile clusters and broken cadence.",
    "Erratic micro-patterns dismantle anticipation loops, producing relentless transitions that deny comfort, flow, and predictable recovery.",
    "Xrql-phrases splinter mid-flight as qvnt clusters ricochet through warped syllabic noise and drifted punctuation shadows.",
    "Brittle grapheme chains invert expectation; knx-torque bursts then collapse into half-formed lexical static.",
    "Pseudo-morpheme spirals fold around abrupt symbol seams, fracturing cadence into unresolvable micro-pauses and jagged resets.",
    "Zntv shards cross-thread with broken orthography, erasing predictive anchors before muscular adaptation can converge."
  ]
};

const SYMBOL_PARAGRAPHS = {
  easy: [
    "Cats nap softly... then wake up fast!",
    "I write short notes; then smile :)",
    "Sunlight feels warm, calm, and bright!",
    "My friend reads books (and drinks tea).",
    "We cook pasta & share fresh juice!",
    "Can you type this: 50% done?",
    "She said, 'Great job!' and waved.",
    "Rain drops? yes... but road = dry!",
    "Tea (hot) + toast & jam = nice.",
    "I saved 25% and bought 2 pens.",
    "Can we go now? 'Sure!' he said."
  ],
  medium: [
    "Regular typing practice improves control, and it feels smoother over time.",
    "A calm pace helps you avoid errors... then your flow becomes stronger.",
    "Consistent posture reduces strain (especially during longer focus sessions).",
    "Track weak letters, fix patterns, and push progress with cleaner timing!",
    "Small rhythm gains boost speed & precision when pressure starts rising.",
    "He asked, 'Ready now?' so I typed: yes/no.",
    "Plan A -> test, Plan B -> adjust; keep 70% focus.",
    "Use check-points: start -> mid -> finish; then log mistakes (%).",
    "If rhythm drops, pause (2s), breathe, and resume with cleaner timing.",
    "Speed climbed 12%, but control fell... so retry at 90% pace.",
    "Notes say: 'stay loose, hit clean, avoid panic!'"
  ],
  hard: [
    "Meticulous repetition cultivates dexterity, yet precision still matters when speed surges!",
    "As lexical complexity increases, rhythm becomes essential... otherwise momentum collapses.",
    "Deliberate correction strategies improve fluency (particularly with uncommon clusters).",
    "Advanced sessions demand focus, discipline, and adaptive pacing under pressure.",
    "Intricate structures require anticipation, efficient transitions, and stable control.",
    "When constraints shift, re-plan quickly: analyze -> decide -> execute -> review.",
    "Experts balance speed/accuracy trade-offs; even 1% drift can trigger cascading errors.",
    "High-density clauses (with abrupt pivots) test stability: recover fast, but avoid reckless bursts.",
    "Latency spikes? trim overreach, reset cadence, and keep error-rate below 4%.",
    "Complex symbols + rare clusters = fragile flow; precision-first strategy often wins.",
    "Adaptive pacing (not pure speed) sustains output when syntax becomes chaotic."
  ],
  extreme: [
    "Qz!xv? glyph-flood -> wrk//spn... then 'krnth' bends (again) @ 99% overload.",
    "Fractured tokens: bl!nt, scr!ved, kn#rled, thr%mmed; cadence = unstable / null.",
    "Pseudo-words collide... 'vrtnk' -> (qlph) -> zyx; rhythm? broken! flow? denied!",
    "Split-second remap: gr!d-lock, mis-fire, re-aim, loop... while symbols (&%#!) keep spawning.",
    "Noise-chain active: xq::rv -> t'lm? -> brk//fn; precision drops, recovery stalls...",
    "Kr!x% vault -> ql//dsp... then (znt) shatters: retry? fail-state @ 0.03s.",
    "Glitch-lexeme storm: br'k, flx#, qv?m... cadence desync -> hard reset!",
    "Torn syntax loops: nll::ptr -> vrd//scr -> 'x!' (overflow) & drift.",
    "Symbol-pressure maxed: %%##!! + fractured stems -> control collapse imminent."
  ]
};

const textDisplay = document.getElementById("text-display");
const typingInput = document.getElementById("typing-input");
const restartBtn = document.getElementById("restart-btn");
const difficultySelect = document.getElementById("difficulty-select");
const symbolsToggleBtn = document.getElementById("symbols-toggle-btn");
const modeSelect = document.getElementById("mode-select");
const timeDurationSelect = document.getElementById("time-duration-select");
const timeControls = document.getElementById("time-controls");
const survivalControls = document.getElementById("survival-controls");
const streakControls = document.getElementById("streak-controls");
const memoryControls = document.getElementById("memory-controls");
const timeRemaining = document.getElementById("time-remaining");
const livesValue = document.getElementById("lives-value");
const currentStreakValue = document.getElementById("current-streak-value");
const bestStreakValue = document.getElementById("best-streak-value");
const previewCountdownValue = document.getElementById("preview-countdown-value");
const livesHearts = document.getElementById("lives-hearts");
const wpmValue = document.getElementById("wpm-value");
const scoreValue = document.getElementById("score-value");
const mistakesValue = document.getElementById("mistakes-value");
const timerValue = document.getElementById("timer-value");
const progressValue = document.getElementById("progress-value");
const resultSection = document.getElementById("result-section");
const resultContent = document.getElementById("result-content");
const difficultContent = document.getElementById("difficult-content");
const coachContent = document.getElementById("coach-content");

let currentParagraph = "";
let typedText = "";
let timeElapsed = 0;
let timerId = null;
let startTime = null;
let totalKeystrokes = 0;
let correctKeystrokes = 0;
let gameEnded = false;
let letterMistakes = {};
let letterPresses = {};
let letterCorrects = {};
let selectedDifficulty = "medium";
let symbolsEnabled = false;
let selectedMode = "practice";
let mistakeKeystrokes = 0;
let lives = 3;
let currentStreak = 0;
let bestStreak = 0;
let streakPoints = 0;
let streakMultiplier = 1;
let previewSecondsLeft = 0;
let previewIntervalId = null;
let memoryFadeIntervalId = null;
let memoryFadeStarted = false;
let memoryFadeProgress = 0;
let timeRemainingSeconds = 60;
let targetText = "";

const MEMORY_PREVIEW_SECONDS = {
  easy: 8,
  medium: 6,
  hard: 4,
  extreme: 3
};

const MEMORY_FADE_SECONDS = {
  easy: 10,
  medium: 8,
  hard: 6,
  extreme: 5
};

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  [" "]
];
const COACH_HISTORY_KEY = "typingCoachHistoryV1";
const COACH_HISTORY_LIMIT = 20;

function getParagraphPool(difficulty) {
  const source = symbolsEnabled ? SYMBOL_PARAGRAPHS : PARAGRAPHS;
  return source[difficulty] || source.medium;
}

function getRandomParagraphByDifficulty(difficulty) {
  const pool = getParagraphPool(difficulty);
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function updateSymbolsToggleButton() {
  symbolsToggleBtn.textContent = `Symbols: ${symbolsEnabled ? "On" : "Off"}`;
  symbolsToggleBtn.classList.toggle("active", symbolsEnabled);
  symbolsToggleBtn.setAttribute("aria-pressed", symbolsEnabled ? "true" : "false");
}

function hideAllModeExtras() {
  timeControls.classList.add("hidden");
  survivalControls.classList.add("hidden");
  streakControls.classList.add("hidden");
  memoryControls.classList.add("hidden");
}

function updateModeExtrasUI() {
  hideAllModeExtras();

  if (selectedMode === "time") {
    timeControls.classList.remove("hidden");
  } else if (selectedMode === "survival") {
    survivalControls.classList.remove("hidden");
  } else if (selectedMode === "streak") {
    streakControls.classList.remove("hidden");
  } else if (selectedMode === "memory") {
    memoryControls.classList.remove("hidden");
  }
}

function renderParagraph() {
  currentParagraph = getRandomParagraphByDifficulty(selectedDifficulty);
  if (selectedMode === "time") {
    const longChunks = [currentParagraph];
    for (let i = 0; i < 7; i += 1) {
      longChunks.push(getRandomParagraphByDifficulty(selectedDifficulty));
    }
    targetText = longChunks.join(" ");
  } else {
    targetText = currentParagraph;
  }
  textDisplay.innerHTML = "";

  for (const char of targetText) {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char;
    textDisplay.appendChild(span);
  }
}

function renderMaskedParagraph() {
  const charSpans = textDisplay.querySelectorAll(".char");
  for (let i = 0; i < charSpans.length; i += 1) {
    charSpans[i].classList.add("memory-obscured");
  }
  textDisplay.classList.add("memory-hidden");
}

function clearMemoryMask() {
  textDisplay.classList.remove("memory-hidden");
  const charSpans = textDisplay.querySelectorAll(".char");
  for (let i = 0; i < charSpans.length; i += 1) {
    charSpans[i].classList.remove("memory-obscured");
  }
}

function updateMemoryFade(progress) {
  const charSpans = textDisplay.querySelectorAll(".char");
  const hideCount = Math.floor(charSpans.length * progress);

  for (let i = 0; i < charSpans.length; i += 1) {
    if (i < hideCount) {
      charSpans[i].classList.add("memory-obscured");
    } else {
      charSpans[i].classList.remove("memory-obscured");
    }
  }
}

function stopMemoryFade() {
  if (memoryFadeIntervalId) {
    clearInterval(memoryFadeIntervalId);
    memoryFadeIntervalId = null;
  }
}

function getMemoryFadeSeconds() {
  return MEMORY_FADE_SECONDS[selectedDifficulty] || MEMORY_FADE_SECONDS.medium;
}

function startMemoryFadeOnTyping() {
  if (memoryFadeStarted) {
    return;
  }

  memoryFadeStarted = true;
  memoryFadeProgress = 0;
  const fadeDurationMs = getMemoryFadeSeconds() * 1000;
  const fadeStartMs = Date.now();

  stopMemoryFade();
  memoryFadeIntervalId = setInterval(() => {
    const elapsedMs = Date.now() - fadeStartMs;
    const clampedElapsed = Math.min(elapsedMs, fadeDurationMs);
    memoryFadeProgress = fadeDurationMs > 0 ? clampedElapsed / fadeDurationMs : 1;
    updateMemoryFade(memoryFadeProgress);

    if (clampedElapsed >= fadeDurationMs) {
      stopMemoryFade();
      renderMaskedParagraph();
    }
  }, 120);
}

function getCorrectCharsCount() {
  let correctChars = 0;

  for (let i = 0; i < typedText.length; i += 1) {
    if (typedText[i] === targetText[i]) {
      correctChars += 1;
    }
  }

  return correctChars;
}

function updateCharacterHighlighting() {
  if (selectedMode === "memory") {
    return;
  }

  const charSpans = textDisplay.querySelectorAll(".char");

  for (let i = 0; i < charSpans.length; i += 1) {
    const span = charSpans[i];
    span.className = "char";

    if (i < typedText.length) {
      if (typedText[i] === targetText[i]) {
        span.classList.add("correct");
      } else {
        span.classList.add("incorrect");
      }
    } else if (i === typedText.length) {
      span.classList.add("current");
    }
  }
}

function updateProgress() {
  const progress = targetText.length > 0
    ? Math.min((typedText.length / targetText.length) * 100, 100)
    : 0;

  progressValue.textContent = `${Math.round(progress)}%`;
}

function computeLetterMistakes() {
  return letterMistakes;
}

function formatLetter(char) {
  if (char === " ") {
    return "space";
  }
  return char;
}

function renderDifficultLetters() {
  const entries = Object.entries(letterMistakes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  if (entries.length === 0) {
    difficultContent.innerHTML = "<p>No difficult letters yet.</p>";
    return;
  }

  difficultContent.innerHTML = `
    <div class="difficult-list">
      ${entries.map(([char, count]) => `
        <div class="difficult-item">
          <span class="difficult-letter">${formatLetter(char)}</span>
          <div class="difficult-count">${count} mistake${count > 1 ? "s" : ""}</div>
        </div>
      `).join("")}
    </div>
  `;
}

function getTopDifficultLetters(limit = 3) {
  return Object.entries(letterMistakes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function getTopMistypedLetters(limit = 5) {
  return Object.entries(letterMistakes)
    .filter(([, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function formatTopMistypedLetters(limit = 5) {
  const entries = getTopMistypedLetters(limit);
  if (entries.length === 0) {
    return "-";
  }

  return entries.map(([letter, count]) => `${formatLetter(letter)} (${count})`).join(", ");
}

function getLetterMistakeMap() {
  const map = {};
  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    map[letter] = letterMistakes[letter] || 0;
  }
  map[" "] = letterMistakes[" "] || 0;
  return map;
}

function getLetterPressMap() {
  const map = {};
  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    map[letter] = letterPresses[letter] || 0;
  }
  map[" "] = letterPresses[" "] || 0;
  return map;
}

function getLetterCorrectMap() {
  const map = {};
  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    map[letter] = letterCorrects[letter] || 0;
  }
  map[" "] = letterCorrects[" "] || 0;
  return map;
}

function getLetterOccurrenceMap() {
  const map = {};
  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    map[letter] = 0;
  }
  map[" "] = 0;

  for (let i = 0; i < targetText.length; i += 1) {
    const char = targetText[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      map[char] += 1;
    } else if (char === " ") {
      map[" "] += 1;
    }
  }

  return map;
}

function getLetterErrorRateMap() {
  const mistakes = getLetterMistakeMap();
  const presses = getLetterPressMap();
  const corrects = getLetterCorrectMap();
  const occurrences = getLetterOccurrenceMap();
  const rates = {};

  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    const total = Math.max(occurrences[letter], presses[letter], corrects[letter], 1);
    const wrong = mistakes[letter];
    rates[letter] = (wrong / total) * 100;
  }
  rates[" "] = (mistakes[" "] / Math.max(occurrences[" "], presses[" "], corrects[" "], 1)) * 100;

  return rates;
}

function getLetterCompositeMistakeMap() {
  const occurrences = getLetterOccurrenceMap();
  const presses = getLetterPressMap();
  const corrects = getLetterCorrectMap();
  const map = {};

  for (let i = 0; i < 26; i += 1) {
    const letter = String.fromCharCode(97 + i);
    const missingRequiredHits = Math.max(occurrences[letter] - corrects[letter], 0);
    const wrongPresses = Math.max(presses[letter] - corrects[letter], 0);
    map[letter] = missingRequiredHits + wrongPresses;
  }
  map[" "] = Math.max(occurrences[" "] - corrects[" "], 0) + Math.max(presses[" "] - corrects[" "], 0);

  return map;
}

function getHeatmapKeyStyle(rate) {
  const clamped = Math.max(0, Math.min(rate, 100));
  if (clamped === 0) {
    return "background: #ffffff; color: #1f2937;";
  }
  const progress = clamped / 100;
  const hue = 28 - (progress * 28);
  const saturation = 72 + (progress * 18);
  const lightness = 93 - (progress * 52);
  const textColor = lightness < 62 ? "#ffffff" : "#5b191d";
  return `background: hsl(${hue.toFixed(1)} ${saturation.toFixed(1)}% ${lightness.toFixed(1)}%); color: ${textColor};`;
}

function renderKeyboardHeatmap() {
  const mistakeMap = getLetterCompositeMistakeMap();
  const occurrenceMap = getLetterOccurrenceMap();
  const pressMap = getLetterPressMap();
  const correctMap = getLetterCorrectMap();
  const rateMap = getLetterErrorRateMap();

  const rows = KEYBOARD_ROWS.map((row) => {
    const keys = row.map((letter) => {
      const count = mistakeMap[letter];
      const rate = rateMap[letter];
      const style = getHeatmapKeyStyle(rate);
      const label = letter === " " ? "space" : letter;
      const extraClass = letter === " " ? " heat-key-space" : "";
      const accuracy = Math.max(0, 100 - rate);
      const tooltip = `${label.toUpperCase()} | freq: ${occurrenceMap[letter]} | presses: ${pressMap[letter]} | correct: ${correctMap[letter]} | mistakes: ${count} | error: ${rate.toFixed(1)}% | accuracy: ${accuracy.toFixed(1)}%`;
      return `<span class="heat-key${extraClass}" style="${style}" title="${tooltip}" data-tooltip="${tooltip}">${label}</span>`;
    }).join("");
    return `<div class="keyboard-row">${keys}</div>`;
  }).join("");

  return `
    <div class="heatmap-wrap">
      <p class="heatmap-title">Keyboard Heatmap (Mistyped Letters)</p>
      <div class="keyboard-heatmap">
        ${rows}
      </div>
    </div>
  `;
}

function getStreakMultiplier(streak) {
  if (streak >= 40) {
    return 4.0;
  }
  if (streak >= 25) {
    return 2.0;
  }
  if (streak >= 15) {
    return 1.5;
  }
  if (streak >= 8) {
    return 1.25;
  }
  return 1.0;
}

function renderLivesHearts() {
  livesHearts.innerHTML = "";
  for (let i = 0; i < 3; i += 1) {
    const heart = document.createElement("span");
    heart.className = "life-heart";
    if (i >= lives) {
      heart.classList.add("lost");
    }
    heart.textContent = "❤";
    livesHearts.appendChild(heart);
  }
}

function extendTimeModeTargetTextIfNeeded() {
  if (selectedMode !== "time") {
    return;
  }
  if (typedText.length < targetText.length) {
    return;
  }

  const nextParagraph = getRandomParagraphByDifficulty(selectedDifficulty);
  targetText = `${targetText} ${nextParagraph}`;
  textDisplay.innerHTML = "";
  for (const char of targetText) {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char;
    textDisplay.appendChild(span);
  }
}

function updateKeystrokeCounters(nextTypedText) {
  const previousLength = typedText.length;
  const nextLength = nextTypedText.length;

  if (nextLength > previousLength) {
    const appendedText = nextTypedText.slice(previousLength, nextLength);
    for (let i = 0; i < appendedText.length; i += 1) {
      let paragraphIndex = previousLength + i;
      if (selectedMode === "time" && paragraphIndex >= targetText.length) {
        const nextParagraph = getRandomParagraphByDifficulty(selectedDifficulty);
        targetText = `${targetText} ${nextParagraph}`;
        textDisplay.innerHTML = "";
        for (const char of targetText) {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = char;
          textDisplay.appendChild(span);
        }
        paragraphIndex = previousLength + i;
      }
      totalKeystrokes += 1;
      const typedChar = (appendedText[i] || "").toLowerCase();
      const isTrackedTypedKey = (typedChar >= "a" && typedChar <= "z") || typedChar === " ";
      if (isTrackedTypedKey) {
        letterPresses[typedChar] = (letterPresses[typedChar] || 0) + 1;
      }
      if (appendedText[i] === targetText[paragraphIndex]) {
        correctKeystrokes += 1;
        const expectedChar = (targetText[paragraphIndex] || "").toLowerCase();
        const isTrackedExpectedKey = (expectedChar >= "a" && expectedChar <= "z") || expectedChar === " ";
        if (isTrackedExpectedKey) {
          letterCorrects[expectedChar] = (letterCorrects[expectedChar] || 0) + 1;
        }
        if (selectedMode === "streak") {
          currentStreak += 1;
          bestStreak = Math.max(bestStreak, currentStreak);
          streakMultiplier = getStreakMultiplier(currentStreak);
          streakPoints += streakMultiplier;
        }
      } else {
        mistakeKeystrokes += 1;
        if (selectedMode === "streak") {
          currentStreak = 0;
          streakMultiplier = 1;
        }
        const mistypedChar = (appendedText[i] || "").toLowerCase();
        const isTrackedKey = (mistypedChar >= "a" && mistypedChar <= "z") || mistypedChar === " ";
        if (isTrackedKey) {
          letterMistakes[mistypedChar] = (letterMistakes[mistypedChar] || 0) + 1;
        }
        if (selectedMode === "survival") {
          lives = Math.max(0, lives - 1);
        }
      }
    }
    return;
  }

  if (nextLength < previousLength) {
    totalKeystrokes += previousLength - nextLength;
  }
}

function calculateStats() {
  const correctChars = getCorrectCharsCount();

  const mistakes = mistakeKeystrokes;
  const score = totalKeystrokes > 0 ? (correctKeystrokes / totalKeystrokes) * 100 : 0;
  const elapsedSeconds = startTime ? (Date.now() - startTime) / 1000 : 0;
  const minutes = elapsedSeconds > 0 ? elapsedSeconds / 60 : 0;
  const wpm = minutes > 0 ? (correctChars / 5) / minutes : 0;

  wpmValue.textContent = Number.isFinite(wpm) ? Math.round(wpm).toString() : "0";
  scoreValue.textContent = `${score.toFixed(1)}%`;
  mistakesValue.textContent = mistakes.toString();

  return {
    correctChars,
    mistakes,
    score,
    wpm: Number.isFinite(wpm) ? Math.round(wpm) : 0,
    typedChars: typedText.length,
    progress: Math.round((typedText.length / Math.max(targetText.length, 1)) * 100),
    lives,
    currentStreak,
    bestStreak,
    streakPoints,
    streakMultiplier,
    mode: selectedMode,
    difficulty: selectedDifficulty,
    symbolsEnabled
  };
}

function safeNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function loadCoachHistory() {
  try {
    const raw = localStorage.getItem(COACH_HISTORY_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter((item) => item && typeof item === "object");
  } catch (error) {
    return [];
  }
}

function saveCoachHistory(history) {
  try {
    localStorage.setItem(COACH_HISTORY_KEY, JSON.stringify(history.slice(-COACH_HISTORY_LIMIT)));
  } catch (error) {
    // Ignore storage errors to keep gameplay uninterrupted.
  }
}

function buildHistoryEntry(stats) {
  return {
    timestamp: Date.now(),
    wpm: safeNumber(stats.wpm),
    score: safeNumber(stats.score),
    mistakes: safeNumber(stats.mistakes),
    mode: stats.mode,
    difficulty: stats.difficulty,
    symbolsEnabled: Boolean(stats.symbolsEnabled)
  };
}

function getPersonalBaseline(history, stats) {
  const matched = history.filter((entry) => (
    entry.mode === stats.mode
    && entry.difficulty === stats.difficulty
    && Boolean(entry.symbolsEnabled) === Boolean(stats.symbolsEnabled)
  ));
  const source = matched.length > 0 ? matched : history;
  if (source.length === 0) {
    return null;
  }
  const sum = source.reduce((acc, entry) => {
    acc.wpm += safeNumber(entry.wpm);
    acc.score += safeNumber(entry.score);
    acc.mistakes += safeNumber(entry.mistakes);
    return acc;
  }, { wpm: 0, score: 0, mistakes: 0 });
  const size = source.length;
  return {
    count: size,
    wpm: sum.wpm / size,
    score: sum.score / size,
    mistakes: sum.mistakes / size
  };
}

function getPersonalDeltas(stats, baseline) {
  if (!baseline) {
    return null;
  }
  return {
    wpm: safeNumber(stats.wpm) - baseline.wpm,
    score: safeNumber(stats.score) - baseline.score,
    mistakes: safeNumber(stats.mistakes) - baseline.mistakes
  };
}

function formatDelta(value, decimals = 1, suffix = "") {
  const rounded = Number(value.toFixed(decimals));
  const sign = rounded > 0 ? "+" : "";
  return `${sign}${rounded.toFixed(decimals)}${suffix}`;
}

function getLetterFocusedDrill(topLetters) {
  if (topLetters.length === 0) {
    return "2 x 45s clean rhythm drill: keep score above 96%.";
  }

  const primary = formatLetter(topLetters[0][0]);
  const secondary = topLetters[1] ? formatLetter(topLetters[1][0]) : primary;
  return `Letter drill: 4 rounds of 20s focusing "${primary}" and "${secondary}" with slow, clean keystrokes first.`;
}

function generateAICoachFeedback(stats, baseline, deltas) {
  const topLetters = getTopMistypedLetters(3).map(([char]) => formatLetter(char));
  const hotKeys = topLetters.length > 0 ? topLetters.join(", ") : "none";
  const topLetterEntries = getTopMistypedLetters(3);

  let strength = "";
  let weakness = "";
  let nextDrill = "";
  let personalLine = "";

  if (stats.wpm >= 45 && stats.score >= 94) {
    strength = "Speed and control are both strong.";
    weakness = stats.mistakes >= 8 ? "Late-run error spikes appear." : "Minor consistency drift in long runs.";
    nextDrill = "Run 2 x 60s at same pace, target fewer total mistakes.";
  } else if (stats.wpm >= 45 && stats.score < 94) {
    strength = "Fast typing tempo is a strong point.";
    weakness = "Control drops while maintaining speed.";
    nextDrill = "Tempo down 10%, keep score above 95% for 3 rounds.";
  } else if (stats.wpm < 45 && stats.score >= 94) {
    strength = "Accuracy discipline is excellent.";
    weakness = "Speed growth is currently limited.";
    nextDrill = "Progressive speed ladder: +5 WPM every 20 seconds.";
  } else {
    strength = "You completed a full focused run.";
    weakness = "Speed and control both need reinforcement.";
    nextDrill = "Split drill: 30s clean typing + 30s speed burst x3.";
  }

  if (stats.mistakes >= 14) {
    weakness = "Error control is the main blocker right now.";
    nextDrill = "Zero-error minute drill, then increase pace gradually.";
  }

  if (selectedMode === "survival" && stats.lives <= 1) {
    weakness = "Survival stability is fragile under pressure.";
    nextDrill = "Survival: prioritize clean hits for the first 40% progress.";
  }

  if (selectedMode === "streak" && stats.bestStreak < 12) {
    weakness = "Streak continuity breaks too early.";
    nextDrill = "Streak drill: maintain 12+ clean chain before speed push.";
  }

  if (baseline && deltas) {
    const wpmTrend = formatDelta(deltas.wpm, 1, " WPM");
    const scoreTrend = formatDelta(deltas.score, 1, "%");
    const mistakesTrend = formatDelta(-deltas.mistakes, 1, " mistake control");
    personalLine = `Compared to your baseline (${baseline.count} runs): pace ${wpmTrend}, accuracy ${scoreTrend}, consistency ${mistakesTrend}.`;

    if (deltas.wpm >= 4 && deltas.score < 0) {
      weakness = "You pushed speed above your norm, but control dipped.";
      nextDrill = "Keep current pace for 3 rounds and target +1.5% accuracy recovery.";
    } else if (deltas.score >= 1.5 && deltas.wpm < 0) {
      strength = "Control improved against your usual sessions.";
      nextDrill = "Increase pace by 5% while keeping the same accuracy.";
    } else if (deltas.mistakes <= -2) {
      strength = "Error control is better than your recent baseline.";
    }
  } else {
    personalLine = "Complete a few rounds to unlock baseline-based personalized coaching.";
  }

  if (topLetterEntries.length > 0) {
    const letterDrill = getLetterFocusedDrill(topLetterEntries);
    nextDrill = `${nextDrill} ${letterDrill}`.trim();
  }

  return {
    strength,
    weakness: `${weakness} Hot keys: ${hotKeys}.`,
    nextDrill,
    personalLine
  };
}

function renderCoachFeedback() {
  const stats = calculateStats();
  const history = loadCoachHistory();
  const baseline = getPersonalBaseline(history, stats);
  const deltas = getPersonalDeltas(stats, baseline);
  const feedback = generateAICoachFeedback(stats, baseline, deltas);

  coachContent.innerHTML = `
    <div class="coach-list">
      <p class="coach-tip"><strong>Personal:</strong> ${feedback.personalLine}</p>
      <p class="coach-tip"><strong>Strength:</strong> ${feedback.strength}</p>
      <p class="coach-tip"><strong>Weakness:</strong> ${feedback.weakness}</p>
      <p class="coach-tip"><strong>Next Drill:</strong> ${feedback.nextDrill}</p>
    </div>
  `;
}

function persistCoachRun() {
  if (!startTime) {
    return;
  }

  const elapsedSeconds = Math.max(0, (Date.now() - startTime) / 1000);
  if (elapsedSeconds < 8) {
    return;
  }

  const stats = calculateStats();
  const history = loadCoachHistory();
  history.push(buildHistoryEntry(stats));
  saveCoachHistory(history);
}

function renderResultSummary() {
  const stats = calculateStats();
  const elapsed = startTime ? Math.max(1, Math.round((Date.now() - startTime) / 1000)) : 0;
  const topMistypedLetters = formatTopMistypedLetters(5);
  let modeDetail = "";

  if (selectedMode === "time") {
    modeDetail = `
      <div class="result-item"><span class="label">Mode</span><span class="value">Time Mode</span></div>
      <div class="result-item"><span class="label">Typed Chars</span><span class="value">${stats.typedChars}</span></div>
    `;
  } else if (selectedMode === "survival") {
    const endReason = lives <= 0 ? "Ended by zero lives" : "Completed paragraph";
    modeDetail = `
      <div class="result-item"><span class="label">Mode</span><span class="value">Survival Mode</span></div>
      <div class="result-item"><span class="label">Progress Left</span><span class="value">${Math.max(0, 100 - stats.progress)}%</span></div>
      <div class="result-item"><span class="label">End</span><span class="value">${endReason}</span></div>
    `;
  } else if (selectedMode === "streak") {
    modeDetail = `
      <div class="result-item"><span class="label">Mode</span><span class="value">Streak Mode</span></div>
      <div class="result-item"><span class="label">Current Streak</span><span class="value">${stats.currentStreak}</span></div>
      <div class="result-item"><span class="label">Best Streak</span><span class="value">${stats.bestStreak}</span></div>
      <div class="result-item"><span class="label">Points</span><span class="value">${Math.round(stats.streakPoints)}</span></div>
    `;
  } else if (selectedMode === "memory") {
    modeDetail = `<div class="result-item"><span class="label">Mode</span><span class="value">Memory Mode</span></div>`;
  }

  resultContent.innerHTML = `
    <div class="result-grid">
      ${modeDetail}
      <div class="result-item"><span class="label">WPM</span><span class="value">${stats.wpm}</span></div>
      <div class="result-item"><span class="label">Accuracy</span><span class="value">${stats.score.toFixed(1)}%</span></div>
      <div class="result-item"><span class="label">Mistakes</span><span class="value">${stats.mistakes}</span></div>
      <div class="result-item"><span class="label">Most Mistyped Letters</span><span class="value">${topMistypedLetters}</span></div>
      <div class="result-item"><span class="label">Correct Chars</span><span class="value">${stats.correctChars}</span></div>
      <div class="result-item"><span class="label">Keystrokes</span><span class="value">${totalKeystrokes}</span></div>
      <div class="result-item"><span class="label">Time Used</span><span class="value">${elapsed}s</span></div>
    </div>
    ${renderKeyboardHeatmap()}
  `;
}

function endGame() {
  if (gameEnded) {
    return;
  }

  gameEnded = true;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  stopMemoryFade();
  persistCoachRun();

  typingInput.disabled = true;
  renderResultSummary();
  renderCoachFeedback();
  resultSection.classList.remove("hidden");
}

function tickTimer() {
  timeElapsed += 1;
  if (selectedMode === "time") {
    timeRemainingSeconds = Math.max(0, timeRemainingSeconds - 1);
    timerValue.textContent = `${timeRemainingSeconds}s`;
    timeRemaining.textContent = `Remaining: ${timeRemainingSeconds}s`;
    if (timeRemainingSeconds <= 0) {
      endGame();
    }
  } else {
    timerValue.textContent = `${timeElapsed}s`;
  }
}

function startTimer() {
  if (timerId) {
    return;
  }

  startTime = Date.now();
  timerId = setInterval(tickTimer, 1000);
}

function handleTypingInput(event) {
  const nextTypedText = event.target.value;
  updateKeystrokeCounters(nextTypedText);
  typedText = nextTypedText;
  extendTimeModeTargetTextIfNeeded();

  if (selectedMode === "memory" && typedText.length > 0) {
    startMemoryFadeOnTyping();
  }

  if (typedText.length > 0 && !timerId) {
    startTimer();
  }

  calculateStats();
  updateCharacterHighlighting();
  updateProgress();
  renderDifficultLetters();
  renderCoachFeedback();
  livesValue.textContent = `Lives: ${lives}`;
  renderLivesHearts();
  currentStreakValue.textContent = `Current Streak: ${currentStreak}`;
  bestStreakValue.textContent = `Best Streak: ${bestStreak}`;
  document.getElementById("streak-points-value").textContent = `Points: ${Math.round(streakPoints)}`;
  document.getElementById("streak-multiplier-value").textContent = `x${streakMultiplier.toFixed(2)}`;

  if (selectedMode === "survival" && lives <= 0) {
    endGame();
    return;
  }

  if (selectedMode !== "time" && typedText.length >= targetText.length) {
    endGame();
  }
}

function getMemoryPreviewSeconds() {
  return MEMORY_PREVIEW_SECONDS[selectedDifficulty] || MEMORY_PREVIEW_SECONDS.medium;
}

function stopPreviewInterval() {
  if (previewIntervalId) {
    clearInterval(previewIntervalId);
    previewIntervalId = null;
  }
}

function startMemoryPreview() {
  stopPreviewInterval();
  clearMemoryMask();
  typingInput.disabled = true;
  previewSecondsLeft = getMemoryPreviewSeconds();
  previewCountdownValue.textContent = `Preview: ${previewSecondsLeft}s`;

  const previewDurationMs = previewSecondsLeft * 1000;
  const previewStartMs = Date.now();
  previewIntervalId = setInterval(() => {
    const elapsedMs = Date.now() - previewStartMs;
    const clampedElapsed = Math.min(elapsedMs, previewDurationMs);
    const secondsLeft = Math.max(0, Math.ceil((previewDurationMs - clampedElapsed) / 1000));

    previewCountdownValue.textContent = `Preview: ${secondsLeft}s`;

    if (clampedElapsed >= previewDurationMs) {
      stopPreviewInterval();
      clearMemoryMask();
      typingInput.disabled = false;
      typingInput.focus();
    }
  }, 120);
}

function resetGame() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  typedText = "";
  timeElapsed = 0;
  startTime = null;
  totalKeystrokes = 0;
  correctKeystrokes = 0;
  mistakeKeystrokes = 0;
  gameEnded = false;
  letterMistakes = {};
  letterPresses = {};
  letterCorrects = {};
  lives = 3;
  currentStreak = 0;
  bestStreak = 0;
  streakPoints = 0;
  streakMultiplier = 1;
  timeRemainingSeconds = Number(timeDurationSelect.value || 60);
  stopPreviewInterval();
  stopMemoryFade();
  memoryFadeStarted = false;
  memoryFadeProgress = 0;

  typingInput.value = "";
  typingInput.disabled = !selectedMode;
  timerValue.textContent = selectedMode === "time" ? `${timeRemainingSeconds}s` : "0s";
  timeRemaining.textContent = `Remaining: ${timeRemainingSeconds}s`;
  livesValue.textContent = `Lives: ${lives}`;
  renderLivesHearts();
  currentStreakValue.textContent = `Current Streak: ${currentStreak}`;
  bestStreakValue.textContent = `Best Streak: ${bestStreak}`;
  document.getElementById("streak-points-value").textContent = "Points: 0";
  document.getElementById("streak-multiplier-value").textContent = "x1.00";
  previewCountdownValue.textContent = "Preview: 0s";
  wpmValue.textContent = "0";
  scoreValue.textContent = "0%";
  mistakesValue.textContent = "0";
  progressValue.textContent = "0%";
  resultSection.classList.add("hidden");
  resultContent.innerHTML = "";

  renderParagraph();
  if (selectedMode === "memory") {
    startMemoryPreview();
  } else {
    clearMemoryMask();
    updateCharacterHighlighting();
  }
  renderDifficultLetters();
  renderCoachFeedback();
  updateSymbolsToggleButton();
  updateModeExtrasUI();
  if (!typingInput.disabled) {
    typingInput.focus();
  }
}

function handleDifficultyChange(event) {
  selectedDifficulty = event.target.value;
  resetGame();
}

function handleSymbolsToggle() {
  symbolsEnabled = !symbolsEnabled;
  resetGame();
}

function handleModeChange(event) {
  selectedMode = event.target.value;
  resetGame();
}

function handleTimeDurationChange() {
  if (selectedMode === "time" && !timerId) {
    timeRemainingSeconds = Number(timeDurationSelect.value || 60);
    timerValue.textContent = `${timeRemainingSeconds}s`;
    timeRemaining.textContent = `Remaining: ${timeRemainingSeconds}s`;
  }
}

typingInput.addEventListener("input", handleTypingInput);
restartBtn.addEventListener("click", resetGame);
difficultySelect.addEventListener("change", handleDifficultyChange);
symbolsToggleBtn.addEventListener("click", handleSymbolsToggle);
modeSelect.addEventListener("change", handleModeChange);
timeDurationSelect.addEventListener("change", handleTimeDurationChange);

renderParagraph();
typingInput.disabled = true;
updateCharacterHighlighting();
resultSection.classList.add("hidden");
renderDifficultLetters();
renderCoachFeedback();
updateSymbolsToggleButton();
updateModeExtrasUI();
renderLivesHearts();
