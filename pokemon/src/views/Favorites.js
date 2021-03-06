import React, { useState } from 'react'
import styled from 'styled-components'
import { favorites } from '../components/Cards'
import Header from '../components/Header'

const Wrapper = styled.div``

const FavoritesWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 8rem;
`

const Card = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`

const Image = styled.img``

const Remove = styled.button`
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

const Confirmation = styled.p`
    text-align: center;
    font-size: 10px;
`

const Favorites = () => {
    const [updatedFavorites, setUpdatedFavorites] = useState(JSON.parse(localStorage.getItem('favorites')))
    const [selectedIndex, setSelectedIndex] = useState([])

    

    return (
        <Wrapper>
            <Header />
            <FavoritesWrapper>
                {updatedFavorites.map((piece, index) => {
                    return (
                        <Card>
                            <Image src={piece} />
                            <Remove onClick={(event) => {
                                setSelectedIndex(index)
                                if (selectedIndex === index) {
                                    favorites.splice(selectedIndex, 1)
                                }
                                localStorage.setItem('favorites', JSON.stringify(favorites))
                                setUpdatedFavorites([...favorites])
                            }}>Remove from Favorites</Remove>
                            <Confirmation>Double-click to confirm removal</Confirmation>
                        </Card>
                    )
                })}
            </FavoritesWrapper>
        </Wrapper>
    )
}

export default Favorites