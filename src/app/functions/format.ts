export const format = (num: number, cnt: number) => {
    return num.toLocaleString('en-US', {minimumIntegerDigits: cnt});
}