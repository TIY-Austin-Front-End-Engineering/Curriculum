import React from 'react';
import UniForm from './components/NewUnicorn.js';
import UnicornRow from './components/unicornRow.js';

import unicorns from './collections/unicorns.js';

const App = React.createClass({
  getInitialState: function() {
    return {unicorns: []}
  },
  componentDidMount: function() {
    unicorns.on('add', () => {
      console.log('unicorn was added to collection', this.state)
      this.setState({unicorns: unicorns})
    });
    unicorns.fetch();

    console.log('the app component mounted')
  },
  render: function() {
    const unicornRows = this.state.unicorns.map((val, i, arr)=>{
      return (
        <UnicornRow
          name={val.get('name')}
          color={val.get('color')}
          power={val.get('power')}/>
      )
    });
    return (
      <div>
        <UniForm/>
        {unicornRows}
      </div>
    )
  }
});

export default App;
