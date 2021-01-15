export default {
  title: 'Vue.js',
  footer: 'vuetify',
  menus: [
    {
      title: '메인',
      icon: 'mdi-view-dashboard',
      subItems: [
        { title: '홈', to: '/' },
        { title: '소개', to: '/about' }
      ]
    },
    {
      title: '자바스크립트',
      icon: 'mdi-language-javascript',
      subItems: [
        { title: '뷰', to: '/js/vue' },
        { title: '리엑트', to: '/js/react' },
        { title: '앵귤러', to: '/js/angular' }
      ]
    },
    {
      active: true,
      title: 'CRUD',
      icon: 'mdi-chat',
      subItems: [
        { title: 'Basic CRUD', to: '/crud/basic' },
        { title: 'Vuetify', to: '/ui/vuetify' }
      ]
    }
  ]
}
