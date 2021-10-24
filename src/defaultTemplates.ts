import { textDefaultProps,imageDefaultProps } from 'lego-bricks'
const textTemplates = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2',
    width: '100px',
  },
  {
    text: '正文内容',
    tag: 'p',
    width: '100px',
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p',
    width: '100px',
  },
  {
    text: '按钮内容',
    color: '#ffffff',
    backgroundColor: '#1890ff',
    borderWidth: '1px',
    borderColor: '#1890ff',
    borderStyle: 'solid',
    borderRadius: '2px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    width: '100px',
    tag: 'button',
    textAlign: 'center',
    position: 'absolute',
  }
]

const defaultTextTemplates = textTemplates.map(template => ({ ...textDefaultProps, ...template }))

const imageTemplate = [{
  src: 'https://static.imooc-lego.com/upload-files/logo-white-735536.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/logo-black-049885.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/528w-0ilmEQMomZ8-108048.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/frame-096161.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/text-449964.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/text2-288504.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/money-664239.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/bag-904186.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/text3-086652.png'
},{
  src: 'https://static.imooc-lego.com/upload-files/text4-145592.png'
}]

const defaultImageTemplates = imageTemplate.map(template => ({ ...imageDefaultProps, ...template }))
export { defaultTextTemplates, defaultImageTemplates }
