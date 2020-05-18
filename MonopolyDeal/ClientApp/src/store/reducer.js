const initialState = {
    connection: {},
    user: "",
    room: "",
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_user":
            return{
                ...state,
                user: action.payload.user,
            };
        case "set_room":
            return{
                ...state,
                room: action.payload.room
            };
        
        case "add_user":
            return{
                ...state,
                users: [...state.users, action.payload.user]
            }
        case "set_conn":
            return{
                ...state,
                connection: action.payload.connection
            }
        default:
            return state;
    }
};

export default reducer;