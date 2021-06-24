import React from "react";

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: 0,
        }
    }
    setID(id){
        this.setState({customerId:id})
    }
    deleteCustomer(customer){
        fetch('http://localhost:8080/delete/' + this.state.customerId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response)
            return response.text()
        }).then(data => {
            console.log('Success:', data);
        })
    }


    render() {
        return (
            <div>
                <input type="text" onChange={
                    (event) => {
                        this.setID(event.target.value) //delete customer by ID; grab from MongoDB via CLI
                    }}/>

                <button onClick={() => this.deleteCustomer(this.state.id)}>Delete Customer</button>
            </div>
        )
    }
}

export default Delete