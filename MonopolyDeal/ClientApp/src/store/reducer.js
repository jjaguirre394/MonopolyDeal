const initialState = {
    connection: {},
    user: "",
    room: "",
    isHost: false,
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
        case "set_host":
        return{
            ...state,
            isHost: action.payload.isHost
        }
        default:
            return state;
    }
};

export default reducer;