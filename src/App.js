import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  return <header className="header">
    <h1>Fast React Pizza Co.</h1>
  </header >
}
const Menu = () => {

  const pizzas = pizzaData
  const pizzaCount = pizzas.length


  return <main className="menu">
    <h2>Our Menu</h2>
    {
      pizzaCount > 0 ?
        (<ul className="pizzas">
          {
            pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)
          }
        </ul>
        ) : (
          <p>We are still working on our Menu. Please try after sometime :)</p>
        )
    }

  </main>
}
const Pizza = (props) => {

  // if (props.pizzaObj.soldOut) {
  //   return null;
  // }

  return <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
    <img src={props.pizzaObj.photoName} alt="Spinaci Pizza" />
    <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      {props.pizzaObj.soldOut ?
        <span>SOLD OUT" </span> : <span> props.pizzaObj.price</span>}

    </div>

    {/*  */}
  </li >
}



const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)
  return <footer className="footer">
    {
      isOpen ?
        (

          <Order closeHour={closeHour} />



        )
        : (
          <p>

            We are happy to see you between {openHour}:00 and {closeHour}:00

          </p>
        )
    }
  </footer >
}
function Order(props) {
  return (
    <div className="order">
      <p>We're Open until {props.closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  )

}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
