import car from '../../assets/car.png'
import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from '@tanstack/react-router'

const HomePage = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${car})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h2" gutterBottom>
                    Witaj w CarShop!
                </Typography>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                    Wykreuj swój wymarzony samochód
                </Typography>

                <Link to="/categories/$steepId" params={{ steepId: 'basic' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ mt: 4 }}
                    >
                        Rozpocznij konfigurację
                    </Button>
                </Link>
            </Container>
        </Box>
    )
}

export default HomePage
