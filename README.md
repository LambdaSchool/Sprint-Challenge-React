# Assessing your React Foo
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about ReactJS.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
    Answer:  When comparing React JS to other JS frameworks, React is more of a library.  The benefit of using React JS is for user-interfaces and high traffic applications.
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
    Answer: The component lifecyle is a process to verify certain stages are occuring as it should.  The three component lifecycle methods are mounting, updating and unmounting.  Mounting methods are called when an instance of a component is being created and inserted into the DOM.  Updating method is an event where update can be caused by changes to props or state.  Unmounting method is an event called to remove component from the DOM.
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
    Answer: Class/Stateful component is a component that works with ReactDOM while functional/presentational component does not.  For example, functional components does not take "this" property which is something tha ReactDOM works with.  If we were to stay with the functional components, then we would not have control of the components lifecycle and could conflict with other components.
4. Name the three arguments that are passed into the `React.createElement()` function?
    Answer:  The three arguments that are passed into the React.createElement() are as follows;
        1.  Type
        2.  Properties
        3.  Children

## Project
* You're going to be building an applicatoin *starwars* that consumes live data that we're retrieving across the world wide web!
1. **cd into starwars** run `npm install` to retrieve all the dependancies. 
2. Once you have installed all the _node_modules_ you should be able to run `npm start` to get your server up and running.
3. Once your server is up and running open Chrome and head over to `localhost:3000` to see your beautiful app. Ok, maybe it's not THAT pretty yet, but it's your goal to ensure this project becomes a thing of beuty.

### If you notice inside of `App.js` we're calling an open sourced **API** from within `componentDidMount()` and saving the results of that API on state. 
#### Open up your chrome `React Dev Tools` to peek at the data set on `state` of your `App` component. 
* You should see something like this:

![Star Wars state data](starwars_data.png)

* Your goal here is to build an app that displays the data provided in whatever way you see fit! Don't worry about the fields who's values are URL's. You'll figure out what to do with data like that later on in the course. 
* For now, just build a react app that displays this fun Star Wars data. Build a card for each object and style it to make it nice and fancy. 
