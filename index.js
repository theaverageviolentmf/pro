const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-apply-style]")
const applyStyle = document.querySelector("[data-modal]")
const modal = document.querySelector("[data-modal]")
// modal code

openButton.addEventListener("click", () => {
    modal.showModal()
    modal.classList.add("open")
})

closeButton.addEventListener("click", () => {
    modal.close()
    modal.classList.remove("open")
})

applyStyle.addEventListener("click", () =>{
    var isUssr = document.querySelector('input[name="USSR_radio"]:checked').value;
    console.log(isUssr)
    if (isUssr == "on") {
setCookie("style", "ussr", 400);

    }
})

 // header stuff
 
 const getHeaderHeight = () => {
    return Document.querySelector(".site__header")?.offsetHeight || 0;
  };

  const setHeaderHeightProperty = () => {
    Document.body.style.setProperty(
      "--height--header",
      "${getHeaderHeight()}px"
    );
  };
  window.addEventListener("DOMContentLoaded", setHeaderHeightProperty);
  window.addEventListener("load", setHeaderHeightProperty);
  window.addEventListener("resize", setHeaderHeightProperty);

// styling stuff
// document.cookie = "theme=ussr; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";




console.log(getCookie("style"));

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

