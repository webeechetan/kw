import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Users from './users/Users';
import Teams from './teams/Teams';
import TeamInner from './teams/TeamInner';
import Tasks from './tasks/Tasks';
import TaskFrontend from './tasks/TaskFrontend';
import AddTasks from './tasks/AddTask';
import Messages from './messages/Messages';
import Projects from './projects/Projects';
import Dashboard from './Dashboard';
import Invite from './Invite';
import Signin from './Signin';
import Signup from './Signup';
import InviteSignup from './InviteSignup';
import Members from './members/Members';
import CreateTeam  from './teams/components/CreateTeam'
import AddMember from './members/components/AddMember';
import EditMember from './members/components/EditMembers';
import CreateProject from './projects/components/CreateProject';
import Clients  from './clients/Clients';
import AddClient from './clients/components/AddClient';
import EditClient from './clients/components/EditClient';
import ViewClient from './clients/components/ViewClient';
import ViewProject from './projects/components/ViewProject';


function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/invite-signup" component={InviteSignup} />
            <Route exact path="/invite/:email" component={Invite} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/team-inner" component={TeamInner} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/add-task" component={AddTasks} />
            <Route exact path="/task-frontend" component={TaskFrontend} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/addmember" component={AddMember} />
            <Route exact path= "/createteam" component={CreateTeam} />
            <Route exact path= "/edit_member/:memberId" component={EditMember} />
            <Route exact path="/create_project" component={CreateProject} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="/create-client" component={AddClient} />
            <Route exact path="/edit-client/:clientId" component={EditClient} />
            <Route exact path ="/view-client/:clientId" component={ViewClient} />
            <Route exact path ="/view-project/:projectId" component={ViewProject} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
