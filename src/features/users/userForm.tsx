import React, { useState, useEffect } from 'react';
import { useAddUserMutation, useUpdateUserMutation } from './userApi';
import type { User } from './user.type';

interface Props {
    selectedUser?: User | null;
    onSuccess: () => void;
}

const UserForm = ({ selectedUser, onSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [addUser] = useAddUserMutation();
    const [updateUser] = useUpdateUserMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;

        const payload = {
            name,
            email,
            phone,
            password
        };

        console.log(payload);

        if (selectedUser) {
            await updateUser({ ...selectedUser, ...payload });
        } else {
            await addUser(payload);
        }

        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        onSuccess();
    };

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
            setPassword(selectedUser.password);
        }
    }, [selectedUser]);

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <h2>{selectedUser ? 'Update User' : 'Add User'}</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
            /><br />
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
            /><br />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                type="Email"
            /><br />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="Password"
            /><br />
            {/* <button type="submit">Add User</button> */}
            <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
        </form>
    );
};
export default UserForm;
