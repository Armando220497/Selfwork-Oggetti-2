let rubrica = {
    'contacts': [
        { nome: 'Nicola', telefono: '3331111111' },
        { nome: 'Lorenzo', telefono: '3332222222' },
        { nome: 'Paola', telefono: '3333333333' },
        { nome: 'Jenny', telefono: '3334444444' },
    ],
    'mostraContatti': function () {
        console.log("Mostra tutti i contatti");
        this.contacts.forEach((contact) => console.log(contact.nome + ": " + contact.telefono));
        console.log("");
    },

    'mostraUnContatto': function (indice) {
        let contatto = this.contacts[indice];
        console.log("Mostra un contatto: ");
        console.log(contatto.nome + ": " + contatto.telefono);
        console.log("");
    },

    'eliminaContatto': function (indice) {
        let nomeEliminato = this.contacts[indice].nome;
        let telefonoEliminato = this.contacts[indice].telefono;
        this.contacts.splice(indice, 1);
        console.log("Il contatto " + nomeEliminato + " è stato eliminato.");
        console.log("");
    },

    'aggiungiContatto': function (nome, telefono) {
        this.contacts.push({ nome: nome, telefono: telefono });
        console.log("Il contatto aggiunto è " + nome + ": " + telefono);
        console.log("");
    },

    'modificaContatto': function (indice, newNome, newTelefono) {
        let oldNome = this.contacts[indice].nome;
        let oldTelefono = this.contacts[indice].telefono;

        this.contacts[indice].nome = newNome;
        this.contacts[indice].telefono = newTelefono;

        console.log("Il numero di " + oldNome + " è stato modificato in : " + newTelefono);

    }
};

// Mostra tutti i contatti 
rubrica.mostraContatti();

// Mostra un contatto specifico
let indiceContatto = 3;
rubrica.mostraUnContatto(indiceContatto);

// Elimina un contatto
let indiceDaEliminare = 2;
rubrica.eliminaContatto(indiceDaEliminare);


// Aggiungi un nuovo contatto
rubrica.aggiungiContatto('Marco', '3335555555');

// Modifica un contatto
let indiceDaModificare = 1;
rubrica.modificaContatto(indiceDaModificare, 'Lorenzo', '3337777777');

