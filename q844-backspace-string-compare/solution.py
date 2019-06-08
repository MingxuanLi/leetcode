class Solution(object):
    def backspaceCompare(self, S, T):
        ans_S = ''
        skip = 0
        for x in reversed(S):
            if x == '#':
                skip = skip + 1
            elif skip > 0:
                skip = skip - 1
            else:
                ans_S = ans_S + x

        ans_T = ''
        skip = 0
        for x in reversed(T):
            if x == '#':
                skip = skip + 1
            elif skip > 0:
                skip = skip - 1
            else:
                ans_T = ans_T + x

        return ans_S == ans_T


# Test below:
S = '###abcd'
T = '###abcd'

solution = Solution()
result = solution.backspaceCompare(S, T)
print(result)