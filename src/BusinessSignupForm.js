import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import { TextField, Button } from "@material-ui/core";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import './BusinessSignupForm.css'

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

function BusinessSignupForm() {
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
        <div className="businessSignupForm">
            <div className="businessSignupForm__container">
                <form onSubmit={handleSubmit(onSubmit)} className="businessSignupForm__form">
                    <h4 className="businessSignupForm__section">Business Information</h4>
                    <div className="businessSignupForm__inputContainer">
                        <Controller
                            name={"ownerName"}
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field: { onChange, value } }) => (
                                <TextField 
                                    onChange={onChange} 
                                    label={"Owner Name"} 
                                    type="text"
                                    InputLabelProps={{style: { color: "rgba(0,0,0,.56)" }}}
                                    InputProps={{ style: { fontWeight: "800" } }}
                                    className="businessSignupForm__input"
                                />
                            )}
                        />
                        {(errors.ownerName && <FormError error={errors.ownerName}/>)}
                    </div>
                    <div className="businessSignupForm__inputContainer">
                        <Controller
                        name={"businessName"}
                        control={control}
                        rules={{ required: true, minLength: 2 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="businessName"
                            label={"Business name"}
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="businessSignupForm__input"
                        />
                            )}
                        />
                        {(errors.businessName && <FormError error={errors.businessName}/>)}
                    </div>

                    <div className="businessSignupForm__inputContainer">
                        <Controller
                        name={"cityName"}
                        control={control}
                        rules={{ required: true, minLength: 2 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="cityName"
                            label={"City name"}
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="businessSignupForm__input"
                        />
                            )}
                        />
                        {(errors.cityName && <FormError error={errors.cityName}/>)}
                    </div>

                    <div className="businessSignupForm__inputContainer">
                        <Controller
                        name={"stateName"}
                        control={control}
                        rules={{ required: true, minLength: 2 }}
                        render={({ field: { onChange, value } }) => (
                        <TextField
                            onChange={onChange} 
                            name="stateName"
                            label={"State name"}
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="businessSignupForm__input"
                        />
                            )}
                        />
                        {(errors.stateName && <FormError error={errors.stateName}/>)}
                    </div>
                    <div className="businessSignupForm__inputContainer">
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
                            className="businessSignupForm__input"

                        />
                        )}
                        />
                        {(errors.pNumber && <FormError error={errors.pNumber}/>)}
                    </div>
                    <div className="businessSignupForm__inputContainer">
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
                            className="businessSignupForm__input"
                        />
                        )}
                        />
                        {(errors.email && <FormError error={errors.email}/>)}
                    </div>
                    

                    
                    <div className="businessSignupForm__inputContainer">
                        <TextField
                            name="textBox"
                            label="Let us know any questions you have, if any"
                            type="text"
                            InputLabelProps={{
                                style: { color: "rgba(0,0,0,.56)", padding: "1px" },
                            }}
                            InputProps={{ style: { fontWeight: "800" } }}
                            className="businessSignupForm__input"
                        />
                    </div>
                    <span className="businessSignupForm__span">
                        Join US, Earn points, Experience and turn those
                        points into rewards!
                    </span>
                    <Button variant="contained" onClick={handleSubmit(onSubmit)}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default BusinessSignupForm