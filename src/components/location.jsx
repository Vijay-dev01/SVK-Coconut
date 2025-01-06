import React from "react";

export const Location = () => {
    return (
        <div id="testimonials">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Store Location</h2>
                </div>
                <div className="col-12 col-lg-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.820818695932!2d76.37163677482764!3d12.192592288055788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba589b5c1df0df3%3A0xb28cbada82a4db13!2sSVK%20Coconut%20Traders!5e0!3m2!1sen!2sin!4v1736177504856!5m2!1sen!2sin" width="1100"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Get in Touch'
                        className="mx-auto d-block rounded"
                        style={{ border: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
};
