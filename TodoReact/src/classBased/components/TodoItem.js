import React from "react"
import styles from "./TodoItem.module.css"

/*function TodoItem(props){
	return <li>{props.todo.title}</li>
}
*/
class TodoItem extends React.Component{
  handleEditing = ()=>{
		this.setState({
			editing: true,
		})
		//alert("Edit mode activated")
	}
	handleUpdatedDone =(event)=>{
		if(event.key === "Enter"){
			this.setState({editing:false})
		}
	}
	state = {
		editing: false,
	}
	componentWillUnmount(){
		console.log("Cleaning up....")
	}
	render(){
		const {id, title, completed} = this.props.todo
		const completedStyle = {
			fontStyle: "italic",
			color: "#595959",
			opacity: "0.4",
			textDecoration: "line-thrugh",
		}
		let viewMode = {}
		let editMode = {}
		if(this.state.editing){
			viewMode.display = "none"
		}else{
			editMode.display = "none"
		}
		return(
			<li className={styles.item}>
					<div style={viewMode} onDoubleClick={this.handleEditing} >
						<input
						className={styles.checkbox}
						type="checkbox" 
						checked={completed}
						onChange={()=>this.props.handleChangeProps(id)}
					  />
						<button onClick={()=>this.props.deleteTodoProps(id)}>
							Delete</button>
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
						this.props.setUpdate(e.target.value, id)
					}} 
					onKeyDown={this.handleUpdatedDone}
				/>
			</li>		
	)
}
	}

export default TodoItem