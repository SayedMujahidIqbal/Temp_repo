import { useState } from "react"

////////////// Component Helper Functions ///////////
// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// const Display = ({ counter }) => {
//   return(
//     <div>{counter}</div>
//   )
// }

const App = () => {
  // const name = 'Mujahid'
  // const age = 20
  // const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // const handleClick = () => {
  //   console.log("clicked")
  // }
  // const [counter, setCounter] = useState(0)
  // console.log("rendering with counter value", counter)
  // const increaseByOne = () => {
  //   console.log("increasing, value before", counter)
  //   setCounter(counter + 1)
  // }
  // const setToZero = () => {
  //   console.log("resetting to zero, value before", counter)
  //   setCounter(0)
  // }
  // const decreaseByOne = () => {
  //   console.log("descreasing, value before", counter)
  //   setCounter(counter - 1)
  // }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  // const handleLeftClick = () => {
    
  //   setClicks({...clicks, left: clicks.left + 1})
  // }

  // const handleRightClick = () => {
  //   setClicks({...clicks, right: clicks.right + 1})
  // }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {/* <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button> */}
      {right}
      <p>{allClicks.join(' ')}</p>
        {/* <Display counter={counter} />
        <Button 
          onClick={increaseByOne}
          text="plus" 
        />
        <Button 
          onClick={setToZero}
          text="zero" 
        />
        <Button 
          onClick={decreaseByOne}
          text="minus" 
        /> */}
        {/* <h1>Greetings</h1>
        <Hello name="Asad" age={26+3} />
        <Hello name={name} age={age} /> */}
    </div>
  )
}

export default App
