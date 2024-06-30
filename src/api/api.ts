import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const url = 'http://193.19.100.32:7000';

interface ICandidateInfo {
    last_name: string;
    first_name: string;
    email: string;
    role: string;
}

interface IStatus {
    token: string;
    status: string;
}

interface IRolesList {
    roles?: string[]
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: (builder) => ({
        getRoles: builder.query<IRolesList, undefined>({
            query: () => `/api/get-roles`,
        }),
        signUp: builder.mutation({
            query: (candidate: ICandidateInfo) => ({
                url: `/api/sign-up`,
                method: 'POST',
                body: candidate
            })
        }),
        getCode: builder.query({
            query: (email: string = '') => `/api/get-code?email=${email}`
        }),
        setStatus: builder.mutation({
            query: (status: IStatus) => ({
                url: `/api/set-status`,
                method: 'POST',
                body: status
            })
        })
    })
})

export const {
    useLazyGetCodeQuery,
    useLazyGetRolesQuery,
    useSetStatusMutation,
    useSignUpMutation
} = api;

