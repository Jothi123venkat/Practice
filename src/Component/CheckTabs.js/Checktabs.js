import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const headCells = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'calories',
    label: 'Calories',
  },
  {
    id: 'fat',
    label: 'Fat',
  },
  {
    id: 'carbs',
    label: 'Carbs',
  },
  {
    id: 'protein',
    label: 'Protein(g)',
  },
];

const rows = [
  { id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { id: 6, name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
];

function EnhancedTableHead({ onSelectAllClick, numSelected }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rows.length}
            checked={numSelected === rows.length}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sx={{padding:0}}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onSelectAllClick: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

function EnhancedTable() {
  const [selected, setSelected] = useState([]);
  const [dense] = useState(false);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              onSelectAllClick={handleSelectAllClick}
              numSelected={selected.length}
            />
            <TableBody>
              {rows.map((row) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${row.id}`;

                return (
                  <TableRow
                    hover
                    onClick={() => setSelected(selected.includes(row.id) ? [] : [row.id])}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" align='left'>
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default EnhancedTable;
