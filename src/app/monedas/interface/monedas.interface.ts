export interface Moneda {
    terms:      string;
    privacy:    string;
    currencies: Currency[];
}

export interface Currency {
    iso:           string;
    currency_name: string;
    is_obsolete:   boolean;
}

export interface Change {
    terms:     string;
    privacy:   string;
    from:      string;
    amount:    number;
    timestamp: Date;
    to:        To[];
}

export interface To {
    quotecurrency: string;
    mid:           number;
}