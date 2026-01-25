import { useCurrency } from '../context/CurrencyContext';
import { DollarSign, Landmark } from 'lucide-react';

export function CurrencySwitcher() {
    const { currency, setCurrency } = useCurrency();

    return (
        <div className="d-flex align-items-center gap-2 mb-3 bg-white p-2 rounded border shadow-sm" style={{ width: 'fit-content' }}>
            <button
                onClick={() => setCurrency('USD')}
                className={`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-1 ${currency === 'USD' ? 'btn-primary' : 'btn-outline-primary border-0'}`}
            >
                <Landmark size={14} /> <span className="fw-bold">USD</span>
            </button>
            <button
                onClick={() => setCurrency('RWF')}
                className={`btn btn-sm rounded-pill px-3 d-flex align-items-center gap-1 ${currency === 'RWF' ? 'btn-primary' : 'btn-outline-primary border-0'}`}
            >
                <span className="fw-bold">RWF</span>
            </button>
        </div>
    );
}
