import React from 'react'
import '../styles/Cards.css'
const Cards = ({ data }) => {
    return (
        <>
            <div className="CardContainer">
                <div className="CenterCardContainer">


                    {
                        data.map((elem) => {
                            return (
                                <div className="CardDiv" key={elem.id}>
                                    <div>{elem.id}</div>
                                    <div>{elem.name}</div>
                                    <div>{elem.discription}</div>
                                    <div>{elem.price}</div>




                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Cards
