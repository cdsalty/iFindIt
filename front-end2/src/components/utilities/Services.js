import React, { Component } from 'react';
import "../css/services.css";

class Services extends Component{

    constructor(){
        super()
        this.state = {
            imagePath: ""
        }
    }

    
    


    render(){
        const splitArray = this.props.service.split("")
        // console.log(splitArray[0])
        let imagePath = ""
        if(splitArray[0] === "Y"){  
            imagePath = "youtube.png"
        }else if(splitArray[0] === "A"){
            imagePath = "prime.png"
        }else if(splitArray[0] === "V"){
            imagePath = "vudu.png"
        }else if(splitArray[0] === "i"){
            imagePath = "itunes.png"
        }else if(splitArray[0] === "G"){
            imagePath = "googlePlay.png"
        }else {
            imagePath = "generic.png"
        }

        const logo = `/images/${imagePath}`

        // console.log(this.props.service)
        return(
            <div>
                <img className="serviceLogo" src={logo} alt='streaming service logo'/>
                {this.props.service}
            </div>
        )
    }
}


export default Services;