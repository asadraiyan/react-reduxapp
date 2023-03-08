const initialState = 5;

const multdivNumber = (state = initialState, action) => {
    switch (action.type) {
        case "Multiplication": return state * action.payload
        case "Division": return state / action.payload
        default: return state
    }
}
export default multdivNumber