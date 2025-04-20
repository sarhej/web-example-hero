'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  treatmentType: string;
  symptoms: string;
  previousTreatment: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Book Your Session</h2>
        <p className="text-center text-gray-600 mb-12">
          Schedule your physiotherapy appointment with our experienced professionals
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="input-field"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="input-field"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                className="input-field"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Type
              </label>
              <select
                {...register('treatmentType', { required: 'Treatment type is required' })}
                className="input-field"
              >
                <option value="initial">Initial Consultation</option>
                <option value="followup">Follow-up Session</option>
                <option value="sports">Sports Injury</option>
                <option value="rehabilitation">Rehabilitation</option>
                <option value="massage">Therapeutic Massage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                {...register('date', { required: 'Date is required' })}
                className="input-field"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <input
                type="time"
                {...register('time', { required: 'Time is required' })}
                className="input-field"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe your symptoms
            </label>
            <textarea
              {...register('symptoms')}
              className="input-field"
              rows={4}
              placeholder="Please describe your symptoms and any specific areas of concern"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Previous treatments (if any)
            </label>
            <textarea
              {...register('previousTreatment')}
              className="input-field"
              rows={3}
              placeholder="Have you had any previous treatments for this condition?"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 