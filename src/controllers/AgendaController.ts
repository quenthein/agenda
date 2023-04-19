import { Coordonnees } from "@/models/Coordonnees";
import Contact from "@/models/Contact";
import User from "@/models/User";
import Agenda from "@/models/Agenda";

class AgendaController {
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    // méthode pour ajouter un agenda à l'utilisateur
    ajouterAgenda(agenda: Agenda): Agenda[] {
        this.user.ajouterAgenda(agenda);
        const agendas = this.user.getAgendas();
        return agendas;
    }


    // méthode pour ajouter un contact à tous les agendas de l'utilisateur
    ajouterContact(nom: string, coordonnees: Coordonnees[]) {
        const agendas = this.user.getAgendas();
        agendas.forEach((agenda) => {
            const contact = new Contact(nom, coordonnees);
            agenda.ajouterContact(contact);
        });
    }

    // méthode pour récupérer tous les contacts de tous les agendas de l'utilisateur
    getContacts(): Contact[] {
        const agendas = this.user.getAgendas();
        const allContacts: Contact[] = [];
        agendas.forEach((agenda) => {
            allContacts.push(...agenda.getContacts());
        });
        return allContacts;
    }

    // méthode pour récupérer un contact par son nom dans tous les agendas de l'utilisateur
    getContactParNom(nom: string): Contact | undefined {
        const agendas = this.user.getAgendas();
        for (const agenda of agendas) {
            const contact = agenda.getContactParNom(nom);
            if (contact) {
                return contact;
            }
        }
        return undefined;
    }

    // méthode pour supprimer un contact par son nom dans tous les agendas de l'utilisateur
    supprimerContact(nom: string): boolean {
        let contactSupprime = false;
        const agendas = this.user.getAgendas();
        for (const agenda of agendas) {
            if (agenda.supprimerContact(nom)) {
                contactSupprime = true;
            }
        }
        return contactSupprime;
    }

    // méthode pour authentifier l'utilisateur
    authentifier(login: string, motDePasse: string): boolean {
        return this.user.authentifier(login, motDePasse);
    }
}

export { AgendaController };
