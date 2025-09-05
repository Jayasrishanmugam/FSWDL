function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6">Let’s connect! Feel free to reach out.</p>

      <form className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg text-black"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded-lg text-black"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg w-full font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
