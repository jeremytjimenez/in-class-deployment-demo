import './App.css';

function App() {
  console.log(process.env)

  return (
    <div className="App">
     Simple React App
     <div>current env: {process.env.NODE_ENV}</div>
     <div>
      Current API{" "}
      {process.env.NODE_ENV === "development" ? 
      process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION}
     </div>
    </div>
  );
}

export default App;
