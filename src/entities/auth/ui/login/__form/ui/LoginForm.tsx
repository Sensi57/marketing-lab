import React, { useState } from 'react';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Button } from '@/shared/ui/Button/ui/Button';
import styles from './LoginForm.module.scss';
import { useAuth } from '@/app/providers/store/AuthContext';

const LoginForm = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <Input
                label="Email"
                type="email"
                variant="secondary"
                size="s"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                label="Пароль"
                type="password"
                size="s"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                type="submit"
                variant="primary"
                size="m"
                fullWidth
                onClick={() => login('dassad')}>
                Войти
            </Button>
        </form>
    );
};

export { LoginForm };
