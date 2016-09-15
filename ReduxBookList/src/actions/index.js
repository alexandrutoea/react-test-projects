export function selectBook(book) {
	// selectBook is an action creator. It needs to return an action (object with type property)
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}