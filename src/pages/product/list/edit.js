import {Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import {useContext, useState} from 'react'
import AppContext from "../../../context/AppContext";
import {useNavigate, useParams} from "react-router";

function Edit () {
    const [list, setList] = useState(useContext(AppContext));
    let navigate = useNavigate();
    let index = useParams().id;
    return(
        <div>
            <h2>Edit product</h2>
            <Formik initialValues={list[index]}
                    onSubmit={(values) => {
                        list[index] = values;
                        navigate('/')
                    }}
            >
                <Form>
                    <Field name = 'name' placeholder = 'Name'></Field>
                    <br />
                    <Field name = 'price' placeholder = 'Price'></Field>
                    <br />
                    <button >Edit</button>
                </Form>

            </Formik>
        </div>
    )

}
export default Edit;