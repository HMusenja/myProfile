import { useEffect, useState } from "react";
import { fetchTestimonials } from "../api/testimonialApi.js";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../components/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Reviews = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials", err);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-x-hidden flex flex-col items-center justify-center bg-emerald-950"
    >
      <Container className="max-w-full mx-auto px-4 text-center border-t-4 border-t-yellow-500">
        {/* 🔳 Background Texture */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/myProfile/images/cubes.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            opacity: 1,
          }}
        />
        <motion.div className="bg emerald-950 py-16 px-4 sm:px-16 relative ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-yellow-500 font-bold mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white mb-8"
          >
            A few words from people I've worked with.
          </motion.p>

          {loading ? (
            <p className="text-white">Loading testimonials...</p>
          ) : testimonials.length > 0 ? (
            <>
              {/* ✅ MOBILE VIEW ONLY (Swiper Carousel) */}
              <div className="sm:hidden w-full px-2">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  loop={visibleTestimonials.length > 1}
                  grabCursor
                  autoplay={{ delay: 3500 }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  className="pb-6"
                >
                  {visibleTestimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-yellow-500 rounded-xl px-4 py-3 shadow-lg flex flex-col w-full max-w-xs mx-auto">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={t.avatar || "https://i.pravatar.cc/150?img=12"}
                            alt={t.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-sm text-emerald-800">{t.name}</p>
                            <p className="text-[10px] text-blue-700">{t.role}</p>
                            <div className="flex gap-1 mb-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <FaStar
                                  key={i}
                                  className={`text-xs ${
                                    i <= t.rating ? "text-emerald-950" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-800 italic">"{t.quote}"</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ✅ TABLET + DESKTOP: GRID */}
              <motion.div
                className="hidden sm:flex flex-wrap justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {visibleTestimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-yellow-500 rounded-xl px-4 py-3 sm:px-6 sm:py-5 shadow-lg inline-flex flex-col items-start w-fit max-w-xs sm:max-w-sm text-left"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={t.avatar || "https://i.pravatar.cc/150?img=12"}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-emerald-800">{t.name}</p>
                        <p className="text-[10px] sm:text-xs text-blue-700">{t.role}</p>
                        <div className="flex gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <FaStar
                              key={i}
                              className={`text-xs sm:text-base ${
                                i <= t.rating ? "text-emerald-950" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-800 italic mb-3 sm:mb-4">
                      "{t.quote}"
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* View More */}
              {testimonials.length > 4 && (
                <div className="mt-8">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-yellow-500 text-emerald-950 rounded-lg hover:bg-yellow-600 transition"
                  >
                    {showAll ? "Show Less" : "View All"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="text-white">No testimonials available yet.</p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Reviews;
