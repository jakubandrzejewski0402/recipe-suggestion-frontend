const required = (key, variable) => {
    if (!variable)
        throw new Error(
            `Required property is missing: ${key} on level ${process.env.NODE_ENV}`
        );
    return variable;
};

export const appConfig = {
    BACKEND_URL: required(
        'REACT_APP_BACKEND_URL',
        process.env.REACT_APP_BACKEND_URL
    ),
};
