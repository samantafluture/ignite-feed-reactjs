# ignite-feed-reactjs

Simple React.js application that mimics a social media site similar do Reddit, with user profiles and shared posts focused on textual content. 

## When to create a separated component in React?

1. When something is being repeated too often
   - With same visuals, behaviors and functionalities
2. When you can remove something from a big component without breaking it
   - Than, this big component can have a clearer focus
   - Even though this new component is not reusable

## Props

- When I want to use different visual characteristics and behaviors on a component, I should pass props 
- It's a form of communication
- Yes, you can pass functions!


## State

- Variables that I want the component to monitor
- Initiate the state with a data type that is the same of your variable


## Declarative programming

- Declare the conditions for your final result and not the step by step recipe (such as imperative)

## Key

Why the 'key' needs to be unique in React?

- There are 3 moments when a component is **re-render** in React
  * *re-render means that the interface of the component is recalculated*
  1. When a **State** of a component changes
  2. When a **Propriety** of a component changes
  3. When a **Parent** component re-renders

But, wait... Isn't that slow?
Yep! And that's why we add a 'key'. 
React will compare all the keys to understand which key is new. The new will one will be rendered, and the others that already existed won't have to be re-rendered.

Don't use the index of the array or any random number as the 'key'. Otherwise, this won't work!

## Immutability

You don't change the value of a variable on its memory.

So what do you do instead for example, when you list change?
You create a new value (new memory space).

But why? Performance! It's easier and faster for React to **compare what it changes** in the interface.
