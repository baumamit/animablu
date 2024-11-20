import React from 'react';
import './StoryBox.css';

/* Exported enum of the corresponding Tailwind CSS background-color classes */
export enum BackgroundColorType {
    Beige = 'bg-yellow-100',
    Black = 'bg-black',
    Blue = 'bg-blue-100',
    Lime = 'bg-lime-100',
    White = 'bg-white',
}

interface StoryBoxProps {
    paragraphs: string[];
    backgroundColor?: BackgroundColorType;
}

const StoryBox: React.FC<StoryBoxProps> = ({paragraphs, backgroundColor}) => {
    return (
        <div className = {'story-box container sm:columns-2 sm:gap-12 md:columns-3 lg:columns-4' + ' ' + (backgroundColor ? backgroundColor : '')}>
            {paragraphs.map((paragraph) => (
                <p>{paragraph}</p>
            ))}
        </div>
    )
}

export default StoryBox;