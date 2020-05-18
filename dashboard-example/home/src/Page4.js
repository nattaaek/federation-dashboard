import HeroImage from "./HeroImage";
import React from "react";

const SearchList = React.lazy(() => import("search/SearchList"));
const Button = React.lazy(() => import("dsl/Button"));

const Page4 = () => (
  <div>
    <h1>Bi-Directional</h1>
    <h2>Page4 1</h2>
    <HeroImage />
    <Button />
    <React.Suspense fallback="Loading SearchList">
      <SearchList />
    </React.Suspense>
  </div>
);

export default Page4;