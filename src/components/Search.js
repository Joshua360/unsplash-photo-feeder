import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";


export class Search extends Component {


    state={
        search: '',
        photos: []

    }



    handleSubmit = (e) => {       
        this.fetchAPIData(this.state.search);
        e.preventDefault();
        
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    


    fetchAPIData = (searchterm) => {
        fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${searchterm}&client_id=gZzLrOsRT3rP0GNzGgkqrkHresuWWJIbtqUjJLoklyA`)
          .then(res => res.json())
             .then(data => {
                 this.setState({
                     photos: data.results
                 })
             })

    }




  render() {

    //   console.log(this.state.photos[0].urls.regular);
   

    return (
        <div className="">
        <div className="">
          <div className="contained">
            <div className="grid-100">
              <div className="heading">
                <h1 className="logo">
                  <Link to="/">Unplash Photo Search</Link>
                </h1>
                <form onSubmit={this.handleSubmit}>
                  {/* <label for="search">Search for anything</label> */}
                  <input classname="searchArea" onChange={this.handleChange}
                    type="search"
                    name="search"
                    id="search"
                    placeholder="e.g donald trump"
                  />
                  {/* <input type="submit" value="Search" id="submit"> */}
                </form>
              </div>
            </div>
            <ul id="photos">

            
        

            {
              
                
                 this.state.photos.map((photo, key) => {
                  
                     return(
                            <li className="grid-25 tablet-grid-50" key={key}>
                                <img src={photo.urls.regular} alt=""/>
                            </li>
                            
                          
                     )
                 })
            }

            </ul>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Search