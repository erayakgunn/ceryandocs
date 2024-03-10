import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CeryanDocs",
  head: [
    ['link',{rel:'icon', type:"image/png",sizes:"32x32", href:'/favicon-32x32.png'}],
    ['link',{rel:'icon', type:"image/png",sizes:"16x16", href:'/favicon-16x16.png'}],
    ['link',{rel:'apple-touch-icon', type:"image/png",sizes:"180x180", href:'/apple-touch-icon.png'}],
    ['link',{rel:'manifest', type:"image/png", href:'/site.webmanifest'}],
    ['link',{rel:'mask-icon', type:"image/png",color:"#5bbad5",href:'/safari-pinned-tab.svg'}],
    ["script", { src: "/_vercel/insights/script.js", defer: true }],
  ],
  description: "Elektrik Elektronik Öğrencilerine Yardımcı Kaynak",
  lang:'tr-TR',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Anasayfa', link: '/' },
      { text: 'Dönemler', link: '/donemler' }
    ],
    search:{
      provider:'local'
    },

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
                { text: 'Mikroişlemci Sistemleri', link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/giris.md' }
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
              link: "/sinif-3/bahar/mikroislemci-sistemleri/msp-430/giris.md"
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
              
            },
            {
              text:"Temel C Operatörleri",
              link:'/sinif-3/bahar/mikroislemci-sistemleri/msp-430/c-operatorleri.md'
            },
            {
              text:"Timer A",
              link:"/sinif-3/bahar/mikroislemci-sistemleri/msp-430/timer-a.md"
            }
          ]
        },
        {
          text:"Örnekler",
          collapsed:false,
          items: [
            {
              text:"LED Yakıp Söndürme",
              link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/ornekler/led-blink.md'
            },
            {
              text:"2 Bit Sayıcı",
              link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/ornekler/2-bit-counter.md'
            },
            {
              text:"Interrupt ile 3 Bit Sayıcı",
              link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/ornekler/3-bit-counter-with-interrupt.md'
            },
            {
              text:"Timer A",
              link: '/sinif-3/bahar/mikroislemci-sistemleri/msp-430/ornekler/timer-a.md'
            },
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
