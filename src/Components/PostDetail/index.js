import React,{Component} from 'react'
import Author from '../Author'

// CSS
import './PostDetail.css'

class PostDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"",
            // subtitle:"", David
            author:"",
            summary:"",
            img:"",
            content:""
        }
    }

    render(){
        return (
            <Container className="themed-container" fluid="md">
                <Row>
                    <Col className="title-subtitle">
                        <h1>Title</h1>
                        <h4>Subtitle</h4>
                    </Col>
                </Row>
                <Author />
                <Row className="content">
                    <Col className="col">
                        <img className="w-100 mb-5" src="https://source.unsplash.com/random/800x500"/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Consectetur aliquid voluptas accusamus, explicabo odit minima
                                nostrum ex quia quod sapiente. Iste placeat veritatis nesciunt
                                repellat laboriosam ducimus ipsam vitae officia. Ipsa alias
                                doloremque perferendis autem doloribus quisquam nesciunt!
                                Exercitationem, blanditiis hic?
                            </p>
                            <p>
                                Vero libero corrupti quam quide facere, sunt incidunt provident et
                                doloribus magnam qui enim molestias praesentium tempore maxime, a
                                quibusdam nihil aspernatur exercitationem esse? Reiciendis, quam!
                                Officiis perferendis commodi aut. Facere quod atque alias
                                exercitationem ducimus in voluptatum at, qui deleniti id et aliquid
                                nam, dolorum quidem autem modi incidunt porro delectus? Minus, quam
                                provident.
                            </p>
                            <p>
                                Atque fugit earum dolorum recusandae aliquid assumenda, perferendis
                                nobis reiciendis impedit, eius accusantium eaque modi sint ab, ut
                                dolor amet incidunt blanditiis placeat quas tempore illo nihil!
                                Nobis, veritatis ipsa obcaecati aut suscipit consequatur maiores
                                nesciunt deleniti at officia, quo recusandae corrupti culpa
                                architecto ducimus cum accusamus. Illo nesciunt exercitationem
                                repellat inventore dicta sint?
                            </p>
                        </Col>
                    </Row>

                <Container>
                    <Row>
                        <Col xs="6" className="popularity">
                            <div className="claps">
                                <a href="https://">
                                    <svg className="icon" aria-label="clap">
                                        <path
                                            fill="#000000"
                                            d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"
                                        ></path>
                                    </svg>
                                </a>
                                <p>66</p>
                            </div>
                            <div className="comments">
                                <a href="https://">
                                    <svg className="icon" aria-label="responses">
                                        <path
                                            fill="#000000"
                                            d="M19.07 21.12a6.33 6.33 0 0 1-3.53-1.1 7.8 7.8 0 0 1-.7-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.66 0 8.46 3.5 8.46 7.8 0 2.06-.85 3.99-2.4 5.45a6.28 6.28 0 0 0 1.14 2.59c.15.21.17.48.06.7a.69.69 0 0 1-.62.38h-.03zm0-1v.5l.03-.5h-.03zm-3.92-1.64l.21.2a6.09 6.09 0 0 0 3.24 1.54 7.14 7.14 0 0 1-.83-1.84 5.15 5.15 0 0 1-.16-.75 2.4 2.4 0 0 1-.02-.29v-.23l.18-.15a6.6 6.6 0 0 0 2.3-4.96c0-3.82-3.4-6.93-7.6-6.93-4.19 0-7.6 3.11-7.6 6.93 0 3.83 3.41 6.94 7.6 6.94.83 0 1.64-.12 2.41-.35l.28-.08z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <p>20</p>
                            </div>
                        </Col>
                        <Col xs="6" className="social-media">
                            <a href="https://">
                                <svg className="icon">
                                    <path
                                    fill="#757575"
                                    d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://">
                                <svg className="icon">
                                    <path
                                    fill="#757575"
                                    d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"
                                    ></path>
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
                                    fill="#fff"></path>
                                </svg>
                            </a>
                            <a href="https://">
                                <svg className="icon">
                                    <path
                                    fill="#757575"
                                    d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://">
                                <svg className="icon">
                                    <path
                                    fill="#757575"
                                    d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"
                                    fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                            <div className="dropdown">
                                <a href="https://">
                                    <svg className="icon">
                                        <path
                                            fill="#757575"
                                            d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default PostDetail
