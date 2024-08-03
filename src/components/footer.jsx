import {
  ArrowUpward,
  CopyrightRounded,
  Facebook,
  Instagram,
  Twitter,
  X,
} from "@mui/icons-material";
import { Divider, Skeleton, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Navigation from "./navigation";
import { ContactController } from "../controllers";

function Footer(props) {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new ContactController(abortController, setServerError);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const getApiData = async () => {
    const res = await controller.getElement("1");
    if (res) {
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData();
  }, []);
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
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  height={20}
                  className="mb-5"
                  sx={{ backgroundColor: "#4FD38A" }}
                />
              ) : (
                <Typography gutterBottom className="hover:text-primary">
                  {data.adress}
                </Typography>
              )}
            </li>
            <li>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  height={20}
                  className="mb-5"
                  sx={{ backgroundColor: "#4FD38A" }}
                />
              ) : (
                <Typography gutterBottom className="hover:text-primary">
                  <a href={`tel:${data.phone}`}>{data.phone}</a>
                </Typography>
              )}
            </li>
            <li>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  height={20}
                  className="mb-5"
                  sx={{ backgroundColor: "#4FD38A" }}
                />
              ) : (
                <Typography gutterBottom className="hover:text-primary">
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </Typography>
              )}
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
