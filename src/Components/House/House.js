import React, { Component } from "react";

export default class House extends Component {
  render() {
    return (
      <div className="house_info_container">
        <div className="image_container">
          <img src={this.props.house.img} alt="house img" />
        </div>
        <div className="text_container">
          <p>Property Name: {this.props.house.name}</p>
          <p>Address: {this.props.house.address}</p>
          <p>City: {this.props.house.city}</p>
          <p>State: {this.props.house.state}</p>
          <p>Zipcode: {this.props.house.zip}</p>
        </div>
        <div className="text_container">
          <p>Monthly Mortgage: {this.props.house.mortgage}</p>
          <p>Desired Rent: {this.props.house.rent}</p>
        </div>
        <button onClick={() => this.props.deleteHouse(this.props.house.id)}>
          X
        </button>
      </div>
    );
  }
}
