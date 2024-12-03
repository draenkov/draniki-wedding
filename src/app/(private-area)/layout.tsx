import { FC } from 'react';
import { LayoutProps } from 'app/types';
import { AuthContextProvider } from 'context/AuthContext';

const Layout: FC<LayoutProps> = ({ children }) => (
    <AuthContextProvider>{children}</AuthContextProvider>
);

export default Layout;
