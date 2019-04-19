import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_STEP1 } from "../../store";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    let reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        name: store.getState().name,
        address: store.getState().address,
        city: store.getState().city,
        state: store.getState().state,
        zip: store.getState().zip
      });
    });
  }
  updateStore() {
    let { name, address, city, state, zip } = this.state;
    const action = {
      type: UPDATE_STEP1,
      payload: { name, address, city, state, zip }
    };
    store.dispatch(action);
  }

  render() {
    return (
      <div>
        <form>
          <label>Property Name</label>
          <input
            placeholder={this.state.name}
            onChange={e => {
              this.setState({
                name: e.target.value
              });
            }}
          />
          <label>Address</label>
          <input
            placeholder={this.state.address}
            onChange={e =>
              this.setState({
                address: e.target.value
              })
            }
          />
          <label>City</label>
          <input
            placeholder={this.state.city}
            onChange={e =>
              this.setState({
                city: e.target.value
              })
            }
          />
          <label>State</label>
          <input
            placeholder={this.state.state}
            onChange={e =>
              this.setState({
                state: e.target.value
              })
            }
          />
          <label>Zipcode</label>
          <input
            placeholder={this.state.zip}
            onChange={e =>
              this.setState({
                zip: e.target.value
              })
            }
          />
        </form>
        <div>
          <Link to="/wizard/step2">
            <button onClick={() => this.updateStore()}>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}
