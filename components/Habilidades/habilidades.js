export const principais = () => {
  const date = new Date();
  const year = date.getFullYear();

  return [
    {
      titulo: `Javascript | ES${year}`,
      descricao: "Linguagem de programação",
      imagem: "/image/javascript.png"
    },
    {
      titulo: "React",
      descricao: "Library - Frontend",
      imagem: "/image/react.png"
    },
    {
      titulo: "Node",
      descricao: "Implementação V8 - Backend",
      imagem: "/image/node.png"
    },
    {
      titulo: "React Native",
      descricao: "Library - Mobile",
      imagem: "/image/reactnative.png"
    }
  ];
};
export const frameworks = () => {
  return [
    {
      titulo: "Server Side Rendering - SSR",
      descricao: "NEXT.js e diversas integrações com outras libraries",
      imagem: "/image/next.png"
    },
    {
      titulo: "Requisição Remota",
      descricao: "GraphQL e REST API, Apollo",
      imagem: "/image/graphql.png"
    },
    {
      titulo: "Server Nodejs - Backend",
      descricao: "Express, Hapi, micro",
      imagem: "/image/express.jpeg"
    },
    {
      titulo: "Database",
      descricao: "SQL e NoSQL, Postgresql, Mongo, Redis, LocalStorage",
      imagem: "/image/mongo.png"
    },
    {
      titulo: "Autenticação",
      descricao: "Token, Oauth2, Social e Email, Passport.js, recaptcha2, jsonwebtoken, bcrypt",
      imagem: "/image/passport.png"
    },
    {
      titulo: "UI Frameworks",
      descricao: "Material.ui, Styled Components, Emotion",
      imagem: "/image/materialui.png"
    }
  ];
};
export const infraestrutura = () => {
  return [
    {
      titulo: "Testes",
      descricao: " Travis CI, Jest, Karma, Protractor, Mocha, Sinon, Chai",
      imagem: "/image/travis.png"
    },
    {
      titulo: "Cloud Provider",
      descricao: "Amazon AWS (EC2), Google Cloud, Azure, Ziet Now, Heroku, Headless CMS",
      imagem: "/image/aws.png"
    },
    {
      titulo: "Tools",
      descricao: "Shell script, Babel, Webpack, Parcel, Gulp, Grunt, lxc, nodemon, pm2 (fork e cluster mode) ,yarn, npm, nvm",
      imagem: "/image/webpack.png"
    },
    {
      titulo: "Outros",
      descricao: "UFW firewall, VSCode, nodemailer",
      imagem: "/image/linux.png"
    },
  ];
};
