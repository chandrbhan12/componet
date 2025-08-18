import { Quote } from "lucide-react";
import { describe } from "node:test";

const slogans = [
  {
    text: "आप वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।",
    description: "Be the change you wish to see in the world."
  },
  {
    text: "सत्य और अहिंसा ही सबसे बड़ी ताक़त है।",
    description: "Truth and non-violence are the greatest powers."
  },
  {
    text: "शिक्षित बनो, संगठित रहो और संघर्ष करो।",
    description: "Educate, Agitate, Organize."
  },
  {
    text: "हम सबसे पहले और अंत में भारतीय हैं।",
    description: "We are Indians, firstly and lastly."
  },
  {
    text:"छात्रों का संघर्ष ही बदलाव की राह है।",
    description:"Students struggle is the path to change."
  },
  {
    text:"क्रांति की तलवार विचारों की धार से तेज होती है।",
    description:"The sword of revolution is sharpened on the whetting-stone of ideas."
  },
  {
    text:"हम पढ़ेंगे, हम लड़ेंगे, हक़ लेकर रहेंगे।",
    description:"We will study, we will fight, we will claim our rights."
  },
  {
    text:"उठो, जागो और तब तक मत रुको जब तक लक्ष्य की प्राप्ति न हो जाए।",
    description:"Arise, awake, and stop not until the goal is achieved."
  },
   
  {
    text:"स्वतंत्रता और लोकतंत्र का मूल्य तभी है जब वह सबको मिले।",
    description:"The value of freedom and democracy lies only when it is available to everyone."
  },
     
  {
    text:"सपना वो नहीं जो आप सोते समय देखते हैं, सपना वो है जो आपको सोने न दे।",
    description:"Dream is not that which you see while sleeping, it is something that does not let you sleep."
  },
   {
    text:"समान अवसर, सबका अधिकार – BVES संगठन तैयार|",
    description:"Equal opportunity, everyone’s right – BVES organization is ready."
  },
{
    text:"ज्ञान, न्याय और समानता – BVES की पहचान|",
    description:"Knowledge, Justice, and Equality – The Identity of BVES."
  }

];

const SloganSection = () => {
  return (
    <section id="slogans" className="py-20 bg-sagantan-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-sagantan-text mb-6">
            Our Slogans
          </h2>
          <p className="text-lg text-sagantan-text-light max-w-3xl mx-auto">
            These powerful messages encapsulate our values, vision, and commitment to excellence. 
            They inspire our team and guide our actions every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {slogans.map((slogan, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-light rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-sagantan-white" />
              </div>
              <blockquote className="text-xl md:text-3xl font-bold text-sagantan-blue mb-4 italic">
                "{slogan.text}"
              </blockquote>
              <p className="text-sagantan-text-light text-lg leading-relaxed">
                {slogan.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-primary rounded-3xl shadow-medium">
            <h3 className="text-3xl md:text-4xl font-bold text-sagantan-white">
              "SAGANTAN - Your Partner in Success"
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;