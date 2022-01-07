var app = new Vue({
  el: '#app',
  data: {
    
    newMessage: "",
    research:"",
    
    counter: 0,

    // avatarComplete = img/img/avatar + this.avatar .jpg ,
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
            dropdown: false,
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
            dropdown: false,
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
            dropdown: false,
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
            dropdown: false,
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
            dropdown: false,
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
            dropdown: false,
          },
        ],
      },
    
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
            dropdown: false,
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
            dropdown: false,
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
            dropdown: false,
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
            dropdown: false,
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
            dropdown: false,
          },
        ],
      },

      
    ],
    
  },

  // Milestone 2
  // Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
  // Click sul contatto mostra la conversazione del contatto cliccato

  methods: {

    getCounter: function (index) {
      this.counter = index;
      console.log(this.counter);
    },

    // Milestone 3
    // Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
    // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


    pushMessage: function () {
      this.contacts[this.counter].messages.push({
        text: this.newMessage,
        date: "",
        status: "sent",
        dropdown: false,
      });

      this.newMessage = "",

      setTimeout(() => {
        this.contacts[this.counter].messages.push({
          text: "tutto regolare fratopo",
          date: "",
          status: "received",
          dropdown: false,
        });
      }, 3000)
    },


    //Milestone 4
    // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


    search: function () {
      this.contacts.forEach(element => {
        if (element.name.toLowerCase().includes(this.research.toLowerCase())) {
          element.visible = true;
        } else {
          element.visible = false;
        }
      });
    },

    // Milestone 5
    // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

   showDropdown : function () {
     this.contacts[messages.dropdown] = !this.contacts[messages.dropdown]
   },

   deleteMessage: function (index) {
    this.contacts[this.counter].messages.splice(index, 1)
  }

  },


},
)


