import React, {Component} from "react"

class InputTodo extends Component{
	state = {
		title: ""
	}
	onChange = (e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit=(e)=>{
		if(this.state.title.trim()){
			e.preventDefault()
		//alert(this.state.title)
		  this.props.addTodoProps(this.state.title)
		  this.setState({
			  title:"",
		  })
		}else{
			alert("Please enter text")
		}
	}
	render(){
		return(
			<form className="form-container" onSubmit={this.handleSubmit}>
				<input className="input-text" type="text" 
					placeholder="Add todo item......" 
					name="title"
					value={this.state.title}
					onChange={this.onChange}
				/>
				<button className="input-submit" >Submit</button>
			</form>
		)
	}
}
export default InputTodo
