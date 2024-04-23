import {useRef, useState} from 'react'
import { FormView, SpaForm } from '../../components'
import { SpaController } from '../../controllers';
import { useParams } from "react-router-dom";

function SpaDetail() {
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new SpaController(abortController, setServerError);

  return (
    <div>
        <FormView View={SpaForm} controller={controller} prev={id}
        request_method={id == "new" ? controller.createSpa : controller.updateSpa}/>
    </div>
  )
}

export default SpaDetail;
