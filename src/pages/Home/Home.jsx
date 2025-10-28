import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Owner from '../../components/Owner/Owner'
import Man from '../../components/Man/Man'
import Journey from '../../components/Journey/Journey'



const Home = () => {

const [category,setCategory] = useState('All');

  return (
    <div>
      <Header/>
      
      <ExploreMenu category={category} setCategory={setCategory} />
      <Owner/>
      <FoodDisplay category={category} />
      <Man/>
      <Journey/>
      <AppDownload/>
    </div>
  )
}

export default Home
