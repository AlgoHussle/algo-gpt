'use Client'

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

export function SessionProvider({children, }) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}