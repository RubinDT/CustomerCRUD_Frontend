import React from 'react';
import Create from './Create'
import Read from './Read'
import Update from "./Update";
import Delete from "./Delete";

class InterfaceLayout extends React.Component {
//render a component based on a current state; e.g. if create is clicked, display the create interface below

    constructor(props) {
        super(props);
        this.state = {
            displayState: "default"
        }
    }

    toDisplay(crudMode) {
        this.setState({
            displayState: crudMode,
        })
    }

    render() {
        return (
            <div>

                <div>

                    <button onClick={() =>
                        this.toDisplay("Create")
                    }>Create
                    </button>

                    <button onClick={() =>
                        this.toDisplay("Read")
                    }>Read
                    </button>

                    <button onClick={() =>
                        this.toDisplay("Update")
                    }>Update

                    </button>
                    <button onClick={() =>
                        this.toDisplay("Delete")}>Delete
                    </button>

                </div>

                <div>
                    {
                        (this.state.displayState == "Create" && <Create/>) ||
                        (this.state.displayState == "Read" && <Read/>) ||
                        (this.state.displayState == "Update" && <Update/>) ||
                        (this.state.displayState == "Delete" && <Delete/>)

                    }
                </div>


            </div>
        )
    }

}

export default InterfaceLayout