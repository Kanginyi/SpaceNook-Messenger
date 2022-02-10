import React from 'react';
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

function MessagesList({allMessages, currentUser, socket, username, room, setShowChatroom}) {
   const renderMessage = allMessages?.map(messageSent => {
      return <Message
               messageSent={messageSent}
               currentUser={currentUser}
             />
   });

   const leaveRoom = () => {
      socket.emit("leave_room", {username, room})

      setShowChatroom(false);
   }

   return (
      <div className="chat-body">
         <button onClick={leaveRoom} className="leave-room">Leave Room</button>

         <ScrollToBottom className="messages-list">
            {renderMessage}
         </ScrollToBottom>
      </div>
   );
}

export default MessagesList;