import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "../assets/me-telice-pelo.jpg";
import img2 from "../assets/me-pernambues.jpg";
import img3 from "../assets/me-lucas-walking-pernambues.jpg";

class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Convergeance" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Continuation" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Conspiracy" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;