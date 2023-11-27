import basicAuth from 'express-basic-auth';


// For the task only, not for production usage
const users: { [key: string]: string } = {
    omar: '123',
};

const authMiddleware = basicAuth({
    users,
    challenge: true,
    unauthorizedResponse: 'Unauthorized',
});

export default authMiddleware