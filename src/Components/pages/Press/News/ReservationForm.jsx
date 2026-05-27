import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const ReservationForm = ({ date, setIsOpen }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [status, setStatus] = useState(null);

  const CONTACTFORM_KEY = import.meta.env.VITE_RESERVATIONFORM_KEY;

  const onChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("...Sending");

    const payload = {
      access_key: CONTACTFORM_KEY,

      name: data.name,
      email: data.email,
      message: `Chosen Date => ${date}`,

      replyto: data.email,

      autoresponder: {
        subject: "Reservation confirmation",
        body: `
            Hello ${data.name},

            Thank you very much for your reservation.

            You have selected the following time to visit the exhibition
            "All Our Yesterdays" by Katya Granova:
            ${date}

            The venue address is:
            Studio 2, Handbag Factory  
            3 Loughborough St  
            London SE11 5RB  
            United Kingdom

            Enjoy your visit!

            Kind regards,  
            Katya Granova
        `,
      },
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.status === 200 && json.success) {
        setStatus("Success! Thanks for the Reservation.");
        setData({
          name: "",
          email: "",
          date: "",
        });
      } else {
        setStatus("Oops … something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error while sending.");
    }
  };

  return (
    <>
      <div className="fixed top-[45vh] left-1/2 w-[90vw] max-w-[768px] max-h-[640px] -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-50 rounded-md ring-1 ring-gray-200 shadow-2xl p-12 md:px-20 overflow-y-auto">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <IoCloseCircle
              className="absolute top-8 right-8 text-[2.25rem] text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            <h3 className="pt-10 pb-12 text-[1.15rem]">{`Reserve for ${date}`}</h3>
            <label className="block mb-1 text-sm font-semibold text-[1rem]">
              Name <span className="font-normal">(required)</span>
            </label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded text-[1.1rem]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-[1rem]">
              Email <span className="font-normal">(required)</span>
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded  text-[1.1rem]"
            />
          </div>

          <button
            type="submit"
            className="w-[150px] text-[1.1rem] py-3 mt-2 mb-4 text-white bg-gray-700 rounded hover:bg-gray-900 transition-colors duration-300 cursor-pointer"
          >
            RSVP
          </button>

          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
