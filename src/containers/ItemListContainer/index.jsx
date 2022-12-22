import React from 'react'
import Item from '../../components/Item';
import './styles.css'


const ItemListContainer = ({title}) => {
  return (
    <>
    <h3 style={{marginBottom: '30px', marginTop: '30px', }} className="card-title">{title}</h3>
    <div className='item-list-container'>
       <Item title = {"Gold plated"} cakeType = {"https://www.shutterstock.com/image-illustration/big-white-gold-luxury-cake-260nw-1227473863.jpg"}/>
       <Item title = {"Cherry mousse"} cakeType = {"https://theloopywhisk.com/wp-content/uploads/2018/11/Vegan-Chocolate-Truffle-Cake_730px-13.jpg.webp"}/>
       <Item title = {"Blueberries"} cakeType = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbENjzb73H1FMNJLxR3kVT-NzvpLQCGbRKSQ&usqp=CAU"}/>
       <Item title = {"Berries"} cakeType = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDXelyWJtzeAjpaax2ooeP5WCm5SLOlILNQ&usqp=CAU"}/>
       <Item title = {"Strawberries and Chocolate"} cakeType = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHv5cdpwQix0liUfYMMCsrVPGJVUwv6CFzTQ&usqp=CAU"}/>
    </div>
    </>
    
  )
}
export default ItemListContainer;