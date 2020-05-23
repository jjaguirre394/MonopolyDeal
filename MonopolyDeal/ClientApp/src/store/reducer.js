import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();

async function start() {
    try {
        await connection.start();
        console.log("connected");
    } catch (err) {
        console.log(err);
        setTimeout(() => start(), 5000);
    }
};

connection.onclose(async () => {
    await start();
});

// Start the connection.

start();

const initialState = {
    connection: connection,
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