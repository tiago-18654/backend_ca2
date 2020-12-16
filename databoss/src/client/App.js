import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import Main from './Main';
import SearchBoss from './SearchBoss';
import CreateBoss from './CreateBoss';
import EditBoss from './EditBoss';
import BossList from './BossList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={Main}/>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/boss-list/" component={BossList}/>
        {/*pass the name throught the SearchBoss component*/}
        <Route exact path="/boss-list/:name" component={BossList}/>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/search-boss" component={SearchBoss}/>
        {/*pass the id through the EditBoss component*/}
        <Route path="/edit-boss/:id" component={EditBoss}/>
        {/*set the path to create a new boss to CreateBoss component*/}
        <Route path="/create-boss" component={CreateBoss}/>
      </div>
    </HashRouter>
  );
};

export default App;
