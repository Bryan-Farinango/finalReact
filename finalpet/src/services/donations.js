const getDonationApi = async () => {
    const data = await fetch('http://localhost:8000/api/donations.json');
    return await data.json();
};

const Donations = {
    getDonationApi
};

export default Donations;