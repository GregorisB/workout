import { creareContext } from 'react'


export const WorkoutsContext = creareContext()

export const WorkoutsContextProvider = ({ children }) => {

    return (
        <WorkoutsContext.Provider>
            {children}
        </WorkoutsContext.Provider>
    )
}