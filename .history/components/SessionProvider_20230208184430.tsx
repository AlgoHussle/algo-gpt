'use Client'

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

export function SessionProvider({children, session}: ) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}