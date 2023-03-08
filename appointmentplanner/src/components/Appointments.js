import {useState} from 'react';
import Card from './Card';

export default function Appointments(props) {
    const {appointments, setAppointments} = props;
    const [inputs, setInputs] = useState({atitle: '', contacts: '', date: '', time: '', id: ''});
    const [bool, setBool] = useState(!appointments.length);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const handleSubmit = (e) => {
        e.preventDefault();
        setBool(true);
        const newContact = {atitle: inputs.atitle, contacts: inputs.contacts, date: inputs.date, time: inputs.time, id: Date.now()};
        setAppointments(prev => [newContact, ...prev]);
        setInputs({atitle: '', contacts: '', date: '', time: '', id: ''});
    };
    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    };
    const deleteAppointment = (id) => {
        setAppointments(prev => prev.filter(appointment => appointment.id !== id));
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
                    <input type='date' id='date' onChange={handleChange} value={inputs.date} min={formattedDate} max={`${(new Date()).getFullYear()}-12-31`} required/>
                    <input type='time' id='time' onChange={handleChange} value={inputs.time} min='12:00' max='19:00' required/>
                    <input type='submit' value='Add Appointment'/>
                </form>
            </div>
            <div className='half bottom'>
                <h2>APPOINTMENTS</h2>
                {bool && appointments.map((appointment, i) => <Card first={appointment.atitle} second={appointment.contacts} third={`${appointment.date.split('-')[1]}/${appointment.date.split('-')[2]}/${appointment.date.split('-')[0]}`} fourth={`${[appointment.time.split(':')[0] % 12, appointment.time.split(':')[1]].join(':')} ${appointment.time.split(':')[0] > 12 ? 'PM' : 'AM'}`} onClick={() => deleteAppointment(appointment.id)} key={`${i}_${appointment}`}/>)}
            </div>
        </div>
    );
}
