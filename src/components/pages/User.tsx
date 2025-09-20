import { useParams } from "react-router-dom";
import UserList from "../../features/users/UserList";
import UserForm from "../../features/users/userForm";

function User() {

    const { id, name } = useParams();
    // alert(id);
    // alert(name);

    return (
        <div>
            <h1>User Page</h1>
            <UserList />
        </div>

    );
}
export default User;