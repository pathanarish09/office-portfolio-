// import React, { Component } from "react";
// import Profile from "./Profile";
// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       age: "",
//       address: "",
//       phone: "",
//       users: [],
//       flag: true,
//     };
//   }
//   setName = (e) => {
//     this.setState({ name: e.target.value });
//   };
//   setAge = (e) => {
//     this.setState({ age: e.target.value });
//   };
//   setPhone = (e) => {
//     this.setState({ phone: e.target.value });
//   };
//   setAddress = (e) => {
//     this.setState({ address: e.target.value });
//   };
//   handlePress = (e) => {
//     if (e.charCode > 47 && e.charCode > 58) {
//       e.preventDefault();
//     }
//   };
//   handleSubmit = (e) => {
//     if (!this.state.name) {
//       alert("Please fill name");
//     } else if (!this.state.age) {
//       alert("Please fill age");
//     } else if (!this.state.address) {
//       alert("Please fill address");
//     } else if (!this.state.phone) {
//       alert("Please fil phone");
//     } else {
//       let obj = {
//         name: this.state.name,
//         age: this.state.age,
//         address: this.state.address,
//         phone: this.state.phone,
//       };

//       let arr = this.state.users;

//       arr.push(obj);
//       this.setState({ name: "", age: "", address: "", phone: "", users: arr });
//     }
//   };
//   render() {
//     return (
//       // <br>

//       <div className="App">
//         <br></br>
//         <br></br>
//         <Profile fullName="Aarish Khan" />
//         <br />
//         <br />
//         Name :
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={this.setName}
//           maxLength="15"
//           value={this.state.name}
//         />{" "}
//         <br />
//         <br />
//         Age :{" "}
//         <input
//           type="text"
//           placeholder="Age"
//           onChange={this.setAge}
//           maxLength="2"
//           onKeyPress={(e) => this.handlePress(e)}
//           onChange={this.setAge}
//           value={this.state.age}
//         />
//         <br />
//         <br />
//         Address :{" "}
//         <input
//           type="text"
//           placeholder="Address"
//           onChange={this.setAddress}
//           value={this.state.address}
//         />{" "}
//         <br />
//         <br />
//         Phone :{" "}
//         <input
//           type="text"
//           placeholder="Phone"
//           maxLength="10"
//           minLength="10"
//           value={this.state.phone}
//           onKeyPress={(e) => this.handlePress(e)}
//           onChange={this.setPhone}
//         />{" "}

//         <br />
//         <br />
//         Email : <input type="text" placeholder="Email" /> <br />
//         <br />
//         Password :
//         <input type="password" placeholder="Password" /> <br />
//         <br />
//         <button
//           className="SubmitButton"
//           onClick={(e) => {
//             // this.setState({ flag: !this.state.flag });
//             this.handleSubmit(e);
//           }}
//         >
//           Submit
//         </button>
//         {/* <hr></hr> */}
//         <button className="ResetButton"> Reset </button>
//         <div style={{ display: this.state.users.length ? "block" : "none" }}>
//           {this.state.users.map((item, index) => {
//             console.log(item);
//             return (
//               <div>
//                 name : {item.name}
//                 <br />
//                 age: {item.age}
//                 <br />
//                 phone: {item.phone}
//                 <br />
//                 address: {item.address}
//               </div>
//             );
//           })}
//         </div>
//         <div></div>
//       </div>
//     );
//   }
// }

// export default Form;
