export default function Card(props) {
    return (
        <div className='card'>
            <p><b>{props.first}</b></p>
            <p>{props.second}</p>
            <p>{props.third}</p>
            {props.fourth && <p>{props.fourth}</p>}
            <button onClick={props.onClick} className='delete'>Delete</button>
        </div>
    );
}
