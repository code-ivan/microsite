
const testReducer = (state = {
    data:"test 1234"
}, action) => {
switch (action.type) {
    case 'FETCH_TEST':
        state = {...state, data: "New"}
    break;
}
return state;
};

module.exports = testReducer;
