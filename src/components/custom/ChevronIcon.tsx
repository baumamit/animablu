import React from 'react';
import "./ChevronIcon.css"

interface ChevronIconProps {
    direction: boolean; /* flase: "left", true: "right" */
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-20 0 320 512" /* x0, y0, width, height */
        className={"chevron-icon chevron-"+(direction ? "right" : "left")}
        style={direction ? { transform: 'scaleX(-1)' } : undefined}
    >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
);

export default ChevronIcon;
