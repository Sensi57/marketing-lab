import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';

if (import.meta.env.NODE_ENV) {
    import('./app/mocks/msw/browser').then(({ worker }) => {
        worker.start().then(() => {
            console.log('MSW запущен');
            createRoot(document.getElementById('root')!).render(
                <StrictMode>
                    <App />
                </StrictMode>,
            );
        });
    });
} else {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
