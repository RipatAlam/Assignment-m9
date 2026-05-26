import AllPetsContainer from "@/components/AllPetsContainer";
import React from "react";

const AllPetsPage = async () => {
  
  const res = await fetch("http://localhost:8000/allpets");
  const data = await res.json();
  console.log(data, "data");

  return (
    <AllPetsContainer data={data} />
  );
};

export default AllPetsPage;
