import React from "react";

import Directory from '../../components/directory/directory.component'

import "./homepage.styles.scss";
import categories from '../../data/categories.json';

const HomePage = () => (
  <div className="homepage">
    <Directory categories={categories} />
  </div>
);

export default HomePage;
