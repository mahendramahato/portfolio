import React from 'react'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

export const Portfolio = () => {
    return (
        <div className="container-fluid">

            {/* // head part */}
            <div className="container-fluid profile gradient-custom" style={{height: 'auto', paddingTop: 120, paddingBottom:120}}>
                
                <div className="row">
                    <div className="col top">
                        <div className="card front-face">
                            <img src="./images/profile.png"/>
                        </div>
                        <div className="card back-face">
                            <img src="./images/profile.png"/>
                            <div className="info">
                                <div className="title">
                                    Mahendra Mahato
                                </div>
                                <p>Student<br/>
                                <img style={{height: 40, width: 40}} src="./images/envelope-fill.svg"/>mahendramahato33@gmail.com <br/>
                                <img style={{height: 40, width: 40}} src="./images/telephone-fill.svg"/>337 322 9541 <br/>
                                <img style={{height: 40, width: 40}} src="./images/address.svg"/>301 Bells Down Dr <br/>
                                Lafayette, LA, 70506
                                </p>
                            </div>
                            <ul>
                                <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                                <a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                                <a href="https://www.gmail.com"><i className="fab fa-google"></i></a>
                                <a href="https://github.com/mahendramahato"><i className="fab fa-github"></i></a>
                            </ul>
                        </div>                    
                    </div>
                </div>

            </div>  

            {/* // about me     */}
            <div className="container-fluid about" style={{height: 'auto', background: 'lavender', paddingTop: 120, paddingBottom:120}}>
                <div className="row" style={{alignItems: 'center'}}>
                    <div className="col">
                        <img src="./images/about.png" alt="about me" />
                    </div>

                    <div className="col">
                        <h1>About Me</h1>
                        <p className="fw-normal">Hello, I'm Mahendra. I am Undergraduate student currently 
                            majoring in Computer Science  at University of Louisiana at Lafayette. 
                        </p>
                        <button type="button" className="btn btn-success" style={{borderRadius: 20}}>
                            Download CV
                            <img src='./images/download.png' alt="download"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Education and work experience */}
            <div className="container-fluid px-4" style={{height: 'auto', background: 'wheat', paddingTop: 10, paddingBottom:110}}>
                <div className="row text-center" style={{display: 'flex'}}>

                    <div className="col-md-6">
                        <div className="col-md-12">
                        <h1 style={{paddingTop: 40}}>Education</h1>

                        <div className="row education">
                            <div className="col">
                                <div className="card">
                                    <img src="./images/ull.jpg" alt="ull" />
                                </div>  
                            </div>
                            <div className="col">
                                <div className="card shadow" style={{background: 'mediumturquoise'}}>
                                    <div className="card-body text">
                                        <h4 className="card-title">University of Louisiana at Lafayette</h4>
                                        <p className="card-text">2019 - Present</p>
                                        <p className="card-text">Bachelor's Degree</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row education">
                            <div className="col">
                                <div className="card">
                                    <img src="./images/slcc.jpg" alt="slcc" />
                                </div>  
                            </div>
                            <div className="col">
                                    <div className="card shadow" style={{background: 'mediumturquoise'}}>
                                        <div className="card-body text">
                                            <h4 className="card-title">South Louisiana Community College</h4>
                                            <p className="card-text">2018 - 2019</p>
                                            <p className="card-text">Associate Degree</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="row education">
                            <div className="col">
                                <div className="card">
                                    <img src="./images/usd.jpg" alt="slcc" />
                                </div>  
                            </div>
                            <div className="col">
                                <div className="card shadow" style={{background: 'mediumturquoise'}}>
                                    <div className="card-body text">
                                        <h4 className="card-title">University of South Dakota</h4>
                                        <p className="card-text">2017 - 2018</p>
                                        <p className="card-text">Bachelor's Degree</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="col-md-12">
                            <h1 style={{paddingTop: 40}}>Work Experience</h1>
                            <div className="row work">
                                <div className="card shadow" style={{backgroundImage: `url("./images/ra.png")`}}>
                                    <div className="card-body">
                                        <h4 className="card-title">Undergraduate Research Assistant</h4>
                                        <p className="card-text text-muted">May 2022 - July 2022</p>
                                        <p className="card-text" style={{marginBottom: 'unset'}}>Responsibility:</p>
                                        <p style={{marginBottom: 'unset'}}>Work on existing GUI of simulator to make it bug free</p>
                                        <p style={{marginBottom: 'unset'}}>Implement new features in the GUI</p>
                                        <p>Help in implementing the class assignment aimed for students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  

            {/* projects */}
            <div className="container-fluid" style={{height: 'auto', background: 'lavender', paddingTop:15, paddingBottom:120}}>
                <div className="row text-center">
                    <h1 style={{paddingTop: 15}}>Projects</h1>
                </div>

                <div className="container projectbody">
                    <div className="card shadow" style={{background: 'yellowgreen'}}>
                        <div className="card-body text">
                            <h3 className="card-title">Student Management System</h3>
                            <div className="row">
                                <div className="col-md-9">
                                <p className="project1">Web application for student management implemented using <h5 className="technique">React</h5> as frontend 
                                    <h5 className="technique">Java Spring boot</h5>
                                    as backend, and <h5 className="technique">MySql</h5>as database connected via <h5 className="technique">Rest Api</h5>.</p>
                                <p>https://www.student_management.com</p>
                                </div>
                                <div className="col-md-3">
                                    <img style={{width: 100, height: 'auto'}} src="./images/student.png" alt="student"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container projectbody" style={{width: 'inherit'}}>
                    <div className="card shadow" style={{background: 'salmon'}}>
                        <div className="card-body text">
                            <h3 className="card-title">Youtube Music Clone</h3>
                            <div className="row">
                                <div className="col-md-9">
                                <p className="project1">Web application similar to youtube music implemented using <h5 className="technique">React</h5> as frontend 
                                    and <h5 className="technique">Rapid Api</h5>as api source to get data.</p>
                                <p>https://www.musicdetective.com</p>
                                </div>
                                <div className="col-md-3">
                                    <img style={{width: 100, height: 'auto'}} src="./images/music.png" alt="student"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container projectbody" style={{width: 'inherit'}}>
                    <div className="card shadow" style={{background: 'yellowgreen'}}>
                        <div className="card-body text">
                            <h3 className="card-title">Weather App</h3>
                            <div className="row">
                                <div className="col-md-9">
                                <p className="project1">Simple weather app which displays weather data of the current location of the user 
                                implemented using <h5 className="technique">Html, CSS, Javascript</h5> as frontend 
                                    and <h5 className="technique">Open Weather Api</h5>as api source to get data.Implemented as group project for CMPS 453 fall 2021.
                                </p>
                                <p>https://github.com/mahendramahato/WeatherApp</p>
                                </div>
                                <div className="col-md-3">
                                    <img style={{width: 100, height: 'auto'}} src="./images/weather.png" alt="student"/>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>

            </div>

            {/* skills */}
            <div className="container-fluid" style={{height: 'auto', background: 'wheat', paddingTop: 15, paddingBottom:70}}>
                <div className="row text-center" style={{paddingTop: 20}}>
                    <h1>Technical Skills</h1>
                </div>

                <div className="container" style={{paddingTop: 20}}>
                    <div className="card shadow" style={{background: 'yellowgreen'}}>
                        <div className="card-body" >
                            <h3>Programming Languages</h3>
                            <div className="row text-center" style={{paddingTop:10}}>
                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Java
                                            <img style={{width: 40, height: 40}} src="./images/java.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            C++
                                            <img style={{width: 40, height: 40}} src="./images/c++.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Python
                                            <img style={{width: 40, height: 40}} src="./images/python.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            C#/ .NET
                                            <img style={{width: 40, height: 40}} src="./images/net.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Javascript
                                            <img style={{width: 40, height: 40}} src="./images/javascript.png"/>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>

                <div className="container" style={{paddingTop: 20}}>
                    <div className="card shadow" style={{background: 'salmon'}}>
                        <div className="card-body">
                            <h3>Developer Tools</h3>
                            <div className="row text-center" style={{paddingTop:10}}>
                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            GitHub
                                            <img style={{width: 40, height: 40}} src="./images/github.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            VS Code
                                            <img style={{width: 40, height: 40}} src="./images/vs.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Intellij IDEA
                                            <img style={{width: 40, height: 40}} src="./images/intellij.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Unity Hub
                                            <img style={{width: 40, height: 40}} src="./images/unity.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Blender
                                            <img style={{width: 40, height: 40}} src="./images/blender.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Postman
                                            <img style={{width: 40, height: 40}} src="./images/postman.png"/>
                                        </div>
                                    </div>
                                </div>

                            </div>  
                        </div>
                    </div>
                </div>

                <div className="container" style={{paddingTop: 20}}>
                    <div className="card shadow" style={{background: 'yellowgreen'}}>
                        <div className="card-body">
                            <h3>Others</h3>
                            <div className="row text-center" style={{paddingTop:10}}>
                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            React
                                            <img style={{width: 40, height: 40}} src="./images/react.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            HTML
                                            <img style={{width: 40, height: 40}} src="./images/html.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            CSS
                                            <img style={{width: 40, height: 40}} src="./images/css.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            MySql
                                            <img style={{width: 40, height: 40}} src="./images/mysql.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card shadow">
                                        <div className="card-body" >
                                            Spring Boot
                                            <img style={{width: 40, height: 40}} src="./images/spring.png"/>
                                        </div>
                                    </div>
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>



            </div>



        </div>

    )
}
