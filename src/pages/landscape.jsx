import { Articale } from "../components";
import { useParams } from "react-router-dom";
import { landScapeData } from "../constantes";

function Landscape() {
  const { name } = useParams();

  return (
    <div>
      <Articale data={landScapeData[name]} />
    </div>
  );
}

export default Landscape;
