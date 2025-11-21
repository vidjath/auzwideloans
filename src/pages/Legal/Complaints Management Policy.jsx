import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';
import { motion } from 'framer-motion';

const ComplaintsManagementPolicy = () => {
  return (
    <LegalPageTemplate 
      title="Complaints Management Policy"
      subtitle="Strawberry Loans Pty Ltd"
    >
      <div className="prose prose-invert max-w-none">
        {/* Company Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Company</p>
                  <p className="font-semibold text-white">Strawberry Loans Pty Ltd</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">ABN</p>
                  <p className="font-semibold text-white">74 621 474 655</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Australian Credit Licence</p>
                  <p className="font-semibold text-white">519253</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Represented by</p>
                  <p className="font-semibold text-white">Auzwide Loans</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">ACN</p>
                  <p className="font-semibold text-white">688 716 841</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Authorised Credit Representative</p>
                  <p className="font-semibold text-white">574043</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/20 border-t border-white/10 px-8 py-4">
            <p className="text-sm text-gray-300 font-medium">
              <span className="text-secondary">Date Updated:</span> November 2025
            </p>
          </div>
        </motion.div>

        {/* Section 1: Introduction */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">1. INTRODUCTION</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10">
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">1.1</span>
              Strawberry Loans Pty Ltd ("Strawberry Loans, we or us") is committed to effective and 
              efficient complaints management and to fair and transparent dealings in the financial marketplace.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">1.2</span>
              A complaint is an expression of dissatisfaction made to or about an organisation, related to its 
              products, services, staff or the handling of a complaint, where a response or resolution is 
              explicitly or implicitly expected or legally required.
            </p>
          </div>
        </motion.section>

        {/* Section 2: Complaints Management Process */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">2. OUR COMPLAINTS MANAGEMENT PROCESS</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg">
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">2.1</span>
                We take your feedback seriously and will work proactively to investigate and resolve your 
                complaint. If you have a complaint, please contact us by:
              </p>
              <div className="grid md:grid-cols-3 gap-4 ml-8">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(a) Email</p>
                  <p className="text-sm font-medium text-white">info@auzwideloans.com.au</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(b) Telephone</p>
                  <p className="text-sm font-medium text-white">0438 762 492</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(c) Post</p>
                  <p className="text-sm font-medium text-white">325 Pacific Highway, Lake Munmorah, NSW 2259</p>
                </motion.div>
              </div>
            </div>

            <div className="rounded-2xl border border-secondary/30 bg-secondary/10 backdrop-blur-md p-6 shadow-lg">
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">2.2</span>
                <span className="font-medium text-white/90">Hardship or Postponement of Enforcement:</span>
                <br />
                If your complaint is about hardship or the postponement of enforcement proceedings, please 
                contact us by:
              </p>
              <div className="grid md:grid-cols-2 gap-4 ml-8">
                <div className="bg-black/40 border border-secondary/20 p-4 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(a) Email</p>
                  <p className="text-sm font-medium text-white">info@auzwideloans.com.au</p>
                </div>
                <div className="bg-black/40 border border-secondary/20 p-4 rounded-lg">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(b) Telephone</p>
                  <p className="text-sm font-medium text-white">0438 762 492</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <span className="inline-block w-8 font-semibold text-secondary">2.3</span>
              Any material relating to Auzwide Loans's Internal Dispute Resolution ("IDR") process will 
              be provided to you free of charge.
            </p>

            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="inline-block w-8 font-semibold text-secondary">2.4</span>
                We will collect certain information from you, including:
              </p>
              <ul className="space-y-2 ml-8">
                {[
                  ['(a)', 'Your name'],
                  ['(b)', 'Your contact details'],
                  ['(c)', 'How you would prefer to be contacted'],
                  ['(d)', 'A description of your complaint'],
                  ['(e)', 'How you would like the complaint resolved']
                ].map(([label, text], idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-8 font-semibold text-gray-400">{label}</span>
                    <span className="flex-1">{text};</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-300 leading-relaxed rounded-xl border border-secondary/20 bg-secondary/5 backdrop-blur-md p-4">
              <span className="inline-block w-8 font-semibold text-secondary">2.5</span>
              We will acknowledge your complaint, generally within <span className="font-semibold text-secondary">one (1) business day</span>, and give you the 
              contact details of the person responsible for dealing with your complaint.
            </p>

            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="inline-block w-8 font-semibold text-secondary">2.6</span>
                The person responsible for dealing with your complaint will commence their investigation and 
                may require further details from you. Upon completion of their investigation, the person 
                responsible for dealing with your complaint will contact you with an IDR response. This will 
                provide you with information about:
              </p>
              <ul className="space-y-3 ml-8">
                <li className="flex items-start bg-white/5 border border-white/10 p-3 rounded-lg">
                  <span className="inline-block w-8 font-semibold text-gray-400">(a)</span>
                  <span className="flex-1">the final outcome of your complaint at IDR; and</span>
                </li>
                <li className="flex items-start bg-white/5 border border-white/10 p-3 rounded-lg">
                  <span className="inline-block w-8 font-semibold text-gray-400">(b)</span>
                  <span className="flex-1">your right to take the complaint to the Australian Financial Complaints Authority ("AFCA") 
                  if you are not satisfied with the IDR response and how to contact AFCA.</span>
                </li>
              </ul>
            </div>

            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="inline-block w-8 font-semibold text-secondary">2.7</span>
                Except where your complaint involves hardship, an IDR response is not required to be provided 
                to you when a complaint is resolved by the end of the fifth (5th) business day of receipt of the 
                complaint, where we have:
              </p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(a)</span>
                  <span className="flex-1">resolved the complaint to your satisfaction; or</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(b)</span>
                  <span className="flex-1">given you an explanation and/or apology when no further action to reasonably address 
                  the complaint can be taken.</span>
                </li>
              </ul>
            </div>

            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                <span className="inline-block w-8 font-semibold text-secondary">2.8</span>
                A written response will be provided if:
              </p>
              <ul className="space-y-2 ml-8">
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(a)</span>
                  <span className="flex-1">you request a written response; or</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(b)</span>
                  <span className="flex-1">the complaint is about hardship.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Timeframe */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">3. TIMEFRAME FOR RESOLVING COMPLAINTS</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10">
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">3.1</span>
              We endeavour to resolve all complaints as quickly as practicable. Many complaints can be 
              resolved within days or on the spot. We will keep you informed in relation to your dispute and 
              will provide you with an IDR response within the following timeframes:
            </p>

            {/* Timeframe Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg mt-6">
              <table className="min-w-full">
                <thead className="bg-secondary/20 border-b border-white/10">
                  <tr>
                    <th className="border-r border-white/10 px-6 py-4 text-left font-semibold text-white">Type of Complaint</th>
                    <th className="px-6 py-4 text-left font-semibold text-white">Maximum Timeframe to provide IDR Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="border-r border-white/10 px-6 py-4 text-gray-300">Complaints involving default notices</td>
                    <td className="px-6 py-4 text-gray-300">No later than <span className="text-secondary font-semibold">twenty-one (21) calendar days</span> after receiving the complaint.</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="border-r border-white/10 px-6 py-4 text-gray-300">
                      Complaints involving applications for hardship notices or a request for postponement of 
                      enforcements proceedings made.
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      No later than <span className="text-secondary font-semibold">twenty-one (21) calendar days</span> after receiving the complaint.<br />
                      <span className="text-sm italic text-gray-400 mt-2 block">
                        Exceptions apply where we do not have sufficient information to make a decision or if an 
                        agreement is reached with you.
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="border-r border-white/10 px-6 py-4 text-gray-300">All other complaints</td>
                    <td className="px-6 py-4 text-gray-300">No later than <span className="text-secondary font-semibold">thirty (30) calendar days</span> after receiving the complaint.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Section 4: External Dispute Resolution */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">4. IF YOU ARE UNHAPPY WITH OUR RESPONSE</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">4.1</span>
              If your complaint is not resolved to your satisfaction through our IDR process, you have the 
              right to refer your complaint to AFCA. AFCA is an independent and external dispute resolution 
              scheme, of which Auzwide Loans is a member.
            </p>
            <div>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">4.2</span>
                You can lodge your complaint with AFCA by sending the relevant information and documents to:
              </p>
              <div className="ml-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 space-y-2 shadow-lg">
                <p className="font-semibold text-white text-lg">Australian Financial Complaints Authority Limited</p>
                <p className="text-gray-300">GPO Box 3</p>
                <p className="text-gray-300">Melbourne VIC 3001</p>
                <div className="pt-3 space-y-1">
                  <p className="text-gray-300"><span className="text-secondary font-semibold">Phone:</span> 1800 931 678</p>
                  <p className="text-gray-300"><span className="text-secondary font-semibold">Fax:</span> (03) 9613 6399</p>
                  <p className="text-gray-300"><span className="text-secondary font-semibold">Email:</span> info@afca.org.au</p>
                  <p className="text-gray-300"><span className="text-secondary font-semibold">Website:</span> <a href="https://www.afca.org.au/" className="text-secondary hover:brightness-110 underline transition-all" target="_blank" rel="noopener noreferrer">https://www.afca.org.au/</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Accessibility Services */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">5. ACCESSIBILITY SERVICES</h2>
          </div>
          <div className="space-y-6 pl-5 border-l-2 border-white/10">
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">5.1</span>
              We take our commitment to provide accessible services to customers seriously.
            </p>
            <div>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">5.2</span>
                If you are deaf or have a hearing or speech impairment, you can contact us on the National 
                Relay Service, a government initiative that offers an Australia-wide phone service for people 
                who are deaf or have a hearing or speech impairment. It's available at no additional charge:
              </p>
              <ul className="space-y-3 ml-8">
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(a)</span>
                  <span className="flex-1 text-gray-300">Talk to text users, please call <span className="text-secondary font-semibold">133 677</span> and then ask for <span className="text-secondary font-semibold">(08) 6800 0058</span>;</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(b)</span>
                  <span className="flex-1 text-gray-300">Speak to listen users, please call <span className="text-secondary font-semibold">1300 555 727</span> and then ask for <span className="text-secondary font-semibold">(08) 6800 0058</span>; or</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-8 font-semibold text-gray-400">(c)</span>
                  <span className="flex-1 text-gray-300">Internet relay users, please connect to the NRS and then ask for <span className="text-secondary font-semibold">(08) 6800 0058</span>.</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="inline-block w-8 font-semibold text-secondary">5.3</span>
              If you require this Policy is another language, please contact us at the details below.
            </p>
          </div>
        </motion.section>

        {/* Section 6: Contact Us */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-secondary mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-secondary">6. CONTACT US</h2>
          </div>
          <div className="space-y-4 pl-5 border-l-2 border-white/10">
            <div>
              <p className="mb-4 text-gray-300 leading-relaxed">
                <span className="inline-block w-8 font-semibold text-secondary">6.1</span>
                If you have any questions or would like further information about our complaints handling 
                process, please contact us by:
              </p>
              <div className="ml-8 grid md:grid-cols-3 gap-4">
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(a) Email</p>
                  <p className="text-sm font-medium text-white">info@auzwideloans.com.au</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(b) Telephone</p>
                  <p className="text-sm font-medium text-white">0438 762 492</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="bg-black/40 border border-secondary/20 p-4 rounded-lg hover:border-secondary/50 transition-all"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">(c) Post</p>
                  <p className="text-sm font-medium text-white">325 Pacific Highway, Lake Munmorah, NSW 2259</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </LegalPageTemplate>
  );
};

export default ComplaintsManagementPolicy; 