'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Comms from './containers/Comms.js';
import comments from './reducers/index.js';
import {createStore} from 'redux';
import './baseStyle.css';

let savedComments = localStorage.getItem('commentsStorage');

let initialState;
if (savedComments !== null) {
	initialState = JSON.parse(savedComments);
} else {
	initialState = [];
}

let store = createStore(comments, initialState);

ReactDOM.render(
	<Comms store={store}/>,
	document.querySelector('.main')
);

// class ToDoApp extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			todos: [
// 				{name: 'set up you butt', checked: true},
// 				{name: 'run your butt', checked: true},
// 				{name: 'destroy your butt', checked: false}
// 			]
// 		};
// 	}

// 	toggleToDo(key) {
// 		let todos = this.state.todos.map((todo, i) => {
// 			if (key === i) {
// 				return {
// 					name: todo.name,
// 					checked: !todo.checked
// 				}
// 			} else {
// 				return todo;
// 			}
// 		});

// 		this.setState({todos});
// 	}

// 	render() {
// 		return (
// 			<ol>
// 				{
// 					this.state.todos.map((todo, i) => {
// 						let className = todo.checked ? 'checked' : '';

// 						return(
// 							<li 
// 								key={i} 
// 								class={className}
// 								onClick ={ev => {this.toggleToDo(i)}}
// 							>
// 								{todo.name}
// 							</li>
// 						)
// 					})
// 				}
// 			</ol>

// 			<input 
// 				type="text" 
// 				plaeholder="Новая задача" />
// 		)
// 	}
// }

// ReactDOM.render(
// 	<ToDoApp />,
// 	document.querySelector('.container')
// );