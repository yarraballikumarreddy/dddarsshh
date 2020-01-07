import React, { Component } from 'react'

class Module extends Component{
    constructor(props){
        super(props);
        this.state={
            module 
        }
    } 
    

    static getDerivedStateFromProps(props,state){

        return {
            module: props.module
        }
    }

    render(){
        setInterval(() => {
            console.log(this.state.module)
        }, 5000);
        // console.log(this.props.module.title)
        // console.log(this.props.module)
         
        return (
            <div className="container">
                <ul className="nav justify-content-center navbar-dark bg-primary">
                <li className="nav-item">
                    <h2 className="nav-link active " >{this.state.module.title}</h2>
                </li>
                </ul>
                <div className="row">
                    <h2><label  className="col-sm-2 col-form-label">Description:</label></h2>
                    <div className="col-sm-10">
                    <label ><h3>{this.state.module.name}</h3></label>
                </div>
                </div>
                {/* <div className="card w-75"> */}
                {/* <div className="card-body"> */}
                    {/* <h5 className="card-title">Card title</h5> */}
                    {/* <p className="card-text">{this.state.module.userLessonDetails[0].userChapterDetails[0].chapter.content}</p> */}
                {/* </div> */}
                {/* </div> */}
                <div>
                    <video controls src={this.state.module.userLessonDetails[0].userChapterDetails[0].chapter.content}><source ></source></video> 
                </div>      
            </div>
        );
    }
}



export default Module;