import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Survey Form</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
