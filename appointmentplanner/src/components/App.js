import {useState} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
import Contacts from './Contacts';
import Appointments from './Appointments';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  return (
    <Router id='router'>
      <header>
        <h1>APPOINTMENT PLANNER</h1>
        <NavBar/>
      </header>
      <div className='vertline'></div>
      <Route exact path='/'>
        <Redirect to='/contacts'/>
      </Route>
      <Route path='/contacts'>
        <Contacts contacts={contacts} setContacts={setContacts}/>
      </Route>
      <Route path='/appointments'>
        <Appointments appointments={appointments} setAppointments={setAppointments} contacts={contacts}/>
      </Route>
    </Router>
  );
}