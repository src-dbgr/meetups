import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {
        /* All meetup items get passed to the meetup list*/
        props.meetups.map((meetup, index) => (
          <MeetupItem
            key={index}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))
      }
    </ul>
  );
}

export default MeetupList;
