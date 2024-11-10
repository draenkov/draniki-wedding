import styles from 'app/page.module.scss';
import { FC } from 'react';
import { fontPrimary } from 'styles/fonts';
import Invite from 'components/Invite/Invite.component';
import Info from 'components/Info/Info.component';

const Home: FC = () => (
    <div className={`${fontPrimary.className} ${styles.page}`}>
        <Invite />
        <Info />
    </div>
);

export default Home;
