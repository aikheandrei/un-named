"use client";

import { useEffect, useState } from "react";

import { RatingForm } from "./ui/rating-form";
import Backdrop from "./ui/backdrop";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";

interface RatingModalProps {
  children: React.ReactNode;
}

export const RatingModal = ({ children }: RatingModalProps) => {
  const [modal, toggleModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  const ratingModal = document.getElementById("rating-modal") || document.body;

  return (
    <>
      <Button
        onClick={() => toggleModal(!modal)}
        className="w-24 text-sm"
        variant={"outline"}
      >
        {children}
      </Button>

      {modal &&
        createPortal(
          <Backdrop onClick={() => toggleModal(!modal)}>
            <RatingForm toggleModal={() => toggleModal(!modal)} />
          </Backdrop>,
          ratingModal,
        )}
    </>
  );
};
