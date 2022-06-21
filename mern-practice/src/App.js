import "./App.css";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const courseGoals = [
    { id: "id1", text: "Finish The course" },
    { id: "id2", text: "Finish The course 2" },
    { id: "id3", text: "Finish The course 3" },
    { id: "id4", text: "Finish The course 4" },
  ];
  return (
    <div className="App">
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
