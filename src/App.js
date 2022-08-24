import './App.css';
import React, { useState, useRef } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import BasicTabs from './MyTab';
import SampleImageList from './SampleImageList';

class ShopList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        
        <div>
          <BasicTabs />
          <SampleImageList />
        </div>
      </div>
    )
  }
}



export default ShopList;
