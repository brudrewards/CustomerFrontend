import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import { TextField, Button } from "@material-ui/core";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FormSubmit from './FormSubmit';
import './SignupForm.css'

function FormError(props) {
    const {error} = props;
    if (!error) {
        return null;
    }
    let message = '';
    if (error.type === 'required') {
        message = "Is required";
    } else if (error.type === 'minLength') {
        message = "Too Short";
    } else {
        message = "Unknown error";
    }
    return (
            <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>{message}</span>
                <ReportProblemRoundedIcon
                    fontSize="small"
                    className="signupForm__reportIcon"
                />
            </div>
    );
}
function SignupForm() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const onSubmit = (data) => {
        const output = {
            ...data,
            others: "others"
        }
        console.log(output)
    }
    console.log('>>>>>> ', errors);
    return (
        <div className="signupForm">
            <div className="signupForm__container">
                <form onSubmit={handleSubmit(onSubmit)} className="signupForm__form">
                    <h4 className="signupForm__section">Personal Information</h4>
                    <div className="signupForm__inputContainer">
                        <Controller
                            name={"fName"}
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field: { onChange, value } }) => (
                                <TextField 
                                    onChange={onChange} 
                                    label={"First Name"} 
                                    type="text"
                                    InputLabelProps={{style: { color: "rgba(0,0,0,.56)" }}}
                                    InputProps={{ style: { fontWeight: "800" } }}
                                    className="signupForm__input"
                                />
                            )}
                        />
                        {(errors.fName && <FormError error={errors.fName}/>)}
                    </div>
                    <div className="signupForm__inputContainer">
                        <Controller
                        name={"lName"}
                        control={control}
                        rules={{ required: true, minLength: 2 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="lName"
                            label={"Last name"}
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                        />
                            )}
                        />
                        {(errors.lName && <FormError error={errors.lName}/>)}
                    </div>

                    <div className="signupForm__inputContainer">
                    <Controller
                        name={"email"}
                        control={control}
                        rules={{ required: true, minLength: 4 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="email"
                            label={"Email Address"}
                            type="email"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                        // inputRef={register({ required: true })}
                        />
                        )}
                        />
                        {(errors.email && <FormError error={errors.email}/>)}
                    </div>
                    <div className="signupForm__inputContainer">
                    <Controller
                        name={"password"}
                        control={control}
                        rules={{ required: true, minLength: 4 }}
                        render={({ field: { onChange, value } }) => (
                        
                        <TextField
                            onChange={onChange} 
                            name="password"
                            label="Password"
                            type={passwordShown ? "text" : "password"}
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                        // inputRef={register({ required: true })}
                        />
                        )}
                        />
                        {passwordShown ? (
                            <VisibilityOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="signupForm__visibilityIcon"
                            />
                        ) : (
                            <VisibilityOffOutlinedIcon
                                onClick={() => setPasswordShown(!passwordShown)}
                                className="signupForm__visibilityIcon"
                            />
                        )}
                        {(errors.password && <FormError error={errors.password}/>)}
                    </div>

                    <div className="signupForm__inputContainer">
                    <Controller
                        name={"pNumber"}
                        control={control}
                        rules={{ required: true, minLength: 2 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="pNumber"
                            label="Phone Number"
                            type="Number"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"

                        />
                        )}
                        />
                        {(errors.pNumber && <FormError error={errors.pNumber}/>)}
                    </div>
                    <div className="signupForm__inputContainer">
                        <TextField
                            name="textBox"
                            label="Let us know what excites you about BRU’D Rewards?"
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)", padding: "1px" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="signupForm__input"
                        />
                    </div>
                    <span className="signupForm__span">
                        Join US, Earn points, Experience and turn those
                        points into rewards!
                    </span>
                    <Button variant="contained" onClick={handleSubmit(onSubmit)}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm


