import {useState} from 'react';
import Card from './Card';

export default function Appointments(props) {
    const {appointments, setAppointments} = props;
    const [inputs, setInputs] = useState({atitle: '', contacts: '', date: '', time: ''});
    const [bool, setBool] = useState(appointments === [] ? false : true);
    const handleSubmit = (e) => {
        e.preventDefault();
        setBool(true);
        setAppointments(prev => [...prev, {atitle: inputs.atitle, contacts: inputs.contacts, date: inputs.date, time: inputs.time}]);
        setInputs({atitle: '', contacts: '', date: '', time: ''});
    };
    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    };
    return (
        <div className='flex'>
            <div className='half'>
                <h2>ADD APPOINTMENT</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' id='atitle' placeholder='Appointment Title' onChange={handleChange} value={inputs.atitle} required/><br/>
                    <select id='contacts' onChange={handleChange} value={inputs.contacts}>
                        <option value='No Contact Selected'>No Contact Selected</option>
                        {props.contacts.map(contact => <option value={contact.title}>{contact.title}</option>)}
                    </select><br/>
                    <input type='date' id='date' onChange={handleChange}  value={inputs.date} required/>
                    <input type='time' id='time' onChange={handleChange} value={inputs.time} required/>
                    <input type='submit' value='Add Appointment'/>
                </form>
            </div>
            <div className='half bottom'>
                <h2>APPOINTMENTS</h2>
                {bool && appointments.map(appointment => <Card first={appointment.atitle} second={appointment.contacts} third={`${appointment.date.split('-')[1]}/${appointment.date.split('-')[2]}/${appointment.date.split('-')[0]}`} fourth={`${[appointment.time.split(':')[0] % 12, appointment.time.split(':')[1]].join(':')} ${appointment.time.split(':')[0] > 12 ? 'PM' : 'AM'}`} key={appointment}/>)}
            </div>
        </div>
    );
}