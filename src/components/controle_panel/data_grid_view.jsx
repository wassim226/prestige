import { Add } from "@mui/icons-material";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArticlePreview, PageCard, SpaPresentation } from "../../components";
import { default_description, navList } from "../../constantes";
import { Pool3 } from "../../assets";
import UserPresentation from "./user_presentation";
import SignupForm from "../forms/signup_form";

function DataGridView(props) {
  const { title, type, data, id } = props;
  const [openSignup, setOpenSignup] = useState(false);

  const ItemCard = (props) => {
    const { type, values, id } = props;
    const spa = {
      mode: "edit",
      id: id,
      price: values.price,
      image: Pool3,
      title: values.title,
      details: values.description,
    };
    switch (type) {
      case "articale":
        return (
          <Paper className="flex flex-col relative">
            <ArticlePreview
              mode={"edit"}
              id={id}
              className="swiper-slide"
              img={Pool3}
              title={values.title}
              description={values.extPresentation}
            />
          </Paper>
        );
      case "page":
        return (
          <Paper className="flex flex-col relative">
            <PageCard page={values.page} />
          </Paper>
        );
      case "spa":
        return <SpaPresentation spa={spa} />;
      case "user":
        return <UserPresentation user={values} />;
    }
  };
  return (
    <div className="flex flex-col w-full h-[85vh]">
      <Toolbar
        className="flex flex-row justify-between"
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography variant="h6" id="tableTitle" component="div">
          {title}
        </Typography>
        {type != "page" && (
          <Tooltip title={`Add ${type}`}>
            <Link to={type == "user" ? null : "detail/new"}>
              <IconButton
                onClick={
                  type != "user"
                    ? null
                    : () => {
                        setOpenSignup(() => true);
                      }
                }
              >
                <Add className="text-secondary" />
              </IconButton>
            </Link>
          </Tooltip>
        )}
      </Toolbar>
      <Box sx={{ flexGrow: 1, margin: "0 20px" }}>
        <Grid container spacing={2}>
          {data.map((val, ind) => {
            return (
              <Grid key={`ele_${ind}`} item xs={3}>
                <ItemCard type={type} values={val} id={val.id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {type == "user" && (
        <SignupForm open={openSignup} setOpen={setOpenSignup} inCpanel={true} />
      )}
    </div>
  );
}

export default DataGridView;
