import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        
        <span className="featuredTitle">Perdidas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">175 Lechugas</span>
          <span className="featuredMoneyRate">
            -34 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparado Al Mes Anterior</span>
      </div>
      
      <div className="featuredItem">
        <span className="featuredTitle">Costo De Lechugas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$790</span>
          <span className="featuredMoneyRate">
            +240 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparado Al Mes Anterior</span>
      </div>
    </div>
  );
}
