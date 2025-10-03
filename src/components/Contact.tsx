export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team is here to help you navigate the permit process. Reach out with any questions about finding your local permit office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Support */}
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
            <p className="text-gray-600 mb-4">Get help via email for any questions about our service.</p>
            <a href="mailto:support@permitfinder.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              support@permitfinder.com
            </a>
          </div>

          {/* FAQ */}
          <div className="text-center p-8 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">FAQ & Help Center</h3>
            <p className="text-gray-600 mb-4">Find answers to common questions about permits and our service.</p>
            <a href="/help" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
              Visit Help Center
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Permit Finder</h3>
            <p className="text-gray-600 mb-6">
              Your trusted source for finding local permit offices nationwide.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">About Us</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              © 2024 Permit Finder. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}