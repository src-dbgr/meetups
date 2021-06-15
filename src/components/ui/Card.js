import classes from "./Card.module.css";

function Card(props) {
  /* the idea of this function is to share the Card look to itmes.
  props.children is passing the content to this div from its wrapped content.. 
    example: Card is used as a wrapper in MeetupItem.js and provides its css style to each MeetupItem
    However, if props.children is missing, this div will simply overlay the wrapped content,
    to make the wrapped content visible in this card, props.children needs to be set as you can see.
    */
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
