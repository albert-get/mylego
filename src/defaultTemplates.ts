import { textDefaultProps, imageDefaultProps, shapeDefaultProps } from './defaultProps'
const textTemplates = [
  {
    text: '大标题',
    fontSize: '30px',
    fontWeight: 'bold',
    tag: 'h2',
  },
  {
    text: '楷体副标题',
    fontSize: '20px',
    fontFamily: 'KaiTi, STKaiti',
    fontWeight: 'bold',
    tag: 'h2',
  },
  {
    text: '正文内容',
    tag: 'p',
  },
  {
    text: '宋体正文内容',
    tag: 'p',
    fontFamily: 'SimSun, STSong',
  },
  {
    text: 'Arial style',
    tag: 'p',
    fontFamily: 'Arial, sans-serif',
  },
  {
    text: 'Comic Sans',
    tag: 'p',
    fontFamily: 'Comic Sans MS',
  },
  {
    text: 'Courier New',
    tag: 'p',
    fontFamily: '"Courier New", monospace',
  },
  {
    text: 'Times New Roman',
    tag: 'p',
    fontFamily: '"Times New Roman", serif',
  },
  {
    text: '链接内容',
    color: '#1890ff',
    textDecoration: 'underline',
    tag: 'p',
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
    tag: 'button',
  }
]

const defaultTextTemplates = textTemplates.map(template => ({ ...textDefaultProps, ...template }))

const imageTemplate = [{
  src: 'https://static.imooc-lego.com/upload-files/logo-white-735536.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/logo-black-049885.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/528w-0ilmEQMomZ8-108048.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/frame-096161.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/text-449964.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/text2-288504.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/money-664239.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/bag-904186.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/text3-086652.png',
},{
  src: 'https://static.imooc-lego.com/upload-files/text4-145592.png',
}]

const defaultImageTemplates = imageTemplate.map(template => ({ ...imageDefaultProps, ...template }))

const shapeTemplate = [{
  width: '100px',
  height: '50px',
  backgroundColor: '#efefef',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#cccccc'
},{
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  backgroundColor: '#efefef',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#cccccc'
},{
  width: '100px',
  height: '100px',
  backgroundColor: '#efefef',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#cccccc'
},{
  width: '100px',
  height: '50px',
  backgroundColor: '#36cfc9',
},{
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  backgroundColor: '#40a9ff',
},{
  width: '100px',
  height: '100px',
  backgroundColor: '#9254de',
  borderWidth: '10px',
  borderStyle: 'solid',
  borderColor: '#cccccc'
}]

const defaultShapeTemplate = shapeTemplate.map(template => ({ ...shapeDefaultProps, ...template }))


export { defaultTextTemplates, defaultImageTemplates, defaultShapeTemplate }
