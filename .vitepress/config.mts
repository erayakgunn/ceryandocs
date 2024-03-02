import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CeryanDocs",
  description: "Elektrik Elektronik Öğrencilerine Yardımcı Kaynak",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Anasayfa', link: '/' },
      { text: 'Dönemler', link: '/donemler' }
    ],

    sidebar: {
      '/donemler': [
        // {
        //   text: "1. Sınıf",
        //   collapsed: false,
        //   items: [
        //     {
        //       text: "Bahar", collapsed: false, items: [
        //         { text: 'Sinyallere Giriş', link: '/sinif-1/bahar/sinyallere-giris/index.md' }
        //       ]
        //     },
        //   ]
        // },
        {
          text: "3. Sınıf",
          collapsed: false,
          items: [
            {
              text: "Bahar", collapsed: false, items: [
                { text: 'Mikroişlemci Sistemleri', link: '/sinif-3/bahar/mikroislemci-sistemleri/index.md' }
              ]
            },
          ]
        },
      ],
      '/sinif-3': [
        {
          text: "Güz Dönemi",
          collapsed: true,
          items: [
            {
              text: "Henüz Yok"
            }
          ]
        },
        {
          text: "Bahar Dönemi",
          collapsed: false,
          items: [
            {
              text: "Mikroişlemci Sistemleri",
              link: "/sinif-3/bahar/mikroislemci-sistemleri"
            }
          ]
        },
      ],
      '/sinif-3/bahar/mikroislemci-sistemleri/': [
        {
          text:"MSP430",
          collapsed: false,
          items: [
            {
              text:"Giriş",
              link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/giris.md'
              
            }
          ]
        }
      ],
      // '/sinif-1/bahar/sinyallere-giris/': [
      //   {
      //     text: "Giriş",
      //     link: '/sinif-1/bahar/sinyallere-giris/index.md'
      //   },
      //   {
      //     text: "Karmaşık Sayılar",
      //     link: '/sinif-1/bahar/sinyallere-giris/karmasik-sayilar.md'
      //   }
      // ]

    },

    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/erayakgunn'
      }
    ]
  },
  markdown: {
    math: true
  }
})
