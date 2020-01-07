import React, { Component } from 'react';
import Axios from 'axios';
import Module from './moduleComponent';

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            modules: [],
            currentModule: 0
        }
    }

    previousModule = ()=>{
       if(this.state.currentModule>0){ 
            this.setState({
                currentModule: this.state.currentModule-1
            })
       }
    }
    // data.courseDetails.userModuleDetailsV2

    nextModule =() =>{
       if(this.state.currentModule<9){ 
            this.setState({
                currentModule: this.state.currentModule+1
            })
       }
    }

    componentDidMount(){
        Axios.post('https://stgapi.omnicuris.com/api/v2/course/userCourseDetails/clinical-nutrition',{
            accessToken: "78905c92-1ea8-49c0-8649-9b517b662c2c"
        })
        .then(response => {
            console.log(response);
            this.setState({
                modules : response.data.courseDetails.userModuleDetailsV2
            });

        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return (
            <>
                <button className="btn btn-success float-left" onClick={this.previousModule}>Previous</button>
                <button className="btn btn-success float-right" onClick={this.nextModule}>Next</button>
                {this.state.modules.length>0 ? <Module module={this.state.modules[this.state.currentModule]}/> : null }             
            </>
        )
    }

}




export default Main;