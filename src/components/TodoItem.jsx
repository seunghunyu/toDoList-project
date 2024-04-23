import "./TodoItem.css"
const TodoItem = ({id, isDone, content, date, onUpdate}) => {
    const onChangeCheckBox =() =>{
        onUpdate(id);
    }
    return <div className = "TodoItem">
                <input checked={isDone} onChange = {onChangeCheckBox} type = "checkbox"/>
                <div className = "content">{content}</div>
                <div className = "date">{date}</div>
                <button>삭제</button>
           </div>;
}
export default TodoItem ;