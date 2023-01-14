 var Viewquiz = document.getElementById('soru_list');
 var Step = 1;
 var trueanswer = 0;
 var falseanswer = 0;
 var Soru = [];
 
 const sorular = [{
         id: 1,
         title: "Türkiyenin başkenti neresidir",
         A: "İstanbul",
         B: "Sivas",
         C: "Ankara",
         D: "Bursa",
         dogrucevap: "Ankara"
     },
     {
         id: 2,
         title: "Atatürk nerede doğmuştur ?",
         A: "İstanbul",
         B: "Selanik",
         C: "Ankara",
         D: "Bursa",
         dogrucevap: "Selanik"
     },
     {
         id: 3,
         title: "Cumhuriyet hangi tarih'te kurulmuştur ?",
         A: "1927",
         B: "1912",
         C: "1919",
         D: "1923",
         dogrucevap: "1923"
     },
     {
         id: 4,
         title: "Duvara asılı bir haritanın sağı her zaman hangi yönü gösterir ?",
         A: "Kuzey",
         B: "Güney",
         C: "Doğu",
         D: "Batı",
         dogrucevap: "Doğu"
     },
     {
        id: 5,
        title: "Türk tarihinin en ünlü mimarı kimdir?",
        A: "Mimar sinan",
        B: "Mimar kemalletin",
        C: "Mehmet akif ersoy",
        D: "Piri reis",
        dogrucevap: "Mimar sinan"
    },
    {
        id: 6,
        title: "Bozkırın tezenesi lakaplı rahmetli halk ozanı kimdir?",
        A: "Kıvırcık ali",
        B: "Neşet ertaş",
        C: "İbrahim tatlıses",
        D: "Kemal sunal",
        dogrucevap: "Neşet ertaş"
    },
    {
        id: 7,
        title: "Duvara asılı bir haritanın sağı her zaman hangi yönü gösterir ?",
        A: "Kuzey",
        B: "Güney",
        C: "Doğu",
        D: "Batı",
        dogrucevap: "Doğu"
    },
    {
        id: 8,
        title: "Çocuk hakları günü hangi tarihte kutlanmaktadır?",
        A: "20 Temmuz",
        B: "10 Ocak",
        C: "20 Kasım",
        D: "1 Eylül",
        dogrucevap: "20 Kasım"
    },
    {
        id: 8,
        title: "Aşağıdaki dağlardan hangisi volkanik bir dağdır?",
        A: "Ağrı dağı",
        B: "Toroslar",
        C: "Erciyes",
        D: "Kartal",
        dogrucevap: "Erciyes"
    }
 ]
 
 function StepView() {
     var StepView = document.getElementById('sorusırası');
     StepView.textContent = Step + "/" + sorular.length;
 }
 
 
 function SoruListele() {
 
     Soru.shift();
     var SoruSıra = sorular.find(x => x.id === Step);
     Soru.push(SoruSıra);
 
     if(SoruSıra != null)
     {
     Soru.forEach((soru) => {
 
         var Sorutitle = document.createElement("p");
         var stepview = document.createElement("p");
         var button1 = document.createElement("button");
         var button2 = document.createElement("button");
         var button3 = document.createElement("button");
         var button4 = document.createElement("button");
         Sorutitle.textContent = soru.title;
         button1.innerText = soru.A;
         button2.innerText = soru.B;
         button3.innerText = soru.C;
         button4.innerText = soru.D;
         button1.setAttribute("id", "answer");
         button2.setAttribute("id", "answer");
         button3.setAttribute("id", "answer");
         button4.setAttribute("id", "answer");
         stepview.setAttribute("id", "sorusırası");
         Viewquiz.appendChild(stepview);
         Viewquiz.appendChild(Sorutitle);
         Viewquiz.appendChild(button1);
         Viewquiz.appendChild(button2);
         Viewquiz.appendChild(button3);
         Viewquiz.appendChild(button4);
         StepView();
         ResfeshButton();
 
     })
    }
    else
    {

        var GameOverTitle = document.createElement("p");
        GameOverTitle.textContent = "Oyun Bitti !";
        var TrueAnswer = document.createElement("p");
        TrueAnswer.textContent = "Doğru Cevap : "+trueanswer;
        var FalseAnswer = document.createElement("p");
        FalseAnswer.textContent = "Yanlış Cevap : "+falseanswer;
        Viewquiz.appendChild(GameOverTitle);
        Viewquiz.appendChild(TrueAnswer);
        Viewquiz.appendChild(FalseAnswer);
    }
 };
 
 function ResfeshButton() {
     var answerbutton = document.querySelectorAll('#answer');
     answerbutton.forEach((button) => {
         button.addEventListener("click", function() {
             if (button.textContent == Soru[0].dogrucevap) {
                 trueanswer++;
 
             } else {
                 falseanswer++;
             }
             Step++;
             Viewquiz.innerHTML = "";
             SoruListele();
 
 
         });
     });
 }