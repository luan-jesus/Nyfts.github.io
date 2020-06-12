<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Montserrat:wght@700&family=Raleway:wght@400;700&family=Roboto:wght@500;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ConteúdoSim</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#" onclick="document.getElementById('services').scrollIntoView({ behavior: 'smooth'});">
          <img
            class="logoSim"
            src="src/Logotipo_ConteudoSim_RGB.png"
            alt="Logotipo ConteudoSim"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item mx-2" onclick="teste()">
              <a class="nav-link" href="#">Serviços</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#">Trabalhos</a>
            </li>
            <li class="nav-item mx-2" style="margin: 10px 0 20px;">
              <a class="nav-button" href="#">Contate-nos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="content">
      <div class="bgopacity">
        <div class="container">
          <div class="contentBox">
            <h1>ConteúdoSim</h1>
            <div class="hr"></div>
            <p>
              Deixe a produção e a coordenação de conteúdos por nossa conta.
              Sabemos <strong>o quê</strong> e <strong>como</strong> fazer !
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="container">
        <h2>Serviços</h2>
        <div class="overCards">
          <div class="custom-card">
            <div class="cardlogo">
              <img src="src/icons/list.png" alt="List" style="width: 60px; height: auto;" />
            </div>
            <h4>Produção de Conteúdo</h4>
            <p style="font-size: 14pt; text-align: center;">
              Livros, Manuais, Redes-Sociais e Materiais corporativos
            </p>
          </div>
          <div class="custom-card">
            <div class="cardlogo">
              <img src="src/icons/production.png" alt="List" style="width: 75px; height: auto;" />
            </div>
            <h4>Coordenação de Produção</h4>
            <p style="font-size: 14pt; text-align: center;">
              Articulação de Profissionais e Organização de Coleções
            </p>
          </div>
          <div class="custom-card">
            <div class="cardlogo">
              <img src="src/icons/poem.png" alt="List" style="width: 70px; height: auto;" />
            </div>
            <h4>Publicações</h4>
            <p style="font-size: 14pt; text-align: center;">
              Supervisão, Contratação de Serviços e Eventos
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="container">
        <h2>Trabalhos</h2>
        <div class="overCards">
          <a
            href="https://www.behance.net/gallery/90023813/Guia-de-Profissoes-2004"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-card"
          >
            <img src="src/1.jpg" alt="1" style="width: 100%; height: 100%; border-radius: 5px;" />
            <div class="portfolio-card-opacity-over">
              <img src="src/behance-logo.png" alt="behance logo" class="behance-logo">
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/90024473/Coordenacao-2012-2013"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-card"
          >
            <img src="src/2.jpg" alt="2" style="width: 100%; height: 100%; border-radius: 5px;" />
            <div class="portfolio-card-opacity-over">
              <img src="src/behance-logo.png" alt="behance logo" class="behance-logo">
            </div>
          </a>
          <a
            href="https://www.behance.net/gallery/90023727/Coordenacao-2003-1-Semestre"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-card"
          >
          <img src="src/3.jpg" alt="3" style="width: 100%; height: 100%; border-radius: 5px;" />
          <div class="portfolio-card-opacity-over">
            <img src="src/behance-logo.png" alt="behance logo" class="behance-logo">
          </div>
          </a>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container contact-container">
        <div class="contact-card">
          <h3>Vamos Conversar!</h3>
          <p>Conte-me sobre sua ideia e vamos preenchê-la de <strong>conteúdo</strong></p>
        </div>
        <div class="contact-card">
          <form method="post" action="sendmail.php">
            <div class="textfield">
              <h5>Nome</h5>
              <input type="text" name="name" placeholder="Ex: Carlos Bueno"/>
            </div>
            <div class="textfield">
              <h5>Email</h5>
              <input type="text" name="mail" placeholder="Ex: seunome@email.com"/>
            </div>
            <div class="textfield">
              <h5>Mensagem</h5>
              <textarea id="message" name="message" rows="4" cols="50" placeholder="Escreva aqui..."></textarea>
            </div>
            <div class="textfield" style="display: flex; flex-direction: row-reverse;">
              <button name="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <script>
      function teste() {
        console.log("aqui");
        document.getElementById("services").scrollIntoView();
        console.log("fim");
      }
    </script>

    <!-- Bootstrap dependencies -->
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    
  </body>
</html>
