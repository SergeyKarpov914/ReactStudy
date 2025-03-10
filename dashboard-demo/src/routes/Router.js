import { lazy } from "react";
import { Navigate } from "react-router-dom";

import FullLayout from '../layouts/FullLayout/FullLayout';

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1.js"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable.js"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete.js")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton.js"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox.js"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio.js"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider.js"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch.js"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));

const Orders   = lazy(() => import("../views/dashboards/dashboard1-components/Orders.js"));

const Customer = lazy(() => import("../views/Tabs/Customer.js"));
const Supplier = lazy(() => import("../views/Tabs/Supplier.js"));
const Product  = lazy(() => import("../views/Tabs/Product.js"));
const Employee = lazy(() => import("../views/Tabs/Employee.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "dashboards/dashboard1", exact: true, element: <Dashboard1 /> },

      { path: "/form-elements/orders"   , element: <Orders    /> },
      { path: "/form-elements/customer", element: <Customer/> },
      { path: "/form-elements/supplier", element: <Supplier /> },
      { path: "/form-elements/product" , element: <Product  /> },
      { path: "/form-elements/employee", element: <Employee /> },

      { path: "tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
