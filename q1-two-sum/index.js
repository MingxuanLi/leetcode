/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMap = {};
    var i = 0;
    for(i = 0; i < nums.length; i++){
        var num = nums[i];
        var compliment = target - num;
        var complimentIndex = hashMap[compliment];
        if(typeof complimentIndex !== 'undefined'){
            return [complimentIndex, i];
        }
        hashMap[num] = i;
    }
    return [];
};