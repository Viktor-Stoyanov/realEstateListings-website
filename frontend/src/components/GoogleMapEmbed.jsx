const GoogleMapEmbed = ({ city, country = 'Bulgaria' }) => {
  // Encode the location query parameter
  const location = encodeURIComponent(`${city}, ${country}`);
  
  return (
    <iframe
      width="600"
      height="450"
      className="border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCgf7_Ao5WxLUwTz5xwFz7IPVIDUo8Is5I&q=${location}`}
      title={`Map of ${city}, ${country}`}
    />
  );
};

export default GoogleMapEmbed;