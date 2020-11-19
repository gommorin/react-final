import React,{Component} from 'react'

// REACTSTRAP
import { Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            avatar:"",
            name:"Lucho",
            lastName:"Cachetadas",
            date:"18/11/20",
            timeToRead:"8 min",
            popular:false,
            dropdownOpen: false
        }
    }

    toggle = () => {
        const { dropdownOpen } = this.state
        this.setState({dropdownOpen: !dropdownOpen})
    }

    render(){
        const { dropdownOpen } = this.state
        return (
            <div className="container">
                <div className="container-left">
                    <img className="avatar" src="https://source.unsplash.com/random/200x200" alt="" />
                    <div className="info">
                        <div className="author">
                            {this.state.name} {this.state.lastName}
                            <Button className="btn" outline color="success">Follow</Button>{' '}
                        </div>
                        <div className="post-details">
                            {this.state.date} &#183; {this.state.timeToRead} &#9733;
                        </div>
                    </div>
                </div>
                <div className="container-right">
                    <img className="social-button" src="#" alt="" />Twitter
                    <img className="social-button" src="#" alt="" />Linkedin
                    <img className="social-button" src="#" alt="" />Facebook
                    <img className="bookmark" src="#" alt="" />Bookmark
                    <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            ...
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div> 
            </div>
        )
    }
}

export default Author