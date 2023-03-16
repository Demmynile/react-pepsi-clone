import React from 'react'
import './ProductInfo.css'
import logo from '../../Assets/pepsi1.png'
import logo1 from '../../Assets/PZS-headline.png'

const ProductInfo = () => {




  return (
	
	<div className = "productInfoContainer">

		

			<div className='productInfoMainOne'>
			   <div className='productInfoItemsOne'>
                 <img src ={logo1}  alt = "" className='productInfoImage1'/>
               </div>
			   <div className = 'productInfoItemsTwo'>
			   <iframe width="280" height="200" src="https://www.youtube.com/embed/eHB0bHCuwOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			   </div>
			</div>
			<div className='productInfoMainTwo'>
				<div className='productInfoImage'>
				    <img src = {logo} alt = "pepsi zero sugar" className = "pepsiZeroSugar" />
				</div>
			   
			</div>


	</div>
  )
}

export default ProductInfo