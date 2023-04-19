import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";
import { Task } from "./Components/Task";
import { TaskList } from "./Components/TaskList";
import { TaskProgress } from "./Components/TaskProgress";

interface Task {
  id: string;
  status: "done" | "todo";
  content: string;
}

function App() {
  const [newTaskInputValue, setNewTaskInputValue] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const [taskDone, setTaskDone] = useState<number>(0);

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

  function handleOnDeleteTask(id: string) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function handleOnCheckTask(id: string) {
    const newTaskList = taskList;

    const taskIndex = newTaskList.findIndex((task) => task.id === id);

    newTaskList[taskIndex].status =
      newTaskList[taskIndex].status === "todo" ? "done" : "todo";

    const taskDone = taskList.filter((task) => task.status === "done");

    setTaskDone(taskDone.length);
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <Header />
      <NewTask
        onSubmit={handleNewTaskSubmit}
        inputValue={newTaskInputValue}
        onChangeInput={handleNewTaskInputChange}
      />
      <TaskList>
        <TaskProgress taskTotal={taskList.length} taskDone={taskDone} />
        {taskList.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            container={task.content}
            onDeleteTask={handleOnDeleteTask}
            onChange={handleOnCheckTask}
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
