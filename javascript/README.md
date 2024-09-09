- JavaScript provides eight different data types which are `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, and `object`.
- We tell JavaScript to create or declare variable with var keyword <code>var x;</code>
- When JavaScript variables are declared, they have an initial value of `undefined`. If you do a **mathematical operation** on an undefined variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.
- JavaScript variable names are **case sensetive**, should be written in **camel case.**
- One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:
    <pre>
    var camper = "James";
    var camper = "David";
    console.log(camper);</pre>

    In the code above, the `camper` variable is originally declared as "James", and is then overridden to be "David". The console then displays the string "David".

    A keyword called `let` was introduced in **ES6**, a major update to JavaScript, to solve this potential issue with the var keyword. If we try to declare two variables with `let`, it will arise an error. `unknown: Identifier 'camper' has already been declared.`
    <pre>
    let camper = "James";
    let camper = "David";</pre>
- In ES6, `const` is another keyword to declare variables.`const` has all the features that `let` has, with the added bonus that variables declared using const are read-only, i.e. cannot be reassigned.
    <pre>const FAV_PET = "Cats";
    FAV_PET = "Dogs";</pre>
    `TypeError: "FAV_PET" is read-only`

    **Note:** It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
- We can easily increment or decrement a variable with the ++ and -- operator.
 `i++;` is the equivalent of `i = i + 1;` and `i--;` is the equivalent of `i = i - 1;`
- Compound Assignment With Augmented Addition `+=`, subtraction `-=`, multiplication `*=` and division `/=` is possible.
- **Escaping Literal Quotes in Strings:**  When we need a literal quote: " or ' inside of our string in JavaScript, we can escape a quote by placing a backslash `(\)` in front of the quote.

    <pre>const sampleStr = "Alan said, \"Peter is learning JavaScript\".";</pre>
    **Will output:** 
    `Alan said, "Peter is learning JavaScript".`
- Quoting Strings with Single Quotes: if we want to save a conversation in a string and have the conversation in quotes. 
    <pre>const conversation = 'Finn exclaims to Jake, "Algebraic!"';</pre>
- Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals <code>(+=)</code> operator.</br>**Example:**
    <pre>
    const anAdjective = "awesome!";
    let ourStr = "freeCodeCamp is ";
    ourStr += anAdjective;</pre>
- In JavaScript, String values are immutable, which means that they cannot be altered once created.

    For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
    <pre>
    let myStr = "Bob";
    myStr[0] = "J";</pre>

    Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:
    <pre>
    let myStr = "Bob";
    myStr = "Job";</pre>
- In JS we can store different and different type of data in one array.
- <mark>**const array:** In JS the const keyword doesn't allow reassignment, which means that you cannot reassign the array with some other data(assign a string to it for example). But that doesn't mean that you can't mutate the elements of the array. You can remove, add new elements and change existing elements in the array. The array's contents remain mutable.</mark>
    <pre>
    const arr = [1, 2, 3];
    arr[0]=10; //// This is allowed, and arr becomes [10, 2, 3]
    arr.push(4); // This is allowed, and arr becomes [10, 2, 3, 4]
    arr = [5, 6, 7]; // This will cause an error</pre>

- The `.push()` method takes one or more arguments and appends them to the end of the array, in the order in which they appear. It returns the new length of the array.</br>

    **Examples:**
    <pre>
    const arr1 = [1, 2, 3];
    arr1.push(4, 5);
    const arr2 = ["Stimpson", "J", "cat"];
    arr2.push(["happy", "joy"]);</pre>

    arr1 now has the value [1, 2, 3, 4, 5] and </br>
    arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
- `.pop()` is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

    <pre>
    const threeArr = [1, 4, 6];
    const oneDown = threeArr.pop();
    console.log(oneDown);
    console.log(threeArr);</pre>
    The first console.log will display the value 6, and the second will display the value [1, 4].

- `.shift()` works just like .pop(), except it removes the first element instead of the last.</br>

    **Example:**
    <pre>
    const ourArray = ["Stimpson", "J", ["cat"]];
    const removedFromOurArray = ourArray.shift();</pre>
    Here, removedFromOurArray would have a value of the string "Stimpson", and ourArray would have ["J", ["cat"]].
- `.unshift()` works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.</br>

    **Example:**

    <pre>const ourArray = ["Stimpson", "J", "cat"];
    ourArray.shift();
    ourArray.unshift("Happy");</pre>
    After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

- Variables which are declared without the `let` or `const` keywords are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `let` or `const`.
- Strict equality (`===`) is the counterpart to the equality operator (`==`). `Equality operator` operator (`==`) attempts to convert both values being compared to a common type. But the `strict equality` (`===`) operator does not perform a type conversion. If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
- 