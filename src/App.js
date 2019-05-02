import React, {Component} from 'react';

class App extends Component{

	constructor(){
		super();
		this.state={
			title: ""
		}
	}

	componentDidMount(){
		// let myObject;
		fetch("https://swapi.co/api/people/1")
			.then(people => people.json())
			.then(data => this.setState({title: data['name']}))
			// .then(data => console.log(data))
			.catch(err => console.log(err));
	}

	render(){
		return (
			<div>
				<h1>{this.state.title}</h1>
			</div>
		)
	}	
}

export default App;