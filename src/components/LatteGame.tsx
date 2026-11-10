import React, { useCallback, useEffect, useRef, useState } from "react";
import RosettaArt, { MAX_LEAVES } from "./RosettaArt";
import '../assets/styles/LatteGame.scss';

const BASE_SPEED = 1.6;
const BASE_TARGET_WIDTH = 20;
const MIN_TARGET_WIDTH = 10;
const BEST_STREAK_KEY = 'latte-best-streak';
const SPILL_DURATION_MS = 650;

function randomTargetCenter() {
  return 30 + Math.random() * 40;
}

function readBestStreak(): number {
  try {
    return Number(localStorage.getItem(BEST_STREAK_KEY)) || 0;
  } catch {
    return 0;
  }
}

function LatteGame() {
  const [needlePos, setNeedlePos] = useState(50);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState<number>(readBestStreak);
  const [targetCenter, setTargetCenter] = useState(randomTargetCenter);
  const [targetWidth, setTargetWidth] = useState(BASE_TARGET_WIDTH);
  const [message, setMessage] = useState('Click Pour when the needle crosses the cream zone.');
  const [lastResult, setLastResult] = useState<'hit' | 'miss' | null>(null);
  const [leavesShown, setLeavesShown] = useState(0);
  const [spilling, setSpilling] = useState(false);

  const speedRef = useRef(BASE_SPEED);
  speedRef.current = BASE_SPEED + Math.min(streak, MAX_LEAVES) * 0.18;

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(performance.now());
  const spillTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (t: number) => {
      const elapsed = (t - startRef.current) / 1000;
      setNeedlePos(50 + 48 * Math.sin(elapsed * speedRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (spillTimeoutRef.current) window.clearTimeout(spillTimeoutRef.current);
    };
  }, []);

  const handlePour = useCallback(() => {
    const distance = Math.abs(needlePos - targetCenter);
    const halfWidth = targetWidth / 2;

    if (distance <= halfWidth) {
      setStreak((s) => {
        const next = s + 1;
        setBest((prevBest) => {
          const nextBest = Math.max(prevBest, next);
          try { localStorage.setItem(BEST_STREAK_KEY, String(nextBest)); } catch { /* ignore */ }
          return nextBest;
        });
        setMessage(next >= MAX_LEAVES ? 'Perfect rosetta! 🌸☕️' : 'Nice pour! ☕️');
        return next;
      });
      setLastResult('hit');
      setTargetWidth((w) => Math.max(MIN_TARGET_WIDTH, w - 1));
      setLeavesShown((n) => Math.min(MAX_LEAVES, n + 1));
    } else {
      setStreak(0);
      setMessage('Missed the crema — try again');
      setLastResult('miss');
      setTargetWidth(BASE_TARGET_WIDTH);
      setSpilling(true);
      if (spillTimeoutRef.current) window.clearTimeout(spillTimeoutRef.current);
      spillTimeoutRef.current = window.setTimeout(() => {
        setLeavesShown(0);
        setSpilling(false);
      }, SPILL_DURATION_MS);
    }
    setTargetCenter(randomTargetCenter());
  }, [needlePos, targetCenter, targetWidth]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handlePour();
    }
  };

  return (
    <div className="latte-game" tabIndex={0} onKeyDown={handleKeyDown}>
      <p>I used to be a barista in Australia, let's see if you can pour a Rosetta better than me 👀</p>
      <h2>Pour the Perfect Rosetta</h2>
      <p className="latte-subtitle">{message}</p>
      <RosettaArt revealedLeaves={leavesShown} spilled={spilling} />
      <div className="latte-gauge" role="img" aria-label="Latte pouring timing gauge">
        <div
          className="latte-target"
          style={{ left: `${targetCenter - targetWidth / 2}%`, width: `${targetWidth}%` }}
        />
        <div
          className={`latte-needle${lastResult ? ` ${lastResult}` : ''}`}
          style={{ left: `${needlePos}%` }}
        />
      </div>
      <button className="pour-button" onClick={handlePour}>Pour ☕️</button>
      <div className="latte-stats">
        <span>Streak <strong>{streak}</strong></span>
        <span>Best <strong>{best}</strong></span>
      </div>
    </div>
  );
}

export default LatteGame;
