import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, handler: () => void): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                ref?.current &&
                !ref.current.contains(event.target as HTMLElement) &&
                event.offsetX <= (event.target as HTMLElement).clientWidth
            ) {
                return handler();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, handler]);
};
