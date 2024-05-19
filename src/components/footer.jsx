import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-lg font-bold mb-2">ScholarSync</h2>
            <p className="text-sm">
              Connecting students and scholars around the globe.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-md font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-md font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.494v-9.294h-3.124v-3.622h3.124v-2.672c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.503 0-1.794.714-1.794 1.76v2.316h3.588l-.467 3.622h-3.121v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.351c0-.73-.594-1.325-1.324-1.325z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.55-3.594-1.55-2.723 0-4.932 2.207-4.932 4.93 0 .386.043.763.128 1.124-4.096-.205-7.728-2.167-10.157-5.144-.425.728-.67 1.573-.67 2.475 0 1.708.869 3.215 2.188 4.099-.807-.025-1.566-.247-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.827-.413.112-.85.171-1.296.171-.315 0-.624-.031-.927-.088.626 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.104-6.114 2.104-.397 0-.788-.023-1.175-.068 2.179 1.396 4.765 2.211 7.548 2.211 9.051 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.961-.694 1.796-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.998 3c1.104 0 2 .896 2 2v14c0 1.104-.896 2-2 2h-15.996c-1.104 0-2-.896-2-2v-14c0-1.104.896-2 2-2h15.996zm-10.999 14.5v-6.6h-2.652v6.6h2.652zm-1.326-7.6c.832 0 1.328-.554 1.328-1.248-.015-.707-.496-1.248-1.312-1.248-.815 0-1.328.541-1.328 1.248 0 .694.496 1.248 1.296 1.248h.016zm7.326 7.6h2.652v-3.652c0-2.157-1.146-3.148-2.674-3.148-1.228 0-1.802.681-2.107 1.167v.03h-.014c.013-.02.027-.04.041-.06v-1.187h-2.65c.035.786 0 6.6 0 6.6h2.65v-3.662c0-.196.014-.392.074-.533.162-.393.528-.802 1.144-.802.805 0 1.128.606 1.128 1.493v3.504z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 ScholarSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
