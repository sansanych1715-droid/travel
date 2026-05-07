import { useState, useEffect } from "react";
import TourList from "@/widgets/ItemList/TourList";
import type { Tour } from "@/shared/api/types";
import { getTours } from "@/shared/api/toursApi";

function HomePage() {
  const [data, setData] = useState<Tour[]>([]);

  useEffect(() => {
    getTours().then(setData);
  }, []);

  return (
    <>
      <TourList tours={data}></TourList>
    </>
  );
}
export default HomePage;
