import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Reset } from 'styled-reset'
import { Searchbar } from 'components/searchbar/searchbar'
import { DataView } from 'components/DataView/dataview'

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #app { height: 100%; font-family: Roboto,serif; }
`

const Container = styled.div`
  background-color: #f3f3f3;
  height:100%;
  padding: 0 15px;
`

export const App = () => <>
  <Reset />
  <GlobalStyles />
  <Container>
    <Searchbar />
    <DataView />
  </Container>
</>
