import React from 'react';
import Blurb from './Blurb/Blurb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabSet from './Tabset/TabSet';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';

import Promos from './Pages/Promos/Promos';
import Agencies from './Pages/Agencies/Agencies';
import Quality from './Pages/Quality/Quality';
import Datasheets from './Pages/Datasheets/Datasheets';
import Product from './Pages/Product/Product';
import Groups from './Products/Groups/Groups';
import Families from './Products/Families/Families';
import Tab from './Tab/Tab';
import Product from './Products/Product/Product';
import ProductPage from './Pages/Product/ProductPage';

const App = () => {
  return (
    <>
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
          <Route path="/products/promos" element={<Promos />} />
          <Route path="/products/agencies" element={<Agencies />} />
          <Route path="/products/quality" element={<Quality />} />
          <Route path="/products/datasheets" element={<Datasheets />} />
          <Route
            path="/products/:family/:group/:product"
            element={<Product />}
          />
          <Route path="/products/:family/:group" element={<Groups />} />
          <Route
            path="/products/:family/:group/:product"
            element={<ProductPage />}
          />
          <Route path="/products/:family" element={<Groups />} />
          <Route path="/products" element={<Families />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
