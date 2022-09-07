import React from 'react';
import {Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import {useContext, useState} from 'react'
import AppContext from "../../../context/AppContext";
import {useNavigate, useParams} from "react-router";

function Create () {
    const [list, setList] = useState(useContext(AppContext))
    let navigate = useNavigate()

    return(
        <div>
            <Formik
                initialValues = {
                    {
                        name:'',
                        price: ''
                    }
                }
                onSubmit={((values, form) => {
                    list.push(values)
                    // setList([...list, values]);
                    form.resetForm();
                })}
            >
                <Form>
                    <Field name = 'name' placeholder = 'Name'></Field>
                    <br />
                    <Field name = 'price' placeholder = 'Price'></Field>
                    <br />
                    <button>Save</button>
                </Form>
            </Formik>

            <nav>
                <Link to ='/' >Home</Link>
            </nav>
        </div>
    )
}
export default Create;