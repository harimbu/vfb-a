<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — {{ footer }}
      <v-btn icon @click="openDialog"><v-icon>mdi-pencil</v-icon></v-btn>
    </v-col>

    <v-dialog v-model="dialog" width="420">
      <v-card>
        <v-card-title class="title">
          사이트 풋터 수정
          <v-spacer></v-spacer>
          <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field label="사이트 풋터" v-model="text" @keyup.enter="save"></v-text-field>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-footer>
</template>
<script>
export default {
  props: ['footer'],
  data() {
    return {
      dialog: false,
      text: this.title
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
      this.text = this.footer
    },
    save() {
      this.$firebase
        .database()
        .ref()
        .child('site')
        .update({ footer: this.text })

      this.dialog = false
    }
  }
}
</script>
