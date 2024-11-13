import React from 'react';

interface ChevronIconProps {
    direction: boolean; /* 0: "left", 1: "right" */
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className={"chevron chevron-"+(direction ? "right" : "left")}
        style={{ transform: direction ? 'scaleX(-1)' : '' }}
    >
        <path d={
            (direction ?
            "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            : "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            )
        }/>
    </svg>
);

export default ChevronIcon;
