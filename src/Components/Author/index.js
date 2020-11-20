import React,{Component} from './node_modules/react'

// REACTSTRAP
import { Button } from './node_modules/reactstrap';

// CSS
import './Author.css'

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
            // avatar:"",
            // name:"Lucho",
            // lastName:"Gomez",
            // date:"18/11/20",
            // timeToRead:"8 min",
            // popular:false,
        }
    }


    render(){
        return (
            <h1>Lucho was here</h1>
        )
        // return (
        //     <div>
        //         <img src="https://source.unsplash.com/random/200x200" alt=""/>       
        //         <h1><Button outline color="success">Follow</Button>{' '}</h1> 
        //         <p>{this.state.date} &#183; {this.state.timeToRead} &#9733;</p>
        //     <div className="container">
        //         <img className="avatar" src="https://source.unsplash.com/random/200x200" alt="" />
        //         <div className="author">
        //             <div className="follow">
        //                 <p>{this.state.name} {this.state.lastName}</p>
        //                 <h1><Button outline color="success">Follow</Button>{' '}</h1> 
        //             </div>
        //             <p>{this.state.date} &#183; {this.state.timeToRead} &#9733;</p>
        //         </div>
        //     </div>
        // )
    }
}

export default Author