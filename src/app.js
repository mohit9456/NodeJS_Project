const express = require("express");
const hbs = require("hbs");
const app = express();
const routes = require('./routes/main');
const mongoose = require("mongoose");
const Detail = require("./models/detail");
const Slider = require("./models/slider");
const Service = require("./models/service");
const Technical = require("./models/technical");
const Blog = require("./models/blog");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/static', express.static("public"))
app.use('', routes);

// app.get("/", (req, res) => {
//     res.send("Data from server");
// })

app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");




mongoose.connect("mongodb+srv://mohitpandey1287:A55tAHe8Jh9UmGVD@cluster0.3hug2as.mongodb.net/?retryWrites=true&w=majority")   
.then(() => {
    console.log("connection successful !");
})
.catch((error) => {
    console.log(error);
})
// const DetailData = new Detail({
//     brandName : "Coding Smashers",
//     brandIconUrl : "https://png.pngtree.com/png-clipart/20190619/original/pngtree-coding-on-screen-round-circle-multi-color-bg-png-image_3990030.jpg",
//     links:[
//         {
//             label : "Home",
//             url: "/"
//         },
//         {
//             label : "Blogs",
//             url: "/blogs"
//         },
//         {
//             label : "Technical",
//             url: "/technical"
//         },
//         {
//             label : "Contact us",
//             url: "/contact-us"
//         },
//     ]
// });
// DetailData.save();

// Slider.create([
//     {
//     title : "Learn ReactJs",
//     subTitle : " It works to build user interfaces by combining sections of code into full websites",
//     imageUrl : "https://cloudemployee.co.uk/media/111360/10-best-websites-to-practice-your-coding-chops_header.jpg"
//     },
//     {
//     title : ",
//     subTitle : "It is a high-level Python web framework that enables rapid development of full websites",
//     imageUrl : "https://media.istockphoto.com/id/1349094880/photo/marketer-using-a-computer-to-digital-online-marketing-banner-web-icon-for-business-and-social.jpg?s=2048x2048&w=is&k=20&c=MrYqwlPLvQl1oXT6GWlVH6864BPPv0NuIo50CKqRjHA="
//     },
//     {
//     title : ",
//     subTitle : "It focuses on use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
//     imageUrl : "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg"
//     },
//     {
//     title : ",
//     subTitle : "It is the computing services i.e. servers, storage, databases, networking and intelligence—over the Internet.",
//     imageUrl : "https://cdn.pixabay.com/photo/2022/04/08/15/44/abstract-7119743_1280.jpg"
//     },
// ]);



// Service.create([
//     {
//         icon : "fa-solid fa-microchip",
//         imageUrl: "https://www.internetsociety.org/wp-content/uploads/2023/05/girl-using-laptop.jpeg",
//         title : "Encryption Keeps Kids Safe Online",
//         description : "Policymakers are proposing laws that will weaken encryption.The EARN IT Act, STOP CSAM Act, and many other proposed bills are threatening encryption in the name of keeping kids safe,",
//         slug: "Encryption-Keeps-Kids-Safe-Online",
//         linkUrl : "/technicals/Encryption-Keeps-Kids-Safe-Online",
//         detail_desc1: "As parents and Internet advocates, we’re passionate about children’s safety online, and we do everything in our power to keep our kids safe. Just as we buckle them into seatbelts and make regular doctors visits, we keep tabs on what they’re doing online, using tools like encryption to protect them from danger.",
//         detail_desc2: "Allowing our kids to have an online life isn’t always easy. Being a parent is finding the balance between hovering and giving our children independence. Thankfully, there’s a middle ground. We can take control of some of the unknowns, so that we can reduce online risks. By turning to tools and actions, we can ensure our kids aren’t exposed to inappropriate content or contacted by strangers. Encryption is key to this, empowering us so our children can have a healthy, safe online presence—one in which their information isn’t exposed.",
//         detail_desc3: "These proposals eat away at encryption. They take away our ability to use the tool that’s vital to keeping our own kids safe online. Both the EARN IT Act and the STOP CSAM Act would give power to courts to consider the use of encryption as proof of liability in cases of child sexual abuse material (CSAM) distribution on a platform. While the EARN IT Act introduces criminal charges for platforms, the STOP CSAM Act introduces sweeping civil liability for platforms and infrastructure providers. In both cases, the end result is undermined encryption.",
//         detail_desc4 :"encryption does such a good job of keeping all of us safe that we take it for granted. Child exploitation of any kind is heinous, and it’s reasonable that societies want to find ways to solve it. They turn to the authorities to do that. The lawmakers behind these bills say they want to protect children, but they’re weakening the tools that do just that. . Unfortunately, their proposals put all of us at risk—and they take away our ability to protect our own kids.",
//         link : "more"
//     },
//     {
//         icon : "fa-solid fa-laptop",
//         imageUrl: "https://images.firstpost.com/wp-content/uploads/2023/07/Samsung-Galaxy-M34-Review-2-1.jpg?impolicy=website&width=640&height=363",
//         title : "Samsung Galaxy M34 5G Review: Packing a big punch for its price",
//         description : "The Samsung Galaxy M34 5G truly packs a big bunch, especially when you consider its price. Starting at Rs 18,999 the device is one of the best value-for-money smartphones in its price segment",
//         slug: "Samsung-Galaxy-M34-5G-Review-Packing-a-big-punch-for-its-price",
//         linkUrl : "/technicals/Samsung-Galaxy-M34-5G-Review-Packing-a-big-punch-for-its-price",
//         detail_desc1: "Samsung has been pushing out a ton of budget smartphones off late. The Galaxy M34 is their latest entry into an already saturated smartphone market segment. And even though there are tons of options around Rs 20,000, recommending one wholeheartedly, becomes a lot more difficult – these days, smartphones in that price segment don’t really stand out that much.",
//         detail_desc2: "The Galaxy M34 is a pleasant departure from that though. The M series was launched in 2019, and since then, it has been a fan favourite among people who want to have the best that Samsung has to offer but don’t want to spend as much as they would have had to for the F series",
//         detail_desc3: "The Galaxy M34 has a pretty awesome camera that works really well, comes with a massive 6000 mAh battery that will last you more than two days, and has an SoC that gets the job done. However, it also has a display that has some thick bezels and still carries a tear-drop notch.",
//         detail_desc4 :"Samsung has also priced the device very competitively. For Rs 18,999, you get the 6GB + 128GB configuration. Spend an additional Rs 2,000, and you’ll get the 8GB version, which is the one to get. So how does the M34 stand up as a device? Is it worth spending your hard-earned money on? We find out.  the Samsung Galaxy M34 is a great deal for most ordinary users who are looking for a no-nonsense smartphone, and don’t care for the bells and whistles. Truly, a phone that we are comfortable recommending.",
//         link : "more"
//     },
//     {
//         icon : "fa-solid fa-mobile-retro",
//         imageUrl: "https://techpp.com/wp-content/uploads/2023/07/Tap-to-pay-with-Google-Wallet.jpg",
//         title : "How to Make Tap-to-Pay Payments Without UPI Apps in India",
//         description : "It’s a useful feature that allows us to make payments with just the tap of a finger. You can also use your smartphone to make payments with a tap. This has recently become increasingly popular in India.",
//         slug: "How-to-Make-Tap-to-Pay-Payments-Without-UPI-Apps-in-India",
//         linkUrl : `/technicals/How-to-Make-Tap-to-Pay-Payments-Without-UPI-Apps-in-India`,
//         detail_desc1: "Most newer smartphones above the mid-range are equipped with NFC. It’s a useful feature that allows us to share information and make payments with just the tap of a finger. Your credit and debit cards have long had this option, but you can also use your smartphone to make payments with a tap. This has recently become increasingly popular in India.",
//         detail_desc2: "Right now, tap-to-pay transactions are limited to UPI apps only. To add your card and make a payment using this method, you first need to log in to a UPI app with your mobile number and bank account details. However, if you want to skip all that and just use your credit or debit card for payments, we have found a solution for you.",
//         detail_desc3: "With the growing popularity of tap-to-pay in all parts of the country, and with most POS vending machines supporting tap-to-pay these days, using your smartphone as a one-stop solution for all types of payments will be critical. Whether you want to use UPI applications or just NFC-based payments, our smartphones support it all.",
//         detail_desc4 :"Here's know Tap to Pay ?............ Tap-to-pay, also known as contactless payment or near field communication (NFC) payment, is a method of making secure payments by simply tapping or waving your payment device (such as a card, smartphone or wearable) near a compatible payment terminal. The transaction is completed wirelessly and quickly without the need for physical contact or insertion of the card into a payment terminal.",
//         link : "more"
//     }
// ]);



// Technical.create([
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/foxconn_india_reuters_thumb_1689080227938.jpg?downsize=160:120&output-quality=80&output-format=jpg",
//         title: "Foxconn's Worries Over Vedanta's Financials Said to Be Reason Behind Withdrawal From JV",
//         description: "The Indian government and Foxconn had concerns over the financial situation of Vedanta, which led to the Taiwanese company parting ways with Vedanta on a chipmaking joint venture...",
//         slug: "Foxconn-Worries-Over-Vedanta-Financials",
//         linkUrl: "/technical/Foxconn-Worries-Over-Vedanta-Financials",
//         detail_desc1: "The Indian government and Foxconn had concerns over the financial situation of Vedanta, which led to the Taiwanese company parting ways with Vedanta on a chipmaking joint venture, sources familiar with the information told Reuters. \n Indian conglomerate Vedanta's London-based parent, Vedanta Resources, has been plagued by a rising debt pile.",
//         detail_desc2:"In a statement to Reuters, Vedanta said its Indian unit, Vedanta, is in 'a comfortable financial position' and there was 'no basis' to such speculation.\n Meanwhile, Foxconn said on Tuesday it plans to apply for incentives that India is offering under its semiconductor manufacturing policy, a day after the company parted ways with Vedanta on a $19.5 billion (roughly Rs. 1,60,600 crore) chipmaking joint venture.",
//         detail_desc3: "'Foxconn is committed to India and sees the country successfully establishing a robust semiconductor manufacturing ecosystem,' the company said. \n 'Foxconn is working toward submitting an application.' \n On Monday, Foxconn withdrew from its semiconductor JV with Indian metals-to-oil conglomerate Vedanta, in a setback to Prime Minister Narendra Modi's chipmaking plans for India.",
//         detail_desc4 : "Foxconn said on Tuesday 'there was recognition from both sides that the project was not moving fast enough' and there were other 'challenging gaps we were not able to smoothly overcome', without sharing details. \n 'This is not a negative,' Foxconn said in a statement."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/whatsapp_dima_solomin_unsplash_1643265624703.jpg?downsize=950:*",
//         title: "WhatsApp's Phone No. Privacy Feature for Communities Rolling Out to Android, iOS Beta Testers",
//         description: "The new functionality previously said to be in testing would let users hide their phone numbers while joining a community. The feature called “phone number privacy”...",
//         slug: "WhatsApp-Phone-No-Privacy-Feature-for-Communities",
//         linkUrl: "/technical/WhatsApp-Phone-No-Privacy-Feature-for-Communities",
//         detail_desc1: "WhatsApp is reportedly rolling out a new privacy-focused feature for community members. The new functionality previously said to be in testing would let users hide their phone numbers while joining a community. The feature called “phone number privacy”, is reportedly available to all Android and iOS beta testers. With this, users can participate in conversations and show their reactions to messages by hiding their names and phone numbers from other members of the community.",
//         detail_desc2: "The Meta-owned instant messaging app has not officially revealed when it intends to make the phone number privacy feature live for all users.\n As per a report by WhatsApp features tracker WABetainfo, WhatsApp has released a phone number privacy feature for communities for all Android and iOS beta testers. It is said to be available for all Android and iOS beta testers with WhatsApp beta for Android version 2.23.14.19 and iOS 23.14.0.70 beta version for iOS respectively.",
//         detail_desc3: " With this feature, the phone number of the user can be hidden from all members while joining a community. At present, the community participants list is already hidden in the community announcement group, but if a user interacts with messages through reactions, their phone number would be revealed. The new phone number privacy feature will ensure that your contact number will remain out of sight of other participants in the Community even while adding reactions to a message.",
//         detail_desc4: "The report also includes a screenshot showing the phone number privacy feature for communities, giving users an idea of what it might look like when it starts widely rolling out. It can be accessed from the 'Community announcement group info'. While turning on this feature, WhatsApp alerts users that their number will stay hidden from other participants except for the community admin and the members who have already saved their contact numbers. This new privacy feature is only applicable to community members as the community admin's phone number is always visible. Users will also have the option to share it with specific community participants later as per preference."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/gen_ai_reuters_1686905234930.jpg?downsize=950:*",
//         title: "'AI Revolution' to Sweep Job Markets in World’s Wealthiest Nations: OECD",
//         description: "The world's wealthiest nations must urgently prepare for the impact of an imminent 'AI revolution' that will change jobs, create new ones and make others disappear, the OECD said Tuesday...",
//         slug: "AI-Revolution-to-Sweep-Job-Markets-in-World-Wealthiest-Nations-OECD",
//         linkUrl: "/technical/AI-Revolution-to-Sweep-Job-Markets-in-World-Wealthiest-Nations-OECD",
//         detail_desc1: "The world's wealthiest nations must urgently prepare for the impact of an imminent AI revolution that will change jobs, create new ones and make others disappear, the OECD said Tuesday.\n The rapid development of artificial intelligence -- with tools that can generate essays, create images and even pass medical exams -- has raised concerns that it could replace whole sectors of the workforce through automation.",
//         detail_desc2 : "In its 2023 Employment Outlook, the OECD said there was little evidence of significant negative effects on employment from AI so far. \n The OECD said it was 'vital' to gather better data on AI uptake and use in the workplace, 'including which jobs will change, be created or disappear, and how skills needs are shifting'. \n AI use is generally concentrated in large firms that are still experimenting with the new technology, and many appear reluctant to replace staff, said Stefano Scarpetta, OECD director for employment, labour and social affairs.",
//         detail_desc3: "'However, it is also clear that the potential for substitution remains significant, raising fears of decreasing wages and job losses,' he wrote in an editorial. \n AI has the potential to improve workplace safety by reducing 'tedious or dangerous tasks' and lead to higher wages for workers whose skills complement the technology, the OECD report said. \n But it could also 'leave workers with a higher-paced work environment' and reduce wages for those 'who find themselves squeezed into a diminished share of tasks due to automation'.",
//         detail_desc4 : " When taking AI into consideration, jobs at the highest risk of automation account for 27 percent of employment, according to the OECD.\n 'The use of AI also comes with serious ethical challenges around data protection and privacy, transparency and explainability, bias and discrimination, automatic decision making and accountability,' Scarpetta said.\n 'Urgent action is required to make sure AI is used responsibly and in a trustworthy way in the workplace,' he said. \n 'On the one hand, there is a need to enable workers and employers in reaping the benefits of AI while adapting to it, notably through training and social dialogue.'"
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/Noise_Air_Buds_Mini_2_main_1689074038143.jpg?downsize=950:*",
//         title: "Noise Air Buds Mini 2 With Up to 45 Hours Battery Life, IPX5 Rating Launched in India: Details",
//         description: "The latest affordable TWS headset from the Indian brand is priced priced under Rs. 1,000 and offers Bluetooth 5.3 connectivity and with fast charging support...",
//         slug: "Noise-Air-Buds-Mini-2-With-Up-to-45-Hours-Battery-Life",
//         linkUrl: "/technical/Noise-Air-Buds-Mini-2-With-Up-to-45-Hours-Battery-Life",
//         detail_desc1: "Noise Air Buds Mini 2 truly wireless stereo (TWS) earphones were launched in India on Tuesday. The latest affordable TWS headset from the Indian brand is priced priced under Rs. 1,000 and offers Bluetooth 5.3 connectivity and with fast charging support. They are claimed to offer up to 45 hours of battery life with the charging case. They are available in four colour shades namely Jet Black, Snow White, Space Blue, and Calm Beige. Noise says the earphones feature a 50ms low latency mode and have an IPX5 rating for splash resistance.",
//         detail_desc2 : "Noise Air Buds Mini 2 price in India is set at Rs. 999. They are currently listed on the GoNoise online store in Calm Beige, Jet Black, Snow White, and Space Blue colour options.",
//         detail_desc3 : "The Noise Air Buds Mini 2 earphones feature a stem-like design and are equipped with 13mm drivers. The earphones offer a 50ms low latency mode while gaming. These earphones have an IPX5 rating for sweat and splash resistance. The newly launched Noise Air Buds Mini 2 support Bluetooth 5.3 connectivity with a range of up to 10m. ",
//         detail_desc4 : "The TWS earphones from Noise support fast pairing using the company's Hyper Sync technology. The earphones are equipped with four microphones with environmental noise cancellation for voice calls, according to the company.Additionally, the earphones are claimed to offer up to 45 hours of total playtime on a single charge, including the case. They also come with the company's 'Instacharge' technology, that is said to provide up to 120 minutes of playback with a 10-minute charge. The charging case is equipped with an LED charging indicator and USB Type-C port. "
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/apple_logo_wwdc_facebook_1659699258047.jpg?downsize=950:*",
//         title: "Apple MacBook With a Foldable Display Could Launch in 2026: Report",
//         description: "Apple is reportedly gearing up to unveil a foldable MacBook in about two to three years. A report claims a vague timeline for the launch and sale of Apple's first foldable laptop in 2026....",
//         slug: "Apple-MacBook-With-a-Foldable-Display-Could-Launch-in-2026",
//         linkUrl: "/technical/Apple-MacBook-With-a-Foldable-Display-Could-Launch-in-2026",
//         detail_desc1: "Apple is reportedly gearing up to unveil a foldable MacBook in about two to three years. The displays for the upcoming laptop could be sourced from the display divisions of Samsung and LG. A report claims a vague timeline for the launch and sale of Apple's first foldable laptop in 2026.",
//         detail_desc2: "Companies including Asus and Lenovo are currently offering laptops with foldable displays. Meanwhile, Apple is expected to launch its foldable smartphone around 2025. The Cupertino-based tech giant is also said to be in talks to release a foldable iPad next year widening the company's product portfolio.",
//         detail_desc3 : "As per a report by BusinessKorea, Apple could launch a foldable laptop as soon as 2026. The report, citing industry sources, claims that Apple is in talks with suppliers like Samsung and LG to unveil new foldable MacBook models. The first MacBook model with a foldable display could be unveiled in 2025 and could go on sale later in 2026.",
//         detail_desc4 : " Apple's entry into the foldable display laptop market is expected to revive the sluggish display industry. As per the report, Korean companies are coordinating development and manufacturing plans for foldable OLED panels for laptops in line with the opening of the foldable panel market for IT devices. Samsung Display has reportedly announced a significant investment of KRW 4.1 trillion (roughly Rs. 25,539 crore) in the production of 8.6-generation OLED display panels from 2025 and 2026. LG Display, on the other hand, is reportedly investing in the production of mid-size OLED displays, including those intended for tablets and PCs."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/apple_logo_wwdc_facebook_1659699258047.jpg?downsize=950:*",
//         title: "Meta, OpenAI Sued by Comedian Over Alleged Copyright Infringement",
//         description: "Comedian Sarah Silverman and two authors have filed copyright infringement lawsuits against Meta Platforms and OpenAI for allegedly using their content without permission to train artificial intelligence language models....",
//         slug: "Meta-OpenAI-Sued-by-Comedian-Over-Alleged-Copyright-Infringement",
//         linkUrl: "/technical/Meta-OpenAI-Sued-by-Comedian-Over-Alleged-Copyright-Infringement",
//         detail_desc1: "Comedian Sarah Silverman and two authors have filed copyright infringement lawsuits against Meta Platforms and OpenAI for allegedly using their content without permission to train artificial intelligence language models. The proposed class action lawsuits filed by Silverman, Richard Kadrey and Christopher Golden in San Francisco federal court Friday allege Facebook parent company Meta and ChatGPT maker OpenAI used copyrighted material to train chat bots. Meta and OpenAI, a private company backed by Microsoft, did not immediately respond to requests for comment on Sunday. ",
//         detail_desc2: " The lawsuits underscore the legal risks developers of chat bots face when using troves of copyrighted material to create apps that deliver realistic responses to user prompts.",
//         detail_desc3 : " Silverman, Kadrey and Golden allege Meta and OpenAI used their books without authorization to develop their so-called large language models, which their makers pitch as powerful tools for automating tasks by replicating human conversation. In their lawsuit against Meta, the plaintiffs allege that leaked information about the company's artificial intelligence business shows their work was used without permission. The lawsuit against OpenAI alleges that summaries of the plaintiffs' work generated by ChatGPT indicate the bot was trained on their copyrighted content.",
//         detail_desc4 : "“The summaries get some details wrong” but still show that ChatGPT 'retains knowledge of particular works in the training dataset,' the lawsuit says. The lawsuits seek unspecified money damages on behalf of a nationwide class of copyright owners whose works were allegedly infringed."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/nothing_phone_2_oneplus_11r_flipkart_1689155205433.jpg?downsize=950:*",
//         title: "Nothing Phone 2 Launch: Price in India, Specifications and Features",
//         description: "The base 8GB + 128GB variant of the Nothing Phone 2 is priced at Rs. 44,999 in India. Meanwhile, the 12GB + 256GB and 12GB + 512GB variants of the phone are listed at Rs. 49,999 and Rs. 54,999, respectively.....",
//         slug: "Nothing-Phone-2-Launch-Price-in-India-Specifications-and-Features",
//         linkUrl: "/technical/Nothing-Phone-2-Launch-Price-in-India-Specifications-and-Features",
//         detail_desc1: "The base 8GB + 128GB variant of the Nothing Phone 2 is priced at Rs. 44,999 in India. Meanwhile, the 12GB + 256GB and 12GB + 512GB variants of the phone are listed at Rs. 49,999 and Rs. 54,999, respectively. The phone is offered in Dark Gray and White colour options. It will go on sale starting July 21 via Flipkart and select retail outlets.",
//         detail_desc2 : " Sporting a 6.7-inch full-HD+ (1,080x2,412 pixels) LTPO OLED display, the Nothing Phone 2 offers an adaptive refresh rate of up to 120Hz, a touch sampling rate of 240Hz, and a peak brightness of 1600 nits.",
//         detail_desc3 : "Nothing Phone 2 are powered by an octa-core 4nm Snapdragon 8+ Gen 1 5G SoC. The Phone 2 is paired with up to 12GB of RAM along with up to 512GB of inbuilt storage. These phones also run Android 13 out-of-the-box. The former has an OxygenOS 12.1 skin and the latter boots Nothing OS 2.0 on top of Android 13.",
//         detail_desc4 : "Coming to the cameras, the triple rear camera unit of the OnePlus 11R features a 50-megapixel Sony IMX890 primary sensor, an 8-megapixel sensor with an ultra-wide-angle lens, and a 2-megapixel sensor with a macro lens. With a similar primary sensor, the Nothing Phone 2 carries a dual rear camera system. Its secondary camera unit includes another 50-megapixel 1/2.76-inch Samsung JN1 sensor with an ultra-wide-angle lens with electronic image stabilisation (EIS). The Phone 2 come equipped with a 16-megapixel and a 32-megapixel front camera sensor, respectively."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/james_webb_telescope_nasa_esa_csa_stscl_1657872872203.jpg?downsize=950:*",
//         title: "NASA to Unveil New Webb Image on Telescope's First Anniversary",
//         description: "NASA is set Wednesday to unveil a new image from the James Webb Space Telescope a year after it first stunned the world with breathtaking views of the distant cosmos. Webb, the most powerful observatory in orbit, was launched in December 2021 from French Guiana ,..",
//         slug: "NASA-to-Unveil-New-Webb-Image-on-Telescope-First-Anniversary",
//         linkUrl: "/technical/NASA-to-Unveil-New-Webb-Image-on-Telescope-First-Anniversary",
//         detail_desc1: "NASA is set Wednesday to unveil a new image from the James Webb Space Telescope a year after it first stunned the world with breathtaking views of the distant cosmos. \n Webb, the most powerful observatory in orbit, was launched in December 2021 from French Guiana, on a million mile (1.6 million kilometre) voyage to a region called the second Lagrange point.",
//         detail_desc2: "Its first full colour picture was revealed by President Joe Biden on July 11, 2022: the clearest view yet of the early universe, going back 13 billion years. \n The next wave included 'mountains' and 'valleys' of a star-forming region, dubbed the Cosmic Cliffs, in a region of space called the Carina Nebula; and a grouping of five galaxies bound in a celestial dance, called Stephan's Quintet. \n NASA has remained coy about the nature of Wednesday's release, which will be made available on its website at 6:00am Eastern Time (3:30pm IST).",
//         detail_desc3: " Webb boasts a primary mirror measuring more than 21 feet (6.5 meters) that is made up of 18 hexagonal, gold-coated segments, as well as a five-layer sunshield the size of a tennis court. \n Unlike its predecessor Hubble, it operates primarily in the infrared spectrum, allowing it to look back nearer towards the start of time, and to better penetrate dust clouds where stars and planetary systems are being formed today.",
//         detail_desc4: " Key discoveries include some of the earliest galaxies formed a few hundred million years after the Big Bang, finding carbon dioxide in the atmosphere of a planet outside our solar system, and, in our own neck of the woods, stunning new views of the planet Jupiter. Webb has enough fuel for a 20-year-long mission, promising a new era of astronomy. \n It will soon be joined in its orbit by Europe's Euclid space telescope, which launched on July 1 on a mission to shed light on two of the universe's greatest mysteries: dark energy and dark matter."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/google_logo_reuters_1677241771386.jpg?downsize=950:*",
//         title: "Google Working on Android Feature That Auto Enables Airplane Mode During a Flight: Report",
//         description: "Google is reportedly working on a new Android feature that will help users automatically turn on Airplane mode during a flight. The technology is also said to offer improved functionalities for Airplane mode ...",
//         slug: "Google-Working-on-Android-Feature",
//         linkUrl: "/technical/Google-Working-on-Android-Feature",
//         detail_desc1: "Google is reportedly working on a new Android feature that will help users automatically turn on Airplane mode during a flight. The technology is also said to offer improved functionalities for Airplane mode. The company has filed a patent for its upcoming connected flight mode via World Intellectual Property Organization (WIPO). Currently, users are required to manually turn on the Airplane mode when on a flight. Also, existing Airplane mode feature shuts down all connections on most devices. ",
//         detail_desc2: "According to a report by ParkiFly in collaboration with David Kowalski (Twitter @xleaks7), Google has filed a patent for a connected flight mode. The feature is said to automatically switch the mobile device to a connected flight mode while onboarding a flight. It will detect pressure drop, acceleration/velocity, cabin sounds, ultrasonic signal, GPS signal, Cellular ID, and Wi-Fi signal to disable automatic backups, background application refresh, and updates, as per the patent filings. \n Moreover, Google will also access travel booking activity, check-in status, to automatically enable this feature. That's not all, the feature will also enable selective network connectivity options like in-flight Wi-Fi and Bluetooth.",
//         detail_desc3: "With this new technology, passengers will no longer need to manually activate flight mode while onboarding an aircraft. The feature will also switch devices back to normal mode by reactivating cellular connections and restoring standard settings after landing. The existing flight mode disable all wireless connections, including cellular networks, Wi-Fi, and Bluetooth on most devices when turned on. However, you can turn on Wi-Fi and Bluetooth after you've enabled Airplane mode. ",
//         detail_desc4: "Recently, Google was also spotted to be working on a new ‘Undo' button for its Android keyboard GBoard, enabling users to bring back deleted text. According to a report, Google will add a new Undo option to its GBoard. The feature is currently being tested and is available in the latest GBoard beta version."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/aws_amd_reuters_1686714863189.jpg?downsize=950:*",
//         title: "Amazon Touts Its Low Cost Cloud Computing in Generative AI Race",
//         description: "A key way that Amazon's cloud division aims to set itself apart from rivals perceived to have a leg up on artificial intelligence is by competing on price, an executive said on Tuesday ...",
//         slug: "Amazon-Touts-Its-Low-Cost-Cloud-Computing-in-Generative-AI-Race",
//         linkUrl: "/technical/Amazon-Touts-Its-Low-Cost-Cloud-Computing-in-Generative-AI-Race",
//         detail_desc1: "A key way that Amazon's cloud division aims to set itself apart from rivals perceived to have a leg up on artificial intelligence is by competing on price, an executive said on Tuesday. \n The AI models behind a viral chatbot like ChatGPT require immense computing power to train and operate, the kinds of costs Amazon Web Services (AWS) is good at lowering, said Dilip Kumar, vice president overseeing its applications group.",
//         detail_desc2: "A potential boost is that the company, like Google, has proprietary chips for AI. \n The world's largest cloud provider by revenue faces a tall challenge. Rivals Microsoft and Google have marketed higher profile, proprietary technology, capturing mindshare and some business in the sector's potentially lucrative AI contest. \n Amazon's competition has likewise focused on reducing costs and has marketed free previews of such technology, though final pricing remained unclear. \n On quality, Kumar did not answer how Amazon's own family of AI models known as Titan stacks up against its more famous counterparts such as the GPT series from Microsoft-backed OpenAI or Google's PaLM. ",
//         detail_desc3: " He instead pointed to other Amazon traits, such as 'our specific way of dealing with privacy, our specific way of dealing with accuracy,' at a time when concerns abound about what happens to confidential data given to AI and the technology's tendency to generate incorrect information. \n In addition, as the cloud industry's biggest player, 'more companies of all sizes have (their) data already in AWS,' he said, making it a reason to use its AI.",
//         detail_desc4: "Like Google, Amazon is marketing the technology of other prominent startups to give customers choice. \n The promise of AI aside, Amazon has faced uncertain economic conditions and slowing cloud revenue growth in the near term. Asked how Amazon's budget planning for 2024 is progressing, Kumar said of companies generally: 'We're in a cycle where the spending is tight.'",
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/crypto_pexels_rodnae_large_1679038278109.jpg?downsize=950:*",
//         title: "Crypto Market Watch: Bitcoin, Ether See Minor Losses, Small Gains Spike Up Uniswap, Monero Prices",
//         description: "Tides of changes in the market sentiment have been leaving cryptocurrencies highly volatile in recent days. Bitcoin on July 12, reflected a loss of 0.34 percent. With this, the value of Bitcoin is currently standing above the price point of $30,515 ...",
//         slug: "Crypto-Market-Watch-Bitcoin-Ether-See-Minor-Losses",
//         linkUrl: "/technical/Crypto-Market-Watch-Bitcoin-Ether-See-Minor-Losses",
//         detail_desc1: "Tides of changes in the market sentiment have been leaving cryptocurrencies highly volatile in recent days. Bitcoin on Wednesday, July 12, reflected a loss of 0.34 percent. With this, the value of Bitcoin is currently standing above the price point of $30,515 (roughly Rs. 25.13 lakh). Despite Bitcoin's slight slippage on Wednesday, its value did grow by $16 (roughly Rs. 1,317) over the last 24 hours. Although there's a slight decline in buying strength, buyers continue to maintain an advantageous position over sellers in the market, industry experts have pointed out. \n Ether galloped behind Bitcoin, in a rather conventional movement, and moved to the loss-making side of the crypto price chart. With a loss of 0.21 percent, ETH is trading at the price point of $1,880 (roughly Rs. 1.54 lakh). ",
//         detail_desc2: "'Investors awaited the release of June inflation data and observed the weakening U.S. dollar. The price of BTC is currently holding steady, finding support at the crucial $30,000 (roughly Rs. 24.6 lakh) zone. On the other hand, Ethereum has shown relative stability in recent days, experiencing minor gains,' Edul Patel, CEO of Mudrex crypto investment firm told Gadgets 360. \n The valuation of the overall crypto market remained unchanged in the last 24 hours and stayed at the mark of $1.19 trillion (roughly Rs. 98,00,542 crore), as per CoinMarketCap.",
//         detail_desc3: "'The crypto fear and greed index has jumped seven points, moving further into the greed zone with a score of 64/100. This could be attributed to the continued investor optimism banking on the upward revision of year-end BTC targets by Standard Chartered,' Shubham Hudda, Senior Manager, CoinSwitch Markets Desk told Gadgets 360. \n While mainstream cryptocurrencies like BTC and ETH saw losses on Wednesday, underdogs like Uniswap, Monero, Cronos, and Aave fetched small gains.",
//         detail_desc4: "Elrond, EOS Coin, Iota, and Dash also recorded small profits. \n 'The CPI and PPI reports are significant as they can potentially impact the Federal Reserve's decision on interest rates. After pausing rate increases last month, the Fed's shift towards a more hawkish stance will depend on the inflationary pressures in the economy. Whenever the interest rates rise, people tend to park money in safe haven and thereby spend less on assets like crypto, equity and vice-versa,' the CoinDCX research team told Gadgets 360."
//     },
//     {
//         imageUrl: "https://i.gadgets360cdn.com/large/gaming_image_hp_1643981884462.jpg?downsize=950:*",
//         title: "Online Gaming Companies Say 28 Percent GST Will Limit Their Business, Lead to Lakhs of Job Losses",
//         description: "Online gaming companies on Tuesday said that levying of 28 percent GST will limit their ability to invest in new games, impact cash flows as well as business expansion ...",
//         slug: "Online-Gaming-Companies-Say-28-Percent-GST",
//         linkUrl: "/technical//Online-Gaming-Companies-Say-28-Percent-GST",
//         detail_desc1: "Online gaming companies on Tuesday said that levying of 28 percent GST will limit their ability to invest in new games, impact cash flows as well as business expansion. The GST Council has agreed to impose a 28 percent tax on online gaming, casinos and horse racing. The tax would be levied on the full face value. \n The All India Gaming Federation (AIGF), which represents companies like Nazara, GamesKraft, Zupee and Winzo, said the decision by the council is unconstitutional, irrational, and egregious.",
//         detail_desc2: "'The decision ignores over 60 years of settled legal jurisprudence and lumps online skill gaming with gambling activities. This decision will wipe out the entire Indian gaming industry and lead to lakhs of job losses and the only people benefitting from this will be anti-national illegal offshore platforms,' AIGF CEO Roland Landers said. \n Online gaming players have repeatedly urged the government and the GST Council to levy 18 percent GST on their segment instead of 28 percent that was recommended by Group of Ministers (GoM). \n 'The implementation of a 28 percent tax rate will bring significant challenges to the gaming industry. This higher tax burden will impact companies' cash flows, limiting their ability to invest in innovation, research, and business expansion,' IndiaPlays COO Aaditya Shah said. \n He also said that skill-based games and apps engaged in betting or casinos should not be treated in the same manner. \n E-Gaming Federation (EGF), whose members include Games 24x7 and Junglee Games, said that a tax burden where taxes exceed revenues will not only make the online gaming industry unviable but also boost black market operators at the expense of legitimate tax-paying players",
//         detail_desc3: "'It is in addition to the loss of employment opportunities and the huge impact on marquee investors who are heavily invested in this sunrise sector,' EGF Secretary Kumar Shukla said. \n EGF claimed that online gaming is different from gambling, and the Supreme Court and various High Court decisions have reaffirmed the status of online skill-based games as legitimate business activity protected as a fundamental right under the Indian constitution. ",
//         detail_desc4 : "'While the industry was quite optimistic with the new developments including amendments to the IT rules and implementation of TDS on net winnings, all this will be moot if the industry is not supported by a progressive GST regime,' Shukla said. \n 'RIP - Real money gaming industry in India. If the govt is thinking people will put in Rs. 100 to play on Rs 72 pot entry (28 percent gross GST); and if they win Rs. 54 (after platform fees)- they will pay 30 percent TDS on that — for which they will get free swimming pool in their living room come the first monsoon — not happening !' Grover tweeted. \n He said it is time for startup founders to enter politics and be represented."
//     },
// ])


// Blog.create([
//     {
//         title: "Django Framework",
//         description: "What is Django",
//         slug: "/blogs/django",
//         detail_desc: "hdjfdhksudyksufnshkusynfkeku veyrewruowuho"

//     }
// ])





app.listen(process.env.Port || 5556, ()=>{
    console.log("Server Started")
})


module.exports = app;