import React from 'react';
import "./ChevronIcon.css"

export enum Direction {
    Left = "left",
    Right = "right",
}

interface ChevronIconProps {
    direction: Direction;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-20 0 320 512" /* x0, y0, width, height */
        className={"chevron-icon chevron-"+direction}
        style={direction == Direction.Right ? { transform: 'scaleX(-1)' } : undefined} /* left is the default direction of this <svg> */
    >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
);

export default ChevronIcon;
