// useResponsive.js
import { useState, useEffect } from 'react'

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768)
          setScreenWidth(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])
    
      return {
        isMobile,
        screenWidth,
        isTablet: screenWidth >= 768 && screenWidth < 1024,
        isDesktop: screenWidth >= 1024
      }
    }
    
    export default useResponsive