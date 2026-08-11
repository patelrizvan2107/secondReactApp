import React, { use, useEffect, useState } from "react";
// import {spinner} from 'react-spinners';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Products(props) {
  const [p, setP] = useState([]);
  const [search, setSearch] = useState("");
  const [d, setD] = useState("");
  const [cate, setCate] = useState([])

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    console.log(data);

    let uc = []

    data.map((v) => {
        if (!uc.includes(v.category)) {
            uc.push(v.category)
        }
    })
    setCate(uc)
    setP(data);

    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    console.log(search);
    let fData = [];

    fData = p.filter(
      (v) =>
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase()) ||
        v.price.toString().includes(search),
    );

    console.log(d, fData);

    if (d === "hl") {
      fData = fData.sort((a,b) => b.price - a.price);
    //   console.log('high');
      
    } else if (d === "lh") {
      fData = fData.toSorted((a, b) => a.price - b.price);
    } else if (d === "az") {
      fData = fData.toSorted((a, b) => a.title.localeCompare(b.title));
    } else if (d === "za") {
      fData = fData.toSorted((a, b) => b.title.localeCompare(a.title));
    } 
    return fData;
  };
  let finalData = handleFilter();
    console.log(cate);

  return (
    <section>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Products</h1>
        <div className="row">
          <div className="col-6 my-3">
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Search...."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-6 my-3">
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setD(e.target.value)}
            >
              <option value={0}>Sort</option>
              <option value="hl">Price: High to Low</option>
              <option value="lh">Price: Low to High</option>
              <option value="az">Name: A to Z</option>
              <option value="za">Name: Z to A</option>
              <option value="uc">Unique Categories</option>\
            </Form.Select>
          </div>
        </div>
        <div>
             <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        {
            cate.map((v ) => (
                <ToggleButton id="tbg-radio-1" value={1}>
         {v}
        </ToggleButton>
            ))
        }
        
      </ToggleButtonGroup>
        </div>
        <div className="row" style={{ rowGap: "30px" }}>
          {p.length === 0 ? (
            <Spinner
              animation="border"
              role="status"
              style={{ margin: "0,auto" }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            finalData?.map((v) => (
              <div className="col-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={v.image}
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      {v.title.length > 20
                        ? v.title.substring(0, 20) + "..."
                        : v.title}
                    </Card.Title>
                    <Card.Text>{v.price}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
