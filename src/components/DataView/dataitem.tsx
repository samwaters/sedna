import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { DataItem as DataItemInterface } from 'reducers/data.reducer'
import { Tag } from 'components/DataView/tag'
import { ChangeEvent, useState } from 'react'
import { addTag } from 'actions/tags.actions'
import { getCurrentSearchTerm } from 'selectors/search.selector'
import { getTagsForItem } from 'selectors/tags.selector'

const DataItemContainer = styled.div`
  background-color: #e8e8e8;
  border-radius: 5px;
  display: flex;
  height: 75px;
  padding: 15px 15px 20px 15px;
  margin-bottom: 10px;
`

const DataItemInfo = styled.div`
  width: 240px;
`

const DataItemInfoHeading = styled.h2`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const DataItemInfoDetails = styled.ul`
  list-style:none;
`

const DataItemInfoDetail = styled.li`
  font-size: 13px;
  margin-top: 5px;
`


const DataItemTags = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: end;
`

const DataItemInput = styled.div`
  width: 450px;
`

const DataItemInputField = styled.input`
  border: 1px solid #c4cbd0;
  border-radius: 5px;
  height: 40px;
  margin-right: 10px;
  padding: 15px;
  width: 330px;
`

const DataItemInputButton = styled.button`
  background-color: #006966;
  border: none;
  border-radius: 5px;
  color: white;
  height: 40px;
  text-align: center;
  width: 110px;
`

interface DataItemProps {
  item: DataItemInterface
}

export const DataItem = ({item}: DataItemProps) => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(getCurrentSearchTerm)
  const tags = useSelector(getTagsForItem(item.id))
  const [tagName, setTagName] = useState('')

  const handleAddTag = () => {
    dispatch(addTag(item.id, tagName, `${new Date().getTime()}`))
    setTagName('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagName(e.currentTarget.value)
  }

  if(searchTerm) {
    const regex = new RegExp(searchTerm, 'i')
    if(!tags.find(tag => tag.tag.match(regex))) {
      return null
    }
  }

  return <DataItemContainer>
    <DataItemInfo>
      <DataItemInfoHeading title={item.name}>{item.name}</DataItemInfoHeading>
      <DataItemInfoDetails>
        <DataItemInfoDetail>Created: {item.created_at}</DataItemInfoDetail>
        <DataItemInfoDetail>ID: {item.id}</DataItemInfoDetail>
      </DataItemInfoDetails>
    </DataItemInfo>
    <DataItemTags>
      {tags.map(({tag, tagId}) => <Tag itemId={item.id} key={tagId} tagId={tagId} text={tag} />)}
    </DataItemTags>
    <DataItemInput>
      <DataItemInputField onChange={handleInputChange} placeholder="Tag Name" value={tagName} />
      <DataItemInputButton onClick={handleAddTag}>Add Tag</DataItemInputButton>
    </DataItemInput>
  </DataItemContainer>
}
