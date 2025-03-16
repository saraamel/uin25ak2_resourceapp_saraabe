import { useEffect, useState } from "react";
import PageTitle from "./PageTitle"; //importerer Pagetitle
import resources from "../data/Resources"; //importerer ressurser



const Resources = ({ category }) => {
  const [filteredResources, setFilteredResources] = useState([]); //filtrerte ressurser

  useEffect(() => {
    setFilteredResources(resources.filter((r) => r.category === category));
  }, [category]); //kjører når kategori endres

  return (
    <section className="content-box">
      <PageTitle title={category.toUpperCase()} /> {/* tittel på siden */}
      <ul className="resource-list">
        {filteredResources.map((resource, index) => (
          <li key={index} className="resource-item">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources; //eksporterer resources
