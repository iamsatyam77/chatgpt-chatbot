import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { LoginRounded } from "@mui/icons-material";
import { MuiOtpInput } from "mui-one-time-password-input";
import "./Home.scss";
import { useAuth } from "../../state/Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    auth?.user && navigate("/chat");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  const handleLogin = () => {
    auth?.login();
    navigate("/chat");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <Stack
      direction='column'
      gap='1rem'
      justifyContent='center'
      alignItems='center'
      padding='0 1rem '
      className='home-container'
      height='100vh'
    >
      <Typography variant='h4' alignSelf='center'>
        Welcome
      </Typography>

      <Typography
        variant='h6'
        alignSelf='center'
        textAlign='center'
        padding={3}
      >
        Please enter pin to start using{" "}
        <Typography variant='h5' component='b' color='green'>
          Chat GPT - 4
        </Typography>
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack direction='column' gap='1rem' alignItems='center'>
          <Box>
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              inputMode='numeric'
            />
          </Box>
          <Box>
            <Tooltip title='Login'>
              <IconButton aria-label='send' color='secondary' type='submit'>
                <LoginRounded />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </form>
    </Stack>
  );
};

export default Home;
