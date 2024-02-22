const Map = () => {
  return (
    <section className="map">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.0379102526645!2d58.37554612924545!3d37.91802585671859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffdca3f21a6e5%3A0x63cc9bd1c5a0b35f!2z0KjQsNGF0LzQsNGC0L3QsNGPINC4INGI0LDRiNC10YfQvdCw0Y8g0YjQutC-0LvQsA!5e1!3m2!1sen!2s!4v1660928532968!5m2!1sen!2s"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
