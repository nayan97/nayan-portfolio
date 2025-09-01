import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp} from "react-icons/fa";
export default function Contact() {
  return (
   <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-[#112e42] py-6 rounded-lg flex flex-col items-center text-center">
            <FaPhoneAlt className="text-green-600 text-3xl mb-2" />
            <p className="font-semibold">Phone</p>
            <p className=" ">+880 1750 639637</p>
          </div>
          <div className="bg-[#112e42] py-6 rounded-lg flex flex-col items-center text-center">
            <FaWhatsapp  className="text-green-600 text-3xl mb-2" />
            <p className="font-semibold">WhatsApp</p>
            <p className=" ">+880 1750 639637</p>
          </div>
          <div className="bg-[#112e42] py-6 rounded-lg flex flex-col items-center text-center">
            <FaEnvelope className="text-green-600 text-3xl mb-2" />
            <p className="font-semibold">Email</p>
            <p className=" ">nayanislam085@gamil.com</p>
          </div>
          <div className="bg-[#112e42] py-6 rounded-lg flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-green-600 text-3xl mb-2" />
            <p className="font-semibold">Address</p>
            <p className=" ">Dhaka, Bangladesh</p>
          </div>
        </motion.div>
  );
}
