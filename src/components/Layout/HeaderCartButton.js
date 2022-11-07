import CartIcon from "../../assets/logo/CartIcon";
import "./HeaderCartButton.scss";

const HeaderCartButton = () => {
 

  return (
    <div className="button bump"  >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Basket</span>
      <span className="bdg">0</span>
    </div>
  );
  
};
export default HeaderCartButton;