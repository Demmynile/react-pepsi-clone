import {screen , render , fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Banner } from '../Banner'



describe("test that will run all sub componennts in the Banner components" , () => {

	 test("image in the banner component" , () => {
           render(<Banner />)
		   const getPepsiImage = screen.getByRole("img")
		   expect(getPepsiImage).toBeInTheDocument()
	 })
	 test("words(introduction) shows it is existing" , () => {
		render(<Banner />)
		const getIntroduction = screen.getByTestId(/introduction/i)
		expect(getIntroduction).toBeInTheDocument()
	 })
	 test("words(nitro) shows it is existing" , () => {
		render(<Banner />)
		const getNitro = screen.getByTestId(/nitro/i)
		expect(getNitro).toBeInTheDocument()
	 })
	 test("words(pepsi) shows it is existing" , () => {
		render(<Banner />)
		const getPepsi = screen.getByTestId(/pepsi/i)
		expect(getPepsi).toBeInTheDocument()
	 })
	 test("words(smooth) shows it is existing" , () => {
		render(<Banner />)
		const getSmooth = screen.getByTestId(/smooth/i)
		expect(getSmooth).toBeInTheDocument()
	 })
	
   

   
   
})



