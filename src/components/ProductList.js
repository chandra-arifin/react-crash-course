import styles from '../styles/ProductList.module.css'

export function ProductList(props) {
    return (
        <>
            <h2>Product Title</h2>
            <div className={styles.List}>{props.children}</div>
        </>)
}