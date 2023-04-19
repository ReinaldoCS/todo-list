import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";

interface Task {
  id: string;
  status: "done" | "todo";
  content: string;
}

function App() {
  const [newTaskInputValue, setNewTaskInputValue] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  function handleNewTaskSubmit(event: FormEvent) {
    event.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        status: "todo",
        content: newTaskInputValue,
      },
    ]);
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInputValue(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <NewTask
        onSubmit={handleNewTaskSubmit}
        inputValue={newTaskInputValue}
        onChangeInput={handleNewTaskInputChange}
      />
      <h1>
        {taskList.map((item) => (
          <p key={item.id}>
            {item.content} - {item.status}
          </p>
        ))}
      </h1>
    </div>
  );
}

export default App;
