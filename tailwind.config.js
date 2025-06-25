/** @type {import('tailwindcss').Config} */

module.exports = {

content: [
  './src/**/*.{vue,js,ts}',
  './app.vue',
  './src/components/**/*.{vue,js,ts}',
  './src/layouts/**/*.{vue,js,ts}',
],


  theme: {

    screens: {

      // Layar Hp ukuran minimum       (Potrait)
      'hp': '370px',

      // Layar Hp ukuran Umum          (Potrait)
      'hp1': '390px',

      // Layar Hp ukuran maximum       (Potrait)
      'hp2': '425px',

      // Layar Hp ukuran Minumum       (Landscape)
      'hp3': '740px',


      // Layar Tablet ukuran Minumum   (Potrait)
      'md': '768px',

      // Layar Tablet ukuran Umum      (Landscape)
      'md1': '1150px',

      // Layar Tablet ukuran maximum   (Landscape)
      'md2': '1440px',


      // Layar Laptop ukuran Minumum
      'xl': '1024px',

      // Layar Laptop ukuran Maximum
      'xl1': '1536px',

      
      // Layar PC ukuran Minumum
      'pc': '1706px',

      // Layar Tablet ukuran Medium
      'pc1': '1920px',




      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      rotate: {
        '90': '-90deg',
      },
      zIndex: {
        '60': '60',
      },

      color: {
        color1:'#6661F6FF',
      },

      keyframes: {

        scrolling: {
          '0%': { transform: 'translateX(100%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(-100%)' }, /* Akhir di luar layar sebelah kiri */
        },
          geser: {
          '-00%': { transform: 'translateX(130%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        tombol: {
          '-00%': { transform: 'translateX(20%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        tombol2: {
          '0%': { transform: 'translateX(-30%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        atas: {
          '0%': { transform: 'translateY(-200%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        infoAction: {
          '0%': { transform: 'translateY(50%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        bawah: {
          '0%': { transform: 'translateY(100%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        popUpChat: {
          '0%': { transform: 'scale(0)', transformOrigin: 'right top' },
          '100%': { transform: 'scale(1)', transformOrigin: 'right top' },
        },
        popUpChatB: {
          '0%': { transform: 'scale(1)', transformOrigin: 'right top' },
          '100%': { transform: 'scale(0)', transformOrigin: 'right top' },
        },
        transisi: {
          '0%': { transform: 'translateY(-200%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
        muncul: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        ajukan: {
          '0%': { opacity: 0, transform: 'translateX(-50%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity: 1, transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        openOption: {
          '0%': { opacity: 0, transform: 'translateX(-5%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity: 1, transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        openOption2: {
          '0%': { opacity: 0, transform: 'translateX(0%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity: 1, transform: 'translateX(-5%)' }, /* Akhir di luar layar sebelah kiri */
        },
        status: {
          '0%': { transform: 'translateY(-50%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        change: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-100%)' },
          '75%': {  transform: 'translateY(-50%)'   },
          '100%': {  transform: 'translateY(0%)' },
        },
        geser2: {
          '-00%': { opacity:0 , transform: 'translateX(40%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:1 , transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        sidebar: {
          '-00%': { opacity:0 , transform: 'translateX(-10%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:1 , transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        // fade_enter: {
        //   '0%': { opacity:0 , transform: 'scale(0.6)' },
        //   '80%': { opacity: 1,transform: 'scale(1.02)' },
        //   '100%': { opacity:1 , transform: 'scale(1)' },
        // }

        fade_enter: {
          '0%': { opacity: 0, transform: 'scale(0.2)' },

          '50%': { opacity: 0, transform: 'scale(0.2)' },

          '70%': { opacity: 0, transform: 'scale(0.8)' },
          
          '100%': { opacity: 1, transform: 'scale(1)' },
        
        },

        fade_exit: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.95)' },
        },

        baground_black: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        fade_enter_left: {
          '0%': { opacity:0 , transform: 'translateX(-15%)' }, /* Mulai dari di luar layar sebelah kanan */
          '50%': { opacity:0 , transform: 'translateX(-10%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity:1 , transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },

        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-4px)' },
          '40%, 80%': { transform: 'translateX(4px)' },
        },

        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(7px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(7px) rotate(-360deg)' },
        },
        
      },
      animation: {
        popUpBack: 'popUpChatB 0.5s ease-in-out',
        shake: 'shake 0.6s infinite',
        orbit: 'orbit 3s linear infinite',
        fade_enter: 'fade_enter 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        fade_enter2: 'fade_enter 0.9s cubic-bezier(0.8, 0, 0.6, 2)',
        fade_enter_left: 'fade_enter_left 0.4s ease-in',
        fade_exit: 'fade_exit 0.4s cubic-bezier(0.4)',
        baground_black: 'baground_black .3s ease-out',
        scrolling: 'scrolling 20s linear infinite', /* Menggunakan animasi dengan durasi 10 detik */
        geser: 'geser 3s ease-in-out ', /* Menggunakan animasi dengan durasi 10 detik */
        atas: 'atas 1s ease-in-out ',
        infoAction: 'infoAction .5s ease',
        bawah: 'bawah 1.5s ease-in-out ',
        marquee: 'marquee 30s linear infinite',
        popUp: 'popUpChat 0.5s ease-in-out',
        transisi: 'transisi 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeOut: 'fadeOut 0.5s ease-out',
        tombol : 'tombol 1s ease-out',
        tombol2 : 'tombol2 1s ease-out',
        muncul : 'muncul .5s ease-out',
        muncul2 : 'fade-up  1s  ease-in-out',
        ajukan : 'ajukan 1.5s ease-in-out',
        openOption : 'openOption 1s ease',
        openOption2 : 'openOption2 1s ease',
        status: 'status 1.4s ease ',
        flip: 'flip 0.8s ease-in-out forwards',
        //
        change: 'change 1.4s ease forwards',
        geser2: 'geser2 1.5s ease-in-out ',
        sidebar: 'sidebar .7s ease-in-out ',
 
      },
      fontFamily:{
        "nanum-myeongjo-bold": ["Nanum Myeongjo", "serif"],
        "Calistoga": ["Calistoga", "serif"],
        "KodeMono": ["Kode Mono", "monospace"],
        "test": ["", ""],
        "Poppins": ["Poppins", "sans-serif"],
        "geist": ["Inter", "sans-serif"],
      },

      fontWeight: {
        'nanum-myeongjo-bold': '400',
        'Calistoga': '800',
        'KodeMono': '500',
        'Poppins': '400',
        'geist': '400',
        
        '': '',
      },
      fontStyle: {
        'Calistoga': 'Normal',
        'KodeMono': 'Normal',
        'geist': '',
        '': '',
      },
      backgroundImage:{
        'cats':      'url(/src/assets/bg-kerja.jpg)',
        
      },
  
      boxShadow: {
        'all': '0px -1px 5px 4px rgba(0, 0, 0, 0.3)',
        'allin': '0px -1px 8px 2px rgba(0, 0, 0, 0.3)'
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '26': '1rem', // Untuk menyesuaikan ukuran sesuai kebutuhan
      },
      transitionDuration: {
        '800': '800ms',
        '1000': '1000ms',
        '3000': '3000ms',
        '6000': '10000ms', // Atur durasi transisi menjadi 3000ms (3 detik)
      },
      transitionTimingFunction: {
        'ease-in': 'ease-in',
      },
      fontSize: {
        kecil:'0.5rem',
        sedang:'0.6rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      spacing: {
        '120px': '120px',
        '90': '120px',
        '80': '105px',
        '70': '80px',
        '60': '70px',
        '50': '63px',
        '40': '50px',
        '30': '40px',
        '15': '30px',
      },


    }
  },

  plugins: [
      require('flowbite/plugin')
  ]

}

// bg-cover bg-center bg-bg4  // buat baground supaya sesuai