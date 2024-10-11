import Props from "./Components/Props"
import "./App.css"

function App() {
  

  return (
    <>

      <h1>Home page</h1>
      <Props food ="rice" price = "Rs 250">
        <span>This is my first web page</span>
      </Props>
      <Props food = "juice" price = "Rs 250">
        <button>Click me</button>
      </Props>
      <Props food = "noodles" price = "Rs 250">
        <p>Hello world</p>
      </Props>
    </>
  )
}

export default App
