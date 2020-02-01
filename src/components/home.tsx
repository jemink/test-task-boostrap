import React from 'react'
import {Header} from "./header";
import GoogleMap from './map'
import {Slider} from './slider'
import {InformationHeading} from './information-heading'

let style: any = {}

export class Home extends React.Component<any, any> {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const el = document.getElementById('map')
            if (el) {
                const notif = document.getElementById('notification')
                if (window.pageYOffset >= 350) {
                    if (notif) notif.setAttribute('class', 'scroll-infor-title')
                } else {
                    if (notif) notif.removeAttribute('class')
                }
            }
        })

    }

    render() {
        return <React.Fragment>
            <div style={{...style}} id="wrapper_content">
                <div id='notification'>
                    <div className="small-drawer-icon"></div>
                    <h1 className="mb-0">Help us find missing 14 year old Savvanah Smith last seen at Zilker Park</h1>
                    <span>
                         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 16.5L16.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M1.5 1.5L16.5 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            </svg>
                    </span>
                </div>
            </div>
            <Header/>
            <section className="alert-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" id='map'><GoogleMap/></div>
                        <div className="col-md-6" id='heading-info'><InformationHeading/></div>
                        <div className="col-md-3"><Slider/></div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    }
}