import React from 'react'

const MethodologiesCard = ({ methodologiesCardData }) => {
  return (
    <div className="flex flex-col justify-center h-full w-full">
      <h1 className="font-bold text-xl py-2">{methodologiesCardData.title}</h1>
      <p>{methodologiesCardData.description}</p>
    </div>
  ) 
}

export default MethodologiesCard