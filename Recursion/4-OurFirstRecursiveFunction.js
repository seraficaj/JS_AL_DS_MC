/*
How recursive functiosn work:
    - keep invoking the same function with a different input
    - until it reaches the base case- where the recursion should stop
*/

const countDown = (num) => {
    if (num <= 0) {
        console.log('Done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5);