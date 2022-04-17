import React from "react";
import TrackList from '../TrackList/TrackList'
import './Recommendations.css'

class Recommendations extends React.Component {
    render() {
        return (
            <div className="Recommendations">
              <h2>Recommendations</h2>

              <TrackList 
                 tracks={this.props.recommendations} 
                 onAdd={this.props.onAdd} 
                 isRemoval={false}/> 
            </div>
        )
    }
}

export default Recommendations