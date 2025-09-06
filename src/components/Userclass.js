import React from "react";
class Userclass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0, 
            userInfo: {
                name: "Rumi",
                location: "India"
            }
        };
        console.log("Child - Constructor");
    }

    async componentDidMount() {
        //API call here
        const data = await fetch("https://api.github.com/users/shaileshpb");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
        console.log("Child - Did Mount ");
    }

    render() {
        console.log("Child - Render");
        return (
        <div>
            <img src={this.state.userInfo.avatar_url} alt="Avatar" style={{width: "100px"}}/>
            <h2>User Class Component {this.state.userInfo.name}</h2>
            <h1> Counter: {this.state.counter}</h1>
            <button onClick={() => {
                this.setState({
                    counter: this.state.counter + 1
                });
            }}>Increase</button>
            <p>This is a class-based component.</p>
        </div>
        );
    }
}
export default Userclass;