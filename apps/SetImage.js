import plugin from '../../lib/plugins/plugin.js'
import fetch from 'node-fetch'

export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '.发送图片',
      /** 功能描述 */
      dsc: '发送一张图片',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#来张图$',
          /** 执行方法 */
          fnc: 'image'
        }
      ]
    })
  }

  /**
   * #一言
   * @param e oicq传递的事件参数e
   */
  async image (e) {
    /** e.msg 用户的命令消息 */
    logger.info('[用户命令]', e.msg)
    
    let random = Math.random()*100
    
    let path = segment.image("../resources/${random}.png")
    
    await this.e.reply(segment.image(`${path}`))
    
  }
}