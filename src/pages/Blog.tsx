
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { Book, Leaf, Calendar } from 'lucide-react';

// Sample blog posts data - in a real app this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: 'how-esim-technology-works',
    title: {
      en: 'How eSIM Technology Works',
      fr: 'Comment fonctionne la technologie eSIM',
      ar: 'كيف تعمل تقنية eSIM'
    },
    excerpt: {
      en: 'Learn the basics of eSIM technology and how it is revolutionizing the way we connect while traveling.',
      fr: 'Découvrez les bases de la technologie eSIM et comment elle révolutionne notre façon de nous connecter en voyage.',
      ar: 'تعرف على أساسيات تقنية eSIM وكيف تحدث ثورة في طريقة اتصالنا أثناء السفر.'
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
    excerpt: {
      en: 'Discover the best places around the world for remote workers with reliable and affordable internet access.',
      fr: 'Découvrez les meilleurs endroits du monde pour les travailleurs à distance avec un accès Internet fiable et abordable.',
      ar: 'اكتشف أفضل الأماكن حول العالم للعاملين عن بعد مع إمكانية الوصول إلى الإنترنت بشكل موثوق وبأسعار معقولة.'
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    date: '2025-04-02',
    category: {
      en: 'Travel',
      fr: 'Voyage',
      ar: 'سفر'
    }
  },
  {
    id: 3,
    slug: 'esim-vs-physical-sim-cards',
    title: {
      en: 'eSIM vs Physical SIM Cards: A Complete Comparison',
      fr: 'eSIM vs cartes SIM physiques : une comparaison complète',
      ar: 'eSIM مقابل بطاقات SIM الفعلية: مقارنة كاملة'
    },
    excerpt: {
      en: 'Compare the advantages and disadvantages of eSIM and traditional physical SIM cards for travelers.',
      fr: 'Comparez les avantages et les inconvénients des eSIM et des cartes SIM physiques traditionnelles pour les voyageurs.',
      ar: 'قارن بين مزايا وعيوب eSIM وبطاقات SIM الفعلية التقليدية للمسافرين.'
    },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    date: '2025-04-20',
    category: {
      en: 'Comparison',
      fr: 'Comparaison',
      ar: 'مقارنة'
    }
  },
  {
    id: 4,
    slug: 'sustainable-travel-with-esim',
    title: {
      en: 'How eSIMs Are Making Travel More Sustainable',
      fr: 'Comment les eSIM rendent les voyages plus durables',
      ar: 'كيف تجعل بطاقات eSIM السفر أكثر استدامة'
    },
    excerpt: {
      en: 'Learn how eSIM technology is reducing plastic waste and contributing to more sustainable travel practices.',
      fr: 'Découvrez comment la technologie eSIM réduit les déchets plastiques et contribue à des pratiques de voyage plus durables.',
      ar: 'تعرف على كيفية تقليل تقنية eSIM للنفايات البلاستيكية والمساهمة في ممارسات سفر أكثر استدامة.'
    },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    date: '2025-05-05',
    category: {
      en: 'Sustainability',
      fr: 'Développement durable',
      ar: 'الاستدامة'
    }
  },
  {
    id: 5,
    slug: 'troubleshooting-common-esim-issues',
    title: {
      en: 'Troubleshooting Common eSIM Issues While Traveling',
      fr: 'Résolution des problèmes courants des eSIM en voyage',
      ar: 'استكشاف وإصلاح مشكلات eSIM الشائعة أثناء السفر'
    },
    excerpt: {
      en: 'Solutions to the most frequent problems travelers face when using eSIMs abroad.',
      fr: 'Solutions aux problèmes les plus fréquents rencontrés par les voyageurs lors de l\'utilisation des eSIM à l\'étranger.',
      ar: 'حلول للمشاكل الأكثر شيوعًا التي يواجهها المسافرون عند استخدام بطاقات eSIM في الخارج.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    date: '2025-05-18',
    category: {
      en: 'Troubleshooting',
      fr: 'Dépannage',
      ar: 'استكشاف الأخطاء وإصلاحها'
    }
  }
];

const Blog = () => {
  const { language, dir } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Calculate page numbers
  const pageNumbers = Math.ceil(blogPosts.length / postsPerPage);

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
    title: {
      en: 'Blog',
      fr: 'Blog',
      ar: 'المدونة'
    },
    subtitle: {
      en: 'Latest Articles and Insights',
      fr: 'Derniers Articles et Insights',
      ar: 'أحدث المقالات والرؤى'
    },
    readMore: {
      en: 'Read More',
      fr: 'Lire la Suite',
      ar: 'قراءة المزيد'
    },
    previous: {
      en: 'Previous',
      fr: 'Précédent',
      ar: 'السابق'
    },
    next: {
      en: 'Next',
      fr: 'Suivant',
      ar: 'التالي'
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-50 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-4 bg-green-100 rounded-full px-4 py-2">
                <Book className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-700 font-medium">{translations.title[language as keyof typeof translations.title]}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{translations.subtitle[language as keyof typeof translations.subtitle]}</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en' ? 'Discover expert tips, insights, and guides about eSIMs, global connectivity, and sustainable travel.' : 
                 language === 'fr' ? 'Découvrez des conseils d\'experts, des analyses et des guides sur les eSIM, la connectivité mondiale et les voyages durables.' : 
                 'اكتشف نصائح الخبراء والرؤى والأدلة حول بطاقات eSIM والاتصال العالمي والسفر المستدام.'}
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {currentPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title[language as keyof typeof post.title]} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category[language as keyof typeof post.category]}
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="block">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                        {post.title[language as keyof typeof post.title]}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt[language as keyof typeof post.excerpt]}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className={`inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                    >
                      {translations.readMore[language as keyof typeof translations.readMore]}
                      {dir === 'rtl' ? (
                        <Leaf className="mr-2 h-4 w-4" />
                      ) : (
                        <Leaf className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            {pageNumbers > 1 && (
              <div className="mt-12">
                <Pagination dir={dir}>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        href="#"
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: pageNumbers }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          onClick={() => setCurrentPage(index + 1)}
                          isActive={currentPage === index + 1}
                          href="#"
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageNumbers))}
                        className={currentPage === pageNumbers ? 'pointer-events-none opacity-50' : ''}
                        href="#"
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
