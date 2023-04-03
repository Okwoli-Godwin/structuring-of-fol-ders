import React from 'react'
import {createBrowserRouter } from "react-router-dom"
import { Homelayout } from '../components'
import Home from '../pages/Home'

const Routes = () => {

    const element = createBrowserRouter([
        {
            path: "/",
            element: <Homelayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ])

  return (
    <div>Routes</div>
  )
}

export default Routes