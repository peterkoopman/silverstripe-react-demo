import React, { useContext } from 'react';
import Blurb from './Blurb/Blurb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabSet from './Tabset/TabSet';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { PageChange } from '../contexts/PageContext';

import Promos from './Pages/Promos/Promos';
import Agencies from './Pages/Agencies/Agencies';
import Quality from './Pages/Quality/Quality';
import Datasheets from './Pages/Datasheets/Datasheets';
import Groups from './Products/Groups/Groups';
import Families from './Products/Families/Families';
import Tab from './Tab/Tab';

const App = () => {
  return (
    <>
      <PageChange>
        <Blurb />
        <BrowserRouter>
          <TabSet>
            <Tab slug="" name="Products" />
            <Tab slug="promos" name="Promos" />
            <Tab slug="agencies" name="Agencies" />
            <Tab slug="quality" name="Quality" />
            <Tab slug="datasheets" name="Datasheets" />
          </TabSet>
          <Breadcrumbs />
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
      </PageChange>
    </>
  );
};

export default App;
