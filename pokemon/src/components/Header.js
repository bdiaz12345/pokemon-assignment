import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 91%;

    @media (max-width: 480px) {
        bottom: 90%;
    }
`

const SubWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

`

const Title = styled.h1`
    color: white;
    margin-right: 1rem;
`

const Header = () => {
    return (
        <Wrapper>
            <SubWrapper>
                <Link to='/favorites' style={{color: 'white'}}>Favorites</Link>
                <Title>Pokemon</Title>
                <Link to='/pokedex' style={{color: 'white'}}>Pokedex</Link>
            </SubWrapper>
        </Wrapper>
    )
}

export default Header