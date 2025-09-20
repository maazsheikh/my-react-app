import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './user.type';

export const userApi = createApi({
    reducerPath: 'api', // optional name for the reducer
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;  // Get token from redux
            if (token) {
                headers.set('authorization', `Bearer ${token}`); // set token in the header 
            }
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
            providesTags: ['User'],
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['User'],
        }),
        updateUser: builder.mutation<User, User>({
            query: (user) => ({
                url: `users/${user.id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;