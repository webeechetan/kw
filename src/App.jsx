import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { Switch, Route } from "react-router-dom";
import Users from './users/Users';
import Teams from './teams/Teams';
import TeamInner from './teams/TeamInner';
import Tasks from './tasks/Tasks';
import Messages from './messages/Messages';
import Projects from './projects/Projects';
import Dashboard from './Dashboard';
import Invite from './Invite';
import Signin from './Signin';
import Signup from './Signup';
import InviteSignup from './InviteSignup';

function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/invite-signup" component={InviteSignup} />
          <Route exact path="/invite" component={Invite} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/team-inner" component={TeamInner} />
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/projects" component={Projects} />
      </Switch>
    </>
  );
}

export default App;
