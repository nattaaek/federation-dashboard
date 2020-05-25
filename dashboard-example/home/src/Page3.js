import HeroImage from "./HeroImage";
import React from "react";

import { sendMessage } from "./analytics";

const SearchList = React.lazy(() => import("search/SearchList"));
const Button = React.lazy(() => import("dsl/Button"));

const Page3 = () => {
  sendMessage("Page 3 loaded");
  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>Page3 1</h2>
      <HeroImage />
      <React.Suspense fallback="Loading SearchList">
        <Button />
      </React.Suspense>
      <React.Suspense fallback="Loading SearchList">
        <SearchList />
      </React.Suspense>
    </div>
  );
};

export default Page3;
