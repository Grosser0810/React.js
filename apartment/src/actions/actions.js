export const addApartmentToStore = (
    img_url,
    title,
    price_formatted,
    bedroom_number,
    bathroom_number,
    car_spaces,
    summary,
    updated_in_days_formatted,
    datasource_name) => ({
        type: 'ADD_APARTMENT_TO_STORE',
        img_url,
        title,
        price_formatted,
        bedroom_number,
        bathroom_number,
        car_spaces,
        summary,
        updated_in_days_formatted,
        datasource_name,
});

export const deleteApartment = id => ({
    type: 'DELETE_APARTMENT',
    id
});
