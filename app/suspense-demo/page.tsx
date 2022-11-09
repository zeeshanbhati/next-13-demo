import React, { Suspense } from "react";
import ProductList from "./ProductList";

const SuspenseDemoComponent = () => {
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div>Loading Products</div>
          </>
        }
      >
        {/*@ts-ignore*/}
        <ProductList />
      </Suspense>
      <div className="divide-y divide-gray-700 ">
        <p> SOmrhing</p>
      </div>
      <Suspense
        fallback={
          <>
            <div>Loading Products Fhir se</div>
          </>
        }
      >
        {/*@ts-ignore*/}
        <ProductList />
      </Suspense>
      Suspense Component
    </div>
  );
};

export default SuspenseDemoComponent;
