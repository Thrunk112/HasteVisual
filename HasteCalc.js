//READ ME: Ai generated code. Not very high quality but I added comments to help follow along.  Only posting to help explain haste to ppl that say things such as "Its worthless on trash". Not worth spending any time to clean it up, its really poorly written but does what I want and took no time to make

//ADD Spells here. Add the dropdown option in HTML too
const spellData = {
  fireball: { name: "Fireball (Rank 12)", castTime: 3, coef: 1.0, baseDamage: 678.5 },
  scorch: { name: "Scorch (Rank 6)", castTime: 1.5, coef: 0.428, baseDamage: 254.5 },
  frostbolt: { name: "Frostbolt (Rank 11)", castTime: 2.5, coef: 0.814, baseDamage: 535.5 },
  arcane_missiles: { name: "Arcane Missiles (Rank 8)", castTime: 1.0, coef: 0.286, baseDamage: 230 },
};

const colorMapDark = {//Dark mode version, reduced saturation from original light version. 
  0: [188, 188, 188], 1: [19, 145, 19], 2: [42, 165, 34], 3: [96, 188, 27], 4: [157, 210, 65],
  5: [203, 214, 19], 6: [214, 184, 19], 7: [214, 157, 19], 8: [214, 126, 19], 9: [214, 96, 19],
  10: [214, 65, 19], 11: [184, 50, 19], 12: [176, 19, 19], 13: [161, 19, 27], 14: [145, 19, 19],
  15: [138, 19, 65], 16: [122, 19, 88], 17: [107, 19, 111], 18: [92, 19, 134], 19: [80, 19, 142],
  20: [73, 19, 149], 21: [65, 19, 157], 22: [57, 19, 165], 23: [50, 19, 172], 24: [42, 19, 180],
  25: [34, 19, 188], 26: [27, 19, 195], 27: [19, 19, 203], 28: [27, 19, 210], 29: [42, 19, 214],
  30: [65, 19, 214], 31: [88, 19, 195], 32: [103, 19, 172], 33: [119, 19, 149], 34: [134, 19, 126],
  35: [149, 19, 103], 36: [165, 19, 88], 37: [180, 19, 73], 38: [195, 19, 57], 39: [210, 19, 42],
  40: [214, 19, 65], 41: [214, 42, 88], 42: [214, 65, 111], 43: [214, 88, 134], 44: [214, 111, 157],
  45: [214, 134, 180], 46: [191, 149, 191], 47: [172, 165, 203], 48: [149, 180, 210],
  49: [126, 195, 214], 50: [103, 210, 214], 51: [88, 214, 203], 52: [73, 214, 188],
  53: [57, 214, 172], 54: [42, 214, 157], 55: [27, 214, 142], 56: [27, 203, 126],
  57: [34, 191, 111], 58: [42, 180, 96], 59: [50, 168, 80], 60: [57, 157, 65], 61: [19, 161, 23],
  62: [65, 180, 23], 63: [111, 195, 23], 64: [157, 210, 23], 65: [203, 214, 23],
  66: [214, 188, 23], 67: [214, 157, 23], 68: [214, 126, 23], 69: [214, 96, 23], 70: [214, 65, 23],
  71: [199, 42, 23], 72: [184, 27, 23], 73: [168, 19, 31], 74: [153, 19, 46], 75: [138, 19, 69],
  76: [122, 19, 92], 77: [107, 19, 115], 78: [92, 19, 138], 79: [84, 19, 145], 80: [77, 19, 153],
  81: [69, 19, 161], 82: [61, 19, 168], 83: [54, 19, 176], 84: [46, 19, 184], 85: [38, 19, 191],
  86: [31, 19, 199], 87: [23, 19, 207], 88: [31, 19, 214], 89: [46, 19, 210], 90: [69, 19, 207],
  91: [92, 19, 195], 92: [107, 19, 180], 93: [122, 19, 165], 94: [138, 19, 149],
  95: [153, 19, 134], 96: [168, 19, 119]
};
const colorMapLight = { //rip colorblind ppl. most of these arent used but its nice to be filled in when you make the graph big.
  0: [220, 220, 220], 1: [0, 165, 0], 2: [30, 190, 20], 3: [100, 220, 10],
  4: [180, 250, 60], 5: [240, 255, 0], 6: [255, 215, 0], 7: [255, 180, 0],
  8: [255, 140, 0], 9: [255, 100, 0], 10: [255, 60, 0], 11: [215, 40, 0],
  12: [205, 0, 0], 13: [185, 0, 10], 14: [165, 0, 0], 15: [155, 0, 60],
  16: [135, 0, 90], 17: [115, 0, 120], 18: [95, 0, 150], 19: [80, 0, 160],
  20: [70, 0, 170], 21: [60, 0, 180], 22: [50, 0, 190], 23: [40, 0, 200],
  24: [30, 0, 210], 25: [20, 0, 220], 26: [10, 0, 230], 27: [0, 0, 240],
  28: [10, 0, 250], 29: [30, 0, 255], 30: [60, 0, 255], 31: [90, 0, 230],
  32: [110, 0, 200], 33: [130, 0, 170], 34: [150, 0, 140], 35: [170, 0, 110],
  36: [190, 0, 90], 37: [210, 0, 70], 38: [230, 0, 50], 39: [250, 0, 30],
  40: [255, 0, 60], 41: [255, 30, 90], 42: [255, 60, 120], 43: [255, 90, 150],
  44: [255, 120, 180], 45: [255, 150, 210], 46: [225, 170, 225], 47: [200, 190, 240],
  48: [170, 210, 250], 49: [140, 230, 255], 50: [110, 250, 255], 51: [90, 255, 240],
  52: [70, 255, 220], 53: [50, 255, 200], 54: [30, 255, 180], 55: [10, 255, 160],
  56: [10, 240, 140], 57: [20, 225, 120], 58: [30, 210, 100], 59: [40, 195, 80],
  60: [50, 180, 60], 61: [0, 185, 5], 62: [60, 210, 5], 63: [120, 230, 5],
  64: [180, 250, 5], 65: [240, 255, 5], 66: [255, 220, 5], 67: [255, 180, 5],
  68: [255, 140, 5], 69: [255, 100, 5], 70: [255, 60, 5], 71: [235, 30, 5],
  72: [215, 10, 5], 73: [195, 0, 15], 74: [175, 0, 35], 75: [155, 0, 65],
  76: [135, 0, 95], 77: [115, 0, 125], 78: [95, 0, 155], 79: [85, 0, 165],
  80: [75, 0, 175], 81: [65, 0, 185], 82: [55, 0, 195], 83: [45, 0, 205],
  84: [35, 0, 215], 85: [25, 0, 225], 86: [15, 0, 235], 87: [5, 0, 245],
  88: [15, 0, 255], 89: [35, 0, 250], 90: [65, 0, 245], 91: [95, 0, 230],
  92: [115, 0, 210], 93: [135, 0, 190], 94: [155, 0, 170], 95: [175, 0, 150],
  96: [195, 0, 130]
};

function getUserInputs() {  ///only used for isCastMode. I think the ai wanted to future proof and then gave up on that, idk
  return {
    mode: document.querySelector('input[name="mode"]:checked').value,
    isCastMode: document.querySelector('input[name="mode"]:checked').value === 'cast',
    minFightTime: parseFloat(document.getElementById("minFightTime").value),
    maxFightTime: parseFloat(document.getElementById("maxFightTime").value),
    spellKey: document.getElementById("spellSelect").value,
    spellPower: parseFloat(document.getElementById("spellPowerInput").value) || 0,
    critChance: parseFloat(document.getElementById("critChanceInput").value) / 100 || 0,
    mqgActive: document.getElementById("mqgToggle").checked,
    jujuActive: document.getElementById("jujuToggle")?.checked,
    quicknessActive: document.getElementById("quicknessToggle")?.checked,
    showVerticalGrid: document.getElementById("showVerticalGrid").checked,
    showHasteLines: document.getElementById("showHasteLines").checked,
    cellWidth: parseInt(document.getElementById("cellWidthSlider").value),
    cellHeight: parseInt(document.getElementById("cellHeightSlider").value) / 10,
    maxHaste: parseInt(document.getElementById("maxHaste").value, 10),
    userHaste: getTotalHasteMultiplier().multiplier,
    castTimeBase: getAdjustedCastTimeBase(),
  };
}

let colorMap = colorMapDark;
//should get broken up, does a lot right now. sorta turned into a big mess
function drawGrid() {
  const ctx = canvas.getContext("2d");
  const inputs = getUserInputs();

  if (document.getElementById("darkModeToggle")?.checked) {
    isDarkMode = true;
    colorMap = colorMapDark;
  } else {
    isDarkMode = false;
    colorMap = colorMapLight;
  }

  // user inputs

  const isCastMode = inputs.mode === "cast";
  let minFightTime = parseFloat(document.getElementById("minFightTime").value);
  let maxFightTime = parseFloat(document.getElementById("maxFightTime").value);
  if (minFightTime > maxFightTime - 1) {
    minFightTime = maxFightTime - 1;
  }
  if (maxFightTime < minFightTime + 1) {
    maxFightTime = minFightTime + 1;
  }
  document.getElementById("minFightTime").value = minFightTime;
  document.getElementById("maxFightTime").value = maxFightTime;
  const userHaste = getTotalHasteMultiplier().multiplier;
  const castTimeBase = getAdjustedCastTimeBase();
  const maxGraphLength = parseInt(document.getElementById("maxHaste").value, 10) * 10 + 5;

  const fightTime = Math.max(maxFightTime + 10, castTimeBase * 30);
  const mqgActive = document.getElementById("mqgToggle").checked;


  // Layout constants
  const marginTop = 60;
  const marginSide = 40;
  //const cellWidth = parseInt(document.getElementById("cellWidthSlider").value);

  //what a weird way to scale it
  const baseCastTimeForScaling = 3.0; // 3 sec = 100% cell width
  const minScale = 0.5;               // 1 sec cast → 50% of cell width
  const castTimeScale = Math.max(minScale, castTimeBase / baseCastTimeForScaling);
  const cellWidthRaw = parseInt(document.getElementById("cellWidthSlider").value, 10);
  const cellWidth = Math.round(cellWidthRaw * castTimeScale);

  const cellHeight = parseInt(document.getElementById("cellHeightSlider").value) / 10;
  const numCast = Math.floor(fightTime / castTimeBase);
  const fightLengths = Array.from({ length: numCast }, (_, i) => +(castTimeBase * (i + 1)).toFixed(2));
  const hasteRatings = Array.from({ length: maxGraphLength }, (_, i) => i / 1000);
  const selectedSpellKey = document.getElementById("spellSelect").value;
  const spell = spellData[selectedSpellKey];

  canvas.width = marginSide * 2 + cellWidth * fightLengths.length;
  canvas.height = marginTop + cellHeight * hasteRatings.length + 150;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (isDarkMode) {
    ctx.fillStyle = "#D4D4D4";
  } else {
    ctx.fillStyle = "black";
  }
  ctx.font = "18px Arial";

  const title = `Number of extra attacks with a ${castTimeBase}s base ${inputs.mode} at a given haste rating (Y) and fight length (X)`;
  ctx.fillText(title, (canvas.width - ctx.measureText(title).width) / 2, 30);

  function drawGridLines(x0, y0, w, h, vertical) {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (vertical) {
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0, y0 + h);
      ctx.moveTo(x0 + w, y0);
      ctx.lineTo(x0 + w, y0 + h);
    }
    ctx.stroke();
  }

  // SHADING LOGIC 
  hasteRatings.forEach((haste, row) => {
    const y0 = marginTop + row * cellHeight;

    // Draw Y-axis label for haste %
    if (row % 10 === 0) {
      if (isDarkMode) {
        ctx.fillStyle = "#D4D4D4";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.font = "12px Arial";
      ctx.fillText(`${(haste * 100).toFixed(0)}%`, 5, y0 + 5);

    }

    // Create arrays of events: base casts (-1) and hasted casts (+1)
    const baseCastTimes = [];
    for (let t = 0; t <= fightTime + castTimeBase; t += castTimeBase) {
      baseCastTimes.push({ time: t, delta: -1 });
    }

    const hastedCastTimes = [];
    let t = 0;
    while (t <= fightTime + castTimeBase) {
      const ct = getCastTime(t, haste, mqgActive, isCastMode, castTimeBase);
      hastedCastTimes.push({ time: t, delta: +1 });
      t += ct;
    }

    // Merge all events and sort by time ascending
    const allEvents = baseCastTimes.concat(hastedCastTimes);
    allEvents.sort((a, b) => a.time - b.time);

    // Merge events with identical time stamps
    const mergedEvents = [];
    for (let i = 0; i < allEvents.length; i++) {
      if (i > 0 && Math.abs(allEvents[i].time - allEvents[i - 1].time) < 1e-8) {
        mergedEvents[mergedEvents.length - 1].delta += allEvents[i].delta;
      } else {
        mergedEvents.push({ time: allEvents[i].time, delta: allEvents[i].delta });
      }
    }

    // Running tally of extra casts (hasted - base)
    let runningTally = 0;
    for (let i = 0; i < mergedEvents.length - 1; i++) {
      runningTally += mergedEvents[i].delta;

      const startTime = mergedEvents[i].time;
      const endTime = mergedEvents[i + 1].time;
      const width = ((endTime - startTime) / castTimeBase) * cellWidth;
      const xStart = marginSide + (startTime / castTimeBase) * cellWidth;

      // Clamp tally to colorMap limits
      const colorKey = Math.min(96, Math.max(0, runningTally));
      const [r, g, b] = colorMap[colorKey];
      ctx.fillStyle = `rgb(${r},${g},${b})`;

      // Draw shaded segment for this time interval
      ctx.fillRect(xStart, y0, width, cellHeight);
    }

    // Draw grid lines for this row
    for (let col = 0; col < fightLengths.length; col++) {
      const x0 = marginSide + col * cellWidth;
      drawGridLines(
        x0,
        y0,
        cellWidth,
        cellHeight,
        document.getElementById("showVerticalGrid").checked,
      );
    }
  });

  // Highlight row and range 
  const highlightHaste = userHaste / 100;
  const hasteRow = (highlightHaste * 100);
  if (hasteRow >= 0 && minFightTime >= 0 && maxFightTime > minFightTime) {
    const xStart = marginSide + (minFightTime / castTimeBase) * cellWidth;
    const xEnd = marginSide + (maxFightTime / castTimeBase) * cellWidth;
    const y = marginTop + (hasteRow * 10) * cellHeight - 2;
    const width = xEnd - xStart;
    const height = cellHeight + 4;

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.strokeRect(xStart, y, width, height);

    // Highlight row breakdown
    function computeExtraTimeline(base, haste, maxTime) {
      const EPS = 1e-8;
      const events = [];
      for (let t = 0; t <= maxTime + base; t += base) events.push({ time: t, delta: -1 });
      let tHaste = 0;
      while (tHaste <= maxTime + base) {
        const ct = getCastTime(tHaste, haste, mqgActive, isCastMode, castTimeBase);
        events.push({ time: tHaste, delta: +1 });
        tHaste += ct;
      }
      events.sort((a, b) => a.time - b.time);

      const merged = [];
      for (let i = 0; i < events.length; i++) {
        if (i > 0 && Math.abs(events[i].time - events[i - 1].time) < EPS) {
          merged[merged.length - 1].delta += events[i].delta;
        } else {
          merged.push({ ...events[i] });
        }
      }

      const segments = [];
      let tally = 0;
      for (let i = 0; i < merged.length - 1; i++) {
        tally += merged[i].delta;
        const start = merged[i].time;
        const end = merged[i + 1].time;
        segments.push({ start, end, value: tally });
      }
      return segments;
    }
    const timeline = computeExtraTimeline(castTimeBase, highlightHaste, fightTime);

    const counts = {};
    let total = 0;
    timeline.forEach(({ start, end, value }) => {
      const clipStart = Math.max(start, minFightTime);
      const clipEnd = Math.min(end, maxFightTime);
      const duration = clipEnd - clipStart;
      if (duration > 0) {
        counts[value] = (counts[value] || 0) + duration;
        total += duration;
      }
    });

    const sorted = Object.entries(counts)
      .map(([val, dur]) => ({ value: parseInt(val), percent: (dur / total) * 100 }))
      .sort((a, b) => a.value - b.value);

    const label = sorted
      .map(({ value, percent }) => `${percent.toFixed(1)}% chance of ${value} extra ${inputs.mode}${value !== 1 ? "s" : ""}`)
      .join(", ");

    document.getElementById("extraBreakdownLabel").textContent = label;
    window.highlightExtraSwings = sorted;

    const weightedAvg = sorted.reduce((acc, entry) => acc + entry.value * (entry.percent / 100), 0);
    window.extraSwingsAverage = weightedAvg;

    const avgLabel = `On Average you can expect ${weightedAvg.toFixed(2)} extra ${inputs.mode}s over this fight length`;
    document.getElementById("avgSwingsLabel").textContent = avgLabel;

    //marginal sp haste equiv calculation section
    function computeCastTimeSegments(baseCastTime, haste, isHasted) {
      const EPS = 1e-8;
      const events = [];

      if (isHasted) {
        let t = 0;
        while (t <= maxFightTime + baseCastTime) {  // use maxFightTime here to clip 
          const ct = getCastTime(t, haste, mqgActive, isCastMode, castTimeBase);
          events.push({ time: t, delta: 1 });
          t += ct;
        }
      } else {
        for (let t = 0; t <= maxFightTime + baseCastTime; t += baseCastTime) {
          events.push({ time: t, delta: 1 });
        }
      }

      events.sort((a, b) => a.time - b.time);

      const merged = [];
      for (let i = 0; i < events.length; i++) {
        if (i > 0 && Math.abs(events[i].time - events[i - 1].time) < EPS) {
          merged[merged.length - 1].delta += events[i].delta;
        } else {
          merged.push({ ...events[i] });
        }
      }

      const segments = [];
      let tally = 0;
      for (let i = 0; i < merged.length - 1; i++) {
        tally += merged[i].delta;
        const start = merged[i].time;
        const end = merged[i + 1].time;
        segments.push({ start, end, value: tally });
      }
      return segments;
    }

    function weightedAverageCastCount(segments) {
      let totalTime = 0;
      let weighted = 0;

      segments.forEach(({ start, end, value }) => {
        // Clip to min/max fight time
        const clipStart = Math.max(start, minFightTime);
        const clipEnd = Math.min(end, maxFightTime);
        const duration = clipEnd - clipStart;
        if (duration > 0) {
          weighted += value * duration;
          totalTime += duration;
        }
      });

      return totalTime > 0 ? weighted / totalTime : 0;
    }

    const h = highlightHaste;
    const hMinus = Math.max(0, ((1 + h) / 1.01 - 1));
    const hPlus = ((1 + h) * 1.01 - 1);

    const avgCastsAtCurrentHaste = weightedAverageCastCount(computeCastTimeSegments(castTimeBase, h, true));
    const avgCastsAtHasteMinus1 = weightedAverageCastCount(computeCastTimeSegments(castTimeBase, hMinus, true));
    const avgCastsAtHastePlus1 = weightedAverageCastCount(computeCastTimeSegments(castTimeBase, hPlus, true));

    let spellPowerEquivalentFor1PercentHaste = 0;
    let spellPowerEquivalentForMinus1PercentHaste = 0;
    let totalspequiv = 0;
    let extraCastsPlus = 0;
    let avgSpellDamage = 0;
    let extraCastsMinus = 0;
    let marginalSummary = '';


    if (inputs.mode === "cast") {
      extraCastsPlus = avgCastsAtHastePlus1 - avgCastsAtCurrentHaste;
      extraCastsMinus = avgCastsAtCurrentHaste - avgCastsAtHasteMinus1;
      const spellPower = parseFloat(document.getElementById("spellPowerInput").value) || 0;
      const critChance = parseFloat(document.getElementById("critChanceInput").value) / 100 || 0;
      const hitChance = parseFloat(document.getElementById("hitChanceInput").value);
      const attackerLevel = parseFloat(document.getElementById("lvlInput").value);
      const targetLevel = parseFloat(document.getElementById("targetLvlInput").value);
      const targetResist = parseFloat(document.getElementById("targetResistInput").value) || 0;
      const levelDifference = targetLevel - attackerLevel;
      const baseMissPercent = Math.max(1, Math.min(90, 4 + levelDifference + Math.max(0, levelDifference - 2) * (10)));
      const hitPercent = 100 - Math.max(1, baseMissPercent - hitChance)
      const resistanceCap = Math.max(5 * attackerLevel, 100);
      const levelBasedResistance = 8 * Math.max(0, targetLevel - attackerLevel)
      const effectiveResistance = targetResist + levelBasedResistance;
      const resistanceRatio = Math.min(1, effectiveResistance / resistanceCap);
      const avgMit = resistanceRatio * 0.75 - 1 * 3.0 / 16.0 * Math.max(0, resistanceRatio - 2.0 / 3.0);
      const avgSpellDamage = (spell.baseDamage + (spellPower * spell.coef)) * (1 + critChance * .5) * (hitPercent / 100.0) * (1 - avgMit);
      const extraDamagePlus = extraCastsPlus * avgSpellDamage;
      const damagePerCastNormalizedPlus = extraDamagePlus / avgCastsAtCurrentHaste;
      spellPowerEquivalentFor1PercentHaste = damagePerCastNormalizedPlus / spell.coef;
      const extraDamageMinus = extraCastsMinus * avgSpellDamage;
      const damagePerCastNormalizedMinus = extraDamageMinus / avgCastsAtHasteMinus1;
      spellPowerEquivalentForMinus1PercentHaste = damagePerCastNormalizedMinus / spell.coef;
      totalspequiv = ((weightedAvg * avgSpellDamage) / avgCastsAtCurrentHaste) / spell.coef;


      marginalSummary =
        `<strong>Gaining 1% haste is worth it if it costs less than ${spellPowerEquivalentFor1PercentHaste.toFixed(0)} spell power </strong> <br>` +
        `math: (${extraCastsPlus.toFixed(2)} extra casts with 1 additional source of haste × ${avgSpellDamage.toFixed(0)} avg dmg) ÷ ${avgCastsAtHastePlus1.toFixed(2)} total casts with +1% haste ÷ spell coef (${spell.coef})<br><br>` +

        `<strong>Losing 1% haste is only worth it if it gains you at least ${spellPowerEquivalentForMinus1PercentHaste.toFixed(0)} spell power  </strong><br> ` +
        `math: (${extraCastsMinus.toFixed(2)} lost casts with -1% haste from additional source × ${avgSpellDamage.toFixed(0)} avg dmg) ÷ ${avgCastsAtHasteMinus1.toFixed(2)} total casts with -1% haste ÷ spell coef (${spell.coef})<br><br>` +

        `<strong>Total value of haste ≈ ${totalspequiv.toFixed(0)} spell power </strong> <br>` +
        `math: (${weightedAvg.toFixed(2)} avg Extra casts from all haste × ${avgSpellDamage.toFixed(0)} avg dmg) ÷ ${avgCastsAtCurrentHaste.toFixed(2)} total casts at current haste ÷ spell coef (${spell.coef})<br>`;
    }
    else {
      marginalSummary =
        'Marginal spell power equiv only available for spell Casts'
    }
    document.getElementById("marginalCastLabel").innerHTML = marginalSummary;
  }
  if (isDarkMode) {
    ctx.fillStyle = "#D4D4D4";
  } else {
    ctx.fillStyle = "black";
  }
  // Draw fight length X-axis labels 
  fightLengths.forEach((fl, i) => {
    const label = fl.toString();
    const textWidth = ctx.measureText(label).width;
    const tx = marginSide + ((i + 1) * cellWidth) - (textWidth / 2);
    const ty = marginTop - 5;
    ctx.fillText(label, tx, ty);
  });

  // Draw vertical line to represent Hasted cast time
  if (document.getElementById("showHasteLines").checked) {
    ctx.setLineDash([]);
    ctx.strokeStyle = "rgba(255, 0, 0, 0.3)";
    ctx.lineWidth = 1;
    let t = 0;
    while (t <= fightTime) {
      const ct = getCastTime(t, highlightHaste, mqgActive, isCastMode, castTimeBase);
      if (t > 0) {
        const x = marginSide + (t / castTimeBase) * cellWidth;
        ctx.beginPath();
        ctx.moveTo(x, marginTop);
        ctx.lineTo(x, marginTop + hasteRatings.length * cellHeight);
        ctx.stroke();
      }
      t += ct;
    }

    ctx.setLineDash([]);
  }

  // Draw color key 
  const keyBoxSize = 20;
  const keyStartY = marginTop + cellHeight * hasteRatings.length + 30;
  const keyStartX = marginSide;

  ctx.font = "14px Arial";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= 10; i++) {
    const x = keyStartX + i * (keyBoxSize + 90);
    const y = keyStartY;
    const [r, g, b] = colorMap[i];
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, y, keyBoxSize, keyBoxSize);
    if (isDarkMode) {
      ctx.fillStyle = "#D4D4D4";
    } else {
      ctx.fillStyle = "black";
    }
    ctx.fillText(`${i} extra ${inputs.mode}${i === 1 ? '' : 's'}`, x + keyBoxSize + 2, y + keyBoxSize / 2);
  }
}

//event listeners below for live updating
const widthSlider = document.getElementById("cellWidthSlider");
const heightSlider = document.getElementById("cellHeightSlider");
const widthLabel = document.getElementById("cellWidthValue");
const heightLabel = document.getElementById("cellHeightValue");

// redraw on resize
function updateAndRedraw() {
  widthLabel.textContent = widthSlider.value;
  heightLabel.textContent = heightSlider.value;
  drawGrid();
  updateSpellInfoDisplay();
}

const inputsToWatch = [
  "minFightTime",
  "maxFightTime",
  "castTimeBase",
  "cellWidthSlider",
  "cellHeightSlider",
  "showVerticalGrid",
  "showHasteLines",
  "latency",
  "mqgToggle",
  "jujuToggle",
  "quicknessToggle",
  "spellSelect",
  "spellPowerInput",
  "critChanceInput",
  "hitChanceInput",
  "lvlInput",
  "targetLvlInput",
  "targetResistInput",
  "maxHaste",
  "mqgOffset",
  "jujuOffset",
  "quicknessOffset",
  "chastiseToggle",
  "chastiseOffset",
];

inputsToWatch.forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener("input", updateAndRedraw);
});
// add haste inputs listeners
document.querySelectorAll('#gearHasteInputs input').forEach(input => {
  input.addEventListener('input', () => {
    getTotalHasteMultiplier();
    updateAndRedraw();
  });
});

//watch the Cast/Swing toggle
document.querySelectorAll('input[name="mode"]').forEach(el => {
  el.addEventListener("change", updateAndRedraw);
});
document.getElementById("spellSelect").addEventListener("change", updateSpellInfoDisplay);
document.querySelectorAll('input[name="mode"]').forEach(el => {
  el.addEventListener("change", updateSpellInfoDisplay);
});

window.addEventListener("DOMContentLoaded", () => {
  // Set initial slider label values
  widthLabel.textContent = widthSlider.value;
  heightLabel.textContent = heightSlider.value;
  drawGrid();
  updateSpellInfoDisplay();
});

//mouseover tooltips
const canvas = document.getElementById("gridCanvas");
const tooltip = document.getElementById("tooltip");
canvas.addEventListener("mousemove", function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ctx = canvas.getContext("2d");
  const castTimeBase = getAdjustedCastTimeBase();
  const hasteHighlight = getTotalHasteMultiplier().multiplier;
  const maxHasteRating = parseInt(document.getElementById("maxHaste").value, 10);
  const hasteRatings = Array.from({ length: maxHasteRating + 1 }, (_, i) => i / 100);
  //const hasteRatings = Array.from({ length: Math.max(hasteHighlight + 10, 41) }, (_, i) => i / 100);

  //const cellWidth = parseInt(document.getElementById("cellWidthSlider").value);
  const baseCastTimeForScaling = 3.0; // 3 sec = 100% cell width
  const minScale = 0.5;               // 1 sec cast → 50% of cell width
  const castTimeScale = Math.max(minScale, castTimeBase / baseCastTimeForScaling);
  const cellWidthRaw = parseInt(document.getElementById("cellWidthSlider").value, 10);
  const cellWidth = Math.round(cellWidthRaw * castTimeScale);

  const cellHeight = parseInt(document.getElementById("cellHeightSlider").value);
  const marginTop = 60;
  const marginSide = 40;

  const col = Math.floor((x - marginSide) / cellWidth);
  const row = ((y - marginTop) / cellHeight);

  if (col < 0 || row < 0 || row >= hasteRatings.length) {
    tooltip.style.display = "none";
    return;
  }

  const offsetX = x - marginSide;
  const fightLength = offsetX / cellWidth * castTimeBase;
  const rawHaste = row / 100;
  const mqgActive = document.getElementById("mqgToggle").checked;

  let effectiveHaste = rawHaste;

  const mqgOffset = parseFloat(document.getElementById("mqgOffset")?.value || "0");

  if (mqgActive) {
    if (fightLength >= mqgOffset && fightLength < mqgOffset + 20) {
      effectiveHaste += 0.33;
    }
  }

  if (document.getElementById("jujuToggle")?.checked) {
    const cycleTime = 60;
    const uptime = 20;
    const jujuOffset = parseFloat(document.getElementById("jujuOffset")?.value || "0");
    const adjusted = fightLength - jujuOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      effectiveHaste += 0.03;
    }
  }

  if (document.getElementById("chastiseToggle")?.checked) {
    const cycleTime = 40;
    const uptime = 8;
    const chastiseOffset = parseFloat(document.getElementById("chastiseOffset")?.value || "0");
    const adjusted = fightLength - chastiseOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      effectiveHaste += 0.2;
    }
  }
  if (document.getElementById("quicknessToggle")?.checked) {
    const cycleTime = 120;
    const uptime = 30;
    const quicknessOffset = parseFloat(document.getElementById("quicknessOffset")?.value || "0");
    const adjusted = fightLength - quicknessOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      effectiveHaste += 0.05;
    }
  }

  //Read pixel color and reverse-map to extra swings. probably not the best way but other methods were causing errors.
  function getExtraFromPixel(px, py) {
    const pixel = ctx.getImageData(px, py, 1, 1).data;
    const [r, g, b] = pixel;

    for (const [key, color] of Object.entries(colorMap)) {
      const [cr, cg, cb] = color;
      if (r === cr && g === cg && b === cb) {
        return parseInt(key);
      }
    }
    return 0;
  }

  let extraSwings = getExtraFromPixel(x, y);

  //fix for base cast line being black and showing 0, move x over a few pixels. doesnt always work
  if (extraSwings === 0) {
    extraSwings = getExtraFromPixel(x + 2, y);
  }
  if (extraSwings === 0) {
    extraSwings = getExtraFromPixel(x - 2, y);
  }

  tooltip.innerHTML = `Extra: ${extraSwings}<br>Haste: ${(effectiveHaste * 100).toFixed(1)}%<br>Fight: ${fightLength.toFixed(1)}s`;
  tooltip.style.left = `${e.clientX + 12}px`;
  tooltip.style.top = `${e.clientY + 12}px`;
  tooltip.style.display = "block";
});


canvas.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});
function updateModeNameInAll() {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const modeNameText = mode.charAt(0).toUpperCase() + mode.slice(1);
  // Select all spans with class "modeName"
  const modeNameSpans = document.querySelectorAll(".modeName");
  modeNameSpans.forEach(span => {
    span.textContent = modeNameText;
  });
}

// Run on load
updateModeNameInAll();

// mode listener
document.querySelectorAll('input[name="mode"]').forEach(el => {
  el.addEventListener("change", () => {
    updateModeNameInAll();
  });
});

//calculates cast time
function getCastTime(t, haste, mqgActive, isCastMode, castTimeBase) {
  let hasteMultiplier = 1 + (haste || 0);

  // MQG: Delayed pop offset
  const mqgOffset = parseFloat(document.getElementById("mqgOffset")?.value || "0");
  if (mqgActive && t >= mqgOffset && (t - mqgOffset) <= 20) {
    hasteMultiplier *= 1.33;
  }

  // Juju Flurry: Delayed cycle
  if (document.getElementById("jujuToggle")?.checked) {
    const cycleTime = 60;
    const uptime = 20;
    const jujuOffset = parseFloat(document.getElementById("jujuOffset")?.value || "0");
    const adjusted = t - jujuOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      hasteMultiplier *= 1.03;
    }
  }

  // Quickness: Delayed cycle
  if (document.getElementById("quicknessToggle")?.checked) {
    const cycleTime = 120;
    const uptime = 30;
    const quicknessOffset = parseFloat(document.getElementById("quicknessOffset")?.value || "0");
    const adjusted = t - quicknessOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      hasteMultiplier *= 1.05;
    }
  }

  // Chastise: Delayed cycle
  if (document.getElementById("chastiseToggle")?.checked) {
    const cycleTime = 40;
    const uptime = 8;
    const chastiseOffset = parseFloat(document.getElementById("chastiseOffset")?.value || "0");
    const adjusted = t - chastiseOffset;
    if (adjusted >= 0 && (adjusted % cycleTime) < uptime) {
      hasteMultiplier *= 1.2;
    }
  }
  const base = castTimeBase || 1.5;

  const selectedSpellKey = document.getElementById("spellSelect").value;
  const isArcaneMissiles = selectedSpellKey === "arcane_missiles";

  const ct = isCastMode && !isArcaneMissiles
    ? Math.max(1.5, base / hasteMultiplier)
    : base / hasteMultiplier;

  return ct;
}


function getAdjustedCastTimeBase() {
  const base = parseFloat(document.getElementById("castTimeBase").value);
  const latencyMs = parseFloat(document.getElementById("latency").value) || 0;
  return base + latencyMs / 1000;
}
function updateSpellInfoDisplay() {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const selected = document.getElementById("spellSelect").value;

  const spellInfoDiv = document.getElementById("spellInfo");
  const spellSelectContainer = document.getElementById("spellSelectContainer");
  const swingTimeContainer = document.getElementById("swingTimeContainer");
  const baseTimeInput = document.getElementById("castTimeBase");

  if (mode === "cast") {
    // Show spell selector, hide swing input
    spellSelectContainer.style.display = "block";
    swingTimeContainer.style.display = "none";

    if (selected !== "none" && spellData[selected]) {
      const spell = spellData[selected];
      baseTimeInput.value = spell.castTime; // Automatically set it

      //can expand here to include a better avg spelldamage that counts hit and resist. also change in marginal sp section
      const spellPower = parseFloat(document.getElementById("spellPowerInput").value) || 0;
      const critChance = parseFloat(document.getElementById("critChanceInput").value) / 100 || 0;
      const hitChance = parseFloat(document.getElementById("hitChanceInput").value);
      const attackerLevel = parseFloat(document.getElementById("lvlInput").value);
      const targetLevel = parseFloat(document.getElementById("targetLvlInput").value);
      const targetResist = parseFloat(document.getElementById("targetResistInput").value) || 0;
      const levelDifference = targetLevel - attackerLevel;
      const baseMissPercent = Math.max(1, Math.min(90, 4 + levelDifference + Math.max(0, levelDifference - 2) * (10)));
      const hitPercent = 100 - Math.max(1, baseMissPercent - hitChance)
      const resistanceCap = Math.max(5 * attackerLevel, 100);
      const levelBasedResistance = 8 * Math.max(0, targetLevel - attackerLevel)
      const effectiveResistance = targetResist + levelBasedResistance;
      const resistanceRatio = Math.min(1, effectiveResistance / resistanceCap);
      const avgMit = resistanceRatio * 0.75 - 1 * 3.0 / 16.0 * Math.max(0, resistanceRatio - 2.0 / 3.0);

      const avgSpellDamage = (spell.baseDamage + (spellPower * spell.coef)) * (1 + critChance * .5) * (hitPercent / 100.0) * (1 - avgMit);
      spellInfoDiv.innerHTML = `
        <strong>Spell Info:</strong><br>
        Name: ${spell.name}<br>
        Cast Time: ${spell.castTime.toFixed(2)}s<br>
        Spell Coefficient: ${(spell.coef * 100).toFixed(1)}%<br>
        Base Damage: ${spell.baseDamage}<br>
        Average Dmg per Cast ${avgSpellDamage.toFixed(2)}
      `;
    } else {
      spellInfoDiv.innerHTML = "";
    }

  } else {
    // Swing mode: hide spell selector, show manual swing time input
    spellSelectContainer.style.display = "none";
    swingTimeContainer.style.display = "block";
    spellInfoDiv.innerHTML = "";
  }
  drawGrid();
}


function getTotalHasteMultiplier() {
  const inputs = document.querySelectorAll('#gearHasteInputs input');
  const multipliers = [];

  inputs.forEach(input => {
    const val = parseFloat(input.value);
    if (val !== 0) {
      const multiplier = 1 + (val / 100);
      multipliers.push(multiplier);
    }
  });

  const totalMultiplier = multipliers.reduce((acc, curr) => acc * curr, 1);
  const statichaste = (totalMultiplier - 1) * 100;

  // Update the display inside this function:
  const hasteDisplay = document.getElementById("hasteDisplay");
  if (hasteDisplay) {
    hasteDisplay.textContent = statichaste.toFixed(2) + "%";
  }

  return {
    values: multipliers,
    multiplier: statichaste
  };
}

//darkmode listener

const darkToggle = document.getElementById('darkModeToggle');
const main = document.getElementById("main");
const allInputs = document.querySelectorAll('input, select, textarea');
const allLinks = document.querySelectorAll('a');

darkToggle.addEventListener('change', () => {
  if (darkToggle.checked) {
    // Remove light-mode class everywhere
    tooltip.classList.remove('light-mode');
    sidebar.classList.remove('light-mode');
    main.classList.remove('light-mode');
    document.body.classList.remove('light-mode');
    canvas.classList.remove('light-mode');
    allInputs.forEach(el => el.classList.remove('light-mode'));
    allLinks.forEach(el => el.classList.remove('light-mode'));
  } else {
    // Add light-mode class everywhere
    tooltip.classList.add('light-mode');
    sidebar.classList.add('light-mode');
    main.classList.add('light-mode');
    document.body.classList.add('light-mode');
    canvas.classList.add('light-mode');
    allInputs.forEach(el => el.classList.add('light-mode'));
    allLinks.forEach(el => el.classList.add('light-mode'));
  }
  drawGrid();
});















