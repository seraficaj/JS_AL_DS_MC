function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}

/*
    Returns are stacked on top of each other. 
*/
