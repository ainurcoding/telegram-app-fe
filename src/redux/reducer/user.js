const initialState = {
    // punya placeholder
    data: [],
    // myUser: {},
    isLoading: false,
    isError: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_PENDING":
            return { ...state, isLoading: true }
        case "REGISTER_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "REGISTER_REJECTED":
            return { ...state, isLoading: false, isError: true }
        case "LOGIN_PENDING":
            return { ...state, isLoading: true }
        case "LOGIN_FULFILLED":
            return { ...state, isLoading: false, data: action.payload.data }
        case "LOGIN_REJECTED":
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}

export default usersReducer;

