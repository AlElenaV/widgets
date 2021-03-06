import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Header from "./components/Header"

const items = [
  {
    title: "What is healthy desserts?",
    content: "Healthy desserts are desserts without white sugar, gluten flour and transfats"
  },
  {
    title: "Why should I start eating healthy desserts?",
    content: "Eating healthy desserts helps people to keep fit, become healthier and eat intuitively without fear of binge eating"
  },
  {
    title: "What healthy desserts can I taste?",
    content: "You can taste traditional sugarfree and glutenfree desserts, baked or raw vegan healthy desserts."
  },
  {
    title: "Where can I order healthy desserts in NSW Sydney?",
    content: "You can order healthy desserts on instagram page https:www.instagram.com/fitness_baker_desserts/ or with telegram 0403665710. "
  },
  { title: "Do you deliver my order?", content: "We deliver orders above 5 kgs in NSW, Sydney. Orders bellow 5kgs can be picked up from 2e Porter street, Ryde, 2112, NSW." },
  {
    title: "Can I have a discount?",
    content: "Minimum order is 1kg, all clients with orders over 2kgs can ask for discount for every next kilo: 10% discount(from 3rd kg) and 15% discount (from 4th and etc kilos). Our permanent clients can ask for discount on their next orders."
  }
]

const options = [
  { label: "Make an order", value: "order" },
  { label: "Write a review", value: "review" },
  { label: "Go to Instagram page", value: "page" }
]

export default function App() {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select an option" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}
