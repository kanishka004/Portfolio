import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Deepak A"}
          feedback={"Kanishka is a very talented coder."}
        />

        <TestimonialCard
          name={"Ganga J"}
          feedback={
            "If you are looking for a web developer, you can hire Kanishka."
          }
        />

        <TestimonialCard
          name={"Neeta Jeena"}
          feedback={"Kanishka knows her job very well!"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;