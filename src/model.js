import image from './assets/image.png'
export const model = [
  {type: 'title', value:'Hello World from JS!!!!!!', options:
        {
          teg: 'h3',
          styles: 'background: linear-gradient(to right, #ff0099, #493240); ' +
              'color: #fff; text-align: center; padding: 1.5rem'
        }},
  {type: 'text', value:'here we go with come next'},
  {type: 'columns', value:[
      '111111111',
      '222222222',
      '333333333'
    ]},
  {type: 'image', value: image}
]
