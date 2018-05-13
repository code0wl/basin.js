# Basin.js 💧

A small utility function for chaining non-array data types together. Works the same as map does in it's compositional state.
Main focus is the capture assignment in a linear workflow.

### Simple Example

```Javascript
const calculateTotal = initial =>
    Basin(initial)
        .tap(s => s * .21) // add tax
        .tap(s => s + 12) // shipping costs
        .drop(total => initial + total)

const result = calculateTotal(100) //? 133
```

### API

Api consists of chaining the Basin function with your input. The last input of your basin can be a drop. Which means the last drop from the tap. Drop does not really have to be used.

### Note
Performance isn't an issue unless you are benchmarking in the 10,000+ operations.
