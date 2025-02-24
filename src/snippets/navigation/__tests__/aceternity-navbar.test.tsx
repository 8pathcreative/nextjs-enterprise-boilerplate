import { render, screen } from '@testing-library/react'
import { aceternityNavbarSnippet } from '../aceternity-navbar'

describe('Aceternity Navbar Snippet', () => {
  it('renders navbar with all navigation links', () => {
    render(<>{aceternityNavbarSnippet.component}</>)
    
    const links = ['Home', 'Advertising', 'Playground', 'About', 'Login', 'Sign Up']
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('includes framer-motion animations', () => {
    render(<>{aceternityNavbarSnippet.component}</>)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('style')
  })
})