function strStr(haystack: string, needle: string): number {
    const lengthNeedle: number = needle.length;
    const lengthHaystack: number = haystack.length;
    for (let i = 0; i <= lengthHaystack - lengthNeedle; i++) {
        if (haystack.substring(i, i + lengthNeedle) == needle)
            return i;
    }
    return -1;
    /*
    or
    return haystack.indexOf(needle);
    */
};