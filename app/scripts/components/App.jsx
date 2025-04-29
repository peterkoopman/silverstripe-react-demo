import React from 'react';
import Blurb from './Blurb/Blurb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabSet from './Tabset/TabSet';

import Promos from './Pages/Promos/Promos';
import Agencies from './Pages/Agencies/Agencies';
import Quality from './Pages/Quality/Quality';
import Datasheets from './Pages/Datasheets/Datasheets';
import Groups from './Products/Groups/Groups';
import Families from './Products/Families/Families';

const App = () => {
  return (
    <>
      <Blurb />
      <BrowserRouter>
        <TabSet />
        <Routes>
          <Route exact path="/products/promos" element={<Promos />} />
          <Route exact path="/products/agencies" element={<Agencies />} />
          <Route exact path="/products/quality" element={<Quality />} />
          <Route exact path="/products/datasheets" element={<Datasheets />} />
          <Route path="/products/:family/:group" element={<Groups />} />
          <Route path="/products/:family" element={<Groups />} />
          <Route path="/products" element={<Families />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
