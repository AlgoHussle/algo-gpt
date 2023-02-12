'use client'

import { SessionProvider as Provider } from 'next-auth/react';

type Props= {
    children: React.ReactNode;
    session: Session | null;
}
import { Session } from 'next-auth';

export function SessionProvider({children, session}: Props) {
    return (
        <Provider>
            {children}
        </Provider>
    );
}