import React from 'react'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

      <Container sx={{ minHeight: '90vh' }}>
        <h1>Home</h1>
      </Container>

      <Footer />
    </>
  )
}

export default Home
