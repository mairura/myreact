import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h2>My Todo List</h2>
      <Todo text="React Begginer course" />
      <Todo text="React Begginer course Day 2" />
      <Todo text="React Begginer course Last Day" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
