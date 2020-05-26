using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MonopolyDeal.Hubs
{
    public class GameHub : Hub
    { 
        public async Task CreateRoom(string roomName, string user)
        {
            await JoinRoom(roomName, user);
        }

        public async Task JoinRoom(string roomName, string user)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
            await Clients.Others.SendAsync("UserJoined", user);
        }

        public async Task LeaveRoom(string roomName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
        }
        
        public async Task SendState(string user, string state)
        {
            await Clients.Others.SendAsync("ReceiveState", user, state);
        }

        public async Task StartGame()
        {
            await Clients.Others.SendAsync("ReceiveStart");
        }
    }
}
