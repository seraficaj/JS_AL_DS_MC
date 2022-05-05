const stringSearch = (str, sub) => {
    let count = 0;
    // loop through str
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < sub.length; j++) {
            if (sub[j] !== str[i+j]) break;
            if (j === sub.length - 1) count++;
        }
    }
    return count;
};

console.log(stringSearch("lorie loled lollapalooza", "lol"));
