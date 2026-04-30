const LOADER_DURATION = 10000;
const STORAGE_KEYS = {
  audioPreference: "mrsm-audio-enabled",
  garden: "mrsm-garden",
  anniversaryMilestone: "mrsm-anniversary-milestone"
};


const romanceProfile = {
  herName: "Maia",
  yourName: "Dotun",
  anniversary: {
    startDate: "2026-03-30T00:00:00"
  },
  heroWords: ["favorite hello", "Mommy,Maia", "best part of the day"],
  loadingStatuses: [
    "Dusting the butterflies and pretending this is normal.",
    "Collecting heartbeats and syncing them with yours.",
    "Checking if this smile is because of you (it is).",
    "Calibrating the crush meter to deeply unserious levels.",
    "Teaching the loading screen how to flirt a little.",
    "Almost ready… just fixing my heart real quick."
  ],
  loadingSentences: [
    "The page is not actually buffering. It is just being cinematic on purpose.",
    "Some people send a text. Apparently I build an entire website.",
    "If this feels extra, that is because the feelings are also extra.",
    "Everything here is trying very hard to look calm while clearly not being calm."
  ],
  loadingThings: [
  { title: "Heartbeat overclock", note: "Running slightly faster whenever your name shows up." },
  { title: "Memory replay loop", note: "Rewatching that one moment like it’s award-winning cinema." },
  { title: "Crush encryption", note: "Hiding obvious feelings behind extremely subtle nonsense." },
  { title: "Laugh track loader", note: "Preparing to laugh at everything you say (even mid jokes)." },
  { title: "Timing optimizer", note: "Waiting just long enough to not seem too eager (failing anyway)." },
  { title: "Name highlight system", note: "Making your name glow a little extra in every sentence." },
  { title: "Overthink engine", note: "Analyzing ‘hey’ like it came with hidden lore." },
  { title: "Smile renderer", note: "Automatically activating when you’re anywhere nearby." },
  { title: "Text draft editor", note: "Rewriting one message 12 times for absolutely no reason." },
  { title: "Soft chaos module", note: "Balancing composure with a mild internal meltdown." },
  { title: "Romance debugger", note: "Fixing nothing, just making the feelings more dramatic." },
  { title: "Coincidence planner", note: "Pretending this was all very casual and not intentional." },
  { title: "Attention magnet", note: "Somehow orbiting wherever you are like it’s physics." },
  { title: "Confidence patch", note: "Installing bravery right before immediately losing it." }
  ],
  marqueeLines: [
    "pretty smile detected",
    "main character energy confirmed",
    "butterflies currently clocked in",
    "very unfair amount of charm",
    "my attention keeps choosing you",
    "this is not me acting normal"
  ],
  fortunes: [
    "Breaking news: you continue to be dangerously easy to like.",
    "The romantic forecast says there is a 100 percent chance of me thinking about you again later.",
    "Live update from my brain: your smile still has absurdly strong numbers.",
    "Freshly generated truth: you make ordinary moments feel suspiciously better.",
    "Status report: I keep trying to be chill and the website keeps disagreeing.",
    "Official reading: you are the kind of person who makes effort feel fun."
  ],
  miniFacts: [
    "crush mode: fully deployed",
    "soft launch: still very obvious",
    "smile interference: active",
    "drama level: tastefully high",
    "pastel engine: stable",
    "main focus: still you"
  ],
  complimentBursts: [
    "you are so pretty",
    "your energy is ridiculous",
    "you make everything softer",
    "you have elite smile power",
    "being around you is my favorite upgrade",
    "you are very hard to ignore",
    "you make my day better",
    "this crush has excellent taste"
  ],
  palettes: [
    { blush: "#ffd6e8", peach: "#ffe0c8", butter: "#fff0b5", mint: "#d9f5e7", sky: "#d8ecff", lilac: "#eadcff" },
    { blush: "#ffc9d8", peach: "#ffd9c2", butter: "#ffefb0", mint: "#d2f3dd", sky: "#cae8ff", lilac: "#e4d4ff" },
    { blush: "#ffd8e2", peach: "#ffe6d3", butter: "#fff4c8", mint: "#d6f7ea", sky: "#ddefff", lilac: "#f0e4ff" },
    { blush: "#ffd0eb", peach: "#ffe0cf", butter: "#fff2ba", mint: "#d4f0db", sky: "#cfe7ff", lilac: "#e7ddff" }
  ],
  reasons: [
    {
      title: "You make me want to be a better version of myself",
      text: "Everyday being with you makes me want to push myself to be better so we can both achieve our goals",
      label: "1",
      tone: "linear-gradient(145deg, rgba(255, 214, 232, 0.86), rgba(255, 240, 181, 0.8))"
    },
    {
      title: "I love the effort you put into everything about us",
      text: "I see that you are trying, and that means the world to me. It makes me want to try harder too, which is a very nice bonus.",
      label: "2",
      tone: "linear-gradient(145deg, rgba(217, 245, 231, 0.9), rgba(216, 236, 255, 0.82))"
    },
    {
      title: "I love how you communicate your feelings",
      text: "I like that you are getting better at expressing yourself and communicating as I am also doing the same",
      label: "3",
      tone: "linear-gradient(145deg, rgba(234, 220, 255, 0.9), rgba(255, 214, 232, 0.84))"
    },
    {
      title: "I love the time we spend together",
      text: "I usually have a low social energy but I always look forward to the time we spend together and I am always so excited to see you, I would never get tired of you and I hope it is the same for you",
      label: "4",
      tone: "linear-gradient(145deg, rgba(255, 240, 181, 0.84), rgba(255, 224, 200, 0.9))"
    },
  ],
  timeline: [
    { stage: "ummmmmmmmm", title: "The next steps", text: "My intentions for with you are for you to be my girlfriend and to have a genuine trusting relationship with you." },
  ],
  details: [
    "the way you laugh when I tickle you",
    "your smile all the time",
    "Our cuddles and kisses",
    "your random little jokes",
    "how easy you are to admire",
    "The way you communicate your feelings",
    "how pretty you look without even trying",
    "the fact that I keep finding new reasons"
  ],
  collage: [
    { title: "Soft", note: "You make things feel less heavy and a lot more lovely.", tone: "linear-gradient(145deg, rgba(255, 214, 232, 0.76), rgba(255, 255, 255, 0.76))", rotate: "-2deg" },
    { title: "Bright", note: "Some people are noticeable. You are unforgettable.", tone: "linear-gradient(145deg, rgba(255, 240, 181, 0.8), rgba(255, 224, 200, 0.74))", rotate: "2deg" },
    { title: "Magnetic", note: "Every version of my attention keeps ending up back at you.", tone: "linear-gradient(145deg, rgba(216, 236, 255, 0.82), rgba(234, 220, 255, 0.72))", rotate: "-1deg" },
    { title: "Dangerous", note: "Dangerous for my ability to act chill, obviously.", tone: "linear-gradient(145deg, rgba(217, 245, 231, 0.84), rgba(255, 255, 255, 0.8))", rotate: "3deg" }
  ],
  scenes: [
    { id: "scene-1", label: "Tiny Moments", title: "The little scenes that got me", text: "It was never one giant fireworks moment. It was a bunch of small things stacking up until I could not ignore how much I liked you.", accent: "You made regular life feel more interesting just by being in it." },
    { id: "scene-2", label: "Your Energy", title: "The part where you are just so easy to like", text: "You have this balance of pretty, fun, and genuinely lovely that is hard to fake and impossible not to notice.", accent: "Basically, you are a very unfair amount of charming." },
    { id: "scene-3", label: "The Realization", title: "The exact problem I ran into", text: "I kept telling myself it was a normal crush, and then I caught myself caring about you in this sweet, sincere, not-even-trying-to-be-cool way.", accent: "That is usually when you know it is real." },
    { id: "scene-4", label: "The Hope", title: "Why I made this for you", text: "Because I wanted to say something honest and memorable. And because you are worth effort, even the slightly dramatic kind.", accent: "If this made you smile, then honestly that already means a lot." }
  ],
  bookPages: [
    { image: "IMG_4402.jpeg", alt: "Gallery photo 1", caption: "1" },
    { image: "IMG_4412.jpeg", alt: "Gallery photo 2", caption: "2" },
    { image: "IMG_4417.jpeg", alt: "Gallery photo 3", caption: "3" },
    { image: "IMG_4420.jpeg", alt: "Gallery photo 4", caption: "4" },
    { image: "IMG_4430.jpeg", alt: "Gallery photo 5", caption: "5" },
    { image: "image.webp", alt: "Gallery photo 6", caption: "6" },
    { image: "image (1).webp", alt: "Gallery photo 7", caption: "7" },
    { image: "image (2).webp", alt: "Gallery photo 8", caption: "8" },
    { image: "image (3).webp", alt: "Gallery photo 9", caption: "9" },
    { image: "image (4).webp", alt: "Gallery photo 10", caption: "10" },
    { image: "image (5).webp", alt: "Gallery photo 11", caption: "11" },
    { image: "image (6).webp", alt: "Gallery photo 12", caption: "12" },
  ],
  blossoms: [
    "I like the way my mood changes when you show up.",
    "You are very easy to write nice things about.",
    "My brain keeps choosing you as its favorite subject.",
    "There is just something special about you.",
    "You make my thoughts look like pastel confetti.",
    "This crush has excellent taste, apparently."
  ],
  meterMessages: [
    { max: 20, text: "Mildly enchanted. Still pretending to be calm." },
    { max: 40, text: "Okay, this is definitely feelings." },
    { max: 60, text: "Pretty serious. Casual behavior has left the building." },
    { max: 80, text: "Strong enough that songs are starting to sound suspiciously specific." },
    { max: 100, text: "Strong enough that I made a whole website instead of acting normal." }
  ],
  finalMessage:
    "I really like you for everything you are. I hope you enjoyed this. I just had this idea a few days ago and decided to make this for you. I really hope you liked it"
};

const randomFrom = (array) => array[Math.floor(Math.random() * array.length)];

const pickMany = (array, count) => {
  const pool = [...array];
  const picked = [];

  while (pool.length > 0 && picked.length < count) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }

  return picked;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const withAlpha = (hex, alpha) => {
  const safeAlpha = clamp(alpha, 0, 1);
  const alphaHex = Math.round(safeAlpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alphaHex}`;
};

const readStoredValue = (key, fallback = null) => {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
};

const readStoredJSON = (key, fallback) => {
  const raw = readStoredValue(key);

  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const writeStoredValue = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage failures and keep the experience working.
  }
};

const addMonthsClamped = (date, monthCount) => {
  const result = new Date(
    date.getFullYear(),
    date.getMonth() + monthCount,
    1,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(date.getDate(), lastDay));
  return result;
};

const getCompletedMonthCount = (start, now) => {
  if (now < start) {
    return 0;
  }

  let monthCount =
    (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();

  if (addMonthsClamped(start, monthCount) > now) {
    monthCount -= 1;
  }

  return Math.max(0, monthCount);
};

const splitDuration = (start, end) => {
  let remaining = Math.max(0, end.getTime() - start.getTime());
  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;
  const minutes = Math.floor(remaining / 60000);
  remaining -= minutes * 60000;
  const seconds = Math.floor(remaining / 1000);

  return { days, hours, minutes, seconds };
};

const getAnniversaryElapsed = (start, now) => {
  if (now < start) {
    return {
      totalMonths: 0,
      years: 0,
      months: 0,
      ...splitDuration(now, start),
      isFuture: true
    };
  }

  const totalMonths = getCompletedMonthCount(start, now);
  const anchor = addMonthsClamped(start, totalMonths);

  return {
    totalMonths,
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    ...splitDuration(anchor, now),
    isFuture: false
  };
};

const formatAnniversaryDate = (date) =>
  date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

const formatMilestoneLabel = (totalMonths) => {
  if (totalMonths < 1) {
    return "First month in progress";
  }

  if (totalMonths % 12 === 0) {
    const years = totalMonths / 12;
    return `${years}yr milestone`;
  }

  if (totalMonths > 12) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years}yr ${months}mo milestone`;
  }

  return `${totalMonths}mo milestone`;
};

const formatShortDuration = ({ days, hours, minutes, seconds }) => {
  const parts = [];

  if (days > 0) {
    parts.push(`${days}d`);
  }

  parts.push(`${hours}h`, `${minutes}m`, `${seconds}s`);
  return parts.join(" ");
};

const getAnniversaryStart = () => {
  const configuredDate = new Date(romanceProfile.anniversary.startDate);
  return Number.isNaN(configuredDate.getTime()) ? null : configuredDate;
};

let activePaletteIndex = 0;
let activePalette = romanceProfile.palettes[0];
let crushLevel = 84;
let gardenState = [];
let sparkleAutoBurstCount = 3;
let syncSparkleLoop = null;

const bindText = () => {
  document.querySelectorAll("[data-bind]").forEach((node) => {
    const key = node.getAttribute("data-bind");
    node.textContent = romanceProfile[key] || "";
  });
};

const renderReasons = () => {
  const grid = document.getElementById("reason-grid");

  romanceProfile.reasons.forEach((reason) => {
    const article = document.createElement("article");
    article.className = "reason-card";
    article.style.setProperty("--tone", reason.tone);
    article.innerHTML = `
      <h3>${reason.title}</h3>
      <p>${reason.text}</p>
      <span class="reason-label">${reason.label}</span>
    `;
    grid.appendChild(article);
  });
};

const renderTimeline = () => {
  const timeline = document.getElementById("timeline-list");

  romanceProfile.timeline.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-card";
    article.innerHTML = `
      <span class="timeline-stage">${item.stage}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    timeline.appendChild(article);
  });
};

const renderDetails = () => {
  const cloud = document.getElementById("detail-cloud");
  const board = document.getElementById("floating-note-board");

  romanceProfile.details.forEach((detail) => {
    const button = document.createElement("button");
    button.className = "detail-chip";
    button.type = "button";
    button.textContent = detail;

    button.addEventListener("click", () => {
      const note = document.createElement("div");
      note.className = "floating-note";
      note.textContent = detail;
      note.style.left = `${Math.random() * 58 + 6}%`;
      note.style.top = `${Math.random() * 56 + 8}%`;
      note.style.transform = `rotate(${Math.random() * 12 - 6}deg)`;
      board.appendChild(note);

      if (board.children.length > 7) {
        board.removeChild(board.firstElementChild);
      }
    });

    cloud.appendChild(button);
  });
};

const renderCollage = () => {
  const collage = document.getElementById("collage");

  romanceProfile.collage.forEach((item) => {
    const card = document.createElement("article");
    card.className = "collage-card";
    card.style.setProperty("--tone", item.tone);
    card.style.setProperty("--rotate", item.rotate);
    card.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.note}</p>
    `;
    collage.appendChild(card);
  });
};

const renderScenes = () => {
  const buttonShell = document.getElementById("scene-buttons");
  const display = document.getElementById("scene-display");
  let activeScene = romanceProfile.scenes[0];

  const paintScene = (scene) => {
    display.innerHTML = `
      <p class="eyebrow">Selected memory</p>
      <h3>${scene.title}</h3>
      <p>${scene.text}</p>
      <p><strong>${scene.accent}</strong></p>
    `;
  };

  romanceProfile.scenes.forEach((scene, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "scene-button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", index === 0 ? "true" : "false");
    button.textContent = scene.label;

    if (index === 0) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      activeScene = scene;
      paintScene(activeScene);

      buttonShell.querySelectorAll(".scene-button").forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");
    });

    buttonShell.appendChild(button);
  });

  paintScene(activeScene);
};

const createBookFace = (page, side, pageNumber) => {
  const face = document.createElement("figure");
  face.className = `book-face ${side === "back" ? "book-face-back" : "book-face-front"}`;
  face.setAttribute("data-side", side);
  const photoSurface = document.createElement("div");
  photoSurface.className = "book-photo-surface";
  const hasImage = Boolean(page && page.image);

  if (hasImage) {
    const image = document.createElement("img");
    image.src = page.image;
    image.alt = page.alt || "Book gallery page";
    photoSurface.appendChild(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "book-placeholder";
    placeholder.innerHTML =
      side === "front"
        ? "<span>This page is waiting for a photo.</span>"
        : "<span>The chapter ends here for now.</span>";
    photoSurface.appendChild(placeholder);
  }

  face.appendChild(photoSurface);

  const pageCaption =
    hasImage && typeof page.caption === "string" && page.caption.trim() && page.caption.trim() !== String(pageNumber)
      ? page.caption.trim()
      : hasImage
        ? "."
        : side === "front"
          ? "."
          : ".";

  const caption = document.createElement("figcaption");
  caption.className = "book-caption";
  const label = document.createElement("span");
  label.className = "book-caption-kicker";
  label.textContent = hasImage ? `Page ${pageNumber}` : side === "front" ? "Opening page" : "Closing page";
  const note = document.createElement("span");
  note.className = "book-caption-hand";
  note.textContent = pageCaption;
  const number = document.createElement("span");
  number.className = "book-page-number";
  number.textContent = hasImage ? String(pageNumber) : "";
  caption.appendChild(label);
  caption.appendChild(note);
  caption.appendChild(number);
  face.appendChild(caption);

  return face;
};

const renderBookGallery = () => {
  const pages = romanceProfile.bookPages;
  const track = document.getElementById("flipbook-track");
  const flipbook = document.getElementById("flipbook");
  const flipbookShell = document.querySelector(".flipbook-shell");
  const prevButton = document.getElementById("book-prev");
  const nextButton = document.getElementById("book-next");
  const indicator = document.getElementById("book-page-indicator");
  const lock = document.getElementById("book-lock");
  const passwordInput = document.getElementById("book-password");
  const unlockButton = document.getElementById("book-unlock");
  const lockMessage = document.getElementById("book-lock-message");
  const noteCard = document.querySelector(".book-note-card");

  if (!track || !flipbook || !prevButton || !nextButton || !indicator || !pages.length) {
    return;
  }

  const sheetCount = pages.length;
  const maxTurnedSheets = Math.max(0, sheetCount - 1);
  const sheets = [];
  let turnedSheets = 0;
  let unlocked = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let ignoreBookTapUntil = 0;
  let isAnimating = false;

  track.innerHTML = "";

  for (let index = 0; index < sheetCount; index += 1) {
    const sheet = document.createElement("article");
    sheet.className = "book-sheet";
    sheet.style.zIndex = String(sheetCount * 2 - index);

    const page = pages[index];
    const pageNumber = index + 1;

    sheet.appendChild(createBookFace(page, "front", pageNumber));
    sheet.appendChild(createBookFace(page, "back", pageNumber));
    track.appendChild(sheet);
    sheets.push(sheet);
  }

  const setSheetOrder = () => {
    sheets.forEach((sheet, index) => {
      sheet.style.zIndex = String(
        index < turnedSheets ? index + 1 : sheetCount * 2 - index
      );
    });
  };

  const updateControls = () => {
    prevButton.disabled = !unlocked || isAnimating || turnedSheets <= 0;
    nextButton.disabled = !unlocked || isAnimating || turnedSheets >= maxTurnedSheets;
  };

  const animateSheetTurn = (sheet, updateSheet) => {
    if (!sheet || isAnimating) {
      return;
    }

    isAnimating = true;
    sheet.style.zIndex = String(sheetCount * 3);
    updateSheet();
    updateControls();

    let hasSettled = false;
    const finishAnimation = () => {
      if (hasSettled) {
        return;
      }

      hasSettled = true;
      isAnimating = false;
      setSheetOrder();
      updateControls();
    };

    sheet.addEventListener(
      "transitionend",
      (event) => {
        if (event.target === sheet && event.propertyName === "transform") {
          finishAnimation();
        }
      },
      { once: true }
    );

    window.setTimeout(finishAnimation, 1100);
  };

  const updateIndicator = () => {
    const currentPage = Math.min(turnedSheets + 1, pages.length);
    indicator.textContent = `Page ${currentPage} of ${pages.length}`;
  };

  const setLockState = (state) => {
    unlocked = state;

    if (flipbookShell) {
      flipbookShell.classList.toggle("is-locked", !state);
    }

    flipbook.setAttribute(
      "aria-label",
      state
        ? "Photo book. Click the right page to turn forward, the left page to go back, or use the page buttons."
        : "Photo book locked until the password is entered."
    );

    if (noteCard) {
      noteCard.classList.toggle("is-unlocked", state);
      const title = noteCard.querySelector("h3");
      const note = noteCard.querySelector("p:not(.fortune-label):not(.book-page-indicator)");

      if (title) {
        title.textContent = state ? "Photo Book Unlocked" : "Photo Book Locked";
      }

      if (note) {
        note.textContent = state
          ? "Gallery unlocked. Click the right page to keep reading, the left page to revisit, or use the buttons below."
          : "Enter the password to open this section and flip through the pages.";
      }
    }

    updateControls();
  };

  const flipForward = () => {
    if (!unlocked || turnedSheets >= maxTurnedSheets || isAnimating) {
      return;
    }

    const sheet = sheets[turnedSheets];
    turnedSheets += 1;
    updateIndicator();
    animateSheetTurn(sheet, () => {
      sheet.classList.add("is-turned");
    });
  };

  const flipBackward = () => {
    if (!unlocked || turnedSheets <= 0 || isAnimating) {
      return;
    }

    turnedSheets -= 1;
    const sheet = sheets[turnedSheets];
    updateIndicator();
    animateSheetTurn(sheet, () => {
      sheet.classList.remove("is-turned");
    });
  };

  nextButton.addEventListener("click", flipForward);
  prevButton.addEventListener("click", flipBackward);

  flipbook.addEventListener("click", (event) => {
    if (!unlocked) {
      return;
    }

    if (Date.now() < ignoreBookTapUntil) {
      return;
    }

    const rect = flipbook.getBoundingClientRect();
    const clickedLeftSide = event.clientX < rect.left + rect.width / 2;

    if (clickedLeftSide) {
      flipBackward();
    } else {
      flipForward();
    }
  });

  flipbook.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.changedTouches[0];

      if (!touch) {
        return;
      }

      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    },
    { passive: true }
  );

  flipbook.addEventListener(
    "touchend",
    (event) => {
      if (!unlocked) {
        return;
      }

      const touch = event.changedTouches[0];

      if (!touch) {
        return;
      }

      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) {
        return;
      }

      ignoreBookTapUntil = Date.now() + 400;

      if (deltaX < 0) {
        flipForward();
      } else {
        flipBackward();
      }
    },
    { passive: true }
  );

  flipbook.addEventListener("keydown", (event) => {
    if (!unlocked) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      flipForward();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      flipBackward();
    }
  });

  if (unlockButton && passwordInput && lockMessage) {
    const tryUnlock = () => {
      if (passwordInput.value.trim() === "67") {
        setLockState(true);
        lockMessage.textContent = "Unlocked.";
        if (lock) {
          lock.classList.add("is-hidden");
        }
      } else {
        setLockState(false);
        lockMessage.textContent = "Wrong password.";
      }
    };

    unlockButton.addEventListener("click", tryUnlock);
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        tryUnlock();
      }
    });
  }

  setLockState(false);
  setSheetOrder();
  updateIndicator();
};

const renderMarquee = () => {
  const track = document.getElementById("marquee-track");
  const buildChunk = () => {
    const chunk = document.createElement("div");
    chunk.className = "marquee-chunk";

    romanceProfile.marqueeLines.forEach((line) => {
      const item = document.createElement("span");
      item.textContent = line;
      chunk.appendChild(item);
    });

    return chunk;
  };

  track.appendChild(buildChunk());
  track.appendChild(buildChunk());
};

const renderFortuneMini = (highlight) => {
  const container = document.getElementById("fortune-mini");
  const items = pickMany(romanceProfile.miniFacts, 3);

  container.innerHTML = "";

  if (highlight) {
    const first = document.createElement("span");
    first.className = "mini-pill";
    first.textContent = highlight;
    container.appendChild(first);
  }

  items.forEach((item) => {
    const pill = document.createElement("span");
    pill.className = "mini-pill";
    pill.textContent = item;
    container.appendChild(pill);
  });
};

const createBlossomData = (quote = randomFrom(romanceProfile.blossoms)) => ({
  quote,
  left: Number((Math.random() * 72 + 6).toFixed(2)),
  bottom: Number((Math.random() * 18 + 12).toFixed(2)),
  rotate: Number((Math.random() * 8 - 4).toFixed(2))
});

const normalizeBlossomData = (blossom) => ({
  quote:
    typeof blossom?.quote === "string" && blossom.quote.trim()
      ? blossom.quote.trim()
      : randomFrom(romanceProfile.blossoms),
  left: clamp(Number(blossom?.left) || 6, 6, 78),
  bottom: clamp(Number(blossom?.bottom) || 12, 12, 30),
  rotate: clamp(Number(blossom?.rotate) || 0, -4, 4)
});

const createBlossomNode = (blossomData) => {
  const blossom = document.createElement("article");
  const normalized = normalizeBlossomData(blossomData);

  blossom.className = "blossom";
  blossom.style.left = `${normalized.left}%`;
  blossom.style.bottom = `${normalized.bottom}%`;
  blossom.style.transform = `rotate(${normalized.rotate}deg)`;
  blossom.innerHTML = `
    <strong>New bloom</strong>
    <span>${normalized.quote}</span>
  `;

  return blossom;
};

const persistGardenState = () => {
  writeStoredValue(STORAGE_KEYS.garden, JSON.stringify(gardenState));
};

const plantConfession = (blossomData = createBlossomData()) => {
  const garden = document.getElementById("garden-bed");

  if (!garden) {
    return;
  }

  const normalized = normalizeBlossomData(blossomData);
  gardenState.push(normalized);

  if (gardenState.length > 8) {
    gardenState = gardenState.slice(-8);

    if (garden.firstElementChild) {
      garden.removeChild(garden.firstElementChild);
    }
  }

  garden.appendChild(createBlossomNode(normalized));
  persistGardenState();
};

const initGarden = () => {
  const plantButton = document.getElementById("plant-seed");
  const garden = document.getElementById("garden-bed");

  if (!plantButton || !garden) {
    return;
  }

  const storedBlossoms = readStoredJSON(STORAGE_KEYS.garden, []);
  const savedBlossoms = Array.isArray(storedBlossoms)
    ? storedBlossoms.map(normalizeBlossomData).slice(-8)
    : [];

  plantButton.addEventListener("click", () => {
    plantConfession();

    if (crushLevel >= 70) {
      const sparkleLayer = document.getElementById("sparkle-layer");
      spawnSpark(sparkleLayer);
    }
  });

  garden.innerHTML = "";
  gardenState = [];

  if (savedBlossoms.length > 0) {
    gardenState = savedBlossoms;
    gardenState.forEach((blossom) => {
      garden.appendChild(createBlossomNode(blossom));
    });
    persistGardenState();
    return;
  }

  for (let i = 0; i < 3; i += 1) {
    plantConfession(createBlossomData());
  }
};

const initMeter = () => {
  const slider = document.getElementById("crush-meter");
  const value = document.getElementById("meter-value");
  const message = document.getElementById("meter-message");
  const fallbackMessage =
    romanceProfile.meterMessages[romanceProfile.meterMessages.length - 1].text;
  let previousLevel = Number(slider.value);

  const update = (interactive = false) => {
    const current = Number(slider.value);
    value.textContent = `${current}%`;
    const match = romanceProfile.meterMessages.find((item) => current <= item.max);
    message.textContent = match ? match.text : fallbackMessage;
    applyCrushEffects(current);

    if (interactive && current >= previousLevel + 12) {
      const layer = current >= 75
        ? document.getElementById("celebration-layer")
        : document.getElementById("sparkle-layer");
      const burstCount = Math.max(2, Math.round(current / 20));

      for (let index = 0; index < burstCount; index += 1) {
        setTimeout(() => {
          spawnSpark(layer);
        }, index * 80);
      }
    }

    previousLevel = current;
  };

  slider.addEventListener("input", () => update(true));
  update();
};

const typeHeroWords = () => {
  const pill = document.getElementById("type-pill");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const currentWord = romanceProfile.heroWords[wordIndex];
    const nextText = deleting
      ? currentWord.slice(0, charIndex - 1)
      : currentWord.slice(0, charIndex + 1);

    pill.textContent = nextText;
    charIndex += deleting ? -1 : 1;

    if (!deleting && charIndex === currentWord.length) {
      deleting = true;
      setTimeout(tick, 1200);
      return;
    }

    if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % romanceProfile.heroWords.length;
    }

    setTimeout(tick, deleting ? 45 : 85);
  };

  tick();
};

const spawnSpark = (container) => {
  if (!container) {
    return;
  }

  const heart = document.createElement("span");
  const tones = ["pink", "gold", "blue", "mint"];
  heart.className = `spark-heart ${randomFrom(tones)}`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.setProperty("--drift-x", `${Math.random() * 8 - 4}rem`);
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3500);
};

const dropCompliment = (container, text) => {
  if (!container) {
    return;
  }

  const note = document.createElement("div");
  note.className = "compliment-drop";
  note.textContent = text;
  note.style.left = `${Math.random() * 80 + 6}%`;
  note.style.animationDuration = `${Math.random() * 1.8 + 4.6}s`;
  container.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 7000);
};

const complimentBurst = (count = 10) => {
  const layer = document.getElementById("celebration-layer");

  for (let i = 0; i < count; i += 1) {
    setTimeout(() => {
      dropCompliment(layer, randomFrom(romanceProfile.complimentBursts));
    }, i * 170);
  }
};

const triggerButterflyPanic = () => {
  const layer = document.getElementById("celebration-layer");
  document.body.classList.add("chaos-mode");

  for (let i = 0; i < 22; i += 1) {
    setTimeout(() => {
      spawnSpark(layer);
    }, i * 80);
  }

  complimentBurst(8);

  setTimeout(() => {
    document.body.classList.remove("chaos-mode");
  }, 3200);
};

const getAnniversaryStorageStart = (start) =>
  [
    start.getFullYear(),
    String(start.getMonth() + 1).padStart(2, "0"),
    String(start.getDate()).padStart(2, "0")
  ].join("-");

const triggerAnniversaryCelebration = (milestoneText) => {
  const layer = document.getElementById("celebration-layer");
  const milestoneNotes = [
    milestoneText,
    "monthly milestone unlocked",
    "another month of you",
    "this deserves a little sparkle"
  ];

  document.body.classList.add("anniversary-celebrating");

  for (let i = 0; i < 18; i += 1) {
    setTimeout(() => {
      spawnSpark(layer);
    }, i * 85);
  }

  milestoneNotes.forEach((note, index) => {
    setTimeout(() => {
      dropCompliment(layer, note);
    }, index * 260);
  });

  complimentBurst(5);

  setTimeout(() => {
    document.body.classList.remove("anniversary-celebrating");
  }, 3200);
};

const maybeCelebrateAnniversary = (start, totalMonths, milestoneText) => {
  if (totalMonths < 1) {
    return;
  }

  const startKey = getAnniversaryStorageStart(start);
  const stored = readStoredJSON(STORAGE_KEYS.anniversaryMilestone, null);
  const storedMonths =
    stored && stored.start === startKey && Number.isFinite(Number(stored.months))
      ? Number(stored.months)
      : 0;

  if (storedMonths >= totalMonths) {
    return;
  }

  writeStoredValue(
    STORAGE_KEYS.anniversaryMilestone,
    JSON.stringify({ start: startKey, months: totalMonths })
  );

  setTimeout(() => {
    triggerAnniversaryCelebration(milestoneText);
  }, 800);
};

const initAnniversaryTimer = () => {
  const timer = document.getElementById("anniversary-timer");
  const label = document.getElementById("anniversary-label");
  const milestone = document.getElementById("anniversary-milestone");
  const date = document.getElementById("anniversary-date");
  const note = document.getElementById("anniversary-note");
  const years = document.getElementById("anniversary-years");
  const months = document.getElementById("anniversary-months");
  const days = document.getElementById("anniversary-days");
  const hours = document.getElementById("anniversary-hours");
  const minutes = document.getElementById("anniversary-minutes");
  const seconds = document.getElementById("anniversary-seconds");
  const start = getAnniversaryStart();

  if (!timer || !label || !milestone || !date || !note || !start) {
    return;
  }

  const paint = () => {
    const now = new Date();
    const elapsed = getAnniversaryElapsed(start, now);
    const milestoneText = formatMilestoneLabel(elapsed.totalMonths);
    const nextMilestone = addMonthsClamped(start, elapsed.totalMonths + 1);
    const nextCountdown = elapsed.isFuture
      ? splitDuration(now, start)
      : splitDuration(now, nextMilestone);

    label.textContent = elapsed.isFuture ? "Countdown" : "Current milestone";
    milestone.textContent = elapsed.isFuture ? "Almost at the starting line" : milestoneText;
    date.textContent = `Since ${formatAnniversaryDate(start)}`;
    note.textContent = elapsed.isFuture
      ? `Starts in ${formatShortDuration(nextCountdown)}.`
      : `Next monthly milestone in ${formatShortDuration(nextCountdown)}.`;

    if (years) {
      years.textContent = String(elapsed.years);
    }

    if (months) {
      months.textContent = String(elapsed.months);
    }

    if (days) {
      days.textContent = String(elapsed.days);
    }

    if (hours) {
      hours.textContent = String(elapsed.hours).padStart(2, "0");
    }

    if (minutes) {
      minutes.textContent = String(elapsed.minutes).padStart(2, "0");
    }

    if (seconds) {
      seconds.textContent = String(elapsed.seconds).padStart(2, "0");
    }

    maybeCelebrateAnniversary(start, elapsed.totalMonths, milestoneText);
  };

  paint();
  window.setInterval(paint, 1000);
};

const initSparkles = () => {
  const container = document.getElementById("sparkle-layer");
  const button = document.getElementById("sprinkle-love");
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  let sparkleLoopId = 0;

  if (!container || !button) {
    return;
  }

  const adaptBurst = (amount) =>
    coarsePointer ? Math.max(1, Math.round(amount * 0.65)) : amount;

  const burst = (amount = 10) => {
    for (let i = 0; i < amount; i += 1) {
      setTimeout(() => spawnSpark(container), i * 120);
    }
  };

  syncSparkleLoop = () => {
    if (sparkleLoopId) {
      window.clearInterval(sparkleLoopId);
    }

    sparkleLoopId = window.setInterval(() => {
      burst(adaptBurst(sparkleAutoBurstCount));
    }, Math.max(1200, 3400 - crushLevel * 18));
  };

  button.addEventListener("click", () => {
    burst(adaptBurst(Math.max(10, sparkleAutoBurstCount * 3)));
  });

  burst(adaptBurst(Math.max(6, sparkleAutoBurstCount * 2)));
  syncSparkleLoop();
};

const initEnvelope = () => {
  const envelope = document.getElementById("open-envelope");
  const letter = document.getElementById("final-letter");
  const finalMessage = document.getElementById("final-message");
  const celebrate = document.getElementById("celebrate-button");
  const celebrationLayer = document.getElementById("celebration-layer");

  finalMessage.textContent = romanceProfile.finalMessage;

  envelope.addEventListener("click", () => {
    const open = envelope.classList.toggle("is-open");
    envelope.setAttribute("aria-expanded", String(open));
    letter.hidden = !open;

    if (open) {
      letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
      playChime();
    }
  });

  celebrate.addEventListener("click", () => {
    for (let i = 0; i < 18; i += 1) {
      setTimeout(() => spawnSpark(celebrationLayer), i * 90);
    }
    complimentBurst(7);
    playChime(true);
  });
};

const initThoughtCounter = () => {
  const counter = document.getElementById("thought-counter");
  let value = Number(counter.textContent);

  setInterval(() => {
    value += Math.floor(Math.random() * 3) + 1;
    counter.textContent = String(value);
  }, 2200);
};

const applyCrushEffects = (level = crushLevel) => {
  const root = document.documentElement;
  const body = document.body;
  const pageGlow = document.querySelector(".page-glow");
  const orbOne = document.querySelector(".orb-one");
  const orbTwo = document.querySelector(".orb-two");
  const orbThree = document.querySelector(".orb-three");
  const energy = clamp(level / 100, 0.01, 1);

  crushLevel = level;
  sparkleAutoBurstCount = Math.max(1, Math.round(1 + energy * 4));

  root.style.setProperty("--crush-energy", energy.toFixed(2));
  root.style.setProperty("--meter-level-scale", energy.toFixed(2));

  body.style.background =
    `radial-gradient(circle at top left, ${withAlpha(activePalette.blush, 0.6 + energy * 0.22)}, transparent 28%), ` +
    `radial-gradient(circle at 82% 18%, ${withAlpha(activePalette.sky, 0.54 + energy * 0.2)}, transparent 24%), ` +
    `radial-gradient(circle at bottom right, ${withAlpha(activePalette.mint, 0.58 + energy * 0.22)}, transparent 26%), ` +
    "linear-gradient(180deg, #fff7fb 0%, #fffefb 52%, #fdf8ff 100%)";

  if (pageGlow) {
    pageGlow.style.background =
      `radial-gradient(circle, ${withAlpha(activePalette.blush, 0.12 + energy * 0.24)}, ` +
      `${withAlpha(activePalette.lilac, 0.08 + energy * 0.22)} 42%, transparent 68%)`;
  }

  if (orbOne) {
    orbOne.style.background = withAlpha(activePalette.blush, 0.18 + energy * 0.32);
  }

  if (orbTwo) {
    orbTwo.style.background = withAlpha(activePalette.sky, 0.18 + energy * 0.34);
  }

  if (orbThree) {
    orbThree.style.background = withAlpha(activePalette.butter, 0.14 + energy * 0.3);
  }

  if (typeof syncSparkleLoop === "function") {
    syncSparkleLoop();
  }
};

const applyPalette = (palette) => {
  activePalette = palette;

  Object.entries(palette).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}`, value);
  });

  applyCrushEffects(crushLevel);
};

const shufflePalette = () => {
  const available = romanceProfile.palettes.filter((_, index) => index !== activePaletteIndex);
  const nextPalette = randomFrom(available);
  activePaletteIndex = romanceProfile.palettes.indexOf(nextPalette);
  applyPalette(nextPalette);
};

const initFortuneMachine = () => {
  const output = document.getElementById("fortune-output");
  const fortuneButton = document.getElementById("fortune-button");
  const complimentButton = document.getElementById("compliment-burst");
  const paletteButton = document.getElementById("palette-button");
  const confettiButton = document.getElementById("confetti-button");

  const cycleFortune = () => {
    output.textContent = randomFrom(romanceProfile.fortunes);
    renderFortuneMini("new reading generated");
  };

  fortuneButton.addEventListener("click", cycleFortune);

  complimentButton.addEventListener("click", () => {
    complimentBurst(12);
    renderFortuneMini("compliments falling");
  });

  paletteButton.addEventListener("click", () => {
    shufflePalette();
    renderFortuneMini("pastels reshuffled");
  });

  confettiButton.addEventListener("click", () => {
    triggerButterflyPanic();
    renderFortuneMini("chaos deployed");
  });

  cycleFortune();
};

const playChime = (extended = false) => {
  const AudioContextRef = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextRef) {
    return;
  }

  const audioContext = new AudioContextRef();
  const notes = extended ? [392, 494, 587, 784] : [392, 523, 659];

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    const start = audioContext.currentTime + index * 0.13;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    oscillator.start(start);
    oscillator.stop(start + 0.3);
  });

  setTimeout(() => {
    if (audioContext.state !== "closed") {
      audioContext.close();
    }
  }, notes.length * 180 + 400);
};

const initBackgroundAudio = () => {
  const audio = document.getElementById("bg-audio-player");
  const toggleButton = document.getElementById("audio-toggle");
  const toggleState = document.getElementById("audio-toggle-state");

  if (!audio || !toggleButton || !toggleState) {
    return;
  }

  let wantsAudio = readStoredValue(STORAGE_KEYS.audioPreference, "on") !== "off";

  const syncToggle = () => {
    const isPlaying = wantsAudio && !audio.paused;
    toggleButton.classList.toggle("is-playing", isPlaying);
    toggleButton.classList.toggle("is-paused", !isPlaying);
    toggleButton.setAttribute("aria-pressed", String(isPlaying));
    toggleButton.setAttribute(
      "aria-label",
      isPlaying ? "Pause background music" : "Play background music"
    );
    toggleState.textContent = isPlaying ? "On" : wantsAudio ? "Tap to play" : "Off";
  };

  const tryPlay = () => {
    if (!wantsAudio) {
      audio.pause();
      syncToggle();
      return Promise.resolve(false);
    }

    const playPromise = audio.play();

    if (playPromise && typeof playPromise.catch === "function") {
      return playPromise
        .then(() => {
          syncToggle();
          return true;
        })
        .catch(() => {
          syncToggle();
          return false;
        });
    }

    syncToggle();
    return Promise.resolve(!audio.paused);
  };

  const pauseAudio = () => {
    wantsAudio = false;
    writeStoredValue(STORAGE_KEYS.audioPreference, "off");
    audio.pause();
    syncToggle();
  };

  const resumeAudio = () => {
    wantsAudio = true;
    writeStoredValue(STORAGE_KEYS.audioPreference, "on");
    return tryPlay();
  };

  toggleButton.addEventListener("click", () => {
    if (wantsAudio && !audio.paused) {
      pauseAudio();
      return;
    }

    resumeAudio();
  });

  audio.addEventListener("play", syncToggle);
  audio.addEventListener("pause", syncToggle);
  syncToggle();

  if (!wantsAudio) {
    audio.pause();
    return;
  }

  // Try immediately for browsers that allow autoplay.
  tryPlay();
  setTimeout(tryPlay, 700);
  setTimeout(tryPlay, 1800);

  // Fallback for autoplay-restricted browsers.
  ["pointerdown", "touchstart", "keydown"].forEach((eventName) => {
    window.addEventListener(
      eventName,
      () => {
        if (wantsAudio && audio.paused) {
          tryPlay();
        }
      },
      { once: true }
    );
  });
};

const initReveals = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
  });
};

const initSky = () => {
  const canvas = document.getElementById("sky-canvas");
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dots = [];

  if (!context) {
    return;
  }

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    dots = Array.from({ length: Math.min(42, Math.floor(width / 28)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 1,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28
    }));
  };

  const render = () => {
    context.clearRect(0, 0, width, height);

    dots.forEach((dot, index) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > width) {
        dot.vx *= -1;
      }

      if (dot.y < 0 || dot.y > height) {
        dot.vy *= -1;
      }

      context.beginPath();
      context.fillStyle =
        index % 3 === 0 ? "rgba(255, 177, 204, 0.65)" : "rgba(255, 255, 255, 0.65)";
      context.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      context.fill();
    });

    for (let i = 0; i < dots.length; i += 1) {
      for (let j = i + 1; j < dots.length; j += 1) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const distance = Math.hypot(dx, dy);

        if (distance < 120) {
          context.strokeStyle = `rgba(205, 182, 228, ${0.12 - distance / 1200})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(dots[i].x, dots[i].y);
          context.lineTo(dots[j].x, dots[j].y);
          context.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  };

  resize();
  render();
  window.addEventListener("resize", resize);
};

const initConstellation = () => {
  const section = document.getElementById("constellation");
  const canvasShell = document.querySelector(".constellation-canvas-shell");
  const canvas = document.getElementById("constellation-canvas");
  const context = canvas?.getContext("2d");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const starPoints = [
    { x: 0.06, y: 0.76 },
    { x: 0.06, y: 0.2 },
    { x: 0.13, y: 0.47 },
    { x: 0.2, y: 0.2 },
    { x: 0.2, y: 0.76 },
    { x: 0.31, y: 0.76 },
    { x: 0.37, y: 0.2 },
    { x: 0.44, y: 0.76 },
    { x: 0.34, y: 0.5 },
    { x: 0.41, y: 0.5 },
    { x: 0.51, y: 0.2 },
    { x: 0.59, y: 0.2 },
    { x: 0.55, y: 0.2 },
    { x: 0.55, y: 0.76 },
    { x: 0.51, y: 0.76 },
    { x: 0.59, y: 0.76 },
    { x: 0.68, y: 0.76 },
    { x: 0.74, y: 0.2 },
    { x: 0.81, y: 0.76 },
    { x: 0.71, y: 0.5 },
    { x: 0.78, y: 0.5 }
  ];
  const starSegments = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 6],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 13],
    [14, 15],
    [16, 17],
    [17, 18],
    [19, 20]
  ];
  const pointOrder = [...new Set(starSegments.flat())];
  const pointRanks = starPoints.map((_, index) => {
    const rank = pointOrder.indexOf(index);
    return rank === -1 ? index : rank;
  });
  let width = 0;
  let height = 0;
  let ambientStars = [];
  let revealProgress = 0;
  let targetProgress = 0;
  let lastTime = 0;
  let hasAutoStarted = false;

  if (!section || !canvasShell || !canvas || !context) {
    return;
  }

  const createAmbientStars = () =>
    Array.from(
      { length: Math.min(76, Math.max(32, Math.floor((width * height) / 16000))) },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.9 + 0.55
      })
    );

  const projectPoint = (point) => {
    const padX = Math.min(78, width * 0.09);
    const padY = Math.min(84, height * 0.18);

    return {
      x: padX + point.x * (width - padX * 2),
      y: padY + point.y * (height - padY * 2)
    };
  };

  const resize = () => {
    width = canvasShell.clientWidth;
    height = canvasShell.clientHeight;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    ambientStars = createAmbientStars();
  };

  const drawAmbient = (time) => {
    const haze = context.createRadialGradient(
      width * 0.5,
      height * 0.5,
      10,
      width * 0.5,
      height * 0.5,
      width * 0.6
    );
    haze.addColorStop(0, `rgba(255, 214, 232, ${0.2 + revealProgress * 0.12})`);
    haze.addColorStop(0.45, `rgba(214, 232, 255, ${0.16 + revealProgress * 0.1})`);
    haze.addColorStop(0.8, `rgba(234, 220, 255, ${0.12 + revealProgress * 0.08})`);
    haze.addColorStop(1, "rgba(255, 255, 255, 0)");

    context.fillStyle = haze;
    context.fillRect(0, 0, width, height);

    ambientStars.forEach((star, index) => {
      const twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(time * 0.0012 * star.speed + star.phase));
      const alpha = 0.18 + twinkle * 0.45;

      context.beginPath();
      if (index % 4 === 0) {
        context.fillStyle = `rgba(255, 196, 221, ${alpha})`;
      } else if (index % 4 === 1) {
        context.fillStyle = `rgba(196, 224, 255, ${alpha})`;
      } else if (index % 4 === 2) {
        context.fillStyle = `rgba(235, 218, 255, ${alpha})`;
      } else {
        context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      }
      context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      context.fill();
    });
  };

  const drawConstellation = () => {
    const points = starPoints.map(projectPoint);
    const revealedSegments = revealProgress * starSegments.length;

    starSegments.forEach(([fromIndex, toIndex], index) => {
      const segmentProgress = Math.max(0, Math.min(1, revealedSegments - index));

      if (segmentProgress <= 0) {
        return;
      }

      const from = points[fromIndex];
      const to = points[toIndex];
      const current = {
        x: from.x + (to.x - from.x) * segmentProgress,
        y: from.y + (to.y - from.y) * segmentProgress
      };
      const alpha = 0.25 + segmentProgress * 0.45;

      context.beginPath();
      context.strokeStyle = `rgba(220, 201, 255, ${alpha * 0.62})`;
      context.lineWidth = 10;
      context.lineCap = "round";
      context.moveTo(from.x, from.y);
      context.lineTo(current.x, current.y);
      context.stroke();

      context.beginPath();
      context.strokeStyle = `rgba(255, 251, 255, ${alpha})`;
      context.lineWidth = 3;
      context.moveTo(from.x, from.y);
      context.lineTo(current.x, current.y);
      context.stroke();
    });

    points.forEach((point, index) => {
      const activation = Math.max(
        0.2,
        Math.min(1, revealProgress * pointOrder.length - pointRanks[index] + 0.45)
      );

      context.beginPath();
      context.fillStyle = `rgba(255, 214, 232, ${0.2 + activation * 0.28})`;
      context.arc(point.x, point.y, 11 + activation * 10, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.fillStyle = `rgba(255, 255, 255, ${0.34 + activation * 0.52})`;
      context.arc(point.x, point.y, 3.4 + activation * 2, 0, Math.PI * 2);
      context.fill();
    });
  };

  const render = (time) => {
    const delta = lastTime ? Math.min(40, time - lastTime) : 16;
    lastTime = time;

    if (targetProgress > revealProgress) {
      const step = reducedMotionQuery.matches ? 1 : delta / 2400;
      revealProgress = Math.min(targetProgress, revealProgress + step);
    }

    context.clearRect(0, 0, width, height);
    drawAmbient(time);
    drawConstellation();
    requestAnimationFrame(render);
  };

  const startReveal = () => {
    revealProgress = 0;
    targetProgress = 1;
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAutoStarted) {
          hasAutoStarted = true;
          startReveal();
        }
      });
    },
    { threshold: 0.45 }
  );

  canvasShell.addEventListener("click", startReveal);
  observer.observe(section);
  resize();
  requestAnimationFrame(render);
  window.addEventListener("resize", resize);
};

const initScrollProgress = () => {
  const bar = document.getElementById("scroll-progress-bar");

  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? window.scrollY / total : 0;
    bar.style.width = `${progress * 100}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

const initCursorTrail = () => {
  const layer = document.getElementById("cursor-layer");
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (coarsePointer || reducedMotion) {
    return;
  }

  window.addEventListener("pointermove", (event) => {
    if (Math.random() > 0.55) {
      return;
    }

    const dot = document.createElement("span");
    dot.className = "cursor-dot";
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    layer.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 800);
  });
};

const initTiltCards = () => {
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (coarsePointer || reducedMotion) {
    return;
  }

  const cards = document.querySelectorAll(
    ".hero-card, .reason-card, .timeline-card, .split-panel, .scene-display, .lab-card, .fortune-card, .control-card, .book-note-card, .final-letter"
  );

  cards.forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.willChange = "transform";

    card.addEventListener("pointermove", (event) => {
      if (document.body.classList.contains("chaos-mode")) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const rotateX = -((event.clientY - rect.top) / rect.height - 0.5) * 5;
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      card.style.transform =
        `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) ` +
        `rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
};

const initLoader = () =>
  new Promise((resolve) => {
    const loader = document.getElementById("loader-screen");
    const progressFill = document.getElementById("loader-progress-fill");
    const ringFill = document.getElementById("loader-ring-fill");
    const seconds = document.getElementById("loader-seconds");
    const status = document.getElementById("loader-status");
    const sentence = document.getElementById("loader-sentence");
    const tags = document.getElementById("loader-tags");
    const randoms = document.getElementById("loader-randoms");
    const skipButton = document.getElementById("skip-loader");
    const circumference = 2 * Math.PI * 50;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 1400 : LOADER_DURATION;
    const startedAt = performance.now();
    let frameId = 0;
    let completed = false;

    if (!loader || !progressFill || !ringFill || !seconds || !status || !sentence || !tags || !randoms) {
      resolve();
      return;
    }

    const paintTags = () => {
      tags.innerHTML = "";
      pickMany(romanceProfile.loadingThings.map((item) => item.title.toLowerCase()), 4).forEach(
        (item) => {
          const pill = document.createElement("span");
          pill.textContent = item;
          tags.appendChild(pill);
        }
      );
    };

    const paintRandoms = () => {
      randoms.innerHTML = "";
      pickMany(romanceProfile.loadingThings, 4).forEach((item) => {
        const card = document.createElement("article");
        card.className = "loader-item";
        card.innerHTML = `
          <strong>${item.title}</strong>
          <span>${item.note}</span>
        `;
        randoms.appendChild(card);
      });
    };

    const rotateStatus = () => {
      status.textContent = randomFrom(romanceProfile.loadingStatuses);
    };

    const rotateSentence = () => {
      sentence.textContent = randomFrom(romanceProfile.loadingSentences);
    };

    paintTags();
    paintRandoms();
    rotateStatus();
    rotateSentence();

    const tagTimer = setInterval(paintTags, 2600);
    const randomsTimer = setInterval(paintRandoms, 1900);
    const statusTimer = setInterval(rotateStatus, 1500);
    const sentenceTimer = setInterval(rotateSentence, 2200);

    const cleanup = () => {
      clearInterval(tagTimer);
      clearInterval(randomsTimer);
      clearInterval(statusTimer);
      clearInterval(sentenceTimer);
      cancelAnimationFrame(frameId);

      if (skipButton) {
        skipButton.removeEventListener("click", skipLoader);
      }
    };

    const complete = (wasSkipped = false) => {
      if (completed) {
        return;
      }

      completed = true;
      cleanup();
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");

      if (skipButton) {
        skipButton.disabled = true;
        skipButton.textContent = wasSkipped ? "Opening..." : "Ready";
      }

      setTimeout(() => {
        loader.remove();
        resolve();
      }, 820);
    };

    const skipLoader = () => {
      progressFill.style.width = "100%";
      ringFill.style.strokeDasharray = String(circumference);
      ringFill.style.strokeDashoffset = "0";
      seconds.textContent = "0";
      complete(true);
    };

    if (skipButton) {
      skipButton.addEventListener("click", skipLoader);
    }

    const tick = (now) => {
      if (completed) {
        return;
      }

      const elapsed = Math.min(now - startedAt, duration);
      const progress = elapsed / duration;
      const remainingSeconds = Math.max(0, Math.ceil((duration - elapsed) / 1000));

      progressFill.style.width = `${progress * 100}%`;
      ringFill.style.strokeDasharray = String(circumference);
      ringFill.style.strokeDashoffset = String(circumference * (1 - progress));
      seconds.textContent = String(remainingSeconds);

      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        complete();
      }
    };

    frameId = requestAnimationFrame(tick);
  });

const init = async () => {
  initBackgroundAudio();
  bindText();
  renderReasons();
  renderTimeline();
  renderDetails();
  renderCollage();
  renderScenes();
  renderBookGallery();
  renderMarquee();
  renderFortuneMini("systems nominal");
  initGarden();
  initMeter();
  initThoughtCounter();
  typeHeroWords();
  initSparkles();
  initFortuneMachine();
  initEnvelope();
  initReveals();
  initScrollProgress();
  initCursorTrail();
  initTiltCards();
  initSky();
  initConstellation();

  await initLoader();
  initAnniversaryTimer();
  complimentBurst(4);
};

document.addEventListener("DOMContentLoaded", init);
