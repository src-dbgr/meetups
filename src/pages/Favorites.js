import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext); // this gives us the current context snapshot

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />; // TAKE CARE, refreshing the page deletes the locally stored content, if persistence is needed, browser storage is required!
  }

  return (
    // seeting meetus to the context information, renders the content to the globally availabe favorites.
    <div>
      <h1>My Favorites</h1>
      {content}
    </div>
  );
}

export default FavoritesPage;
