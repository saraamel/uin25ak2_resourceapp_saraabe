import { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import resources from "../Resources"; 

const Resources = ({ category }) => {
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    setFilteredResources(resources.filter((r) => r.category === category));
  }, [category]);

  return (
    <section>
      <PageTitle title={category.toUpperCase()} />
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources;
