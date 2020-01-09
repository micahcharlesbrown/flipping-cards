This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Flipping Cards

A basic project created in React to demonstrate the creation of a customizable, repeatable component.

The Card component has a state with a single property, flipped. This is toggled with an onClick on the card.
Depending on the property flipped within the state of the Card component, the card changes display. The transition between the display states is animated with CSS. The display is controlled using the style property in JSX. This
is to demonstrate the different methods on styling

The Card component takes a single prop, value, which is then displayed on the card. So each card is unique in its
value and in its state.

We create multiple cards by mapping an array on strings, container 'values', inside of the App component.

[React Icons](https://www.npmjs.com/package/react-icons) are used, but could be replaced by a png.
