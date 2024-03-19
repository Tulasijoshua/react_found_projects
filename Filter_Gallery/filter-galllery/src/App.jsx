import { useState, useEffect } from 'react'
import { GalleryData } from './GalleryData'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [collection, setCollection] = useState([])

  useEffect(() => {
    setData(GalleryData)
    setCollection([... new Set(GalleryData.map(item => item.title))])
    console.log(collection)
  }, [])

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title == itemData)
    setData(filterData)
  }

  return (
    <div className='App'>
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={() => setData(GalleryData)}>All</button> </li>
            {
              collection.map((item, indexx) =>
              <li key={indexx}>
                <button onClick={() => {gallery_filter(item)}}>{item}</button>
              </li>)
            }
          </ul>
        </div>
        <div className='galleryContainer'>
          {
            data.map((item) => (
            <div key={item.id} className='galleryItem' >
              <img src={item.image} />
            </div>))
          }
        </div>
      </div>
    </div>
  )
}

export default App
