app.component('menu-component', {
    template: `
    <!--------HEADER----->
    <div class="header">
      <img src="../public/img/LogoBlanco.png" alt="LogoBlanco" height="70"> 
    </div> 
    <!--------MENU------->
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link" href="index.html">DASHBOARD</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="usv.html">USV</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="uuv.html">UUV</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="ugv.html">UGV</a>
      </li>
    </ul>`,
})