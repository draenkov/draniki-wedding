import { FC } from 'react';
import 'styles/global.scss';
import { LayoutProps } from 'app/types';
import { AuthContextProvider } from 'context/AuthContext';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    title: 'Draniki Wedding',
    description: 'Invitation for Draniki Wedding',
};

export const viewport: Viewport = {
    initialScale: 1,
    maximumScale: 1,
    width: 'device-width',
    userScalable: false,
};

const RootLayout: FC<LayoutProps> = ({ children }) => (
    <html lang="ru">
        <body>
            <AuthContextProvider>{children}</AuthContextProvider>
        </body>
    </html>
);

export default RootLayout;
