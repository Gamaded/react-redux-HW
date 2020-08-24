import React from 'react';

import './AddComment.css';

let AddComment = (props) => {
	let {comments, deleteComment} = props;
	let months = {
		1: "Января",
		2: "Февраля",
		3: "Марта",
		4: "Апреля",
		5: "Мая",
		6: "Июня",
		7: "Июля",
		8: "Августа",
		9: "Сентября",
		10: "Октября",
		11: "Ноября",
		12: "Декабря"
	};

	let CheckMins = function(comm) {
		if (comm.date.min < 10) {
			return `0${comm.date.min}`;
		} else {
			return comm.date.min;
		}
	};

	return(
		<ul>
			{
				comments.map(comm => {

					return(
						<li 
							key={comm.id}
							className="comment"
						>
							<div className="author">{comm.name}</div>
							<button 
								className="delete-comm"
								onClick={ev => deleteComment(comm.id)}
							>
							X
							</button>
							<p className="comm-text">{comm.text}</p>
							<div className="comm-date">
								<span className="date">{comm.date.day} </span>
								<span className="month">{
									months[comm.date.month]
								} </span>
								<span className="hour">{comm.date.hour}:</span>
								<span className="mins">{CheckMins(comm)}</span>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
}

export default AddComment;