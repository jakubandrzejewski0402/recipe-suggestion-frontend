import { useEffect, useState } from 'react';
import { appConfig } from '../../config';
import {
    CircularProgress,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    IconButton,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CachedIcon from '@mui/icons-material/Cached';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import parse from 'html-react-parser';
import { saveAs } from 'file-saver';

const RecipeDetails = ({ recipeId }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [imageDisplay, setImageDisplay] = useState(true);
    const [saveConfirmation, setSaveConfirmation] = useState(false);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = `${appConfig.BACKEND_URL}/recipe/option/${recipeId}`;

        setLoading(true);
        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setDetails(res);
                setLoading(false);
            });
    }, [recipeId]);

    const save = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: recipeId,
                name: recipeName,
                creator_username: username,
                image: details?.image,
            }),
        };
        const url = `${appConfig.BACKEND_URL}/recipe`;
        fetch(url, options).then((res) => res.json());
    };

    const handleDownloadButton = () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = `${appConfig.BACKEND_URL}/recipe/${recipeId}/pdf`;
        fetch(url, options)
            .then((res) => res.blob())
            .then((blob) => {
                saveAs(blob, `Receip-${details.title}.pdf`);
            });
    };

    return (
        <Box sx={{ marginTop: 8, display: 'flex' }}>
            {loading ? (
                <Box
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <Card sx={{ maxWidth: 550 }}>
                    {imageDisplay ? (
                        <CardActionArea
                            disableTouchRipple
                            sx={{ minHeight: 450 }}
                        >
                            <CardMedia
                                component="img"
                                image={details?.image}
                                title={details?.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    textAlign="center"
                                >
                                    {details?.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="textSecondary"
                                    textAlign="center"
                                >
                                    Servings: {details?.servings}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="textSecondary"
                                    textAlign="center"
                                >
                                    Preparation time:{' '}
                                    {details?.preparation_time} min
                                </Typography>
                                {saveConfirmation && (
                                    <Alert
                                        onClose={() => {
                                            setSaveConfirmation(false);
                                        }}
                                    >
                                        Saved succefully!
                                    </Alert>
                                )}
                                <IconButton
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto',
                                    }}
                                    onClick={() =>
                                        setImageDisplay(!imageDisplay)
                                    }
                                >
                                    <CachedIcon />
                                </IconButton>
                            </CardContent>
                        </CardActionArea>
                    ) : (
                        <CardActionArea
                            disableTouchRipple
                            sx={{ minHeight: 450 }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    color="textSecondary"
                                    textAlign="center"
                                >
                                    {parse(details?.instructions)}
                                </Typography>
                                {saveConfirmation && (
                                    <Alert
                                        onClose={() => {
                                            setSaveConfirmation(false);
                                        }}
                                    >
                                        Saved succefully!
                                    </Alert>
                                )}
                                <IconButton
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: '0 auto',
                                    }}
                                    onClick={() =>
                                        setImageDisplay(!imageDisplay)
                                    }
                                >
                                    <CachedIcon />
                                </IconButton>
                            </CardContent>
                        </CardActionArea>
                    )}
                    <Box
                        sx={{ paddingTop: 0 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '14vh',
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ width: 200 }}
                            onClick={() => setSaveDialogOpen(true)}
                        >
                            SAVE
                        </Button>
                        <Box m={1} />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ width: 200 }}
                            onClick={handleDownloadButton}
                        >
                            DOWNLOAD PDF
                        </Button>
                    </Box>
                </Card>
            )}
            <Dialog
                open={saveDialogOpen}
                onClose={() => setSaveDialogOpen(false)}
            >
                <DialogTitle>Save recipe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To save this recipe, please enter recipe name and
                        username.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="recipe-name"
                        label="Recipe name"
                        type="Recipe name"
                        fullWidth
                        variant="standard"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="username"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSaveDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            setSaveDialogOpen(false);
                            setSaveConfirmation(true);
                            save();
                        }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default RecipeDetails;
