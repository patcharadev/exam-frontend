import React, { Component } from "react";
import ChatRoom from "./ChatRoom";

class SelectRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_name: "",
      join: false,
      select_room: false,
      type: "",
    };
  }

  onChangeInput = (e) => {
    this.setState({ room_name: e.target.value });
  };

  onClickConfirm = () => {
    localStorage.setItem("RoomName", this.state.room_name);
    this.setState({ join: true, select_room: false });
  };

  onCreateRoom = () => {
    this.setState({ select_room: true, type: "select_room" });
  };

  onJoinRoom = () => {
    this.setState({ select_room: true, type: "join" });
  };

  onBackClick = () => {
    this.setState({ join: false, select_room: false, type: "" });
  };

  room = () => {
    return (
      <div className="text-center">
        <p className="title">
          {" "}
          {this.state.type == "select_room" ? "สร้างห้องใหม่" : "เข้าร่วมแชท"}
        </p>
        <input className="input" onChange={this.onChangeInput}></input>
        <br />
        <br />
        <>
          <button className="text-button" onClick={this.onBackClick}>
            กลับ
          </button>
          <button className="button" onClick={this.onClickConfirm}>
          {this.state.type == "select_room" ? "ยืนยัน" : "เข้าร่วม"}
          </button>
        </>
      </div>
    );
  };

  render() {
    const { name } = this.props;
    console.log("name", name);
    return (
      <>
          <div className="text-center">
          {this.state.type== ""&&
            <>
              <p className="title">คุณ {name}</p>
              <button className="button" onClick={this.onCreateRoom}>
                สร้างห้องใหม่
              </button>
              <br />
              <br />
              <button className="text-button" onClick={this.onJoinRoom}>
                เข้าร่วมแชท
              </button>
            </>
          }

          {this.state.select_room && this.room()}
          {this.state.join && <ChatRoom name={name}></ChatRoom>}
        </div>
      </>
    );
  }
}

export default SelectRoom;
