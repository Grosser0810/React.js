
export const addTask = (title, date, id) => ({
    type: 'ADD_TASK',
    id,
    title,
    date,
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const setVisibilitySort = sort => ({
    type: 'SET_VISIBILITY_SORT',
    sort
});

export const completedTask = id => ({
    type: 'COMPLETED_TASK',
    id
});
export const deleteTask = id => ({
    type: 'DELETE_TASK',
    id
});

export const sortAZ = title => ({
    type: 'SORT_AZ',
    title
});

export const sortZA = title => ({
    type: 'SORT_ZA',
    title
});

export const sortDate = date => ({
    type: 'SORT_DATE',
    date
});

export const sortOff = id => ({
    type: 'SORT_OFF',
    id
});

export const VisibilityFilters = {
    DATE_FILTER: 'DATE_FILTER',
    TITLE_FILTER: 'TITLE_FILTER',
    SHOW_ALL: 'SHOW_ALL',
};

export const VisibilitySorts = {
    SORT_AZ: 'SORT_AZ',
    SORT_ZA: 'SORT_ZA',
    SORT_DATE: 'SORT_DATE',
    SORT_OFF: 'SORT_OFF'
};
