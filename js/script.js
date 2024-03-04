function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav main") {
      x.className += " responsive";
    } else {
      x.className = "topnav main";
    }
  }



  function scroll_top_div(to_where) {
    document.getElementById(to_where).scrollIntoView({ behavior: 'smooth', block: 'center' });

}