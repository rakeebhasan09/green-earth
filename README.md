### Difference between var, let, and const

<table>
    <tr>
        <th>var</th>
        <th>let</th>
        <th>const</th>
    </tr>
    <tr>
        <td>Can be re-declared.</td>
        <td>Cannot be re-declared.</td>
        <td>Cannot be re-declared.</td>
    </tr>
    <tr>
        <td>Re-assignment allow.</td>
        <td>Re-assignment allow.</td>
        <td>Re-assignment not allow.</td>
    </tr>
    <tr>
        <td>
            If used before assigned a value, </br>
            it will give undefined.
        </td>
        <td>If used before assigned a value, </br>
        it goes into the Temproal Dead Zone(TDZ)</td>
        <td>If used before assigned a value, </br>
        it goes into the Temproal Dead Zone(TDZ)</td>
    </tr>
    <tr>
        <td>
            <pre>
                <code>
console.log(myName); // undefined
var myName = "rakeeb hasan";
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
console.log(a); // ❌ ReferenceError:
Cannot access 'a' before initialization
let a = 5;
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
console.log(a); // ❌ ReferenceError:
Cannot access 'a' before initialization
let a = 5;
                </code>
            </pre>
        </td>
    </tr>
</table>

---

### Difference between map(), forEach(), and filter()

<table>
    <tr>
        <th>map()</th>
        <th>forEach()</th>
        <th>filter()</th>
    </tr>
    <tr>
        <td>Loops through each element in an array.</td>
        <td>Transforms each element and returns a new array of the same length.</td>
        <td>Selects elements that match a condition.</td>
    </tr>
    <tr>
        <td>Always returns undefined.</td>
        <td>A new array with transformed values.</td>
        <td>A new array with only elements that passed the condition.</td>
    </tr>
</table>

---

### Arrow functions in ES6

An arrow function is a shorthand version of a traditional function, where the function keyword is replaced with `=>`. Exmaple in the below.

```javascript
// Traditional function
const add = function (a, b) {
	return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;
```

---

### Destructuring assignment work in ES6

Destructuring of array and object data is a simple process, which is a new addition in ES6. Exmaple in the below.

```javascript
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first); // 10
console.log(second); // 20
```

---

### Template literals in ES6 and different from string concatenation.

It has made the process of creating multi-line strings or dynamic strings much easier. An example is given below.

```javascript
const firstName = "Rakeeb";
const lastName = "Hasan";
// In string concatenation
const strConcName = "Hello, My name is" + firstName + lastName + "!";
const str = "My \nname \nis \nrakeeb \nhasan";
// In template literals
const temLitName = ` Hello, My name is ${firstName} ${lastName}`;
const str = `My 
name 
is 
rakeeb 
hasan`;
```
