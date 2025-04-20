'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('sfxHaob8yfXl17xW_');

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_name: "Admin",
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        treatment_type: data.treatmentType,
        symptoms: data.symptoms,
        previous_treatment: data.previousTreatment,
        reply_to: data.email,
      };

      // Using service ID and template ID from your EmailJS dashboard
      const response = await emailjs.send(
        'service_x7z78nl',
        'template_86o5abf', // Updated template ID
        templateParams,
        'sfxHaob8yfXl17xW_'
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(`Failed to send email: ${response.text}`);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      let errorMessage = 'There was an error submitting your request. ';
      
      if (error?.text) {
        errorMessage += error.text;
      } else if (error?.message) {
        errorMessage += error.message;
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Book Your Session</h2>
        <p className="text-center text-gray-600 mb-12">
          Schedule your physiotherapy appointment with our experienced professionals
        </p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
            Thank you for your booking request! We will contact you shortly to confirm your appointment.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            {submitStatus === 'error' && (
              <p>{submitStatus}</p>
            )}
          </div>
        )}

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              >
                <option value="">Select treatment type</option>
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
                disabled={isSubmitting}
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
                step="3600"
                min="09:00"
                max="17:00"
                disabled={isSubmitting}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">Business hours: 9:00 AM - 5:00 PM</p>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 