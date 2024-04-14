import {useRef, useState} from 'react'
import { FormView, SpaForm } from '../../components'
import { PageController } from '../../controllers';
import { useParams } from "react-router-dom";

function SpaDetail() {
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new PageController(abortController, setServerError);

  return (
    <div>
        <FormView View={SpaForm} controller={controller} prev={id}
        request_method={id == "new" ? controller.updatePage : controller.updatePage}/>
    </div>
  )
}

export default SpaDetail;
