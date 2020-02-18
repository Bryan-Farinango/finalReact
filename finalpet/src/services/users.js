
const getUsersApi = async () => {
    const token =  localStorage.getItem('token');
    const data = await fetch('http://localhost:8000/api/usuarios.json',  {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer " + token,
        },

    });
    return await data.json();
};

const Users = {
    getUsersApi
};

export default Users;