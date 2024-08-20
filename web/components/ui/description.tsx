"use client";

import { DescriptionProps } from "@/types/props";
import { useEffect, useState } from "react";

const Description = () => {
  const [descriptionsData, setDescriptionsData] = useState<DescriptionProps[]>(
    [],
  );

  const fetchDescriptions = async () => {
    const descriptions: DescriptionProps[] = await fetch(
      `/api/descriptions`,
    ).then((res) => res.json());
    descriptions ? setDescriptionsData(descriptions) : [];
  };

  useEffect(() => {
    fetchDescriptions();
  }, []);

  // console.log(descriptionsData);

  return (
    <>
      {descriptionsData.map(
        ({ title, description, createdAt, updatedAt }, index) => (
          <div className="text-sm" key={index}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{createdAt}</p>
            <p>{updatedAt}</p>
          </div>
        ),
      )}
    </>
  );
};

export { Description };
