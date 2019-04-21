"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = (obj) => typeof obj === 'object';
exports.keyboard = {
    BACKSPACE: 8,
    DELETE: 46,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
};
exports.updateArrayByIndex = (array) => (index, value) => {
    return Object.assign([], array, { [index]: value });
};
