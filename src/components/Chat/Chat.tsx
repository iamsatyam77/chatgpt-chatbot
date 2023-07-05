import { Stack } from "@mui/material";

import ChatHeader from "./ChatHeader/ChatHeader";
import ChatArea from "./ChatArea/ChatArea";
import Message from "./Message/Message";

import "./Chat.scss";

const Chat = () => {
  return (
    <Stack
      direction='column'
      gap='1rem'
      // justifyContent='space-between'
      alignItems='center'
      padding='1rem'
      className='chat-container'
    >
      {/* <Stack direction='column' gap='1rem'> */}
      <ChatHeader />
      <ChatArea />
      {/* </Stack> */}
      <Message />
    </Stack>
  );
};

export default Chat;
