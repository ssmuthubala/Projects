import React from 'react'
import { NavLink } from 'react-router-dom'
// import video from './Videos/REC Cultural 2018 Montage Video.mp4';
import video from '../Videos/REC Cultural 2018 Montage Video.mp4'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <div style={{display:'flex',paddingBottom:'50vh'}}>
           <div style={{width:'35vh'}}>
            
           </div>

           <div style={{display:"block",textAlign:'center',backgroundColor:'whitesmoke',padding:'70px 24px 20px 24px',width:'128vh'}} >
              <a>Trending Videos</a>
              <div style={{display:'table-cell',padding:'0vh 0vh 0vh 33vh'}}>
                <div style={{padding:'2px'}}>
                 <iframe width="355" height="230" src="https://www.youtube.com/embed/aP7qPDeoIv0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <ReactPlayer
                  style={{width: '61vh'
                  }}
                  url={video}
                  className='react-player'
                  width='60vh'
                  height='35vh'
                  controls
                 />
                  <ReactPlayer
                  style={{width: '61vh'
                  }}
                  url={video}
                  className='react-player'
                  width='60vh'
                  height='35vh'
                  controls
                 />
                  <ReactPlayer
                  style={{width: '61vh'
                  }}
                  url={video}
                  className='react-player'
                  width='60vh'
                  height='35vh'
                  controls
                 />
              </div>
              
           </div>
           <div style={{width:'35vh'}}></div>
          </div>
  )
}

export default VideoPlayer
