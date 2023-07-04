import "./ChatHeader.scss";

import { Avatar, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { StyledBadge } from "../../../styled-components/StyledBadge";
import { SupportAgent, LogoutRounded } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";

import { useAuth } from "../../../state/Auth/Auth";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth?.logout();
    navigate("/");
  };

  return (
    <div className='chat-header'>
      <Stack
        direction='row'
        spacing={2}
        justifyContent='space-between'
        alignItems='center'
      >
        <Stack direction='row' spacing={2}>
          <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant='dot'
          >
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              <SupportAgent />
            </Avatar>
          </StyledBadge>

          <Typography variant='h6' alignSelf='center'>
            Chat with Jessica Smith
          </Typography>
        </Stack>

        <Tooltip title='Logout'>
          <IconButton
            aria-label='send'
            color='secondary'
            onClick={handleLogout}
          >
            <LogoutRounded />
          </IconButton>
        </Tooltip>
      </Stack>
    </div>
  );
};

export default ChatHeader;
