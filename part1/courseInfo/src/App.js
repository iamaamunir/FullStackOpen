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
   const course = {
     name: "Half Stack application development",
     parts: [
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
     ],
   }

  return (
    <div>
      <Header course={course.name} />

      <Content>
        <Part1 part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
        <Part2 part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
        <Part3 part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      </Content>
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App
