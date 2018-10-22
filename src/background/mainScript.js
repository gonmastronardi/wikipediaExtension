
//If the user clicks Obtain titles the script is called.
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("title")){

        browser.tabs.executeScript(null, { 
            file: "../content_script/obtainTitles.js" 
          });

    }else{
        browser.tabs.reload();
        window.close();
    }
});
