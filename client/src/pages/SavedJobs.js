import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedJobs"

class SavedJobs extends Component {
    state = {
        savedJobs: []
    };

    //when this component mounts, grab all books that were save to the database 
    componentDidMount() {
        console.log("did mount")
        console.log(this.savedJobs);
        API.getTasks()
            .then(res => this.setState({ savedJobs: res.data }))
            .catch(err => console.log("failed"))
    }

    
    acceptClick = event => {
        // console.log(event)
        event.preventDefault();

        API.updateTask(updatedJobs)
            .then(this.setState({ message: alert("Your job is updated") }))
            .catch(err => console.log(err))
    }


    confirmClick = event => {
        // console.log(event)
        event.preventDefault();

        API.updateTask(updatedJobs)
            .then(this.setState({ message: alert("Your job is updated") }))
            .catch(err => console.log(err))
    }

    declineClick = event => {
        // console.log(event)
        event.preventDefault();

        API.updateTask(updatedJobs)
            .then(this.setState({ message: alert("Your job is updated") }))
            .catch(err => console.log(err))
    }

    //function to update job details by id
    handleUpdateButton = id => {
        console.log("");
        API.updateTask(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container fluid className="container">
                {console.log("before SavedResult")}
                <Container>
                {console.log("entered into container")}
                    <SavedResult savedJobs={this.state.savedJobs} handleUpdateButton={this.handleUpdateButton} />
                </Container>
            </Container>
        )
    }
}



export default SavedJobs
