import image from './assets/image.png'
import  {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from "./classes/blocks";

const text = `
Крутые видео и уроки по JavaScript тут: <a href="https://youtube.com/c/VladilenMinin" target="_blank"></a>. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`
export const model = [
    new TitleBlock('Hello World from JS!!!!!!', {
          teg: 'h3',
          styles:{
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff;',
            padding: '1rem',
            'text-align': 'center'
          }
        }),
  new ImageBlock (image, {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Это картинка'

  }),
  new ColumnsBlock([
      'Добро пожаловать на курс JavaScript для начинающих!',
      'В первой статье курса мы дадим базовое определение JavaScript, ',
      'Ответим на вопросы «Что такое JavaScript?» и «Что он делает?»'
    ], {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2 rem',
        color: '#fff;',
        'font-weight': 'bold'
      }
    }
  ),

  new TextBlock(text, {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
      }
  }),

]
