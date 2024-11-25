export const debounce = <T extends (...args: unknown[]) => ReturnType<T>>(
    callback: T,
    timeout: number,
): ((...args: unknown[]) => void) => {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: unknown[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, timeout);
    };
};
