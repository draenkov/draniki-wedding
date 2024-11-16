import { FC } from 'react';
import 'styles/global.scss';
import { LayoutProps } from 'app/types';
import { AuthContextProvider } from 'context/AuthContext';

const RootLayout: FC<LayoutProps> = ({ children }) => (
    <html lang="ru">
        <body>
            <AuthContextProvider>{children}</AuthContextProvider>
        </body>
    </html>
);

export default RootLayout;
