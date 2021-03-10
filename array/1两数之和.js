/*
给定一个整数数组，返回两个数字的索引，使它们相加到特定目标。
您可以假设每个输入只有一个解决方案，并且您可能不会两次使用相同的元素。
例：
给定nums = [2,7,11,15]，target = 9，
因为nums [ 0 ] + nums [ 1 ] = 2 + 7 = 9，
返回[ 0，1 ]*/


//第一次写 使用了两次for循环
let twoSum1 = function(nums,target){
    for(let i=0;i<nums.length-1;i++){
        let x = target - nums[i]
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]===x){
                return [i,j]
            }
        }
    }
}

//第二次改进，降低了复杂度
let twoSum2 = function(nums, target) {
    let obj = {}
    let len = nums.length;
    for(let i = 0;i < len; i++) {
        let containKey = target - nums[i];
        if(obj[containKey]!=undefined) {
            return [obj[containKey],i]
        }
        obj[nums[i]] = i;
    }
};
//如果对同一个数组需要进行两次遍历操作，
// 那么可以通过创建一个obj,让数组的key和value对调放入obj，然后直接取