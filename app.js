const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const myProducts = [
  {
    id: "jenlooper-cactus",
    maker: "@jenlooper",
    image:
      "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
    url: "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
    title: "The Quantified Cactus: An Easy Plant Soil Moisture Sensor",
    description:
      "This project is a good learning project to get comfortable with soldering and programming an Arduino.",
  },
  {
    id: "jenlooper-light",
    maker: "jenlooper",
    image:
      "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
    url: "https://www.hackster.io/agent-hawking-1/book-light-dee7e4",
    title: "A beautiful switch-on book light",
    description:
      "Use craft items you have around the house, plus two LEDs and a LilyPad battery holder, to create a useful book light for reading in the dark.",
  },
  {
    id: "jenlooper-lightshow",
    maker: "@jenlooper",
    image:
      "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",
    url: "https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db",
    title: "Bling your Laptop with an Internet-Connected Light Show",
    description:
      "Create a web-connected light-strip API controllable from your website, using the Particle.io.",
  },
  {
    id: "jenlooper-survival",
    maker: "jenlooper",
    image:
      "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg",
    url: "https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb",
    title: "Create a Compact Survival Kit with LED Track Lighting",
    description:
      "Use an Altoids tin with Chibitronics sticker LEDs to create a light-up compact that doubles as a survival kit for the young hipster",
  },
  {
    id: "sailorhg-bubblesortpic",
    maker: "sailorhg",
    image:
      "https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png",
    url: "https://twitter.com/sailorhg/status/1090107740049952770",
    title: "Bubblesort Visualization",
    description:
      "Visualization of sailor scouts sorted by bubblesort algorithm by their planet\u0027s distance from the sun",
  },
  {
    id: "sailorhg-corsage",
    maker: "sailorhg",
    image:
      "https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png",
    url: "https://twitter.com/sailorhg/status/1090113666911891456",
    title: "Light-up Corsage",
    description: "Light-up corsage I made with my summer intern.",
  },
  {
    id: "sailorhg-kit",
    maker: "sailorhg",
    image:
      "https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png",
    url: "https://twitter.com/sailorhg/status/1090122822007963648",
    title: "Pastel hardware kit",
    description:
      "Pastel hardware kits complete with custom manufactured pastel alligator clips.",
  },
  {
    id: "sailorhg-led",
    maker: "sailorhg",
    image:
      "https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg",
    url: "https://twitter.com/sailorhg/status/1090117277540745216",
    title: "Heart-shaped LED",
    description: "custom molded heart shaped LED with sprinkles.",
  },
  {
    id: "selinazawacki-soi-shirt",
    maker: "selinazawacki",
    image:
      "https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png",
    url: "https://www.instagram.com/p/BNvESj-j8PI/",
    title: "Black Sweatshirt",
    description: "Black sweatshirt hoody with the Sick of the Internet logo.",
  },
  {
    id: "selinazawacki-soi-pins",
    maker: "selinazawacki",
    image:
      "https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png",
    url: "https://www.instagram.com/p/BNm6hZzDoEF/",
    title: "Sick of the Internet Pins",
    description: "Still some time to enter the pin/sticker giveaway! ",
  },
  {
    id: "vogueandcode-hipster-dev-bro",
    maker: "vogueandcode",
    image:
      "https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png",
    url: "https://www.vogueandcode.com/shop/hipster-dev-bro",
    title: "Hipster Dev",
    description:
      "Hipster Dev is busy coding away while styled in a camo jacket and orange beanie.",
  },
  {
    id: "vogueandcode-pretty-girls-code-tee",
    maker: "vogueandcode",
    image:
      "https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png",
    url: "https://www.vogueandcode.com/shop/pretty-girls-code-tee",
    title: "Pretty Girls Code Tee",
    description:
      "Everyone\u2019s favorite design is finally here on a tee! The Pretty Girls Code crew-neck tee is available in a soft pink with red writing.",
  },
  {
    id: "vogueandcode-ruby-sis-2",
    maker: "vogueandcode",
    image:
      "https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png",
    url: "https://www.vogueandcode.com/shop/ruby-sis-2",
    title: "Ruby Sis",
    description:
      "Styled in a dashiki, Ruby Sis is listening to music while coding in her favorite language, Ruby!",
  },
  {
    id: "selinazawacki-moon",
    maker: "selinazawacki",
    image:
      "https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png",
    url: "https://www.instagram.com/p/BFktVYPinKQ/",
    title: "Holographic Dark Moon Necklace",
    description:
      "Not sure if I\u0027ll be making more, get it while I have it in the store.",
  },
  {
    id: "selinazawacki-shirt",
    maker: "selinazawacki",
    image:
      "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
    url: "https://www.instagram.com/p/BEXlpiZCnJ3",
    title: "Floppy Crop",
    description: "Used up the Diskette fabric today to make 2 of these crops.",
  },
];

app.get("/products", (req, res) => {
  res.json(myProducts);
  res.end();
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
