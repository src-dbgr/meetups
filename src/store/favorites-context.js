import { createContext, useState } from "react";

// In this File we take care about the state of the application
// the passed parameter is the initial state value of your application or component wide state
// the passed parameter/argument can be any value of your choice, for instance an object
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {}, // exposing the last three keys here, does nothing but give better auto completion
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
}); // this will contain a react component, when you build a react component you start it with a capital letter
// since we want to have a global observation of the the favourites we track the state here.

/* this is a component function
its job is providing the context above to all the interested app components that are listening for these values
this function is also responible for updating the global state
this FavoritesContextProvider component itself should be wrapped around other components
it is planned to be used in index.js to wrap it around the entire app, so that all the components in the app
have access to the context. 
That is why we wrap props.children with FavoritesContextProvider
*/
export function FavoritesContextProvider(props) {
  // export is required to have access to it from outside these files
  const [userFavorites, setUserFavorites] = useState([]); // initial favorites is an empty array, this will be updated by the according components

  // define function to interact with the state
  function addFavoriteHandler(favoriteMeetup) {
    // be careful updating the state, it could happen that the old state wasn't processed yet and when then adding a new item it can lead to problems, the following soloution is the proper way!
    // pass the previous state and append the new favourite meetup element
    setUserFavorites((prevUserFavorites) => {
      // this will guarantee that we get the latest state snapshot, this guarantees correct order!
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId); // this func checks for each element, if true, it keeps the item, if false it removes this item.
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId); // some is another build in function in javascript
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler, // we expose the obove defined functions
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  // this refers to the above defined context component which has provider build in
  // this provider component needs to be wrapped around all the components that are
  // interested in interacting with that context.
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
