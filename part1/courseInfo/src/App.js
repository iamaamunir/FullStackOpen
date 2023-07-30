const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}



const Content = ({ children }) => {
  return <div>{children}</div>
}

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  // const course = "Half Stack application development"
  // const part1 = "Fundamentals of React"
  // const exercises1 = 10
  // const part2 = "Using props to pass data"
  // const exercises2 = 7
  // const part3 = "State of a component"
  // const exercises3 = 14

   const course = "Half Stack application development"

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />

      <Content>
        <Part1 part1={parts[0].name} exercises1={parts[0].exercises} />
        <Part2 part2={parts[1].name} exercises2={parts[1].exercises} />
        <Part3 part3={parts[2].name} exercises3={parts[2].exercises} />
      </Content>
      <Total exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
