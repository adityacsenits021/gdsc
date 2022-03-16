import React, { useState } from 'react'
import './Slider.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import track from '../../track'

const Slider = () => {
    const [index, setindex] = useState(0)
    const {imgSrc}=track[index]
  return (
    <>
        <div class="images-container">
        <div class="images">
        <img id="lastone" class="image" src={imgSrc} alt="" srcset=""/>
        
            
            
  
        </div>
        <div class="move">
            <div id="prev">

            <KeyboardArrowLeftIcon style={{fontSize:"30px", }} 
            onClick={()=>{
                if(index-1<0){
                    setindex(track.length-1);
                }
                else{
                    setindex(index-1)
                }
                console.log("clicked")
            }}
            />
            </div>
            <div id="ahead">

            <KeyboardArrowRightIcon style={{fontSize:"30px", }} 
            onClick={()=>{
                if(index>track.length-2){
                    setindex(0)
                }
                else{
                     setindex(index+1)
                }
                console.log("clicked")
                // console.log(index)
            }}
            />
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Slider