import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nuevos Miembros</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20200413/cx/transparent-icon-design-5e9514e3e94e76.6287660515868285159556.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jean Aranda</span>
            <span className="widgetSmUserTitle">Ing.Informatica</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://img2.freepng.es/20200413/cx/transparent-icon-design-5e9514e3e94e76.6287660515868285159556.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kevin Cercado</span>
            <span className="widgetSmUserTitle">Ing.Informatica</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
            
          </button>
        </li>
        
      </ul>
    </div>
  );
}
