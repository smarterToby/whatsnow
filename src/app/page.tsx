'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

export default function WhatsAppRedirect() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validatePhoneNumber = (number: string) => {
      if (number) {
        const numberWithPlus = number.startsWith('+') ? number : `+${number}`;
        try {
          const isValid = isValidPhoneNumber(numberWithPlus);
          setIsValid(isValid);
          setError(isValid ? '' : 'Invalid phone number');
          return isValid;
        } catch {
          setIsValid(false);
          setError('Invalid phone number');
          return false;
        }
      } else {
        setIsValid(false);
        setError('');
        return false;
      }
    };

    validatePhoneNumber(phoneNumber);
  }, [phoneNumber]);

  const formatPhoneNumber = (number: string) => {
    const numberWithPlus = number.startsWith('+') ? number : `+${number}`;
    try {
      const parsedNumber = parsePhoneNumber(numberWithPlus);
      if (parsedNumber && isValidPhoneNumber(numberWithPlus)) {
        return parsedNumber.format('E.164');
      } else {
        throw new Error('Invalid phone number');
      }
    } catch (error) {
      console.error('Error formatting phone number:', error);
      return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedNumber = formatPhoneNumber(phoneNumber);
    if (formattedNumber) {
      window.location.href = `https://wa.me/${formattedNumber.slice(1)}`;
    } else {
      setError('Please enter a valid phone number.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4 bg-[#010203] relative'>
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Card className='w-full max-w-md relative bg-[#1a1d20] border-[#2a2d30] shadow-2xl'>
        <CardContent className='p-8'>
          <div className='mb-8 text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#075e54] mb-6 shadow-lg'>
              <MessageSquare className='h-8 w-8 text-white' />
            </div>
            <h1 className='text-2xl font-bold text-white mb-2'>
              WhatsNow
            </h1>
            <p className='text-[#b8c0c8] text-sm'>
              Start a WhatsApp chat without saving contacts
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="space-y-2">
              <div className='relative'>
                <Input
                  type='tel'
                  placeholder='Enter phone number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className={`bg-[#242a30] border-[#3a424a] text-white placeholder:text-[#8895a7] pr-10 ${
                    phoneNumber &&
                    (isValid ? 'border-green-500' : 'border-red-500')
                  }`}
                  required
                />
                {phoneNumber && (
                  <span className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                    {isValid ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-green-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 text-red-500'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </span>
                )}
              </div>

              {error && <p className='text-red-500 text-sm'>{error}</p>}
            </div>

            <Button
              type='submit'
              className='w-full bg-[#075e54] hover:bg-[#064d44] text-white font-medium py-6'
              disabled={!isValid}
            >
              Open in WhatsApp
            </Button>
          </form>

          <div className='mt-4 text-center'>
            <p className='text-xs text-[#8895a7]'>
              Examples: +49 123 4567890 • +1 (123) 456-7890 • +81 3 1234 5678
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
