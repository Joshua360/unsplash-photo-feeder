import React from 'react'
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="grid-container centered">
        <div className="grid-100">
            <div className="contained">
            <div className="grid-100">
                <div className="heading">
                <h1 className="logo">
                    <NavLink to="/about">About this app</NavLink>
                </h1>
                <p>
                    This simple web app uses REST API to fetch photos from unsplash Photo
                    API and display the results
                </p>
                <button>
                    <NavLink to="/">Return to search page</NavLink>
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}
