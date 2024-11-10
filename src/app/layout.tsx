import { FC } from 'react';
import 'styles/global.scss';
import { LayoutProps } from 'app/types';

const RootLayout: FC<LayoutProps> = ({ children }) => (
    <html lang="ru">
        <body>{children}</body>
    </html>
);

export default RootLayout;
