import React from 'react'
import './AdsForPepsi.css'
import logo from '../../Assets/pepsi-734274_1280.jpg'


const AdsForPepsi = () => {
  return (
	<div className = "adsBackground">

		<div className='adsMainContentOne'>
            <div className='adsMainSubContentOne'>
				<div className='adsSubSubContentOne'>
				  <iframe width="360" height="215" src="https://www.youtube.com/embed/Oqsk8N1x6Uw" title="YouTube video player" frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			    <div className='adsSubSubContentTwo'>
                  <h6 className='subSubInfoOne'>BETTER WITH PEPSI | NACHOS </h6> 
				</div>
			</div>
			<div className='adsMainSubContentTwo'>
				<div className='adsSubSubContentThree'>
				  <iframe width="360" height="215" src="https://www.youtube.com/embed/IhgitIMki9A" title="YouTube video player" frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			    <div className='adsSubSubContentFour'>
				  <h6 className='subSubInfoTwo'>BETTER WITH PEPSI | RIBS</h6>
				</div>
			</div>
		</div>
		<div className='adsMainContentTwo'>
            <img src = {logo} alt ="" className='adImage'/>
		</div>

	</div>
  )
}

export default AdsForPepsi