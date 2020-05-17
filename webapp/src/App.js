import React from "react";
import axios from "axios";
import "./style/index.css";

const sortTypes = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.price - b.price
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.price - a.price
  },
  default: {
    class: "sort",
    fn: (a, b) => a
  }
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: "default",
      initialItems: [
        {
          name: "COZICOMFORT",
          host_name: "Francesca",
          neighbourhood_group: "North Region",
          neighbourhood: "Woodlands",
          latitude: 1.44255,
          longitutde: 103.7958,
          room_type: "Private Room",
          price: 83
        },
        {
          name: "Bukit Timah",
          host_name: "Sujatha",
          neighbourhood_group: "Central Region",
          neighbourhood: "Bukit Timah",
          latitude: 1.33235,
          longitutde: 103.78521,
          room_type: "Private Room",
          price: 81
        }
      ],
      items: [
        {
          name: "COZICOMFORT",
          host_name: "Francesca",
          neighbourhood_group: "North Region",
          neighbourhood: "Woodlands",
          latitude: 1.44255,
          longitutde: 103.7958,
          room_type: "Private Room",
          price: 83
        },
        {
          name: "Bukit Timah",
          host_name: "Sujatha",
          neighbourhood_group: "Central Region",
          neighbourhood: "Bukit Timah",
          latitude: 1.33235,
          longitutde: 103.78521,
          room_type: "Private Room",
          price: 81
        }
      ]
    };
  }

  filterList = event => {
    let items = this.state.initialItems;
    console.log(items);
    items = items.filter(item => {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: items });
  };

  async componentDidMount() {
    try {
      const get_api = "http://localhost:8080/api/singapore-listings";
      const res = await axios.get(get_api);
      console.log(res.data);
      this.setState({
        initialItems: res.data,
        items: res.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;
    console.log(currentSort);

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    this.setState({
      currentSort: nextSort
    });
  };

  render() {
    const { currentSort } = this.state;

    return (
      <div className="home-page">
        <div className="table-container">
          <div>
            <input
              type="text"
              placeholder="Search Name..."
              onChange={this.filterList}
            />
          </div>
          <header>
            <h3>List of Hotels</h3>
          </header>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Host Name</th>
                <th>Neighbourhood group</th>
                <th>Neighbourhood</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Room Type</th>
                <th>
                  Price
                  <button onClick={this.onSortChange}>
                    <i className={`fas fa-${sortTypes[currentSort].class} fa-xs`}></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.sort(sortTypes[currentSort].fn).map(item => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.host_name}</td>
                    <td>{item.neighbourhood_group}</td>
                    <td>{item.neighbourhood}</td>
                    <td>{item.latitude}</td>
                    <td>{item.longitude}</td>
                    <td>{item.room_type}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}