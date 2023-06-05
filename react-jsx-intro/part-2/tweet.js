const Tweet = (props) => {
    return (
        <div>
            <h2>{props.username}</h2>
            <p><b>{props.name}: </b>{props.message}</p>
            <small>{props.date}</small>
        </div>
    )
};