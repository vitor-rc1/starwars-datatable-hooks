import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import FiltersPresents from './components/FiltersPresents';
import OrderBy from './components/OrderBy';
import { Provider } from './context/StarWarsContext';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByNumericValues />
      <FiltersPresents />
      <OrderBy />
      <Table />
    </Provider>
  );
}

export default App;
