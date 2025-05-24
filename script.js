document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- page shell -----------------  */
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.appendChild(wrapper);

  /* -------------- header & nav ----------------- */
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = "sumit";

  const nav = document.createElement("nav");
  const menuHideShow = document.createElement("div");
  menuHideShow.className = "menu menu-go";
  const hemburgerImg = document.createElement("img");
  hemburgerImg.className = "menu-hide-show";
  hemburgerImg.src = "./images/burger-menu.svg";
  hemburgerImg.alt = "";
  const corssImg = document.createElement("img");
  corssImg.className = "cross-menu-hide-show";
  corssImg.src = "./images/cross.svg";
  corssImg.alt = "";
  menuHideShow.appendChild(hemburgerImg);
  menuHideShow.appendChild(corssImg);
  const ul = document.createElement("ul");
  const headerLink = ["Home", "Project", "Contact", "About", "Skill"];
  headerLink.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link;
    a.href = "#";
    li.appendChild(a);
    ul.appendChild(li);
    nav.appendChild(ul);
  });
  header.appendChild(h1);
  header.appendChild(nav);
  header.appendChild(menuHideShow);

  // for toggle header and menu
  corssImg.style.display = "none";
  hemburgerImg.addEventListener("click", () => {
    nav.style.display = "block";
    h1.style.display = "block";
    hemburgerImg.style.display = "none";
    corssImg.style.display = "block";
  });

  corssImg.addEventListener("click", (e) => {
    nav.style.display = "none";
    h1.style.display = "none";
    corssImg.style.display = "none";
    hemburgerImg.style.display = "block";
  });

  wrapper.appendChild(header);

  const main = document.createElement("main");
  const bentoGrid = document.createElement("div");
  bentoGrid.className = "bento-grid";
  main.appendChild(bentoGrid);

  const projects = [
    {
      title: "stats preview card",
      description:
        "This Stats Preview Card design presents business intelligence in a clean, modern layout, ideal for SaaS platforms, dashboards, and marketing landing pages. It effectively blends visual storytelling with informative statistics to showcase data that drives decisions.",
      descriptionMiddle: "Features",
      descriptionFeatures: [
        "Two-Column Layout: Left side contains the text and data; the right side uses a color-filtered image to humanize the analytics story, promoting trust and engagement.",
        "Bold, Modern Typography: Attention-grabbing headline with keyword emphasis (e.g., insights) highlighted in purple to guide focus and brand consistency.",
        "Engaging Copy: Clear, concise value proposition: helping businesses grow using data insights.",
        {
          featuresTitle: "Business Metrics at a Glance:",
          matrix: ["10k+ Companies", "314 Templates", "12M+ Queries"],
          note: "— each presented with distinct typography to stand out and instill confidence.",
        },
        " Stylized Image Overlay: The use of a purple duotone filter over the right-side image keeps visual consistency and adds a modern aesthetic without distracting from the data.",
        "Dark Theme Aesthetic: Clean dark background provides strong contrast for white and purple text, enhancing readability and creating a tech-forward feel.",
        "Rounded Corners & Padding: Gentle UI details that make the card visually appealing and well-contained on a page.",
      ],
      liveLink: "https://stats-preview-card-designs.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/stats-preview-card",
      projectImg: "./images/desktop-design-stats.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "testinomails grid card",
      description:
        "This testimonials grid layout effectively captures real voices and experiences to build authenticity, trust, and social proof. Perfect for educational platforms, SaaS products, or service-based businesses, it combines engaging content with a clean visual hierarchy to increase user confidence and drive conversions.",
      descriptionMiddle: "Features",
      descriptionFeatures: [
        "Dynamic Grid Layout: A varied grid with different card sizes and orientations adds visual interest and flow, breaking monotony and emphasizing standout testimonials.",
        "User-Centric Content Structure:",
        {
          featuresTitle: "Each card highlights:",
          matrix: [
            "Reviewer’s name and photo",
            "Verified badge for credibility",
            "Bolded quote summary",
            "Supporting detailed feedback in smaller text",
          ],
        },
        "Visual Hierarchy: Strategic use of font weights and sizes helps users skim through headlines quickly while deeper readers can explore full stories with ease.",
        "Color-coded Backgrounds: Testimonial cards use contrasting background colors — dark, light, and accent shades (e.g. purple) — to distinguish different voices and keep the layout visually engaging.",
        "Rounded Corners and Shadowing: Soft edges and subtle shadows create a modern, friendly look while separating each testimonial as a distinct unit.",
        "Responsive & Accessible Typography: Clean sans-serif fonts ensure legibility, while contrasting text colors enhance readability across devices.",
        "Authenticity & Social Proof: Real images and names lend credibility, while diverse testimonial content shows the range of success stories and use cases.",
      ],
      liveLink: "https://testimonials-grid-design.netlify.app/",
      githubLink:
        "https://github.com/thesumitchaudhary/testimonials-grid-design",
      projectImg: "./images/desktop-design-testimoials.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "social proof card",
      description:
        "This section leverages the power of authentic customer feedback and expert ratings to build immediate trust and influence purchase decisions. With a clean, structured layout and strong user-centric focus, it effectively communicates satisfaction from over 10,000+ verified buyers and industry platforms. Ideal for eCommerce, SaaS, or product landing pages, this design establishes credibility at a glance.",
      descriptionMiddle: "Features",
      descriptionFeatures: [
        'Bold Headline with Impact: A large, attention-grabbing headline ("10,000+ of our users love our products.") communicates a strong, trust-building metric right away.',
        "Customer-Centric Subtext: Supporting text emphasizes customer service quality and user satisfaction, reinforcing the brand’s commitment to excellence.",
        "Star Ratings from Trusted Platforms: Clearly displays 5-star ratings from popular review platforms (e.g., “Reviews,” “Report Guru,” “BestTech”), giving social validation across multiple sources.",
        "Testimonial Cards with User Identity:",
        {
          featuresTitle: "Each testimonial card includes:",
          matrix: [
            "User photo and name (adds authenticity)",
            ' "Verified Buyer" tag (adds credibility)',
            "Compact and positive reviews that highlight service quality, reliability, and satisfaction",
          ],
        },

        "Elegant Color Scheme: Uses a modern, high-contrast combination of deep purple for testimonials and soft lavender/white for the background, drawing the eye while maintaining readability.",
        "Rounded Cards with Shadow Effects: Adds a sleek, professional touch while separating each review into its own spotlighted area.",
        "Responsive & Accessible Layout: Fully adaptable to screen sizes and optimized for both desktop and mobile viewing.",
      ],
      liveLink: "https://social-prooff-section.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/social-proof-section",
      projectImg: "./images/desktop-design-social.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "order summary card",
      description:
        "This sleek and modern order summary card is designed to streamline the checkout experience. It clearly displays the user’s selected subscription plan with a friendly illustration, minimal layout, and intuitive call-to-action buttons. Whether for a SaaS, streaming, or membership product, this component is optimized to guide users toward completing their purchase confidently.",
      descriptionMiddle: "Features",
      descriptionFeatures: [
        "Engaging Illustration Header: A vibrant, illustrated banner featuring a joyful character and music-themed icons sets a playful tone and enhances user engagement.",
        "Clear, Bold Heading: The “Order Summary” title is prominent and informative, immediately orienting the user to the content below.",
        {
          featuresTitle: "Concise Plan Details:",
          matrix: [
            "Plan name: “Annual Plan”",
            "Price: $59.99/year",
            "Option to change the plan, offering flexibility",
          ],
        },
        "Minimalist Typography and Layout: Prioritizes readability with sufficient white space, a legible sans-serif font, and well-structured content.",
        {
          featuresTitle: "Primary CTA Button – “Proceed to Payment”:",
          matrix: [
            "Bold, full-width, with strong visual hierarchy",
            "Designed to attract user action and promote conversion",
          ],
        },
        {
          featuresTitle: "Secondary Action – “Cancel Order”:",
          matrix: [
            "Subtle text-based button offering a non-invasive exit path",
            "Promotes user control and trust",
          ],
        },
        {
          featuresTitle: "Consistent Visual Style:",
          matrix: [
            "Rounded corners and shadows for soft depth",
            "Cool blue and white tones for a calming, trustworthy appearance",
          ],
        },
        "Responsive & Mobile-Friendly: Perfect for mobile checkout flows, adapting to smaller screens without sacrificing usability or design integrity.",
      ],
      liveLink: "https://order-summary-designed.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/order-summary-design",
      projectImg: "./images/desktop-design-order.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "huddle landing page",
      description:
        "This clean and modern landing page design presents a compelling solution for building online communities. With a strong visual hierarchy and user-friendly layout, it communicates key benefits like real-time discussions, seamless user integration, and scalable community building. Ideal for SaaS products or social platforms, it features:",
      descriptionFeatures: [
        "A hero section with a strong headline and CTA",
        "Platform previews with mobile responsiveness",
        "Real user metrics (e.g., 1.4k+ communities, 2.7m+ messages)",
        "Illustrated feature highlights to boost engagement",
        "A persuasive call-to-action that repeats effectively",
        "Footer with contact info, newsletter form, and social links",
      ],
      descriptionLast:
        "Designed with a sleek aesthetic, soft color palette, and custom illustrations, this layout enhances credibility while encouraging user interaction.",
      liveLink: "https://huddle-landing-pages-responsive.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/huddle-landing-page",
      projectImg: "./images/desktop-design-huddle.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "bento grid card",
      description:
        "This modern grid-style dashboard design showcases an intuitive and vibrant interface for managing social media content using AI. It uses a bento-grid layout with eye-catching colors (lavender, purple, yellow, and cream) to present key features in an engaging way.",
      descriptionMiddle: "Each card highlights a specific benefit or feature:",
      descriptionFeatures: [
        "AI Content Creation: Allows users to generate content ideas and write posts using artificial intelligence.",
        "Smart Scheduling: Users can plan and publish posts at optimal times based on audience activity.",
        "Multi-Platform Management: Simplifies managing several social accounts from a single platform.",
        "Performance Metrics: Visual growth statistics show follower increase and post effectiveness.",
        "Automated Consistency: Weekly schedules and reminders ensure regular content flow.",
      ],
      descriptionLast:
        "With bold typography, minimal icons, and focused messaging, this layout delivers an engaging user experience — perfect for startups or SaaS tools aiming to boost productivity, growth, and engagement across social platforms.",
      liveLink: "https://binto-grids.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/betno-grid",
      projectImg: "./images/desktop-design-bento.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "clipboard landing page",
      description:
        "This landing page design introduces Clipboard, a seamless cloud-based clipboard manager for macOS and iOS. The layout is clean, minimal, and user-centric, with smooth visual hierarchy and soft gradients that emphasize trust and usability.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "Cross-Device Syncing: Instantly access copied snippets across all devices via iCloud integration.",
        "Quick Search & History: Efficiently retrieve copied content with categorized search and full snippet history.",
        "Workflow Optimization: Offers features like blacklisting sensitive sources, plain text formatting, and snippet previews.",
        "Responsive Device Mockups: Realistic device visuals convey compatibility and platform versatility (desktop, tablet, mobile).",
        "Call-to-Action Buttons: Prominent CTAs encourage users to download the app on iOS or macOS with bright, contrasting colors.",
      ],
      descriptionLast:
        "This landing page is ideal for showcasing SaaS products or tools that focus on productivity, efficiency, and user experience.",
      liveLink: "https://clipboard-landing-pagge.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/clipboard-landing-page",
      projectImg: "./images/desktop-design-clipboard.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "result summary card",
      description:
        "This beautifully designed results summary card presents a user's test performance in a modern, user-friendly interface. The layout is divided into two distinct sections:",
      descriptionMiddle: "Key Feature",
      descriptionLeftPanel: "Left Panel (Score Highlight):",
      descriptionFeatures: [
        "Displays the overall score (76/100) with a vibrant gradient background.",
        'Includes a qualitative result ("Great") and a percentile statement for user motivation.',
      ],
      descriptionrightPanel: "Right Panel (Detailed Breakdown):",
      descriptionFeaturess: [
        "Summarizes performance across four key areas: Reaction, Memory, Verbal, and Visual.",
        "Each category is color-coded with an icon, score, and a soft background for readability.",
        'A bold "Continue" button prompts further action.',
      ],
      descriptionLast:
        "The design uses soft shadows, rounded corners, and subtle color contrasts to enhance clarity and elegance. Ideal for dashboards, ed-tech platforms, or productivity apps with performance tracking features.",
      liveLink: "https://results-summary-simple-website.netlify.app/",
      githubLink:
        "https://github.com/thesumitchaudhary/results-summary-component-main",
      projectImg: "./images/desktop-design-results.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "task manager app",
      description:
        "notNotion is a simple and efficient task manager web app that lets you manage and search your pending tasks with ease. With a clean and responsive UI, users can quickly add, search, and delete tasks in just a few clicks.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "🔍 Search tasks instantly using the live filter.",
        "➕ Add new tasks seamlessly with the input field.",
        "🗑️ Delete individual tasks with a single click.",
        "📋 View pending tasks count dynamically.",
        "🧹 Clear all tasks at once with a dedicated button.",
      ],
      descriptionLast:
        "Built with HTML, CSS, and JavaScript, this app is lightweight and perfect for practicing DOM manipulation and local state management.",
      liveLink: "https://taskmanager-javascripts.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/taskmanager-js",
      projectImg: "./images/desktop-design-taskmanager.png",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "quiz app",
      description:
        "notNotion - JavaScript Quiz App is a simple, interactive web application designed to test and strengthen your foundational JavaScript knowledge. Users can answer multiple-choice questions and submit their answers to practice and learn JavaScript basics.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "📋 Five multiple-choice questions on JavaScript fundamentals.",
        "🧠 Instant learning through common syntax and concept checks.",
        "✅ Radio buttons allow users to select one answer per question.",
        "🎯 Submit button to evaluate responses (functionality to be implemented in JavaScript).",
      ],
      descriptionLast:
        "This quiz interface is built with HTML and CSS, and it is ready for JavaScript logic integration for answer validation, scoring, and feedback. A perfect starter project for anyone learning DOM manipulation and form handling.",
      liveLink: "https://quiz-question-js.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/quiz-js",
      projectImg: "./images/desktop-design-quiz.png",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "budget tracker app",
      description:
        "notNotion - Budget Tracker App is a clean, user-friendly web application that helps users manage their personal finances by tracking income and expenses in real-time.",
      descriptionMiddle: "Features:",
      descriptionFeatures: [
        "💸 Add Transactions: Users can enter a source and amount to log income or expenses.",
        "📊 Statistics Panel: Displays current balance, total income, and total expenses with visually distinct colors.",
        "📁 Transaction History: Lists all income and expense entries with timestamps and delete options.",
        '🧾 Categorization: Automatically sorts entries into "Income" or "Expense" sections based on the amount.',
        "🧹 Delete Functionality: Users can remove individual transactions from history.",
      ],
      descriptionLast:
        "Built using HTML and CSS, this app is ready for JavaScript integration to handle dynamic functionalities such as adding, calculating, storing, and deleting transactions.",
      liveLink: "https://budget-tracker-in-js.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/BudgetTracker-Js",
      projectImg: "./images/desktop-design-budget.png",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "blog preview card",
      description:
        "This Blog Preview Card is a clean and visually striking UI component designed to showcase article summaries in a compact, mobile-friendly format. Inspired by modern design trends, the card uses strong contrast, bold typography, and a minimal layout to create an engaging user experience.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "🖼️ Thumbnail Image: Eye-catching abstract art relevant to the article topic.",
        "🏷️ Category Label: Clearly indicates the content category (e.g., Learning).",
        "🕒 Publication Info: Displays the publish date for user context.",
        "📝 Article Title & Description: Highlights the article’s subject with a bold heading and supporting summary text.",
        "👤 Author Info: Includes the author’s name and profile image for credibility.",
      ],
      descriptionLast:
        "This layout is ideal for blog listings, educational sites, or news feeds. Built with HTML and CSS, it is perfect for enhancement with JavaScript or CMS integration for dynamic content.",
      liveLink: "https://fm-blog-preview-card-sol.netlify.app/",
      githubLink:
        "https://github.com/thesumitchaudhary/fm-block-preview-card-main",
      projectImg: "./images/desktop-design-preview.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "social link card",
      description:
        "This Social Link Card is a sleek, minimal web component designed to display a user's online presence in one centralized place. Built with a dark theme, the design ensures a modern and professional look suitable for portfolios, link-in-bio pages, or developer profiles.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "🖼️ Profile Image: Circular user avatar prominently displayed at the top.",
        "🧑‍💼 User Info: Includes the full name, location, and a short bio/quote.",
        "🔗 Link Buttons: Clean, consistent buttons for key platforms—GitHub, Frontend Mentor, LinkedIn, Twitter, and Instagram.",
        "🌙 Dark Theme: High contrast with white text on dark background for accessibility and aesthetic appeal.",
        "📱 Responsive Design: Perfectly fits mobile screens for social sharing.",
      ],
      descriptionLast:
        "This component is ideal for developers, content creators, and professionals who want to share all their key links through a single compact interface.",
      liveLink: "https://fm-social-link-profile-sol.netlify.app/",
      githubLink:
        "https://github.com/thesumitchaudhary/fm-Social-links-profile",
      projectImg: "./images/destkop-design-socialLink.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
    {
      title: "recipe page",
      description:
        "This Recipe Card Web Design presents a visually appealing and user-friendly layout for showcasing culinary content. Focused on readability and clarity, the card is ideal for food bloggers, cooking apps, or digital recipe books.",
      descriptionMiddle: "Key Features:",
      descriptionFeatures: [
        "🍳 Header Image: A mouth-watering photo of the finished dish draws users in instantly.",
        '📝 Recipe Title & Description: Clearly communicates the dish (e.g., "Simple Omelette Recipe") and provides a concise overview.',
        "⏱️ Preparation Time Section: Neatly highlights total, preparation, and cooking times in a pastel-colored box.",
        "🥚 Ingredients List: Organized in a bullet format for quick scanning.",
        "🍽️ Instructions: Step-by-step method with bolded key actions and numbered format for easy following.",
        "🧠 Nutrition Facts Table: Clean table format showing essential nutritional information (calories, carbs, protein, fat).",
        "🎨 Design Aesthetic: Soft beige background and rounded corners create a calm, modern, and elegant visual tone.",
      ],
      descriptionLast:
        "Perfect for creating a smooth cooking experience, this design balances aesthetic appeal with functional clarity.",
      liveLink: "https://fm-recipe-page-sol.netlify.app/",
      githubLink: "https://github.com/thesumitchaudhary/fm-recipe-page",
      projectImg: "./images/desktop-design-recipe.jpg",
      shareImg: "./images/share.svg",
      githubImg: "./images/github.svg",
    },
  ];

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = project.title;
    const descriptionBox = document.createElement("div");
    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = project.description;
    const descriptionFeatures = document.createElement("h3");
    descriptionFeatures.textContent = project.descriptionMiddle;
    descriptionFeatures.className = "description-features-title";
    descriptionBox.appendChild(description);
    descriptionBox.appendChild(descriptionFeatures);
    let descriptionUl = null;
    if (
      project.descriptionFeatures &&
      Array.isArray(project.descriptionFeatures)
    ) {
      descriptionUl = document.createElement("ul");
      project.descriptionFeatures.forEach((feature) => {
        if (typeof feature === "string") {
          const heading = document.createElement("h5");
          heading.textContent = feature.split(":")[0]; // Extract heading
          const para = document.createElement("p");
          para.textContent = feature.split(":").slice(1).join(":").trim(); // Rest as paragraph
          descriptionUl.appendChild(heading);
          descriptionUl.appendChild(para);
        } else if (typeof feature === "object" && feature !== null) {
          const heading = document.createElement("h4");
          heading.textContent = feature.featuresTitle;
          descriptionUl.appendChild(heading);

          const matrixList = document.createElement("ul");
          feature.matrix.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.className = "matrix-list-item";
            matrixList.appendChild(li);
          });
          descriptionUl.appendChild(matrixList);

          if (feature.note) {
            const notePara = document.createElement("p");
            notePara.textContent = feature.note;
            notePara.className = "feature-note";
            descriptionUl.appendChild(notePara);
          }
        }
      });
      descriptionBox.appendChild(descriptionUl);
      descriptionUl.style.display = "none";
      // descriptionUl.appendChild(descriptionFeatures);
    }

    const informationViewButton = document.createElement("button");
    informationViewButton.textContent = "View More";
    informationViewButton.className = "view-more-button";
    const projectImgBox = document.createElement("div");
    const imageProject = document.createElement("img");
    imageProject.src = project.projectImg;
    imageProject.className = "card-web-image";
    projectImgBox.appendChild(imageProject);
    card.appendChild(projectImgBox);
    card.appendChild(cardTitle);
    card.appendChild(descriptionBox);
    card.appendChild(informationViewButton);

    // add event listner for achiveing more information for the user

    informationViewButton.addEventListener("click", () => {
      if (descriptionUl) {
        const isHidden = descriptionUl.style.display === "none";
        descriptionUl.style.display = isHidden ? "block" : "none";
        informationViewButton.textContent = isHidden
          ? hideDetails
          : "View More";
      }
    });

    const linkBox = document.createElement("div");
    linkBox.className = "first-card-link-box";

    const liveLink = document.createElement("a");
    liveLink.href = project.liveLink;
    liveLink.target = "_blank";
    const shareImg = document.createElement("img");
    shareImg.src = project.shareImg;
    shareImg.height = 20;
    shareImg.alt = "";
    liveLink.appendChild(shareImg);
    linkBox.appendChild(liveLink);

    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.target = "_blank";
    const githubImg = document.createElement("img");
    githubImg.src = project.githubImg;
    githubImg.height = 20;

    githubLink.appendChild(githubImg);
    linkBox.appendChild(githubLink);

    card.appendChild(linkBox);
    bentoGrid.appendChild(card);
  });

  wrapper.appendChild(main);
});
