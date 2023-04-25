import {useState, useRef} from 'react';

export default function AppointmentCard(props) {
    const [card, setCard] = useState(true);
    const [form, setForm] = useState(false);
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();
    const handleEdit = () => {
        setCard(false);
        setForm(true);
    };
    const handleSubmit = () => {
        setCard(true);
        setForm(false);
        props.editAppointment({first: firstRef.current.value, second: secondRef.current.value, third: thirdRef.current.value, fourth: fourthRef.current.value, id: props.id});
    };
    return (
        <div>
            <div className='card'>
                {card && (
                    <>
                        <p><b>{props.first}</b></p>
                        <p>{props.second}</p>
                        <p>{props.third}</p>
                        <p>{props.fourth}</p>
                    </>
                )}
                {form && (
                    <>
                        <form onSubmit={handleSubmit}>
                            <input className='cardedit' ref={firstRef} type='text' id='atitle' placeholder='Appointment Title' defaultValue={props.first} required/><br/>
                            <select style={{width: '305px', margin: '0 auto', position: 'relative', right: '20px', top: '-10px'}} ref={secondRef} id='contacts' defaultValue={props.second}>
                                <option value='No Contact Selected'>No Contact Selected</option>
                                {props.contacts.map(contact => <option value={contact.title}>{contact.title}</option>)}
                            </select><br/>
                            <input ref={thirdRef} style={{width: '300px', margin: '0 auto', position: 'relative', right: '20px', top: '5px'}} type='date' id='date' defaultValue={props.third} min={props.formattedDate} max={`${(new Date()).getFullYear()}-12-31`} required/>
                            <input ref={fourthRef} style={{width: '300px', margin: '0 auto', position: 'relative', right: '20px', top: '20px'}} type='time' id='time' defaultValue={props.fourth} min='12:00' max='19:00' required/>
                            <input style={{width: '305px', margin: '0 auto', position: 'relative', right: '20px', top: '35px'}} type='submit' value='Submit'/>
                        </form>
                    </>
                )}
            </div>
            {card && <button className='other' onClick={handleEdit}>Edit</button>}
            <button onClick={props.onClick} className='delete'>Delete</button>
        </div>
    );
}
