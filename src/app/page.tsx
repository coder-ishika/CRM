"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            INDIA'S
            <br />
            <span className="text-blue-200">FAVORITE CRM</span>
            <br />
            <span className="text-4xl font-normal text-blue-100">for accelerated business growth</span>
          </h1>
          <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
            NexGen CRM helps 300,000+ businesses run their day-to-day operations better. Close more deals, build lasting customer relationships and grow your business effortlessly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Sign up for free
            </Link>
            <Link
              href="/login"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Log In
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">Get started with your 15-day free trial</p>
        </div>
      </section>

      {/* How CRM Can Help You */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 flex flex-wrap justify-center items-center gap-2">
            {/* Here's how */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap">
              Here's how
            </h2>

            {/* NextGen */}
            <h1 className="text-5xl font-extrabold tracking-tight inline-flex items-center gap-1 whitespace-nowrap">
              <span className="text-black">Next</span>
              <span className="relative text-blue-600">
                X
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full rotate-[20deg]"></span>
              </span>
              <span className="text-blue-600">Gen</span>
            </h1>

            {/* CRM can help you */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap mt-1.5 ">
              CRM can help you
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get a 360 degree view of your business.
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Track important sales and marketing opportunities.
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quickly see your next-best actions.
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Increase your lead-to-deal conversion rates.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">300%</div>
              <div className="text-sm text-gray-600">Improvement in lead conversion rates</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">41%</div>
              <div className="text-sm text-gray-600">Revenue increase per sales person</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">27%</div>
              <div className="text-sm text-gray-600">Improvement in customer retention</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">24%</div>
              <div className="text-sm text-gray-600">Shorter sales cycles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">23%</div>
              <div className="text-sm text-gray-600">Decreased sales and marketing costs</div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            * Growth metrics reported by our customers in an internal survey.
          </p>
        </div>
      </section>

      {/* Why Choose Our CRM */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Why choose NexGen CRM</h2> */}
          <div className="text-center mb-12 flex flex-wrap justify-center items-center gap-2">
            {/* Here's how */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap">
              Why choose
            </h2>

            {/* NextGen */}
            <h1 className="text-5xl font-extrabold tracking-tight inline-flex items-center gap-1 whitespace-nowrap">
              <span className="text-black">Next</span>
              <span className="relative text-blue-600">
                X
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full rotate-[20deg]"></span>
              </span>
              <span className="text-blue-600">Gen</span>
            </h1>

            {/* CRM can help you */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap mt-1.5">
              CRM 
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            NexGen CRM Customer Relationship Management software comes with features from Omnichannel capabilities to pipeline management and automation, all bundled in one package. You can experience what NexGen CRM can do for you for free, before you commit to adopting it, across your organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead and Contact Management</h3>
              <p className="text-gray-600">
                Bring in quality leads, nurture them, and turn them into happy, paying customers. Get a complete view of all customer data—personal details, all communication you've had with them, and more—all in a single place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation</h3>
              <p className="text-gray-600">
                Instead of having your sales team waste their time doing administrative work, automate all your routine and mundane tasks with workflows and macros to help your team focus on winning clients and closing deals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Omnichannel CRM</h3>
              <p className="text-gray-600">
                Reach out, respond, and stay in touch with your customers across email, telephony, social media, and live chat with a real-time notification system. Build better and long-lasting relationships through meaningful connections.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Artificial Intelligence</h3>
              <p className="text-gray-600">
                With our advanced AI, you get an interactive link to all your CRM data. Get predictions that help you focus on the right deals with the highest chance of closure, identify and remove bottlenecks, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare with Others */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Compare </h2>
             <h1 className="text-5xl font-extrabold tracking-tight flex items-center justify-center gap-1">
        <span className="text-black">Next</span>

        <span className="relative text-blue-600">
          X
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full rotate-[20deg]"></span>
        </span>

        <span className="text-blue-600">Gen</span>
      </h1>
      <h2>
       CRM and others
          </h2> */}
          <div className="text-center mb-12 flex flex-wrap justify-center items-center gap-2">
            {/* Here's how */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap">
              Compare
            </h2>

            {/* NextGen */}
            <h1 className="text-5xl font-extrabold tracking-tight inline-flex items-center gap-1 whitespace-nowrap">
              <span className="text-black">Next</span>
              <span className="relative text-blue-600">
                X
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-1 bg-blue-500 rounded-full rotate-[20deg]"></span>
              </span>
              <span className="text-blue-600">Gen</span>
            </h1>

            {/* CRM can help you */}
            <h2 className="text-4xl font-bold text-gray-900 whitespace-nowrap mt-1.5">
              CRM and others
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-12">
            With unmatched features at unbeatable pricing, you choose value when you choose NexGen CRM
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">Features</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-blue-900">NexGen CRM</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">Salesforce</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">HubSpot</th>
                  <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-700">Microsoft</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Built-in AI</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-600 font-semibold">Yes</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">-</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium">Built-in Telephony</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-600 font-semibold">Yes</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Integration with Google Workspace</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-600 font-semibold">Yes</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Additional $</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Additional $</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Additional $</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium">Data Storage</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-600 font-semibold">Unlimited</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Limited</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Limited</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Limited</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium">Sales activity gamification</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-600 font-semibold">Available</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">Additional $</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-600">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium font-semibold">Monthly price per user</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-blue-900 font-bold text-lg">$14</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-semibold">$25</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-semibold">$65</td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-semibold">$52</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Here's what you will save per user, per month</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">$40</div>
                <div className="text-sm text-gray-600">vs Enterprise edition</div>
                <div className="text-lg font-semibold text-green-600 mt-2">75% savings</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">$165</div>
                <div className="text-sm text-gray-600">vs Salescloud</div>
                <div className="text-lg font-semibold text-green-600 mt-2">58% savings</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">$95</div>
                <div className="text-sm text-gray-600">vs Dynamics 365</div>
                <div className="text-lg font-semibold text-green-600 mt-2">50% savings</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">$85</div>
                <div className="text-sm text-gray-600">vs Sugar CRM</div>
                <div className="text-lg font-semibold text-green-600 mt-2">45% savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start selling smarter, better and faster</h2>
          <p className="text-xl text-blue-100 mb-8">15 day risk free fully feature trial</p>
          <Link
            href="/login"
            className="inline-block bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Sign up for free
          </Link>
        </div>
      </section>
    </div>
  );
}
