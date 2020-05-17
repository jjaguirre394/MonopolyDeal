using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MonopolyDeal.Hubs
{
    public class GameHub : Hub
    {
        private HashSet<string> Rooms = new HashSet<string>(); 
        public async Task CreateRoom(string roomName, string user)
        {
            if (!Rooms.Contains(roomName))
            {
                await JoinRoom(roomName, user);
                Rooms.Add(roomName);
            }
        }

        public async Task JoinRoom(string roomName, string user)
        {
            if (Rooms.Contains(roomName))
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
                await Clients.Others.SendAsync("JoinedMessage", user);
            }
        }

        public async Task LeaveRoom(string roomName)
        {
            if (Rooms.Contains(roomName))
            {
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
                Rooms.Remove(roomName);
            }
        }
        
        public async Task SendStatus(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task StartGame()
        {
            //Initialize the game state and send it to all clients
        }
    }
}
