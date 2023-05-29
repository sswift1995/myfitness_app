import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import MaskedInput from 'react-text-mask';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AddFood = () => {

    const navigate = useNavigate();

    const [date, setDate] = useState('')

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            date: formData.get('date'),
            servingSize: formData.get('servingSize'),
            calories: formData.get('calories'),
            timeOfDay: formData.get('timeOfDay'),
            mood: formData.get('mood')
        };
        fetch('http://localhost:3000/food/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    navigate('/tracker');
                } else {
                    throw new Error('Error: ' + response.status)
                }
            })
            .then((data) => {
                console.log('Success: ', data);
            })
            .catch((error) => {
                console.log('Error: ', error)
            });
    };

    const DateInputComponent = (props) => {
        const { inputRef, ...other } = props;
        return (
            <MaskedInput
                {...other}
                ref={(ref) => {
                    inputRef(ref ? ref.inputElement : null);
                }}
                mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]}
                placeholderChar={'\u2000'}
            />
        )
    }

    return (
        <div style={{ padding: "50px" }}>
            <h3>Add a meal</h3>
            <form onSubmit={handleSubmit}>
                {/* ...other form fields... */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date (YYYY/MM/DD)"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                name="date"
                                id="date"
                                variant="standard"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EventIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>
                <br />
                <TextField
                    type='text'
                    name='servingSize'
                    id="servingSize"
                    label="Serving(s)"
                    variant='standard'
                    required
                />
                <br />
                <TextField
                    type='text'
                    name='calories'
                    id="calories"
                    label="Calories"
                    variant='standard'
                />
                <br />
                <TextField
                    type='text'
                    name='timeOfDay'
                    id="timeOfDay"
                    label="Time of day"
                    variant='standard'
                />
                <br />
                <TextField
                    type='text'
                    name='mood'
                    id="mood"
                    label="Mood"
                    variant='standard'
                />
                <br />
                <br />
                <Button variant="outlined" color="error" type='submit'>Add Food</Button>
            </form>
        </div >
    );
};
export default AddFood;