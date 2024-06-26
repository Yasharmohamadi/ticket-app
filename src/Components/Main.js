import React from "react";
import './Main.css'

export default class Main extends React.Component {
    constructor (props) {
        super(props)

        this.state = {

        }


    }

    render () {
        return (
            <div className="container">
            <div className="box">
                <input id="first_input" className="input" placeholder="First Name..." />
            </div>
            <div className="box">
                <input id="last_input" className="input" placeholder="Last Name..." />
            </div>
            <div className="box">
                <input id="phone_input" className="input" placeholder="+98..." />
            </div>
            <div className="box">
                <input id="email_input" className="input" placeholder="email@gmail.com" />
            </div>
            <div  className="box">
                <select id="countries" className="select_box box">
                    <option value="not_selected">Please Select...</option>
                    <option className="option" value="Iran">Iran</option>
                    <option className="option" value="USA">United States</option>
                    <option className="option" value="UK">United Kingdom</option>
                </select>
            </div>
            <div  className="box">
                <select id="cities" className="select_box box">
                    <option value="not_selected" >Please Select...</option>
                </select>
            </div>
            <div  className="box">
                <button className="btn">Buy the Ticket</button>
            </div>
        </div>
        )
    }
}