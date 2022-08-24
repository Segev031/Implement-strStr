function strStr(haystack, needle) {
    var lengthNeedle = needle.length;
    var lengthHaystack = haystack.length;
    for (var i = 0; i <= lengthHaystack - lengthNeedle; i++) {
        if (haystack.substring(i, i + lengthNeedle) == needle)
            return i;
    }
    return -1;
    /*
    or
    return haystack.indexOf(needle);
    */
}
