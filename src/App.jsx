import { useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Headphones,
  MessageCircle,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Wrench,
} from "lucide-react";

import "./App.css";

import logo from "./assets/rad-vision-logo.png";
import heroRadiology from "./assets/hero-radiology-xray.jpg";

import plasticFilm from "./assets/products/plastic-film.png";
import glossyPaper from "./assets/products/glossy-paper.png";
import epson869 from "./assets/products/epson-869r.jpg";
import huqPrinter from "./assets/products/huq-printer.jpg";
import huqFilm from "./assets/products/huq-thermal-film.jpg";
import sonyUpp from "./assets/products/sony-upp110s.jpg";
import skydent from "./assets/products/skydent-dental.png";
import fujiLaser from "./assets/products/fuji-laser.jpg";
import fujiDiht from "./assets/products/fuji-diht.png";
import xeroxC60 from "./assets/products/xerox-c60-c70.png";
import xerox78 from "./assets/products/xerox-78.png";
import acmaDeveloper from "./assets/products/acma-developer.png";

/* Plastic Film Gallery */
import plasticSizes from "./assets/products/plastic-film-sizes.png";
import plasticBlueSheets from "./assets/products/plastic-film-blue-sheets.png";
import plasticBlueCloseup from "./assets/products/plastic-film-blue-closeup.jpg";
import plasticBlueWhiteReal from "./assets/products/plastic-film-blue-white-real.png";
import plasticBlueOpen from "./assets/products/plastic-film-blue-open-box.png";
import plasticWhiteOpen from "./assets/products/plastic-film-white-open-box.png";

/* Glossy Paper Gallery */
import glossyA3 from "./assets/products/glossy-paper-a3.png";
import glossyA4 from "./assets/products/glossy-paper-a4.png";
import glossySheet from "./assets/products/glossy-paper-sheet.jpg";

/* New Product Galleries */
import fujiLaserDetail from "./assets/products/fuji-laser-detail.png";
import fujiDihtDetail1 from "./assets/products/fuji-diht-detail-1.jpg";
import fujiDihtDetail2 from "./assets/products/fuji-diht-detail-2.jpg";
import huqFilmDetail1 from "./assets/products/huq-film-detail-1.jpg";
import huqFilmDetail2 from "./assets/products/huq-film-detail-2.jpg";
import sonyUppDetail1 from "./assets/products/sony-upp-detail-1.jpg";
import sonyUppDetail2 from "./assets/products/sony-upp-detail-2.jpg";
import sonyUppDetail3 from "./assets/products/sony-upp-detail-3.jpg";
import sonyUppDetail4 from "./assets/products/sony-upp-detail-4.jpg";
import sonyUppDetail5 from "./assets/products/sony-upp-detail-5.jpg";
import skydentFilmImage from "./assets/products/skydent-film-detail.jpg";
import skydentXrayImage from "./assets/products/skydent-xray-detail.jpg";
import acmaAutomaticFixer from "./assets/products/acma-automatic-fixer.png";
import acmaManualFixer from "./assets/products/acma-manual-fixer.png";
import acmaManualDeveloper from "./assets/products/acma-manual-developer.png";
import fujiGreenFilm from "./assets/products/fuji-green-xray-film.png";
import fujiBlueFilm from "./assets/products/fuji-blue-xray-film.png";
/* Printer Galleries */
import epson869Detail1 from "./assets/products/epson-869r-detail-1.jpg";
import epson869Detail2 from "./assets/products/epson-869r-detail-2.jpg";
import huqPrinterDetail1 from "./assets/products/huq-printer-detail-1.jpg";
import huqPrinterDetail2 from "./assets/products/huq-printer-detail-2.jpg";
import huqPrinterDetail3 from "./assets/products/huq-printer-detail-3.jpg";
import huqPrinterDetail4 from "./assets/products/huq-printer-detail-4.jpg";
import xerox78Detail1 from "./assets/products/xerox-78-detail-1.jpg";
import xerox78Detail2 from "./assets/products/xerox-78-detail-2.jpg";
import xerox78Detail3 from "./assets/products/xerox-78-detail-3.jpg";
import xerox78Detail4 from "./assets/products/xerox-78-detail-4.jpg";
import xerox78Detail5 from "./assets/products/xerox-78-detail-5.jpg";
import xerox78Detail6 from "./assets/products/xerox-78-detail-6.jpg";

const plasticFilmVariants = [
  { size: "A3", dimensions: "29.7 × 42 cm", price: 900 },
  { size: "A4", dimensions: "21 × 29.7 cm", price: 450 },
  { size: "8×10", dimensions: "20.3 × 25.4 cm", price: 400 },
  { size: "11×14", dimensions: "27.9 × 35.6 cm", price: 800 },
  { size: "A3+", dimensions: "33 × 45 cm", price: 1250 },
  { size: "B4", dimensions: "25.7 × 36.4 cm", price: 675 },
  { size: "10×12", dimensions: "25.4 × 30.5 cm", price: 650 },
];

const glossyPaperVariants = [
  { size: "A3", weight: "180 GSM", price: 0 },
  { size: "A3", weight: "200 GSM", price: 0 },
  { size: "A3", weight: "230 GSM", price: 0 },
  { size: "A4", weight: "180 GSM", price: 0 },
  { size: "A4", weight: "200 GSM", price: 0 },
  { size: "A4", weight: "230 GSM", price: 0 },
];

const fujiLaserVariants = [
  { size: "8×10", price: 4200 },
  { size: "10×14", price: 7100 },
  { size: "14×17", price: 7100 },
];

const fujiDihtVariants = [
  { size: "8×10", price: 2200 },
  { size: "10×14", price: 3800 },
  { size: "14×17", price: 5900 },
];

const huqFilmSizes = ["8×10", "11×14", "14×17"];

const fujiConventionalVariants = [
  { size: "8×10", price: 1750 },
  { size: "18×24", price: 1650 },
  { size: "24×30", price: 2550 },
  { size: "30×40", price: 4300 },
  { size: "14×17", price: 5100 },
  { size: "14×14", price: 4200 },
];


function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const [plasticSize, setPlasticSize] = useState("A3");
  const [plasticColor, setPlasticColor] = useState("Blue");

  const [glossySize, setGlossySize] = useState("A3");
  const [glossyWeight, setGlossyWeight] = useState("180 GSM");
  const [fujiLaserSize, setFujiLaserSize] = useState("8×10");
  const [fujiDihtSize, setFujiDihtSize] = useState("8×10");
  const [huqFilmSize, setHuqFilmSize] = useState("8×10");
  const [catalogSize, setCatalogSize] = useState("");

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartNotice, setCartNotice] = useState(null);
  const cartNoticeTimer = useRef(null);

  const showCartNotice = (productName) => {
    setCartNotice(productName);
    if (cartNoticeTimer.current) clearTimeout(cartNoticeTimer.current);
    cartNoticeTimer.current = setTimeout(() => setCartNotice(null), 2400);
  };

  const isArabic = language === "ar";

  const products = [
    {
      id: "plastic-film",
      image: plasticFilm,
      category: isArabic ? "أفلام طبية" : "Medical Films",
      name: isArabic
        ? "أفلام بلاستيك للأشعة"
        : "Plastic Medical Imaging Film",
      description: isArabic
        ? "أفلام طباعة طبية عالية الجودة لمراكز الأشعة."
        : "High-quality medical imaging films for radiology centers.",
      priceFrom: 400,
    },
    {
      id: "glossy-paper",
      image: glossyPaper,
      category: isArabic ? "ورق جلوسي" : "Glossy Paper",
      name: isArabic
        ? "NOUR ورق جلوسي"
        : "NOUR Glossy Photo Paper",
      description: isArabic
        ? "متوفر A3 وA4 بأوزان متعددة."
        : "Available in A3 & A4 with multiple paper weights.",
      priceFrom: 0,
    },
    {
      id: "fuji-laser",
      image: fujiLaser,
      category: isArabic ? "أفلام فوجي" : "Fuji Films",
      name: "FUJIFILM DI-HL",
      description: isArabic
        ? "أفلام فوجي ليزر للطباعة الطبية."
        : "Professional Fuji laser medical imaging film.",
      priceFrom: 4200,
    },
    {
      id: "fuji-diht",
      image: fujiDiht,
      category: isArabic ? "أفلام فوجي" : "Fuji Films",
      name: "FUJIFILM DI-HT",
      description: isArabic
        ? "أفلام فوجي ثيرمال Dry Imaging."
        : "Fuji thermal dry medical imaging film.",
      priceFrom: 2200,
    },
    {
      id: "huq-film",
      image: huqFilm,
      category: isArabic ? "أفلام ثيرمال" : "Thermal Films",
      name: "HUQ Thermal Film",
      description: isArabic
        ? "أفلام ثيرمال لطابعات HUQ الطبية."
        : "Thermal medical films for HUQ imaging printers — price on request.",
      requestPrice: true,
    },
    {
      id: "sony-upp",
      image: sonyUpp,
      category: isArabic ? "مستلزمات السونار" : "Ultrasound Media",
      name: "Sony UPP-110S",
      description: isArabic
        ? "رول طباعة حراري للسونار 110mm × 20m."
        : "Original Japanese Sony UPP-110S ultrasound thermal print media, 110mm × 20m.",
      priceFrom: 400,
    },
    {
      id: "skydent",
      image: skydent,
      category: isArabic ? "أفلام أسنان" : "Dental Imaging",
      name: "SKYDENT Dental Film",
      description: isArabic
        ? "أفلام أشعة أسنان SKYDENT Speed D، مقاس Size 2."
        : "SKYDENT Speed D dental X-ray film, Size 2.",
      priceFrom: 1550,
    },
    {
      id: "acma",
      image: acmaDeveloper,
      category: isArabic ? "أحماض ومحاليل" : "Chemicals",
      name: "ACMA Automatic Developer",
      description: isArabic
        ? "أحماض أكما أوتوماتيك - مظهر. الكرتونة 2 جركن."
        : "ACMA automatic X-ray developer. Carton contains 2 jerrycans.",
      priceFrom: 2200,
    },
    {
      id: "acma-auto-fixer",
      image: acmaAutomaticFixer,
      category: isArabic ? "أحماض ومحاليل" : "Chemicals",
      name: "ACMA Automatic Fixer",
      description: isArabic ? "مثبت أوتوماتيك أكما. الكرتونة 2 جركن." : "ACMA automatic fixer. Carton contains 2 jerrycans.",
      priceFrom: 1500,
    },
    {
      id: "acma-manual-fixer",
      image: acmaManualFixer,
      category: isArabic ? "أحماض ومحاليل" : "Chemicals",
      name: "ACMA Manual Fixer",
      description: isArabic ? "مثبت أكما مانيوال. الكرتونة 2 جركن." : "ACMA manual fixer. Carton contains 2 jerrycans.",
      priceFrom: 1500,
    },
    {
      id: "acma-manual-developer",
      image: acmaManualDeveloper,
      category: isArabic ? "أحماض ومحاليل" : "Chemicals",
      name: "ACMA Manual Developer",
      description: isArabic ? "مظهر أكما مانيوال، جركن 4 لتر يعمل 20 لتر." : "ACMA manual developer, 4 L concentrate makes 20 L.",
      priceFrom: 2200,
    },
    {
      id: "fuji-green",
      image: fujiGreenFilm,
      category: isArabic ? "أفلام أشعة" : "X-Ray Films",
      name: "FUJIFILM Green X-Ray Film",
      description: isArabic ? "أفلام أشعة فوجي جرين. 100 فيلم بالعلبة." : "FUJIFILM Green X-ray film. 100 films per box.",
      priceFrom: 1650,
    },
    {
      id: "fuji-blue",
      image: fujiBlueFilm,
      category: isArabic ? "أفلام أشعة" : "X-Ray Films",
      name: "FUJIFILM Blue X-Ray Film",
      description: isArabic ? "أفلام أشعة فوجي بلو. 100 فيلم بالعلبة." : "FUJIFILM Blue X-ray film. 100 films per box.",
      priceFrom: 1650,
    },
  ];

  const printers = [
    {
      id: "epson-869r",
      image: epson869,
      gallery: [epson869, epson869Detail1, epson869Detail2],
      name: "Epson 869R",
      type: isArabic ? "طابعة طبية احترافية" : "Professional Medical Imaging Printer",
      availability: isArabic
        ? ["متاحة للبيع", "متاحة بنظام Target", "متاحة بالتقسيط"]
        : ["Available for sale", "Available with Target System", "Installment plans available"],
      features: isArabic
        ? [
            "استيراد خارج",
            "4 درج",
            "دقة طباعة تصل إلى 4800 × 1200 DPI",
            "تطبع أفلام الأشعة البلاستيك Blue Film & White Film",
            "تطبع على Glossy Paper",
            "نظام Target يشمل الأحبار والصيانة وجميع قطع الغيار",
          ]
        : [
            "Imported unit",
            "4 paper trays",
            "Print resolution up to 4800 × 1200 DPI",
            "Prints Blue Film & White Film",
            "Supports Glossy Paper",
            "Target System includes inks, maintenance and spare parts",
          ],
      sizes: ["8×10", "A4", "A3", "11×14", "A3+"],
      media: "Blue Film • White Film • Glossy Paper",
      systems: isArabic ? "بيع • Target • تقسيط" : "Sale • Target • Installments",
      quoteOptions: isArabic
        ? ["شراء مباشر", "نظام Target", "تقسيط"]
        : ["Direct Purchase", "Target System", "Installments"],
    },
    {
      id: "huq-thermal",
      image: huqPrinter,
      gallery: [huqPrinter, huqPrinterDetail1, huqPrinterDetail2, huqPrinterDetail3, huqPrinterDetail4],
      name: "HUQ Thermal Printer",
      type: isArabic ? "طابعة أفلام أشعة Thermal" : "Thermal Medical Film Printer",
      availability: isArabic
        ? ["متاحة جديدة", "متاحة مستعملة كسر زيرو", "متاحة للبيع", "متاحة بنظام Target", "تقسيط بدون مقدم"]
        : ["Available new", "Available nearly-new used", "Available for sale", "Available with Target System", "Installments with no down payment"],
      features: isArabic
        ? [
            "تكلفة أفلام أقل مقارنة بمعظم طابعات الأشعة Thermal في السوق",
            "جودة طباعة ثابتة وواضحة",
            "سرعة في الأداء واعتمادية عالية",
            "2 درج",
            "دقة 320 dpi",
            "ضمان سنة + صيانة ودعم فني",
            "الطابعة مجانًا مقابل Target أفلام شهري",
          ]
        : [
            "Lower film cost compared with many thermal imaging printers",
            "Consistent and clear print quality",
            "Fast performance and high reliability",
            "2 trays",
            "320 dpi resolution",
            "1-year warranty + maintenance and technical support",
            "Printer available free with an agreed monthly film target",
          ],
      sizes: ["8×10", "11×14", "14×17"],
      media: "HUQ Thermal Film",
      systems: isArabic ? "بيع • Target • تقسيط بدون مقدم" : "Sale • Target • No-down-payment installments",
      quoteOptions: isArabic
        ? ["شراء مباشر", "نظام Target", "تقسيط بدون مقدم"]
        : ["Direct Purchase", "Target System", "Installments with No Down Payment"],
    },
    {
      id: "xerox-c60-c70",
      image: xeroxC60,
      gallery: [xeroxC60],
      name: "Xerox C60 / C70",
      type: isArabic ? "طابعة إنتاج احترافية" : "Professional Production Printer",
      availability: isArabic
        ? ["متاحة بنظام Target"]
        : ["Available with Target System"],
      features: isArabic
        ? [
            "طباعة أشعة Color & Black",
            "نوع الورق: Glossy Paper",
            "متاحة بنظام Target شامل الأحبار والصيانة وقطع الغيار طوال فترة التعاقد.",
          ]
        : [
            "Color & Black medical imaging printing",
            "Media: Glossy Paper",
            "Target System includes inks, maintenance and spare parts throughout the contract period.",
          ],
      sizes: ["A4", "A3", "A3+"],
      media: "Glossy Paper",
      systems: isArabic ? "نظام Target" : "Target System",
      quoteOptions: isArabic ? ["نظام Target"] : ["Target System"],
    },
    {
      id: "xerox-78",
      image: xerox78,
      gallery: [xerox78, xerox78Detail1, xerox78Detail2, xerox78Detail3, xerox78Detail4, xerox78Detail5, xerox78Detail6],
      name: "Xerox 7835 / 7845 / 7855",
      type: isArabic ? "طابعة أشعة Color & Black" : "Color & Black Medical Imaging Printer",
      availability: isArabic
        ? ["متاحة بنظام Target"]
        : ["Available with Target System"],
      features: isArabic
        ? [
            "طباعة أشعة Color & Black",
            "نوع الورق: Glossy Paper",
            "متاحة بنظام Target شامل الأحبار والصيانة وقطع الغيار طوال فترة التعاقد.",
          ]
        : [
            "Color & Black medical imaging printing",
            "Media: Glossy Paper",
            "Target System includes inks, maintenance and spare parts throughout the contract period.",
          ],
      sizes: ["A4", "A3"],
      media: "Glossy Paper",
      systems: isArabic ? "نظام Target" : "Target System",
      quoteOptions: isArabic ? ["نظام Target"] : ["Target System"],
    },
  ];

  const plasticGallery = [
    plasticSizes,
    plasticBlueOpen,
    plasticWhiteOpen,
    plasticBlueSheets,
    plasticBlueWhiteReal,
    plasticBlueCloseup,
  ];

  const glossyGallery = [glossyA3, glossyA4, glossySheet];
  const fujiLaserGallery = [fujiLaser, fujiLaserDetail];
  const fujiDihtGallery = [fujiDiht, fujiDihtDetail1, fujiDihtDetail2];
  const huqFilmGallery = [huqFilm, huqFilmDetail1, huqFilmDetail2];
  const sonyUppGallery = [sonyUpp, sonyUppDetail1, sonyUppDetail2, sonyUppDetail3, sonyUppDetail4, sonyUppDetail5];

  const catalogProducts = {
    skydent: {
      name: "SKYDENT Dental Film",
      category: isArabic ? "أفلام أسنان" : "DENTAL X-RAY FILM",
      gallery: [skydent, skydentFilmImage, skydentXrayImage],
      variants: [{ size: "Size 2 • 3 × 4 cm", price: 1550 }],
      features: isArabic ? ["Speed D", "100 فيلم في العلبة", "المقاس 3 × 4 cm (Size 2)"] : ["Speed D", "100 films per box", "3 × 4 cm (Size 2)"],
      details: ["Dental X-Ray Film", "100 Films / Box", "Speed D", "Size 2 • 3 × 4 cm"],
    },
    acma: {
      name: "ACMA Automatic Developer",
      category: isArabic ? "أحماض ومحاليل" : "X-RAY CHEMICALS",
      gallery: [acmaDeveloper],
      variants: [{ size: isArabic ? "كرتونة" : "Carton", price: 2200 }],
      features: isArabic ? ["مظهر أوتوماتيك", "الكرتونة 2 جركن"] : ["Automatic Developer", "Carton: 2 jerrycans"],
      details: ["Automatic X-Ray Developer", "2 Jerrycans / Carton", "2,200 EGP / Carton", "ACMA"],
    },
    "acma-auto-fixer": {
      name: "ACMA Automatic Fixer",
      category: isArabic ? "أحماض ومحاليل" : "X-RAY CHEMICALS",
      gallery: [acmaAutomaticFixer],
      variants: [{ size: isArabic ? "كرتونة" : "Carton", price: 1500 }],
      features: isArabic ? ["مثبت أوتوماتيك", "الكرتونة 2 جركن"] : ["Automatic Fixer", "Carton: 2 jerrycans"],
      details: ["Automatic Fixer", "2 Jerrycans / Carton", "1,500 EGP / Carton", "ACMA"],
    },
    "acma-manual-fixer": {
      name: "ACMA Manual Fixer",
      category: isArabic ? "أحماض ومحاليل" : "X-RAY CHEMICALS",
      gallery: [acmaManualFixer],
      variants: [{ size: isArabic ? "كرتونة" : "Carton", price: 1500 }],
      features: isArabic ? ["مثبت مانيوال", "الكرتونة 2 جركن"] : ["Manual Fixer", "Carton: 2 jerrycans"],
      details: ["Manual Fixer", "2 Jerrycans / Carton", "1,500 EGP / Carton", "ACMA"],
    },
    "acma-manual-developer": {
      name: "ACMA Manual Developer",
      category: isArabic ? "أحماض ومحاليل" : "X-RAY CHEMICALS",
      gallery: [acmaManualDeveloper],
      variants: [{ size: isArabic ? "جركن 4 لتر" : "4 L Jerrycan", price: 2200 }],
      features: isArabic ? ["مظهر مانيوال", "جركن 4 لتر", "يعمل 20 لتر"] : ["Manual Developer", "4 L Jerrycan", "Makes 20 L"],
      details: ["Manual X-Ray Developer", "4 Liters", "Makes 20 Liters", "2,200 EGP"],
    },
    "fuji-green": {
      name: "FUJIFILM Green X-Ray Film",
      category: isArabic ? "أفلام أشعة فوجي" : "FUJIFILM X-RAY FILM",
      gallery: [fujiGreenFilm],
      variants: fujiConventionalVariants,
      features: isArabic ? ["فوجي أخضر", "100 فيلم في العلبة", "الكرتونة 5 علب"] : ["Fuji Green", "100 films per box", "Carton: 5 boxes"],
      details: ["Fuji Green", "100 Films / Box", "5 Boxes / Carton", "6 Sizes"],
    },
    "fuji-blue": {
      name: "FUJIFILM Blue X-Ray Film",
      category: isArabic ? "أفلام أشعة فوجي" : "FUJIFILM X-RAY FILM",
      gallery: [fujiBlueFilm],
      variants: fujiConventionalVariants,
      features: isArabic ? ["فوجي أزرق", "100 فيلم في العلبة", "الكرتونة 5 علب"] : ["Fuji Blue", "100 films per box", "Carton: 5 boxes"],
      details: ["Fuji Blue", "100 Films / Box", "5 Boxes / Carton", "6 Sizes"],
    },
  };

  const selectedPlasticVariant =
    plasticFilmVariants.find((item) => item.size === plasticSize) ||
    plasticFilmVariants[0];

  const selectedGlossyVariant =
    glossyPaperVariants.find(
      (item) =>
        item.size === glossySize &&
        item.weight === glossyWeight
    ) || glossyPaperVariants[0];

  const selectedFujiLaserVariant =
    fujiLaserVariants.find((item) => item.size === fujiLaserSize) || fujiLaserVariants[0];
  const selectedFujiDihtVariant =
    fujiDihtVariants.find((item) => item.size === fujiDihtSize) || fujiDihtVariants[0];

  const cartTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const scrollTo = (id) => {
    setPage("home");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const goHome = () => {
    setPage("home");
    setSelectedProduct(null);
    setSelectedPrinter(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPrinter = (printer) => {
    setSelectedPrinter(printer);
    setSelectedImage(0);
    setPage("printer");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openProduct = (product) => {
    if (product.id === "plastic-film") {
      setSelectedProduct(product);
      setSelectedImage(0);
      setPlasticSize("A3");
      setPlasticColor("Blue");
      setQuantity(1);
      setPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (product.id === "glossy-paper") {
      setSelectedProduct(product);
      setSelectedImage(0);
      setGlossySize("A3");
      setGlossyWeight("180 GSM");
      setQuantity(1);
      setPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (["fuji-laser", "fuji-diht", "huq-film", "sony-upp"].includes(product.id)) {
      setSelectedProduct(product);
      setSelectedImage(0);
      setQuantity(1);
      if (product.id === "fuji-laser") setFujiLaserSize("8×10");
      if (product.id === "fuji-diht") setFujiDihtSize("8×10");
      if (product.id === "huq-film") setHuqFilmSize("8×10");
      setPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (["skydent", "acma", "acma-auto-fixer", "acma-manual-fixer", "acma-manual-developer", "fuji-green", "fuji-blue"].includes(product.id)) {
      setSelectedProduct(product);
      setSelectedImage(0);
      setQuantity(1);
      const firstVariant = catalogProducts[product.id]?.variants?.[0];
      setCatalogSize(firstVariant?.size || "");
      setPage("product");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    alert(isArabic ? "هنضيف تفاصيل وأسعار هذا المنتج بعدين." : "Product details and pricing will be added next.");
  };

  const addPlasticToCart = () => {
    const newItem = {
      id: `plastic-${plasticSize}-${plasticColor}-${Date.now()}`,
      productId: "plastic-film",
      name: isArabic
        ? "أفلام بلاستيك للأشعة"
        : "Plastic Medical Imaging Film",
      image: plasticColor === "Blue" ? plasticBlueOpen : plasticWhiteOpen,
      size: plasticSize,
      dimensions: selectedPlasticVariant.dimensions,
      color: plasticColor,
      price: selectedPlasticVariant.price,
      quantity,
    };

    setCart((current) => [...current, newItem]);
    showCartNotice(newItem.name);
  };

  const buyPlasticNow = () => {
    addPlasticToCart();
    setPage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addGlossyToCart = () => {
    const newItem = {
      id: `glossy-${glossySize}-${glossyWeight}-${Date.now()}`,
      productId: "glossy-paper",
      name: isArabic
        ? "NOUR ورق جلوسي"
        : "NOUR Glossy Photo Paper",
      image: glossySize === "A3" ? glossyA3 : glossyA4,
      size: glossySize,
      dimensions:
        glossySize === "A3"
          ? "29.7 × 42 cm"
          : "21 × 29.7 cm",
      weight: glossyWeight,
      price: selectedGlossyVariant.price,
      quantity,
    };

    setCart((current) => [...current, newItem]);
    showCartNotice(newItem.name);
  };

  const buyGlossyNow = () => {
    addGlossyToCart();
    setPage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addSimpleProductToCart = ({ productId, name, image, size, price, details }) => {
    setCart((current) => [...current, {
      id: `${productId}-${size || "standard"}-${Date.now()}`,
      productId, name, image, size: size || "Standard",
      dimensions: details || "", price, quantity,
    }]);
    showCartNotice(name);
  };

  const buySimpleProductNow = (item) => {
    addSimpleProductToCart(item);
    setPage("cart");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeCartQuantity = (id, amount) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const removeCartItem = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="website" dir={isArabic ? "rtl" : "ltr"}>
      <Header
        logo={logo}
        isArabic={isArabic}
        language={language}
        setLanguage={setLanguage}
        goHome={goHome}
        scrollTo={scrollTo}
        setPage={setPage}
        cartCount={cartCount}
      />

      {page === "home" && (
        <HomePage
          isArabic={isArabic}
          products={products}
          printers={printers}
          openProduct={openProduct}
          openPrinter={openPrinter}
          scrollTo={scrollTo}
          epson869={epson869}
          plasticFilm={plasticFilm}
          glossyPaper={glossyPaper}
          fujiDiht={fujiDiht}
          xeroxC60={xeroxC60}
          huqPrinter={huqPrinter}
        />
      )}

      {page === "product" &&
        selectedProduct?.id === "plastic-film" && (
          <PlasticFilmPage
            isArabic={isArabic}
            gallery={plasticGallery}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            plasticSize={plasticSize}
            setPlasticSize={setPlasticSize}
            plasticColor={plasticColor}
            setPlasticColor={setPlasticColor}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedVariant={selectedPlasticVariant}
            addToCart={addPlasticToCart}
            buyNow={buyPlasticNow}
            goHome={goHome}
          />
        )}

      {page === "product" &&
        selectedProduct?.id === "glossy-paper" && (
          <GlossyPaperPage
            isArabic={isArabic}
            gallery={glossyGallery}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            glossySize={glossySize}
            setGlossySize={setGlossySize}
            glossyWeight={glossyWeight}
            setGlossyWeight={setGlossyWeight}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedVariant={selectedGlossyVariant}
            addToCart={addGlossyToCart}
            buyNow={buyGlossyNow}
            goHome={goHome}
          />
        )}

      {page === "product" && ["fuji-laser", "fuji-diht", "sony-upp"].includes(selectedProduct?.id) && (
        <SimpleProductPage
          isArabic={isArabic}
          productId={selectedProduct.id}
          gallery={selectedProduct.id === "fuji-laser" ? fujiLaserGallery : selectedProduct.id === "fuji-diht" ? fujiDihtGallery : sonyUppGallery}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          quantity={quantity}
          setQuantity={setQuantity}
          size={selectedProduct.id === "fuji-laser" ? fujiLaserSize : selectedProduct.id === "fuji-diht" ? fujiDihtSize : "110mm × 20m"}
          setSize={selectedProduct.id === "fuji-laser" ? setFujiLaserSize : selectedProduct.id === "fuji-diht" ? setFujiDihtSize : null}
          variants={selectedProduct.id === "fuji-laser" ? fujiLaserVariants : selectedProduct.id === "fuji-diht" ? fujiDihtVariants : [{ size: "110mm × 20m", price: 400 }]}
          selectedVariant={selectedProduct.id === "fuji-laser" ? selectedFujiLaserVariant : selectedProduct.id === "fuji-diht" ? selectedFujiDihtVariant : { size: "110mm × 20m", price: 400 }}
          goHome={goHome}
          addSimpleProductToCart={addSimpleProductToCart}
          buySimpleProductNow={buySimpleProductNow}
        />
      )}

      {page === "product" && selectedProduct?.id === "huq-film" && (
        <HuqFilmPage isArabic={isArabic} gallery={huqFilmGallery} selectedImage={selectedImage}
          setSelectedImage={setSelectedImage} size={huqFilmSize} setSize={setHuqFilmSize} goHome={goHome} />
      )}

      {page === "product" && catalogProducts[selectedProduct?.id] && (
        <CatalogProductPage
          isArabic={isArabic}
          product={catalogProducts[selectedProduct.id]}
          productId={selectedProduct.id}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedSize={catalogSize}
          setSelectedSize={setCatalogSize}
          quantity={quantity}
          setQuantity={setQuantity}
          goHome={goHome}
          addSimpleProductToCart={addSimpleProductToCart}
          buySimpleProductNow={buySimpleProductNow}
        />
      )}

      {page === "printer" && selectedPrinter && (
        <PrinterDetailPage
          isArabic={isArabic}
          printer={printers.find((item) => item.id === selectedPrinter.id) || selectedPrinter}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          goHome={goHome}
        />
      )}

      {page === "cart" && (
        <CartPage
          isArabic={isArabic}
          cart={cart}
          cartTotal={cartTotal}
          changeCartQuantity={changeCartQuantity}
          removeCartItem={removeCartItem}
          setPage={setPage}
          goHome={goHome}
        />
      )}

      {page === "checkout" && (
        <CheckoutPage
          isArabic={isArabic}
          cart={cart}
          cartTotal={cartTotal}
          setPage={setPage}
        />
      )}

      <Footer logo={logo} isArabic={isArabic} />

      {cartNotice && (
        <div className="cart-toast" role="status" aria-live="polite">
          <span className="cart-toast-icon"><Check size={18} /></span>
          <div>
            <strong>{isArabic ? "تمت الإضافة للسلة" : "Added to cart"}</strong>
            <small>{cartNotice}</small>
          </div>
          <button
            type="button"
            onClick={() => { setPage("cart"); setCartNotice(null); window.scrollTo(0, 0); }}
          >
            {isArabic ? "عرض السلة" : "View Cart"}
          </button>
        </div>
      )}

      <button
        className="floating-whatsapp"
        onClick={() => window.open("https://wa.me/201060004999", "_blank", "noopener,noreferrer")}
        aria-label={isArabic ? "تواصل معنا على واتساب" : "Contact Rad Vision on WhatsApp"}
      >
        <MessageCircle />
      </button>
    </div>
  );
}

function Header({
  logo,
  isArabic,
  language,
  setLanguage,
  goHome,
  scrollTo,
  setPage,
  cartCount,
}) {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="logo-button" onClick={goHome} aria-label="Home">
          <img src={logo} className="logo" alt="Rad Vision" />
        </button>

        <nav className="nav">
          <button onClick={goHome}>
            {isArabic ? "الرئيسية" : "Home"}
          </button>

          <button onClick={() => scrollTo("products")}>
            {isArabic ? "المنتجات" : "Products"}
          </button>

          <button onClick={() => scrollTo("printers")}>
            {isArabic ? "الطابعات" : "Printers"}
          </button>

          <button onClick={() => scrollTo("target")}>
            {isArabic ? "نظام التارجت" : "Target System"}
          </button>

          <button onClick={() => scrollTo("about")}>
            {isArabic ? "من نحن" : "About Us"}
          </button>
        </nav>

        <div className="header-actions">
          <button
            className="language-button"
            onClick={() =>
              setLanguage(language === "ar" ? "en" : "ar")
            }
          >
            {isArabic ? "EN" : "العربية"}
          </button>

          <button
            className="cart-header-button"
            onClick={() => {
              setPage("cart");
              window.scrollTo(0, 0);
            }}
          >
            <ShoppingBag size={19} />
            <span>{isArabic ? "السلة" : "Cart"}</span>
            {cartCount > 0 && <b>{cartCount}</b>}
          </button>

          <button
            className="header-quote"
            onClick={() => scrollTo("printers")}
          >
            {isArabic ? "عرض سعر للبرنترات" : "Printer Quote"}
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({
  isArabic,
  products,
  printers,
  openProduct,
  openPrinter,
  scrollTo,
  epson869,
  plasticFilm,
  glossyPaper,
  fujiDiht,
  xeroxC60,
  huqPrinter,
}) {
  return (
    <main>
      <section className="hero hero-premium" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-label">
              <span className="hero-label-dot"></span>
              {isArabic
                ? "RAD VISION • حلول التصوير الطبي"
                : "RAD VISION • MEDICAL IMAGING SOLUTIONS"}
            </div>

            <h1>
              {isArabic ? (
                <>
                  حلول متكاملة
                  <span>لمراكز الأشعة</span>
                </>
              ) : (
                <>
                  Complete Solutions
                  <span>for Radiology Centers</span>
                </>
              )}
            </h1>

            <div className="hero-title-accent"></div>

            <p>
              {isArabic
                ? "أفلام أشعة، مستلزمات طباعة طبية، أنظمة برنترات وحلول Target مع دعم فني موثوق — كل ما يحتاجه مركز الأشعة في مكان واحد."
                : "Medical films, imaging consumables, printer systems and Target solutions with reliable technical support — everything your radiology center needs in one place."}
            </p>

            <div className="hero-points">
              <span>
                <CheckCircle2 size={18} />
                {isArabic ? "جودة موثوقة" : "Trusted Quality"}
              </span>

              <span>
                <CheckCircle2 size={18} />
                {isArabic ? "أداء ثابت" : "Reliable Performance"}
              </span>

              <span>
                <CheckCircle2 size={18} />
                {isArabic ? "دعم فني متخصص" : "Expert Support"}
              </span>
            </div>

            <div className="hero-actions">
              <button
                className="primary-button hero-primary"
                onClick={() => scrollTo("products")}
              >
                {isArabic ? "تصفح المنتجات" : "Explore Products"}
                <ArrowRight size={18} />
              </button>

              <button
                className="outline-button hero-outline"
                onClick={() => scrollTo("printers")}
              >
                {isArabic ? "حلول البرنترات" : "Printer Solutions"}
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="hero-mini-stats">
              <div>
                <strong>{isArabic ? "Medical Films" : "Medical Films"}</strong>
                <small>{isArabic ? "أنواع ومقاسات متعددة" : "Multiple types & sizes"}</small>
              </div>
              <div>
                <strong>{isArabic ? "Target System" : "Target System"}</strong>
                <small>{isArabic ? "حسب استهلاك المركز" : "Built around your usage"}</small>
              </div>
              <div>
                <strong>{isArabic ? "Support" : "Support"}</strong>
                <small>{isArabic ? "صيانة وخدمة فنية" : "Service & maintenance"}</small>
              </div>
            </div>
          </div>

          <div className="hero-visual hero-medical-visual">
            <div className="hero-image-frame">
              <img
                src={heroRadiology}
                alt={isArabic ? "أشعة طبية" : "Radiology medical imaging"}
              />
              <div className="hero-image-glow"></div>
            </div>

            <div className="hero-visual-badge hero-visual-badge-top">
              <ShieldCheck size={20} />
              <div>
                <strong>{isArabic ? "Medical Imaging" : "Medical Imaging"}</strong>
                <span>{isArabic ? "حلول احترافية للمراكز" : "Professional center solutions"}</span>
              </div>
            </div>

            <div className="hero-visual-badge hero-visual-badge-bottom">
              <Headphones size={20} />
              <div>
                <strong>{isArabic ? "Technical Support" : "Technical Support"}</strong>
                <span>{isArabic ? "دعم ما بعد البيع" : "Reliable after-sales support"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar premium-trust-bar">
        <TrustItem
          icon={<ShieldCheck />}
          title={isArabic ? "جودة موثوقة" : "Trusted Quality"}
          text={isArabic ? "منتجات مختارة بعناية" : "Carefully selected products"}
        />

        <TrustItem
          icon={<Headphones />}
          title={isArabic ? "دعم فني" : "Technical Support"}
          text={isArabic ? "فريق متخصص لمساعدتك" : "Specialized support team"}
        />

        <TrustItem
          icon={<Wrench />}
          title={isArabic ? "حلول Target" : "Target Solutions"}
          text={isArabic ? "أنظمة حسب استهلاك المركز" : "Plans based on center usage"}
        />

        <TrustItem
          icon={<PackageCheck />}
          title={isArabic ? "توريد سريع" : "Fast Supply"}
          text={isArabic ? "توصيل داخل مصر" : "Delivery across Egypt"}
        />
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <span className="small-title">
            {isArabic ? "منتجات RAD VISION" : "RAD VISION PRODUCTS"}
          </span>

          <h2>
            {isArabic
              ? "تسوق منتجات الطباعة الطبية"
              : "Shop Medical Imaging Products"}
          </h2>

          <p>
            {isArabic
              ? "افتح المنتج لمشاهدة التفاصيل والأسعار والاختيارات المتاحة."
              : "Open a product to view specifications, prices and available options."}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article
              className="product-card"
              key={product.id}
              onClick={() => openProduct(product)}
            >
              <div className="product-picture">
                <span className="category-badge">{product.category}</span>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                {product.priceFrom !== undefined && (
                  <div className="product-price">
                    <small>{isArabic ? "يبدأ من" : "From"}</small>
                    <strong>
                      {product.priceFrom.toLocaleString()} EGP
                    </strong>
                  </div>
                )}
                {product.requestPrice && (
                  <div className="product-price">
                    <small>{isArabic ? "السعر" : "Price"}</small>
                    <strong>{isArabic ? "عند الطلب" : "On Request"}</strong>
                  </div>
                )}

                <button>
                  {isArabic ? "عرض المنتج" : "View Product"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="printers-section" id="printers">
        <div className="section-heading">
          <span className="small-title">
            {isArabic ? "البرنترات" : "PROFESSIONAL PRINTERS"}
          </span>

          <h2>
            {isArabic
              ? "البرنترات المتاحة"
              : "Professional Medical Printers"}
          </h2>

          <p>
            {isArabic
              ? "البرنترات لا يتم شراؤها مباشرة من الموقع. اطلب عرض سعر أو نظام Target مناسب لمركزك."
              : "Printers are available through customized quotation and target-system programs."}
          </p>
        </div>

        <div className="printers-grid">
          {printers.map((printer) => (
            <article
              className="printer-card"
              key={printer.id}
              onClick={() => openPrinter(printer)}
              style={{ cursor: "pointer" }}
            >
              <div className="printer-image">
                <img src={printer.image} alt={printer.name} />
              </div>

              <div className="printer-content">
                <span>{printer.type}</span>
                <h3>{printer.name}</h3>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    openPrinter(printer);
                  }}
                >
                  {isArabic ? "عرض التفاصيل وطلب سعر" : "View Details & Request Quote"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="target-section" id="target">
        <div className="target-inner">
          <div className="target-copy">
            <span className="target-label">
              RAD VISION TARGET SYSTEM
            </span>

            <h2>
              {isArabic
                ? "نظام التارجت للبرنترات"
                : "Printer Target System"}
            </h2>

            <p>
              {isArabic
                ? "احصل على البرنتر المناسب حسب استهلاكك من الأفلام أو الورق، مع دعم وصيانة حسب العرض المتفق عليه."
                : "Get the right printer based on your film or paper consumption with a customized target program."}
            </p>

            <div className="target-features">
              <span>
                <CheckCircle2 />
                {isArabic
                  ? "أنظمة حسب الاستهلاك"
                  : "Consumption-based plans"}
              </span>

              <span>
                <CheckCircle2 />
                {isArabic
                  ? "اختيارات برنترات متعددة"
                  : "Multiple printer options"}
              </span>

              <span>
                <CheckCircle2 />
                {isArabic
                  ? "صيانة ودعم فني"
                  : "Maintenance & support"}
              </span>
            </div>

            <button
              className="white-button"
              onClick={() => scrollTo("quote")}
            >
              {isArabic ? "اطلب عرض التارجت" : "Request Target Offer"}
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="target-printers">
            <TargetPrinter image={epson869} name="Epson 869R" />
            <TargetPrinter image={xeroxC60} name="Xerox C60 / C70" />
            <TargetPrinter image={huqPrinter} name="HUQ Thermal" />
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner">
          <div>
            <span className="small-title">
              {isArabic ? "عن الشركة" : "ABOUT RAD VISION"}
            </span>

            <h2>
              {isArabic
                ? "حلول متكاملة للطباعة الطبية"
                : "Medical Imaging Solutions for Your Center"}
            </h2>
          </div>

          <p>
            {isArabic
              ? "نوفر أفلام التصوير الطبي والورق الجلوسي والبرنترات والمستلزمات مع أنظمة شراء مباشرة للمنتجات وعروض مخصصة للبرنترات."
              : "Rad Vision provides imaging films, glossy paper, printers and consumables with direct online shopping for products and customized printer quotations."}
          </p>
        </div>
      </section>

      <PrinterQuoteSection isArabic={isArabic} />
    </main>
  );
}

function TrustItem({ icon, title, text }) {
  return (
    <div className="trust-item">
      {icon}
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function TargetPrinter({ image, name }) {
  return (
    <div className="target-printer-card">
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
}

function PlasticFilmPage({
  isArabic,
  gallery,
  selectedImage,
  setSelectedImage,
  plasticSize,
  setPlasticSize,
  plasticColor,
  setPlasticColor,
  quantity,
  setQuantity,
  selectedVariant,
  addToCart,
  buyNow,
  goHome,
}) {
  const total = selectedVariant.price * quantity;

  return (
    <main className="product-page">
      <div className="product-page-container">
        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={18} />
          {isArabic ? "العودة للمنتجات" : "Back to Products"}
        </button>

        <div className="product-detail-grid">
          <ProductGallery
            gallery={gallery}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            alt="Plastic Film"
          />

          <section className="product-buy-panel">
            <span className="product-detail-category">
              {isArabic ? "أفلام طبية" : "MEDICAL IMAGING FILM"}
            </span>

            <h1>
              {isArabic
                ? "Plastic Film للأشعة"
                : "Plastic Medical Imaging Film"}
            </h1>

            <p className="product-detail-description">
              {isArabic
                ? "أفلام Inkjet للطباعة الطبية، متوفرة باللون الأزرق والأبيض وبمجموعة كبيرة من المقاسات لتناسب احتياجات مراكز الأشعة."
                : "Premium inkjet medical imaging film available in Blue and White with a wide range of sizes for radiology centers."}
            </p>

            <ProductFeature
              text={
                isArabic
                  ? "100 ورقة في العبوة"
                  : "100 sheets per box"
              }
            />

            <ProductFeature
              text={
                isArabic
                  ? "Blue & White بنفس السعر"
                  : "Blue & White at the same price"
              }
            />

            <div className="selector-section">
              <div className="selector-title">
                <strong>
                  {isArabic ? "اختر المقاس" : "Choose Size"}
                </strong>
                <span>{selectedVariant.dimensions}</span>
              </div>

              <div className="size-grid">
                {plasticFilmVariants.map((variant) => (
                  <button
                    key={variant.size}
                    className={
                      plasticSize === variant.size
                        ? "size-option active"
                        : "size-option"
                    }
                    onClick={() => setPlasticSize(variant.size)}
                  >
                    <strong>{variant.size}</strong>
                    <span>{variant.price.toLocaleString()} EGP</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="selector-section">
              <strong className="selector-label">
                {isArabic ? "اختر اللون" : "Choose Color"}
              </strong>

              <div className="color-options">
                <button
                  className={
                    plasticColor === "Blue"
                      ? "color-option blue active"
                      : "color-option blue"
                  }
                  onClick={() => {
                    setPlasticColor("Blue");
                    setSelectedImage(1);
                  }}
                >
                  <span className="color-dot"></span>

                  <div>
                    <strong>Blue</strong>
                    <small>
                      {isArabic ? "فيلم أزرق" : "Blue Base Film"}
                    </small>
                  </div>

                  {plasticColor === "Blue" && <CheckCircle2 />}
                </button>

                <button
                  className={
                    plasticColor === "White"
                      ? "color-option white active"
                      : "color-option white"
                  }
                  onClick={() => {
                    setPlasticColor("White");
                    setSelectedImage(2);
                  }}
                >
                  <span className="color-dot"></span>

                  <div>
                    <strong>White</strong>
                    <small>
                      {isArabic ? "فيلم أبيض" : "White Film"}
                    </small>
                  </div>

                  {plasticColor === "White" && <CheckCircle2 />}
                </button>
              </div>
            </div>

            <PurchaseArea
              isArabic={isArabic}
              quantity={quantity}
              setQuantity={setQuantity}
              total={total}
              addToCart={addToCart}
              buyNow={buyNow}
            />

            <div className="product-note">
              {isArabic
                ? "سيتم حساب إجمالي الطلب والشحن في صفحة Checkout."
                : "Order total and delivery details will be confirmed during checkout."}
            </div>
          </section>
        </div>

        <section className="product-description-section">
          <h2>
            {isArabic ? "تفاصيل المنتج" : "Product Details"}
          </h2>

          <div className="product-specifications">
            <SpecCard
              label={isArabic ? "النوع" : "Type"}
              value="Inkjet Medical Imaging Film"
            />
            <SpecCard
              label={isArabic ? "عدد الأوراق" : "Sheets"}
              value="100 Sheets"
            />
            <SpecCard
              label={isArabic ? "الألوان" : "Colors"}
              value="Blue / White"
            />
            <SpecCard
              label={isArabic ? "المقاسات" : "Sizes"}
              value="A3, A4, 8×10, 11×14, A3+, B4, 10×12"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function GlossyPaperPage({
  isArabic,
  gallery,
  selectedImage,
  setSelectedImage,
  glossySize,
  setGlossySize,
  glossyWeight,
  setGlossyWeight,
  quantity,
  setQuantity,
  selectedVariant,
  addToCart,
  buyNow,
  goHome,
}) {
  const total = selectedVariant.price * quantity;

  const dimensions =
    glossySize === "A3"
      ? "29.7 × 42 cm"
      : "21 × 29.7 cm";

  return (
    <main className="product-page">
      <div className="product-page-container">
        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={18} />
          {isArabic ? "العودة للمنتجات" : "Back to Products"}
        </button>

        <div className="product-detail-grid">
          <ProductGallery
            gallery={gallery}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            alt="NOUR Glossy Paper"
          />

          <section className="product-buy-panel">
            <span className="product-detail-category">
              {isArabic ? "ورق طباعة جلوسي" : "HIGH GLOSSY PHOTO PAPER"}
            </span>

            <h1>NOUR High Glossy Photo Paper</h1>

            <p className="product-detail-description">
              {isArabic
                ? "ورق جلوسي عالي الجودة للطباعة باستخدام Inkjet Printers، متوفر بمقاسات A3 وA4 وبأوزان 180 و200 و230 جرام."
                : "Premium high glossy photo paper for inkjet printers, available in A3 and A4 sizes with 180, 200 and 230 GSM options."}
            </p>

            <ProductFeature
              text={
                isArabic
                  ? "100 ورقة في الباكت"
                  : "100 sheets per pack"
              }
            />

            <ProductFeature
              text={
                isArabic
                  ? "متوفر A3 و A4"
                  : "Available in A3 & A4"
              }
            />

            <div className="selector-section">
              <div className="selector-title">
                <strong>
                  {isArabic ? "اختر المقاس" : "Choose Size"}
                </strong>
                <span>{dimensions}</span>
              </div>

              <div className="size-grid">
                <button
                  className={
                    glossySize === "A3"
                      ? "size-option active"
                      : "size-option"
                  }
                  onClick={() => {
                    setGlossySize("A3");
                    setSelectedImage(0);
                  }}
                >
                  <strong>A3</strong>
                  <span>29.7 × 42 cm</span>
                </button>

                <button
                  className={
                    glossySize === "A4"
                      ? "size-option active"
                      : "size-option"
                  }
                  onClick={() => {
                    setGlossySize("A4");
                    setSelectedImage(1);
                  }}
                >
                  <strong>A4</strong>
                  <span>21 × 29.7 cm</span>
                </button>
              </div>
            </div>

            <div className="selector-section">
              <strong className="selector-label">
                {isArabic ? "اختر الوزن" : "Choose Weight"}
              </strong>

              <div className="size-grid" style={{ marginTop: "12px" }}>
                {["180 GSM", "200 GSM", "230 GSM"].map((weight) => (
                  <button
                    key={weight}
                    className={
                      glossyWeight === weight
                        ? "size-option active"
                        : "size-option"
                    }
                    onClick={() => setGlossyWeight(weight)}
                  >
                    <strong>{weight}</strong>
                    <span>
                      {isArabic ? "100 ورقة" : "100 sheets"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <PurchaseArea
              isArabic={isArabic}
              quantity={quantity}
              setQuantity={setQuantity}
              total={total}
              addToCart={addToCart}
              buyNow={buyNow}
            />

            <div className="product-note">
              {isArabic
                ? "الأسعار الحالية مؤقتًا 0 جنيه وسيتم تحديثها لاحقًا."
                : "Prices are currently set to 0 EGP and will be updated later."}
            </div>
          </section>
        </div>

        <section className="product-description-section">
          <h2>
            {isArabic ? "تفاصيل المنتج" : "Product Details"}
          </h2>

          <div className="product-specifications">
            <SpecCard
              label={isArabic ? "المنتج" : "Product"}
              value="High Glossy Photo Paper"
            />
            <SpecCard
              label={isArabic ? "عدد الأوراق" : "Pack"}
              value="100 Sheets"
            />
            <SpecCard
              label={isArabic ? "المقاسات" : "Sizes"}
              value="A3 / A4"
            />
            <SpecCard
              label={isArabic ? "الأوزان" : "Weights"}
              value="180 / 200 / 230 GSM"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function CatalogProductPage({
  isArabic, product, productId, selectedImage, setSelectedImage,
  selectedSize, setSelectedSize, quantity, setQuantity, goHome,
  addSimpleProductToCart, buySimpleProductNow,
}) {
  const variant = product.variants.find((v) => v.size === selectedSize) || product.variants[0];
  const cartItem = {
    productId,
    name: product.name,
    image: product.gallery[0],
    size: variant.size,
    price: variant.price,
    details: product.features.join(" • "),
  };

  return (
    <main className="product-page">
      <div className="product-page-container">
        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={18} />
          {isArabic ? "العودة للمنتجات" : "Back to Products"}
        </button>

        <div className="product-detail-grid">
          <ProductGallery gallery={product.gallery} selectedImage={selectedImage}
            setSelectedImage={setSelectedImage} alt={product.name} />

          <section className="product-buy-panel">
            <span className="product-detail-category">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-detail-description">
              {isArabic
                ? "منتج احترافي لمراكز الأشعة، متاح للشراء المباشر من RAD VISION."
                : "Professional product for radiology centers, available for direct purchase from RAD VISION."}
            </p>

            {product.features.map((feature) => <ProductFeature key={feature} text={feature} />)}

            {product.variants.length > 1 && (
              <div className="selector-section">
                <strong className="selector-label">{isArabic ? "اختر المقاس" : "Choose Size"}</strong>
                <div className="size-grid" style={{ marginTop: "12px" }}>
                  {product.variants.map((v) => (
                    <button key={v.size}
                      className={variant.size === v.size ? "size-option active" : "size-option"}
                      onClick={() => setSelectedSize(v.size)}>
                      <strong>{v.size}</strong>
                      <span>{v.price.toLocaleString()} EGP</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <PurchaseArea isArabic={isArabic} quantity={quantity} setQuantity={setQuantity}
              total={variant.price * quantity}
              addToCart={() => addSimpleProductToCart(cartItem)}
              buyNow={() => buySimpleProductNow(cartItem)} />
          </section>
        </div>

        <section className="product-description-section">
          <h2>{isArabic ? "تفاصيل المنتج" : "Product Details"}</h2>
          <div className="product-specifications">
            <SpecCard label={isArabic ? "المنتج" : "Product"} value={product.name} />
            <SpecCard label={isArabic ? "التفاصيل" : "Details"} value={product.details[0]} />
            <SpecCard label={isArabic ? "العبوة" : "Packaging"} value={product.details[1]} />
            <SpecCard label={isArabic ? "معلومات إضافية" : "Additional Info"} value={product.details.slice(2).join(" • ")} />
          </div>
        </section>
      </div>
    </main>
  );
}

function SimpleProductPage({ isArabic, productId, gallery, selectedImage, setSelectedImage, quantity, setQuantity, size, setSize, variants, selectedVariant, goHome, addSimpleProductToCart, buySimpleProductNow }) {
  const isLaser = productId === "fuji-laser";
  const isDiht = productId === "fuji-diht";
  const isSony = productId === "sony-upp";
  const name = isLaser ? "FUJIFILM DI-HL Laser Film" : isDiht ? "FUJIFILM DI-HT Thermal Film" : "Sony UPP-110S";
  const cartItem = { productId, name, image: gallery[0], size, price: selectedVariant.price,
    details: isSony ? "Type I (Normal) • Original Japanese" : "Medical Dry Imaging Film" };

  return <main className="product-page"><div className="product-page-container">
    <button className="back-button" onClick={goHome}><ArrowLeft size={18}/>{isArabic ? "العودة للمنتجات" : "Back to Products"}</button>
    <div className="product-detail-grid">
      <ProductGallery gallery={gallery} selectedImage={selectedImage} setSelectedImage={setSelectedImage} alt={name}/>
      <section className="product-buy-panel">
        <span className="product-detail-category">{isSony ? (isArabic ? "مستلزمات السونار" : "ULTRASOUND PRINT MEDIA") : (isArabic ? "أفلام فوجي الطبية" : "FUJIFILM MEDICAL IMAGING")}</span>
        <h1>{name}</h1>
        <p className="product-detail-description">{isLaser ? (isArabic ? "أفلام فوجي ليزر للتصوير والطباعة الطبية." : "FUJIFILM laser medical imaging film.") : isDiht ? (isArabic ? "أفلام FUJIFILM DI-HT Dry Imaging Film بقاعدة زرقاء." : "FUJIFILM DI-HT blue-base dry medical imaging film.") : (isArabic ? "بكر سونار Sony UPP-110S ياباني أصلي للطباعة الحرارية." : "Original Japanese Sony UPP-110S thermal ultrasound print media.")}</p>
        {isLaser && <><ProductFeature text={isArabic ? "150 فيلم في العلبة" : "150 films per box"}/><ProductFeature text={isArabic ? "الكرتونة 5 علب أفلام" : "Carton: 5 film boxes"}/></>}
        {isDiht && <><ProductFeature text={isArabic ? "100 فيلم في العلبة" : "100 films per box"}/><ProductFeature text={isArabic ? "الكرتونة 5 علب أفلام" : "Carton: 5 film boxes"}/></>}
        {isSony && <><ProductFeature text={isArabic ? "ياباني أصلي" : "Original Japanese Product"}/><ProductFeature text="110mm × 20m • Type I (Normal)"/></>}
        {!isSony && <div className="selector-section"><strong className="selector-label">{isArabic ? "اختر المقاس" : "Choose Size"}</strong><div className="size-grid" style={{marginTop:"12px"}}>
          {variants.map(v=><button key={v.size} className={size===v.size?"size-option active":"size-option"} onClick={()=>setSize(v.size)}><strong>{v.size}</strong><span>{v.price.toLocaleString()} EGP</span></button>)}
        </div></div>}
        <PurchaseArea isArabic={isArabic} quantity={quantity} setQuantity={setQuantity} total={selectedVariant.price*quantity}
          addToCart={()=>addSimpleProductToCart(cartItem)} buyNow={()=>buySimpleProductNow(cartItem)}/>
      </section>
    </div>
    <section className="product-description-section"><h2>{isArabic?"تفاصيل المنتج":"Product Details"}</h2><div className="product-specifications">
      <SpecCard label={isArabic?"المنتج":"Product"} value={name}/>
      <SpecCard label={isArabic?"المقاسات":"Sizes"} value={isSony?"110mm × 20m":variants.map(v=>v.size).join(" / ")}/>
      <SpecCard label={isArabic?"العبوة":"Box"} value={isLaser?"150 Films":isDiht?"100 Films":"1 Roll"}/>
      <SpecCard label={isArabic?"معلومة إضافية":"Extra"} value={isSony?"Original Japanese • Type I (Normal)":"Carton: 5 Boxes"}/>
    </div></section>
  </div></main>;
}

function HuqFilmPage({ isArabic, gallery, selectedImage, setSelectedImage, size, setSize, goHome }) {
  const [showForm,setShowForm]=useState(false), [centerName,setCenterName]=useState(""), [contactName,setContactName]=useState(""), [phone,setPhone]=useState("");
  const sendRequest=e=>{e.preventDefault(); const m=isArabic?`طلب سعر HUQ Thermal Film\nالمقاس: ${size}\nاسم المركز: ${centerName}\nالاسم: ${contactName}\nرقم الهاتف: ${phone}`:`HUQ Thermal Film price request\nSize: ${size}\nCenter: ${centerName}\nName: ${contactName}\nPhone: ${phone}`; window.open(`https://wa.me/201060004999?text=${encodeURIComponent(m)}`,"_blank");};
  return <main className="product-page"><div className="product-page-container">
    <button className="back-button" onClick={goHome}><ArrowLeft size={18}/>{isArabic?"العودة للمنتجات":"Back to Products"}</button>
    <div className="product-detail-grid"><ProductGallery gallery={gallery} selectedImage={selectedImage} setSelectedImage={setSelectedImage} alt="HUQ Thermal Film"/>
    <section className="product-buy-panel"><span className="product-detail-category">{isArabic?"أفلام ثيرمال طبية":"THERMAL MEDICAL FILM"}</span><h1>HUQ Thermal Film</h1>
    <p className="product-detail-description">{isArabic?"السعر غير معروض على الموقع ويتم إرساله بعد تسجيل بيانات المركز.":"Pricing is provided after submitting your center details."}</p>
    <ProductFeature text={isArabic?"100 فيلم في العلبة":"100 films per box"}/><ProductFeature text={isArabic?"الكرتونة 5 علب أفلام":"Carton: 5 film boxes"}/>
    <div className="selector-section"><strong className="selector-label">{isArabic?"اختر المقاس":"Choose Size"}</strong><div className="size-grid" style={{marginTop:"12px"}}>{huqFilmSizes.map(x=><button key={x} className={size===x?"size-option active":"size-option"} onClick={()=>setSize(x)}><strong>{x}</strong><span>{isArabic?"اطلب السعر":"Get Price"}</span></button>)}</div></div>
    {!showForm?<button className="buy-now-button" onClick={()=>setShowForm(true)}><MessageCircle size={19}/>{isArabic?"اطلب السعر":"Get Price"}</button>:
    <form className="checkout-form" onSubmit={sendRequest} style={{marginTop:"22px"}}>
      <div className="form-field"><label>{isArabic?"اسم المركز":"Center Name"}</label><input value={centerName} onChange={e=>setCenterName(e.target.value)} required/></div>
      <div className="form-field"><label>{isArabic?"الاسم":"Contact Name"}</label><input value={contactName} onChange={e=>setContactName(e.target.value)} required/></div>
      <div className="form-field"><label>{isArabic?"رقم التليفون":"Phone Number"}</label><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required/></div>
      <button className="place-order-button" type="submit"><MessageCircle size={19}/>{isArabic?"إرسال الطلب على واتساب":"Send Request on WhatsApp"}</button>
    </form>}</section></div>
    <section className="product-description-section"><h2>{isArabic?"تفاصيل المنتج":"Product Details"}</h2><div className="product-specifications">
      <SpecCard label={isArabic?"المقاسات":"Sizes"} value="8×10 / 11×14 / 14×17"/><SpecCard label={isArabic?"العلبة":"Box"} value="100 Films"/>
      <SpecCard label={isArabic?"الكرتونة":"Carton"} value="5 Boxes"/><SpecCard label={isArabic?"السعر":"Price"} value={isArabic?"عند الطلب":"On Request"}/>
    </div></section>
  </div></main>;
}

function PrinterDetailPage({
  isArabic,
  printer,
  selectedImage,
  setSelectedImage,
  goHome,
}) {
  const [selectedProgram, setSelectedProgram] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [centerName, setCenterName] = useState("");
  const [phone, setPhone] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [address, setAddress] = useState("");

  const isTargetSelected =
    selectedProgram === "نظام Target" || selectedProgram === "Target System";

  const requestQuote = () => {
    if (!selectedProgram) {
      alert(
        isArabic
          ? "من فضلك اختر نظام الحصول على البرنتر أولاً."
          : "Please choose how you would like to get the printer first."
      );
      return;
    }

    if (isTargetSelected) {
      if (!targetAmount || !centerName || !phone || !governorate || !address) {
        alert(
          isArabic
            ? "من فضلك أكمل بيانات نظام التارجت بالكامل قبل إرسال الطلب."
            : "Please complete all Target System details before sending the request."
        );
        return;
      }
    }

    const message = isTargetSelected
      ? (
          isArabic
            ? `مرحباً RAD VISION، أريد عرض سعر بنظام Target للبرنتر: ${printer.name}

اسم المركز: ${centerName}
رقم الهاتف: ${phone}
المحافظة: ${governorate}
العنوان: ${address}
التارجت الشهري المطلوب: ${targetAmount}`
            : `Hello RAD VISION, I would like a Target System quotation for: ${printer.name}

Center Name: ${centerName}
Phone: ${phone}
Governorate: ${governorate}
Address: ${address}
Requested Monthly Target: ${targetAmount}`
        )
      : (
          isArabic
            ? `مرحباً RAD VISION، أريد عرض سعر للبرنتر: ${printer.name}
النظام المطلوب: ${selectedProgram}`
            : `Hello RAD VISION, I would like a quotation for: ${printer.name}
Requested option: ${selectedProgram}`
        );

    window.open(
      `https://wa.me/201060004999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <main className="product-page">
      <div className="product-page-container">
        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={18} />
          {isArabic ? "العودة للبرنترات" : "Back to Printers"}
        </button>

        <div className="product-detail-grid">
          <ProductGallery
            gallery={printer.gallery}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            alt={printer.name}
          />

          <section className="product-buy-panel">
            <span className="product-detail-category">
              {isArabic ? "RAD VISION • طابعات الأشعة" : "RAD VISION • MEDICAL PRINTERS"}
            </span>

            <h1>{printer.name}</h1>

            <p className="product-detail-description">
              {printer.type}
            </p>

            <div className="selector-section">
              <strong className="selector-label">
                {isArabic ? "المتاح حاليًا" : "Currently Available"}
              </strong>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "14px",
                marginBottom: "6px"
              }}>
                {printer.availability.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "999px",
                      background: "#eef8f2",
                      color: "#079447",
                      fontWeight: "700",
                      fontSize: "14px",
                      border: "1px solid #ccebd9"
                    }}
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="selector-section">
              <strong className="selector-label">
                {isArabic ? "المواصفات والمميزات" : "Specifications & Features"}
              </strong>

              <div style={{ marginTop: "14px" }}>
                {printer.features.map((feature) => (
                  <ProductFeature key={feature} text={feature} />
                ))}
              </div>
            </div>

            <div className="selector-section">
              <strong className="selector-label">
                {isArabic
                  ? "اختر طريقة الحصول على البرنتر"
                  : "Choose how you would like to get the printer"}
              </strong>

              <div className="size-grid" style={{ marginTop: "12px" }}>
                {printer.quoteOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      selectedProgram === option
                        ? "size-option active"
                        : "size-option"
                    }
                    onClick={() => {
                      setSelectedProgram(option);
                      if (option !== "نظام Target" && option !== "Target System") {
                        setTargetAmount("");
                      }
                    }}
                  >
                    <strong>{option}</strong>
                    <span>
                      {isArabic ? "اختر هذا النظام" : "Select this option"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {isTargetSelected && (
              <div className="selector-section">
                <strong className="selector-label">
                  {isArabic ? "بيانات طلب نظام التارجت" : "Target System Request Details"}
                </strong>

                <form
                  className="checkout-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    requestQuote();
                  }}
                  style={{ marginTop: "16px" }}
                >
                  <div className="form-field">
                    <label>
                      {isArabic ? "التارجت الشهري المطلوب" : "Requested Monthly Target"}
                    </label>
                    <input
                      type="text"
                      value={targetAmount}
                      onChange={(event) => setTargetAmount(event.target.value)}
                      placeholder={
                        isArabic
                          ? "مثال: 2000 ورقة شهريًا أو 500 فيلم شهريًا"
                          : "Example: 2,000 sheets/month or 500 films/month"
                      }
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>{isArabic ? "اسم المركز" : "Center Name"}</label>
                    <input
                      type="text"
                      value={centerName}
                      onChange={(event) => setCenterName(event.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>{isArabic ? "رقم التليفون" : "Phone Number"}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>{isArabic ? "المحافظة" : "Governorate"}</label>
                      <input
                        type="text"
                        value={governorate}
                        onChange={(event) => setGovernorate(event.target.value)}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label>{isArabic ? "العنوان" : "Address"}</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}

            <button
              className="buy-now-button"
              onClick={requestQuote}
              style={{
                width: "100%",
                marginTop: "22px",
                opacity: selectedProgram ? 1 : 0.65,
              }}
            >
              <MessageCircle size={20} />
              {isArabic ? "إرسال طلب عرض السعر على واتساب" : "Send Quote Request on WhatsApp"}
            </button>

            <div className="product-note">
              {isArabic
                ? isTargetSelected
                  ? "بعد إدخال التارجت وبيانات المركز سيتم إرسال كل التفاصيل مع اسم البرنتر مباشرة على واتساب."
                  : selectedProgram
                    ? `سيتم إرسال طلب عرض السعر على واتساب بالنظام المختار: ${selectedProgram}.`
                    : "اختر أولاً النظام المناسب حسب الخيارات المتاحة لهذا البرنتر."
                : isTargetSelected
                  ? "Your printer, monthly target and center details will be included in the WhatsApp request."
                  : selectedProgram
                    ? `Your WhatsApp quotation request will include: ${selectedProgram}.`
                    : "Choose one of the available options first."}
            </div>
          </section>
        </div>

        <section className="product-description-section">
          <h2>
            {isArabic ? "تفاصيل البرنتر" : "Printer Details"}
          </h2>

          <div className="product-specifications">
            <SpecCard
              label={isArabic ? "الموديل" : "Model"}
              value={printer.name}
            />
            <SpecCard
              label={isArabic ? "المقاسات" : "Sizes"}
              value={printer.sizes.join(" • ")}
            />
            <SpecCard
              label={isArabic ? "الخامة / نوع الطباعة" : "Media"}
              value={printer.media}
            />
            <SpecCard
              label={isArabic ? "أنظمة الإتاحة" : "Available Programs"}
              value={printer.systems}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function ProductGallery({
  gallery,
  selectedImage,
  setSelectedImage,
  alt,
}) {
  return (
    <section className="product-gallery">
      <div className="main-gallery-image">
        <img src={gallery[selectedImage]} alt={alt} />

        <button
          className="gallery-arrow gallery-left"
          onClick={() =>
            setSelectedImage(
              selectedImage === 0
                ? gallery.length - 1
                : selectedImage - 1
            )
          }
        >
          <ChevronLeft />
        </button>

        <button
          className="gallery-arrow gallery-right"
          onClick={() =>
            setSelectedImage(
              selectedImage === gallery.length - 1
                ? 0
                : selectedImage + 1
            )
          }
        >
          <ChevronRight />
        </button>
      </div>

      <div className="gallery-thumbnails">
        {gallery.map((image, index) => (
          <button
            key={index}
            className={
              selectedImage === index
                ? "gallery-thumb active"
                : "gallery-thumb"
            }
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`${alt} ${index + 1}`} />
          </button>
        ))}
      </div>
    </section>
  );
}

function ProductFeature({ text }) {
  return (
    <div className="product-feature-line">
      <Check />
      <span>{text}</span>
    </div>
  );
}

function PurchaseArea({
  isArabic,
  quantity,
  setQuantity,
  total,
  addToCart,
  buyNow,
}) {
  return (
    <>
      <div className="purchase-row">
        <div className="quantity-picker">
          <button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
          >
            <Minus size={17} />
          </button>

          <strong>{quantity}</strong>

          <button onClick={() => setQuantity(quantity + 1)}>
            <Plus size={17} />
          </button>
        </div>

        <div className="current-price">
          <small>{isArabic ? "الإجمالي" : "Total"}</small>
          <strong>{total.toLocaleString()} EGP</strong>
        </div>
      </div>

      <div className="product-action-buttons">
        <button className="add-cart-button" onClick={addToCart}>
          <ShoppingCart size={19} />
          {isArabic ? "إضافة للسلة" : "Add to Cart"}
        </button>

        <button className="buy-now-button" onClick={buyNow}>
          {isArabic ? "شراء الآن" : "Buy Now"}
        </button>
      </div>
    </>
  );
}

function SpecCard({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CartPage({
  isArabic,
  cart,
  cartTotal,
  changeCartQuantity,
  removeCartItem,
  setPage,
  goHome,
}) {
  return (
    <main className="cart-page">
      <div className="cart-container">
        <button className="back-button" onClick={goHome}>
          <ArrowLeft />
          {isArabic ? "متابعة التسوق" : "Continue Shopping"}
        </button>

        <div className="cart-heading">
          <div>
            <span className="small-title">RAD VISION CART</span>
            <h1>
              {isArabic ? "سلة المشتريات" : "Shopping Cart"}
            </h1>
          </div>

          <ShoppingBag size={34} />
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart size={60} />

            <h2>
              {isArabic ? "السلة فارغة" : "Your cart is empty"}
            </h2>

            <button onClick={goHome}>
              {isArabic ? "تصفح المنتجات" : "Browse Products"}
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <span>
                      {item.size}{item.dimensions ? ` • ${item.dimensions}` : ""}
                    </span>

                    {item.color && (
                      <span>
                        {isArabic ? "اللون:" : "Color:"}{" "}
                        {item.color}
                      </span>
                    )}

                    {item.weight && (
                      <span>
                        {isArabic ? "الوزن:" : "Weight:"}{" "}
                        {item.weight}
                      </span>
                    )}

                    <strong>
                      {item.price.toLocaleString()} EGP
                    </strong>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-picker small">
                      <button
                        onClick={() =>
                          changeCartQuantity(item.id, -1)
                        }
                      >
                        <Minus />
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        onClick={() =>
                          changeCartQuantity(item.id, 1)
                        }
                      >
                        <Plus />
                      </button>
                    </div>

                    <button
                      className="remove-item"
                      onClick={() => removeCartItem(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>
                {isArabic ? "ملخص الطلب" : "Order Summary"}
              </h2>

              <div>
                <span>
                  {isArabic ? "المنتجات" : "Products"}
                </span>
                <strong>
                  {cartTotal.toLocaleString()} EGP
                </strong>
              </div>

              <div>
                <span>{isArabic ? "الشحن" : "Delivery"}</span>
                <strong>
                  {isArabic ? "يحدد لاحقًا" : "Calculated later"}
                </strong>
              </div>

              <div className="cart-total">
                <span>{isArabic ? "الإجمالي" : "Total"}</span>
                <strong>
                  {cartTotal.toLocaleString()} EGP
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={() => {
                  setPage("checkout");
                  window.scrollTo(0, 0);
                }}
              >
                {isArabic ? "إتمام الطلب" : "Proceed to Checkout"}
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

function CheckoutPage({
  isArabic,
  cart,
  cartTotal,
  setPage,
}) {
  const [centerName, setCenterName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const sendOrderToWhatsApp = (e) => {
    e.preventDefault();

    if (!cart.length) {
      alert(isArabic ? "السلة فارغة." : "Your cart is empty.");
      return;
    }

    const orderLines = cart.map((item, index) => {
      const extras = [item.size, item.color, item.weight, item.dimensions]
        .filter(Boolean)
        .join(" • ");
      const lineTotal = (item.price * item.quantity).toLocaleString();

      return `${index + 1}. ${item.name}\n${extras ? `${extras}\n` : ""}${isArabic ? "الكمية" : "Qty"}: ${item.quantity}\n${isArabic ? "السعر" : "Total"}: ${lineTotal} EGP`;
    }).join("\n\n");

    const message = isArabic
      ? `مرحباً RAD VISION، أريد تأكيد الطلب التالي:\n\n${orderLines}\n\nالإجمالي: ${cartTotal.toLocaleString()} EGP\n\nبيانات العميل:\nاسم المركز: ${centerName}\nاسم المسؤول: ${contactName}\nرقم الهاتف: ${phone}\nالمحافظة: ${governorate}\nالعنوان: ${address}${notes ? `\nملاحظات: ${notes}` : ""}`
      : `Hello RAD VISION, I would like to confirm the following order:\n\n${orderLines}\n\nTotal: ${cartTotal.toLocaleString()} EGP\n\nCustomer Details:\nCenter Name: ${centerName}\nContact Name: ${contactName}\nPhone: ${phone}\nGovernorate: ${governorate}\nAddress: ${address}${notes ? `\nNotes: ${notes}` : ""}`;

    window.open(
      `https://wa.me/201060004999?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <button className="back-button" onClick={() => setPage("cart")}>
          <ArrowLeft />
          {isArabic ? "العودة للسلة" : "Back to Cart"}
        </button>

        <div className="checkout-grid">
          <section>
            <span className="small-title">CHECKOUT</span>
            <h1>{isArabic ? "بيانات الطلب" : "Checkout"}</h1>

            <form className="checkout-form" onSubmit={sendOrderToWhatsApp}>
              <div className="form-row">
                <div className="form-field">
                  <label>{isArabic ? "اسم المركز" : "Center Name"}</label>
                  <input value={centerName} onChange={(e) => setCenterName(e.target.value)} required />
                </div>
                <div className="form-field">
                  <label>{isArabic ? "اسم المسؤول" : "Contact Name"}</label>
                  <input value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>{isArabic ? "رقم الهاتف" : "Phone Number"}</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="form-field">
                  <label>{isArabic ? "المحافظة" : "Governorate"}</label>
                  <input value={governorate} onChange={(e) => setGovernorate(e.target.value)} required />
                </div>
              </div>

              <div className="form-field">
                <label>{isArabic ? "العنوان" : "Delivery Address"}</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} required />
              </div>

              <div className="form-field">
                <label>{isArabic ? "ملاحظات" : "Notes"}</label>
                <textarea
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isArabic ? "أي ملاحظات على الطلب..." : "Any order notes..."}
                />
              </div>

              <button className="place-order-button" type="submit">
                <MessageCircle />
                {isArabic ? "تأكيد الطلب على واتساب" : "Confirm Order on WhatsApp"}
              </button>
            </form>
          </section>

          <aside className="checkout-summary">
            <h2>{isArabic ? "طلبك" : "Your Order"}</h2>
            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>
                    {item.size}
                    {item.color ? ` • ${item.color}` : ""}
                    {item.weight ? ` • ${item.weight}` : ""}
                    {" × "}{item.quantity}
                  </span>
                </div>
                <b>{(item.price * item.quantity).toLocaleString()} EGP</b>
              </div>
            ))}
            <div className="checkout-total">
              <span>{isArabic ? "الإجمالي" : "Total"}</span>
              <strong>{cartTotal.toLocaleString()} EGP</strong>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function PrinterQuoteSection({ isArabic }) {
  return (
    <section className="quote-section" id="quote">
      <div className="quote-container">
        <div className="quote-intro">
          <span className="small-title">
            {isArabic ? "عروض البرنترات" : "PRINTER QUOTATION"}
          </span>

          <h2>
            {isArabic
              ? "اطلب عرض سعر للبرنتر"
              : "Request a Printer Quote"}
          </h2>

          <p>
            {isArabic
              ? "الفورم ده مخصص للبرنترات ونظام التارجت فقط. المنتجات الأخرى يتم شراؤها مباشرة من الموقع."
              : "This form is exclusively for printers and target-system quotations. Other products can be purchased directly online."}
          </p>
        </div>

        <form
          className="quote-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-row">
            <div className="form-field">
              <label>
                {isArabic ? "اسم المركز" : "Center Name"}
              </label>
              <input type="text" required />
            </div>

            <div className="form-field">
              <label>
                {isArabic ? "المحافظة" : "Governorate"}
              </label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-field">
            <label>{isArabic ? "العنوان" : "Address"}</label>
            <input type="text" required />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>
                {isArabic ? "رقم الهاتف" : "Phone Number"}
              </label>
              <input type="tel" required />
            </div>

            <div className="form-field">
              <label>
                {isArabic ? "البرنتر / النظام" : "Printer / Program"}
              </label>

              <select defaultValue="" required>
                <option value="" disabled>
                  {isArabic ? "اختر" : "Select"}
                </option>

                <option>Epson 869R</option>
                <option>HUQ Thermal Printer</option>
                <option>Xerox C60 / C70</option>
                <option>Xerox 7835 / 7845 / 7855</option>
                <option>Target System</option>
              </select>
            </div>
          </div>

          <button className="submit-button" type="submit">
            <MessageCircle size={20} />
            {isArabic
              ? "إرسال طلب عرض السعر"
              : "Send Printer Quote Request"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ logo, isArabic }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={logo} alt="Rad Vision" />

        <p>
          {isArabic
            ? "حلول متكاملة للطباعة والتصوير الطبي."
            : "Complete medical imaging and printing solutions."}
        </p>

        <span>© 2026 RAD VISION. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default App;