import { useParams } from "react-router-dom"
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useFetchProductDetailsQuery } from "./catalogApi";


export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useFetchProductDetailsQuery(Number(id))


  const productDetails = [
    { label: 'Name', value: data?.name },
    { label: 'Description', value: data?.description },
    { label: 'Type', value: data?.type },
    { label: 'Brand', value: data?.brand },
    { label: 'Quantity in Stock', value: data?.quantityInStock.toString() },
  ]

  if (isLoading || !data) return <Typography variant="h3"></Typography>;

  return (
    <Grid2 container spacing={6} maxWidth={'lg'} sx={{ mx: 'auto' }} >
      <Grid2 size={6}>
        <img src={data?.pictureUrl} alt={data?.name} style={{ width: '100%' }} />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h4">{data?.name}</Typography>
        <Divider sx={{ marginBottom: '8px' }} />
        <Typography variant="h5" color="secondary">${(data?.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table
            sx={{
              '& td': { fontSize: '1.25rem' }
            }}
          >
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: 'bold' }}>{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          <Grid2>
            <TextField
              label='Quantity'
              type="number"
              variant="outlined"
              defaultValue={1}
              inputProps={{ min: 1, max: data.quantityInStock }}
            />
          </Grid2>
          <Grid2 >
            <Button variant="contained" color="primary" sx={{ height: '55px' }}>Add to Cart</Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}