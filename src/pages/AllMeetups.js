import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // The following block accesses the database, fetches the entries, parses them into and parses them to our expected array format
  // this useEffect hook is here to protect the code from landing in an infinite loop
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-c665b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = []; // helper array to process the returned object, since we need the meetups as single objects in an array instead of a large json format

        for (const key in data) {
          // the key comes from the db get response. we get a big json back, and each db entry is stored as as a key-value pair. but we need only the values as antries for our array
          const meetupElement = {
            // Each db entry is processed, and added to a separate json block
            id: key,
            ...data[key], // "spread operator", which copies all the key-value pairs from the db and rolls them out as key value elements of our json object.
          };

          meetups.push(meetupElement); // we append our newly created json block and append them as another element to our helper array.
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); // the second argument [] is neccessary here to make sure to use the useEffect function, since react will check the values added to the array

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
