import classes from "./Splash.module.css";
import { Slide } from "@mui/material";

const Splash = () => {
  if (window.location.pathname === "/2") {
    // setTimeout(() => (window.location.pathname = "/home/2"), 3000);
  }
  return (
    <div className={classes.splashContainer}>
      <Slide
        direction={"down"}
        in
      >
        <div className={classes.container}>
          <div className={classes.shadow}></div>
          <div className={classes.ball}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Splash;
