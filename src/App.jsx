import React from 'react';
// import ComponentClass from './components/ClassComponent';
// import LifeCycle from './components/LifeCycle';
import FunctionalComponent from './components/FunctionComponent';
// import FuncComplex from './components/FuncComplecx';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {/* ComponentClass min={1} max={10} />
        <LifeCycle prop='METHED'/>*/}
        <FunctionalComponent min={1} max={10}/>
        {/* <FuncComplex min={1} max={10}/>*/}
      </div>
    );
  }
}
