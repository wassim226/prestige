import {
  ArrowUpward,
  CopyrightRounded,
  Facebook,
  Instagram,
  Twitter,
  X,
} from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import Navigation from "./navigation";

function Footer(props) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full bg-darkSecondary py-14`}
    >
      <div className={`flex flex-row justify-center items-center w-full`}>
        <Typography variant="h4" gutterBottom>
          CONTACT US
        </Typography>
      </div>
      <div className={`flex flex-row justify-center items-center w-full`}>
        <div className={`flex flex-row justify-center items-center w-full `}>
          <ul>
            <li>
              <Typography gutterBottom className="hover:text-primary">
                Address
              </Typography>
            </li>
            <li>
              <Typography gutterBottom className="hover:text-primary">
                <a href="tel:0698755632">0698755632</a>
              </Typography>
            </li>
            <li>
              <Typography gutterBottom className="hover:text-primary">
                <a href="mailto:email@mail.com">email@mail.com</a>
              </Typography>
            </li>
          </ul>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "#4FD38A" }}
        />
        <div className={`flex flex-row justify-center items-center w-full`}>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                className="hover:text-primary"
              >
                <Facebook sx={{ marginBottom: "16px" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="hover:text-primary"
              >
                <Instagram sx={{ marginBottom: "16px" }} />
              </a>
            </li>
            <li>
              <a href="https://www.x.com/" className="hover:text-primary">
                <X sx={{ marginBottom: "16px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex flex-row justify-evenly items-center w-full mt-8`}>
        <div className={`flex flex-row justify-center items-center`}>
          <CopyrightRounded />
          <Typography sx={{ marginLeft: "8px" }}>2024</Typography>
        </div>
        <Navigation isFooter={true} />
        <button
          className=" border-[1px] rounded hover:text-primary duration-200"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUpward />
        </button>
      </div>
    </div>
  );
}

export default Footer;
