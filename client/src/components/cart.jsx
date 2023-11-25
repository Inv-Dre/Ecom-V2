import Dropdown from 'react-bootstrap/Dropdown';
import './cart.css';

function CartBtn() {
  return (
    <>
      
      <Dropdown className='cart-btn'>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        Cart
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">ITEM1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">ITEM2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ITEM3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      
    </>
  );
}

export default CartBtn;