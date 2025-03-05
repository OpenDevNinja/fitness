// FitnessContext.jsx
import React, { createContext, useState, useContext } from 'react'

const FitnessContext = createContext()

export const FitnessProvider = ({ children }) => {
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [userGoals, setUserGoals] = useState({
    weightLoss: false,
    muscleGain: false,
    endurance: false
  })

  const contextValue = {
    selectedProgram,
    setSelectedProgram,
    userGoals,
    setUserGoals
  }

  return (
    <FitnessContext.Provider value={contextValue}>
      {children}
    </FitnessContext.Provider>
  )
}

export const useFitnessContext = () => useContext(FitnessContext)

