import './App.css';
import React from "react";
import {EventList} from "./components/event-list/event-list";
import {Header} from "./shared/components/header/header";

function App() {
  return <React.Fragment>
      <Header/>
  <EventList/>
  </React.Fragment>;
}

export default App;
