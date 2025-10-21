      const params = new URLSearchParams(window.location.search);
      const articleID = params.get("read");
      const articleContainer = document.getElementById("article");

      if (!articleID) {
        articleContainer.innerHTML = `
          <h1 class='headline'>Missing article ID.</h1>
          <p class='excerpt'>Woah, there! This is not the place for you. Quickly, get off the page before THEY find out you're here...</p>`;
      } else {
        fetch(`https://ourtoobe.app-37d.workers.dev/?id=${encodeURIComponent(articleID)}`)
          .then((response) => {
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(text);
              });
            }
            return response.text();
          })
          .then((html) => {
            articleContainer.innerHTML = html;
          })
          .catch((err) => {
            articleContainer.innerHTML = `
              <h1 class='headline'>Error loading article</h1>
              <p class='excerpt'>${err.message}</p>`;
          });
      }
  
