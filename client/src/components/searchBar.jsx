import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import './searchbar.css';

function SearchBar() {
  return (
    <div className="searchbar">
      <Dropdown as={ButtonGroup}>
        <Button>
          <input type="search" placeholder="Search here" />
        </Button>
        <Dropdown.Toggle split id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SearchBar;
