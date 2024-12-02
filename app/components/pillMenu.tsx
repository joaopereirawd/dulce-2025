'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '@styles/pillMenu.module.scss';

export function MenuPill() {
    const pillRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement>(null);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const menuLinks = itemsRef.current?.querySelectorAll<HTMLDivElement>(`.${styles.item}`);

        const setPill = () => {
            if (!menuLinks || !pillRef.current) return;

            menuLinks.forEach((item, index) => {
                if (index === selected) {
                    const dimensions = item.getBoundingClientRect();
                    const parentDimensions = itemsRef.current!.getBoundingClientRect();

                    pillRef.current.style.width = `${dimensions.width}px`;
                    pillRef.current.style.height = `${dimensions.height}px`;
                    pillRef.current.style.left = `${dimensions.left - parentDimensions.left}px`;

                    item.classList.add(styles.active);
                } else {
                    item.classList.remove(styles.active);
                }
            });
        };

        setPill();

        // Adiciona event listeners dinamicamente
        menuLinks?.forEach((item, index) => {
            const handleClick = () => setSelected(index);
            item.addEventListener('click', handleClick);

            // Limpa os event listeners na desmontagem
            return () => item.removeEventListener('click', handleClick);
        });
    }, [selected]);

    return (
        <div id={styles.menu}>
            <div className={styles.content}>
                <div id={styles.pill} ref={pillRef}></div>
                <div id={styles.items} ref={itemsRef}>
                    <div className={`${styles.item} ${styles.active}`}>Home</div>
                    <div className={styles.item}>Work</div>
                    <div className={styles.item}>About</div>
                </div>
            </div>
        </div>
    );
}
