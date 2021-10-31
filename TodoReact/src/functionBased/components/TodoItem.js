import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

/*function TodoItem(props){
	return <li>{props.todo.title}</li>
}
*/
const TodoItem = props =>{
	const [editing, setEditing] = useState(false)
	
  const handleEditing = ()=>{
		setEditing(true)
		//alert("Edit mode activated")
	}
	
	const handleUpdatedDone =(event)=>{
		if(event.key === "Enter"){
			setEditing(false)
		}
	}
	
	const {id, title, completed} = props.todo
	
	const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: "0.4",
			textDecoration: "line-thrugh",
		}
	
		let viewMode = {}
		let editMode = {}
	
		if(editing){
			viewMode.display = "none"
		}else{
			editMode.display = "none"
		}

		useEffect(()=>{
			return () => {
				console.log("cleaning up.....")
			}
		}, [])
	
		return(
			<li className={styles.item}>
					<div style={viewMode} onDoubleClick={handleEditing} >
						<input
						className={styles.checkbox}
						type="checkbox" 
						checked={completed}
						onChange={()=> props.handleChangeProps(id)}
					  />
						<button onClick={()=>props.deleteTodoProps(id)}>
							< FaTrash style={{color:"orangered", fontSize:"16px"}} />
						</button>
						<span style={completed ? completedStyle : null }>
						{title}
						</span>
				</div>
				<input 
					style={editMode} 
					type="text" 
					className={styles.textInput}
					value={title}
					onChange={(e)=>{
						props.setUpdate(e.target.value, id)
					}} 
					onKeyDown={handleUpdatedDone}
				/>
			</li>		
	)

	}

export default TodoItem