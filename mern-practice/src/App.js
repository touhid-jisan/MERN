import { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
    console.log(courseGoals);
  };

  const [courseGoals, setCourseGoals] = useState([
    { id: "id1", text: "Finish The course" },
    { id: "id2", text: "Finish The course 2" },
    { id: "id3", text: "Finish The course 3" },
    { id: "id4", text: "Finish The course 4" },
  ]);

  return (
    <div className="App">
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
