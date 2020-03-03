export const addApartmentToStore = (
    lister_url,
    img_url,
    title,
    price_formatted,
    bedroom_number,
    bathroom_number,
    car_spaces,
    summary,
    updated_in_days_formatted,
    datasource_name,
    price_type,) => ({
        type: 'ADD_APARTMENT_TO_STORE',
        lister_url,
        img_url,
        title,
        price_formatted,
        bedroom_number,
        bathroom_number,
        car_spaces,
        summary,
        updated_in_days_formatted,
        datasource_name,
        price_type,
});

export const deleteApartment = id => ({
    type: 'DELETE_APARTMENT',
    id
});
