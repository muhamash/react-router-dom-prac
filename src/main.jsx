import * as React from "react";
import * as ReactDOM from "react-dom/client";
import
  {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Index from ".";
import Contact from "./components/contact";
import { deleteContactAction, editContactAction, favAction, getContactActions } from "./components/contactsAction";
import { getContactLoader, getContactsLoader } from "./components/contactsLoader";
import EditContact from "./components/editContact";
import ErrorPage from "./components/errorPage";
import "./index.css";
import Root from "./root";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: getContactActions,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: favAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "contacts/:contactId/destroy",
            // element: <EditContact/>,
            // loader: getContactLoader,
            action: deleteContactAction,
            errorElement: <p>error delete</p>,
          },
        ],
      }
    ]
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact/>,
  // },
] );

ReactDOM.createRoot( document.getElementById( "root" ) ).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);