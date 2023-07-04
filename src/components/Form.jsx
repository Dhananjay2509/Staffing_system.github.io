import React, { useState } from 'react';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TableData from "./TableData"


function Form() {

  const [formData, setFormData] = useState([]);
  const [fullName, setFullName] = useState('');
  const [file, setFile] = useState(null);
  const [technologies, setTechnologies] = useState([]);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleTechnologyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setTechnologies((prevTechnologies) => [...prevTechnologies, value]);
    } else {
      setTechnologies((prevTechnologies) => prevTechnologies.filter((tech) => tech !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {
      fullName: fullName,
      file: file,
      technologies: technologies,
    };
    setFormData((prevFormData) => [...prevFormData, newFormData]);
  }


  return (
    <>
      <div
        className='container'
        style={{
          maxHeight: "fit-content",
          padding: "10px 0 20px 0",
          backgroundColor: "white",
          width: "24vw",
          borderRadius: "30px",
          marginTop: "45px",
          border: "2px solid black",
          boxShadow: "10px 15px 8px rgba(10, 10, 10, 0.5)"
        }}>
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: 'center',
              flexDirection: "column",
              gap: 15
            }}
          >

            <AccountCircleSharpIcon fontSize='large' />
            <h3
              style={{
                margin: "0 0 5px 0"
              }}>
              Register Staff
            </h3>

            <Box>
              <TextField
                id="outlined"
                label="Full name"
                value={formData.fullName}
                onChange={handleFullNameChange}
                variant="outlined" />
            </Box>



            <div>
              <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-input">
                <Button
                  variant="contained"
                  component="span"
                  size='medium' >
                  Upload Resume
                </Button>
              </label>
            </div>

            <div >
              <label
                style={{
                  fontSize: "18px"
                }}> Technology :</label>
              <FormGroup >
                <FormControlLabel
                  control={<Checkbox value="React" checked={technologies.includes('React')}
                    onChange={handleTechnologyChange} />}
                  label="React"
                  value="React"
                />
                <FormControlLabel
                  control={<Checkbox value="Angular" checked={technologies.includes('Angular')}
                    onChange={handleTechnologyChange} />}
                  label="Angular"
                  value="Angular"

                />
                <FormControlLabel
                  control={<Checkbox value="Vue" checked={technologies.includes('Vue')}
                    onChange={handleTechnologyChange} />}
                  label="Vue"
                  value="Vue"

                />
              </FormGroup>


            </div>

            <Button
              variant="contained"
              type="submit"
              color='success'
              size='large'
              style={{
                borderRadius: "40px",
                width: "250px"
              }}>
              Submit Form
            </Button>


          </form>
        </div>
      </div>

      <TableData formData={formData} />
    </>
  )
}

export default Form
