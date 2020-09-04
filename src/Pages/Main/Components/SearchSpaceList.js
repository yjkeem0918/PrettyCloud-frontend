import React, { Component } from 'react'
import "./SearchSpaceList.scss"

export default class SearchSpaceList extends Component {
 
  render() {
    return (
      <div className="SearchSpaceList">
         <li className="listContents">
           {this.props.spaceListFromMain}
          </li>
      </div>
    )
  }
}