import React from "react";

export const MAX_LEAVES = 6;

const CX = 100;
const BASE_Y = 158;
const TOP_Y = 60;
const SPACING = (BASE_Y - TOP_Y) / MAX_LEAVES;
const MAX_LEN = 44;
const LEN_STEP = 5;

function leafPath(y: number, len: number, dir: 1 | -1) {
  const ctrlX = CX + dir * len;
  const ctrlY = y - len * 0.22;
  const endX = CX + dir * len * 0.55;
  const endY = y - len * 0.8;
  return `M ${CX} ${y} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`;
}

type Props = {
  revealedLeaves: number;
  spilled: boolean;
};

function RosettaArt({ revealedLeaves, spilled }: Props) {
  return (
    <svg
      className={`rosetta-art${spilled ? ' spilled' : ''}`}
      viewBox="0 0 240 200"
      width="190"
      height="160"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rosetta-crema" cx="46%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#7d4b28" />
          <stop offset="100%" stopColor="#b17a4a" />
        </radialGradient>
      </defs>

      <path
        className="rosetta-handle"
        d="M 187 76 C 228 76 228 124 187 124"
        fill="none"
        stroke="#e8e2d8"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M 190 83 C 219 83 219 117 190 117"
        fill="none"
        stroke="#00000022"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle cx={CX} cy="100" r="92" fill="none" stroke="#e8e2d8" strokeWidth="5" opacity="0.9" />
      <circle cx={CX} cy="100" r="86" fill="url(#rosetta-crema)" />
      <ellipse cx="78" cy="68" rx="30" ry="16" fill="#ffffff" opacity="0.08" />

      <path
        className="rosetta-stem"
        d={`M ${CX} ${BASE_Y} L ${CX} ${TOP_Y}`}
        stroke="#f3e6d2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{ opacity: revealedLeaves > 0 ? 1 : 0 }}
      />

      {Array.from({ length: MAX_LEAVES }).map((_, i) => {
        const y = BASE_Y - i * SPACING;
        const len = MAX_LEN - i * LEN_STEP;
        const visible = i < revealedLeaves;
        return (
          <g
            key={i}
            className="rosetta-leaf-pair"
            style={{ opacity: visible ? 1 : 0, transitionDelay: `${i * 70}ms` }}
          >
            <path d={leafPath(y, len, 1)} stroke="#f3e6d2" strokeWidth={3.2 - i * 0.25} strokeLinecap="round" fill="none" />
            <path d={leafPath(y, len, -1)} stroke="#f3e6d2" strokeWidth={3.2 - i * 0.25} strokeLinecap="round" fill="none" />
          </g>
        );
      })}

      <circle
        className="rosetta-tip"
        cx={CX}
        cy={TOP_Y - 6}
        r="4"
        fill="#f3e6d2"
        style={{ opacity: revealedLeaves >= MAX_LEAVES ? 1 : 0 }}
      />
    </svg>
  );
}

export default RosettaArt;
