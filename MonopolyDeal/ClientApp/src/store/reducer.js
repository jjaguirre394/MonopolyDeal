import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
connection.start().catch(function (err) {
    return console.error(err.toString());
});
const initialState = {
    connection: connection,
    user: "",
    room: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_user":
            return{
                ...state,
                user: action.payload.user
            };
        case "set_room":
            return{
                ...state,
                room: action.payload.room
            };
    
        default:
            return state;
    }
};

export default reducer;