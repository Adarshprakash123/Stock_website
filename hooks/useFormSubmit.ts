import { useState } from 'react';
import { apiService } from '@/lib/api';

export const useFormSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (
        type: 'brochure' | 'contact' | 'payment',
        data: any
    ) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            let response;

            switch (type) {
                case 'brochure':
                    response = await apiService.submitBrochure(data);
                    break;
                case 'contact':
                    response = await apiService.submitContact(data);
                    break;
                case 'payment':
                    response = await apiService.createPayment(data);
                    if (response.success) {
                        apiService.submitPayUForm(response.data);
                    }
                    break;
                default:
                    throw new Error('Invalid form type');
            }

            if (response.success) {
                setSuccess(true);
                return response;
            } else {
                throw new Error(response.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        success,
        handleSubmit
    };
}; 