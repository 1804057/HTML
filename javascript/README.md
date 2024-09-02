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