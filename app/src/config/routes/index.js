import Home from "../../pages/home/home";
import NotesContainer from "../../pages/myNotes/NotesContainer";

export default class SiteRoutes {
  static getList = () => [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/notes",
      component: NotesContainer,
    },
  ];
}
