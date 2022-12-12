
function User(props){
    return (

        <div>
            <span className="user">
            <span className="name">{props.userData.name}</span>
            <span className="handle">@ironhack</span>
          </span>

        </div>
    )
}

export default User