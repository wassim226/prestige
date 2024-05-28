import { Link } from "react-router-dom";
import { Typography, Tooltip, IconButton } from "@mui/material";
import MyAccordation from "../accordation";

function ControleNavigation() {
  //   const [_, i18n] = useTranslation("global");
  //   const [anchorLanguages, setAnchorLanguages] = useState(null);
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row py-5 text-white">
        <Typography
          variant="h6"
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            // fontFamily: 'monospace',
            fontWeight: 700,
            // letterSpacing: '.3rem',
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Panneau de controle
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {" "}
          Panneau de controle
        </Typography>
      </div>
      <nav className="  w-[17.5vw]">
        <ul className="text-dimWhite w-full">
          <li>
            <MyAccordation
              title={<span className="text-dimWhite">{"Articles"}</span>}
              content={
                <ul>
                  <li className="text-dimWhite hover:text-white pb-3">
                    <Link to="articales">{"blog"}</Link>
                  </li>
                  <li className="text-dimWhite hover:text-white">
                    <Link to="pages">{"pages"}</Link>
                  </li>
                </ul>
              }
            />
          </li>
          <li className="hover:text-white mb-5">
            <Link
              to="spas"
              className="text-dimWhite hover:text-white p-4 text-lg"
            >
              {"Spas"}
            </Link>
          </li>
          <li className="hover:text-white my-5">
            <Link
              to="message"
              className="text-dimWhite hover:text-white p-4 text-lg"
            >
              {"Messages"}
            </Link>
          </li>
          <li className="hover:text-white my-5">
            <Link
              to="user"
              className="text-dimWhite hover:text-white p-4 text-lg"
            >
              {"Users"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ControleNavigation;
