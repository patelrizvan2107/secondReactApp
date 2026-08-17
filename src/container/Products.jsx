import React, { use, useEffect, useState } from "react";
// import {spinner} from 'react-spinners';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from "react-router";
function Products(props) {
  const [p, setP] = useState([]);
  const [search, setSearch] = useState("");
  const [d, setD] = useState("");
  const [cate, setCate] = useState([]);
  const [slcCat, setSlcCat] = useState("All");
  const [cp, setCp] = useState(1)
  const {id} = useParams()
  console.log(id);
  
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    console.log(data);

    let uc = [];

    data.map((v) => {
      if (!uc.includes(v.category)) {
        uc.push(v.category);
      }
    });
    setCate(uc);
    setP(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    console.log(search);
    console.log(slcCat);
    let fData = [];

    fData = p.filter(
      (v) =>
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase()) ||
        v.price.toString().includes(search),
    );

    console.log(d, fData);

    if (d === "hl") {
      fData = fData.sort((a, b) => b.price - a.price);
      //   console.log('high');
    } else if (d === "lh") {
      fData = fData.sort((a, b) => a.price - b.price);
    } else if (d === "az") {
      fData = fData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (d === "za") {
      fData = fData.sort((a, b) => b.title.localeCompare(a.title));
    }

    //use filter for cate releted data
    if (slcCat !== "All") {
      fData = fData.filter((v) => v.category === slcCat);
    }

    return fData;
  };

  let finalData = handleFilter();

  
  console.log(cate);
  let perPage = 5;
  let page = Math.ceil(finalData.length / perPage)
  console.log(page);

  const Paginationed = () => {

        //20      0-4  5-9  10-14  15-19
      const sI = (cp - 1 ) * perPage;
      const lI = (sI - 1) + perPage

      return finalData.slice(sI, lI + 1)
  }
  
  let pages = Paginationed ()

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
            </Form.Select>
          </div>
        </div>
        <div>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton
              id={`tbg-radio-1`}
              value="All"
              onChange={(e) => setSlcCat(e.currentTarget.value)}
            >
              All
            </ToggleButton>
            {cate.map((v, i) => (
              <ToggleButton
                id={`tbg-radio-${i + 2}`}
                value={v}
                onChange={(e) => setSlcCat(e.currentTarget.value)}
              >
                {v}
              </ToggleButton>
            ))}
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
            <>
              {pages?.map((v) => (
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
              ))}

              <Pagination>
               
                <Pagination.Prev onClick={() => setCp(cp - 1)} disabled = {cp === 1}/>
                  {
                    Array.from({length: page}, (_,i) => 
                    <Pagination.Item onClick={() => setCp(i + 1)} active = {cp === i + 1}>{i + 1}</Pagination.Item>)
                  }
                <Pagination.Next onClick={() => setCp(cp + 1)} disabled = {cp === page}/>
               
              </Pagination>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
