import styles from 'app/page.module.scss';
import { FC } from 'react';
import { inter } from 'styles/fonts';

const Home: FC = () => <div className={`${inter.className} ${styles.page}`}>test</div>;

export default Home;
