import { FC } from 'react';
import 'styles/global.scss';
import { LayoutProps } from 'app/types';
import styles from 'app/layout.module.scss';

const RootLayout: FC<LayoutProps> = ({ children }) => (
    <html lang="ru">
        <body className={styles.container}>{children}</body>
    </html>
);

export default RootLayout;
