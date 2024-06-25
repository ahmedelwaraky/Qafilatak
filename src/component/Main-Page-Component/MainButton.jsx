import { Button } from "@chakra-ui/react";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function MainButton({
  type,
  content,
  to,
  disabled,
  onClick,
  className,
}) {
  return (
    <>
      <section id="themeButton">
        {/* <div className="container">
        <div
          className={`theme py-1 px-3 m-auto rounded d-flex justify-content-between ${className}`}
          style={{ backgroundColor: '#797979' }}
        >
          <button type={type} className="btn text-white fs-5" onClick={onClick} disabled={disabled}>
            {content}
          </button>
          <i className="fa-solid fa-angles-right mt-2 fs-4 text-white"></i>
        </div>
      </div> */}

        <Link to={to}>
          <Button
            w="50%"
            className="border mt-4"
            bgGradient="linear(90deg, rgba(255,255,255,1) 30%, rgba(200,220,226,1) 100%)"
            // colorScheme="black"
            rightIcon={<FaAnglesRight />}
            iconSpacing={20}
            variant="solid"
            color="black"
            _hover={{ color: "white", bg: "gray.400" }}
          >
            {content}
          </Button>
        </Link>
      </section>
    </>
  );
}
