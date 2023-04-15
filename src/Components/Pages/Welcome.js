import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const Welcome = () => {
    return (
        <Box
            style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto',
                height: '100vh',
            }}
        >
            <Typography style={{ color: blue[600] }} variant="h4">
                Welcome at the lister page!
            </Typography>
        </Box>
    );
};

export default Welcome;
