import React, { Component } from 'react'

export class Categories extends Component {
    constructor (props) {
    super(props)
    this.state = {
        categories : [
    {
        key: 'All',
        name: 'Все'
    },
    {
        key: 'Apple',
        name: 'Apple'
    },
    {
        key: 'Samsung',
        name: 'Samsung'
    },
    {
        key: 'Huawei',
        name: 'Huawei'
    }
        ]
    }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el =>(
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> {el.name}</div>
        ))}
        
      </div>
    )
  }
}

export default Categories
