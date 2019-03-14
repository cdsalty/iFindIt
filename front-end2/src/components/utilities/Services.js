import React, { Component } from 'react';
import "../css/search.css";


class Services extends Component {

    constructor() {
        super()
        this.state = {
            imagePath: ""
        }
    }





    render() {
        const splitArray = this.props.service.split("")
        // console.log(splitArray[0])
        let imagePath = ""
        let number = ""
        if (splitArray[0] === "Y") {
            imagePath = "youtube.png"
            number = "1"
        } else if (splitArray[0] === "A") {
            imagePath = "prime.png"
            number = "1"
        } else if (splitArray[0] === "V") {
            imagePath = "vudu.png"
            number = "1"
        } else if (splitArray[0] === "i") {
            imagePath = "itunes.png"
            number = "3"
        } else if (splitArray[0] === "G") {
            imagePath = "googlePlay.png"
            number = "2"
        } else if (splitArray[0] === "S"){
            imagePath = "starz.png"
            number = "2"
        }else {
            imagePath = "generic.png"
            number = "2"

        }
        const logoSize = `serviceLogo${number}`
        const logo = `/images/${imagePath}`

        // console.log(this.props.service)
        return (

            <div className="card d-flex justify-content-center">
                <img className={logoSize} src={logo} alt='streaming service logo' />
                <div className="row d-flex justify-content-center">
                    <div className="mt-3">
                        <p>{this.props.service}</p>
                    </div>
                </div>
            </div>

        )
    }
}


export default Services;