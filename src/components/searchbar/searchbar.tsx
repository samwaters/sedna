import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Searchbarinput } from 'components/searchbar/searchbarinput'

const SearchBarContainer = styled.div`
  display: flex;
  height: 70px;
  padding-top: 23px;
`

const SearchBarSpacer = styled.div`
  flex: 1;
`

export const Searchbar = () => <SearchBarContainer>
  <SearchBarSpacer />
  <Searchbarinput />
</SearchBarContainer>
