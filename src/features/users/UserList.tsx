import type { User } from './user.type';
import { useState } from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from './userApi';
import UserForm from './userForm';

const UserList = () => {
    const { data, error, isLoading, isFetching } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    if (isLoading) return <p>Loading users...</p>;
    if (error) return <p>Error fetching users!</p>;
    return (
        <div>
            <h2>Users</h2>

            <UserForm
                selectedUser={selectedUser}
                onSuccess={() => setSelectedUser(null)}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data ?.map((usr: User) => (
                        <tr>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.email}</td>
                            <td>{usr.phone}</td>
                            <td>
                                <button onClick={() => setSelectedUser(usr)}>
                                    Edit
                                </button>
                                <button onClick={() => deleteUser(usr.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isFetching && <p>Updating...</p>}
        </div>
    );
};
export default UserList;