import React,{Component} from 'react'

// REACTSTRAP
import { Button } from 'reactstrap';

// CSS
import from './Author.css'

// const FollowButton = (props) => {
//     return (
//       <div>
//         <Button outline color="success">success</Button>{' '}
//       </div>
//     );
//   } Comentar a David

// Comentar a David si deben de ir dentro de un tag
// FollowButton
class Author extends Component{
    constructor(props){
        super(props)
        this.state = {
            post: {}
        }
    }
    render(){
        return (
            <div className="author">
                <img src="https://source.unsplash.com/random/200x200" alt="" />
                <p>{this.state.name} {this.state.lastName}</p>
                <h1><Button outline color="success">Follow</Button>{' '}</h1> 
                <p>{this.state.date} &#183; {this.state.timeToRead} &#9733;</p>
            </div>
        )
    }
}

export default Author
