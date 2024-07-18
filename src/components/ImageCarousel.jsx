import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./imagecarousel.css";
// import { img } from "./caousel/img/data";
import im1 from './caousel/img/im1.jpeg'
import im2 from './caousel/img/im2.jpeg'
import im3 from './caousel/img/im3.jpeg'
import im4 from './caousel/img/im4.jpeg'



function ImageCarousel() {
	return (
		<>
			<Carousel className="con">
				<Carousel.Item>
					<img className="d-block w-100" src={im1} alt="First slide" />

					{/* <Carousel.Caption>
					<h3>First Slide Label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption> */}
				</Carousel.Item>

				<Carousel.Item>
					<img className="d-block w-100" src={im2} alt="Second slide" />
				
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={im3} alt="Third slide" />
				
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={im4} alt="Third slide" />
				
				</Carousel.Item>
			</Carousel>
			<div className="hero_img">


            </div>
            
		</>
	);}
	

export default ImageCarousel;



	// <Carousel
		// 	className="con"
		// 	autoPlay={true}
		// 	infiniteLoop={true}
		// 	showIndicators={true}
		// 	showThumbs={true}
		// >
        //   {
        //     img.map((imgLink)=>{
        //         return(
        //             <img src={imgLink}/>
        //         )
        //     })
        //   }
       
        // </Carousel>
        