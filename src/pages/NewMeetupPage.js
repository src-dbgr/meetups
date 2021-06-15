import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

//https://react-getting-started-c665b-default-rtdb.europe-west1.firebasedatabase.app//>

function NewMeetupPage() {
  const history = useHistory(); // access browser history

  function addMeetupHandler(meetupData) {
    console.log("TEST");
    // db created via google firebase (started in test mode so anybody can read and write to it)
    // note, the ending "meetups.json" creates an automatic table in your firebase db
    // this path ending is up to you, you can name it whatever you want, firebase inteprets it as a create request, if it is not yet there.
    fetch(
      "https://react-getting-started-c665b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => console.log(response)) // log away the response
      .then(() => {
        history.replace("/"); // go back to the start page
      });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
