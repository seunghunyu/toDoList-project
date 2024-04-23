import './App.css'
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import {useState, useRef} from "react"

const mockData = [
  {
    id : 0,
    idDone :  false,
    content : "React 공부하기",
    date : new Date().getTime()
  },
  {
    id : 1,
    idDone :  false,
    content : "빨래하기",
    date : new Date().getTime()
  },
  {
    id : 2,
    idDone :  false,
    content : "노래 연습하기",
    date : new Date().getTime()
  }
];

function App() {
  const [todos, setTodos]=useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) =>{
    const newTodo = {
      id : idRef.current++,
      idDone: false,
      content: content,
      date : new Date().getTime()
    }
    // todos.push(newTodo);  X 
    setTodos([newTodo, ...todos]);
  }
  
  return (
    <div className = "App">
      <Header/>
      <Editor onClick={onCreate}/>
      <List/>
    </div>
  )
}

export default App;
