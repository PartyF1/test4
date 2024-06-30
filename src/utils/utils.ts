export const base64Convertor = (str: string) => {
    return btoa(str);
}

export const convert = (email: string, code: string) => {
    return base64Convertor(email + ':' + code);
}

export const replaceMiddleCharacters = (inputString: string, n: number, m: number) => {
    const regex = new RegExp(`^(.{${n}}).*(.{${m}})$`);
    return inputString.replace(regex, (_, prefix, suffix) => {
        const middleStars = '*'.repeat(inputString.length - n - m);
        return prefix + middleStars + suffix;
    });
}