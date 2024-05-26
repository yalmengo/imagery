import api from '../index';
import getAll from './getAll';
import getOne from './getOne';

export const eventsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllEvents: getAll(build),
    getOneEvent: getOne(build),
  }),
});

export const { useGetAllEventsQuery, useGetOneEventQuery } = eventsApi;
