import React from "react";


class Purge extends React.Component{

    purgeAll(){
        fetch('http://localhost:8080/purge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                age:this.state.age,
            })
        }).then(response => response.json()).then(data => {
            console.log('Success:', data);
        })
    }

    render(){
        return(
            <div>
                <button onClick={
                    this.purgeAll()
                }>Confirm: Purge All Records</button>
            </div>



        )
    }

}

export default Purge