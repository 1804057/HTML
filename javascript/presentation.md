# JavaScript Operators
JavaScript Operators
--------------------

Javascript operators are used to perform different types of mathematical and logical computations.

JavaScript Arithmetic Operators
-------------------------------

**Arithmetic Operators** are used to perform arithmetic on numbers:


|Operator|Description                 |
|--------|----------------------------|
|+       |Addition                    |
|-       |Subtraction                 |
|*       |Multiplication              |
|**      |Exponentiation (ES2016)     |
|/       |Division                    |
|%       |Modulus (Division Remainder)|
|++      |Increment                   |
|--      |Decrement                   |

JavaScript Logical Operators
----------------------------


|Operator|Description|
|--------|-----------|
|&&      |logical and|
|\|\|      |logical or |
|!       |logical not|


JavaScript Type Operators
-------------------------


|Operator  |Description                                               |
|----------|----------------------------------------------------------|
|typeof    |Returns the type of a variable                            |
|instanceof|Returns true if an object is an instance of an object type|


JavaScript Bitwise Operators
----------------------------

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.


|Operator|Description         |Example|Same as     |Result|Decimal|
|--------|--------------------|-------|------------|------|-------|
|&       |AND                 |5 & 1  |0101 & 0001 |0001  | 1     |
|\|      |OR                  |5 \| 1 |0101 \| 0001|0101  | 5     |
|~       |NOT                 |~ 5    | ~0101      |1010  | 10    |
|^       |XOR                 |5 ^ 1  |0101 ^ 0001 |0100  | 4     |
|<<      |left shift          |5 << 1 |0101 << 1   |1010  | 10    |
|>>      |right shift         |5 >> 1 |0101 >> 1   |0010  |  2    |
|>>>     |unsigned right shift|5 >>> 1|0101 >>> 1  |0010  |  2    |


**Note :** The examples above uses 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.  
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.  
~00000000000000000000000000000101 will return 11111111111111111111111111111010

JavaScript String Comparison
----------------------------

All the comparison operators above can also be used on strings:

### Example
let text1 = "A";  
let text2 = "B";  
let result = text1 < text2;

Strings are compared alphabetically:

### Example

let text1 = "20";  
let text2 = "5";  
let result = text1 < text2;

JavaScript String Addition
--------------------------

The `+` can also be used to add (concatenate) strings:

### Example
<pre>
let text1 = "John";  
let text2 = "Doe";  
let text3 = text1 + " " + text2; // "John Doe"
</pre>
The `+=` assignment operator can also be used to add (concatenate) strings:

### Example
<pre>
let text1 = "What a very ";  
text1 += "nice day";
</pre>

The result of text1 will be: `What a very nice day`

Adding Strings and Numbers
--------------------------

Adding two numbers, will return the sum, but adding a number and a string will return a string:

### Example

let x = 5 + 5;  
let y = "5" + 5;  
let z = "Hello" + 5;  
let w = "5" * 5;

The result of _x_, _y_, _z_ & _w_ will be:

`10`   `55`   `Hello5` 

**Note :** If you add a number and a string, the result will be a string!


JavaScript Assignment Operators
-------------------------------

Assignment operators assign values to JavaScript variables.

The **Addition Assignment Operator** (`+=`) adds a value to a variable.


|Operator|Example|Same As   |
|--------|-------|----------|
|=       |x = y  |x = y     |
|+=      |x += y |x = x + y |
|-=      |x -= y |x = x - y |
|*=      |x *= y |x = x * y |
|/=      |x /= y |x = x / y |
|%=      |x %= y |x = x % y |
|**=     |x **= y|x = x ** y|


Shift Assignment Operators
--------------------------
|Operator|Example |Same As    |
|--------|--------|-----------|
|<<=     |x <<= y |x = x << y |
|>>=     |x >>= y |x = x >> y |
|>>>=    |x >>>= y|x = x >>> y|

- **The <<= Operator :** The **Left Shift Assignment Operator** left shifts a variable.
    <pre>
    let x = -100; 
    x <<= 1; // x=-200</pre>
- **The >>= Operator :** The **Right Shift Assignment Operator** right shifts a variable (signed).
    <pre>
    let x = -100; 
    x >>= 1; // x=-50</pre>
- **The >>>= Operator :** The **Unsigned Right Shift Assignment Operator** right shifts a variable (unsigned).
    <pre>
    let x = -100; 
    x >>>= 1; // x=2147483598</pre>

* * *

Bitwise Assignment Operators
----------------------------


|Operator|Example |Same As   |
|--------|--------|----------|
|&=      |x &= y  |x = x & y |
|^=      |x ^= y  |x = x ^ y |
|\|=     |x \|= y |x = x \| y|


* * *

Logical Assignment Operators
----------------------------


|Operator|Example   |Same As           |
|--------|----------|------------------|
|&&=     |x &&= y   |x = x && (x = y)  |
|\|\|=   |x \|\|= y |x = x \|\| (x = y)|
|??=     |x ??= y   |x = x ?? (x = y)  |

- **The &&= Operator :** The **Logical AND assignment operator** is used between two values.
    - If the first value is true, the second value is assigned.

- **The ||= Operator :** The **Logical OR assignment operator** is used between two values.
    - If the first value is false, the second value is assigned.

- **The ??= Operator :** The **Nullish coalescing assignment operator** is used between two values.
    - If the first value is undefined or null, the second value is assigned.

<b><a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_assign_nullish">Demo</a></b>

JavaScript Comparison Operators
-------------------------------


|Operator|Description                      |
|--------|---------------------------------|
|==      |equal to                         |
|===     |equal value and equal type       |
|!=      |not equal                        |
|!==     |not equal value or not equal type|
|>       |greater than                     |
|<       |less than                        |
|>=      |greater than or equal to         |
|<=      |less than or equal to            |
|?       |ternary operator                 |


## JavaScript has 8 Datatypes
* String
* Number
* Bigint
* Boolean
* Undefined
* Null
* Symbol
* Object

## The Object Datatype
The object data type can contain both built-in objects, and user defined objects:</br>
**Built-in object types can be :** objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

## JavaScript Arrays

An array is a special variable, which can hold more than one value:

const cars = \["Saab", "Volvo", "BMW"\];

Creating an Array
-----------------

* Using an array literal \[ \] is the easiest way to create a JavaScript Array.
* Another way is using the JavaScript Keyword `new`

These two different statements both create a new array containing 6 numbers:
```js
const points = new Array(40, 100, 1, 5, 25, 10);  
const points = \[40, 100, 1, 5, 25, 10\];
```

But the `new` keyword can produce some unexpected results:
```js
// Create an array with three elements:  
const points = new Array(40, 100, 1); //[40, 100, 1]

// Create an array with two elements:  
const points = new Array(40, 100); //[40,100]

// Create an array with one element ???  
const points = new Array(40);  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_new_error)

`const points = \[40\];` is not the same as: `const points = new Array(40);`

`const points = new Array(40);` Creates an array with 40 undefined elements.

So, For simplicity, readability and execution speed, use the array literal method.


Arrays are Objects
------------------

Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use **numbers** to access its "elements". In this example, `person[0]` returns John:

Objects use **names** to access its "members". In this example, `person.firstName` returns John:

How to Recognize an Array
-------------------------

A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator `typeof` returns "`object`":

```js
const fruits = \["Banana", "Orange", "Apple"\];  
let type = typeof fruits;
```

The typeof operator returns object because a JavaScript array is an object.

* **Solution 1:** `Array.isArray()` method
* **Solution 2:**`instanceof` operator returns true if an object is created by a given constructor:

```js
const fruits = \["Banana", "Orange", "Apple"\];
(fruits instanceof Array);
```


Array Elements 
--------------

JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

**Array Elements can be object, function or another array.**

myArray\[0\] = Date.now;  
myArray\[1\] = myFunction;  
myArray\[2\] = myCars;


Array Properties and Methods
----------------------------
cars.length   // Returns the number of elements  
cars.sort()   // Sorts the array

* * *

Accessing Array Element
---------------------------------

First element: 

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
let fruit = fruits[0];
```

Last element:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
let fruit = fruits[fruits.length - 1];
```

Adding Array Elements
---------------------

* Using `push()` method:
```js
const fruits = ["Banana", "Orange", "Apple"];  
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
```
* Using the `length` property:
```js
const fruits = ["Banana", "Orange", "Apple"];  
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
```
<mark>**WARNING !**</mark>  Adding elements with high indexes can create undefined "holes" in an array:

**Example**
```js
const fruits = ["Banana", "Orange", "Apple"];  
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
```
**output** 
`Banana,
Orange,
Apple,
undefined,
undefined,
undefined,
Lemon`

# JavaScript Array Methods


Basic Array Methods
-------------------

* **JavaScript Array length :** The `length` property returns the length (size) of an array:

* **JavaScript Array toString() :** The JavaScript method `toString()` converts an array to a string of (comma separated) array values.
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    ```
    Result: `Banana,Orange,Apple,Mango`  

* **JavaScript Array at() :** [ES2022](https://www.w3schools.com/js/js_2022.asp) intoduced the array method `at()`:

    Get the third element of fruits using at():
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    let fruit = fruits.at(2); //Apple
    let anotherFruit = fruits(-1) //Mango
    ```
    The `at()` method returns the same as `[]`.

    <mark>**Note :**</mark> Many languages allows `negative bracket indexing` like \[-1\] to access elements from the end of an object/ array/ string.

    This is not possible in JavaScript, because \[ \] is used for accessing both arrays and objects. obj\[-1\] refers to the value of key -1, not to the last property of the object.

    **The `at()` method was introduced in ES2022 to solve this problem.**

JavaScript Array join()
-----------------------

The `join()` method also joins all array elements into a string.

It behaves just like `toString()`, but in addition we can specify the separator:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
document.getElementById("demo").innerHTML = fruits.join(" \* ");
```
Result: `Banana \* Orange \* Apple \* Mango`

Popping and Pushing
-------------------
Popping items **out** of an array, or pushing items **into** an array.

* **JavaScript Array pop() :** The `pop()` method returns the last element and removes it from the array:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    let lastFruit = fruits.pop(); //Mango
    ```
    The `pop()` method returns the value that was "popped out":


* **JavaScript Array push() :** The `push()` method adds a new element to an array (at the end):

    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    let len = fruits.push("Kiwi"); \\5
    ```
    The `push()` method returns the new array length:

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_push_length)


Shifting Elements
-----------------

Shifting is equivalent to popping, but working on the first element instead of the last.

* **JavaScript Array shift() :** The `shift()` method returns the first array element, removes it and "shifts" all other elements to a lower index.
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    let fruit = fruits.shift();
    The `shift()` method returns the value that was "shifted out":
    ```

* **JavaScript Array unshift() :** The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    fruits.unshift("Lemon");
    ```
    The `unshift()` method returns the new array length:

    [Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_unshift_return)



Merging Arrays (Concatenating)
------------------------------

In programming languages, concatenation means joining strings end-to-end.

Concatenation "snow" and "ball" gives "snowball".

Concatenating arrays means joining arrays end-to-end.

- **JavaScript Array concat() :** The `concat()` method creates a new array by merging (concatenating) existing arrays:

    ```js
    const myGirls = ["Cecilie", "Lone"];  
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys); \\["Cecilie", "Lone", "Emil", "Tobias", "Linus"];
    ```

    **Note:** The `concat()` method does not change the existing arrays. It always returns a new array.

- The `concat()` method can take any number of array arguments.

    ```js
    const arr1 = ["Cecilie", "Lone"];  
    const arr2 = ["Emil", "Tobias", "Linus"];  
    const arr3 = ["Robin", "Morgan"];  
    const myChildren = arr1.concat(arr2, arr3);
    ```

- The `concat()` method can also take single value as arguments:
    ```js
    const arr1 = \["Emil", "Tobias", "Linus"\];  
    const myChildren = arr1.concat("Peter"); 
    ```

Array copyWithin()
------------------

The `copyWithin()` method copies array elements to another position in an array:


- Copy to index 2, all elements from index 0:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    fruits.copyWithin(2, 0); \\["Banana", "Orange", "Banana", "Mango"]
    ```
- Copy to index 2, the elements from index 0 to 2:
    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];  
    fruits.copyWithin(2, 0, 2);
    ```
    **Result :** `Banana,Orange,Banana,Orange,Kiwi,Papaya`

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_copywithin2)

**Note**
- The `copyWithin()` method overwrites the existing values.

- The `copyWithin()` method does not add items to the array.

- The `copyWithin()` method does not change the length of the array.


Flattening an Array
-------------------

Flattening an array is the process of reducing the dimensionality of an array. Flattening is useful when we want to convert a multi-dimensional array into a one-dimensional array.

* **JavaScript Array flat() :** The `flat()` method creates a new array with sub-array elements concatenated to a specified depth.
    ```js
    const myArr = [[1,2],[3,4],[5,6]];  
    const newArr = myArr.flat();
    ```
    Result: `1,2,3,4,5,6`

    [Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_flat)

* **JavaScript Array flatMap() :** The `flatMap()` method first maps all elements of an array and then creates a new array by flattening the array.

    ```js
    const myArr = [1, 2, 3, 4, 5, 6];  
    const newArr = myArr.flatMap(x => [x, x * 10]);
    ```
    **Result:** `1,10,2,20,3,30,4,40,5,50,6,60`

    [Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_flatmap)


Splicing and Slicing Arrays
---------------------------

* **JavaScript Array splice() :** The `splice()` method adds new items to an array.

    ```js
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    fruits.splice(2, 0, "Lemon", "Kiwi");
    ```
    Results: `"Banana", "Orange", "Lemon", "Kiwi","Apple", "Mango"`
    - The first parameter (2) defines the position **where** new elements should be **added** (spliced in).

    - The second parameter (0) defines **how many** elements should be **removed**.

    - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be **added**.

    - The `splice()` method returns an array with the deleted items.

        ```js
        const fruits = ["Banana", "Orange", "Apple", "Mango"];  
        fruits.splice(2, 2, "Lemon", "Kiwi");
        ```
        Results: `"Banana", "Orange", "Lemon", "Kiwi"`
    
    - Using splice() to Remove Elements

        ```js
        const fruits = ["Banana", "Orange", "Apple", "Mango"];  
        fruits.splice(2, 1);
        ```
        Result: `"Banana", "Orange", "Mango"`

        Here, the first parameter (2) defines the position where new elements should be **added** (spliced in).

        The second parameter (1) defines **how many** elements should be **removed** from that position.

        The rest of the parameters are omitted. No new elements will be added.

    [Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_splice_return)

* **JavaScript Array toSpliced() :** [ES2023](https://www.w3schools.com/js/js_2023.asp) added the Array toSpliced() method as a safe way to splice an array without altering the original array.

    The difference between the new **toSpliced()** method and the old **splice()** method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
    ```js
    const months = ["Jan", "Feb", "Mar", "Apr"];  
    const spliced = months.toSpliced(0, 1);
    ```
    Result: `spliced = ["Feb", "Mar", "Apr"]`

* **JavaScript Array slice() :** The `slice()`* method slices out a piece of an array.
    ```js
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  
    const citrus = fruits.slice(1);
    ```
    Result: Slice out a part of an array starting from array element 1. `"Orange", "Lemon", "Apple", "Mango"`


    -   The `slice()` method creates a new array.

    -   The `slice()` method does not remove any elements from the source array.

    -   The `slice()` method can take two arguments like `slice(1, 3)`. The method then selects elements from the start argument, and up to (but not including) the end argument.
        ```js
        const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  
        const citrus = fruits.slice(1, 3);
        ```
        Results: `"Orange", "Lemon"`

    - If the end argument is omitted, like in the first examples, the `slice()` method slices out the rest of the array.

    [Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_slice2)


Automatic toString()
--------------------

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

These two examples will produce the same result:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
document.getElementById("demo").innerHTML = fruits.toString();
```
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
document.getElementById("demo").innerHTML = fruits;
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_automatic)

<mark>**Note**</mark> All JavaScript objects have a toString() method.

# JavaScript Array Search

## JavaScript Array indexOf() 
The `indexOf()` method searches an array for an element value and returns its position.

Search an array for the item "Apple":
```js
const fruits = \["Apple", "Orange", "Apple", "Mango"\];  
let position = fruits.indexOf("Apple") + 1;
```
- **Syntax :** _array_.indexOf(_item_, _start_)
-   item: start 
-   Required. The item to search for.: Optional. Where to start the search. 
-   Negative values will start at the given position counting from the end, and search to the end.
- `Array.indexOf()` returns -1 if the item is not found.

-   If the item is present more than once, it returns the position of the first occurrence.


## JavaScript Array lastIndexOf()
`Array.lastIndexOf()` is the same as `Array.indexOf()`, but returns the position of the last occurrence of the specified element.


## JavaScript Array includes()
 `Array.includes()` allows us to check if an element is present in an array (including NaN, unlike indexOf).
```js
const fruits = \["Banana", "Orange", "Apple", "Mango"\];
fruits.includes("Mango"); // is true
```

## JavaScript Array find()

The `find()` method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

```js
const numbers = \[4, 9, 16, 25, 29\];  
let first = numbers.find(myFunction); //25

function myFunction(value, index, array) {  
  return value > 18;  
}
```

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_find)

Note that the function takes 3 arguments:

*   The item value
*   The item index
*   The array itself

## JavaScript Array findIndex()

The `findIndex()` method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

```js
const numbers = \[4, 9, 16, 25, 29\];  
let first = numbers.findIndex(myFunction); //3

function myFunction(value, index, array) {  
  return value > 18;  
}
```
## JavaScript Array findLast() Method
findLast() method will start from the end of an array and return the value of the first element that satisfies a condition.

```js
const temp = \[27, 28, 30, 40, 42, 35, 30\];  
let high = temp.findLast(x => x > 40);
```

## JavaScript Array findLastIndex() Method
The findLastIndex() method finds the index of the last element that satisfies a condition.
```js
const temp = \[27, 28, 30, 40, 42, 35, 30\];  
let pos = temp.findLastIndex(x => x > 40);
```
# JavaScript Array Sort
## Sorting an Array
The `sort()` method sorts an array alphabetically:

```js
const fruits = \["Banana", "Orange", "Apple", "Mango"\];  
fruits.sort();
```

Result: `Apple,Banana,Mango,Orange`

## Reversing an Array
The `reverse()` method reverses the elements in an array:

```js
const fruits = \["Banana", "Orange", "Apple", "Mango"\];  
fruits.reverse();
```
Result: `Mango,Apple,Orange,Banana`

By combining `sort()` and `reverse()`, you can sort an array in descending order:

## JavaScript Array toSorted() Method

[ES2023](https://www.w3schools.com/js/js_2023.asp) added the `toSorted()` method as a safe way to sort an array without altering the original array.

The difference between `toSorted()` and `sort()` is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
```js
const months = \["Jan", "Feb", "Mar", "Apr"\];  
const sorted = months.toSorted();
```
## JavaScript Array toReversed() Method

[ES2023](https://www.w3schools.com/js/js_2023.asp) added the `toReversed()` method as a safe way to reverse an array without altering the original array.

The difference between `toReversed()` and `reverse()` is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

```js
const months = \["Jan", "Feb", "Mar", "Apr"\];  
const reversed = months.toReversed();
```
## Numeric Sort

By default, the `sort()` function sorts values as **strings**.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the `sort()` method will produce incorrect result when sorting numbers.

You can fix this by providing a **compare function**:
```js
const points = \[40, 100, 1, 5, 25, 10\];  
points.sort(function(a, b){return a - b});
```

Use the same trick to sort an array descending:
```js
const points = \[40, 100, 1, 5, 25, 10\];  
points.sort(function(a, b){return b - a});
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort2)

## The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

`function(a, b){return a - b}`

When the `sort()` function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, `a` is sorted before `b`.

If the result is positive, `b` is sorted before `a`.

If the result is 0, no changes are done with the sort order of the two values.

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_alpha)

## Fin minimum or maximum value

### Using Math.min() on an Array

We can use `Math.min.apply` to find the lowest number in an array:

```js
function myArrayMin(arr) {  
  return Math.min.apply(null, arr);  
}
```
### Using Math.max() on an Array

We can use `Math.max.apply` to find the highest number in an array:
```js
function myArrayMax(arr) {  
  return Math.max.apply(null, arr);  
}
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_math_max)

`Math.min.apply(null, [1, 2, 3])` is equivalent to `Math.min(1, 2, 3)`.

`Math.max.apply(null, [1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`.



Sorting Object Arrays
---------------------

JavaScript arrays often contain objects:
```js
const cars = [  
  {type:"Volvo", year:2016},  
  {type:"Saab", year:2001},  
  {type:"BMW", year:2010}  
];
```
Even if objects have properties of different data types, the `sort()` method can be used to sort the array.

**The solution is to write a compare function to compare the property values:**

Comparing string properties is a little more complex:
```js
cars.sort(function(a, b){  
  let x = a.type.toLowerCase();  
  let y = b.type.toLowerCase();  
  if (x < y) {return -1;}  
  if (x > y) {return 1;}  
  return 0;  
});
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_object2)


## Stable Array sort()
When sorting elements on a value, the elements must keep their relative position to other elements with the same value.

const myArr = \[  
  {name:"X00",price:100 },  
  {name:"X01",price:100 },  
  {name:"X02",price:100 },  
  {name:"X03",price:100 },  
  {name:"X04",price:110 },  
  {name:"X05",price:110 },  
  {name:"X06",price:110 },  
  {name:"X07",price:110 }  
\];

In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:

X01 100  
X03 100  
X00 100  
X03 100  
X05 110  
X04 110  
X06 110  
X07 110  
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_stable_sort)

# JavaScript Array Iteration

## Array Iteration Methods
- Array forEach
- Array map()
- Array flatMap()
- Array filter()
- Array reduce()
- Array reduceRight()
- Array some()
- Array from()
- Array keys()
- Array entries()
- Array with()
- Array Spread (...)

Array iteration methods operate on every array item:

## JavaScript Array forEach()
The `forEach()` method calls a function (a callback function) once for each array element.
<pre>
const numbers = [45, 4, 9, 16, 25];  
let txt = "";  
numbers.forEach(myFunction);

function myFunction(value, index, array) {  
  txt += value + "&lt;br&gt;";  
}
</pre>
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_foreach)

Note that the function takes 3 arguments:

*   The item value
*   The item index
*   The array itself

The example above uses only the value parameter. The example can be rewritten to:

<pre>
const numbers = [45, 4, 9, 16, 25];  
let txt = "";  
numbers.forEach(myFunction);

function myFunction(value) {  
  txt += value + "&lt;br&gt;";  
}
</pre>

## JavaScript Array map()
The `map()` method creates a new array by performing a function on each array element.

The `map()` method does not execute the function for array elements without values.

The `map()` method does not change the original array.

This example multiplies each array value by 2:

```js
const numbers1 = [45, 4, 9, 16, 25];  
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {  
  return value \* 2;  
}
```

When a callback function uses only the value parameter, the index and array parameters can be omitted:

```js
const numbers1 = [45, 4, 9, 16, 25];  
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {  
  return value \* 2;  
}
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_map_2)

## JavaScript Array flatMap()
The `flatMap()` method first maps all elements of an array and then creates a new array by flattening the array.

```js
const myArr = [1, 2, 3, 4, 5, 6];  
const newArr = myArr.flatMap( x => [x, x * 10]);
```
Result: `1,10,2,20,3,30,4,40,5,50,6,60`

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_flatmap)


## JavaScript Array filter()
The `filter()` method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18:

```js
const numbers = \[45, 4, 9, 16, 25\];  
const over10 = numbers.filter(x=> x>10);
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {  
  return value > 18;  
}
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_filter)


## JavaScript Array reduce()

The `reduce()` method runs a function on each array element to produce (reduce it to) a single value.

The `reduce()` method works from left-to-right in the array. See also `reduceRight()`.

The `reduce()` method does not reduce the original array.

This example finds the sum of all numbers in an array:

```js
const numbers = [45, 4, 9, 16, 25];  
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {  
  return total + value;  
}
```
[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_reduce)

Note that the function takes 4 arguments:

*   The total (the initial value / previously returned value)
*   The item value
*   The item index
*   The array itself

The `reduce()` method can accept an initial value:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {  
  return total + value;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_reduce_initial)

* * *

JavaScript Array reduceRight()
------------------------------

The `reduceRight()` method runs a function on each array element to produce (reduce it to) a single value.

The `reduceRight()` works from right-to-left in the array. See also `reduce()`.

The `reduceRight()` method does not reduce the original array.

This example finds the sum of all numbers in an array:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {  
  return total + value;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_reduce_right)

Note that the function takes 4 arguments:

*   The total (the initial value / previously returned value)
*   The item value
*   The item index
*   The array itself

The example above does not use the index and array parameters. It can be rewritten to:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {  
  return total + value;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_reduce_right_2)

* * *

JavaScript Array every()
------------------------

The `every()` method checks if all array values pass a test.

This example checks if all array values are larger than 18:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {  
  return value > 18;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_every)

Note that the function takes 3 arguments:

*   The item value
*   The item index
*   The array itself

When a callback function uses the first parameter only (value), the other parameters can be omitted:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let allOver18 = numbers.every(myFunction);

function myFunction(value) {  
  return value > 18;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_every_2)

* * *

JavaScript Array some()
-----------------------

The `some()` method checks if some array values pass a test.

This example checks if some array values are larger than 18:

### Example

const numbers = \[45, 4, 9, 16, 25\];  
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {  
  return value > 18;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_some)

Note that the function takes 3 arguments:

*   The item value
*   The item index
*   The array itself

* * *

JavaScript Array.from()
-----------------------

The `Array.from()` method returns an Array object from any object with a length property or any iterable object.

Browser Support
---------------

`from()` is an [ES6 feature](https://www.w3schools.com/js/js_es6.asp) (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:


|         |        |          |         |        |
|---------|--------|----------|---------|--------|
|Chrome 51|Edge 15 |Firefox 54|Safari 10|Opera 38|
|May 2016 |Apr 2017|Jun 2017  |Sep 2016 |Jun 2016|


`from()` is not supported in Internet Explorer.

* * *

JavaScript Array keys()
-----------------------

The `Array.keys()` method returns an Array Iterator object with the keys of an array.

### Example

Create an Array Iterator object, containing the keys of the array:

const fruits = \["Banana", "Orange", "Apple", "Mango"\];  
const keys = fruits.keys();

for (let x of keys) {  
  text += x + "<br>";  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_keys)

Browser Support
---------------

`keys()` is an [ES6 feature](https://www.w3schools.com/js/js_es6.asp) (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:


|         |        |          |         |        |
|---------|--------|----------|---------|--------|
|Chrome 51|Edge 15 |Firefox 54|Safari 10|Opera 38|
|May 2016 |Apr 2017|Jun 2017  |Sep 2016 |Jun 2016|


`keys()` is not supported in Internet Explorer.

* * *

JavaScript Array entries()
--------------------------

### Example

Create an Array Iterator, and then iterate over the key/value pairs:

const fruits = \["Banana", "Orange", "Apple", "Mango"\];  
const f = fruits.entries();

for (let x of f) {  
  document.getElementById("demo").innerHTML += x;  
}

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_entries)

The `entries()` method returns an Array Iterator object with key/value pairs:

\[0, "Banana"\]  
\[1, "Orange"\]  
\[2, "Apple"\]  
\[3, "Mango"\]

The `entries()` method does not change the original array.

Browser Support
---------------

`entries()` is an [ES6 feature](https://www.w3schools.com/js/js_es6.asp) (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:


|         |        |          |         |        |
|---------|--------|----------|---------|--------|
|Chrome 51|Edge 15 |Firefox 54|Safari 10|Opera 38|
|May 2016 |Apr 2017|Jun 2017  |Sep 2016 |Jun 2016|


`entries()` is not supported in Internet Explorer.

* * *

JavaScript Array with() Method
------------------------------

[ES2023](https://www.w3schools.com/js/js_2023.asp) added the Array with() method as a safe way to update elements in an array without altering the original array.

### Example

const months = \["Januar", "Februar", "Mar", "April"\];  
const myMonths = months.with(2, "March");

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_with)

* * *

JavaScript Array Spread (...)
-----------------------------

The ... operator expands an iterable (like an array) into more elements:

### Example

const q1 = \["Jan", "Feb", "Mar"\];  
const q2 = \["Apr", "May", "Jun"\];  
const q3 = \["Jul", "Aug", "Sep"\];  
const q4 = \["Oct", "Nov", "May"\];

const year = \[...q1, ...q2, ...q3, ...q4\];

[Demo »](https://www.w3schools.com/js/tryit.asp?filename=tryjs_oper_spread_year)

Browser Support
---------------

`...` is an [ES6 feature](https://www.w3schools.com/js/js_es6.asp) (JavaScript 2015).

ES6 is fully supported in all modern browsers since June 2017:


|         |        |          |         |        |
|---------|--------|----------|---------|--------|
|Chrome 51|Edge 15 |Firefox 54|Safari 10|Opera 38|
|May 2016 |Apr 2017|Jun 2017  |Sep 2016 |Jun 2016|


`...` is not supported in Internet Explorer.

* * *

Complete Array Reference
------------------------

For a complete Array reference, go to our:

[Complete JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp).

The reference contains descriptions and examples of all Array properties and methods.

[★ +1](https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com "Your W3Schools Profile")

W3schools Pathfinder

Track your progress - it's free!