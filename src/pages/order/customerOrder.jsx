import React from 'react'
import { useParams } from 'react-router-dom'
import { customerManagementList } from './orderList'
import { items } from './orderList'
import OrderTable from './orderTable'

const CustomerOrder = () => {

  
 
    const {id} = useParams();
    const item = items.filter((item) => item.id.toString() === id);
    console.log(".id", id)
    console.log("contend.id", items.map((item) => console.log(item.id)))
    const pageList = {...customerManagementList, contents: item};
  return (
    <OrderTable  pageList={pageList}/>
  )
}

export default CustomerOrder