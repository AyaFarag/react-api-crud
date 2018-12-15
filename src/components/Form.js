import React, { Component } from 'react';
import '../style/form.css';



class Form extends Component {

    state ={
        posts: [
            {
                title: '',
                body: ''
            }
        ]
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handelSubmit = (e) => {
        e.preventDefault()
        this.props.addposts(this.state)
        this.setState({
            title: '',
            body: '',
        })

    }


    render(){
        return(
            <div className="addform">
                <label> Add New Post </label>

                <form onSubmit={this.handelSubmit}>
                    
                    <div className="form-group">
                        <input type="text" placeholder="title" className="form-control" onChange={this.handelChange} value={this.state.title}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="body"  className="form-control" onChange={this.handelChange} value={this.state.body} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-info btn-sm" value="Add" />
                    </div>

                </form>
            </div>

        )
    }
}


export default Form;

