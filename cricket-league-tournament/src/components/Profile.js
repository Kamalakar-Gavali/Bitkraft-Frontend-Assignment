const Profile = (props) => {
  return (
    <>
      <h1>Profile</h1>
      <div className="profile-container">
        <img src={props.player.imgSrc} />
        <h3>{props.player.name}</h3>
        <h3>Age : {props.player.age}</h3>
        <h3>Strike Rate : {props.player.avgStrikeRate}</h3>

        {console.log(props.player)}
      </div>
    </>
  );
};
export default Profile;
