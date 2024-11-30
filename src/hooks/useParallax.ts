import { useTransform, MotionValue, useScroll, useSpring } from 'motion/react';
import { RefObject } from 'react';

export const useParallax = (
    scrollRef: RefObject<HTMLElement>,
    motionEnd: number,
    positions: [startPosition: number, endPosition: number],
): MotionValue<number> => {
    const [startPosition, endPosition] = positions;

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start'],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 30,
        mass: 0.5,
    });

    return useTransform(smoothProgress, [0, motionEnd], [startPosition, endPosition]);
};
