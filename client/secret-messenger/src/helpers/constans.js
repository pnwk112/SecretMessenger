const _loginURL = 'http://localhost:3002/login';
const _signupURL = 'http://localhost:3002/login/signup';
const _tokenURL = 'http://localhost:3002/token';
const _projectsURL = 'http://localhost:3002/projects';
const _employeesURL = 'http://localhost:3002/employees';
const _customersURL = 'http://localhost:3002/customers';
const _departmentsURL = 'http://localhost:3002/departments';
const _forgotURL = 'http://localhost:3002/login/forgot';
const _activate = 'http://localhost:3002/login/activate/';

// const _loginURL = 'http://192.168.14.62:3002/login';
// const _signupURL = 'http://192.168.14.62:3002/login/signup'';
// const _tokenURL = 'http://192.168.14.62:3002/token';
// const _projectsURL = 'http://192.168.14.62:3002/projects';
// const _employeesURL = 'http://192.168.14.62:3002/employees';
// const _customersURL = 'http://192.168.14.62:3002/customers';
// const _departmentsURL = 'http://192.168.14.62:3002/departments';
// const _forgotURL = 'http://localhost:3002/login/forgot';
// const _activate = 'http://localhost:3002/login/activate/';

export const loginURL = () =>  `${_loginURL}`;
export const signupURL = () =>  `${_signupURL}`;
export const tokenURL = () =>  `${_tokenURL}`;
export const projectsURL = () =>  `${_projectsURL}`;
export const employeesURL = () =>  `${_employeesURL}`;
export const customersURL = () =>  `${_customersURL}`;
export const departmentsURL = () =>  `${_departmentsURL}`;
export const forgotsURL = () =>  `${_forgotURL}`;
export const activateURL = () =>  `${_activate}`;

export const content = {
    SEARCH: 1,
    CALENDAR: 2,
    WORKTIME: 3,
    PROJECTS: 4,
    CUSTOMERS: 5,
    FLIGHTS: 6,
    ORDERS: 7,
    OFFERS: 8,
    EMPLOYESS: 9
};
export const projectStatusDic = [
    "Nowy",
    "Utworzony",
    "Rozpoczęty",
    "Pozyskany",
    "Przetworzony",
    "Zakończony"
]
export const auctionStatusDic = [
    "Nowy",
    "W opracowaniu",
    "Złożony",
    "Rozstrzygnięty"
]

export const addEmployeeAccess = [
    "admin",
    "administracja",
    "zarząd"
]
export const addDepartmentAccess = [
    "admin",
    "administracja",
    "zarząd"
]