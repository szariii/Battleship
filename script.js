var tab1 = generateArr1(10);
losuj(tab1, 4);
losuj(tab1, 3);
losuj(tab1, 3);
losuj(tab1, 2);
losuj(tab1, 2);
losuj(tab1, 2);
losuj(tab1, 1);
losuj(tab1, 1);
losuj(tab1, 1);
losuj(tab1, 1);
generateDOM1(tab1);
render1(tab1);

var tab = generateArr(10);
statek(4, 1);
statek(3, 2);
statek(3, 3);
statek(2, 4);
statek(2, 5);
statek(2, 6);
statek(1, 7);
statek(1, 8);
statek(1, 9);
statek(1, 10);
generateDOM(tab);
render(tab);

function start() {
  document.getElementById("btn").style.display = "none";
  trafionekomp = 0;
  trafionegracz = 0;
  gierka();

  function gierka() {
    document.getElementById("pmc").onmouseover = function () {
      document.getElementById("pmc").onclick = function () {};
    };

    document.getElementById("pmc").onclick = function () {};

    document.getElementById("cmp").onmouseover = function () {
      document.getElementById("cmp").onclick = function () {
        alert("ruch Gracza");
      };
    };

    polko = Array.from(document.getElementsByClassName("pole1"));
    celek = Array.from(document.getElementsByClassName("pole"));
    for (let i = 0; i < polko.length; i++) {
      polko[i].onclick = function () {
        let wspolrzedne = this.id;

        podzielone = wspolrzedne.split("_");

        let cel = tab1[podzielone[0]][podzielone[1]];

        if (cel == 1) {
          tab1[podzielone[0]][podzielone[1]] = 3;
          polko[i].style.backgroundColor = "blue";
          polko[i].classList.add("trafiony");
          trafionegracz = trafionegracz + 1;

          if (trafionegracz == 20) {
            setTimeout(function () {
              alert("Gratulacje, wygrałeś!!!!");

              alert("Zrestartować gre?");

              document.getElementById("statki").remove();
              document.getElementById("cmp").remove();
              document.getElementById("odstep").remove();
              document.getElementById("pmc").remove();

              var miejsce1 = document.createElement("div");
              miejsce1.id = "statki";
              document.getElementById("container").appendChild(miejsce1);

              var miejsce2 = document.createElement("div");
              miejsce2.id = "cmp";
              miejsce2.classList.add("second");
              var napis1 = document.createElement("p");
              napis1.innerHTML = "Gracz";
              miejsce2.appendChild(napis1);
              document.getElementById("container").appendChild(miejsce2);

              var miejsce3 = document.createElement("div");
              miejsce3.id = "odstep";
              document.getElementById("container").appendChild(miejsce3);

              var miejsce4 = document.createElement("div");
              miejsce4.id = "pmc";
              miejsce4.classList.add("first");
              var napis2 = document.createElement("p");
              napis2.innerHTML = "Komputer";
              miejsce4.appendChild(napis2);
              document.getElementById("container").appendChild(miejsce4);

              tab1 = generateArr1(10);

              losuj(tab1, 4);
              losuj(tab1, 3);
              losuj(tab1, 3);
              losuj(tab1, 2);
              losuj(tab1, 2);
              losuj(tab1, 2);
              losuj(tab1, 1);
              losuj(tab1, 1);
              losuj(tab1, 1);
              losuj(tab1, 1);
              generateDOM1(tab1);
              render1(tab1);

              tab = generateArr(10);
              statek(4, 1);
              statek(3, 2);
              statek(3, 3);
              statek(2, 4);
              statek(2, 5);
              statek(2, 6);
              statek(1, 7);
              statek(1, 8);
              statek(1, 9);
              statek(1, 10);
              generateDOM(tab);
              render(tab);

              let czyszczenie = document.getElementsByClassName("pole");
              let czyszczenie1 = document.getElementsByClassName("pole1");

              for (let x = 0; x < czyszczenie.length; x++) {
                czyszczenie[x].onmouseover = "";
                czyszczenie[x].onclick = "";
              }

              for (let x = 0; x < czyszczenie1.length; x++) {
                czyszczenie1[x].onmouseover = "";
                czyszczenie1[x].onclick = "";
              }
            }, 100);
          }
        } else if (cel == 0) {
          tab1[podzielone[0]][podzielone[1]] = 4;
          polko[i].classList.add("nietrafiony");
          i = 1;
          if (i == 1) {
            strzelaniekompa();
          }

          function strzelaniekompa() {
            for (let j = 0; j < polko.length; j++) {
              polko[j].onclick = function () {};
            }
            zgoda = 1;
            while (zgoda == 1) {
              zgoda = 0;
              celx = Math.round(Math.random() * 10) + 4;
              cely = Math.round(Math.random() * 10) + 4;

              check = tab[celx][cely];
              if (check == 3 || check == 4 || check == 2) {
                zgoda = 1;
              }
            }

            document.getElementById("pmc").onmouseover = function () {
              document.getElementById("pmc").onclick = function () {
                alert("ruch komputera");
              };
            };
            document.getElementById("cmp").onclick = function () {
              alert("ruch komputera");
            };

            setTimeout(function () {
              if (check == 0) {
                tab[celx][cely] = 4;
                document
                  .getElementById(celx + "_" + cely)
                  .classList.add("nietrafiony");
                gierka();
              } else if (check == 1) {
                tab[celx][cely] = 3;
                document
                  .getElementById(celx + "_" + cely)
                  .classList.add("trafiony");
                trafionekomp = trafionekomp + 1;
                if (trafionekomp == 20) {
                  setTimeout(function () {
                    alert("Przegrałeś");
                    pokaz = Array.from(
                      document.getElementsByClassName("pole1")
                    );
                    for (let b = 0; b < pokaz.length; b++) {
                      let iden = pokaz[b].id;
                      let sparwdz = iden.split("_");
                      if (tab1[sparwdz[0]][sparwdz[1]] == 1) {
                        pokaz[b].style.backgroundColor = "black";
                      }
                    }
                  }, 100);

                  setTimeout(function () {
                    alert("Zrestartować gre?");

                    document.getElementById("statki").remove();
                    document.getElementById("cmp").remove();
                    document.getElementById("odstep").remove();
                    document.getElementById("pmc").remove();

                    var miejsce1 = document.createElement("div");
                    miejsce1.id = "statki";
                    document
                      .getElementById("container")
                      .appendChild(miejsce1);

                    var miejsce2 = document.createElement("div");
                    miejsce2.id = "cmp";
                    miejsce2.classList.add("second");
                    var napis1 = document.createElement("p");
                    napis1.innerHTML = "Gracz";
                    miejsce2.appendChild(napis1);
                    document
                      .getElementById("container")
                      .appendChild(miejsce2);

                    var miejsce3 = document.createElement("div");
                    miejsce3.id = "odstep";
                    document
                      .getElementById("container")
                      .appendChild(miejsce3);

                    var miejsce4 = document.createElement("div");
                    miejsce4.id = "pmc";
                    miejsce4.classList.add("first");
                    var napis2 = document.createElement("p");
                    napis2.innerHTML = "Komputer";
                    miejsce4.appendChild(napis2);
                    document
                      .getElementById("container")
                      .appendChild(miejsce4);

                    tab1 = generateArr1(10);

                    losuj(tab1, 4);
                    losuj(tab1, 3);
                    losuj(tab1, 3);
                    losuj(tab1, 2);
                    losuj(tab1, 2);
                    losuj(tab1, 2);
                    losuj(tab1, 1);
                    losuj(tab1, 1);
                    losuj(tab1, 1);
                    losuj(tab1, 1);
                    generateDOM1(tab1);
                    render1(tab1);

                    tab = generateArr(10);
                    statek(4, 1);
                    statek(3, 2);
                    statek(3, 3);
                    statek(2, 4);
                    statek(2, 5);
                    statek(2, 6);
                    statek(1, 7);
                    statek(1, 8);
                    statek(1, 9);
                    statek(1, 10);
                    generateDOM(tab);
                    render(tab);

                    let czyszczenie =
                      document.getElementsByClassName("pole");
                    let czyszczenie1 =
                      document.getElementsByClassName("pole1");

                    for (let x = 0; x < czyszczenie.length; x++) {
                      czyszczenie[x].onmouseover = "";
                      czyszczenie[x].onclick = "";
                    }

                    for (let x = 0; x < czyszczenie1.length; x++) {
                      czyszczenie1[x].onmouseover = "";
                      czyszczenie1[x].onclick = "";
                    }
                  }, 5000);
                }
                strzelaniekompa();
              }
            }, 1000);
          }
        } else {
          alert("Już strzelałeś w to miejsce");
        }
      };
    }
  }
}

//BUG PRZY PRZYCISKU//

function generateArr(N) {
  let arr = [];
  for (let i = 0; i < N + 8; i++) {
    arr[i] = [];
    for (let j = 0; j < N + 8; j++) {
      if (
        i == 0 ||
        i == 1 ||
        i == 2 ||
        i == 3 ||
        i == 17 ||
        (i == 16) | (i == 14) ||
        i == 15 ||
        j == 0 ||
        j == 1 ||
        j == 2 ||
        j == 3 ||
        (j == 16) | (j == 14) ||
        j == 15 ||
        j == 17
      ) {
        arr[i][j] = 2;
      } else {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

function generateDOM(arr) {
  let licznik = 0;
  let cmp = document.getElementById("cmp");

  let l = 0;
  cmp.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (l == 0) {
      l = 1;
      let dane = Array.from(document.getElementsByClassName("klikniety"));
      let szerkosc = dane[0].id;
      let grupa = Array.from(document.getElementsByClassName("green"));
      let czerwony = Array.from(document.getElementsByClassName("red"));
      if (grupa != "") {
        for (let j = 0; j < grupa.length; j++) {
          for (let i = 0; i < szerkosc; i++) {
            document.getElementById(
              parseInt(pierwsza) + i + "_" + parseInt(druga)
            ).onclick = function () {};
            document
              .getElementById(
                parseInt(pierwsza) + i + "_" + parseInt(druga)
              )
              .classList.remove("green");
          }
        }
      } else {
        for (let j = 0; j < czerwony.length; j++) {
          for (let i = 0; i < szerkosc; i++) {
            document.getElementById(
              parseInt(pierwsza) + i + "_" + parseInt(druga)
            ).onclick = function () {};
            document
              .getElementById(
                parseInt(pierwsza) + i + "_" + parseInt(druga)
              )
              .classList.remove("red");
          }
        }
      }

      tragedia();
    } else {
      l = 0;

      let dane = Array.from(document.getElementsByClassName("klikniety"));
      let szerkosc = dane[0].id;
      let grupa = Array.from(document.getElementsByClassName("green"));
      let czerwony = Array.from(document.getElementsByClassName("red"));
      if (grupa != "") {
        for (let j = 0; j < grupa.length; j++) {
          for (let i = 0; i < szerkosc; i++) {
            document.getElementById(
              parseInt(pierwsza) + "_" + (parseInt(druga) + i)
            ).onclick = function () {};
            document
              .getElementById(
                parseInt(pierwsza) + "_" + (parseInt(druga) + i)
              )
              .classList.remove("green");
          }
        }
      } else {
        for (let j = 0; j < czerwony.length; j++) {
          for (let i = 0; i < szerkosc; i++) {
            document.getElementById(
              parseInt(pierwsza) + "_" + (parseInt(druga) + i)
            ).onclick = function () {};
            document
              .getElementById(
                parseInt(pierwsza) + "_" + (parseInt(druga) + i)
              )
              .classList.remove("red");
          }
        }
      }

      tragedia();
    }
  });

  for (let m = 0; m < arr.length; m++) {
    for (let n = 0; n < arr.length; n++) {
      let div = document.createElement("div");
      div.classList.add("pole");
      div.id = m + "_" + n;

      div.addEventListener("mouseover", tragedia);

      function tragedia() {
        let wpolzedne = event.target.id.split("_");
        zgodn = true;
        if (arr[wpolzedne[0]][wpolzedne[1]] != 2) {
          flagson = Array.from(
            document.getElementsByClassName("klikniety")
          );
          if ((flagson = "[]")) {
            let dane = Array.from(
              document.getElementsByClassName("klikniety")
            );
            if (dane != "") {
              let szerkosc = dane[0].id;
              if (l == 0) {
                pierwsza = parseInt(wpolzedne[0]);
                druga = parseInt(wpolzedne[1]);
                k = 0;
                for (let i = 0; i < parseInt(szerkosc); i++) {
                  let pl =
                    arr[parseInt(wpolzedne[0]) + i][
                      parseInt(wpolzedne[1])
                    ];
                  if (pl == 2) {
                    k = k + 1;
                  }
                }

                pierwsza = parseInt(wpolzedne[0]) - k;
                for (let i = -1; i < parseInt(szerkosc) + 1; i++) {
                  for (let j = -1; j < 2; j++) {
                    let pl =
                      arr[parseInt(pierwsza) + i][parseInt(druga) + j];
                    if (pl == 1) {
                      zgodn = false;
                    }
                  }
                  j = -1;
                }

                pierwsza = parseInt(wpolzedne[0]) - k;
                druga = parseInt(wpolzedne[1]);

                if (zgodn == true) {
                  for (let i = 0; i < parseInt(szerkosc); i++) {
                    document
                      .getElementById(
                        parseInt(pierwsza) + i + "_" + parseInt(druga)
                      )
                      .classList.add("green");
                  }

                  let grupa = Array.from(
                    document.getElementsByClassName("green")
                  );

                  for (let j = 0; j < grupa.length; j++) {
                    grupa[j].onclick = postawienie;
                    function postawienie() {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) + i + "_" + parseInt(druga)
                          )
                          .classList.add("postawiony");
                        arr[parseInt(pierwsza) + i][parseInt(druga)] = 1;

                        let usuwka = Array.from(
                          document.getElementsByClassName("klikniety")
                        );
                        for (let k = 0; k < usuwka.length; k++) {
                          let klasy = Array.from(usuwka[k].classList);

                          for (let t = 0; t < klasy.length; t++) {
                            usuwka[k].classList.remove(klasy[t]);
                          }
                        }
                      }
                      licznik = licznik + 1;

                      if (licznik == 10) {
                        let puste = document.getElementById("btn");
                        puste.style.display = "inline";
                      }
                      grupa[j].onclick = "";
                    }
                    function stopowanie() {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) + i + "_" + parseInt(druga)
                          )
                          .removeEventListener("click", postawienie);
                      }
                    }
                  }

                  for (let j = 0; j < grupa.length; j++) {
                    grupa[j].addEventListener("mouseout", function () {
                      for (let i = 0; i < szerkosc; i++) {
                        document.getElementById(
                          parseInt(pierwsza) + i + "_" + parseInt(druga)
                        ).onclick = function () {};
                        document
                          .getElementById(
                            parseInt(pierwsza) + i + "_" + parseInt(druga)
                          )
                          .classList.remove("green");
                      }
                    });
                  }
                } else {
                  for (let i = 0; i < parseInt(szerkosc); i++) {
                    document
                      .getElementById(
                        parseInt(pierwsza) + i + "_" + parseInt(druga)
                      )
                      .classList.add("red");
                    sd = Array.from(
                      document.getElementsByClassName("red")
                    );
                    for (let j = 0; j < sd.length; j++) {
                      sd[j].removeEventListener("click", postawienie);
                    }
                  }

                  let grupa = Array.from(
                    document.getElementsByClassName("red")
                  );
                  for (let j = 0; j < grupa.length; j++) {
                    grupa[j].addEventListener("mouseout", function () {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) + i + "_" + parseInt(druga)
                          )
                          .classList.remove("red");
                      }
                    });
                  }
                }
              } else if (l == 1) {
                pierwsza = parseInt(wpolzedne[0]);
                druga = parseInt(wpolzedne[1]);
                k = 0;
                for (let i = 0; i < parseInt(szerkosc); i++) {
                  let pl =
                    arr[parseInt(wpolzedne[0])][
                      parseInt(wpolzedne[1]) + i
                    ];
                  if (pl == 2) {
                    k = k + 1;
                  }
                }

                druga = parseInt(wpolzedne[1]) - k;


                for (let i = -1; i < parseInt(szerkosc) + 1; i++) {
                  for (let j = -1; j < 2; j++) {


                    let pl =
                      arr[parseInt(pierwsza) + j][parseInt(druga) + i];
                    if (pl == 1) {
                      zgodn = false;
                    }
                  }
                  j = -1;
                }

                if (zgodn == true) {
                  for (let i = 0; i < parseInt(szerkosc); i++) {
                    document
                      .getElementById(
                        parseInt(pierwsza) + "_" + (parseInt(druga) + i)
                      )
                      .classList.add("green");
                  }

                  let grupa = Array.from(
                    document.getElementsByClassName("green")
                  );

                  for (let j = 0; j < grupa.length; j++) {
                    grupa[j].onclick = postawienie;
                    function postawienie() {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) +
                              "_" +
                              (parseInt(druga) + i)
                          )
                          .classList.add("postawiony");
                        arr[parseInt(pierwsza)][parseInt(druga) + i] = 1;

                        let usuwka = Array.from(
                          document.getElementsByClassName("klikniety")
                        );
                        for (let k = 0; k < usuwka.length; k++) {
                          let klasy = Array.from(usuwka[k].classList);


                          for (let t = 0; t < klasy.length; t++) {
                            usuwka[k].classList.remove(klasy[t]);
                          }

                        }
                      }
                      licznik = licznik + 1;

                      if (licznik == 10) {
                        let puste = document.getElementById("btn");
                        puste.style.display = "inline";
                      }
                      grupa[j].onclick = "";
                    }
                    function stopowanie() {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) +
                              "_" +
                              (parseInt(druga) + i)
                          )
                          .removeEventListener("click", postawienie);
                      }
                    }
                  }

                  for (let j = 0; j < grupa.length; j++) {

                    grupa[j].addEventListener("mouseout", function () {
                      for (let i = 0; i < szerkosc; i++) {
                        document.getElementById(
                          parseInt(pierwsza) + "_" + (parseInt(druga) + i)
                        ).onclick = function () {};
                        document
                          .getElementById(
                            parseInt(pierwsza) +
                              "_" +
                              (parseInt(druga) + i)
                          )
                          .classList.remove("green");
                      }
                    });
                  }
                } else {
                  for (let i = 0; i < parseInt(szerkosc); i++) {
                    document
                      .getElementById(
                        parseInt(pierwsza) + "_" + (parseInt(druga) + i)
                      )
                      .classList.add("red");
                    sd = Array.from(
                      document.getElementsByClassName("red")
                    );
                    for (let j = 0; j < sd.length; j++) {
                      sd[j].removeEventListener("click", postawienie);
                    }
                  }

                  let grupa = Array.from(
                    document.getElementsByClassName("red")
                  );
                  for (let j = 0; j < grupa.length; j++) {
                    grupa[j].addEventListener("mouseout", function () {
                      for (let i = 0; i < szerkosc; i++) {
                        document
                          .getElementById(
                            parseInt(pierwsza) +
                              "_" +
                              (parseInt(druga) + i)
                          )
                          .classList.remove("red");
                      }
                    });
                  }
                }
              }
            }
          }
        } else {
          event.target.style.backgroundColor = "";
        }
      }

      div.addEventListener("mouseout", function () {
        event.target.style.backgroundColor = "";
      });
      cmp.appendChild(div);
    }
  }
}

function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let el = document.getElementById(i + "_" + j);

      if (
        i == 0 ||
        i == 1 ||
        i == 2 ||
        i == 3 ||
        i == 17 ||
        (i == 16) | (i == 14) ||
        i == 15 ||
        j == 0 ||
        j == 1 ||
        j == 2 ||
        j == 3 ||
        (j == 16) | (j == 14) ||
        j == 15 ||
        j == 17
      ) {
        el.classList.add("zewnatrz");
      } else if (arr[i][j] == 2) {
        el.classList.add("black");
      }
    }
  }
}

function statek(dlugosc, l) {
  let divek = document.createElement("div");
  for (let i = 0; i < dlugosc; i++) {
    let div = document.createElement("div");
    div.classList.add("poleStatku");
    div.classList.add("statek" + l);
    div.id = dlugosc;
    if (l == 1) {
      div.classList.add("klikniety");
    }

    div.addEventListener("mouseover", function () {
      klasa = this.classList;
      ta = document.getElementsByClassName(klasa[1]);
      for (let i = 0; i < ta.length; i++) {
        ta[i].classList.add("najechany");
      }

      this.addEventListener("mouseout", function () {
        klasa = this.classList;
        ta = document.getElementsByClassName(klasa[1]);
        for (let j = 0; j < ta.length; j++) {
          ta[j].classList.remove("najechany");
        }
      });
    });
    div.addEventListener("click", function () {
      klikniete = document.getElementsByClassName("klikniety");
      let ilosc = Array.from(klikniete);
      for (let j = 0; j < ilosc.length; j++) {
        ilosc[j].classList.remove("klikniety");
      }
      klasa = this.classList;
      ta = document.getElementsByClassName(klasa[1]);
      for (let i = 0; i < ta.length; i++) {
        ta[i].classList.add("klikniety");
      }
    });

    divek.appendChild(div);

    document
      .getElementById("statki")
      .appendChild(divek)
      .classList.add("wiersz");
  }
}

/////////////////////////////////////////////////////////////////////Computer//////////////////////////////////////////////////////////

function generateArr1(N) {
  var arr1 = [];
  for (var i1 = 0; i1 < N + 4; i1++) {
    arr1[i1] = [];
    for (var j1 = 0; j1 < N + 4; j1++) {
      if (i1 == 13 || j1 == 13 || i1 == 0 || j1 == 0) {
        arr1[i1][j1] = 2;
      } else {
        arr1[i1][j1] = 0;
      }
    }
  }
  return arr1;
}

function generateDOM1(arr1) {
  var pmc = document.getElementById("pmc");
  for (var i1 = 0; i1 < arr1.length; i1++) {
    for (var j1 = 0; j1 < arr1.length; j1++) {
      var div1 = document.createElement("div");
      div1.classList.add("pole1");
      div1.id = i1 + "_" + j1;
      pmc.appendChild(div1);
    }
  }
}

function render1(arr1) {
  for (var i1 = 0; i1 < arr1.length; i1++) {
    for (var j1 = 0; j1 < arr1.length; j1++) {
      var el1 = document.getElementById(i1 + "_" + j1);

      if (
        i1 == 0 ||
        j1 == 0 ||
        i1 == 13 ||
        j1 == 13 ||
        i1 == 1 ||
        j1 == 1 ||
        i1 == 12 ||
        j1 == 12
      ) {
        el1.classList.add("zewnatrz");
      } else if (arr1[i1][j1] == 1) {
      }
    }
  }
}

function losuj(arr1, dlugosc) {
  flag1 = true;
  while (flag1 == true) {
    zgodnosc1 = true;
    var x1 = Math.round(Math.random() * 10) + 1;
    var y1 = Math.round(Math.random() * 10) + 1;
    if (
      x1 >= 1 &&
      y1 >= 1 &&
      x1 <= 11 - dlugosc + 1 &&
      y1 <= 11 - dlugosc + 1
    ) {
      var pozycja1 = Math.round(Math.random());
      if (pozycja1 == 0) {
        for (var i = -1; i < dlugosc + 1; i++) {
          for (var j = -1; j < 2; j++) {
            var pole1 = arr1[x1 + i][y1 + j];
            if (pole1 == 1 || pole1 == 2) {
              zgodnosc1 = false;
            }
          }
        }
        if (zgodnosc1 == true) {
          for (var i = -1; i < dlugosc + 1; i++) {
            for (var j = -1; j < 2; j++) {
              arr1[x1 + i][y1 + j] = 0;
            }
          }
          for (var k = 0; k < dlugosc; k++) {
            arr1[x1 + k][y1] = 1;
          }
          flag1 = false;
        }
      } else {
        for (var i = -1; i < 2; i++) {
          for (var j = -1; j < dlugosc + 1; j++) {
            var pole1 = arr1[x1 + i][y1 + j];
            if (pole1 != 0) {
              zgodnosc1 = false;
            }
          }
        }
        if (zgodnosc1 == true) {
          for (var i = -1; i < 2; i++) {
            for (var j = -1; j < dlugosc + 1; j++) {
              arr1[x1 + i][y1 + j] = 0;
            }
          }
          for (var k = 0; k < dlugosc; k++) {
            arr1[x1][y1 + k] = 1;
          }
          flag1 = false;
        }
      }
    }
  }
}