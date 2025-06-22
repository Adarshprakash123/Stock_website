export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://stock-website-backend-3.onrender.com/api';

export const API_ENDPOINTS = {
    BROCHURE: `${API_BASE_URL}/brochure`,
    PAYMENT: `${API_BASE_URL}/payment`,
    CONTACT: `${API_BASE_URL}/contact`
}; 