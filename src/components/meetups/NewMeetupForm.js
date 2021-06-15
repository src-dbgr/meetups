import { useRef } from "react"; // this is the so called "useRef" hook which imports dom access for react, useref itself is a function
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  /* 
    we assign "titleInputRef" to "ref" in the input tag of Meetup title 
    this will establis a connection and will give access to the input element
    */
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    // in order to prevent the browser to trigger an http request we
    // stop the default behaviour through the passed event
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value; // this contains the user input
    // titleInputRef.current.value = "some random value";  <-- this would overwrite the users value
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
    console.log(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Address</label>
          <input type="text" required id="title" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Description</label>
          <textarea
            id="title"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
