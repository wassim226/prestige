import {useRef, useState} from 'react'
import { BlogPageForm, ContactPageForm, FormView, HomePageForm, LandscapePageForm, SpaPageForm } from '../../components'
import { PageController } from '../../controllers';
import { useParams } from "react-router-dom";
import { string, z } from "zod";
import { optionalImgValidator } from '../../constantes';

function PageDetail() {
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new PageController(abortController, setServerError);

  const getPage = ()=>{
    let page = null;
    switch(id){
      case "Home":
        page = HomePageForm;
        controller.schema = z.object({
            name: string(),
            extPresentation: string().min(1, "This field can not be blank"),
            presentationImg: optionalImgValidator,
            value_1: string().min(1, "This field can not be blank"),
            desc_1: string().min(1, "This field can not be blank"),
            value_2: string().min(1, "This field can not be blank"),
            desc_2: string().min(1, "This field can not be blank"),
            value_3: string().min(1, "This field can not be blank"),
            desc_3: string().min(1, "This field can not be blank"),
            value_4: string().min(1, "This field can not be blank"),
            desc_4: string().min(1, "This field can not be blank"),
          });
        break;
      case "Landscape":
        LandscapePageForm.defaultProps = {isPool: false};
        page = LandscapePageForm;
        break;
      case "Pool":
        LandscapePageForm.defaultProps = {isPool: true};
        page = LandscapePageForm;
        break;
      case "Spa":
        page = SpaPageForm;
        break;
      case "Water":
        page = <></>;
        break;
      case "Blog":
        page = BlogPageForm;
        break;
      case "Contact":
        page = ContactPageForm;
        break;
    }
    return page;
  }

  return (

    <div>
        <FormView View={getPage()} controller={controller}
        request_method={controller.updatePage}/>
    </div>
  )
}

export default PageDetail