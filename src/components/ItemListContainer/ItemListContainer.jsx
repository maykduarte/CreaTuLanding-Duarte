import React from 'react'
import Button from '../Button/Button'

const ItemListContainer = ({ mensaje, fn }) => {

  const data = [
    {
      text: "Café Venezuela",
      image: "cafe_venezuela.jpg"
    },
    {
      text: "Café Colombia",
      image: "cafe_colombia.jpg"
    },
    {
      text: "Café Argentina",
      image: "cafe_argentina.webp"
    },
    {
      text: "Café Perú",
      image: "cafe_peru.jpg"
    },

  ]

  return (
    <>
      <div>{mensaje}</div>
      <div style={{ display: "flex" }}>
        {data.map((cafe, index) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={index}>
            <img src={"/images/" + cafe.image} width={200} height={200} alt={cafe.text} style={{borderRadius: "4px"}}/>
            <Button fn={fn} text={cafe.text} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ItemListContainer
