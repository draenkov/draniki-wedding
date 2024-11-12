import styles from 'app/page.module.scss';
import { FC } from 'react';
import { fontPrimary } from 'styles/fonts';
import Invite from 'components/Invite/Invite.component';
import Info from 'components/Info/Info.component';
import Timeline from 'components/Timeline/Timeline.component';
import Place from 'components/Place/Place.component';

const Home: FC = () => (
    <div className={`${fontPrimary.className} ${styles.page}`}>
        <div className={styles.container}>
            <Invite />
            <Info />
        </div>
        <Timeline />
        <Place />
    </div>
);

export default Home;
