<template>
  <div>
    <b-table striped hover small fixed :items="items"></b-table>
    <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Selección:</label>
      </b-col>
      <b-col sm="3">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </b-col>
       <b-col sm="3">
        <label :for="`type-${type}`">Puntos:</label>
      </b-col>
      <b-col sm="3">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
  <div class="links">
        <a
          href="/"
          target="_blank"
          class="button--green"
        >
          Añadir
        </a>
        <a
          href="/"
          target="_blank"
          class="button--green"
        >
          Modificar
        </a>
        <a
          href="/"
          target="_blank"
          class="button--green"
        >
          Eliminar
        </a>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        items: [
          { place: 1, team: 'Brasil', points: '18' },
          { place: 2, team: 'Perú', points: '15' },
          { place: 3, team: 'Argentina', points: '12' },
          { place: 4, team: 'Chile', points: '12' },
          { place: 5, team: 'Uruguay', points: '9' },
          { place: 6, team: 'Colombia', points: '9' },
          { place: 7, team: 'Paraguay', points: '6' },
          { place: 8, team: 'Venezuela', points: '3' }
        ],
        types: [
          'text'
        ],
        selected: null,
        options: [
          { value: null, text: 'Please select a team', disabled: true },
          { value: 'Brasil', text: 'Brasil' },
          { value: 'Perú', text: 'Perú' },
          { value: 'Argentina', text: 'Argentina'},
          { value: 'Chile', text: 'Chile'},
          { value: 'Uruguay', text: 'Uruguay'},
          { value: 'Colombia', text: 'Colombia'},
          { value: 'Paraguay', text: 'Paraguay'},
          { value: 'Venezuela', text: 'Venezuela'},
          { value: 'Japón', text: 'Japón', disabled: true },
          { value: 'Qatar', text: 'Qatar', disabled: true },
          { value: 'Ecuador', text: 'Ecuador', disabled: true },
          { value: 'Bolivia', text: 'Bolivia', disabled: true }
        ]
      }
  }
}
</script>