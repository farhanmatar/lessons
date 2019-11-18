import React from 'react'
import img0 from './images/img0.jpg'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
export default function Images(props) {

    let imgArray=[img0 ,img1,img2,img3,img4,img5,img6]

    let src = imgArray[props.index]

    return (
        <div>
              <img src={src} alt="img1"/>
              
        </div>
    )
}
