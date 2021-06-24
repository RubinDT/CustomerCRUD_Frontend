import React from "react";

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: "",
            firstName: "",
            lastName: "",
            age: 0,
        }
    }

    handleCustomerId(id) {
        this.setState({
            customerId: id,
        })
    }

    handleFirstNameInput(name) {
        this.setState({
            firstName: name,
        })
    }

    handleLastNameInput(name) {
        this.setState({
            lastName: name,
        })
    }

    handleAgeInput(age) {
        this.setState({
            age: age,
        })
    }

    updateInfo() {
        let body = JSON.stringify({
            customerId:this.state.customerId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        })
        console.log("body of updateInfo is " + body)
        fetch("http://localhost:8080/update",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:body
            }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log('Success:', data);
        })
    }

    render() {

        return (
            <div>
                <div>
                    <input type="text" onChange={(event) => {
                        this.handleCustomerId(event.target.value)
                    }}></input>
                    <input type="text" onChange={(event) => {
                        this.handleFirstNameInput(event.target.value)
                    }}></input>
                    <input type="text" onChange={(event) => {
                        this.handleLastNameInput(event.target.value)
                    }}></input>
                    <input type="text" onChange={(event) => {
                        this.handleAgeInput(event.target.value)
                    }}></input>

                </div>

                <div>
                    <button onClick={
                        () => {
                            console.log("update info button clicked")
                            this.updateInfo()

                        }
                    }
                    >Update Customer
                    </button>
                </div>

            </div>


        )
    }

}

export default Update