"use client";

import { useState } from "react";

import { RatingForm } from "../router/rating-form";
import Backdrop from "../router/ui/backdrop";
import { Button } from "../ui/button";
import { createPortal } from "react-dom";

interface RatingModalProps {
  children: React.ReactNode;
}

export const RatingModal = ({ children }: RatingModalProps) => {
  const [modal, toggleModal] = useState(false);

  const ratingModal = document.getElementById("rating-modal") || document.body;

  return (
    <>
      <Button
        onClick={() => toggleModal(!modal)}
        className="w-24"
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
