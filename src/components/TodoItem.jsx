import "./TodoItem.css"
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeCheckBox =() =>{
        onUpdate(id);
    }
    const onClickDeleteButton=() =>{
        onDelete(id);
    }
    return <div className = "TodoItem">
                <input checked={isDone} onChange = {onChangeCheckBox} type = "checkbox"/>
                <div className = "content">{content}</div>
                <div className = "date">{date}</div>
                <button onClick={onClickDeleteButton}>삭제</button>
           </div>;
}
export default TodoItem ;