import React from 'react';

import UnicornFriend from './unicornFriend.js';
import Header from './header.js';

// import unicorns from '../unicorns.js';



const ListPage = React.createClass({
  render: function() {
    const unicornsComponents = this.props.data.map((unicorn, index, array) => {
      return (
        <UnicornFriend
          key={index}
          name={unicorn.name}
          power={unicorn.power}
          color={unicorn.color}
          />
      )
    })
    return (
      <div>
        <Header/>
        {unicornsComponents}
      </div>
    )
  }
})

export default ListPage;
