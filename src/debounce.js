export const debounce = (callback, timeout) => {
    let debounce;

    const handleDebounce = (callback, timeout) => {
        clearInterval(debounce);

        debounce = setTimeout(callback, timeout);
    };

    return () => handleDebounce(callback, timeout);
};
