import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({paginate}) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <div>
         <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination count={6}  onChange={handleChange} />
          </Stack>
    </div>
   
  );
}
