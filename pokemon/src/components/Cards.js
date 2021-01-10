import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div`
`

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 8rem;

    @media (max-width: 480px) {
        grid-template-columns: auto;
    }
`

const Card = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`

const Image = styled.img``

const Add = styled.button`
    background: red;
    color: white;
    border-radius: .375rem;
    transition: .25s ease-in-out;

    &:hover {
        color: red;
        background: white;
        cursor: pointer;
    }
`

let data = []

export var favorites = []

axios
    .get('https://api.pokemontcg.io/v1/cards')
    .then(res => {
        res.data.cards.forEach((card) => {
            data.push(card)
        })
    })
    .catch(err => {console.log(err)})

const Cards = () => {
    let [pokemon, setPokemon] = useState(data)
    favorites = JSON.parse(localStorage.getItem('favorites'))

    return (
        <Wrapper>
            <CardWrapper>
                {pokemon.map((piece) => {
                    return (
                        <Card>
                            <Image src={piece.imageUrl} />
                            <Add onClick={() => {
                                favorites.includes(piece.imageUrl) ? console.log(piece.imageUrl) : favorites.push(piece.imageUrl)
                                alert('added!')
                                localStorage.setItem('favorites', JSON.stringify(favorites))
                                console.log(localStorage)
                            }
                        }>Add to Favorites</Add>
                        </Card>
                    )
                })}
            </CardWrapper>
        </Wrapper>
    )
}

export default Cards