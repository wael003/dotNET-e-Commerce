import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";



const customBaseQuery = fetchBaseQuery({
    baseUrl: '/api'
});

const sleep = () => new Promise<void>(resolve => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {

    api.dispatch(startLoading());

    await sleep();
    const result = await customBaseQuery(args, api, extraOptions);

    api.dispatch(stopLoading());


    if (result.error) {
        console.error('Error status:', result.error.status, 'Error details:', result.error.data);
    }

    return result;
}