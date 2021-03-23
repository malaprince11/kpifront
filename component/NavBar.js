import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
// import MenuIcon from '@material-ui/icons/Menu';
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navli: {},
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Head>
          <title>Create App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h5" className={classes.title}>
            <Link href="/">Dashboard Kpi</Link>
          </Typography>

          <Box display="flex" flexDirection="row" p={2} m={1}>
            <Box p={2}>
              <Link href="/connection">
                <a>Connection</a>
              </Link>
            </Box>
            <Box p={2}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
