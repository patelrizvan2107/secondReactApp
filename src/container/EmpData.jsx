import React from 'react';
import { useState } from 'react';
 let empData = [];
function EmpData(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [joiningDate, setJoiningDate] = useState("");

    
    const onSubmit = (e) => {
        e.preventDefault();

       
        
        let dataObject = {
            id: crypto.randomUUID(),
            name: name,
            age: age,
            joiningDate: joiningDate
        }
        console.log(name, age, joiningDate);

        empData.push(dataObject);

        localStorage.setItem("empData", JSON.stringify(empData));

        console.log(dataObject);
        
    console.log(empData.name);
        

        setAge("");
        setName("");
        setJoiningDate("");
    };

    let storedData = localStorage.getItem("empData");
    storedData = JSON.parse(storedData);

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Joining Date"
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>


            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Joining Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storedData?.map((v, i) => (
                        <tr key={i}>
                            <td>{v.name}</td>
                            <td>{v.age}</td>
                            <td>{v.joiningDate}</td>
                            <td><button>Delete</button><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpData;