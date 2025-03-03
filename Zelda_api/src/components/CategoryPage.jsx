import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
export default function CategoryPage() {
  const { slug } = useParams();
  const [result, setResult] = useState();

  const getData = async() => {
    fetch(`https://zelda.fanapis.com/api/${slug}`)
    .then((Response) => Response.json())
    .then((data) => setResult(data.data))
    .catch((error) => 
      console.error("Det skjedde en feil under fetch", error)
    );
  };

  useEffect(() => {
    getData();
  }, [slug]);

  return (
    <>
      <h1>{slug}</h1>
      <search className="flex-section">
        {result?.map((item) => (
          <CategoryPage item={item} key={item.id} />
        ))}
      </search>
    </>
  );
}
