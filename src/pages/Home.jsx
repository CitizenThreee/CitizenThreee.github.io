import React, { useState, useEffect } from 'react';

export default function Home() {
    const imageOriginalWidth = 5677; // Replace with the original width of your image in pixels
    const imageOriginalHeight = 3195; // Replace with the original height of your image in pixels
    const [backgroundPosition, setBackgroundPosition] = useState('right');
    const [marginLeft, setMarginleft] = useState('10px');

    const onScreenSizeChange = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const imageAspectRatio = imageOriginalWidth / imageOriginalHeight;
        const imageDisplayWidth = screenHeight * imageAspectRatio;
        const overflowWidth = imageDisplayWidth - screenWidth;
        let imageCenterX;
        let offset;

        if(overflowWidth > 0){
            imageCenterX = screenWidth / 2 - overflowWidth / 2;
            offset = 0;
        } else {
            imageCenterX = screenWidth / 2;
            offset = overflowWidth * -0.4;
        }
        
        if (screenWidth < imageDisplayWidth / 2) {
            setBackgroundPosition(`${-imageDisplayWidth / 2 - 10}px`);
            setMarginleft('auto')
        } else {
            setBackgroundPosition('right');
            setMarginleft(`${imageCenterX + 200 + offset}px`)
        }
    };

    useEffect(() => {
        onScreenSizeChange();
        window.addEventListener('resize', onScreenSizeChange);

        return () => {
            window.removeEventListener('resize', onScreenSizeChange);
        };
    }, []);

    return (
        <div id="bg-main" style={{backgroundPosition: backgroundPosition}}>
            <nav style={{marginLeft: marginLeft}}>
                <h1>Aedan Beisly</h1>
                
                <p>Portfolio</p>
            </nav>
        </div>
    )
}