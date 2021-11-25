const Card = (props) => {
    return (
        <div className={`card card-${props.orientation}`}>
            <img />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;