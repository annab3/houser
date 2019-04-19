import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import store, { UPDATE_STEP3, ADD_HOUSE } from "../../store";

export default class Step3 extends Component {
  constructor(props) {
    super(props);
    let reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        mortgage: store.getState().mortgage,
        rent: store.getState().rent
      });
    });
  }
  updateStore() {
    let { mortgage, rent } = this.state;
    const action = {
      type: UPDATE_STEP3,
      payload: { mortgage, rent }
    };
    store.dispatch(action);
  }
  async postNewHouse() {
    const { name, address, city, state, zip, img } = store.getState();
    const { mortgage, rent } = this.state;
    let newHouse = { name, address, city, state, zip, img, mortgage, rent };
    console.log(newHouse);
    const reply = await axios.post("/api/house", newHouse);
    const action = {
      type: ADD_HOUSE,
      payload: reply.data
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <form>
          <label>Monthly mortgage Amount</label>
          <input
            placeholder={this.state.mortgage}
            onChange={e => {
              this.setState({ mortgage: e.target.value });
            }}
          />
          <label>Desired Monthly Rent</label>
          <input
            placeholder={this.state.rent}
            onChange={e => {
              this.setState({ rent: e.target.value });
            }}
          />
        </form>
        <div>
          <Link to="/wizard/step2">
            <button onClick={() => this.updateStore()}>Previous Step</button>
          </Link>
          <Link to="/">
            <button onClick={() => this.postNewHouse()}>Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}
