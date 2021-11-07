import * as React from 'react'
import {ChangeEvent, useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {search} from 'actions/search.actions'

const SearchBarInputContainer = styled.div`
  position: relative;
  width: 330px;
`

const SearchBarInputField = styled.input`
  border: 1px solid #c4cbd0;
  border-radius: 5px;
  height: 40px;
  padding: 15px 15px 15px 45px;
  width: 100%;
`

const SearchBarInputIcon = styled.div`
  background-image: url('icons/search.png');
  position: absolute;
  height: 20px;
  left: 20px;
  top: 12px;
  width: 20px;
`

export const Searchbarinput = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value)
    dispatch(search(e.currentTarget.value))
  }

  return <SearchBarInputContainer>
    <SearchBarInputIcon />
    <SearchBarInputField onChange={handleChange} placeholder="Search Tags" value={searchTerm} />
  </SearchBarInputContainer>
}
