import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import image1 from '../../images/bre1.JPG'
import image2 from '../../images/bre2.JPG'
import image3 from '../../images/bre3.jpg'
import image4 from '../../images/dre1.jpg'
import image5 from '../../images/dre2.jpeg'
import image6 from '../../images/fra.jpg'
import image7 from '../../images/kon.jpg'
import image8 from '../../images/rhe.jpg'
import image9 from '../../images/spi.jpg'
import image10 from '../../images/spr.jpg'
import image11 from '../../images/tri.jpg'

export default function Section1() {
    return (
        <div>
            <Carousel showArrows={true} >
                <div>
                    <img src={image1} />
                    <p className="legend">Bregens 1</p>
                </div>
                <div>
                    <img src={image2}  />
                    <p className="legend">Bregens 2</p>
                </div>
                <div>
                    <img src={image3}  />
                    <p className="legend">Bregens 3</p>
                </div>
                <div>
                    <img src={image4}  />
                    <p className="legend">Dresden 4</p>
                </div>
                <div>
                    <img src={image5}  />
                    <p className="legend">Dresden 5</p>
                </div>
                <div>
                    <img src={image6} />
                    <p className="legend">Frankfurt 6</p>
                </div>
                <div>
                    <img src={image7} />
                    <p className="legend">Konstans 7</p>
                </div>
                <div>
                    <img src={image8} />
                    <p className="legend">rhine 8</p>
                </div>
                <div>
                    <img src={image9} />
                    <p className="legend">Spain 9</p>
                </div>
                <div>
                    <img src={image10} />
                    <p className="legend">Sprendeligen 10</p>
                </div>
                <div>
                    <img src={image11} />
                    <p className="legend">Trier 11</p>
                </div>
                
            </Carousel>
        </div>
    )
}
