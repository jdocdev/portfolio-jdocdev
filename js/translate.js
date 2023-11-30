const traducciones = {
  en: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    "hello!":"Hello!",
    view:"View",
    "name:":"Name:",
    "email:":"Email:",
    "message:":"Message:",
    "submit":"Submit",

    frase1:"Hi! I'm Juan David Ortiz",
    frase2:"Front-end developer specialized in capturing authentic moments and genuine emotions through visual interfaces. Looking to represent the uniqueness of each individual, creating experiences that connect us on a personal and collective level.",    
    frase3:"About Me",
    frase4:"Here you will find detailed information about me, my experience, and the skills I have developed.",
    frase5:"Work Experience",
    frase6:"Software Developer",
    frase7:"Feb 2023 - Jul 2023",
    frase8:"Software Development Analyst",
    frase9:"Jul 2022 - Dic 2022",
    frase10:"Feb 2022 - Jul 2022",
    frase11:"Educational Training",
    frase12:"Feb 2021 - Feb 2023",
    frase13:"Information Systems Analysis and Development Technologist",
    frase14:"Jul 2019 - Dic 2020",
    frase15:"Technician in Software Development",
    frase16:"Jul 2016 - Jul 2018",
    frase17:"Technician in Digital Graphic Design",
    frase18:"Complementary Training",
    frase19:"May 2023 - Oct 2023",
    frase20:"User Experience Design (UX)",
    frase21:"Apr 2023 - Sep 2023",
    frase22:"Front-End Software Development",
    frase23:"Nov 2021 - Dic 2021",
    frase24:"Web development: HTML5, CSS3, Javascript",
    frase25:"I am a passionate front-end web developer dedicated to creating exceptional user experiences for websites and applications. My main goal is to ensure the overall success of the product through a solid and high quality front-end.",
    frase26:"In the Projects section you will find concrete examples of my work, where you can see how I have applied my skills to design attractive and functional interfaces.",
    frase27:"I also enjoy sharing my knowledge and experience with the web development community. Through my YouTube channel and my LinkedIn profile, I publish valuable and useful content related to web development and programming.",
    frase28:"I am always open to new job opportunities where I can contribute, learn and grow. If you have an opportunity that fits my skills and experience, feel free to contact me. I will be happy to explore how I can add value to your project.",
    frase29:"My Skills",
    frase30:"Here you will find a selection of my personal projects, in which I have put all my effort and creativity. Through them, you will be able to explore my style and approach to software development",
    frase31:"In this project, I created a responsive Firefox Monitor website using technologies such as HTML, CSS and JavaScript.",
    frase32:"In this project, I created a responsive Panaderia BEM website using technologies such as HTML, CSS.",
    frase33:"In this project, I created a responsive website for Christmas Store using technologies such as HTML, CSS and JavaScript.",
    frase34:"In this project, I created a responsive text encryptor using technologies such as HTML, CSS and JavaScript.",
    frase35:"In this project, I created a responsive BookHouse website using technologies such as HTML, CSS.",
    frase36:"Do not hesitate to contact me through the form below. I will get back to you as soon as possible",
  },
  es: {
    home:"Inicio",
    experience:"Experiencia",
    projects:"Proyectos",
    contact:"Contacto",
    "hello!":"¡Hola!",
    view:"Ver",
    "name:":"Nombre:",
    "email:":"Correo electrónico:",
    "message:":"Mensaje:",
    submit:"Enviar",
  
    frase1:"¡Hola! Soy Juan David Ortiz",
    frase2:"Desarrollador front-end especializado en capturar momentos auténticos y emociones genuinas a través de interfaces visuales. Busco representar la singularidad de cada individuo, creando experiencias que nos conecten a nivel personal y colectivo.",
    frase3:"Acerca de mí",
    frase4:"Aquí encontrarás información detallada sobre mí, mi experiencia y las habilidades que he desarrollado.",
    frase5:"Experiencia laboral",
    frase6:"Desarrollador de software",
    frase7:"Feb 2023 - Jul 2023",
    frase8:"Analista de Desarrollo de Software",
    frase9:"Jul 2022 - Dic 2022",
    frase10:"Feb 2022 - Jul 2022",
    frase11:"Formación educativa",
    frase12:"Feb 2021 - Feb 2023",
    frase13:"Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    frase14:"Jul 2019 - Dic 2020",
    frase15:"Técnico en Desarrollo de Software",
    frase16:"Jul 2016 - Jul 2018",
    frase17:"Técnico en Diseño Gráfico Digital",
    frase18:"Formación complementaria",
    frase19:"May 2023 - Oct 2023",
    frase20:"Diseño de Experiencia del Usuario (UX)",
    frase21:"Abr 2023 - Sep 2023",
    frase22:"Desarrollo de Software Front-End",
    frase23:"Nov 2021 - Dic 2021",
    frase24:"Desarrollo web: HTML5, CSS3, Javascript",
    frase25:"Soy un apasionado desarrollador web front-end dedicado a crear experiencias de usuario excepcionales para sitios web y aplicaciones. Mi objetivo principal es garantizar el éxito general del producto a través de un front-end sólido y de alta calidad.",
    frase26:"En la sección de Proyectos encontrarás ejemplos concretos de mi trabajo, donde podrás ver cómo he aplicado mis habilidades para diseñar interfaces atractivas y funcionales.",
    frase27:"También disfruto compartiendo mi conocimiento y experiencia con la comunidad de desarrollo web. A través de mi canal de YouTube y mi perfil de LinkedIn, publico contenido valioso y útil relacionado con el desarrollo web y la programación.",
    frase28:"Siempre estoy abierto a nuevas oportunidades laborales donde pueda contribuir, aprender y crecer. Si tienes una oportunidad que se ajusta a mis habilidades y experiencia, no dudes en contactarme. Estaré encantado de explorar cómo puedo agregar valor a tu proyecto.",
    frase29: "Mis habilidades",
    frase30:"Aquí encontrarás una selección de mis proyectos personales, en los cuales he puesto todo mi esfuerzo y creatividad. A través de ellos, podrás explorar mi estilo y enfoque en el desarrollo de software.",
    frase31:"En este proyecto, recree un sitio web responsive Firefox Monitor utilizando tecnologías como HTML, CSS y JavaScript.",
    frase32:"En este proyecto, creé un sitio web responsive para Panadería BEM utilizando tecnologías como HTML, CSS.",
    frase33:"En este proyecto, creé un sitio web responsive para Christmas Store utilizando tecnologías como HTML, CSS y JavaScript.",
    frase34:"En este proyecto, creé un encriptador de texto responsive utilizando tecnologías como HTML, CSS y JavaScript.",
    frase35:"En este proyecto, creé un sitio web responsive para BookHouse utilizando tecnologías como HTML, CSS.",
    frase36:"No dudes en contactarme a través del formulario a continuación. Me pondré en contacto contigo tan pronto como sea posible.",
  },  
};

function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-traduccion]");

  elementos.forEach((elemento) => {
    const claveTraduccion = elemento.dataset.traduccion;
    elemento.innerText = traducciones[idioma][claveTraduccion];
  });
}

// En el script principal o en tu script de inicialización
document.addEventListener("DOMContentLoaded", function () {
  cambiarIdioma("en"); // Establecer el idioma por defecto al cargar la página
});

// Asegúrate de que los botones tengan un ID o clase única para poder seleccionarlos fácilmente
const botonesIdioma = document.getElementById('idioma-buttons');

function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll('[data-traduccion]');

  elementos.forEach(elemento => {
    const claveTraduccion = elemento.dataset.traduccion;
    elemento.innerText = traducciones[idioma][claveTraduccion];
  });

  // Mostrar u ocultar los botones según el idioma
  if (idioma === 'es') {
    botonesIdioma.querySelector('button[onclick="cambiarIdioma(\'es\')"]').style.display = 'none';
    botonesIdioma.querySelector('button[onclick="cambiarIdioma(\'en\')"]').style.display = 'inline-block';
  } else {
    botonesIdioma.querySelector('button[onclick="cambiarIdioma(\'es\')"]').style.display = 'inline-block';
    botonesIdioma.querySelector('button[onclick="cambiarIdioma(\'en\')"]').style.display = 'none';
  }
}