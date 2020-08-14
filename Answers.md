1. What problem does the context API help solve?

Prop drilling with local states, it avoids the need for redux setup when working with a smaller component that's still large enough that conventional prop drilling is cumbersome.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are where we setup functions that we need to run across multiple components, these functions typically tie in to our reducers.
Reducers hold and update our state for us. Their immutability is key in tracking changes and increasing predictability.
The store contains our actions and reducers and serve as a central hub for redux's information. This store is what allows us to use redux to pass state and actions across our project.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state covers every aspect of the component as a global state. Our components can affect this state and many, if not all, need access to this data in some way.

Component state is our local state. It can be thought of as form data or similar things. This state usually is used to update some aspect of our application state/global state. Component state is usually very specific to a component or its children and shouldn't be available globally, typically.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It's a middleware, meaning it can position itself between redux and our functions. This can allow us to do things like run async functions with redux and use functions in our action creators rather than just passing pur objects in.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux seems fine, albeit convoluted and time consuming to setup. Given time I'm sure I'll be more comfortable with it and increase my speed of use.
