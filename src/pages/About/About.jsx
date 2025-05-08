import React from "react"; // For JSX transformation
import { useState, useEffect } from "react"; // For hooks
const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cursive text-amber-900 mb-4">About</h1>
          <div className="w-24 h-1 bg-amber-700 mx-auto"></div>
        </div>

        {/* About Me Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-cursive text-amber-800 mb-6">
                The Artist Behind the Lens
              </h2>
              <p className="mb-4">
                My name is Valentin Borsan, and I've been passionate about
                horses and photography for as long as I can remember. Growing up
                on a ranch in Romania, I developed a deep connection with these
                magnificent creatures, which eventually led me to pursue equine
                photography as my life's work.
              </p>
              <p className="mb-4">
                After studying fine arts and photography in Budapest and Paris,
                I spent several years traveling the world, photographing horses
                in their natural environments—from the wild mustangs of the
                American West to the elegant Lipizzaners of Vienna.
              </p>
              <p>
                My work has been exhibited in galleries across Europe and North
                America, and my limited edition prints are collected by equine
                art enthusiasts worldwide.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/valentin-portrait.jpg"
                alt="Valentin Borsan"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Interview Section */}
        <section className="mb-16 bg-amber-100 p-8 rounded-lg">
          <h2 className="text-3xl font-cursive text-amber-800 mb-6 text-center">
            Q&A with Valentin
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                What draws you to photograph horses specifically?
              </h3>
              <p>
                Horses possess a unique combination of power and grace that I
                find endlessly fascinating. They're incredibly expressive
                animals—you can see their personality, their mood, even their
                thoughts in their eyes and body language. Capturing that essence
                is both challenging and deeply rewarding.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                How would you describe your artistic style?
              </h3>
              <p>
                I strive for a balance between fine art and documentary. While
                my compositions are carefully considered and often painterly in
                quality, I also want to preserve the authenticity of the moment.
                I rarely use heavy post-processing— the beauty is already there
                in the horse, the light, and the landscape.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                What's your process for creating a new piece?
              </h3>
              <p>
                It always begins with spending time with the horse—understanding
                its personality, its movements, how it interacts with light. I
                might spend days just observing before I even pick up my camera.
                When the moment is right, everything comes together—the horse's
                expression, the quality of light, the composition—and that's
                when magic happens.
              </p>
            </div>
          </div>
        </section>

        {/* Exhibitions Section */}
        <section>
          <h2 className="text-3xl font-cursive text-amber-800 mb-8 text-center">
            Selected Exhibitions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Spirit of the Horse",
                location: "Equine Art Gallery, Lexington, KY",
                year: "2023",
                image: "/images/exhibition1.jpg",
              },
              {
                title: "Wild & Free",
                location: "National Geographic Museum, Washington DC",
                year: "2022",
                image: "/images/exhibition2.jpg",
              },
              {
                title: "Equestrian Elegance",
                location: "Palais de Tokyo, Paris",
                year: "2021",
                image: "/images/exhibition3.jpg",
              },
              {
                title: "Hooves & Horizons",
                location: "Royal Academy of Arts, London",
                year: "2020",
                image: "/images/exhibition4.jpg",
              },
              {
                title: "The Horse in Motion",
                location: "Museum of Modern Art, Vienna",
                year: "2019",
                image: "/images/exhibition5.jpg",
              },
              {
                title: "Equus",
                location: "Budapest Museum of Fine Arts",
                year: "2018",
                image: "/images/exhibition6.jpg",
              },
            ].map((exhibition, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-amber-900 mb-1">
                    {exhibition.title}
                  </h3>
                  <p className="text-sm text-amber-700 mb-1">
                    {exhibition.location}
                  </p>
                  <p className="text-xs text-amber-600">{exhibition.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
