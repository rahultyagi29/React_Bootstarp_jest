import React from 'react';

function ContactMap() {
    return (
        <iframe
            title="Google Maps"
            className="mb-4 mb-lg-0"
            src="https://maps.google.com/maps?q=C-133,+Third+Floor,+Industrial+Area,+Phase-8,+SAS+Nagar&amp;hl=en&amp;sll=30.7109957,76.7090085&amp;sspn=0.169735,0.308647&amp;oq=mohali+in&amp;t=r&amp;hnear=Mohali,+Sahibazada+Ajit+Singh+Nagar,+Punjab,+India&amp;z=12&amp;output=embed"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
        ></iframe>
    );
}

export default ContactMap;
