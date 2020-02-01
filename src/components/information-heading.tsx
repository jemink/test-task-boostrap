import React from 'react'
import {InformationDetails} from './information-details'
import SliderComponent from "./slider-component";

export const InformationHeading = () => {
    return <React.Fragment>
        <div className="information-block h-100">
            <div className="information-head">
                <div className="small-drawer-icon"></div>
                <div className="infor-head d-flex justify-content-between">
                    <div>
                        <h6 className="mb-0">Extreme Alert</h6>
                        <p className="mb-0">~2 miles away</p>
                    </div>
                    <div>
                        <span>6 hours ago</span>
                    </div>
                </div>
                <div className="infor-title">
                    <h1>Help us find missing 14 year old Savvanah Smith last seen at Zilker Park</h1>
                    <p className="pb-0"><img height="40px" width="40px" src={require('../images/img1.png')} alt="logo"
                                             className="img-fluid img-austin"/>Austin Police Department</p>
                </div>
            </div>
            <div className="information-content">
                <div className="slider-mob-display"><SliderComponent/></div>
                <InformationDetails/>
            </div>
        </div>
    </React.Fragment>
}