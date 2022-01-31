import React from "react";
function Profile(props) {
  return <div> Welcome ! {props.fullName} logged in successfully. </div>;
}

// class Profile extends React.Component {
//   render() {
//     return <div>Welcome ! {this.props.fullName} logged in successfully.</div>;
//   }
// }

export default Profile;
