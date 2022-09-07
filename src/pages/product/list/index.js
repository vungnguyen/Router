import React, {useContext, useEffect, useState} from "react";
import AppContext from "../../../context/AppContext";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

export default function ListProduct() {
    let navigate = useNavigate()
    const [list, setList] = useState(useContext(AppContext));
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <h2>List Products:</h2>
            <input
                value={searchParams.get("filter") || ""}
                onChange={event => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            <table className="table table-striped table-bordered ">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan='2' style={{textAlign: 'center'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {list.filter(product => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = product.name.toLowerCase();
                    // return name.startsWith(filter.toLowerCase());
                    return name.includes(filter.toLowerCase());
                })

                    .map((item, index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.price}$</td>
                        <td>
                            <button className="btn btn-primary"
                                   onClick = {() => {navigate(`/edit/${index}`)}}
                            >Edit
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={() => { window.confirm(`You sure to delete ${list[index].title} ` ) &&
                                    setList(list.filter((item, indexOfItem) => indexOfItem !== index))
                                    }}
                            >Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )

}
