import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <NavLink to='/contacts' className='navlink' activeClassName='activenav'>CONTACTS</NavLink>
            <NavLink to='/appointments' className='navlink' activeClassName='activenav'>APPOINTMENTS</NavLink>
        </nav>
    );
}