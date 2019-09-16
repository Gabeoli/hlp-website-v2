import React, { Component } from 'react'


class Location_ID extends Component {
	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
			location: "",
			conversation: "",
			players: "",
			player_messages: ""
    };
  }

  componentDidMount() {
    fetch("https://hello-lamp-post-api.herokuapp.com/locations/58")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            location: result.location_id,
						conversation: result.conversations,
						players: result.players,
						player_messages: result.player_messages
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
		const { error, 
						isLoaded, 
						location, 
						conversation, 
						players, 
						player_messages 
					} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
            <li key={location}>
              {conversation}
            </li>
						<li>
							{players}
						</li>
						<li>
							{player_messages}
						</li>
        </ul>
      );
    }
  }
}

export default Location_ID