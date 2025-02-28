import { useSuspenseQuery } from '@tanstack/react-query'
import { categoryOptions } from '../../queries/category'
import styles from './MainCreator.module.scss'
import { Link, Outlet } from '@tanstack/react-router'
import Button from '@mui/material/Button'

export const MainCreator = () => {
    const { data } = useSuspenseQuery(categoryOptions)

    return (
        <div className={styles.container}>
            <h1>Lista kategorii</h1>
            <div className={styles.mainBox}>
                <div className={styles.category}>
                    {data.map(({ id, name, description }) => (
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            key={id}
                        >
                            <div className={styles.singleCategory} key={id}>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>
                        </Link>
                    ))}
                    <div className={styles.addCategory}>
                        <Link to="/">
                            <Button variant="contained">Dodaj kategorie</Button>
                        </Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
