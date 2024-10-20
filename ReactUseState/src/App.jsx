import "./App.css"
function App() {
  
  let count = 0;

  return (
    <>
      <span className="title">my counter</span>
      <p className="subtitle">the count is {count}</p>
      <button className="button">-</button>
      <button className="button">+</button>
    </>
  )
}

export default App
