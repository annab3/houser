import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import House from "../House/House";
import store, { ADD_HOUSE, DELETE_HOUSE } from "../../store";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  async componentDidMount() {
    const reply = await axios
      .get("/api/houses")
      .catch(error => console.log(error));
    console.log(reply);
    this.setState({ houses: reply.data });
    store.subscribe(() => {
      this.setState({ houses: store.getState().houses });
    });
    const action = {
      type: ADD_HOUSE,
      payload: reply.data
    };
    store.dispatch(action);
  }
  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).catch(error => console.log(error));
    const action = {
      type: DELETE_HOUSE,
      payload: id
    };
    store.dispatch(action);
  }

  render() {
    return (
      <main>
        <div>
          Dashboard
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>
        {console.log(this.state.houses)}
        {this.state.houses.map((house, index) => (
          <div key={index}>
            <House house={house} deleteHouse={this.deleteHouse} />
          </div>
        ))}
      </main>
    );
  }
}
