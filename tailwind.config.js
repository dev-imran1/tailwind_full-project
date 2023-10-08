tailwind.config = {
    theme: {
      extend: {
        colors: {
          'btn-color': '#FFD2A4',
          'font-color': '#000',
          'box-color': '#FFF5EB',
          'after-color': '#FFD0A0',
        },
        fontSize: {
        'bg-font': '64px',
        'heading-font': '48px',
        'subheading-font': '32px',
        'pera-font': '16px',
        },
        fontFamily: {
            'robota': "'Roboto Condensed', sans-serif",
        },
        maxWidth: {
            'container': '1280px',
        },
        backgroundImage: {
            'banner': "url('./images/banner.jpg')",
            'arround': "url('./images/next.jpg')",
            'overlay': "linear-gradient(184deg, #060606 16.68%, rgba(0, 0, 0, 0.07) 50.44%)",
            'banner-overlay': "linear-gradient(184deg, #060606 16.68%, rgba(0, 0, 0, 0.001) 90.44%)",
            'font-linear': "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
        },
        spacing: {
            'btn-padding': '20px 48px',
            'btn-2': '20px 64px',
        }
      }
    }
  }