import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import pikachu from '../assets/pikachu.jpeg'
import charmander from '../assets/charmander.jpeg'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SubWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

const Description = styled.h2`
    text-align: center;
    color: red;
`

const DescriptionWrapper = styled.div`
    background: white;
    width: 50%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    border-radius: .375rem;
`

const Image = styled.img``

const Start = () => {
    return (
        <Wrapper>
            <Header />
            <SubWrapper>
                <Image src={pikachu} />
                <DescriptionWrapper>
                    <Description>Welcome to the world of Pokemon!
                        <br/>To get started, simply click "Pokedex"
                    </Description>
                </DescriptionWrapper>
                <Image src={charmander} />
            </SubWrapper>
        </Wrapper>
    )
}

export default Start