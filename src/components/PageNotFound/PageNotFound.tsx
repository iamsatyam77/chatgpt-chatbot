import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction='column'
      gap='1rem'
      alignItems='center'
      justifyContent='center'
      width='22.5rem'
      margin='auto'
      height='100dvh'
    >
      <Typography variant='h4'>!!OOPS</Typography>
      <Typography variant='h5'>Page Not Found</Typography>
      <Tooltip title='Back To Home'>
        <IconButton
          aria-label='back to home'
          color='secondary'
          onClick={() => navigate("/")}
        >
          <Home />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default PageNotFound;
