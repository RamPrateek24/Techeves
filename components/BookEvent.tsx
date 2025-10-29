'use client';

import { createBooking } from "@/lib/actions/booking.actions";
import { useState } from "react";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        const { success } = await createBooking({ eventId, slug, email });

        if(success){
            setSubmitted(true);
        }
        else{
            console.log("Booking failed");
        }
        e.preventDefault();

        setTimeout(() => {
            setSubmitted(true);
        }, 1000)
    }
  return (
    <div id="book-event">
        {submitted ? (
            <p className="text-sm"> Thank you for signing up!</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <button type="submit" className="button-submit">Book Now</button>
            </form>
        )}
    </div>
  );
};

export default BookEvent;