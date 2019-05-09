import React from "react"
import Block from '../Block'
import styles from './styles.module.css'

interface Props  {
  title: string,
  style: string,
  padding: string,
  html: string
}

const ListBlock: React.FunctionComponent<Props> = (props) => {
    const data = [
      {
        'title' : 'linktree',
        'url' : 'https://linktr.ee',
        'svg' : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137 25"><path d="M37.1 24.4V3.6c0-.3.2-.6.6-.6h1.9c.3 0 .6.2.6.6v20.9c0 .3-.2.6-.601.6H37.7c-.3-.1-.6-.3-.6-.7zM44.3 5.5v-2c0-.3.2-.6.6-.6H47c.3 0 .6.2.6.6v2c0 .3-.2.6-.6.6h-2.1c-.4 0-.6-.2-.6-.6zm.1 18.9V9.6c0-.3.3-.6.6-.6h1.8c.3 0 .6.2.6.6v14.9c0 .3-.199.6-.6.6H45c-.3-.1-.6-.3-.6-.7zM51.5 24.4V9.6c0-.3.2-.6.6-.6h1.8c.3 0 .6.2.6.6v1h.1c.6-.8 1.6-1.5 3.1-1.9h.1c2.3-.3 4.1.2 5.3 1.5 1 1.1 1.601 2.5 1.601 4.399v9.899c0 .3-.2.601-.601.601h-1.8c-.3 0-.6-.199-.6-.601v-9.101c0-2.699-1.101-4.101-3.4-4.101-1.1 0-2.1.3-2.8 1s-1 1.601-1 2.7v9.5c0 .3-.2.6-.601.6h-1.8C51.7 25 51.5 24.8 51.5 24.4zM68.2 24.4V3.6c0-.3.2-.6.6-.6h1.8c.3 0 .6.2.6.6v12.6h.1l6.3-6.9c0-.2.2-.3.3-.3h2.3c.5 0 .7.6.399.9L76 15.1c-.2.2-.2.5 0 .7l5.6 8.4c.2.399 0 .899-.5.899h-2a.78.78 0 0 1-.5-.199l-5.1-7.6h-.1l-2.1 2.3c-.1.102-.1.2-.1.4v4.6c0 .3-.2.6-.6.6h-1.8c-.3-.2-.6-.4-.6-.8zM85.3 20v-8.4h-1.8c-.3 0-.602-.2-.602-.6V9.6C83 9.3 83.2 9 83.5 9h1.9V5.7c0-.3.199-.6.601-.6h1.7c.3 0 .6.2.6.6V9h3.4c.3 0 .6.2.6.6V11c0 .3-.199.6-.6.6h-3.4v8.1c0 .899.1 1.5.4 1.899.299.401.799.601 1.599.601h.7c.3 0 .6.2.6.6v1.7c0 .3-.199.6-.6.6h-.9c-1.699 0-2.898-.398-3.699-1.199C85.7 22.9 85.3 21.7 85.3 20zM95.5 24.4V9.6c0-.3.2-.6.5-.6h1.7c.3 0 .6.2.6.6v1.2h.1c.301-.6.801-1.1 1.399-1.5.601-.4 1.2-.5 1.9-.5.3 0 .698 0 1 .1.301.1.401.4.401.6l-.3 1.8c-.1.3-.399.5-.7.4-.199 0-.398-.1-.699-.1-1.899 0-2.899 1.3-2.899 3.9v8.8c0 .3-.2.601-.601.601H96c-.3.099-.5-.101-.5-.501zM116.6 19.8l1.301 1c.199.2.301.5.101.7-.601.9-1.399 1.7-2.3 2.4-1.102.699-2.5 1.1-4 1.1-2.2 0-4-.8-5.4-2.3s-2.1-3.601-2.1-6.101c0-2.601.699-4.601 2.1-6.101s3.1-2.3 5.301-2.3c2.101 0 3.899.8 5.199 2.3 1.301 1.5 2 3.601 2 6.2V17c0 .3-.199.6-.6.6h-10.4c-.3 0-.6.301-.6.602.1 1.1.5 2.1 1.1 2.898.801.9 1.801 1.4 3.2 1.4.7 0 1.3-.1 1.8-.3s1-.5 1.301-.8c.399-.4.601-.7.799-.9.102-.1.201-.3.302-.4.196-.4.596-.5.896-.3zm-9.4-4.7h8.6c-.1-1.199-.399-2.3-1.1-3.1-.7-.9-1.802-1.3-3.2-1.3-1.3 0-2.4.5-3.102 1.4-.798.9-1.198 1.9-1.198 3zM134 19.8l1.3 1c.2.2.3.5.101.7-.601.9-1.399 1.7-2.301 2.4-1.1.699-2.5 1.1-4 1.1-2.199 0-4-.8-5.398-2.3-1.4-1.5-2.102-3.601-2.102-6.101 0-2.601.7-4.601 2.102-6.101 1.398-1.5 3.1-2.3 5.3-2.3 2.101 0 3.899.8 5.2 2.3 1.3 1.5 2 3.601 2 6.2V17c0 .3-.2.6-.602.6h-10.4c-.302 0-.601.301-.601.602.101 1.1.5 2.1 1.101 2.898.8.9 1.8 1.4 3.198 1.4.701 0 1.302-.1 1.802-.3s1-.5 1.3-.8c.398-.4.6-.7.8-.9.101-.1.2-.3.3-.4.2-.4.6-.5.9-.3zm-9.4-4.7h8.602c-.102-1.199-.4-2.3-1.102-3.1-.699-.9-1.8-1.3-3.199-1.3-1.301 0-2.399.5-3.101 1.4-.8.9-1.2 1.9-1.2 3z"/><path d="M11 .7c-.5-.9-1.8-.9-2.3 0L.1 16.3c-.4.8.2 1.7 1.1 1.7H7v5.9c0 .6.5 1.1 1.1 1.1h3.4c.6 0 1.1-.5 1.1-1.1V18H11c-.7 0-1.2-.5-1.3-1.1 0-.2 0-.4.1-.602l4.8-8.7L11 .7z"/><path d="M18.6.7c.5-.9 1.8-.9 2.3 0l8.6 15.6c.4.8-.2 1.7-1.1 1.7h-5.7v5.9c0 .6-.5 1.1-1.101 1.1H18c-.6 0-1.1-.5-1.1-1.1V18h1.6c.7 0 1.2-.5 1.3-1.1 0-.2 0-.4-.1-.602L14.9 7.6 18.6.7z"/></svg>
      },
      {
        'title' :'twenty4',
        'url' : 'https://24digital.com.au',
        'svg' : <svg viewBox="0 0 60 41" ><path d="M15.6002418,26.7137756 C20.6576579,23.2794905 26.3897466,19.3867961 26.3897466,11.9963041 C26.3897466,4.93258907 21.0252132,0 13.3443261,0 C4.23723246,0 0.557409573,7.50172129 0.405329059,7.82125855 L0,8.67160281 L5.6778915,12.4882796 L6.25270986,11.4516757 C6.27635953,11.4085661 8.67253091,7.17724782 12.9688875,7.17724782 C16.3911918,7.17724782 18.6904652,9.26526421 18.6904652,12.3731014 C18.6904652,15.7968559 15.2763727,18.1744632 11.3239216,20.9268933 C6.08059282,24.5783716 0.137956406,28.7172183 0.137956406,36.7599481 C0.137956406,37.637277 0.22762807,38.61333 0.419453167,39.8325736 L0.564635861,40.753012 L26.979346,40.753012 L26.979346,33.9502579 L8.3529319,33.9502579 C9.03483071,31.1731468 12.1063315,29.0864467 15.6002418,26.7137756"></path><path d="M47.1541962,23.8850507 L37.0642882,23.8850507 L47.1541962,11.2729242 L47.1541962,23.8850507 Z M54.4868206,23.8850507 L54.4868206,1.07894737 L46.6119456,1.07894737 L28.9305302,23.7466403 L28.9285714,23.7466403 L28.9285714,30.2015996 L31.3884497,30.2015996 L31.3884497,30.1893395 L47.1541962,30.1893395 L47.1541962,40.4020292 L54.4868206,40.4020292 L54.4868206,30.1893395 L59.4578313,30.1893395 L59.4578313,23.8850507 L54.4868206,23.8850507 Z"></path></svg>
      }
    ]

  const content = () => {
    return (
      <ul>
      {
        data.map(list => (
          <li><a className={styles[list.title]} href={list.url}>{list.svg}</a></li>
        ))
      }
      </ul>
    )
  }

  const style = props.style ? 
    `${styles.container} ${styles[props.style]}` : 
    styles.container;

  const propsData = {...props, style, content}

  return (
    <Block {...propsData} htmlPadding={true} />
  )
}

export default ListBlock
