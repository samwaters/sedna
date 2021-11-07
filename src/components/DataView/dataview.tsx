import * as React from 'react'
import { useSelector } from 'react-redux'
import { dataSelector } from 'selectors/data.selector'
import { Dataerror } from 'components/DataView/dataerror'
import { Dataloading } from 'components/DataView/dataloading'
import {DataItem} from 'components/DataView/dataitem'

export const DataView = () => {
  const data = useSelector(dataSelector)

  if(data.loading) {
    return <Dataloading />
  }

  if(data.error) {
    return <Dataerror />
  }

  return <>
    {data.data.map(dataItem => <DataItem key={dataItem.id} item={dataItem} />) }
  </>
}
