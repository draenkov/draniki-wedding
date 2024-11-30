import { useTransform, MotionValue } from 'motion/react';

export const useParallax = (
    value: MotionValue<number>,
    start: number,
    finish: number,
): MotionValue<number> => useTransform(value, [0, 1], [start, finish]);
