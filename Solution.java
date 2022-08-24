class Solution {
    public int strStr(String haystack, String needle) {
        int lengthNeedle = needle.length();
        int lengthHaystack = haystack.length();
        for (int i = 0; i <= lengthHaystack - lengthNeedle; i++) {
            if (haystack.substring(i, i + lengthNeedle).equals(needle))
                return i;
        }
        return -1;
        
        /*
        or
        return haystack.indexOf(needle);
        */
    }
}