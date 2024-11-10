import styles from 'app/page.module.scss';
import { FC } from 'react';
import { fontPrimary } from 'styles/fonts';
import Invite from 'components/Invite/Invite.component';

const Home: FC = () => (
    <div className={`${fontPrimary.className} ${styles.page}`}>
        <Invite />
    </div>
);

export default Home;
