const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) =>{
  return(
    <Part part={props.part} exercises={props.exercises} />
  )
}

const Total = (props) => {
  return (
    <p>
      Total number of Exercise are {props.totalExecises}
    </p>
  )
}

const Part = (props) => { 
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
}
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
        <Header course={course} />
        <Content part={part1.name} exercises={part1.exercises} />
        <Content part={part2.name} exercises={part2.exercises} />
        <Content part={part3.name} exercises={part3.exercises} />
        <Total totalExecises={part1.exercises+part2.exercises+part3.exercises} />
    </>
  )
}

export default App
