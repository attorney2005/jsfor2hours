import image from './assets/image.png'
const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank">Владилен Минин</a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`
export const model = [
  {type: 'title', value:'Hello World from JS!!!!!!', options:
        {
          teg: 'h3',
          styles:{
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff;',
            padding: '1rem',
            'text-align': 'center'
          }
        }},
  {
    type: 'text', value:text, options: {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      }
    }
  },
  {type: 'columns', value:[
      'Добро пожаловать на курс MDN JavaScript для начинающих!',
      'В первой статье курса мы дадим базовое определение JavaScript, ',
      'ответим на вопросы «Что такое JavaScript?» и «Что он делает?», узнаем как работает JavaScript и как добавить его на веб-страницу.'
    ], options: {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2 rem',
      color: '#fff;',
      'font-weight': 'bold'
    }
    }
  },
  {type: 'image', value: image, options:{
    styles: {
      padding: '2 rem 0',
      display: 'flex',
      'justify-content': 'center'
    }
    }

  }
]
