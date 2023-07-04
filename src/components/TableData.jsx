import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableData({ formData }) {

  return (
    <>

      <div
        style={{
          margin: "30px 0 30px 0"
        }}>
        {formData &&
          <TableContainer
            component={Paper}
            style={{
              width: "50vw",
              boxShadow: "5px 10px 5px rgba(10, 10, 10, 0.5)"
            }}>
            <Table
              sx={{
                minWidth: 650
              }}
              aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    Full Name
                  </TableCell>
                  <TableCell
                    align="center">
                    Technology
                  </TableCell>
                  <TableCell
                    align="right">
                    Resume
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {formData.map((data, index) => (
                  <TableRow
                    key={index}>
                    <TableCell>
                      {data.fullName}
                    </TableCell>
                    <TableCell
                      align="center">
                      {data.technologies.join(', ')}
                    </TableCell>
                    <TableCell
                      align="right">
                      {data.file && (
                        <a
                          href={URL.createObjectURL(data.file)}
                          download={data.file.name}>
                          Download Resume
                        </a>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>

    </>
  )
}

export default TableData
