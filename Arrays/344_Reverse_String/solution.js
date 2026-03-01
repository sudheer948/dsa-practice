var reverseString = function(s) {
    let n = s.length;
    let half = Math.floor(n / 2);

    for (let i = 0; i < half; i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }
};