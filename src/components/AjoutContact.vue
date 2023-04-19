<template>

  <v-container>

      <v-card class="mb-5 pa-6">
        <h1>Ajouter un agenda</h1>
        <v-form>
          <v-text-field label="Nom de l'agenda" v-model="nom"></v-text-field>
          <v-btn @click="ajouterAgenda" color="primary">Ajouter</v-btn>
        </v-form>
      </v-card>

      <v-card class="pa-6">
        <h2>Liste des Agendas</h2>
        <ul>
          <li v-for="agenda in agendas" :key="agenda.nom">
            {{ agenda.nom }}
          </li>
        </ul>
      </v-card>

  </v-container>


</template>

<script>
import { AgendaController } from '@/controllers/AgendaController';
import User from '../models/User';
import Agenda from '../models/Agenda';

export default {
  data() {
    return {
      nom: '',
      agendas: [],
    };
  },
  methods: {
    ajouterAgenda() {
      const user = new User('monLogin', 'monMotDePasse', []);
      const controller = new AgendaController(user);
      const agendasAjoutes = controller.ajouterAgenda(this.nom);
      this.agendas = agendasAjoutes;
      this.nom = '';
    },

  },
};
</script>
