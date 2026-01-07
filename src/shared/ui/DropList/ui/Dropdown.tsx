import React, { forwardRef, useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { DropdownOption, DropdownProps } from '../model/types';

import styles from './Dropdown.module.scss';

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
    (
        {
            options,
            placeholder = 'Select option',
            value,
            onChange,
            variant = 'primary',
            size = 'm',
            fullWidth = false,
            disabled = false,
            className,
            ...props
        },
        ref,
    ): React.JSX.Element => {
        const [open, setOpen] = useState(false);
        const [internalValue, setInternalValue] = useState<string | undefined>(value);
        const containerRef = useRef<HTMLDivElement>(null);

        const selected = options.find((opt) => opt.value === (value ?? internalValue));

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        const toggleDropdown = useCallback(() => setOpen((prev) => !prev), []);

        const handleSelect = (opt: DropdownOption) => {
            if (opt.disabled) return;
            setInternalValue(opt.value);
            onChange?.(opt.value);
            if (opt.onClick) opt.onClick();
            setOpen(false);
        };

        return (
            <div
                ref={containerRef}
                className={clsx(
                    styles['dropdown'],
                    styles[variant],
                    styles[`dropdown--${size}`],
                    disabled && styles['dropdown--disabled'],
                    className,
                )}
                {...props}>
                <div
                    ref={ref}
                    // type="button"
                    onClick={() => !disabled && setOpen(!open)}
                    className={clsx(
                        styles['dropdown__trigger'],
                        open && styles['dropdown__trigger--open'],
                    )}
                    // disabled={disabled}
                >
                    <span className={styles['dropdown__label']}>
                        {selected?.label ?? placeholder}
                    </span>
                    <svg
                        className={clsx(
                            styles['dropdown__icon'],
                            open && styles['dropdown__icon--rotated'],
                        )}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <ul
                    className={clsx(
                        styles['dropdown__menu'],
                        open && styles['dropdown__menu--open'],
                        fullWidth && styles['dropdown--full'],
                    )}
                    onMouseLeave={() => toggleDropdown()}>
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            onClick={() => {
                                handleSelect(opt);
                            }}
                            className={clsx(
                                styles['dropdown__item'],
                                opt.disabled && styles['dropdown__item--disabled'],
                                opt.value === selected?.value && styles['dropdown__item--active'],
                            )}>
                            {opt.icon && (
                                <span className={styles['dropdown__item-icon']}>{opt.icon}</span>
                            )}
                            {opt.label}
                            {selected?.value && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    style={{ width: '20px', height: '20px', color: 'royalblue' }}>
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    },
);

Dropdown.displayName = 'Dropdown';
