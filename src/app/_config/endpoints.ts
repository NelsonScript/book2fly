import { environment } from '../../environments/environment';

export const Endpoints = {
    AUTH_URI :  environment.baseURL + 'auth/api/auth/agency/token',
    SEARCH_URI : environment.baseURL + 'search/api/plans/disney/availability/2/1/0', 
    BOOKING_URI : environment.baseURL + 'booking/api/plans/disney/book'
}
