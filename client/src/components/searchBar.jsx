import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

function SearchBar() {
  return (
    <div className="searchbar">
        <style type="text/css">
            {`
            .btn-success {
                background-color: blue;
                justify-content-end;
                width: "90%";

            }
            .btn-success:hover {
                background-color: #0000ff8f;
            }
            .btn-success:click {
                background-color: #0000ff8f;
            }
            `}
        </style>
      <Dropdown as={ButtonGroup}>
        <Button variant="success">
          <input type="search" placeholder="Search here" />
        </Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

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
