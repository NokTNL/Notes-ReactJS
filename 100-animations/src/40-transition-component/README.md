# Problem of CSS animations in React (or HTML in general)

- setting betweem display: none <--> display: whatever (and adding classes) for trigerring animations means the component is always there regardless

  - Not good for accesibility & performance issue

- This can be solved by adding an animation state and close the animation first, then unmount the component after a delay (see 40a-alternative-to...) but this can be cumbersome and the code is quite imperative

--> Use the React Transition Group package!

> npm install react-transition-group --save
