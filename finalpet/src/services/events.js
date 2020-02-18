

const getEventsApi = async () => {
    const data = await fetch('http://localhost:8000/api/events.json');
    return await data.json();
};

const Events = {
    getEventsApi
};

export default Events;