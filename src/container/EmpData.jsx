import React, { useEffect, useState } from "react";
import {
    Container,
    Card,
    Form,
    Button,
    Table,
    Row,
    Col,
    Badge,
} from "react-bootstrap";
import { BiTrash, BiEdit, BiUserPlus, BiMoon, BiSun } from "react-icons/bi";

function EmpData() {
    const [name, setName] = useState("");
    const [sal, setSal] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [data, setData] = useState([]);
    const [up, setUp] = useState(null);
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState(false);

    useEffect(() => {
        let localeData = JSON.parse(localStorage.getItem("empData")) || [];
        setData(localeData);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const dataObject = {
            id: crypto.randomUUID(),
            name,
            sal,
            joiningDate,
        };

        if (up !== null) {

            let index = data.findIndex(v => v.id === up);

            let edited = [...data]

            edited[index] = dataObject;

            setData(edited)

            localStorage.setItem('empData', JSON.stringify(edited))

            setUp(null)

        } else {
            const storedData = JSON.parse(localStorage.getItem("empData")) || [];
            const updatedData = [...data, dataObject];

            localStorage.setItem("empData", JSON.stringify(updatedData));
            setData(updatedData);
        }

        setSal("");
        setName("");
        setJoiningDate("");
    };

    const handleDel = (id) => {
        console.log("fahhhh", id);

        // let del = data.filter((v) => v.id !== id);
        // setData(del)
        // localStorage.setItem("empData", JSON.stringify(del))

        let index = data.findIndex((v) => v.id === id);
        let del = [...data];
        console.log(del);

        del.splice(index, 1);
        setData(del);

        console.log(data);

        localStorage.setItem("empData", JSON.stringify(del));
    };

    const handleEdit = (id) => {
        let obj = data.find((v) => v.id === id);

        setName(obj.name);
        setJoiningDate(obj.joiningDate);
        setSal(obj.sal);

        setUp(id)
    };

    const handleSearch = () => {
        console.log(search);


        let s = data.filter((v) => v.name.toLowerCase().includes(search.toLowerCase()))

        // if (sortBy === 'name') {
        //     s.sort((a, b) => a.name.localeCompare(b.name));
        // } else if (sortBy === 'sal') {
        //     s.sort((a, b) => a.sal - b.sal);
        // } else if (sortBy === 'joiningDate') {
        //     s.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
        // } 

        if (sortBy === true) {

            s.sort((a, b) => a.name.localeCompare(b.name) || a.sal - b.sal || new Date(a.joiningDate) - new Date(b.joiningDate));

        }


        // if (sortBy === 'name') {
        //     s.sort((a, b) => a.name.localeCompare(b.name));
        // } else {
        //     s = [...data]
        // } if (sortBy === 'sal') {
        //     s.sort((a, b) => a.sal - b.sal);
        // } else  {
        //     s = [...data]

        // }if (sortBy === 'joiningDate') {
        //     s.sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate));
        // } else {
        //     s = [...data]

        // }
        return s
    }

    let searched = handleSearch();
    
    console.log(sortBy);

    return (
        <div
            className={`min-vh-100 py-5 transition-all ${isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
                }`}
        >
            <Container className="max-w-lg">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Employee Directory</h2>
                        <p
                            className={`mb-0 ${isDarkMode ? "text-light-50" : "text-muted"}`}
                        >
                            Manage your team records effortlessly
                        </p>
                    </div>
                    <Button
                        variant={isDarkMode ? "outline-light" : "outline-dark"}
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        className="d-flex align-items-center gap-2 rounded-pill px-3"
                    >
                        {isDarkMode ? <BiSun size={18} /> : <BiMoon size={18} />}
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                </div>

                {/* Input Form Card */}
                <Card
                    className={`shadow-sm border-0 mb-4 ${isDarkMode ? "bg-secondary text-white" : "bg-white"
                        }`}
                >
                    <Card.Body className="p-4">
                        <h5 className="card-title fw-semibold mb-3 d-flex align-items-center gap-2">
                            <BiUserPlus size={22} /> Add New Employee
                        </h5>
                        <Form onSubmit={onSubmit}>
                            <Row className="g-3">
                                <Col md={4}>
                                    <Form.Group controlId="empName">
                                        <Form.Label className="small fw-medium">Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g. John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className={
                                                isDarkMode ? "bg-dark text-white border-secondary" : ""
                                            }
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group controlId="empSal">
                                        <Form.Label className="small fw-medium">
                                            Salary ($)
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="e.g. 50000"
                                            value={sal}
                                            onChange={(e) => setSal(e.target.value)}
                                            required
                                            className={
                                                isDarkMode ? "bg-dark text-white border-secondary" : ""
                                            }
                                        />
                                    </Form.Group>
                                </Col>

                                <Col md={4}>
                                    <Form.Group controlId="empDate">
                                        <Form.Label className="small fw-medium">
                                            Joining Date
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={joiningDate}
                                            onChange={(e) => setJoiningDate(e.target.value)}
                                            required
                                            className={
                                                isDarkMode ? "bg-dark text-white border-secondary" : ""
                                            }
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="d-flex justify-content-end mt-4">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="px-4 rounded-2"
                                >
                                    Add Record
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

                <input type="text"
                    placeholder="Search...."
                    onChange={(e) => setSearch(e.target.value)} />

                {/* Data Table Card */}
                <Card
                    className={`shadow-sm border-0 ${isDarkMode ? "bg-secondary text-white" : "bg-white"
                        }`}
                >
                    <Card.Body className="p-0">
                        <Table
                            responsive
                            hover
                            variant={isDarkMode ? "dark" : "light"}
                            className="align-middle mb-0"
                        >
                            <thead className="table-light border-bottom" onClick = {() => setSortBy(!sortBy)}>
                                <tr >
                                    <th className="px-4 py-3" onClick={(e) => setSortBy('srn' ? 'srn' : '')}>ID</th>
                                    <th className="px-4 py-3" onClick={(e) => setSortBy('name' ? 'name' : '')}>Name</th>
                                    <th className="py-3" onClick={(e) => setSortBy('sal' ? 'sal' : '')}>Salary</th>
                                    <th className="py-3" onClick={(e) => setSortBy('joiningDate' ? 'joiningDate' : '')}>Joining Date</th>
                                    <th className="text-end px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length > 0 ? (
                                    searched?.map((v, i) => (
                                        <tr key={v.id}>
                                            <td className="px-4 fw-medium">{i + 1}</td>
                                            <td className="px-4 fw-medium">{v.name}</td>
                                            <td>
                                                <Badge
                                                    bg="success"
                                                    className="px-2 py-1 bg-opacity-10 text-success"
                                                >
                                                    ${Number(v.sal).toLocaleString()}
                                                </Badge>
                                            </td>
                                            <td>{v.joiningDate}</td>
                                            <td className="text-end px-4">
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    className="me-2"
                                                >
                                                    <BiEdit size={16} onClick={() => handleEdit(v.id)} />
                                                </Button>
                                                <Button variant="outline-danger" size="sm">
                                                    <BiTrash size={16} onClick={() => handleDel(v.id)} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-center py-4 text-muted">
                                            No employee records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default EmpData;
