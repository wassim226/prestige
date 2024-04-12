import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { AddCircleOutline } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { frFR, arSA, enUS } from '@mui/material/locale';

const traduction_theme = createTheme(
  frFR,
);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
  const {headCells, order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.string != null ? 'left' : 'right'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
    const {title, handelAddItem, headCells,filters, setFilters} = props;
    
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
        <Typography
          sx={{flex : filters ? 'none' : '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
        <div className={`${filters ?'flex' : 'hidden'} flex-row justify-center w-full`}>
          {headCells.map((headCell, ind) => (
            <TextField key={ind} label={headCell.label} size='small' sx={{marginLeft:"8px"}}/>
          ))}
        </div>
        <Tooltip title="Filter list">
          <IconButton onClick={(()=>{
            setFilters((prev)=> !prev);
          })}>
            <FilterListIcon className='text-secondary' />
          </IconButton>
        </Tooltip>
        {handelAddItem ? <Tooltip title={`Add ${title}`}>
          <IconButton onClick={handelAddItem}>
            <AddCircleOutline className='text-secondary' />
          </IconButton>
        </Tooltip> : <></>}
        
    </Toolbar>
  );
}


export default function DataTable(props) {
  // const [_, i18n] = useTranslation("global");
  const {title, data, handelAddItem, filters, setFilters} = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.rows.length) : 0;

  const visibleRows =
  React.useMemo(
    () =>
      stableSort(data.rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  
  return (
    <Box sx={{ width: '100%', overflow:'hidden' }}>
      <Paper sx={{ width: '100%', mb: 2, borderRadius: "0px 0px 8px 8px" }}>
        <EnhancedTableToolbar title={title} handelAddItem={handelAddItem}
        headCells={data.headCells} filters={filters} setFilters={setFilters}/>
        <TableContainer sx={{ maxHeight: "60vh" }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
            stickyHeader 
          >
            <EnhancedTableHead
              headCells={data.headCells}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={data.rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                let visibleCellsIndex = 0;
                return (
                  <TableRow
                    hover
                    component={Link}
                    to={`detail/${row.id}`}
                    tabIndex={index}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    {
                      Object.entries(row).map(([key, value])=>{
                        
                        if(key == data.headCells[visibleCellsIndex].id){
                          if(visibleCellsIndex < data.headCells.length-1){
                            visibleCellsIndex++;
                          }

                          return (
                            data.headCells[visibleCellsIndex - 1].string ?? false
                            ? <TableCell key={key} component="th" id={labelId} scope="row" padding="normal" className=' max-w-[30vh] truncate'>
                                {value}
                              </TableCell> 
                            : <TableCell key={key} align="right"  className=' max-w-[30vh] truncate'>{value}</TableCell>
                          );
                        }
                      })
                    }
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <ThemeProvider theme={traduction_theme}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </ThemeProvider>
      </Paper>
    </Box>
  );
}