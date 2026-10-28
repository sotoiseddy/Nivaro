export const business = {
  name: 'Nivaro',
  founder: 'Advik Gurvinder',
  whatsappNumber: '+91 75909 90337',
  email: 'advik.gurvinder@gmail.com',
  location: 'Una, Himachal Pradesh, India',
  serviceArea: 'Himachal Pradesh and remote clients',
  description: 'Thoughtful websites for small businesses ready to grow their online presence.',
}

export const services = [
  {
    id: 'landing-page',
    title: 'Landing Pages',
    description: 'A focused single-page website to introduce your business, promote a service, or present a specific offer.',
    suitable: 'For a clear first impression',
    includes: ['Purpose-led page structure', 'Mobile-friendly layout', 'Contact links and clear next steps'],
    price: '₹4,000 onwards',
  },
  {
    id: 'basic-website',
    title: 'Basic Business Websites',
    description: 'A simple multi-page home for your business, with the essentials customers look for.',
    suitable: 'For small businesses getting started',
    includes: ['Home, About, Services and Contact', 'Responsive design', 'Essential business information'],
    price: '₹5,000 onwards',
  },
  {
    id: 'professional-website',
    title: 'Professional Business Websites',
    description: 'A more detailed online presence with space to explain what makes your business right for customers.',
    suitable: 'For growing businesses',
    includes: ['Custom pages and sections', 'Service details, gallery or FAQs', 'Clear contact pathways'],
    price: '₹7,000 onwards',
  },
  {
    id: 'restaurant-website',
    title: 'Restaurant & Café Websites',
    description: 'Put your menu, opening hours, location and atmosphere in one easy-to-browse place.',
    suitable: 'For restaurants, cafés and food businesses',
    includes: ['Menu and opening hours', 'Photo-led presentation', 'Location and contact links'],
    price: '₹6,000 onwards',
  },
  {
    id: 'hotel-website',
    title: 'Hotel & Homestay Websites',
    description: 'Showcase your rooms, amenities and property so guests can picture their stay.',
    suitable: 'For stays and hospitality businesses',
    includes: ['Rooms and amenities', 'Property photos and location', 'Booking enquiry options'],
    price: '₹7,000 onwards',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Websites',
    description: 'A personal, professional place to share your work, skills and the best way to reach you.',
    suitable: 'For freelancers and professionals',
    includes: ['Work and project showcases', 'About and services', 'Direct contact links'],
    price: '₹4,000 onwards',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesigns',
    description: 'Refresh an outdated website with clearer content, a modern layout and a better mobile experience.',
    suitable: 'For businesses ready for a refresh',
    includes: ['Updated visual design', 'Responsive layouts', 'Improved content structure'],
    price: '₹5,000 onwards',
  },
]

export const benefits = [
  {
    number: '01',
    title: 'Build credibility',
    description: 'Give potential customers a dedicated place to learn about your business, services, location and contact details.',
  },
  {
    number: '02',
    title: 'Be available 24/7',
    description: 'Customers can browse your services and essential information, even when your business is closed.',
  },
  {
    number: '03',
    title: 'Showcase your work',
    description: 'Display your products, portfolio, menu, facilities, services, photos and other useful details.',
  },
  {
    number: '04',
    title: 'Make contacting you easier',
    description: 'Add click-to-call, WhatsApp and email links, along with clear location information.',
  },
  {
    number: '05',
    title: 'Own your online presence',
    description: 'Create a dedicated online destination for your business instead of relying entirely on social media.',
  },
  {
    number: '06',
    title: 'Help customers discover you',
    description: 'A well-structured site can support search visibility, especially alongside relevant content and local SEO.',
  },
]

export const process = [
  ['01', 'Let’s talk', 'We discuss your business, your customers and what you need from a website.'],
  ['02', 'Plan the details', 'We agree on the website structure, content and a design direction that fits your business.'],
  ['03', 'Build & refine', 'Your website is built, and we make the revisions agreed for the project.'],
  ['04', 'Launch & hand over', 'We publish the finished website and hand it over with the essentials explained.'],
]

export const faqs = [
  ['Why does my business need a website?', 'A website gives customers one reliable place to understand what you offer and how to reach you. It can support your credibility and make key information easier to find.'],
  ['How much does a website cost?', 'Website projects start between ₹4,000 and ₹7,000 depending on the service. Your final quote depends on the number of pages, design complexity, content and requested functionality.'],
  ['How long does development take?', 'Timing depends on the size of the website and how quickly content and feedback are available. We’ll agree on a realistic timeline before work begins.'],
  ['Will the website work on mobile phones?', 'Yes. Websites are designed to adapt to mobile, tablet and desktop screens.'],
  ['Do I need to buy a domain?', 'A domain is your website address, such as yourbusiness.in. You’ll need one to use a custom address; we can discuss options during planning.'],
  ['Are hosting costs included?', 'Hosting and domain registration or renewals may be charged separately, where applicable. Any costs will be discussed before launch.'],
  ['Can customers contact me through WhatsApp?', 'Yes. We can add a WhatsApp button that opens a conversation with your configured business number.'],
  ['Can you redesign my existing website?', 'Yes. Website redesigns are available, including refreshed layouts, clearer information and improved mobile responsiveness.'],
  ['Can you add online payments or booking functionality?', 'Payments, booking management, databases and admin panels are separate custom-development projects. We can discuss the requirements and scope separately.'],
]

export const whatsappHref = (message = 'Hello, I would like to discuss a website for my business.') =>
  `https://wa.me/${business.whatsappNumber.replace(/[^0-9x]/gi, '')}?text=${encodeURIComponent(message)}`
