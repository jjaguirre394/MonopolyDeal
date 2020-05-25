using Microsoft.AspNetCore.SignalR;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MonopolyDeal.Hubs
{
    public class GameHub : Hub
    {
        //private HashSet<string> Rooms = new HashSet<string>(); 
        public async Task CreateRoom(string roomName, string user)
        {
            //if (!Rooms.Contains(roomName))
            //{
                //Rooms.Add(roomName);
                await JoinRoom(roomName, user);
            //}
        }

        public async Task JoinRoom(string roomName, string user)
        {
            //if (Rooms.Contains(roomName))
            //{
                await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
                await Clients.Others.SendAsync("UserJoined", user);
            //}
        }

        public async Task LeaveRoom(string roomName)
        {
            //if (Rooms.Contains(roomName))
            //{
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);
                //Rooms.Remove(roomName);
            //}
        }
        
        public async Task SendState(string user, string state)
        {
            await Clients.Others.SendAsync("ReceiveState", user, state);
        }

        public async Task StartGame()
        {
            //Initialize the game state and send it to all clients
            await Clients.Others.SendAsync("ReceiveStart");
        }
    }
}
