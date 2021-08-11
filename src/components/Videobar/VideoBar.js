import React from 'react'
import './VideoBar.css'
import video from '../VideoCollection/Fayl.mp4'

function VideoBar() {
    return (
        <div className="videobar">
            <div className="videoSection first">
                <video src={video} muted loop className="addVideo" autoCapitalize></video>
                <h3>Night Lovell <br /> <span>Mary Jane</span></h3>
                <button className="video__btn">Watch Triller</button>
            </div>
            <div className="videoSection second">
                <div className="main__video">
                    <ul className="video__collect__f">
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                    </ul>
                    <ul className="video__collect__s">
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                        <li className="videoCollectioItem"></li>
                    </ul>
                </div>
                <div className="main__videoItem"></div>
            </div>
        </div>
    )
}

export default VideoBar
