import React from "react";
import { createRoot } from "react-dom/client";


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Pepperoni, Mozzarella, Tomato Sauce",
    }),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Mozzarella, Tomato Sauce, Basil",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Ham, Pineapple, Mozzarella, Tomato Sauce",
    }),
    React.createElement(Pizza, {
      name: "Veggie",
      description: "Bell Peppers, Onions, Mushrooms, Olives, Tomato Sauce",
    }),
    React.createElement(Pizza, {
      name: "BBQ Chicken",
      description: "BBQ Chicken, Mozzarella, Tomato Sauce",
    }),
    React.createElement(Pizza, {
      name: "Buffalo Chicken",
      descriptionf: "Buffalo Chicken, Mozzarella, Tomato Sauce",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
