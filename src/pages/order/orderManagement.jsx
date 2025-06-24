import React from 'react'
import { orderManagementList } from './orderList'
import { items } from './orderList'
import OrderTable from './orderTable'

const OrderManagement = () => {

  
  /* const item = items.filter((item) => item.id.toString() === id); */

  const pageList = {...orderManagementList, contents: items};
  return (
    <OrderTable pageList={pageList}/>
  )
}

export default OrderManagement