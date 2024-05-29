import React from 'react'
import Items from '../components/Items'
import Categories from '../components/Categories'
import { ShowFullitem } from '../components/ShowFullitem'



class Shop  extends React.Component {
 
  
  constructor(props) {
    super(props)
    this.state ={
      currentItems: [],
      items:[
        {
          id:1,
          title: 'Iphone 15',
          img: 'Iphone15.jpg',
          desc: 'Смартфон Apple iPhone 15 128 ГБ (Голубой | Blue)',
          category: 'Apple',
          price: '73990 р',
        },
        {
          id:2,
          title: 'Iphone 15 Pro',
          img: 'Iphone15Pro.jpg',
          desc: 'Смартфон Apple iPhone 15 Pro 256 ГБ («Натуральный титан» | Natural Titanium)',
          category: 'Apple',
          price: '113990 р',
        },
        {
          id:3,
          title: 'Iphone 15 Pro Max',
          img: 'Iphone15ProMax.jpg',
          desc: 'Смартфон Apple iPhone 15 Pro Max 256 ГБ («Натуральный титан» | Natural Titanium)',
          category: 'Apple',
          price: '122990 р',
          
        },
        {
          id:4,
          title: 'Samsung Galaxy S24',
          img: 'SamsungS24.jpg',
          desc: 'Смартфон Samsung Galaxy S24 Ultra 12 ГБ | 256 ГБ («Чёрный Титан» | Titanium Black)',
          category: 'Samsung',
          price: '104990 р',
          
        },
        {
          id:5,
          title: 'Samsung Galaxy S23',
          img: 'SamsungS23.jpg',
          desc: 'Смартфон Samsung Galaxy S23 Ultra 12 ГБ | 256 ГБ (Чёрный Фантом | Phantom Black)',
          category: 'Samsung',
          price: '83990 р',
          
        },
        {
          id:6,
          title: 'Huawei P60 Pro',
          img: 'HuaweiP60Black.jpg',
          desc: 'Смартфон Huawei P60 Pro 12 ГБ + 512 ГБ (Чёрный | Black)',
          category: 'Huawei',
          price: '71990 р',
          
        },
        {
          id:7,
          title: 'Huawei P60 Pro',
          img: 'HuaweiP60.jpg',
          desc: 'Смартфон Huawei P60 Pro 12 ГБ + 512 ГБ («Жемчужина рококо» | Rococo Pearl)',
          category: 'Huawei',
          price: '71990 р',
          
        }
        
        
      ],
    
      
    showFullitem: false,
    fullItem: {}
      
    }
    this.chooseCategory = this.chooseCategory.bind(this)
    this.state.currentItems= this.state.items
    this.onShowItem = this.onShowItem.bind(this)
    

  }
  
   render () {
    
    return (
    <div  >
      
       <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems}
      
      />
         
                

    {this.state.showFullitem && <ShowFullitem onShowItem={this.onShowItem} item={this.state.fullItem}/>}
    </div>
    )
    
   }

   onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullitem: !this.state.showFullitem})
   }
   chooseCategory(category) {
    if(category === 'All') {
      this.setState({currentItems: this.state.items})
      return
    }
this.setState ({
  currentItems: this.state.items.filter(el => el.category === category)
})
   }
  
   
   
}

export default Shop
