import { createApi } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../app/models/product';
import { baseQueryWithErrorHandling } from '../../app/api/baseApi';

export const catalogApi = createApi({
    reducerPath: 'catalogAPI',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({ url: 'products' })
        }),
        fetchProductDetails: builder.query<Product, number>({
            query: (id) => ({ url: `products/${id}` })
        })
    })
})

export const { useFetchProductDetailsQuery, useFetchProductsQuery } = catalogApi;