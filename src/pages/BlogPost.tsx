
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Book, Leaf, Calendar, ChevronLeft } from 'lucide-react';

// This is sample data. In a real application, you would fetch this data from a backend/CMS
const blogPosts = [
  {
    id: 1,
    slug: 'how-esim-technology-works',
    title: {
      en: 'How eSIM Technology Works',
      fr: 'Comment fonctionne la technologie eSIM',
      ar: 'كيف تعمل تقنية eSIM'
    },
    content: {
      en: `
        <p>eSIM (embedded SIM) technology represents a significant advancement in mobile connectivity, particularly for travelers. Unlike traditional physical SIM cards that need to be inserted and removed from devices, eSIMs are built directly into your device's hardware.</p>
        
        <h2>What is an eSIM?</h2>
        
        <p>An eSIM is a digital SIM that allows you to activate a cellular plan from your carrier without having to use a physical SIM card. This technology is becoming increasingly common in newer smartphones, tablets, smartwatches, and laptops.</p>
        
        <h2>How eSIMs Work</h2>
        
        <p>The eSIM is essentially a small chip soldered directly to your device's motherboard. Instead of physically swapping SIM cards, you can download and activate different eSIM profiles remotely. Here's how the process works:</p>
        
        <ol>
          <li><strong>Profile Download:</strong> You purchase an eSIM plan from a provider like ecoESIM, receiving a QR code.</li>
          <li><strong>Activation:</strong> Scan the QR code with your device, which downloads and installs the eSIM profile.</li>
          <li><strong>Configuration:</strong> Once installed, you can enable the eSIM profile and configure settings like data roaming.</li>
          <li><strong>Usage:</strong> The eSIM now functions just like a physical SIM card, connecting you to the designated network.</li>
        </ol>
        
        <h2>Benefits for Travelers</h2>
        
        <p>For frequent travelers, eSIMs offer significant advantages:</p>
        
        <ul>
          <li><strong>Multiple Profiles:</strong> Store multiple eSIM profiles on a single device, easily switching between them.</li>
          <li><strong>Remote Setup:</strong> Purchase and set up an eSIM for your destination before you even depart.</li>
          <li><strong>Dual SIM Functionality:</strong> Keep your home SIM active while using a local eSIM for data.</li>
          <li><strong>No Physical Swapping:</strong> Eliminate the need to handle tiny SIM cards and risk losing them.</li>
          <li><strong>Environmentally Friendly:</strong> Reduce plastic waste from traditional SIM cards and packaging.</li>
        </ul>
        
        <h2>Device Compatibility</h2>
        
        <p>eSIM technology is supported by many recent devices, including:</p>
        
        <ul>
          <li>iPhone XS and newer models</li>
          <li>Google Pixel 2 and newer models</li>
          <li>Samsung Galaxy S20, Note 20, and newer models</li>
          <li>iPad Pro, iPad Air, and iPad (7th generation and newer)</li>
          <li>Apple Watch Series 3 and newer</li>
          <li>Selected Windows laptops</li>
        </ul>
        
        <p>Before purchasing an eSIM, it's essential to verify that your device supports this technology.</p>
        
        <h2>The Future of Connectivity</h2>
        
        <p>eSIM technology is rapidly becoming the standard for mobile connectivity. As more carriers and countries embrace this technology, physical SIM cards will likely become obsolete. This shift offers greater flexibility, convenience, and environmental benefits for users worldwide.</p>
        
        <p>With ecoESIM, travelers can enjoy seamless connectivity across the globe while contributing to a more sustainable approach to mobile communications.</p>
      `,
      fr: `
        <p>La technologie eSIM (embedded SIM) représente une avancée significative dans la connectivité mobile, particulièrement pour les voyageurs. Contrairement aux cartes SIM physiques traditionnelles qui doivent être insérées et retirées des appareils, les eSIM sont intégrées directement dans le matériel de votre appareil.</p>
        
        <h2>Qu'est-ce qu'une eSIM ?</h2>
        
        <p>Une eSIM est une SIM numérique qui vous permet d'activer un forfait cellulaire de votre opérateur sans avoir à utiliser une carte SIM physique. Cette technologie devient de plus en plus courante dans les smartphones, tablettes, montres connectées et ordinateurs portables récents.</p>
        
        <h2>Comment fonctionnent les eSIM</h2>
        
        <p>L'eSIM est essentiellement une petite puce soudée directement sur la carte mère de votre appareil. Au lieu d'échanger physiquement des cartes SIM, vous pouvez télécharger et activer différents profils eSIM à distance. Voici comment fonctionne le processus :</p>
        
        <ol>
          <li><strong>Téléchargement du profil :</strong> Vous achetez un forfait eSIM auprès d'un fournisseur comme ecoESIM, recevant un code QR.</li>
          <li><strong>Activation :</strong> Scannez le code QR avec votre appareil, qui télécharge et installe le profil eSIM.</li>
          <li><strong>Configuration :</strong> Une fois installé, vous pouvez activer le profil eSIM et configurer des paramètres comme l'itinérance des données.</li>
          <li><strong>Utilisation :</strong> L'eSIM fonctionne désormais comme une carte SIM physique, vous connectant au réseau désigné.</li>
        </ol>
        
        <h2>Avantages pour les voyageurs</h2>
        
        <p>Pour les voyageurs fréquents, les eSIM offrent des avantages significatifs :</p>
        
        <ul>
          <li><strong>Profils multiples :</strong> Stockez plusieurs profils eSIM sur un seul appareil, en passant facilement de l'un à l'autre.</li>
          <li><strong>Configuration à distance :</strong> Achetez et configurez une eSIM pour votre destination avant même de partir.</li>
          <li><strong>Fonctionnalité double SIM :</strong> Gardez votre SIM domestique active tout en utilisant une eSIM locale pour les données.</li>
          <li><strong>Pas d'échange physique :</strong> Éliminez le besoin de manipuler de minuscules cartes SIM et le risque de les perdre.</li>
          <li><strong>Respectueux de l'environnement :</strong> Réduisez les déchets plastiques des cartes SIM traditionnelles et de leurs emballages.</li>
        </ul>
        
        <h2>Compatibilité des appareils</h2>
        
        <p>La technologie eSIM est prise en charge par de nombreux appareils récents, notamment :</p>
        
        <ul>
          <li>iPhone XS et modèles plus récents</li>
          <li>Google Pixel 2 et modèles plus récents</li>
          <li>Samsung Galaxy S20, Note 20 et modèles plus récents</li>
          <li>iPad Pro, iPad Air et iPad (7e génération et plus récents)</li>
          <li>Apple Watch Series 3 et plus récentes</li>
          <li>Certains ordinateurs portables Windows</li>
        </ul>
        
        <p>Avant d'acheter une eSIM, il est essentiel de vérifier que votre appareil prend en charge cette technologie.</p>
        
        <h2>L'avenir de la connectivité</h2>
        
        <p>La technologie eSIM devient rapidement la norme pour la connectivité mobile. À mesure que davantage d'opérateurs et de pays adoptent cette technologie, les cartes SIM physiques deviendront probablement obsolètes. Ce changement offre une plus grande flexibilité, commodité et des avantages environnementaux pour les utilisateurs du monde entier.</p>
        
        <p>Avec ecoESIM, les voyageurs peuvent profiter d'une connectivité transparente à travers le monde tout en contribuant à une approche plus durable des communications mobiles.</p>
      `,
      ar: `
        <p>تمثل تقنية eSIM (شريحة SIM المدمجة) تقدمًا كبيرًا في الاتصال المتنقل، خاصة للمسافرين. على عكس بطاقات SIM التقليدية التي تحتاج إلى إدخالها وإزالتها من الأجهزة، يتم بناء eSIM مباشرة في أجهزتك.</p>
        
        <h2>ما هي eSIM؟</h2>
        
        <p>eSIM هي شريحة SIM رقمية تسمح لك بتفعيل خطة خلوية من شركة الاتصالات الخاصة بك دون الحاجة إلى استخدام بطاقة SIM فعلية. أصبحت هذه التقنية شائعة بشكل متزايد في الهواتف الذكية والأجهزة اللوحية والساعات الذكية وأجهزة الكمبيوتر المحمولة الأحدث.</p>
        
        <h2>كيف تعمل eSIM</h2>
        
        <p>eSIM هي في الأساس رقاقة صغيرة ملحومة مباشرة باللوحة الأم لجهازك. بدلاً من تبديل بطاقات SIM جسديًا، يمكنك تنزيل وتنشيط ملفات تعريف eSIM المختلفة عن بعد. إليك كيفية عمل العملية:</p>
        
        <ol>
          <li><strong>تنزيل الملف الشخصي:</strong> تشتري خطة eSIM من مزود مثل ecoESIM، وتتلقى رمز QR.</li>
          <li><strong>التنشيط:</strong> امسح رمز QR ضوئيًا باستخدام جهازك، والذي يقوم بتنزيل وتثبيت ملف تعريف eSIM.</li>
          <li><strong>التكوين:</strong> بمجرد التثبيت، يمكنك تمكين ملف تعريف eSIM وتكوين الإعدادات مثل تجوال البيانات.</li>
          <li><strong>الاستخدام:</strong> تعمل eSIM الآن تمامًا مثل بطاقة SIM الفعلية، حيث تربطك بالشبكة المحددة.</li>
        </ol>
        
        <h2>الفوائد للمسافرين</h2>
        
        <p>بالنسبة للمسافرين المتكررين، توفر eSIMs مزايا كبيرة:</p>
        
        <ul>
          <li><strong>ملفات تعريف متعددة:</strong> تخزين ملفات تعريف eSIM متعددة على جهاز واحد، والتبديل بينها بسهولة.</li>
          <li><strong>الإعداد عن بعد:</strong> شراء وإعداد eSIM لوجهتك قبل المغادرة.</li>
          <li><strong>وظيفة SIM المزدوجة:</strong> الاحتفاظ بشريحة SIM المنزلية نشطة أثناء استخدام eSIM محلية للبيانات.</li>
          <li><strong>لا تبديل فعلي:</strong> القضاء على الحاجة إلى التعامل مع بطاقات SIM الصغيرة وخطر فقدانها.</li>
          <li><strong>صديقة للبيئة:</strong> تقليل النفايات البلاستيكية من بطاقات SIM التقليدية والتغليف.</li>
        </ul>
        
        <h2>توافق الجهاز</h2>
        
        <p>تقنية eSIM مدعومة من قبل العديد من الأجهزة الحديثة، بما في ذلك:</p>
        
        <ul>
          <li>iPhone XS والطرز الأحدث</li>
          <li>Google Pixel 2 والطرز الأحدث</li>
          <li>Samsung Galaxy S20، Note 20، والطرز الأحدث</li>
          <li>iPad Pro وiPad Air وiPad (الجيل السابع والأحدث)</li>
          <li>Apple Watch Series 3 والأحدث</li>
          <li>أجهزة الكمبيوتر المحمولة المختارة التي تعمل بنظام Windows</li>
        </ul>
        
        <p>قبل شراء eSIM، من الضروري التحقق من أن جهازك يدعم هذه التقنية.</p>
        
        <h2>مستقبل الاتصال</h2>
        
        <p>أصبحت تقنية eSIM بسرعة المعيار للاتصال المتنقل. مع تبني المزيد من شركات الاتصالات والبلدان لهذه التقنية، من المحتمل أن تصبح بطاقات SIM الفعلية قديمة. يوفر هذا التحول مرونة وراحة أكبر وفوائد بيئية للمستخدمين في جميع أنحاء العالم.</p>
        
        <p>مع ecoESIM، يمكن للمسافرين الاستمتاع باتصال سلس في جميع أنحاء العالم مع المساهمة في نهج أكثر استدامة للاتصالات المتنقلة.</p>
      `
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    date: '2025-03-15',
    category: {
      en: 'Technology',
      fr: 'Technologie',
      ar: 'تكنولوجيا'
    }
  },
  {
    id: 2,
    slug: 'top-destinations-for-digital-nomads',
    title: {
      en: 'Top 10 Destinations for Digital Nomads with the Best Connectivity',
      fr: '10 meilleures destinations pour les nomades numériques avec la meilleure connectivité',
      ar: 'أفضل 10 وجهات للعاملين عن بعد مع أفضل اتصال'
    },
    content: {
      en: `<p>Sample content for this post...</p>`,
      fr: `<p>Contenu d'exemple pour cet article...</p>`,
      ar: `<p>محتوى نموذجي لهذا المنشور...</p>`
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    date: '2025-04-02',
    category: {
      en: 'Travel',
      fr: 'Voyage',
      ar: 'سفر'
    }
  },
  // Additional blog post entries would go here
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, dir } = useLanguage();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col" dir={dir}>
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {language === 'fr' ? 'Article non trouvé' : 
               language === 'ar' ? 'المقالة غير موجودة' : 
               'Post Not Found'}
            </h1>
            <Link to="/blog" className="text-green-600 hover:text-green-700">
              {language === 'fr' ? 'Retour au blog' : 
               language === 'ar' ? 'العودة إلى المدونة' : 
               'Return to Blog'}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'fr') {
      return new Intl.DateTimeFormat('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    } else if (language === 'ar') {
      return new Intl.DateTimeFormat('ar-SA', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    }
  };

  const translations = {
    backToBlog: {
      en: 'Back to Blog',
      fr: 'Retour au Blog',
      ar: 'العودة إلى المدونة'
    }
  };

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-[30vh] md:h-[50vh] relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={post.image} 
            alt={post.title[language as keyof typeof post.title]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 text-center">
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category[language as keyof typeof post.category]}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto">
                {post.title[language as keyof typeof post.title]}
              </h1>
              <div className="text-white/80 mt-4 flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Blog */}
        <div className="container mx-auto px-4 mt-8">
          <Link 
            to="/blog" 
            className={`inline-flex items-center text-green-600 hover:text-green-700 transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            {dir === 'rtl' ? (
              <>
                {translations.backToBlog[language as keyof typeof translations.backToBlog]}
                <ChevronLeft className="mr-1 h-4 w-4" />
              </>
            ) : (
              <>
                <ChevronLeft className="mr-1 h-4 w-4" />
                {translations.backToBlog[language as keyof typeof translations.backToBlog]}
              </>
            )}
          </Link>
        </div>
        
        {/* Article Content */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-green lg:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content[language as keyof typeof post.content] }} />
          </div>
        </article>
        
        {/* Related Posts or CTAs could go here */}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
