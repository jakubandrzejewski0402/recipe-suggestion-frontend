import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const CreateList = () => {
    return (
        <Box
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography style={{ color: blue[600] }} variant="h4">
                Here you will be able to create your list!
            </Typography>
        </Box>
    );
};

export default CreateList;
