# The Call Stack

- In many langs, there is a built-in data structure that manages what happens when funtions are invoked.
    - what order shoulf the functions be ran in?
- the call stack is a stack data structure
- any time a func is invoked, it is placed on top of the call stack (push)
- when JavaScript sees the return keyword, or when func ends, the compiler will remove the function from the call stack (pop)

- Why does the Call Stack matter?
    - functions are usually pushed onto call stack and then popped off when finished
    - in recursion, functions are constantly pushed onto the call stack
    