import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { removeTag } from 'actions/tags.actions'

const TagContainer = styled.div`
  background-color: #3e70ae;
  border-radius: 20px;
  color: white;
  display: flex;
  font-size: 10px;
  height: 20px;
  margin-right: 10px;
  max-width: 100px;
  min-width: 70px;
  padding: 5px 10px;
  
`

const TagContent = styled.span`
  flex: 1;
  overflow: hidden;
  padding-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TagRemove = styled.div`
  background-image: url('icons/cross.png');
  cursor: pointer;
  height: 10px;
  width: 10px;
`

interface TagProps {
  itemId: number
  tagId: string
  text: string
}

export const Tag = ({text, tagId, itemId}: TagProps) => {
  const dispatch = useDispatch()
  return <TagContainer>
    <TagContent title={text}>{text}</TagContent>
    <TagRemove onClick={() => dispatch(removeTag(itemId, tagId))} />
  </TagContainer>
}
