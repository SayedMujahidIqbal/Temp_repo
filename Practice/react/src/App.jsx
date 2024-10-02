////////////// Component Helper Functions ///////////
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = 'Mujahid'
  const age = 20
    return (
      <div>
          <h1>Greetings</h1>
          <Hello name="Asad" age={26+3} />
          <Hello name={name} age={age} />
      </div>
    )
}

export default App
