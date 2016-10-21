/*expect(
    //talkReducer(0, {'TEST'});
    count(0)
).toEqual(1)*/

/*export const talkReducer = (state = {isTalkReducer : true}, action) => {
	
    switch(action.type) {
        case 'GET_TALK_LISTS':
        	console.log(action.talks);
            return Object.assign({}, state, {talk:action.talks});
        default:
            return state;
    }
};*/

export const talkReducer = (state, action) => {

    switch(action.type) {
        case 'GET_TALK_LISTS':
            console.log(action.talks);
            return Object.assign({}, state, {talk:action.talks});
        default:
            return state || '';
    }
};
