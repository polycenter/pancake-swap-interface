import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://polycenter.io">
        <TranslatedText translationId={2}>Home</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://app.polycenter.io">
        <TranslatedText translationId={4}>Staking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/PolyCenterBot">Airdrop</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://polycenter.exchange" className="active">
        <TranslatedText translationId={8}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://polycenter.info">Analytics</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://twitter.com/Poly_Center">
        <TranslatedText translationId={14}>Twitter</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
