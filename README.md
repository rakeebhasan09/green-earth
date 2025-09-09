### Difference between var, let, and const?

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
            If used before assigned a value, it will give undefined.
        </td>
        <td>If used before assigned a value, it goes into the Temproal Dead Zone(TDZ)</td>
        <td>If used before assigned a value, it goes into the Temproal Dead Zone(TDZ)</td>
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
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
                </code>
            </pre>
        </td>
        <td>
            <pre>
                <code>
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 5;
                </code>
            </pre>
        </td>
    </tr>

</table>

```javascript
const parentElement = document.getElementById("parent-element");
const childElement = document.createComment("element-name");
parentElement.appendChild(childElement);
```
