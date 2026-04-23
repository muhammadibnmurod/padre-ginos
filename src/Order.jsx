import React from "react";
import { useState, useEffect } from "react";
import Pizza from "./Pizza.jsx";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("");
  const [pizzaSize, setPizzaSize] = useState("S");
  const [loading, setLoading] = useState(true);

  let price;
  const selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);

  async function fetchPizzaTypes() {
    const PizzaRes = await fetch("api/pizzas");
    const pizzaJson = await PizzaRes.json();
    setPizzaTypes(pizzaJson);
    if (pizzaJson.length > 0) {
      setPizzaType(pizzaJson[0].id);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, [pizzaSize]);
  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza-Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option value={pizza.id} key={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza-Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "S"}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "M"}
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === "B"}
                  name="pizza-size"
                  value="B"
                  id="pizza-b"
                  onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-b">Big</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Card</button>
          <div className="order-pizza">
            {selectedPizza ? (
              <>
                <Pizza
                  name={selectedPizza.name}
                  description={selectedPizza.description}
                  image={selectedPizza.image}
                />
                <p>$13.37</p>
              </>
            ) : (
              <p>{loading ? "Loading pizza..." : "No pizza selected."}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Order;
