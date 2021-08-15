import "./MenuPage.css";
import FoodMenu from "../../components/FoodInMenu/FoodMenu/FoodMenu";
import MenuSearch from "../../components/MenuSearchOptions/MenuSearchOptions";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

function MenuPage() {
  const { data: menuData, isPending, error } = useFetch(
    "http://localhost:8000/menuData"
  );

  return (
    <div className="menu-page-body">
      <div className="menu-page-container">
        <div className="menu-page-heading">
          <Link to="/" className="menu-home-btn">
            <span>Home</span>
          </Link>
          <h1>Menu</h1>
          <Link to="/viewcart" className="cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </div>
        <div className="selection-section">
          <MenuSearch />
        </div>
        {error && <div className="server-info">{error}</div>}
        {isPending && <div className="server-info">...fetching data</div>}
        {menuData && <FoodMenu menuData={menuData} />}

        <div className="menu-page-btn-container"></div>
      </div>
    </div>
  );
}

export default MenuPage;
