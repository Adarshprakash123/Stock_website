import { API_ENDPOINTS } from './config';

// Types
interface BrochureData {
    name: string;
    email: string;
    phone: string;
    interest: string;
}

interface ContactData {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}

interface PaymentData {
    name: string;
    email: string;
    phone: string;
    amount: number;
}

// API Service Functions
export const apiService = {
    // Brochure
    submitBrochure: async (data: BrochureData) => {
        try {
            console.log('Submitting brochure data:', data);
            
            const response = await fetch(`${API_ENDPOINTS.BROCHURE}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server error response:', errorData);
                throw new Error(errorData.message || 'Failed to submit brochure');
            }

            const result = await response.json();
            console.log('Brochure submission response:', result);
            return result;
        } catch (error) {
            console.error('Error submitting brochure:', error);
            throw error;
        }
    },

    // Contact
    submitContact: async (data: ContactData) => {
        try {
            console.log('Submitting contact data:', data);
            
            const response = await fetch(`${API_ENDPOINTS.CONTACT}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include',
                mode: 'cors'
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server error response:', errorData);
                throw new Error(errorData.message || 'Failed to submit contact form');
            }

            const result = await response.json();
            console.log('Contact submission response:', result);
            return result;
        } catch (error) {
            console.error('Error submitting contact form:', error);
            throw error;
        }
    },

    // Payment
    createPayment: async (data: PaymentData) => {
        try {
            console.log('Creating payment:', data);
            
            const response = await fetch(`${API_ENDPOINTS.PAYMENT}/create-payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server error response:', errorData);
                throw new Error(errorData.message || 'Failed to create payment');
            }

            const result = await response.json();
            console.log('Payment creation response:', result);
            return result;
        } catch (error) {
            console.error('Error creating payment:', error);
            throw error;
        }
    },

    // PayU Form Submission
    submitPayUForm: (paymentData: any) => {
        console.log('Submitting PayU form with data:', paymentData);
        
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://secure.payu.in/_payment';

        // Add all the payment data as hidden fields
        Object.keys(paymentData).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = paymentData[key];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    }
}; 