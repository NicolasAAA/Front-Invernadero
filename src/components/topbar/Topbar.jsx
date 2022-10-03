import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,Search} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="https://static.wixstatic.com/media/781625_20c8f6de02a04714ae019243cef34051~mv2.png/v1/fill/w_248,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20MH%20GLOBAL.png" width={100} />
          
          <span className="logo" aling="left"> Invernadero Hidropónico</span>
        </div>
        
        <div className="topRight">
        <div className="topbarIconContainer">
            <input type="text" placeholder="Buscar..." ></input>
            <Search/>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://img2.freepng.es/20200413/cx/transparent-icon-design-5e9514e3e94e76.6287660515868285159556.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
