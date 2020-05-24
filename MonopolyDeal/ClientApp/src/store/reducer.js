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
            console.log(`Setting user: ${action.payload.user}`)
            return{
                ...state,
                user: action.payload.user,
            };
        case "set_room":
            console.log(`Setting room: ${action.payload.room}`)
            return{
                ...state,
                room: action.payload.room
            };
        
        case "add_user":
            console.log(`Adding user to users collection: ${action.payload.user}`)
            return{
                ...state,
                users: [...state.users, action.payload.user]
            }
        case "set_conn":
            console.log(`Setting connection: ${action.payload.connection}`)
            return{
                ...state,
                connection: action.payload.connection
            }
        case "set_host":
            console.log(`Setting host: ${action.payload.isHost}`)
        return{
            ...state,
            isHost: action.payload.isHost
        }
        default:
            return state;
    }
};

export default reducer;