def strStr(haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        length_needle = len(needle)
        length_haystack = len(haystack)
        for i in range(0, length_haystack - length_needle + 1):
            if haystack[i:i + length_needle] == needle:
                return i
        return -1
    # or
    # return haystack.index(needle)