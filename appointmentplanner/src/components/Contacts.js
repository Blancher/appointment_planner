import {useState} from 'react';
import ContactCard from './ContactCard';

export default function Contacts(props) {
  const {contacts, setContacts} = props;
  const [inputs, setInputs] = useState({title: '', phone: '', email: ''});
  const [bool, setBool] = useState(contacts === [] ? false : true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicates()) {
      setBool(true);
      const id = Date.now();
      const newContact = {title: inputs.title, phone: inputs.phone, email: inputs.email, id: id, disabled: true};
      setContacts(prev => [newContact, ...prev]);
      setInputs({title: '', phone: '', email: ''});
    }
  };
  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const deleteContact = (id) => {
    setContacts(prev => prev.filter((item) => item.id !== id));
  };
  const editAppointment = (obj) => {
    setContacts(prev => prev.map(contact => contact.id === obj.id ? {title: obj.first, phone: obj.second, email: obj.third, id: obj.id} : contact));
  };
  const duplicates = () => {
    const returned = [];
    contacts.forEach(contact => contact.title === inputs.title && returned.push(true));
    if (returned.length === 0) {
      return true;
    } else if (returned.length >= 1) {
      return false;
    }
  };
  return (
    <div className="flex">
      <div className="half">
        <h2>ADD CONTACT</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" id="title" placeholder="Contact Name" onChange={handleChange} value={inputs.title} required/>
          <input type="tel" id="phone" placeholder="Contact Phone Number" value={inputs.phone} onChange={handleChange} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
          <input type="email" id="email" placeholder="Contact Email" onChange={handleChange} value={inputs.email} required/>
          <input type="submit" value={duplicates() ? 'Add Contact' : "Names can't be duplicated"}/>
        </form>
      </div>
      <div className="half bottom">
        <h2>CONTACTS</h2>
        {bool && contacts.map((contact, i) => <ContactCard duplicates={duplicates} first={contact.title} second={contact.phone} third={contact.email} onClick={() => deleteContact(contact.id)} type='contact' id={contact.id} editAppointment={editAppointment} key={`${i}_${contact}`}/>)}
      </div>
    </div>
  );
}
