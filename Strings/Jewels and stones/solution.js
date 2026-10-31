// approach 1

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                ++count;
                break;
            }
        }
    }
    return count;
};

// approach 2

var numJewelsInStones = function(jewels, stones) {
    let jSet = new Set(jewels);
    let count = 0;
    for (let c of stones) {
        if (jSet.has(c)) count++;
    }
    return count;
};