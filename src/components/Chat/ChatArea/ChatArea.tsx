import { Chip, Stack, Box } from "@mui/material";
import { SupportAgent, PermIdentity } from "@mui/icons-material";
import "./ChatArea.scss";

const ChatArea = () => {
  return (
    <div className='chat-area'>
      <Stack direction='column' gap={1} padding={1}>
        <Box alignSelf='end'>
          <Chip
            icon={<PermIdentity />}
            variant='filled'
            label='Hi'
            color='default'
          />
        </Box>
        <Box>
          <Chip
            icon={<SupportAgent />}
            variant='filled'
            label='Hello, I am your assistant, How may i help you?'
            color='primary'
          />
        </Box>
      </Stack>
    </div>
  );
};

export default ChatArea;
