'use client';

import React, { useEffect, useRef, useState } from 'react';

export function MenuPill() {
    const pillRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const menuLinks = itemsRef.current?.querySelectorAll<HTMLDivElement>('.item');

        const setPill = () => {
            if (!menuLinks || !pillRef.current) return;

            menuLinks.forEach((item, index) => {
                if (index === selected) {
                    const dimensions = item.getBoundingClientRect();
                    const parentDimensions = itemsRef.current!.getBoundingClientRect();

                    pillRef.current.style.width = `${dimensions.width}px`;
                    pillRef.current.style.height = `${dimensions.height}px`;
                    pillRef.current.style.left = `${dimensions.left - parentDimensions.left}px`;

                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        setPill();

        // Add event listeners dynamically
        menuLinks?.forEach((item, index) => {
            const handleClick = () => setSelected(index);
            item.addEventListener('click', handleClick);

            // Cleanup on unmount
            return () => item.removeEventListener('click', handleClick);
        });
    }, [selected]);

    return (
        <div id="menu">
            <div className="content">
                <div id="pill" ref={pillRef}></div>
                <div id="items" ref={itemsRef}>
                    <div className="item active">Home</div>
                    <div className="item">Work</div>
                    <div className="item">About</div>
                    <div className="item">Contact</div>
                </div>
            </div>
        </div>
    );
}
