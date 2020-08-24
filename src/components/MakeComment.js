import React from 'react';

import './MakeComment.css';

let MakeComment = (props) => {
	let {addComment} = props;

	class Data extends React.Component {
		constructor() {
			super();
			this.name = '';
			this.text = '';
			this.date = {
				month: new Date().getMonth() + 1,
				day: new Date().getDate(),
				hour: new Date().getHours(),
				min: new Date().getMinutes()
			};
		}

		render() {
			return(
				<div className="new-com-cont">
					<input 
						className="new-com-cont__author" 
						placeholder="Введите свое имя"
						onChange={(ev) => {
							this.name = ev.target.value;
						}}/>
					<textarea 
						className="new-com-cont__text" 
						placeholder="Текст комментария"
						onChange={(ev) => {
							this.text = ev.target.value;
						}}>
					</textarea>
					<button 
						className="new-com-cont__button"
						onClick={() => {
								if (this.name.trim() === '' || this.text.trim === '') {
									alert('Введите своё имя и текст комментария, пожалуйста');
									return;
								} else {
									addComment(this.name.trim(), this.text.trim(), this.date);
									this.name = '';
									this.text = '';
								}
							}
						}

					>
						send
					</button>
				</div>
			)
		}
	}

	return(<Data />);
}

export default MakeComment;