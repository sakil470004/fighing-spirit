import React from 'react';
import SectionTittle from '../Shared/SectionTittle';

const ContactUs = () => {
    return (
        <div class="contact-form shadow-md rounded-md pb-10">
    <SectionTittle heading={'Contact Us'} subHeading={'How Can You Reach Us!'}/>
            <div class="mt-4">
                <form  method="post">
                    <input type="text" name="name" class="w-full py-2 px-3 border border-gray-300 rounded-md" placeholder="Your Name" />
                    <input type="email" name="email" class="w-full py-2 px-3 border border-gray-300 rounded-md" placeholder="Your Email" />
                    <textarea name="message" class="w-full  border-gray-300  " placeholder="Your Message"></textarea>
                    <p  class="btn btn-error w-full py-2 px-3">Submit</p>
                </form>
            </div>
        </div>
 );
};

export default ContactUs;