export const setToLS = ({ key, value }: { key: string; value: string }) => {
    return localStorage.setItem(key, value);
};

export const getFromLS = (key: string) => {
    return localStorage.getItem(key);
};
