# Dev Stack

Dev Stack is a responsive React website that helps developers explore different technologies and build their own personalized technology stack.

## Live Website

Add your deployed website link here.

## GitHub Repository

Add your GitHub repository link here.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JSON
- JavaScript / ES6+

## Features

1. Explore different development technologies.
2. Add technologies to a personal stack.
4. Responsive design for mobile, tablet, and desktop.

React Questions
1. What is JSX, and why do we use it?

JSX lets us write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and write.

2. What is the difference between State and Props?

Props are used to pass data from a parent component to a child component.

State is data that belongs to a component and can change over time.

3. What is the useState hook and when do you use it?

useState is a React Hook that lets us store and update data in a component.

For example, in Dev Stack, we use state to keep track of the technologies the user selects.

4. What is the useEffect hook and why do we use it for fetching JSON?

useEffect is used when we need to run some code after a component loads or changes.

In this project, we use it to fetch the technology data from a JSON file when the app starts.

5. What is a unique key in React and why is it important when rendering lists?

A key is a unique value for each item in a list.

It helps React know which item has changed, been added, or removed.

6. What is conditional rendering? Give an example.

Conditional rendering means showing something based on a condition.

For example, if the user has not selected any technology, Dev Stack shows an empty message. When technologies are selected, it shows the selected items instead.

7. How do you communicate from a child component to a parent component in React?

The parent can pass a function to the child using props.

Then the child can call that function to send information back to the parent.

For example, when the user clicks "Add to Stack", the technology card calls the onAdd function.
