export const increment = () => {
    return { type: "INCREMENT" }
};

export const decrement = () => {
    return { type: "DECREMENT" }
};

export const getData = () => {
    return { type: "GET_DATA" }
};

export const setUser = (data) => {
    return { type: "SET_DATA", data }
};