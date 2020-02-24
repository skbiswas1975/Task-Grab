import React, { Component } from "react";
import {Row, Col} from "../Grid";
import posts from '../LocalPosts/posts';

/*
class SavedJobs extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }

    render() 
    {
        const {posts} = this.state;
        return(
                <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Jobs that You Created</h3>
                        {console.log("got result")}
                        {posts.map(post => {
                            return (post.ResponseStatus==="accepted")?
                            (
                                <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button className="acceptBook btn btn-success">
                                            Confirm
                                        </button>
{" "}
                                        <button className="acceptBook btn btn-danger">
                                            Decline
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                            )
                             :
                            (
                             (post.ResponseStatus==="confirmed")?
                                (
                                <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button class="btn btn-default" disabled="disabled">
                                            Work already started
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                                )
                                :
                                (
                                    <div class="col-lg-12 bottom-pad">
                                        <div class="row no-gutters">
                                    <Row className="SearchResult row" id={post.jobId + "Card"} key={post._id}>
                                        
                                        <div class="col-md-1">
                                        </div>
                                        <div class="col-md-11" style={{"padding-bottom":"30px"}}>
                                            <div class="card-body">
                                            <Row>
                                                <h3 className="jobTitle">{post.jobTitle}</h3>
                                            </Row>
                                            <Row>
                                                {"Posted by: "+post.jobPoster}{" / "}{"Job price: $"+post.jobPrice}
                                            </Row>
                                            <br />
                                            <Row>
                                                {post.jobDescription}
                                            </Row>
                                            </div>
                                            <br />
                                        <button className="acceptBook btn btn-primary">
                                            Accept job
                                        </button>
                                        
                                        </div>
                                        
                                    
                                    </Row>
                                </div>
                                </div>
                                )
                                );
                        })}
                    </div>
                </div>
                </div>
        );
        

*/

        const SavedJobs = props => {
            return (
                console.log (props.savedJobs),
                props.savedJobs.length === 0) ? (
                
                <div className="card">
                {console.log("length 0")}
                    <div className="card-body player">
                        <div className="article">
                            <h3>No Saved Jobs</h3>
                        </div>
                    </div>
                
                </div>
            ):(
                <div className="card">
                    <div className="card-body player">
                        <div className="article">
                            <h3>Jobs that You Created</h3>
                            {console.log("got result")}
                            {props.savedJobs.map(savedjob => {
                                return (savedjob.jobStatus==="accepted")?
                                    (
                                     <div class="col-lg-12 bottom-pad">
                                                <div class="row no-gutters">
                                            <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                
                                                <div class="col-md-1">
                                                </div>
                                                <div class="col-md-11">
                                                    <div class="card-body">
                                                        <Row>
                                                            <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                        </Row>
                                                        <Row>
                                                            {"Posted by: "+savedjob.jobPoster}{" / "}{"Job price: $"+savedjob.jobPrice}
                                                        </Row>
                                                        <br />
                                                        <Row>
                                                            {savedjob.jobDescription}
                                                        </Row>
                                                        </div>
                                                        <br />
                                                    </div>
                                                <br></br>
                                                <button className="deleteBook btn btn-success" id={savedjob._id} onClick={() => props.handleDeleteButton(savedjob._id)}>
                                                    Confirm
                                                </button>
                                                <button className="deleteBook btn btn-danger" id={savedjob._id} onClick={() => props.handleDeleteButton(savedjob._id)}>
                                                    Decline
                                                </button>
                                            </Row>
                                        </div>
                                        </div>
                                    )
                                    :
                                    (
                                        (savedjob.jobStatus==="confirmed")?
                                            (
                                                <div class="col-lg-12 bottom-pad">
                                                        <div class="row no-gutters">
                                                    <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                        
                                                        <div class="col-md-3">
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                <Row>
                                                                    <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                                </Row>
                                                                <Row>
                                                                    {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                                </Row>
                                                                <br />
                                                                <Row>
                                                                    {savedjob.jobDescription}
                                                                </Row>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        <br></br>
                                                        <button className="deleteBook btn btn-default" disabled="disabled" id={savedjob._id} onClick={() => props.handleDeleteButton(savedjob._id)}>
                                                            Job already started
                                                        </button>
                                                    </Row>
                                                </div>
                                                </div>
                                            )
                                                :
                                            (
                                                <div class="col-lg-12 bottom-pad">
                                                        <div class="row no-gutters">
                                                    <Row className="SearchResult row" id={savedjob.jobTitle + "Card"} key={savedjob._id}>
                                                        
                                                        <div class="col-md-3">
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                <Row>
                                                                    <h3 className="jobTitle">{savedjob.jobTitle}</h3>
                                                                </Row>
                                                                <Row>
                                                                    {"Posted by: " + savedjob.jobPoster}{" / "}{"Job price: $" + savedjob.jobPrice}
                                                                </Row>
                                                                <br />
                                                                <Row>
                                                                    {savedjob.jobDescription}
                                                                </Row>
                                                                </div>
                                                                <br />
                                                            </div>
                                                        <br></br>
                                                        <button className="deleteBook btn btn-primary" id={savedjob._id} onClick={() => props.handleDeleteButton(savedjob._id)}>
                                                            Accept Job
                                                        </button>
                                                    </Row>
                                                </div>
                                            </div>
                                        )
                                    );
                                
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    

/*
    }}
*/

export default SavedJobs