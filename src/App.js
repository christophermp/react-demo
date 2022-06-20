import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path={"/"} exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path={"/new-meetup"}>
          <NewMeetupPage />
        </Route>
        <Route path={"/favorites"}>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
