import React, {Component} from 'react';

class EditExpense extends Component {
    render() {
        return (
            <main>
                <p>This is Edit Page</p>
                <p>ID is : {this.props.match.params.id} </p>
            </main>
        )
        
    }
}


export default EditExpense;