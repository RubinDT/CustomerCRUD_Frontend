import React from 'react';

class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            firstName: "",
            lastName: "",
            age: ""
        }
    }

    getCustomer() {
        fetch('http://localhost:8080/read/' + this.state.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response)
            return response.json()
        }).then(data => {
            console.log('Success:', data)
            this.setFirstName(data.firstName)
        })
    }

    setFirstName(name) {
        this.setState({firstName: name})
    }

    setID(id) {
        this.setState({id: id})
    }

    render() {
        return (
            <div>
                <input type="text" onChange={
                    (event) => {
                        this.setID(event.target.value)
                    }}/>

                <button onClick={() => this.getCustomer()}>Retrieve Customer</button>
                <div>
                    {
                        (this.state.firstName && this.state.firstName)
                    }
                </div>
            </div>

        )
    }


}

export default Read