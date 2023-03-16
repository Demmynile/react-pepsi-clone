import {render , screen , fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar'


describe("testing if all the content are existing in the desktop navbar" , () => {

	test("testing if the div is existing" , () => {
      render(<Navbar />)
	  const toHaveBackgroundClassName = screen.getByTestId("pepNavContainer")
	  expect(toHaveBackgroundClassName).toBeInTheDocument()
	
		
	})

	test("Writing a test to know if the pepsi logo is there" , () => {
     render(<Navbar />)
	 const getPepsiLogo = screen.getByTestId("image-log")
	 expect(getPepsiLogo).toBeInTheDocument();

	})

	test("Writing a test to check if there are navbar text like view products" , () => {
     render(<Navbar />)
	 const getViewProducts  = screen.getByText(/VIEW PRODUCTS/i)
	 expect(getViewProducts).toBeInTheDocument();
	})

	test("Writing a test to check if there are navbar text like whats new" , () => {
		render(<Navbar />)
		const getViewProducts  = screen.getByText(/WHATS NEW/i)
		expect(getViewProducts).toBeInTheDocument();
	})

	test("Writing a test to check if there are navbar text like newsletter" , () => {
		render(<Navbar />)
		const getViewProducts  = screen.getByText(/NEWSLETTER/i)
		expect(getViewProducts).toBeInTheDocument();
	})
	test("Writing a test to check if there are navbar text like contacts" , () => {
		render(<Navbar />)
		const getViewProducts  = screen.getByText(/CONTACT US/i)
		expect(getViewProducts).toBeInTheDocument();
	})

	test("Writing a test to get the label of a button like buy pepsi products" , () => {
		render(<Navbar />)
		const getButtonLabel = screen.getByRole("button" , {name : /BUY PEPSI PRODUCTS/i})
		expect(getButtonLabel).toBeInTheDocument();
	})

	test("Writing a test to switch my product to the navigation-gallery" , () => {
		render(<Navbar />)
		const clickViewProducts = screen.getByTestId("arrow-down")
		fireEvent.click(clickViewProducts)
	})

})