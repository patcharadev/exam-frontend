import React, { Component } from "react";
import SelectRoom from "./SelectRoom"

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      confirm: false,  
    };
  }

  onChangeInput = (e) => {
    this.setState({ name: e.target.value });
  };

  onClickConfirm = () => {
    this.setState({ confirm: true});
  }

  render() {
    let { name } = this.state;
    return (
      <>
      {!this.state.confirm&&
          <div className="text-center">
          <p className="title">ชื่อของคุณ</p>
          <input className="input" onChange={this.onChangeInput}></input>
          <br />
          <br />
          {name != "" ? <button className="button" onClick={this.onClickConfirm}>ยืนยัน</button> : null}
        </div>
      }
      {this.state.confirm&&
            <SelectRoom name={this.state.name} ></SelectRoom> 
      }
      </>
    );
  }
}

export default Homepage;
