import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import { MoonIcon, SunIcon } from '../icons';
import { useAuth } from "../../AuthContext";

function Header() {
  const { user, email, password, setUser, setEmail, setPassword } = useAuth();

  return (
    <div>
      <header>
        <Grid container justifyContent="right">
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Grid>
        <Grid container justifyContent={"space-between"} mt={5} mb={3}>
          <IconButton
            color="primary"
            aria-label="theme switcher"
            onClick={setCurrentTheme}
          >
            {currentTheme === Theme.DARK ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Grid>
      </header>
    </div>
  );
}

export default Header;
