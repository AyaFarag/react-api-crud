import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class List extends Component {

    state= {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render(){   
        let x = this.state.posts;
    return(
        <div>
            <h4>Posts List </h4>
            <table className="table" >
                    <thead className="thead-dark">
                        <tr>
                            <td>Title</td>    
                            <td>Body</td>  
                            <td>Action</td>    
                                
                        </tr>
                    </thead>    
                    <tbody>
                        {x.map((post) => 
                            <React.Fragment key={post.id}>
                                <tr >
                                    <td>{post.title}</td>
                                    <td>{post.body} </td>
                                    <td>
                                        <button className="btn btn-success btn-sm">edit</button>
                                        <button className="btn btn-danger btn-sm">delete</button>
                                    </td>   
                                </tr>
                            </React.Fragment>
                        )}

                    </tbody>
            </table>
        </div>
    )
   }

}

export default List;