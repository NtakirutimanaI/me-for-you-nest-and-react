import React, { createContext, useContext, useState } from 'react';

type Currency = 'USD' | 'RWF';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    convert: (amount: number) => string;
    formatPrice: (amount: number) => string;
    rate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const EXCHANGE_RATE = 1300; // 1 USD = 1300 RWF (FRW)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrencyState] = useState<Currency>(() => {
        return (localStorage.getItem('currency') as Currency) || 'USD';
    });

    const setCurrency = (c: Currency) => {
        setCurrencyState(c);
        localStorage.setItem('currency', c);
    };

    const formatPrice = (amount: number): string => {
        if (currency === 'RWF') {
            return (amount * EXCHANGE_RATE).toLocaleString() + ' FRW';
        }
        return '$' + amount.toLocaleString();
    };

    // Alias for backward compatibility if needed
    const convert = formatPrice;

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, convert, formatPrice, rate: EXCHANGE_RATE }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}
