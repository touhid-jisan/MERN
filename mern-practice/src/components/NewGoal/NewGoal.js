import "./NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: "1",
      text: "Hello world",
    };
    props.onAddGoal(newGoal);
  };
  return (
    <div>
      <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
