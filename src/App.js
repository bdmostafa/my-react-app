import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './App.css';

function App() {
  const stdInfo = [["Mostafa", "web development"], ["Shams", "Software Engineering"], ["Sadia", "HRM"]];
  const products = [
    { name: 'mobile', price: '$149.95' },
    { name: 'pc', price: '$220.95' },
    { name: 'laptop', price: '$350.95' }
  ];

  // const productsNames = products.map(product => product.name);
  // const productsPrices = products.map(product => product.price);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <MovieCounter></MovieCounter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li> {product.name} - {product.price}</li>)
          }
        </ul>

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {
          products.map(product => <Product product={product}></Product>)
        }


        <Student name={stdInfo[0][0]} course={stdInfo[0][1]}></Student>
        <Student name={stdInfo[1][0]} course={stdInfo[1][1]}></Student>
        <Student name={stdInfo[2][0]} course={stdInfo[2][1]}></Student>
      </header>
    </div>
  );
}

// State (React Hook)==============================
function Counter() {
  // const [first, second] = ['abc', 'def']; // destructure
  const [count, setCount] = useState(1); // 'count' is a value and 'setCount' is a function
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <br/>
      <br/>
    </div>
  )
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>Add Movie</button>
      <h2>Number of movies: {count}</h2>
      <CountGame movies={count}></CountGame>
      <CountGame movies={count + 1}></CountGame>
      <CountGame movies={count - 1}></CountGame>
      <CountGame movies={count + 10}></CountGame>
      <CountGame movies={count - 10}></CountGame>
    </div>
  )
}

function CountGame(props) {
return <h4>Movies I have enjoyed most: {props.movies}</h4>
}

// Components (functional) ============================
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    // return () => {
    // }
  }, [])
  return (
    <div>
      <h2>Users: {users.length}</h2>
      {/* {
        console.log(users)
      } */}
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

    </div>
  )
}

// Using props
function Product(props) {
  console.log(props)
  // Object destructuring
  const { name, price } = props.product;
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '5px'
  }

  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button type="submit">Buy Now</button>
    </div>
  )
}

function Student(props) {
  // console.log(props)
  const StudentStyle = {
    border: '1px solid wheat',
    margin: '5px',
    padding: '10px'
  }

  return (
    <div style={StudentStyle}>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  )
}


// Not JSX, using React.createElement
// const result = React.createElement('h1', {}, 'Hello React World!');

// Using JSX - (JavaScript Syntax Extension)
// Can be used variable expression in {...}, not statement
const ouput = (
  <div>
      {/* Attribute in react, not like a html attribute because it is JSX */}
      <h1 className="heading">Hello React World!</h1>
      <label htmlFor="name">Name</label>
      <p>This is p</p>
      <p>1 + 1</p>
      <p>{1 + 1}</p>
      <img src="" />
  </div>
  );
  // Rendering
  ReactDom.render(ouput, document.getElementById('root'));
  
  
  // Components - 2 types (functional and class based)
  // Rendering some code by function (functional component)
  // class based component (old way, most used way)
  const Output = () => {
      return (
          <div>
              <h1 className="heading">Hello React World!</h1>
              <label htmlFor="name">Name</label>
              <p>From functional component</p>
              <img src="" />
          </div>
      )
  }
  ReactDom.render(<Output />, document.getElementById('root'));
  


export default App;

// Topics covered (terminology)
// React internals
// Virtual DOM
// Diff algorithm
// Rerender
// Virtual machine
// React Fiber Engine (reconciliation)