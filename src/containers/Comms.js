import React from 'react';
import {connect} from 'react-redux';

import MakeComment from '../components/MakeComment';
import AddComment from '../components/AddComment';

import {addComment, deleteComment} from '../actions/index.js';

let Comms = (props) => {

	let {
		comments, addComment, deleteComment
	} = props;

	let jason = JSON.stringify(comments);
	localStorage.setItem('commentsStorage', jason);

	return (
		<section>
			<AddComment comments={comments} deleteComment={deleteComment}/>
			<MakeComment addComment={addComment}/>
		</section>
	)
}

let mapStateToProps = (state) => {
	return {
		comments: state
	}

}

let mapDispatchToProps = (dispatch) => {
	return {
		addComment: (name, text, date) => dispatch(addComment(name, text, date)),
		deleteComment: (id) => dispatch(deleteComment(id))
	}
}

Comms = connect(
	mapStateToProps,
	mapDispatchToProps
)(Comms);

export default Comms;