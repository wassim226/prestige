import {useRef, useState} from 'react'
import { FormView } from '../../components'
import { ContactController, PageController } from '../../controllers';
import { useParams } from "react-router-dom";
import { getPage } from '../../constantes';

function PageDetail() {
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = id == "Contact" ? new ContactController(abortController, setServerError) : new PageController(abortController, setServerError);

  return (
    <div>
      <FormView View={getPage(id, controller)} controller={controller}
      request_method={controller.updatePage}/>
    </div>
  )
}

export default PageDetail