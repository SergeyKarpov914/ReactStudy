import { lazy } from "react";
import { Navigate } from "react-router-dom";

import FullLayout from '../layouts/FullLayout/FullLayout';

const BasicTable = lazy(() => import("../views/tables/BasicTable.js"));

// form elements
const ExAutoComplete = lazy(() =>  import("../views/FormElements/ExAutoComplete.js"));
const ExButton = lazy(() => import("../views/FormElements/ExButton.js"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.js"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.js"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.js"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.js"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));

const HomeTab       = lazy(() => import("../views/Tabs/HomeTab.js"));
const PeopleTab     = lazy(() => import("../views/Tabs/PeopleTab.js"));
const ArticlesTab   = lazy(() => import("../views/Tabs/ArticleTab.js"));
const TechnologyTab = lazy(() => import("../views/Tabs/TechnologyTab.js"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [

      { path: "/",                               element: <Navigate to="form-elements/home" /> },
      { path: "form-elements/home", exact: true, element: <HomeTab/> },
      { path: "/form-elements/people"  ,         element: <PeopleTab/> },
      { path: "/form-elements/articles",         element: <ArticlesTab/> },
      { path: "/form-elements/technology",       element: <TechnologyTab/> },
      
      { path: "tables/basic-table",          element: <BasicTable /> },
      { path: "/form-layouts/form-layouts",  element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/checkbox",     element: <ExCheckbox /> },
      { path: "/form-elements/radio",        element: <ExRadio /> },
      { path: "/form-elements/slider",       element: <ExSlider /> },
      { path: "/form-elements/switch",       element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
