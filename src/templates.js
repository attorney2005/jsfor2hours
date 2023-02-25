import {row, col} from "./utils";

function title(block) {
  // return `
  //       <div class="row">
  //           <div class="col-sm">
  //               <h1>${block.value}</h1>
  //           </div>
  //       </div>
  //   `
  const {tag='h1', styles} = block.options

  return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
  return `
    <div class="row">
            <div class="col-sm">
               <p>${block.value}</p>
            </div>
    </div>
    `
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
        <div class="row">
         ${html.join('')}
        </div>
    `
}

function image(block) {
  return `
  <div class="row">
  <img src="${block.value}">
</div>
  `
}

export const templates = {
  title,
  text,
  columns,
  image
}