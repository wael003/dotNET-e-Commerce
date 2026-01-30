import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { Product } from "../../app/models/product";
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    //fetch product by id
    fetch(`http://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);


  const productDetails = [
    { label: 'Name', value: product?.name },
    { label: 'Description', value: product?.description },
    { label: 'Type', value: product?.type },
    { label: 'Brand', value: product?.brand },
    { label: 'Quantity in Stock', value: product?.quantityInStock.toString() },
  ]

  if (!product) return <Typography variant="h3">Loading...</Typography>;

  return (
    <Grid2 container spacing={6} maxWidth={'lg'} sx={{ mx: 'auto' }} >
      <Grid2 size={6}>
        <img src={product?.pictureUrl} alt={product?.name} style={{ width: '100%' }} />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{marginBottom: '8px'}}/>
        <Typography variant="h5" color="secondary">${(product?.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table
            sx={{
              '& td': {fontSize: '1.25rem'}
            }}
          >
            <TableBody>
              {productDetails.map((detail, index)=>(
                <TableRow key={index}>
                  <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
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
              inputProps={{ min: 1, max: product.quantityInStock }}
            />
          </Grid2>
          <Grid2 >
            <Button variant="contained" color="primary" sx={{height: '55px'}}>Add to Cart</Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}