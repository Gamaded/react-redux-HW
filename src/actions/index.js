let nextComm = 1;

export let addComment = (name, text, date) => {
	return {
		type: 'ADD_COMMENT',
		id: nextComm++,
		name,
		text,
		date
	}
}

export let deleteComment = (id) => {
	return {
		type: 'DELETE_COMMENT',
		id
	}
}