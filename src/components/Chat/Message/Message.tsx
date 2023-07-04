import { StyledTextarea } from "../../../styled-components/StyledTextarea";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Send } from "@mui/icons-material";

import "./Message.scss";

const Message = () => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className='message-container'>
      <form onSubmit={handleFormSubmit}>
        <Stack direction='row'>
          <StyledTextarea
            maxRows={2}
            aria-label='maximum height'
            placeholder='Type your message here....'
          />

          <Tooltip title='Send'>
            <IconButton aria-label='send' color='secondary' type='submit'>
              <Send />
            </IconButton>
          </Tooltip>
        </Stack>
      </form>
    </div>
  );
};

export default Message;
