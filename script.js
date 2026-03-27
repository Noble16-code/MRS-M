const LOADER_DURATION = 10000;


const romanceProfile = {
  herName: "Maia",
  yourName: "Dotun",
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

let activePaletteIndex = 0;

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

const plantConfession = () => {
  const garden = document.getElementById("garden-bed");
  const blossom = document.createElement("article");
  const quote = randomFrom(romanceProfile.blossoms);

  blossom.className = "blossom";
  blossom.style.left = `${Math.random() * 72 + 6}%`;
  blossom.style.bottom = `${Math.random() * 18 + 12}%`;
  blossom.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
  blossom.innerHTML = `
    <strong>New bloom</strong>
    <span>${quote}</span>
  `;

  garden.appendChild(blossom);

  if (garden.children.length > 8) {
    garden.removeChild(garden.firstElementChild);
  }
};

const initGarden = () => {
  const plantButton = document.getElementById("plant-seed");
  plantButton.addEventListener("click", plantConfession);

  for (let i = 0; i < 3; i += 1) {
    plantConfession();
  }
};

const initMeter = () => {
  const slider = document.getElementById("crush-meter");
  const value = document.getElementById("meter-value");
  const message = document.getElementById("meter-message");
  const fallbackMessage =
    romanceProfile.meterMessages[romanceProfile.meterMessages.length - 1].text;

  const update = () => {
    const current = Number(slider.value);
    value.textContent = `${current}%`;
    const match = romanceProfile.meterMessages.find((item) => current <= item.max);
    message.textContent = match ? match.text : fallbackMessage;
  };

  slider.addEventListener("input", update);
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

const initSparkles = () => {
  const container = document.getElementById("sparkle-layer");
  const button = document.getElementById("sprinkle-love");

  const burst = (amount = 10) => {
    for (let i = 0; i < amount; i += 1) {
      setTimeout(() => spawnSpark(container), i * 120);
    }
  };

  button.addEventListener("click", () => burst(16));
  burst(12);
  setInterval(() => burst(3), 2800);
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

const applyPalette = (palette) => {
  const root = document.documentElement;
  const body = document.body;
  const orbOne = document.querySelector(".orb-one");
  const orbTwo = document.querySelector(".orb-two");
  const orbThree = document.querySelector(".orb-three");

  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });

  body.style.background =
    `radial-gradient(circle at top left, ${palette.blush}d8, transparent 28%), ` +
    `radial-gradient(circle at 82% 18%, ${palette.sky}d0, transparent 24%), ` +
    `radial-gradient(circle at bottom right, ${palette.mint}de, transparent 26%), ` +
    "linear-gradient(180deg, #fff7fb 0%, #fffefb 52%, #fdf8ff 100%)";

  if (orbOne) {
    orbOne.style.background = `${palette.blush}66`;
  }

  if (orbTwo) {
    orbTwo.style.background = `${palette.sky}66`;
  }

  if (orbThree) {
    orbThree.style.background = `${palette.butter}59`;
  }
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
    ".hero-card, .reason-card, .timeline-card, .split-panel, .scene-display, .lab-card, .fortune-card, .control-card, .final-letter"
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
    const circumference = 2 * Math.PI * 50;
    const startedAt = performance.now();

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

    const complete = () => {
      clearInterval(tagTimer);
      clearInterval(randomsTimer);
      clearInterval(statusTimer);
      clearInterval(sentenceTimer);
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading");

      setTimeout(() => {
        loader.remove();
        resolve();
      }, 820);
    };

    const tick = (now) => {
      const elapsed = Math.min(now - startedAt, LOADER_DURATION);
      const progress = elapsed / LOADER_DURATION;
      const remainingSeconds = Math.max(0, Math.ceil((LOADER_DURATION - elapsed) / 1000));

      progressFill.style.width = `${progress * 100}%`;
      ringFill.style.strokeDasharray = String(circumference);
      ringFill.style.strokeDashoffset = String(circumference * (1 - progress));
      seconds.textContent = String(remainingSeconds);

      if (elapsed < LOADER_DURATION) {
        requestAnimationFrame(tick);
      } else {
        complete();
      }
    };

    requestAnimationFrame(tick);
  });

const init = async () => {
  bindText();
  renderReasons();
  renderTimeline();
  renderDetails();
  renderCollage();
  renderScenes();
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

  await initLoader();
  complimentBurst(4);
};

document.addEventListener("DOMContentLoaded", init);
