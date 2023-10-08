<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: `C`: undefined <br>
Explanation: In JavaScript, when you declare a variable without assigning it a value, it is automatically initialized with the value undefined. In this case, greeting is declared as an empty object, but it is not assigned any value, so its value is undefined. 
</br></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C: "12"

Explanation: In JavaScript, when you use the + operator with one or both operands as strings, it performs string concatenation.<br> In this case, 1 is a number, and "2" is a string.<br> JavaScript performs type coercion and converts the number 1 to a string, so "1" and "2" are concatenated, resulting in the string "12".<br> Therefore, the function call sum(1, "2") returns the string "12".</br></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer:`A`: ['🍕', '🍫', '🥑', '🍔']

Explanation: In this code, you first create an array `food` containing four emoji elements. <br>Then, you create an object `info` with a property `favoriteFood` that initially points to the first element of the `food` array, which is "🍕".<br> However, when you later assign a new value "🍝" to `info.favoriteFood`, it does not modify the original `food` array. Therefore, the `food` array remains unchanged, and the `console.log(food)` statement will output `['🍕', '🍫', '🥑', '🍔']`.</br></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: `B`: Hi there, undefined

Explanation: In the `sayHi` function, there is a parameter `name` that is used to create the greeting string. However, when you call `sayHi()` without providing an argument, the `name` parameter is undefined because no value is passed. Therefore, `${name}` in the template string evaluates to `undefined`, and the function returns "Hi there, undefined." This is why the `console.log(sayHi())` statement will output "Hi there, undefined."</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: `B`: 2 <br>
Explanation: Here's how the code works: num = 0 is the first element, which is falsy (0 is falsy in JavaScript), so count remains 0.<br>
num = 1 is the second element, which is truthy, so count becomes 1. <br>
num = 2 is the third element, which is also truthy, so count becomes 2.<br>
num = 3 is the fourth element, which is truthy, so count becomes 3.<br>
Therefore, the final value of count is 3, and the console.log(count) statement will output "2."
</br></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

</p>
</details>
