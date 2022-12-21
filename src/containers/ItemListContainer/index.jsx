import React from 'react'
import Item from '../../components/Item';
import './styles.css'


const ItemListContainer = () => {
  return (
    <div className='item-list-container'>
       <Item title = {"Título 1"}/>
       <Item title = {"Título 2"}/>
       <Item title = {"Título 3"}/>
       <Item title = {"Título 4"}/>
       <Item title = {"Título 5"}/>
    </div>
  )
}
export default ItemListContainer;