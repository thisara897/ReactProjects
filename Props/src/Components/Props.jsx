function Props(props){ //you can use whatever name you like inside the brackets
    return(
        <div>
            <div className="topicBox">
                <span className="text">my favourite food is {props.food} {props.price}</span>
                {props.children}
            </div> 
        </div>
    )
}

export default Props