import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Star } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { handelResize } from "../constantes";

export default function TitlebarImageList() {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const handle = () => {
      handelResize(setCols);
    };
    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star />);
  }
  return (
    <ImageList variant="masonry" gap={18} cols={cols} className="mt-10">
      {itemData.map((item) => (
        <ImageListItem key={item.img} className=" cursor-pointer">
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <div className="bg-dimSecondary w-[90%] border-2 border-primary rounded bottom-0 mx-[5%] mb-1 absolute flex flex-col justify-start items-left">
            <div className="flex fle-row justify-between w-[60%] mt-5 mx-2">
              {stars.map((val, ind) => (
                <Star key={ind} className="text-primary" />
              ))}
            </div>
            <Typography
              sx={{ marginLeft: "0.5rem" }}
              className="w-[80%] line-clamp-3 text-white"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </Typography>
            <Typography
              sx={{ marginLeft: "0.5rem" }}
              variant="h6"
              className=" truncate text-white"
            >
              User Name
            </Typography>
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
];
