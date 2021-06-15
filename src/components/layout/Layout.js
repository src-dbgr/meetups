import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  /* the idea of this function is to share the css lock for this element.
    This Element, when applied (it serves in App.js as a wrapper) cascades its look to the wrapped content.
    for this to happen react requires: "props.children" to be specified at the place where the content should be placed.
    */
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
