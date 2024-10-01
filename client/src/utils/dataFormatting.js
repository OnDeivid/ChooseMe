export function voteFormatting(num) {
    const strNum = num.toString();

    if (strNum.length > 6) {
        return strNum.slice(0, 3) + ',' + strNum.slice(3, 6) + ',' + strNum.slice(6);
    }

    if (strNum.length > 3) {
        return strNum.slice(0, 3) + ',' + strNum.slice(3);
    }

    return strNum;
}
