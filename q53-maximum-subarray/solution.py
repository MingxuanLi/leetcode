class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 0:
            return 0

        max_here = []
        max_here.append(nums[0])

        for i in range(1, len(nums)):
            if max_here[i - 1] < 0:
                val = nums[i]
            else:
                val = max_here[i - 1] + nums[i]
            max_here.append(val)

        return max(max_here)

