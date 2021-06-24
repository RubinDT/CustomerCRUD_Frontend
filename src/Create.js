import React from 'react';
import InterfaceLayout from "./InterfaceLayout";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
        }
    }

    submitInfo() {
        console.log("submitInfo called")
        let body = JSON.stringify({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
        })
        console.log("body made" + body)
        fetch('http://localhost:8080/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log('Success:', data);
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

    render() {
        return (
            <div>
                <div>
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
                            console.log("submit info button clicked")
                            this.submitInfo()

                        }
                    }
                    >Submit Info
                    </button>
                </div>

            </div>
        )

    }

}

export default Create