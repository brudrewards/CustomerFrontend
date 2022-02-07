import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Container } from "react-bootstrap";
const Menu = () => {
  const items = [
    {
      name: "vanilla Cappuccino",
      des: "cajp",
      price: "1",
      category: "cap",
    },
    {
      name: "espresso",
      des: "espp",
      price: "2",
      category: "Espresso",
    },
    {
      name: "latte",
      des: "laatte",
      price: "3",
      category: "latte",
    },
  ];

  const [addToggle, setAddToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [menuClicked, setMenuClicked] = useState("All");
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <Container id="menu" className="">
      {addToggle && (
        <div className="add-bg " onClick={() => setAddToggle(!addToggle)}>
          <div className="add-container d-flex flex-column p-3 rounded-3 position-absolute">
            <span
              className="pointer"
              onClick={() => {
                console.log("click");
              }}
            >
              Add New Item
            </span>
            <div className="p-2" />
            <span className="pointer">Add New Modifier</span>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Your Menu</h1>
        <div
          className="add-btn d-flex justify-content-center align-items-center pointer"
          onClick={() => setAddToggle(!addToggle)}
        >
          +
        </div>
      </div>
      <div className="border d-flex align-items-center p-1">
        <BsSearch className=" text-muted" />
        <input
          className="w-100"
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active d-flex flex-column align-items-center"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => setMenuClicked("All")}
          >
            All
            {menuClicked === "All" && <div className="menu-selected"></div>}
          </button>
        </li>

        {items.map((item, index) => {
          return (
            <li className="nav-item " role="presentation" key={index}>
              <button
                className="nav-link d-flex flex-column align-items-center"
                id={`${item.category}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${item.category}`}
                type="button"
                role="tab"
                aria-controls={`${item.category}`}
                aria-selected="false"
                onClick={() => setMenuClicked(item.category)}
              >
                {item.category}
                {menuClicked === item.category && (
                  <div className="menu-selected"></div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {items.map((item, index) => {
            return (
              <div className="d-flex border" key={index}>
                <div>image</div>
                <div className="d-flex flex-column border mx-2">
                  <span>{item.name}</span>
                  <span className="text-muted">{item.des}</span>
                  <div>
                    <span>${item.price}</span>
                    <button className="btn mx-5">edit</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="memu-selected"></div>
        </div>
        {items.map((item, index) => {
          return (
            <div
              className="tab-pane fade"
              id={item.category}
              role="tabpanel"
              aria-labelledby={`${item.category}-tab`}
              key={index}
            >
              <div className="d-flex border">
                <div>image</div>
                <div className="d-flex flex-column border mx-2">
                  <span>{item.name}</span>
                  <span className="text-muted">{item.des}</span>
                  <div>
                    <span>${item.price}</span>
                    <button className="btn mx-5">edit</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Menu;
