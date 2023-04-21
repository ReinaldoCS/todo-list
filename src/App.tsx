import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./Components/Header";
import { NewTask } from "./Components/NewTask";
import { Task } from "./Components/Task";
import { TaskList } from "./Components/TaskList";
import { TaskProgress } from "./Components/TaskProgress";
import { EmptyList } from "./EmptyList";

interface Task {
  id: string;
  isComplete: boolean;
  content: string;
}

function App() {
  const [newTaskInputValue, setNewTaskInputValue] = useState("");
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const storageListTask = localStorage.getItem("@todo-list:tasks");

    if (storageListTask) {
      return JSON.parse(storageListTask);
    }

    return [];
  });

  const [taskDone, setTaskDone] = useState<number>(0);

  function handleNewTaskSubmit(event: FormEvent) {
    event.preventDefault();

    const listUpdated: Task[] = [
      ...taskList,
      {
        id: uuidv4(),
        isComplete: false,
        content: newTaskInputValue,
      },
    ];

    localStorage.setItem("@todo-list:tasks", JSON.stringify(listUpdated));
    setTaskList(listUpdated);

    setNewTaskInputValue("");
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInputValue(event.target.value);
  }

  function handleOnDeleteTask(id: string) {
    const listUpdated = taskList.filter((task) => task.id !== id);

    localStorage.setItem("@todo-list:tasks", JSON.stringify(listUpdated));
    setTaskList(listUpdated);
  }

  function handleOnCheckTask(id: string) {
    const listUpdated = taskList;

    const taskIndex = listUpdated.findIndex((task) => task.id === id);

    listUpdated[taskIndex].isComplete =
      listUpdated[taskIndex].isComplete === true ? false : true;

    const taskDone = taskList.filter((task) => task.isComplete === true);

    setTaskDone(taskDone.length);

    localStorage.setItem("@todo-list:tasks", JSON.stringify(listUpdated));
    setTaskList(listUpdated);
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

        {taskList.length >= 1 ? (
          taskList.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              isComplete={task.isComplete}
              container={task.content}
              onDeleteTask={handleOnDeleteTask}
              onChange={handleOnCheckTask}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </TaskList>
    </div>
  );
}

export default App;
