
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

// Mock the SVG imports
jest.mock('../assets/svg/localOfferIcon.svg?react', () => () => 'OfferIcon')
jest.mock('../assets/svg/exploreIcon.svg?react', () => () => 'ExploreIcon')
jest.mock('../assets/svg/personOutlineIcon.svg?react', () => () => 'PersonOutlineIcon')

// Helper function to render Navbar with router
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

describe('Navbar', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<Navbar />)
    
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Offers')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('highlights active link based on current route', () => {
    renderWithRouter(<Navbar />, { route: '/offers' })
    
    const offersText = screen.getByText('Offers')
    expect(offersText.className).toBe('navbarListItemNameActive')
    
    const exploreText = screen.getByText('Explore')
    expect(exploreText.className).toBe('navbarListItemName')
  })

  it('navigates when links are clicked', () => {
    renderWithRouter(<Navbar />)
    
    fireEvent.click(screen.getByText('Offers'))
    expect(window.location.pathname).toBe('/offers')
    
    fireEvent.click(screen.getByText('Profile'))
    expect(window.location.pathname).toBe('/profile')
    
    fireEvent.click(screen.getByText('Explore'))
    expect(window.location.pathname).toBe('/')
  })
})