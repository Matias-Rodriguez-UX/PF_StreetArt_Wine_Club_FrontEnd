import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../actions/userActions";


export default function AdminCustomers() {
    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.users.allUsers)
    const [userList, setUserList] = useState(allUsers);

    useEffect(() => {
        dispatch(getAllUsers())

    }, [])
    console.log(allUsers)

    // const headers = Object.keys(allUsers[0]);
    // headers.push("banned")


    // const handleBan = id => {
    //     const newUserList = userList.map(user => {
    //         if (user.id === id) {
    //             return { ...user, banned: !user.banned };
    //         }
    //         return user;
    //     });
    //     setUserList(newUserList);
    // };

    return (
        <>
            <h1>Customers</h1>
            {/* <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((item, index) => (
                        <tr key={index} onClick={() => handleClick(item)} style={{ cursor: 'pointer' }}>
                            {headers.map((header, subIndex) => (
                                header === "banned" ? <td>
                                    <input
                                        type="checkbox"
                                        checked={item.banned}
                                        onChange={() => handleBan(item.id)}
                                    />
                                </td> :
                                    (typeof item[header] !== "object") ?
                                        <td key={subIndex} className="ellipsis">{item[header]}</td> :
                                        <td key={subIndex} className="ellipsis"> {item[header].map((el, index) =>
                                            (typeof el !== 'object') ?
                                                <li key={index} style={{ listStyleType: 'none' }}>{el}</li> :
                                                <li key={index} style={{ listStyleType: 'none' }}>{el.name}</li>
                                        )}</td>
                            ))}
                        </tr>
                    ))}

                </tbody>
            </Table> */}
        </>
    )
}