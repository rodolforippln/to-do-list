import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ItemListTask from "./components/ItemListTask";

import { GlobalStyle } from "./styles/global";

type Item = {
  id: number;
  name: string;
  status: boolean;
}

function App() {

  const [listTask, setListTask] = useState<Item[]>([
    {id: 1, name: 'Estudar Ract', status: true},
    {id: 2, name: 'Estudar Matematica', status: false}
  ])

  const handleAddTask = (taskName: string) => {
    setListTask([...listTask, {
      id: listTask.length + 1,
      name: taskName,
      status: false
    }])
  }

    // Função feita para tarefinha de casa.
    const handleTaskChange = (id: number, status: boolean) => {
      let newList = [...listTask];
      for(let i in newList) {
        if(newList[i].id === id) {
          newList[i].status = status;
        }
      }
      setListTask(newList);
    }
  
  return (
    <>
      <Header />

      <AddTask onEnter={handleAddTask} />

      {listTask.map((item, index) => (
        <ItemListTask  
          key={index}
          item={item} 
          onChange={handleTaskChange}       
        />
      ))}        
      <GlobalStyle />
    </>
  );
}

export default App;
