import { useContext, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import dataContext from '../../Store/data-context';
import useInput from '../../Hooks/use-input';
import './AddUser.css'

const AddUser = props => {

    const ctx = useContext(dataContext);
    const { addUser } = useContext(dataContext);

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler:nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(val => val.trim() !== '');
   
    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangeHandler,
        valueBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput
    } = useInput(val => val.trim() !== '')

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(val => val.includes('@'));

    const {
        value: enteredAge,
        isValid: enteredAgeIsValid,
        hasError: ageInputHasError,
        valueChangeHandler: ageChangeHandler,
        valueBlurHandler: ageBlurHandler,
        reset: resetAgeInput
    } = useInput(val => val >= 18 && val <= 90);

    // First Name Inputs
    // const[enteredName,setEnteredName] = useState('');
    // const[enteredNameTouched,setEnteredNameTouched] = useState(false);

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    // Last Name Inputs

    // const[enteredLastName,seteEnteredLastName] =  useState('');
    // const[enteredLastNameTouched,setEnteredLastNameTouched] = useState(false);

    // const enteredLastNameIsValid = enteredLastName.trim() !== '';
    // const lastNameInputIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;

    // Email Inputs
    // const [enteredEmail,setEnteredEmail] = useState('');
    // const[emailTouched,setEmailTouched] = useState(false);

    // const enteredEmailIsValid = enteredEmail.includes('@');
    // const emailInputIsInvalid = !enteredEmailIsValid && emailTouched;

    // Age Inputs
    // const [enteredAge,setEnteredAge] = useState('');
    // const [ageTouched,setAgeTouched] = useState(false);

    // const enteredAgeIsValid = enteredAge.trim() >= 18 && enteredAge.trim() <= 90;
    // const ageInputIsInvalid = !enteredAgeIsValid && ageTouched;

    // Selected Inputs
    
    const [option,setOption] = useState('DEFAULT');
    const [optionTouched,setOptionTouched] = useState('');

    const enteredOptionIsValid = option.trim() !== 'DEFAULT';
    const optionInputIsInvalid = !enteredOptionIsValid && optionTouched;

    let formIsValid = false;

    if(enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid && enteredAgeIsValid && enteredOptionIsValid){
        formIsValid = true;
    }


    // const nameInputChangeHandler = (event) =>{
    //     setEnteredName(event.target.value);
    // };

    // const nameBlurHandler = () => {
    //     setEnteredNameTouched(true);
    // };

    // const lastNameInputChangeHandler = event => {
    //     seteEnteredLastName(event.target.value);
    // }

    // const lastNameBlurHandler = () => {
    //     setEnteredLastNameTouched(true);
    // }

    // const emailInputChangeHandler = event => {
    //     setEnteredEmail(event.target.value);
    // }

    // const emailBlurHandler = () => {
    //     setEmailTouched(true);
    // }

    // const ageInputChangeHandler = event => {
    //     setEnteredAge(event.target.value)
    // }

    // const ageBlurHandler = () => {
    //     setAgeTouched(true);
    // }

    const selectInputChangeHandler = event => {
        setOption(event.target.value)
    }

    const optionBlurHandler = () => {
        setOptionTouched(true);
        console.log(true);
    }

    const addUSerHandler = () => {

        resetNameInput();
        resetLastNameInput();
        resetEmailInput();
        resetAgeInput();

        //setEnteredNameTouched(true);
        //setEnteredLastNameTouched(true);
        // setEmailTouched(true);
        // setAgeTouched(true);

        // if(!enteredNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid || !enteredAgeIsValid || !enteredOptionIsValid){
        //     console.log('is invalid')
        //     return;
        // }

        const newUser = {
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
            name: enteredName,
            lastName: enteredLastName,
            email: enteredEmail,
            age: enteredAge,
            position: option
        }
        addUser(newUser)
        // props.addUser(newUser);


        //setEnteredName('');
        //setEnteredNameTouched(false);

        // seteEnteredLastName('');
        // setEnteredLastNameTouched(false)

        // setEnteredEmail('');
        // setEmailTouched(false);

        // setEnteredAge('');
        // setAgeTouched(false);

        setOption('DEFAULT');
        setOptionTouched(false);
    }

    //const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


    return(
        <Container>
            <Row>
                <h1 style={{textAlign:'center'}}>Add new user</h1>
            </Row>
            <Row>
                <Col  sm="12" md={{ size: 6, offset: 3 }}>
                <div className="form-group cont">
                <label>Name</label>
                <input
                className='form-control'
                type="text"
                name="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
                />
                {nameInputHasError &&<p className="invalid">Enter a valid value</p>}
                <label>Last Name</label>
                <input
                className="form-control"
                type="text"
                name="name"
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                value={enteredLastName}
                />
                {lastNameInputHasError &&<p className="invalid">Enter a valid value</p>}
                <label>Email</label>
                <input
                className="form-control"
                type="email"
                name="name"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                />
                {emailInputHasError &&<p className="invalid">Email must contain an '@'</p>}
                <label>Age</label>
                <input
                className="form-control"
                type="number"
                name="name"
                onChange={ageChangeHandler}
                onBlur={ageBlurHandler}
                value={enteredAge}
                />
                {ageInputHasError &&<p className="invalid">Age must be between 18 and 90 </p>}
                <label>Position</label>
                <select name="select" value={option} className="form-control" onChange={selectInputChangeHandler} onBlur={optionBlurHandler}>
                    <option value="DEFAULT" disabled>Select a position</option>
                    <option value="developer">Developer</option>
                    <option value="tester">Tester</option>
                    <option value="designer">Designer</option>
                </select>
                {optionInputIsInvalid &&<p className="invalid">Please select an option</p>}
                {/* <input
                className="form-control"
                type="text"
                name="name"
              
                /> */}
                <Button style={{marginTop: '10px'}} color="primary" size="lg" disabled={!formIsValid}  onClick={addUSerHandler}>Add User</Button>
                </div>
                </Col>
            </Row>
        </Container>

    )

};

export default AddUser;