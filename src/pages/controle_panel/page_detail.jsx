import {useRef, useState} from 'react'
import { FormView } from '../../components'
import { PageController } from '../../controllers';
import { useParams } from "react-router-dom";
import { getPage } from '../../constantes';

function PageDetail() {
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new PageController(abortController, setServerError);

  return (
    <div>
      <FormView View={getPage(id, controller)} controller={controller}
      request_method={controller.updatePage}/>
    </div>
  )
}

export default PageDetail