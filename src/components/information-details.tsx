import React from 'react'

export const InformationDetails = () => {
    const fileUpload = () => {
        const el = document.getElementById('file')
        if (el) el.click()
    }
    return <div className="information-content-more">
        <h6>DETAILS</h6>
        <p>Please help us find missing 14 year old savvanah Smith who was last seen with her
            friend at Zilkder park on Monday August 21st at 4:45pm, savvanah was wearning a red sweatshirt and black
            pants
            and has not been seen for over 1 day.
        </p>
        <h6>INSTRUCTIONS</h6>
        <p>
            Here are the instructions that can be included. Please call 911 fro more information
        </p>
        <h6>
            ATTACHMENTS
        </h6>
        <div className="information-content-file">
            <div className="d-flex" onClick={fileUpload}>
                <img src={require('../images/img2.png')} height="20px" width="20px" alt="" className="img-fluid"/>
                <input type="file" id='file' hidden={true}/>
                <span>Missing_Flyer.pdf</span></div>
        </div>

    </div>
}