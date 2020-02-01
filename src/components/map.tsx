import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng, text }: { lat: number, lng: number,text: string}) => <div>{text}</div>;

interface Props {
    center: {
        lat: number,
        lng: number
    };
    zoom: number;
}
    class GoogleMap extends Component<Props, {}> {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        const { center, zoom } = this.props
        return (
            <div style={{ height: '100%', width: '100%' }} className="map-display">
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'' }}
                    defaultCenter={center || {}}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;