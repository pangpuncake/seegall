import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import BuildIcon from "@material-ui/icons/Build";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";
import FunctionsSharpIcon from "@material-ui/icons/FunctionsSharp";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Description from "../Description/Description";
import CodeMirror from "../CodeMirrorEditor/CodeMirrorEditor";
import BarChart from "../BarChart/BarChart";
import HomeIcon from "@material-ui/icons/Home";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#2e2e2e",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#212121",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#212121",
    color: "#bbb",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#2e2e2e",
    color: "#bbb",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [
    code,
    setCode,
  ] = useState(`//Do not modify the function name.\nconst createFunction = (arr) => {
        //Your code here
        return arr;\n};`);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const CodeMirrorHandler = (code) => {
    console.log("CodeMirrorHandler");
    setCode(code);
  };

  const getSortHandler = (algorithm) => {
    props.getSort(algorithm);
  };

  const buildHandler = () => {
    props.postCode(code, props.algorithm, props.array);
  };

  React.useEffect(
    () => setCode(props.code),

    [props.code]
  );

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemLink href="/">
            <ListItemText primary="Home" />
          </ListItemLink>
        </ListItem>
        <Divider />
        <ListItem
          button
          key="createFunction"
          onClick={() => getSortHandler("createFunction")}
        >
          <ListItemIcon>
            <FunctionsSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Create Function" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["BubbleSort", "InsertionSort"].map((text, index) => (
          <ListItem button key={text} onClick={() => getSortHandler(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <BubbleChartIcon /> : <ExpandLessSharpIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Build"].map((text, index) => (
          <ListItem button key={text} onClick={buildHandler}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "#212121", color: "#bbb" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Code Visualiser
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Description />
        <Divider />
        <CodeMirror value={code} onChange={CodeMirrorHandler} />
        <Divider />
        <BarChart />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    algorithm: state.code.algorithm,
    array: state.barChart.array,
    code: state.code.code,
    loading: state.code.loading,
    completedGet: state.code.completedGet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postCode: (code, algorithm, array) =>
      dispatch(actions.postCode(code, algorithm, array)),
    updateCode: (algorithm, code) =>
      dispatch(actions.updateCodeSuccess(algorithm, code)),
    getSort: (algorithm) => dispatch(actions.getSort(algorithm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);
