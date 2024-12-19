"use client";

import { DescriptionProps } from "@/types/props";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { DescriptionModal } from "../admin/description-modal";

const Description: React.FC<{ isAdmin?: boolean; isRoot?: boolean }> = ({
  isAdmin = false,
  isRoot = false,
}) => {
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

  const deleteDescription = async (id: number) => {
    await fetch(`/api/descriptions`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    fetchDescriptions();
  };

  const handleRefreshDescriptions = () => {
    fetchDescriptions();
    console.log("fetch description");
  };

  return (
    <>
      {isAdmin && (
        <DescriptionModal
          onDescriptionUpdate={handleRefreshDescriptions}
          request="POST"
        >
          Make New Story
        </DescriptionModal>
      )}
      {isRoot ? (
        <>
          {descriptionsData.map(
            ({ id, title, description, createdAt, updatedAt }, index) => (
              <div key={index}>
                <h1 className="font-newyear text-5xl tracking-widest drop-shadow-[0_5px_10px_rgba(0,0,0,0.80)]">
                  {title}
                </h1>
                <div className="mb-8 w-fit">
                  <p className="mt-2 text-center font-halimount text-2xl tracking-[.05rem] drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)]">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </>
      ) : (
        <>
          {descriptionsData.map(
            ({ id, title, description, createdAt, updatedAt }, index) => (
              <div
                className="border border-t-2 px-8 py-4 font-geistsans text-sm"
                key={index}
              >
                <h1 className="mb-1 font-semibold">{title}</h1>
                <p className="mb-2">{description}</p>
                {isAdmin && (
                  <div className="space-x-2 font-geistsans">
                    <DescriptionModal
                      request="PUT"
                      onDescriptionUpdate={handleRefreshDescriptions}
                      id={id}
                      title={title}
                      description={description}
                    >
                      Edit
                    </DescriptionModal>
                    <Button onClick={() => deleteDescription(id)}>
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            ),
          )}
        </>
      )}
    </>
  );
};

export { Description };
