import { render, screen } from '@testing-library/react'
import { shadcnNavbarSnippet } from '../shadcn-navbar'

describe('Shadcn Navbar Snippet', () => {
  it('renders navbar with all links', () => {
    render(<>{shadcnNavbarSnippet.component}</>)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Advertising')).toBeInTheDocument()
    expect(screen.getByText('Playground')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
})