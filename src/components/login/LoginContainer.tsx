import React from 'react'
import './LoginContainer.scss'
import logo from '../../assets/xoyTicketWhite.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppDispatch } from 'hooks/hooks';
import { startLogin } from 'store/auth';
export const LoginContainer = () => {


    const dispatch = useAppDispatch();
    return (
        <div className="loginContainer">

            <div className="loginContainer__card">

                <div className="loginContainer__card__leftside">
                    <h2
                        className="loginContainer__card__leftside__title"
                    >
                        Descarga tus boletos
                    </h2>

                    <p className="loginContainer__card__leftside__subtitle">
                        Descarga tus boletos en formato PDF facilmente.
                    </p>

                    <Formik
                        initialValues={{

                            email: '',
                            password: ''
                        }}
                        validate={values => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = 'Requerido';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Tiene que ser un email válido';
                            }

                            if (!values.password) {
                                errors.password = 'Requerido';
                            }
                            return errors;
                        }
                        }
                        onSubmit={(values, { setSubmitting }) => {

                            dispatch(startLogin({
                                correo: values.email,
                                contrasena: values.password
                            }));
                        }}
                    >

                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <Field
                                        name="email"
                                        placeholder='Introduce tu correo electronico'
                                        className="input"
                                    />
                                    <ErrorMessage name="email" component="span"
                                        className="error"
                                    />
                                </div>
                                <div>

                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder='Introduce tu contraseña'
                                        className="input"
                                    />
                                    <ErrorMessage name="password" component="span"
                                        className="error" />
                                </div>

                                <button type="submit" className="loginContainer__card__leftside__button">
                                    Iniciar sesión
                                </button>
                            </Form>

                        )}
                    </Formik>


                </div>
                <div className="loginContainer__card__rightside">
                    <img src={logo} alt="" />
                </div>

            </div>
        </div>
    )
}



