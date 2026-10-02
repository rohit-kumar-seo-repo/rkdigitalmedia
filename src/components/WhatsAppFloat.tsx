'use client';

const WHATSAPP_URL = 'https://wa.me/919871530594?text=Hi%20R.K.%20Digital%20Media%2C%20I%27d%20like%20to%20discuss%20my%20business.';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with R.K Digital Media on WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-float-label">Chat on WhatsApp</span>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-float-icon" fill="none">
        <path fill="currentColor" d="M16 3.25A12.7 12.7 0 0 0 3.3 15.95c0 2.24.59 4.34 1.62 6.16L3.1 28.9l6.98-1.78a12.7 12.7 0 0 0 5.92 1.46h.01A12.7 12.7 0 1 0 16 3.25Zm0 23.08h-.01a10.3 10.3 0 0 1-5.25-1.44l-.38-.23-4.14 1.06 1.1-4.03-.25-.41a10.3 10.3 0 1 1 8.93 5.05Zm5.65-7.72c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.69.16-.2.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.52-.92-.8-1.54-1.79-1.72-2.1-.18-.31-.02-.48.14-.64.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.69-1.67-.95-2.29-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.52.08-.79.39-.28.31-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36Z"/>
      </svg>
    </a>
  );
}
