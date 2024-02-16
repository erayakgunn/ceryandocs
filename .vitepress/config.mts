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
        {
          text: "3. Sınıf",
          collapsed: false,
          items: [
            {
              text: "Bahar", collapsed: false, items: [
                { text: 'Mikroişlemci Sistemleri', link: '/sinif-3/mikroislemci-sistemleri' }
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
          text: "Konu 1",

        }
      ]

    },

    socialLinks: [
      {
        icon: 'github', link: 'https://github.com/erayakgunn'
      }
    ]
  }
})
