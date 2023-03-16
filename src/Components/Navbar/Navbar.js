import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/pepsi-log.png'
import {RiArrowDownSLine , RiArrowUpSLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { NavbarData } from '../../Data/Navbar/Navbar'
import { Banner } from '../Banner.js/Banner'
import ProductInfo from '../ProductInformation/ProductInfo'
import AdsForPepsi from '../AdsForPepsi/AdsForPepsi'
import AdsForPepsiMango from '../AdsForPepsiMango/AdsForPepsiMango'




const Navbar = () => {
	const [state, setState] = useState({
		mobile: false,
		open: false
	})
	const { mobile, open } = state

	// toggle for mobile view
	const [hamOpen , setHamOpen] = useState(false)
	const [navTog , setNavTog] = useState(true)

	const changeHam = () =>{
     
		setHamOpen(!hamOpen)
		setNavTog(!navTog)

	} 
	
  
	

	//toggle desktop view
	const [toggleDesk , setToggleDesk] = useState(false)
	

    const changeToggleDesk = () => {
		
		setToggleDesk(!toggleDesk)
	}

	


	
	//useEffect
	useEffect(() => {
		const responsive = () => {
			return window.innerWidth <= 968 
			? setState(prevState => ({
				...prevState,
				mobile: true
			}))
			: setState(prevState => ({
				...prevState,
				mobile: false
			}))
		}
		responsive()

		window.addEventListener('resize', () => responsive())

		return () => {
			window.removeEventListener('resize', () => responsive())
		}
	}, [])

	const desktopView = () => {
		return (	
			<>

  <div className={toggleDesk ? 'pepNavContainerClicked' : 'pepNavContainer' } data-testid = "pepNavContainer">
    <div className='pepLogo'>
      <img className='log' src = {logo} alt ='pepsi' data-testid = "image-log" />

    <div className='pepView' onClick = {changeToggleDesk}>
      <h2 className= {toggleDesk ? 'pepLinks-list1Clicked' : 'pepLinks-list1'}>VIEW PRODUCTS</h2>
      { toggleDesk ? (<RiArrowUpSLine data-testid = "arrow-up"   className =  {toggleDesk ? 'pepUpArrowClicked' : 'pepUpArrow'} /> ) : (<RiArrowDownSLine data-testid = "arrow-down" className = {toggleDesk ? 'pepDownArrowClicked' : 'pepDownArrow'} />) }
    </div>

    <div className='pepLinks'>

      <ul className='pepLinks-items'>
        <li className= {toggleDesk ? 'pepLinks-listClicked' : 'pepLinks-list'} >WHATS NEW </li>
        <li className={toggleDesk ? 'pepLinks-listClicked' : 'pepLinks-list'}>NEWSLETTER </li>
        <li className= {toggleDesk ? 'pepLinks-listClicked' : 'pepLinks-list'}>CONTACT US</li>
      </ul>


    </div>
      
   </div>
   
   <div className='pepButtonNav'>
       
    <button className = {toggleDesk ? 'pepButtonClicked' : 'pepButton'}><span className='buyProducts'>BUY PEPSI PRODUCTS</span></button>
     
      
   </div>
 
</div>


  
{toggleDesk ? <div className = "pepOnHoverBackground">

      <div className='product-grid'>

       {NavbarData && NavbarData.map((option,i) => (
		
		<div className='product' key={i} >
		
		<span className="product-name">{option.name}</span>

		<img src={option.img} alt = ""  className='product-image' />

	   </div>
		
       ))}
	 </div>

	
	
</div> : ''}

{!toggleDesk  && (
	<Banner />
	
)}
{!toggleDesk  && (
	<ProductInfo />
	
)}
{!toggleDesk  && (
	<AdsForPepsi />
	
)}
{!toggleDesk  && (
	<AdsForPepsiMango />
	
)}










</>
    )
		
}

	const mobileView = () => {
		return (
		<>
	<div className='pepMobileContent'>
		<div className={toggleDesk ? 'pepMobileContainerClicked' : 'pepMobileContainer'}>
			<div className='logoPart'>
			   <img className='pepMobileLogo' src={logo} alt ='pepsi' />
			</div>
			{!hamOpen ? 
			<div className='MobileViewProductPart' onClick = {changeToggleDesk}>
			  <h2 className={toggleDesk ? 'pepMobileListClicked' : 'pepMobileList'}>VIEW PRODUCTS</h2>
			  { toggleDesk ? (<RiArrowUpSLine   className = {toggleDesk ? 'pepMobileArrowUpClicked' : 'pepMobileArrowUp'}/> ) : (<RiArrowDownSLine  className = {toggleDesk ? 'pepMobileArrowDownClicked' : 'pepMobileArrowDown'}/>) }
			</div> : ''}
			<div className='hamburgerPart'>
              { hamOpen ?   (<AiOutlineClose onClick = {changeHam}  className = {toggleDesk ? 'mobileHamburgerClicked' :  'mobileHamburger'} />) : (<GiHamburgerMenu onClick = {changeHam}  className = {toggleDesk ? 'mobileHamburgerClicked' :  'mobileHamburger'} />)}
				
			</div>
        </div> 
    </div>

	{hamOpen  ? 
	<div className='mobileHamburgerPart'>
	  <div className='mobileHamburg'>
	    <span className='hambg1'>WHATS NEW</span>
		<span className='hambg'>NEWSLETTER</span>
		<span className='hambg'>CONTACT US</span>
		<span className='hambg'>BUY PEPSI PRODUCTS</span>

	  </div>

	</div> : ''}
	{/* mobile */}
	{toggleDesk && !hamOpen ? <div className = "pepOnHoverBackgroundMobile">

      <div className='mobile-grid'>

       {NavbarData && NavbarData.map((option,i) => (
		
		<div className='product-mobile' key={i} >
		
		<span className="product-name">{option.name}</span>

		<img src={option.img} alt = ""  className='product-image' />

	   </div>
		
       ))}
	 </div>
	
</div> : ''}

{!toggleDesk && !hamOpen? <Banner/>  : ''}
	
		
		</>
		)

	} 
  return (
	<div>
       {
		mobile ? mobileView() : desktopView()
	   }
	</div>
  )
}

export default Navbar