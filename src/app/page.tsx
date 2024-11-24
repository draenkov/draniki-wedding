import styles from 'app/page.module.scss';
import { FC } from 'react';
import { fontPrimary } from 'styles/fonts';
import Invite from 'components/Main/Invite/Invite.component';
import Info from 'components/Main/Info/Info.component';
import Timeline from 'components/Main/Timeline/Timeline.component';
import Place from 'components/Main/Place/Place.component';
import DressCode from 'components/Main/DressCode/DressCode.component';
import Confirmation from 'components/Main/Confirmation/Confirmation.component';

const Home: FC = () => (
    <div className={`${fontPrimary.className} ${styles.page}`}>
        <div className={styles.container}>
            <Invite />
            <Info />
        </div>
        <Timeline />
        <Place />
        <DressCode />
        <Confirmation />
        <div className={styles.rigths}>
            <p>#dranikFest2025</p>
            <p>#плюсОдинДраник</p>
        </div>
    </div>
);

export default Home;
