import { Box, Typography } from '@mui/material'
import car from '../../assets/car.png'
import styles from './Creator.module.scss'

interface Props {
    children?: React.ReactNode
}

const CategoryPage = ({ children }: Props) => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Konfigurator kategorii
            </Typography>

            <div className={styles.container}>
                <Box>{children}</Box>
                <Box>
                    <img src={car} alt="" className={styles.image} />
                </Box>
            </div>
        </Box>
    )
}

export default CategoryPage
