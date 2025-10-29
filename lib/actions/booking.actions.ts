'use server';
import Booking from '@/database/booking.model';
import connectDB from "../mongodb";

export const createBooking = async ({ eventId, slug, email } : { eventId: string; slug: string; email: string }) => {
    try{
        await connectDB();
        const booking = (await Booking.create({ eventId, slug, email })).toObject();
        return { success: true};
    }
    catch(e){
        console.error("create Booking failed", e);
        return {success : false};
    }
}