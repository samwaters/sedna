import * as React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  border: 1px solid #c4cbd0;
  border-radius: 5px;
  margin: 0 auto;
  width: 500px;
`

const LoadingHeading = styled.h1`
  background-color: #e8e8e8;
  border-bottom: 1px solid #c4cbd0;
  font-size: 20px;
  padding: 5px;
`

const LoadingBody = styled.div`
  display: flex;
  padding: 5px;
`

const LoadingImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 50px;
`

const LoadingImage = styled.img`
  height: 20px;
  width: 20px;
`

const LoadingMessage = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export const Dataloading = () => {
  return <LoadingContainer>
    <LoadingHeading>Loading...</LoadingHeading>
    <LoadingBody>
      <LoadingImageContainer>
        <LoadingImage src="icons/loading.gif" />
      </LoadingImageContainer>
      <LoadingMessage>Loading the latest data for you, hold tight!</LoadingMessage>
    </LoadingBody>
  </LoadingContainer>
}
