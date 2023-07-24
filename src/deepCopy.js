"use strict";
export const deepCopy = (item) => {
    let copy;
    if (typeof item === "object") {
        copy = [];
        for (const index in item) {
            copy[index] = deepCopy(item[index])
        }
    } else copy = item;
    return copy;
}