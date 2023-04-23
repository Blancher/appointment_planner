import {useState, useRef} from 'react';

export default function ContactCard(props) {
    const [card, setCard] = useState(true);
    const [form, setForm] = useState(false);
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const handleEdit = () => {
        setCard(false);
        setForm(true);
    };
    const handleSubmit = () => {
        if (props.duplicates()) {
            setCard(true);
            setForm(false);
            props.editAppointment({first: firstRef.current.value, second: secondRef.current.value, third: thirdRef.current.value, id: props.id});
        }
    };
    return (
        <div>
            <div className='card'>
                {card && (
                    <>
                        <p><b>{props.first}</b></p>
                        <p>{props.second}</p>
                        <p>{props.third}</p>
                        {props.fourth && <p>{props.fourth}</p>}
                    </>
                )}
                {form && (
                    <>
                        <form onSubmit={handleSubmit}>
                            {props.type === 'contact' && (
                                <>
                                    <input className='cardedit' type="text" id="first" placeholder="Contact Name" ref={firstRef} defaultValue={props.first} required/>
                                    <input className='cardedit' type="tel" id="second" placeholder="Contact Phone Number" ref={secondRef} defaultValue={props.second} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                                    <input className='cardedit' type="email" id="third" placeholder="Contact Email" ref={thirdRef} defaultValue={props.third} required/>
                                </>
                            )}
                            <input style={{width: '305px', margin: '0 auto', position: 'relative', right: '20px', top: '15px'}} type='submit' value={props.duplicates() ? 'Submit' : "Names can't be duplicated"}/>
                        </form>
                    </>
                )}
            </div>
            {card && <button className='other' onClick={handleEdit}>Edit</button>}
            <button onClick={props.onClick} className='delete'>Delete</button>
        </div>
    );
}
