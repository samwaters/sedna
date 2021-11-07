import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { refreshData } from 'actions/data.actions'

const ErrorContainer = styled.div`
  border: 1px solid #c4cbd0;
  border-radius: 5px;
  margin: 0 auto;
  width: 500px;
`

const ErrorHeading = styled.h1`
  background-color: #e8e8e8;
  border-bottom: 1px solid #c4cbd0;
  font-size: 20px;
  padding: 5px;
`

const ErrorBody = styled.div`
  display: flex;
  padding: 5px;
`

const ErrorMessage = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const ErrorButton = styled.button`
  background-color: #006966;
  border: none;
  border-radius: 5px;
  color: white;
  height: 40px;
  text-align: center;
  width: 110px;
`

export const Dataerror = () => {
  const dispatch = useDispatch()
  return <ErrorContainer>
    <ErrorHeading>Something went wrong!</ErrorHeading>
    <ErrorBody>
      <ErrorMessage>Something went wrong while loading the data!</ErrorMessage>
      <ErrorButton onClick={() => dispatch(refreshData())}>Try Again</ErrorButton>
    </ErrorBody>
  </ErrorContainer>
}
