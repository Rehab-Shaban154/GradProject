import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom"; // استخدام الرابط للتنقل إلى صفحة الحدث
import "./Events.css"; 
import EventsData from "./EventsData";

const Events = () => {
  return (
    <div className="events-section">
      <h2 className="section-title head">Events</h2>
      <div className="events-grid">
        {EventsData.map((event) => (
          <motion.div
            key={event.id}
            className="event-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
            />
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.sidepara.slice(0, 100)}...</p> {/* جزء من الوصف */}
              <Link to={`/event/${event.id}`} className="event-btn linear-gradient">
               Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
