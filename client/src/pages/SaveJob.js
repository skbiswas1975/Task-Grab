import React, { Component } from "react";
import API from "../utils/API";

import Form from "../components/JobPost/index"


class SaveJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postedDetails: {
            jobTitle: "",
            jobDescription: "",
            jobPrice: 30000
          },
          jobs: []
        };
      }
    
      handleChange = e => {
          //console.log(e.target);
        const { name, value } = e.target;
        
    
        this.setState(prevState => ({
            postedDetails: { ...prevState.postedDetails, [name]: value }
        }));
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.setState(prevState => ({
          jobs: [...prevState.jobs, prevState.postedDetails],
          postedDetails: { jobTitle: "", jobDescription: "", jobPrice: 30000 }
        }));

        console.log(this.postedDetails)

        API.postJob(this.postedDetails)
            .then(this.setState({ message: alert("Your job has been posted") }))
            .catch(err => console.log(err))
      };
    
      render() {
        return (
          <div className="App">
            
            <Form
              handleChange={this.handleChange}
              postedDetails={this.state.postedDetails}
              handleSubmit={this.handleSubmit}
            />
            <div className="post-container">
              <ul>
                {this.state.jobs.map((job, index) => (
                  <li key={index}>
                    <ul className="post-tile">
                      <li className="post-tile-name">{job.jobTitle}</li>
                      <li className="post-tile-description">{job.jobDescription}</li>
                      <li className="post-tile-salary">${job.jobPrice}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      }


}

export default SaveJob