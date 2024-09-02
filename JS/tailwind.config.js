tailwind.config = {
    theme: {
      extend: {
        // Color Side Start
        colors: {
          headercolor: 'rgba(22, 12, 109, 0.7)',
          btncolor: '#1BBF00',          
          cardcolor: '#F9F9FB',
          countercolor: '#141135',
          lathicolor: '#4F585F',        
          ptextcolor: '#726E9E',
          fullimgcolor: '#F6F5FF',
          afterbtncolor: 'rgba(25, 191, 0, 0.6)',
          cardhovercolor: '#6B62C5',
          ahovercolor: 'rgba(255, 255, 255, 0.7)',
          emocolor: '#ECEDF0',
          emohovercolor: '#6B62C5',
          emohovercolor2: '#d9d2e9',
          starcolor:  '#FF7628',
          lastcolor:  '#48409C'

        },
        // Color Side End
        // Container Side Start 
        maxWidth: {
          'container': '1170px',          
          'bannercontainer': '962px',   
          'countercontainer': '1209px',
          'whycontainer': '1147px',
          'whatcontainer': '1919px',
          'wecontainer': '1079px',
          'aboutcontainer': '1408px',
          'youcontainer': '982px',
          'lastcontainer': '1223px',
        },
        // Container Side End 
        // Font Family Side Satrt 
        fontFamily: {
          'open sans': ['Open Sans'],
          'paprika': ['Paprika'],
          'quantico': ['Quantico'],
        },
        // Font Family Side End 
        // Background Img Side Start 
        backgroundImage: {
          'banner1img': "url('./Images/bg1.jpg')",          
          'banner2img': "url('./Images/bg2.png')", 
          'banner3img': "url('./Images/bg3.png')" ,
          'banner4img': "url('./Images/bg4.png')",         
        'banner5img':    "url('./Images/bg5.png')",
          'banner6img': "url('./Images/bg6.png')",
        }
        // Background Img Side End 
      }
    }
  }