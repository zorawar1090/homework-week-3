import React from 'react';
import './App.css';
import Select from './components/App'
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Select />
    </div>
    </Provider>
  );
}

export default App;
