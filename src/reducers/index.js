let comments = (state, action) => {
	switch (action.type) {
		case 'DELETE_COMMENT':
			state.map(obj => {
				if (obj.id === action.id) {
					state.splice(state.indexOf(obj), 1);
				}
			})
			return [...state];

			
		case 'ADD_COMMENT':
			return [
				...state, 
				{
					id: action.id, 
					name: action.name, 
					text: action.text,
					date: action.date
				}
			]

		default: return state;
	}
	
};

export default comments;