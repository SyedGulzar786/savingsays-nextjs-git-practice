// Example server-side (getServerSideProps)
export async function getServerSideProps(context) {
    const ip = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress;
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
  
    return {
      props: {
        country: data.country, // e.g., 'US', 'FR', 'AE'
      },
    };
  }
  
  const countrySettings = {
    US: { lang: 'en', currency: 'USD' },
    AE: { lang: 'ar', currency: 'AED' },
    FR: { lang: 'fr', currency: 'EUR' },
    IN: { lang: 'en', currency: 'INR' },
    // Add more countries
  };
  