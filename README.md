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

Website name : Monaly Weddings event-management
Live Site Link : https://event-manegment-7b9e1.web.app/




Five five bullet points:

1.Homepage (Home): The homepage is the main landing page of your website. It displays a title, a slider (possibly for showcasing images or content), and a grid of wedding cards. The wedding cards seem to be dynamic and fetched from an external JSON source, making the content of the homepage customizable and dynamic.

2.Private Routing (PrivateRoute): Your website includes a private route component that restricts access to certain pages or routes based on user authentication. If a user is not authenticated (logged in), they are redirected to the login page. This ensures security and controlled access to specific parts of the website.

3.Dynamic Data Loading: You are using the useLoaderData function to fetch data (likely wedding card information) from an external JSON source. This allows you to populate your website with real-time data, making it dynamic and up-to-date.

4.Multiple Pages: Your website consists of multiple pages, including the homepage, login page, registration page, a page displaying all courses (possibly related to weddings), an about page, a contact page, and a wedding details page. This provides users with diverse content and functionalities to explore.
5.Navigation Bar (Navber): Your website has a navigation bar component that allows users to easily navigate to different sections or pages of the website. This enhances the user experience by providing clear navigation.

6.User Authentication (Login and Register): Your website allows users to create accounts (Register) and log in (Login). This feature provides a secure way for users to access personalized content and services on your site.

7.Form Validation: Both the Login and Register forms include client-side validation for user inputs. For example, the password validation in the Register component checks for password length and character requirements. This ensures that users provide valid information when signing up or logging in.

8.Toast Notifications: Your website uses toast notifications from the react-toastify library to provide feedback to users. It displays success messages when users successfully log in or register and error messages when there are issues. Toast notifications enhance the user experience by providing real-time feedback.

9.Google Sign-In (Login): Users have the option to log in using their Google accounts. The "Google Login" button triggers the Google Sign-In popup, which authenticates users via Google's OAuth mechanism. This offers convenience for users who prefer using their Google credentials.

10.Navigation and Links: Both the Login and Register components include navigation links. Users can easily switch between the login and registration pages. Additionally, there is a "Forgot password?" link on the Login page, suggesting a potential password recovery feature.

These features collectively create a user-friendly and secure authentication system for your website, providing options for both traditional email/password login and Google authentication.





