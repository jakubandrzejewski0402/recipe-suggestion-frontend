import { Box } from '@mui/material';
import ListCreator from '../ListCreator/ListCreator';

const CreateList = () => {
    return (
        <Box
            style={{
                position: 'absolute',
                top: -40,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ListCreator />
        </Box>
    );
};

export default CreateList;
