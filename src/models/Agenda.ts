import Contact from './Contact';
import User from './User';

interface IAgenda {
    owner: User;
    contacts: Contact[];
}

class Agenda implements IAgenda {
    owner: User;
    contacts: Contact[];

    constructor(owner: User) {
        this.owner = owner;
        this.contacts = [];
    }

    ajouterContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContactParNom(nom: string): Contact | undefined {
        return this.contacts.find((contact) => contact.getNom() === nom);
    }

    supprimerContact(nom: string): boolean {
        const index = this.contacts.findIndex((contact) => contact.getNom() === nom);
        if (index >= 0) {
            this.contacts.splice(index, 1);
            return true;
        }

        return false;
    }

    getOwner(): User {
        return this.owner;
    }
}

export default Agenda;



