import React, { Component } from "react";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onChangeInput = (e) => {
    this.setState({ message: e.target.value });
  };

   handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior

    }
  }

  render() {
    return (
      <>
        <div className="text-center">
          <div className="text-header-left ">
            ห้อง {localStorage.getItem("RoomName")}
          </div>
          <div className="sub-container">
           <p className="text-left">คุณ eiei</p>
           <p className="chat-container">สวัสดี</p>
          </div>
          <input type="text" className="chat-input" 
          onChange={this.onChangeInput} 
          // onKeyPress={handleKeyPress}
          placeholder="Enter เพื่อส่ง"
          ></input>
        </div>
      </>
    );
  }
}

export default ChatRoom;
