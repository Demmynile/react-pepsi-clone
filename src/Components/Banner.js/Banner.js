import React , {useState , useEffect} from 'react'
import './Banner.css'
import logo from '../../Assets/Nitro_Pepsi_CAN_Glass@3x.png'




export const Banner = () => {


	const learnMore = () => {
		console.log('this is learning more')
	}
	const [state , setState] = useState({
		mobile : false,
		open : false
	})
    
	const {mobile , open} = state

	//words used in the banner

	const introducing = `Introducing`

	const nitro = `NITRO`

    const pepsi = `pepsi`

	const smooth = `SMOOTH`


	useEffect(() => {

		const responsive = () => {
			return window.innerWidth <= 968 ?
			setState(prevState => ({
				...state , mobile:true
			})
			) :
			setState(prevState => ({
				...state , mobile:false
			}))
		}

		responsive()

		window.addEventListener('resize'  , () => responsive())

		return () => {
			window.removeEventListener('resize'  , () => responsive())
		}

	} , [])

	const desktopView = () => {
		return(
           <>
		   <div className ="pepDeskBannerContainer">

		        <div className='pepDeskBannerContent'>
				    <img src = {logo} alt = "" className='pepDeskBannerImage' />   
				</div>
				

				 <div className='pepDeskBannerWords'>

					<div className = "pepDeskBannerCont">

					      
					       
							<h4 className='pepDeskBannerIntro' data-testid = "introduction">{introducing}</h4> 
						
						
							<h4 className='pepDeskBannerNitro' data-testid = "nitro">{nitro}</h4>
							
							
							<h4 className='pepDeskBannerPepsi' data-testid = "pepsi">{pepsi}</h4>
						
						
							<h4 className='pepDeskBannerSmooth' data-testid = "smooth">{smooth}</h4>
							
						
							<button className = "pepDeskBannerButton" onClick = {learnMore} >Learn More</button>
							
					

					</div>
		        </div> 
			</div>

		   </>
		)
	}

	const mobileView = () => {
         return (
			<>

		
		<div className ="pepMobileDeskBannerContainer">


		<div className='pepMobileDeskBannerWords'>

			<div className = "pepMobileDeskBannerCont">
				
					<h4 className='pepMobileDeskBannerIntro'>{introducing}</h4> 
				
				
					<h4 className='pepMobileDeskBannerNitro'>{nitro}</h4>
					
					
					<h4 className='pepMobileDeskBannerPepsi'>{pepsi}</h4>
				
				
					<h4 className='pepMobileDeskBannerSmooth'>{smooth}</h4>
					
				
					<button className = "pepMobileDeskBannerButton">Learn More</button>
					


			</div>
			
        </div>

			<div className='pepMobileDeskBannerContent'>

				<img src = {logo} alt = "" className='pepMobileDeskBannerImage' />   
				
			</div>


			 
			</div>

			</>
		 )
	}

 
	return (
       <div>
		{mobile ? mobileView() : desktopView()}
	   </div>
	)
}