const getPetApi = async () => {
    const data = await fetch('http://localhost:8000/api/pets.json');
    return await data.json();
};

const Pets = {
    getPetApi
};

export default Pets;