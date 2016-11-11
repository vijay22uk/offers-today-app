export default function offerReducer(state={offers:[]},action) {
    switch (action.type) {
        case 'load_offfer':
           return Object.assign({},state);
        default:
            return state;
    }
}