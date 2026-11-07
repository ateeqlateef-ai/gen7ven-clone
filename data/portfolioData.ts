export interface AppPortfolioItem {
  id: string;
  name: string;
  type: string;
  playStoreUrl: string;
  websiteUrl?: string;
  role?: string;
  roleVerified?: boolean;
  technology: string;
  whatIsKnown: string;
  whatIDid?: string;
  features?: string[];
  isCaseStudy: boolean;
  isTwoApps?: boolean;
  partnerPlayStoreUrl?: string;
  placeholders?: string[];
}

export interface WebsitePortfolioItem {
  name: string;
  url: string;
}

export interface WebsiteCategory {
  category: string;
  items: WebsitePortfolioItem[];
}

export const CASE_STUDY_APPS: AppPortfolioItem[] = [
  {
    id: 'tejarah-world',
    name: 'Tejarah World Marketplace',
    type: 'E-commerce marketplace app (Android)',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=zarin.tejarahworld.com.user',
    websiteUrl: 'https://tejarahworld.com',
    role: 'Lead Developer',
    roleVerified: true,
    technology: 'Flutter (Android)',
    whatIsKnown: 'A marketplace application enabling buyers to browse products, place orders, and make payments across multiple independent sellers in one place.',
    whatIDid: 'Lead developer on the Android mobile application built with Flutter.',
    isCaseStudy: true,
    placeholders: [
      '[PLACEHOLDER: 3–5 phone screenshots of the live app]',
      '[PLACEHOLDER: App Store link if an iOS version exists]',
      '[PLACEHOLDER: Any real rating/downloads/client quote — only if verified]'
    ]
  },
  {
    id: 'ranchers-cafe',
    name: 'Ranchers Cafe',
    type: 'Food ordering app and website',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ranchers.customer',
    websiteUrl: 'https://rancherscafe.com',
    role: 'Client project (developer)',
    roleVerified: false,
    technology: 'Flutter',
    whatIsKnown: 'Food ordering and restaurant customer application for digital menu browsing, meal customization, online checkout, and delivery dispatch.',
    whatIDid: 'Client project I worked on.',
    isCaseStudy: true,
    placeholders: [
      '[PLACEHOLDER: My actual role on this project (app, website, both, or part of a team)]',
      '[PLACEHOLDER: 3–5 app screenshots; 2–3 website screenshots]',
      '[PLACEHOLDER: App Store link if it exists]'
    ]
  },
  {
    id: 'khidmah360',
    name: 'Khidmah360',
    type: 'On-demand home services app — Two Android apps, one system',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=khidmah360user.zarin.solutions',
    partnerPlayStoreUrl: 'https://play.google.com/store/apps/details?id=khidmah360partner.zarin.solutions',
    role: 'Client project (developer)',
    roleVerified: false,
    technology: 'Flutter',
    whatIsKnown: 'Dual-application on-demand home services network featuring a dedicated Customer App for service booking and a Partner App for technicians/providers.',
    whatIDid: 'Client project I worked on across the customer and partner systems.',
    isCaseStudy: true,
    isTwoApps: true,
    placeholders: [
      '[PLACEHOLDER: Website URL if one exists]',
      '[PLACEHOLDER: My actual role (customer app, partner app, both, or part of a team); features built in each app]',
      '[PLACEHOLDER: 3–5 screenshots per app]',
      '[PLACEHOLDER: App Store links if they exist]'
    ]
  }
];

export const REMAINING_APPS: { name: string; type: string; playStoreUrl: string; websiteUrl?: string }[] = [
  {
    name: 'Friday Charm',
    type: 'Perfume e-commerce app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.fridaycharm',
    websiteUrl: 'https://www.fridaycharm.com'
  },
  {
    name: 'Rehmania Herbs',
    type: 'Herbal e-commerce app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=rehmaniaherbs.zarin.solutions'
  },
  {
    name: 'Sargodha Autos',
    type: 'Automotive parts & accessories app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=sgdautos.zarin.solutions'
  },
  {
    name: 'Tandoori Restaurant Pakistan',
    type: 'Restaurant ordering app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blink.tandoori'
  },
  {
    name: 'David Kebab',
    type: 'Food ordering app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=davidkebab.zarin.solutions'
  },
  {
    name: 'Zarin POS – Complete Offline POS',
    type: 'Business & offline retail POS app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=pos.zarin.solutions'
  },
  {
    name: "What's Ai Chat – AI CRM for WhatsApp",
    type: 'AI-powered WhatsApp CRM & tooling app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=whatsaichat.com'
  },
  {
    name: 'Hero Deliver Express',
    type: 'Delivery & logistics app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=herodeliver.zarin.solutions'
  }
];

export const WEBSITE_PORTFOLIO_CATEGORIES: WebsiteCategory[] = [
  {
    category: 'Fashion & Clothing',
    items: [
      { name: 'Polka Dots', url: 'https://www.polkadots.pk' },
      { name: 'Original.pk', url: 'https://original.pk' },
      { name: 'Heer Rang', url: 'https://heerrang.pk' },
      { name: 'Yes Online', url: 'https://yesonline.pk' },
      { name: 'Hang Ten Pakistan', url: 'https://hangten.com.pk' },
      { name: 'Zaaviay', url: 'https://zaaviay.pk' },
      { name: 'Jade Online', url: 'https://www.jadeonline.pk' }
    ]
  },
  {
    category: 'Beauty & Cosmetics',
    items: [
      { name: 'Skinbase', url: 'http://skinbase.pk' },
      { name: 'Charisma', url: 'https://www.charisma.com.pk' },
      { name: 'Care Cosmetics', url: 'https://carecosmetics.com.pk' },
      { name: 'The Beauty World', url: 'https://thebeautyworld.com.pk' },
      { name: 'Malak', url: 'https://malak.com.pk' },
      { name: 'Gabrini', url: 'https://gabrini.pk' }
    ]
  },
  {
    category: 'Supplements & Wellness',
    items: [
      { name: 'Fitzone', url: 'https://fitzone.pk' },
      { name: 'ESN', url: 'https://int.esn.com' },
      { name: 'GNC', url: 'https://www.gnc.com' },
      { name: 'Dymatize', url: 'https://dymatize.com' },
      { name: 'Healthorry', url: 'https://healthorry.com' },
      { name: 'NB Care', url: 'https://nbcare.store' }
    ]
  },
  {
    category: 'Perfumes & Fragrances',
    items: [
      { name: 'Lattafa Pakistan', url: 'http://lattafapakistan.com' },
      { name: 'Swiss Arabian', url: 'https://swissarabian.com' },
      { name: 'Friday Charm', url: 'https://www.fridaycharm.com' },
      { name: 'Perfume Dubai', url: 'https://perfumedubai.com' },
      { name: 'Al Jazeera Perfumes', url: 'https://uae.aljazeeraperfumes.com/en' },
      { name: 'Fragrant Counter', url: 'https://www.fragrantcounter.shop' },
      { name: 'Veil & Vapor', url: 'https://veilandvapor.com' }
    ]
  },
  {
    category: 'General E-Commerce',
    items: [
      { name: 'P448', url: 'https://p448.com' },
      { name: 'Power Sheds', url: 'https://www.powersheds.com' },
      { name: 'Well & Well', url: 'https://www.wellandwell.fr' },
      { name: 'Fleishigs', url: 'https://fleishigs.com' },
      { name: 'Paper & Tea', url: 'https://www.paperandtea.com' },
      { name: 'Patiala Diamonds', url: 'https://www.patialadiamonds.com' },
      { name: 'Jewelex Jewelry', url: 'https://jewelexjewelry.com' },
      { name: 'Ocio', url: 'https://ocio.pk' },
      { name: 'Tejarah World', url: 'https://tejarahworld.com' },
      { name: 'Sargodha Autos', url: 'https://sargodhaautos.com' },
      { name: 'MR DIY', url: 'https://mrdiy.pk' },
      { name: 'Bacha Store', url: 'https://bachastore.com' },
      { name: 'Market Mix Mart', url: 'https://marketmixmart.com' },
      { name: 'AD Collection Worldwide', url: 'https://adcollectionworldwide.com' },
      { name: 'Premium Bag', url: 'https://www.premiumbag.store' },
      { name: 'Coffee Day Shop', url: 'https://coffeedayshop.com' }
    ]
  },
  {
    category: 'Restaurant & Food',
    items: [
      { name: 'Dawn BBQ Restaurant', url: 'https://dawnbbqrestaurant.com' },
      { name: 'Tandoori Restaurants', url: 'https://tandoorirestaurants.pk' },
      { name: 'Ranchers Cafe', url: 'https://rancherscafe.com' },
      { name: 'Emamabadi Barfi', url: 'https://emanabadibarfi.com' },
      { name: 'Dar Al Mahi', url: 'https://dar-almahi.com' },
      { name: 'Coffee Day Shop', url: 'https://coffeedayshop.com' }
    ]
  },
  {
    category: 'Corporate & Business',
    items: [
      { name: 'Chief', url: 'https://www.chief.com.pk' },
      { name: 'Xanders', url: 'https://xanders.pk' },
      { name: 'Old Mill Textiles', url: 'https://oldmilltextiles.com' },
      { name: 'Suetzco', url: 'https://suetzco.com' },
      { name: 'Gulf Trading UAE', url: 'https://gulftrading-uae.com' },
      { name: 'Vertex Power Solution', url: 'https://vertexpowersolution.com' },
      { name: 'Dativo PK', url: 'https://dativopk.com' },
      { name: 'Bashir United Technologies', url: 'https://bashirunitedtechnologies.com' },
      { name: 'Skylinks SPC', url: 'https://skylinksspc.com' },
      { name: 'Accounting Lodge', url: 'https://accountinglodge.com' }
    ]
  },
  {
    category: 'Technology & Digital Services',
    items: [
      { name: 'Zarin Solutions', url: 'https://zarin.solutions' },
      { name: 'United Web Studios', url: 'https://unitedwebstudios.com' },
      { name: 'Haris Web Studio', url: 'http://hariswebstudio.com' },
      { name: 'Safal Tech Solution', url: 'https://www.safaltechsolution.com' },
      { name: 'Klicksy Digitizing', url: 'https://klicksydigitizing.com' },
      { name: 'Forex Premium Bots', url: 'https://forexpremiumbots.com' },
      { name: 'CBNC Corporation', url: 'https://cbnccorpation.com' }
    ]
  },
  {
    category: 'Healthcare & Medical',
    items: [
      { name: 'FOY Dental Care', url: 'https://www.foydentalcare.site' },
      { name: 'Peaceway Rehabilitation Center', url: 'https://peacewayrehabilitationcenter.com' },
      { name: 'IQRA Mental Health', url: 'https://iqramentalhealth.com' }
    ]
  },
  {
    category: 'Hotel, Travel & Hospitality',
    items: [
      { name: 'Hotel Faran', url: 'https://www.hotelfaranpk.online' },
      { name: 'Mahod & Camp', url: 'https://www.mahodandcamp.online' },
      { name: 'Ahsan Naz Group Tickets', url: 'https://ahsannazgroupstickets.com' }
    ]
  },
  {
    category: 'Home & Professional Services',
    items: [
      { name: 'Remodeling.ae', url: 'https://remodeling.ae' },
      { name: 'Wallmend', url: 'https://wallmend.com' },
      { name: 'HAU Services', url: 'https://hauservices.com' },
      { name: 'Anfa Towing', url: 'https://anfatowing.site' },
      { name: 'Home Guard Security', url: 'https://homeguardsecurity.uk' },
      { name: 'Alka Fire', url: 'https://alkafire.com' },
      { name: 'Maid My Day Cleaning', url: 'https://www.maidmydaycleaning.site' },
      { name: '34 Organic Cleaner', url: 'https://www.34organiccleaner.online' }
    ]
  },
  {
    category: 'Welfare & Non-Profit',
    items: [
      { name: 'Saving Lives Welfare', url: 'https://savingliveswelfare.org' },
      { name: 'JFHW Welfare Foundation', url: 'https://jfhwelfarefoundation.org' },
      { name: 'Revive Revival of Change', url: 'https://reviverevivalofchange.com' }
    ]
  },
  {
    category: 'Creative & Lifestyle',
    items: [
      { name: "Asia's Collection", url: 'https://asiascollection.com' },
      { name: 'Azamora by AF', url: 'https://azamorabyaf.com' },
      { name: 'Hijab by FH', url: 'https://hijabbyfh.com' },
      { name: 'Hadia Paint Studio', url: 'https://hadiapaintstudio.com' }
    ]
  },
  {
    category: 'Sports & Fitness',
    items: [
      { name: 'NA Fitness', url: 'https://nafitness.pk' },
      { name: 'Velzo Sports', url: 'https://velzosports.com' },
      { name: 'Callaway Golf', url: 'https://www.callawaygolf.com' }
    ]
  },
  {
    category: 'Education & Professional Services',
    items: [
      { name: 'Tutor Tide HK', url: 'https://tutortidehk.com' },
      { name: 'Abacus Consulting', url: 'https://www.abacusconsulting.online' },
      { name: 'Rubio Law Firm', url: 'https://www.rubiolawfirm.site' },
      { name: 'Busy.pk', url: 'https://busy.pk' }
    ]
  },
  {
    category: 'Other',
    items: [
      { name: 'JYXcel', url: 'https://jyxcel.com' },
      { name: 'RCM Crest', url: 'https://rcmcrest.com' },
      { name: 'Ainua Essence', url: 'https://ainuaessence.com' },
      { name: 'Le Basse Khass', url: 'https://lebassekhass.com' },
      { name: 'Nashar News', url: 'https://nasharnews.com' },
      { name: 'Dastakdo', url: 'https://dastakdo.com' },
      { name: 'Zynveros', url: 'https://zynveros.com' }
    ]
  }
];

export const PORTFOLIO_DISCLAIMER =
  'All listed websites/apps belong to their respective clients. Shared as examples of design/development experience; no claim of ownership over client brands, content, or IP.';
